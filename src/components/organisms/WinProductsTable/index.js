import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, size, font } from 'styled-theme'
import isMobile from 'ismobilejs'

import WinProductsImage from './WinProductsImage'
import WinProductsButton from './WinProductsButton'
import WinProductsMoreButton from './WinProductsMoreButton'

const ROW_HEIGHT = 60
const CELL_WIDTH = { width: '15%' }

const Table = styled.div`
  font-family: ${font('main')};
  width: 100%;
  background-color: ${palette('grey', 0)};
  font-size: ${size('textRegular')};
  text-transform: uppercase;
`

const Head = styled.div`
  background-color: ${palette('main', 1)};
  color: ${palette('grey', 0)};
  line-height: 50px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  text-align: center;
  
  ${size('mobileMediaQuery')} {
    margin-bottom: 10px;
  }
`

const CellHead = styled.div`
  &:first-child {
    width: 30%;
    text-align: left;
    justify-content: flex-start;
  }
  &:last-child {
    width: 24%;
    justify-content: flex-end;
  }
   
  ${size('mobileMediaQuery')} {
    &:last-child, &:first-child { width: 25%; }
    width: 25%;  
  }
`

const TableBody = styled.div`
  padding: 0 10px 1px;
  
  ${size('mobileMediaQuery')} {
    padding: 0;  
  }
`

const tableRowSelectedCSS = css`
  color: ${palette('grey', 0)};
  background-color: ${palette('main', 2)};
`
const TableRow = styled.div`
  background-color: ${palette('grey', 1)};
  height: ${ROW_HEIGHT}px;
  margin: 10px 0;
  border-radius: 6px;
  
  overflow: hidden;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  color: ${palette('text', 0)};
  
  ${props => props.isSelected && tableRowSelectedCSS};
`
TableRow.propTypes = {
  isSelected: PropTypes.bool,
}

const mobileRowSelectedCSS = css`
  color: ${palette('grey', 0)};
  background-color: ${palette('main', 2)};
  
  & > *:last-child {
    color: ${palette('main', 0)};  
  }
`
const MobileRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${palette('grey', 2)};
  
  ${props => props.isSelected && mobileRowSelectedCSS};
`
MobileRow.propTypes = {
  isSelected: PropTypes.bool,
}
const MobileRowTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  
  & > * {
    width: 20% !important;
    &:first-child { width: 20% !important;  }
    &:last-child { width: 30% !important; }  
  }
`

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  text-align: center;
  justify-content: center;
  
  &:first-child {
    width: 30%;
    text-align: left;
    justify-content: flex-start;
  }
  
  &:last-child {
    width: 24%;
    justify-content: center;
  }
`

function getProductRows({ items, onItemClick, shoppedItemSelected, onMobileItemGetInfoClick }) {
  return items.map((item) => {
    const itemClick = () => {
      onItemClick(item.id)
    }
    const isSelected = item.id === shoppedItemSelected.id

    const onMobileRowClick = (ev) => {
      if (ev.target.nodeName !== 'BUTTON') {
        onMobileItemGetInfoClick(item)
      }
    }
    return !isMobile.any ? (
      <TableRow key={item.id} isSelected={isSelected}>
        <Cell>
          <WinProductsImage isSelected={isSelected} src={item.image} size={ROW_HEIGHT} /> {item.title}
        </Cell>
        <Cell style={CELL_WIDTH}>&pound;{item.price}</Cell>
        <Cell style={CELL_WIDTH}>{item.retailer}</Cell>
        <Cell style={CELL_WIDTH}>{item.points}</Cell>
        <Cell>
          {isSelected
            ? `${item.odds} to win`
            : (<WinProductsButton onClick={itemClick}>{item.odds} to win</WinProductsButton>)
          }
        </Cell>
      </TableRow>
    ) : (
      <MobileRow key={item.id} isSelected={isSelected} onClick={onMobileRowClick}>
        <MobileRowTop>
          <Cell>
            <WinProductsImage isSelected={isSelected} src={item.image} size={ROW_HEIGHT} />
          </Cell>
          <Cell>&pound;{item.price}</Cell>
          <Cell>{item.points}</Cell>
          <Cell>
            {isSelected
              ? `${item.odds} to win`
              : (<WinProductsButton onClick={itemClick}>{item.odds} to win</WinProductsButton>)
            }
          </Cell>
        </MobileRowTop>
      </MobileRow>
    )
  })
}

const MAX_ITEMS_WITHOUT_MORE_BTN = 5
const WinProductsTable = ({ className, items, onItemClick, onGetMoreItemsClick, shoppedItemSelected, onMobileItemGetInfoClick }) => {
  const headerDesktop = (
    <Head>
      <CellHead>Product</CellHead>
      <CellHead style={CELL_WIDTH}>Price</CellHead>
      <CellHead style={CELL_WIDTH}>Retailer</CellHead>
      <CellHead style={CELL_WIDTH}>Points</CellHead>
      <CellHead>Odds</CellHead>
    </Head>
  )
  const headerMobile = (
    <Head>
      <CellHead>Product</CellHead>
      <CellHead>Price</CellHead>
      <CellHead>Points</CellHead>
      <CellHead>Odds</CellHead>
    </Head>
  )
  return (
    <Table className={className}>
      {!isMobile.any ? headerDesktop : headerMobile}
      <TableBody>
        {getProductRows({ items, onItemClick, shoppedItemSelected, onMobileItemGetInfoClick })}
      </TableBody>

      {(items.length <= MAX_ITEMS_WITHOUT_MORE_BTN)
      && <WinProductsMoreButton onClick={onGetMoreItemsClick} />}
    </Table>
  )
}

WinProductsTable.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
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
  onItemClick: PropTypes.func.isRequired,
  onGetMoreItemsClick: PropTypes.func.isRequired,
  shoppedItemSelected: PropTypes.object,

  onMobileItemGetInfoClick: PropTypes.func,
}

export default WinProductsTable
