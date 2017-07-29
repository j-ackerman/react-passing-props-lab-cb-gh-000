import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
    const { filters, handleFilterChange, currentFilter, fruit } = props;
    return (
      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={handleFilterChange}
        />
        <FilteredFruitList
          filter={currentFilter}
          fruit={fruit}
        />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
};

export default FruitBasket;
