import React from 'react';
import pokemonData from './PokemonData.js';
import Pagination from './Pagination.jsx';
import Pokemon from './Pokemon.jsx';
import Header from '../common/Header.jsx';

 class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
        pokemonContext: pokemonData,
        pokemonList : pokemonData.slice(0,10),
        pageNo : 1,
        searchedPokemon : '',
        totalPages : pokemonData.length/10
    }
    this.filterList = this.filterList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount(){
  }

  filterList(event) {
    const searchString = event.target.value;
    let filteredPokemonData = null;
    if (typeof searchString !== 'string' || searchString.length === 0) {
        filteredPokemonData = pokemonData;
    }
    else {
    let searchLower = searchString.toLowerCase();
    
    filteredPokemonData = pokemonData.filter(pokemon => {
        if (pokemon.name.toLowerCase().includes(searchLower)) {
        return true;
        }
    })
    }
    
    this.setState({ 
        pokemonContext : filteredPokemonData,
        pokemonList : filteredPokemonData.slice(0,10),
        pageNo : 1,
        totalPages :  Math.ceil(filteredPokemonData.length/10),
        searchedPokemon : searchString });
  }

  handlePaginationClick(direction) {
  const newPageNo = direction == 'left' ? this.state.pageNo - 1 : this.state.pageNo  + 1;
  const endIndex = newPageNo*10;
  const startIndex = endIndex - 10;
   this.setState({
       pageNo : newPageNo,
       pokemonList : this.state.pokemonContext.slice(startIndex, endIndex)
   })
  }


  render() {
    const { pokemonList, searchedPokemon, pageNo, totalPages } = this.state;
    //add pagination and pokemon details on page
    return (
    <div>
         <Header />
         <form style={{marginBottom:'8px'}} onSubmit={this.handleSubmit}>
            <label>
            <input id="search" type="text" value={searchedPokemon} onChange={this.filterList} />
            </label>
        </form>
            
        <div style={{ display:'flex', flexDirection:'row' }}>
        {pokemonList.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
            
        <button id='previous' 
            style={{ 'visibility' : pageNo == 1 ? 'hidden' : 'visible'  }}
            onClick = {() =>
                    this.handlePaginationClick('left')}>
        </button> 
        <Pagination pageNo={pageNo} totalPages={totalPages} />
        <button id='next' 
            onClick = {() =>
                    this.handlePaginationClick('right')
                  }
            style={{ 'visibility' : pageNo == totalPages ? 'hidden' : 'visible'  }}>
        </button> 
    </div>)
  }
}

export default List;
