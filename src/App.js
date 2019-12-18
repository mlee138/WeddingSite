import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.css';
import './stylesheets/Home.css';
import Photos from './Photos';
import Details from './Details';
import RSVP from './RSVP';
import Registry from './Registry';

function Home() {
  return(
    <div id="home">
      <h2>"What's the story?"</h2>
      <p>Aight, so heres how it went down. Basically, we both happened to be too dumb to get into a better school than SUNY Binghamton. Here we are, both dumbass Freshmen walking around, living in Newing, Endicott. We lived on the chem-free floor, since we were both delusional in thinking that we weren't going to do drugs or alchohol. We played some Uno, hung out a bunch, and here we are 4 years later taking on the world as <span>two halves of a whole idiot</span>.</p>
      <div id="card-container">
        <div className="card">
          <img src="./images/Mindy.jpg" alt="Mindy"/>
          <h2>Her</h2>
          <p>Hi, my name is Mindy Zou, which rhymes with Hindi cow. My spirit animal is Sailor Moon and I know we wrote that we are two halves of a whole idiot, but honestly she is most of the idiot. I'm a poopoopeepeehead.</p>
        </div>

        <div className="card">
          <img src="./images/Matt.jpg" alt="Matt"/>
          <h2>Him</h2>
          <p>Hi, my name is Matthew Lee, which rhyms with cashew tea. My favorite activity is to make fun of Mindy and I know we wrote that we are two halves, but honestly I'm less of the idiot.</p>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (section) => {
    console.log(section);

    switch(section){
      case "Home":
        ReactDOM.render(<Home/>, document.getElementById('main'));
        break;
      case "Photos":
        ReactDOM.render(<Photos/>, document.getElementById('main'));
        break;
      case "Details":
        ReactDOM.render(<Details/>, document.getElementById('main'));
        break;
      case "RSVP":
        ReactDOM.render(<RSVP/>, document.getElementById('main'));
        break;
      case "Registry":
        ReactDOM.render(<Registry/>, document.getElementById('main'));
        break;
      default:
        ReactDOM.render(<Home/>, document.getElementById('main'));
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <svg height="130" width="750">
            <text x="0" y="100">Bro, we gettin' married</text>
          </svg>
          <div>2020</div>
        </header>
        <nav id="linktomain">
          <ul>
            <li><a href="#linktomain" onClick={() => this.handleClick("Home")} className="green1">Home</a></li>
            <li><a href="#linktomain" onClick={() => this.handleClick("Photos")} className="green2">Photos</a></li>
            <li><a href="#linktomain" onClick={() => this.handleClick("Details")} className="green3">Details</a></li>
            <li><a href="#linktomain" onClick={() => this.handleClick("RSVP")} className="green4">RSVP</a></li>
            <li><a href="#linktomain" onClick={() => this.handleClick("Registry")} className="green5">Registry</a></li>
          </ul>
        </nav>
        <main id="main">
          <Home/>
        </main>
        <footer>
          Site built by Matt Lee. That's me.
        </footer>
      </div>
    );
  }
}

export default App;
