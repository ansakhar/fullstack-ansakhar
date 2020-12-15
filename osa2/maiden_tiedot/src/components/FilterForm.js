import React from 'react'

const FilterForm = (props) => {
  return (
  <form >
      <div>
          find countries: <input 
          value={props.newFilter} 
          onChange={props.handleFilterChange}/>
      </div>
      </form>
  )
}

export default FilterForm