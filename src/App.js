import React, { Component } from 'react';
import axios from 'axios';

import Button from './components/button/Button';
import Title from './components/title/Title';
import './App.css';


const endpoint = 'https://api.github.com/users/marcllopis';



class App extends Component {

  state = {
    title: 'Hello World',
    data: ''
  }

  textChange = () => {
    let showText = this.state.title
    showText === 'Hello World' ? showText = 'Goodbye World' : showText = 'Hello World'

    this.setState({
      title: showText
    })
  }
  // Fetch an api with the fetch method
  // componentDidMount() {
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(data =>
  //         this.setState({
  //           data
  //         })
  //       )
  // }

  // fetch an api with axios and async await
  async componentDidMount() {
    let {data} = await axios(endpoint);
    this.setState({
      data
    })
  }


  render() {
    console.log('hello from the render method')

    return (
      <div>
        <Title text={this.state.title} />
        <Button changeText={this.textChange} />
        {
          this.state.data.name &&
            <h2>The username is: {this.state.data.name}</h2>
        }
      </div>
    );
  }
}

export default App;
