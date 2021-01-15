import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, CP, HP, Attack, Defense, type1, type2 } = this.props.pokemon;
    const pokemonImgUrl = 'https://img.pokemondb.net/artwork/large/' + name.toLowerCase() + '.jpg';
    return (
    <div>
        <img style={{ height:'100px', width:'100px' }} src={pokemonImgUrl} />
        <span id="name">{name} </span>
        <div style={{ display:'flex', flexDirection:'column', margin:'12px' }}>
            <span>CP : {CP} </span>
            <span>HP : {HP} </span>
            <span>Attack : {Attack} </span>
            <span>Defense : {Defense} </span>
            <span>Type1 : {type1} </span>
            <span>Type2 : {type2} </span>
        </div>
    </div>
    );
  }
}
export default Pokemon;
