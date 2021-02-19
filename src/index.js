import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components'; //for editing button styling
import RandInt from "./components/RandInt"

const Button = styled.button`font-size:20px;` //to make the button font larger, default was too small

//Make arrays of words for proving basic functionality
const english=['man','woman','boy','girl'];
const espanol=['hombre','mujer','niño','niña'];
const norsk=['mann','kvinne','gutt','jenta'];

const num=RandInt(0,3); //determines the 'random' index value. Fixed bounds due to small test arrays

//Foundation for functionality, returns word to translate
class Word extends React.Component {
  render() { 
    return (
        english[num]
    );
  }
}

//simple function to trigger alert when button is clicked
function palabra() {
  alert(espanol[num]); 
}

//simple function to trigger alert when button is clicked
function ord() {
  alert(norsk[num]); 
}

//Component to render
class FlashCards extends React.Component {
  render() {
    return (
      <div className="flash-cards">
        <div className="to-translate">
          <h1>Translate:</h1>
          <h2>&nbsp;<Word /></h2>
          <Button 
            onClick={palabra}
            >Español</Button> 
            &nbsp;&nbsp; 
          <Button
            onClick={ord}
            >Norsk</Button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <FlashCards />,document.getElementById('root')
);     