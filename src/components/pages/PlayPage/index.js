import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, font, size } from 'styled-theme'
import {
  PageTemplate,
  ContainerLimited,
  OfferPanel,
  OfferCard,
  PlayIncreaseModule,
  WinWheelSVG,
  WinProductsTable,
  WinBadge,
  ShoppingItemMobilePopup,
} from 'components'

import { playPageGradient } from '../../themes/gradients'
import { winWheelReveal, winWheelHide, prizeBadgeReveal } from '../../themes/keyframes'

const PageWrapper = styled.div`
  position: relative;
  ${playPageGradient};
  padding-bottom: 20px;
  
  ${size('mobileMediaQuery')} {
    overflow: hidden;
  }
`

const DummyForFireworks = styled.div`
  width: 100%;
  height: ${props => props.height ? props.height : 500}px;
`
DummyForFireworks.propTypes = {
  height: PropTypes.number,
}

const mobileHeightShiftCSS = css`
  margin-top: 50px;
`

const GameHolder = styled.div`
  ${size('mobileMediaQuery')} {
    ${mobileHeightShiftCSS};
  }
`

const hideWheelAnimationCSS = css`
  animation: ${winWheelHide} 1s ease forwards 1;
`
const WinWheelRestyled = styled(WinWheelSVG)`
  position: absolute;
  top: ${props => props.yPos ? props.yPos : '50%'}px;
  left: 50%;
  transform: translate(-50%, 10%);
  animation: ${winWheelReveal} 1.5s ease 0.5s forwards 1;
  z-index: 50;
  
  ${props => props.animateWheelHiding && hideWheelAnimationCSS};
  
  ${size('mobileMediaQuery')} {
    ${mobileHeightShiftCSS};
  }
`
WinWheelRestyled.propTypes = {
  yPos: PropTypes.number,
  animateWheelHiding: PropTypes.bool,
}

const GameControls = styled.div`
  position: relative;
  
  max-height: 180px;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  
  background-color: ${palette('grey', 0)};
  box-shadow: inset 3px 3px 6px rgba(0,0,0,0.4), 
              inset -1px -1px 2px rgba(0,0,0,0.4);
  
  z-index: 50;
  
  ${size('mobileMediaQuery')} {
    box-shadow: none;
    justify-content: center;
  }
`

const OfferCardRestyled = styled(OfferCard)`
  margin-bottom: 25px;
  
  ${size('mobileMediaQuery')} {
    position: absolute;
    top: -255%;
    ${props => props.rightShifted ? 'right: -10px;' : 'left: -10px;'};
    transform: scale(0.8);
    ${props => props.isMobileHidden && 'display: none;'};
  }
`
OfferCardRestyled.propTypes = {
  rightShifted: PropTypes.bool,
  isMobileHidden: PropTypes.bool,
}

const WinProductsTableRestyled = styled(WinProductsTable)`
  position: relative;
  z-index: 50;
  box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 50;
  
  & > * {
    max-width: 26%;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
  }
  
  ${size('mobileMediaQuery')} {
    flex-direction: column;
    & > * {
      max-width: 1000%;
      margin-top: 10px;
    }  
  }
`

const RowTitle = styled.h2`
  font-size: ${size('textTitleLarge')};
  font-family: ${font('main')};
  color: ${palette('grey', 0)};
  text-align: center;
  margin: 30px 0 20px;
  position: relative;
  z-index: 50;
`

const WinBadgeRestyled = styled(WinBadge)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 5%);
  z-index: 40;
  
  animation: ${prizeBadgeReveal} 0.5s ease forwards 1;
