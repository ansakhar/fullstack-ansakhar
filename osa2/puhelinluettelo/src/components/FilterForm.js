import React from 'react'

const FilterForm = (props) => {
  return (
  <form className='form'>
      <div>
          filter shown with: <input 
          value={props.newFilter} 
          onChange={props.handleFilterChange}/>
      </div>
      </form>
  )
}

export default FilterForm