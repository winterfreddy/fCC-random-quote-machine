import './App.css';
import React from 'react';

const quotes = [
  {
    author: "Henry David Thoreau",
    text: "Go confidently in the direction of your dreams. Live the life you have imagined."
  },
  {
    author: "Amelia Earhart",
    text: "The most difficult thing is the decision to act, the rest is merely tenacity."
  },
  {
    author: "Confucius",
    text: "It does not matter how slowly you go as long as you do not stop."
  }
]

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randomIdx: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    this.setState({randomIdx: randomNum});
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <h4 id='text'>"{quotes[this.state.randomIdx].text}"</h4>
          <p id='author'>-{quotes[this.state.randomIdx].author}</p>
          <div>
            <button id='tweet-quote'>Tweet this quote</button>
            <button id="new-quote" onClick={this.handleClick}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;