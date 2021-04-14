import React, { Component } from 'react';

const url_api = 'https://rickandmortyapi.com/api/character';

export default class Characters extends Component {

  state = {
    results: []
  }

  async componentDidMount(){
    const res = await fetch(url_api);
    const data = await res.json();
    this.setState({results:data.results});
//    console.log(next.substr(41,8));
  }

  render() {
    return (
      <div>
        <h1>Rick and Morty Characters</h1>
        {
          this.state.results.map(result => {
            return <div key={result.id} >
              <h1> {result.name} </h1>
              <img src={result.image} alt=""/>
              <p>Status: {result.status} </p>
            </div>
          })
        }
      </div>
    )
  }
}
