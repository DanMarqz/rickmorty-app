import React, { Component } from 'react';

export default class Home extends Component {
  render(){
    return(
      <div>
        <h1>Hello world!</h1>
        <a 
          href="/characters">
          <img 
            src="http://placekitten.com/g/200/200" 
            alt="Kitties"/>
        </a>
        <p>Characters</p>
      </div>
    )
  }
};
