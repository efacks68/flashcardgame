import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components"; //for editing button styling
import RandInt from "./components/RandInt"
import refreshPage from "./components/refreshPage"

const Button = styled.button`font-size:20px;` //to make the button font larger, default was too small

//Make arrays of words for proving basic functionality
const english=["man","woman","boy","girl"];
const espanol=["hombre","mujer","niño","niña"];
const norsk=["mann","kvinne","gutt","jenta"];

//determines the "random" index value. 
var num=RandInt(0,3);

//Foundation for functionality, returns word to translate
class Word extends React.Component {
  render() { 
    return (
        english[num]
    );
  }
}

//class to change text that is displayed in button when button is clicked
class Palabra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Español",};
  }
  render() {
    return (
      <Button 
        className="idioma" 
        onClick={() => this.setState({value:espanol[num]})}>
        {this.state.value}
      </Button>
    );
  }
}

//class to change the text that is displayed in button when button is clicked
class Ord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Norsk"};
  }
  render() {
    return(
      <Button
        className="språk"
        onClick={() => this.setState({value:norsk[num]})}>
        {this.state.value}
      </Button>
    );
  }
}

//Component to render
//added Next Button to refresh the page and get a new word
//next steps include getting game to cycle through the remaining words, not showing previously displayed ones, but still thinking about how to do that...
class FlashCards extends React.Component {
  render() {
    return (
      <div className="flash-cards">
        <div className="to-translate">
          <h1>Translate:</h1>
          <h2><Word /></h2>
          <div>
            <Palabra />
              &nbsp;&nbsp;
            <Ord />
            <br/><br/><br/>
          </div>
          <Button
            onClick={refreshPage}
          >Next</Button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <FlashCards />,document.getElementById("root")
);     