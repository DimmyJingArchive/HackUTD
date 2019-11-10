import React from 'react';
import './App.css';

import { form, TextField } from '@material-ui/core';

class Main extends React.Component {
  state = {
    pressed: false
  }

  render() {
    if (this.state.pressed)
      return (
        <div className="App" style={{margin: 50}}>
          <form>
            <TextField id="a" label="asdf" autoComplete="abc cde def"/>
          </form>
        </div>
      );
    else
      return (
        <div className="App">
          <button style={{width: "100%", border: 'none', padding: 0}} onClick={() => this.setState({pressed: true})}>
            <header className="App-header">
              <img src={"https://www.blueleaflending.com/wp-content/uploads/2018/11/fannie-mae-icon.png"} className="App-logo" alt="logo" />
              <p style={{fontSize: 70}}>
                Fannie Displae
              </p>
            </header>
          </button>
        </div>
      );
  }
}

function App() {
  return <Main/>;
}

export default App;
