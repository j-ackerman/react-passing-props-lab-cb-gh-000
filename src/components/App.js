import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component{
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  fetchFilters(){
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  componentWillMount(){
    this.fetchFilters();
    this.fetchFruit();
  }

  handleFilterChange(event){
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    const { fruit, filters, currentFilter } = this.state;
    return (
      <FruitBasket
        fruit={fruit}
        filters={filters}
        currentFilter={currentFilter}
        handleFilterChange={this.handleFilterChange}
      />
    );
  }
}

export default App;
