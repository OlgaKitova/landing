import React from 'react'
import ReactDOM from 'react-dom'

class ReactCard extends React.Component {
  render() {
    return (
      <div className={this.props.classCards ? 'advantages__cards ' + this.props.classCards : 'advantages__cards'}>
            <div className={this.props.classImg ? "advantages__img " + this.props.classImg : "advantages__img"}>
              <img src={this.props.src} alt="human"/>
            </div>
            <h3 className={this.props.classMajor ? "advantages__major " + this.props.classMajor : "advantages__major"}>{this.props.major}</h3>
            <p className="advantages__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="advantages__link">
              <button className="advantages__btn">Learn more</button>
              <img className="advantages__arrow" src="./img/arrow.svg" alt="arrow"></img>
            </div>
      </div>
    )
  }
}

const card1 = document.querySelector('#card1'),
      card2 = document.querySelector('#card2'),
      card3 = document.querySelector('#card3');

if(card1 && card2 && card3) {
ReactDOM.render(
  <ReactCard classCards="cards--one" src="./img/man.png" major="Make Your business To Be Better Famous In Internet"/>, card1)
ReactDOM.render(
  <ReactCard classCards="cards--two" src="./img/man&icons.png" classImg="advantages__img--two" classMajor="advantages__major--two" major="Bring Technology To Your Comfrotable Home"/>, card2)
ReactDOM.render(
  <ReactCard src="./img/woman.png" major="Build Your Digital Product That Suitable For Your Need"/>, card3)
}
export default ReactCard
