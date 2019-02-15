import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import Dropdown from '../../atoms/Dropdown'

const HEIGHT = 50

const Wrapper = styled.div`
  text-align: center;
`

const Holder = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: ${HEIGHT}px;
  border: 1px solid ${palette('grey', 1)};
  border-radius: 4px;
  
  width: 100%;
  max-width: 600px;
`

const CategoriesHolder = styled.div`
  padding: 0 10px;
  flex-grow: 1;
  height: 100%;
  background-color: ${palette('grey', 0)};
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const Categories = styled(Dropdown)`
  min-width: 90%;
`

const Search = styled.input.attrs({
  placeholder: 'Search for retailer..',
})`
  background-color: rgba(255,255,255,0.7);
  box-sizing: border-box;
  height: ${HEIGHT}px;
  line-height: ${HEIGHT}px;
  border: none;
  outline: none;
  border-left: 1px solid ${palette('grey', 1)};
  padding: 0 10px;
  
  width: 80%;
  
  font-size: ${size('textRegular')};
  
  transition: background-color 0.3s ease;
  
  &:focus {
    background-color: ${palette('grey', 0)};
  }
  
  ::placeholder {
    color: ${palette('main', 0)};
    font-size: 16px;
  }
`

const RetailerSearch = ({
                          className,

                          categories,
                          selectedCategory,
                          onCategoryChange,

                          onSearch,
                          searchValue,
                        }) => {
  return (
    <Wrapper>
      <Holder className={className}>
        <CategoriesHolder>
          <Categories
            items={categories}
            selectedItem={selectedCategory}
            onChange={onCategoryChange}
          />
        </CategoriesHolder>
        <Search value={searchValue} onChange={onSearch} />
      </Holder>
    </Wrapper>
  )
}

RetailerSearch.propTypes = {
  className: PropTypes.string,

  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,

  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}

export default RetailerSearch
