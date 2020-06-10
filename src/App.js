import React, { Component } from 'react'
import Axios from 'axios'
import '../src/App.css'

class App extends Component {

  state = {
    advice: ''
  };
  componentDidMount() {
    this.FetchAdvice()
  }

  FetchAdvice = () => {
    Axios.get('https://api.adviceslip.com/advice')
      .then((response) => {

        const { advice } = response.data.slip;
        this.setState({advice});
        
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  render() {
    const {advice} = this.state
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.FetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
