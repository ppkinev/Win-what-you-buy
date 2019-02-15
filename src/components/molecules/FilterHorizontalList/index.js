import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, size, palette } from 'styled-theme'

const Holder = styled.div`
  width: 100%;
  height: 42px;
  
  border-bottom: 1px solid ${palette('grey', 2)};
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

const itemCSS = css`
  color: ${palette('text', 0)};
  border-bottom: 4px solid transparent;
`
const activeItemCSS = css`
  color: ${palette('main', 0)};
  border-bottom: 4px solid ${palette('main', 0)};
`
const Item = styled.div`
  font-family: ${font('main')}; 
  font-size: ${size('textRegular')};
  font-weight: 400;
  cursor: pointer;
  padding: 0 15px;
  line-height: 32px;
  transition: border-bottom 0.3s ease;
  
  ${props => props.isActive ? activeItemCSS : itemCSS};
`

Item.propTypes = {
  isActive: PropTypes.bool,
}

const FilterHorizontalList = ({ className, items, activeItemID, onItemClick }) => {
  const reactItems = items.map((item) => {
    const { id, value } = item
    const onClick = () => onItemClick(id)

    return (
      <Item isActive={id === activeItemID} onClick={onClick} key={id}>{value}</Item>
    )
  })

  return (
    <Holder className={className}>
      {reactItems}
    </Holder>
  )
}

FilterHorizontalList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      value: PropTypes.string,
    },
  )).isRequired,
  activeItemID: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default FilterHorizontalList
