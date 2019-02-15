import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCashbackCategoriesRequest, getCashbackRetailersRequest } from 'store/actions'
import { fromCashback, fromUser } from 'store/selectors'

import { imagesPath } from '../../config'
import RetailersPage from '../../components/pages/RetailersPage'

const USER_ID = 'user-id'

const TAKE = 50
const html = window.document.querySelector('html')

class RetailersPageContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCategory: 'all',
      searchValue: '',
      skip: 0,
    }

    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onLazyScroll = this.onLazyScroll.bind(this)

    this.searchTimeout = null
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getRetailers()

    window.addEventListener('scroll', this.onLazyScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onLazyScroll)
  }

  onListUpdate() {
    const { selectedCategory, searchValue, skip } = this.state
    this.props.getRetailers({
      categoryId: selectedCategory === 'all' ? undefined : selectedCategory,
      query: searchValue || undefined,
      skip,
      take: TAKE,
    })
  }

  onLazyScroll() {
    if (html.clientHeight + html.scrollTop >= html.scrollHeight) {
      this.setState({ skip: this.state.skip += TAKE }, this.onListUpdate)
    }
  }

  onCategoryChange(ev) {
    const categoryId = ev.target.value
    this.setState({ selectedCategory: categoryId, skip: 0 }, this.onListUpdate)
  }

  onSearch(ev) {
    this.setState({ searchValue: ev.target.value, skip: 0 })

    if (this.searchTimeout) {
      window.clearTimeout(this.searchTimeout)
    }

    this.searchTimeout = window.setTimeout(() => {
      this.onListUpdate()
    }, 500)
  }

  render() {
    const { searchValue, selectedCategory } = this.state
    const { categories, retailers, userId = '' } = this.props

    const affiliateReadyRetailers = retailers.map(ret => ({
      ...ret,
      cashbackUrl: ret.cashbackUrl.replace(/\[TID]/g, userId),
    }))

    return (
      <RetailersPage
        userId={USER_ID}
        items={affiliateReadyRetailers}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={this.onCategoryChange}

        onSearch={this.onSearch}
        searchValue={searchValue}
      />
    )
  }
}

RetailersPageContainer.propTypes = {
  categories: PropTypes.array,
  retailers: PropTypes.array,

  getCategories: PropTypes.func,
  getRetailers: PropTypes.func,

  userId: PropTypes.string,
}

const mapStateToProps = state => ({
  categories: fromCashback.getCashbackCategories(state),
  retailers: fromCashback.getCashbackRetailers(state),
  userId: fromUser.getProfileInfo(state).id,
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCashbackCategoriesRequest()),
  getRetailers: params => dispatch(getCashbackRetailersRequest(params || {})),
})

export default connect(mapStateToProps, mapDispatchToProps)(RetailersPageContainer)
