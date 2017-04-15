import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import moneyImg from '../images/money.svg'

const introText = [
  "Congratulations! CapMetro has been awarded a $xxx,xxx,xxx grant from the federal government to build better public transit.",
  "You will have several hard choices to make about how the money is used.",
  "Constituents will want frequent service and fast moving transit but with each choice comes costs",
  "Use your capital budget from provided by the grant, try to minimize the Operating & Maintainence costs.",
  "It's now up to you to make sure we build the best transit system."
]

const IntroPage = (props) => {
  const nextId = Number(props.params.id) + 1;
  const nextUrl = `/intro/${nextId}`;
  const isLastIntro = introText.length === Number(props.params.id);

  return (
    <div className="intro">
      <Link to="/dashboard" className="intro__skip">Skip Intro</Link>
      <img src={moneyImg} className="intro__img" alt="Money Emoji"/>
      <p className="intro__text">{props.text}</p>
      {
        isLastIntro
        ? <Link to="/dashboard" className="intro__start-button"><span>Get Started</span></Link>
        : <Link to={nextUrl} className="intro__next-button">Next</Link>
      }
    </div>
  )
}

export default class Intro extends Component {
  render () {
    return (
      <Route path='/intro/:id' render={({match}) => <IntroPage {...match} text={introText[match.params.id - 1]} />} />
    )
  }
}
