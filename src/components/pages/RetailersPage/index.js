import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'

import PageTemplate from '../../templates/PageTemplate'
import ContainerLimited from '../../atoms/ContainerLimited'
import RetailerSearch from '../../molecules/RetailerSearch'
import RetailerItem from '../../molecules/RetailerItem'

const MAX = 800

const Wrapper = styled.div`
  background-color: ${palette('main', 0)};
  padding: 30px 0;
`

const ItemsPanelHolder = styled.div`
  text-align: center;
`
const ItemPanelSeparator = styled.div`
  position: relative;
`

const ItemsPanelTitle = styled.h4`
  position: relative;
  display: inline-block;
  z-index: 5;
  font-size: ${size('menuItems')};
  color: ${palette('grey', 0)};
  background-color: ${palette('main', 0)};
  padding: 4px 10px;
`
const ItemsPanelLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette('grey', 0)};
  position: absolute;
  top: 50%;
  z-index: 1;
  opacity: 0.5;
`
const ItemsPanelList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  
  & > * {
    margin: 15px 5px;
  }
`

const Container = styled(ContainerLimited)`
  max-width: ${MAX}px;
`

const ItemsPanel = ({ title, children }) => {
  return (
    <ItemsPanelHolder>
      <ItemPanelSeparator>
        <ItemsPanelLine />
        <ItemsPanelTitle>{title}</ItemsPanelTitle>
      </ItemPanelSeparator>
      <ItemsPanelList>{children}</ItemsPanelList>
    </ItemsPanelHolder>
  )
}
ItemsPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

const RetailersPage = ({
                         items,
                         userId,

                         categories,
                         selectedCategory,
                         onCategoryChange,

                         onSearch,
                         searchValue,
                       }) => {
  const featuredItems = items.filter(item => item.isFeatured)
  const featuredItemsPanel = featuredItems && featuredItems.length > 0 && (
    <ItemsPanel title={'Featured retailers'}>
      {featuredItems.map(item => <RetailerItem key={item.id} {...item} />)}
    </ItemsPanel>
  )
  const otherItems = items.filter(item => !item.isFeatured)
  const otherItemsPanel = otherItems && otherItems.length > 0 && (
    <ItemsPanel title={'Retailers'}>
      {otherItems.map(item => <RetailerItem key={item.id} {...item} userId={userId} />)}
    </ItemsPanel>
  )
  return (
    <PageTemplate>
      <Wrapper>
        <Container>
          <RetailerSearch
            searchValue={searchValue}
            onSearch={onSearch}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
          {featuredItemsPanel}
          {otherItemsPanel}
        </Container>
      </Wrapper>
    </PageTemplate>
  )
}

RetailersPage.propTypes = {
  userId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    cashbackUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comissionValue: PropTypes.number,
    comissionType: PropTypes.string,
    isFeatured: PropTypes.bool,
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,

  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}

export default RetailersPage
