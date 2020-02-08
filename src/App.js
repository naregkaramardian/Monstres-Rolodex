import React, {
  Component
} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monesters: [{
          name: "Frankestein",
          id: "mon1"
        },
        {
          name: "Dracula",
          id: "mon2"
        },
        {
          name: "Zombe",   
          id: "mon3"
        },
      ]
    };
  }

  render() {
    return ( < div className = "App" > {
        this.state.monesters.map(monster => 
        <h1 key = {monster.id}> {monster.name } </h1>)
        } </div>
      )
    }
  }
  export default App;