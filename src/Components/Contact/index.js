import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refFrom = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_sqs8wvd',
        refFrom.current,
        'N-hT1m9R5j9UTri78'
      )
      .then(
        () => {
          alert('Message is sent!')
          window.location.reload(false)
        },
        () => {
          alert('failed to sent, please sent again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', '  ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            I'm intrested in Frontend development opportunities - ambitious &
            can work in large projects. Still if you have any questions, don't
            hesitate to contact me. Using either contact given bellow.
          </p>
          <div className="contact-form">
            <form ref={refFrom} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subjact"
                    name="Subjact"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        VARUN KUMAR,
        <br />
        INDIA
        <br />
        South-extention 446/7 180015
        <br />
        Channi,Himmat
        <br />
        <span>varunkumar.in2404@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[32.682768, 74.889441]} zoom={19}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[32.682768, 74.889441]}>
            <Popup>Varun lives here, you are moste welcome to visit.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
