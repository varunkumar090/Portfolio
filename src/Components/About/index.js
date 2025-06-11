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
             I’m Varun Kumar Parida, a self-taught Software Engineer with 2+ years of hands-on experience in Front-end Development (HTML, CSS, JavaScript) and frameworks like React.js and Node.js. Passionate about building scalable solutions, I’ve developed projects like a YouTube Clone with dynamic API integration and other web applications.
          </p>
          <p>
            Currently expanding my expertise in Backend Development (Next.js, Java) and strengthening my Problem-Solving skills (DSA). Though a high school graduate, I’ve leveraged online resources, workshops, and project-based learning to master modern tech stacks.

          </p>
          <p>
            Additionally, I’m skilled in AI tools and prompt engineering, optimizing workflows for efficiency. Eager to transition into a Software Developer role, I bring a strong foundation, adaptability, and a passion for turning ideas into functional code.

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
