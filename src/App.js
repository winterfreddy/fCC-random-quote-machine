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
  },
  {
    author: "Ayn Rand",
    text: "The question isn't who is going to let me; it's who is going to stop me."
  },
  {
    author: "Zig Ziglar",
    text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily."
  },
  {
    author: "Erica Jong",
    text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame."
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
    function randomInt() {
      return Math.floor(Math.random() * quotes.length);
    }

    let randomNum = randomInt();
    while(randomNum === this.state.randomIdx) randomNum = randomInt();

    this.setState({randomIdx: randomNum});
  }

  render() {
    return (
      <div id='container'>
        <div id="quote-box">
          <h1 id='author'>{quotes[this.state.randomIdx].author} once said,</h1>
          <h4 id='text'>"{quotes[this.state.randomIdx].text}"</h4>
          <div id='user-actions'>
            <a id='tweet-quote' target="_blank" href='twitter.com/intent/tweet'>Tweet this quote</a>
            <button id="new-quote" onClick={this.handleClick}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;