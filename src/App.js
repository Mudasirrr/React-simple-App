import React, { Component } from 'react';
import './App.css';

import Table from './Table';

import Form from './Form';

class App extends Component{
  //state defined
  state = {
    characters : [/*//I comment this because I'm going to add value at run time 
     {
       name: 'Mudasir Hussain',
       job:'Programmer'
     },
     {
       name: 'Shujat Hussain',
       job:'Officer'
     },
     {
       name: 'Muzamil',
       job: 'Officer'
     },*/
   ],
  }
  //function to update or delte character using state
  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i!==index
      }),
    })
  }
  
  //function to submit form data
  handleSubmit = character => {
    this.setState({characters:[...this.state.characters,character]})
  }

  render() {
    /*
    const characters = [
      {
        name: 'Mudasir Hussain',
        job:'Programmer'
      },
      {
        name: 'Shujat Hussain',
        job:'Officer'
      },
      {
        name: 'Muzamil',
        job: 'Officer'
      }
    ]*/
    //state
    const { characters } = this.state;
    return (
      <div className="container">
      
        <h1>React Simple App</h1>
        <p>Add a character with a name and a job to the table.</p>
        {/*//this is just for props
        <Table characterData={characters}/>*/}
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
