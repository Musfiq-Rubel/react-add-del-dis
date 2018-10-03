import React, { Component } from 'react';

import './App.css';
import Table from './Components/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Components/Form';

class App extends Component {

    // state = {
    //     characters: [
    //         {
                
    //                 'name': 'Charlie',
    //                 'job': 'Janitor'
    //             },
    //             {
    //                 'name': 'Mac',
    //                 'job': 'Bouncer'
    //             },
    //             {
    //                 'name': 'Dee',
    //                 'job': 'Aspring actress'
    //             },
    //             {
    //                 'name': 'Dennis',
    //                 'job': 'Bartender'
    //             }
    //     ]        
    //  };  

    state = {
        characters: []
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

     removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

  render() {

 

    return (
      <div className="container">
       <Form className='flex-direction: column'
        handleSubmit={this.handleSubmit}
       />
       <Table characterData={this.state.characters}
        removeCharacter={this.removeCharacter} 
       />
       
      </div>
    );
  }
}

export default App;
