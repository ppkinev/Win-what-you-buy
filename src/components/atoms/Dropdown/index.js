import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { font, palette, size } from 'styled-theme'
import { iconsPath } from '../../../config'

const Select = styled.select`
  font-family: ${font('main')};
  font-size: ${size('textSubtitle')};
  color: ${palette('main', 0)};
  border: none;
  background: url('${iconsPath}/icon-caret-double.svg') no-repeat;
  background-position: right center;
  padding-right: 15px;
  outline: none;
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
`

const Dropdown = ({ className, items, onChange, selectedItem }) => {
  const options = items.map(item => (
    <option
      key={item.id || item.value}
      value={item.id || item.value}
    >{item.value}</option>
  ))
  return <Select className={className} onChange={onChange} value={selectedItem}>{options}</Select>
}
Dropdown.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItem: PropTypes.string,
}

export default Dropdown
