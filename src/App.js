import React from 'react';


const quotes = [
  ["It is a waste of time to be angry about my disability. One has to get on with life and I haven't done badly. People won't have time for you if you are always angry or complaining.", "Stephen Hawking"],
  ["The truth may be puzzling. It may take some work to grapple with. It may be counterintuitive. It may contradict deeply held prejudices. It may not be consonant with what we desperately want to be true. But our preferences do not determine what's true.", "Carl Sagan"],
  ["As a well-spent day brings happy sleep, so life well used brings happy death.", "Leonardo da Vinci"],
  ["Yes, the universe had a beginning. Yes, the universe continues to evolve. And yes, every one of our body's atoms is traceable to the big bang and to the thermonuclear furnace within high-mass stars. We are not simply in the universe, we are part of it. We are born from it. One might even say we have been empowered by the universe to figure itself out — and we have only just begun.", "Neil deGrasse Tyson"],
  ["Talent is a pursued interest. In other words, anything that you're willing to practice, you can do.", "Bob Ross"],  ["Life is like riding a bicycle. To keep your balance you must keep moving.", "Albert Einstein"], ["On my business card, I am a corporate president. In my mind, I am a game developer. But in my heart, I am a gamer.", "Satoru Iwata"], ["We are meant to know, or we are amoebae", "Isaac Asimov"], ["Lasting change is a series of compromises. And compromise is alright, as long your values don't change.", "Jane Goodall"], ["Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", "Marie Curie"]
];

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
  currentQuote: "",
  currentAuthor: "",
  quoteIndex: Math.floor(Math.random() * quotes.length)
};
this.getRandom = this.getRandom.bind(this);
}

getRandom() {
this.setState({
  quoteIndex: Math.floor(Math.random() * quotes.length)
});
}

render() {
const quote = quotes[this.state.quoteIndex][0];
const author = quotes[this.state.quoteIndex][1];
const twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + '"' +quote +'"' +" " + author;

return (
  <div id='wrapper'>
  <div id='quote-box' className=''>
    <div  className='tc'>
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />
      <h2 id="text">"{quote}"</h2>
      <h3 id="author">-{author}-</h3>
    </div>
    <a
      id="tweet-quote"
      title="Tweet this!"
      target="_top"
      href={twitter}
    >
      <i className=" fa fa-twitter"></i>
    </a>
    <button id="new-quote" className="button" onClick={this.getRandom}>
      New Quote
    </button>
  </div>
  </div>
);
}
}

export default App;