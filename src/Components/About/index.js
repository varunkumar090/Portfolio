import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  //faAngular,
  faCss3,
  //faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambiotious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quitly confident, naturally curious, and perpetually working on
            improve my chops one design problem at a time.
          </p>
          <p>
            If I need to define my self in one sentence that would be a family
            person, who really love's to take care of his own team as a family
            member's, a person with full of sport or compitative sperit or
            tech-obsessed!!!
          </p>
        </div>
        <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

/*
<div className="stage-cube-cont">
<div className="cubespiner">
  <div className="face2">
    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
  </div>
  <div className="face3">
    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
  </div>
  <div className="face4">
    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
  </div>
  <div className="face5">
    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
  </div>
</div>
</div>

        <div class="container">
          <div class="cube">
            <div style="--x:-1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:0; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
          </div>
          <div class="cube">
            <div style="--x:-1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:0; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
          </div>
          <div class="cube">
            <div style="--x:-1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:0; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
            <div style="--x:1; --y:0;">
              <span style="--i:3;"></span>
              <span style="--i:2;"></span>
              <span style="--i:1;"></span>
            </div>
          </div>
        </div>
*/