`

function getOfferCard({ offer, isRightSide, onOfferClick, isMobileHidden }) {
  return (
    <OfferCardRestyled
      id={offer.id}
      image={offer.image}
      title={offer.title}
      odds={offer.odds}
      usersDone={offer.usersDone}
      usersDoneTotal={offer.usersDoneTotal}
      rightShifted={isRightSide}
      isMobileHidden={isMobileHidden}
      onButtonClick={onOfferClick}
    />
  )
}

getOfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  isRightSide: PropTypes.bool,
  isMobileHidden: PropTypes.bool,
  onOfferClick: PropTypes.func.isRequired,
}

function getGameOffers(offers, onOfferClick, isMobileHidden) {
  let leftOffer = null
  let rightOffer = null

  if (offers.length > 0) {
    if (offers[0]) leftOffer = getOfferCard({ offer: offers[0], onOfferClick, isMobileHidden })
    if (offers[1]) rightOffer = getOfferCard({ offer: offers[1], isRightSide: true, onOfferClick, isMobileHidden })
  }

  return {
    leftOffer, rightOffer,
  }
}

function getOfferPanels(offers, onOfferClick) {
  return offers.map(offer => (
    <OfferPanel
      id={offer.id}
      key={offer.id}
      image={offer.image}
      title={offer.title}
      description={offer.description}
      usersDone={offer.usersDone}
      usersDoneTotal={offer.usersDoneTotal}
      earnAmount={offer.earnAmount}
      currency={offer.currency}
      onOfferClick={onOfferClick}
    />
  ))
}

const PlayPage = ({
                    gameOffers: gameOffersData,
                    earnOffers: earnOffersData,
                    onOfferClick,
                    currency,
                    betAmount,
                    betLimitPercent,
                    onPlayBtnClick,
                    onDecreaseBet,
                    onIncreaseBet,
                    shoppedItems,
                    onShoppedItemClick,
                    onGetMoreShoppedItems,
                    winWheelItems,
                    onConnectWheelAsChild,
                    onWheelSpinComplete,
                    animateWheelHiding,
                    shoppedItemSelected,
                    winBadgeImage,
                    winBadgeTitle,
                    onCloseWinBadge,

                    itemPopup,
                    onMobileItemGetInfoClick,
                  }) => {
  const gameOffers = getGameOffers(gameOffersData, onOfferClick, !!winBadgeImage)
  const earnOffers = getOfferPanels(earnOffersData, onOfferClick)

  const HEIGHT = 400

  const winBadgeElement = winBadgeImage && (
    <WinBadgeRestyled
      image={winBadgeImage}
      title={winBadgeTitle}
      onClose={onCloseWinBadge}
    />
  )

  return (
    <PageTemplate>
      <PageWrapper>
        <ContainerLimited noMobilePadding>
          <DummyForFireworks height={HEIGHT} />
          <GameHolder>
            <WinWheelRestyled
              size={HEIGHT + (HEIGHT * 0.25)}
              yPos={HEIGHT}
              winWheelItems={winWheelItems}
              onRef={onConnectWheelAsChild}
              onWheelSpinComplete={onWheelSpinComplete}
              animateWheelHiding={animateWheelHiding}
            />
            <GameControls>
              {gameOffers.leftOffer && gameOffers.leftOffer}
              <PlayIncreaseModule
                currency={currency}
                betAmount={betAmount}
                progressPercent={betLimitPercent}
                onPlayBtnClick={onPlayBtnClick}
                onMinusButtonClick={onDecreaseBet}
                onPlusButtonClick={onIncreaseBet}
              />
              {gameOffers.rightOffer && gameOffers.rightOffer}
            </GameControls>
            {winBadgeElement}
          </GameHolder>
          <WinProductsTableRestyled
            items={shoppedItems}
            onItemClick={onShoppedItemClick}
            onGetMoreItemsClick={onGetMoreShoppedItems}
            shoppedItemSelected={shoppedItemSelected}
            onMobileItemGetInfoClick={onMobileItemGetInfoClick}
          />
        </ContainerLimited>
        <ContainerLimited>
          <RowTitle>Earn with picks of the day</RowTitle>
          <Row>
            {earnOffers}
          </Row>
        </ContainerLimited>
      </PageWrapper>
      {itemPopup && <ShoppingItemMobilePopup {...itemPopup} onClose={onMobileItemGetInfoClick} />}
    </PageTemplate>
  )
}

PlayPage.propTypes = {
  // Offers props
  gameOffers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      currency: PropTypes.string,
      earnAmount: PropTypes.number,
      odds: PropTypes.string,
      usersDone: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })),
      usersDoneTotal: PropTypes.number,
    }),
  ),
  earnOffers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      currency: PropTypes.string,
      earnAmount: PropTypes.number,
      odds: PropTypes.string,
      usersDone: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })),
      usersDoneTotal: PropTypes.number,
    }),
  ),
  onOfferClick: PropTypes.func.isRequired,
  // End of offers props

  // PlayButtonModule props
  currency: PropTypes.string,
  betAmount: PropTypes.number.isRequired,
  betLimitPercent: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onDecreaseBet: PropTypes.func.isRequired,
  onIncreaseBet: PropTypes.func.isRequired,
  // End of PlayButtonModule props

  // WinTable props
  shoppedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      retailer: PropTypes.string.isRequired,
      odds: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onShoppedItemClick: PropTypes.func.isRequired,
  onGetMoreShoppedItems: PropTypes.func.isRequired,
  shoppedItemSelected: PropTypes.object,
  // End of WinTable props

  // Winning wheel props
  winWheelItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  onConnectWheelAsChild: PropTypes.func.isRequired,
  onWheelSpinComplete: PropTypes.func.isRequired,
  animateWheelHiding: PropTypes.bool,
  // End of winning wheel props

  // WinBadge
  // winBadge: PropTypes.objectOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  // })),
  winBadgeImage: PropTypes.string.isRequired,
  winBadgeTitle: PropTypes.string.isRequired,
  onCloseWinBadge: PropTypes.func.isRequired,

  itemPopup: PropTypes.object,
  onMobileItemGetInfoClick: PropTypes.func,
}

export default PlayPage
