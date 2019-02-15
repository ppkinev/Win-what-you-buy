import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PlayPage } from 'components'
import { randomIntFromInterval } from '../../services/helpers'

import { offerPopupOpen } from 'store/actions'

// Dummy data
import dummyOffers from './dummy/offers'
import winItems from './dummy/items'

const CURRENCY = '£'
const offers = dummyOffers.map(offer => {
  offer.currency = CURRENCY
  return offer
})

const getPercent = (value = 1, max) => (value / max) * 100

const WALLET_CURRENCY_AMOUNT = 75

class PlayPageContainer extends Component {
  constructor(props) {
    super(props)

    this.onOfferClick = this.onOfferClick.bind(this)
    this.onShoppedItemClick = this.onShoppedItemClick.bind(this)
    this.onGetMoreShoppeditems = this.onGetMoreShoppeditems.bind(this)
    this.onBetAmounIncrease = this.onBetAmounIncrease.bind(this)
    this.onBetAmountDecrease = this.onBetAmountDecrease.bind(this)
    this.onGameStart = this.onGameStart.bind(this)
    this.onWinSpinComplete = this.onWinSpinComplete.bind(this)
    this.onHideWinWheel = this.onHideWinWheel.bind(this)
    this.onWinBadgeClose = this.onWinBadgeClose.bind(this)
    this.onWinBadgeShow = this.onWinBadgeShow.bind(this)
    this.onMobileItemGetInfoClick = this.onMobileItemGetInfoClick.bind(this)

    this.state = {
      betAmount: WALLET_CURRENCY_AMOUNT,
      betLimitPercent: 100,
      winItemSelected: winItems[0] || null,
      animateWheelHiding: false,
      winBadge: null,
      itemPopup: null,
    }
  }

  onOfferClick(offer) {
    this.props.offerPopupOpen(offer)
  }

  onShoppedItemClick(id) {
    this.setState({
      winItemSelected: winItems.find(item => item.id === id),
    }, () => {
      this.onRevealWinWheel()
    })
  }

  onMobileItemGetInfoClick(item) {
    this.setState({ itemPopup: item })
  }

  onGetMoreShoppeditems() {
    console.info('GET MORE')
  }

  onBetAmounIncrease() {
    const betAmount = Math.min(this.state.betAmount + 1, WALLET_CURRENCY_AMOUNT)
    this.setState({
      betAmount,
      betLimitPercent: getPercent(betAmount, WALLET_CURRENCY_AMOUNT),
    })
  }

  onBetAmountDecrease() {
    const betAmount = Math.max(this.state.betAmount - 1, 0)
    this.setState({
      betAmount,
      betLimitPercent: getPercent(betAmount, WALLET_CURRENCY_AMOUNT),
    })
  }

  onGameStart() {
    const { winItemSelected } = this.state
    const wheelAmount = winItemSelected.secondaryWinnings.length + 1
    const winSegment = Math.floor(Math.random() * wheelAmount) + 1

    // const segmentWidth = 360 / wheelAmount
    // const winningSegmentMiddle = (segmentWidth * winSegment) - (segmentWidth / 2)
    // const stopAt = randomIntFromInterval(winningSegmentMiddle - (segmentWidth * 0.3), winningSegmentMiddle + (segmentWidth * 0.3))

    this.wheel.onWheelSpin(winSegment)
  }

  onHideWinWheel() {
    this.setState({ animateWheelHiding: true })
  }

  onRevealWinWheel() {
    this.setState({ animateWheelHiding: false, winBadge: null })
  }

  onWinBadgeShow({ image, title }) {
    this.setState({ winBadge: { image, title } })
  }

  onWinBadgeClose() {
    const { winItemSelected } = this.state
    this.setState({ winBadge: null })

    let nextItem
    winItems.forEach((item, ind) => {
      if (item.id === winItemSelected.id) {
        nextItem = winItems[ind + 1]
      }
    })

    nextItem = nextItem || winItems[0]

    this.setState({
      winItemSelected: nextItem,
    }, this.onRevealWinWheel)
  }

  onWinSpinComplete(segment) {
    this.onHideWinWheel()
    this.onWinBadgeShow({
      image: segment.image,
      title: segment.title,
    })
  }

  render() {
    const { betAmount, betLimitPercent, winItemSelected, animateWheelHiding, winBadge, itemPopup } = this.state
    const connectWheelToParent = ref => (this.wheel = ref)
    const limitedWinItems = winItems.slice(0, 5)

    const gameOffers = offers.filter(offer => offer.odds && offer)
    const earnOffers = offers.filter(offer => (offer.earnAmount && !offer.odds) && offer).slice(0, 3)

    const winWheelItems = [
      {
        id: winItemSelected.id,
        text: winItemSelected.title,
        image: winItemSelected.image,
        mainPrize: true,
      },
      ...winItemSelected.secondaryWinnings,
    ]

    return (
      <PlayPage
        currency={CURRENCY}

        gameOffers={gameOffers}
        earnOffers={earnOffers}
        onOfferClick={this.onOfferClick}

        betAmount={betAmount}
        betLimitPercent={betLimitPercent}
        onPlayBtnClick={this.onGameStart}
        onDecreaseBet={this.onBetAmountDecrease}
        onIncreaseBet={this.onBetAmounIncrease}

        shoppedItems={limitedWinItems}
        onShoppedItemClick={this.onShoppedItemClick}
        onGetMoreShoppedItems={this.onGetMoreShoppeditems}
        shoppedItemSelected={winItemSelected}

        winWheelItems={winWheelItems}
        onWheelSpinComplete={this.onWinSpinComplete}
        onConnectWheelAsChild={connectWheelToParent}
        animateWheelHiding={animateWheelHiding}

        winBadgeImage={winBadge ? winBadge.image : ''}
        winBadgeTitle={winBadge ? winBadge.title : ''}
        onCloseWinBadge={this.onWinBadgeClose}

        itemPopup={itemPopup}
        onMobileItemGetInfoClick={this.onMobileItemGetInfoClick}
      />
    )
  }
}

PlayPageContainer.propTypes = {
  offerPopupOpen: PropTypes.func,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  offerPopupOpen: offer => dispatch(offerPopupOpen(offer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayPageContainer)
