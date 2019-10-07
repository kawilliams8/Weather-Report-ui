import React, {Component} from 'react';
import './App.css';
import ForecastsContainer from './ForecastsContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      forecasts: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/forecasts")
      .then(response => response.json())
      .then(data => this.setState({ forecasts: data.forecasts }));
  }

  render() {
    console.log('in render', this.state.forecasts)
    return (
      <div className="App">
        <h1>Weather Report</h1>
        <main>
          <ForecastsContainer forecasts={this.state.forecasts}/>
        </main>
      </div>
    )
  };
}

export default App;
