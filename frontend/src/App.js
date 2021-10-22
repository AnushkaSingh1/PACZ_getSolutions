import logo from './logo.svg';
import './App.css';
import Title from './Title';
import './Title.css'
import Form from './Form'
import { Component } from 'react';

//function App() {
class App extends Component {

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
