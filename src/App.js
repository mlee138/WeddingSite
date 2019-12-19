import React from 'react';
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
      <p>Aight, so here's how it went down. Basically, we both happened to be too dumb to get into a better school than SUNY Binghamton. We were both simply dumbass Freshmen walking around, living in Newing, Endicott. We lived on the chem-free floor, since we were both delusional in thinking that we weren't going to do drugs or alchohol. We played some Uno, hung out a bunch, and here we are 4 years later taking on the world together as <span>two halves of a whole idiot</span>.</p>
      <div id="card-container">
        <div className="card">
          <div id="image-container">
            <img src="./images/Mindy.jpg" alt="Mindy"/>
            <span></span>
          </div>
          <h2>Her</h2>
          <p>Hi, my name is Mindy Zou, which rhymes with Hindi cow. My spirit animal is Sailor Moon and I know it says we are two halves of a whole idiot, but honestly I'm most of the idiot. Furthermore, I'm a poopoopeepeehead.</p>
        </div>

        <div className="card">
          <div id="image-container">
            <img src="./images/Matt.jpg" alt="Matt"/>
            <span></span>
          </div>
          
          <h2>Him</h2>
          <p>Hi, my name is Matthew Lee, which rhymes with cashew tea. My favorite activity is to make fun of Mindy and I know we wrote that we are two halves, but honestly I'm less of the idiot.</p>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: <Home/>
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (section) => {
    switch(section){
      case "Home":
        this.setState({ currentPage: <Home/>});
        break;
      case "Photos":
        this.setState({ currentPage: <Photos/>});
        break;
      case "Details":
        this.setState({ currentPage: <Details/>});
        break;
      case "RSVP":
        this.setState({ currentPage: <RSVP/>});
        break;
      case "Registry":
        this.setState({ currentPage: <Registry/>});
        break;
      default:
        this.setState({ currentPage: <Home/>});
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <header>
          <svg>
            <text x="0" y="100">We gettin' married</text>
          </svg>
          <div>2020</div>
        </header>
        <nav id="linktomain">
          <div>
            <a href="#linktomain" onClick={() => this.handleClick("Home")} className="green1">Home</a>
            <a href="#linktomain" onClick={() => this.handleClick("Photos")} className="green2">Photos</a>
            <a href="#linktomain" onClick={() => this.handleClick("Details")} className="green3">Details</a>
            <a href="#linktomain" onClick={() => this.handleClick("RSVP")} className="green4">RSVP</a>
            <a href="#linktomain" onClick={() => this.handleClick("Registry")} className="green5">Registry</a>
          </div>
        </nav>
        <main id="main">
          {this.state.currentPage}
        </main>
        <footer>
          Site built by Matt Lee. That's me.
        </footer>
      </div>
    );
  }
}

export default App;
