import { useSelector, useDispatch } from 'react-redux'
import {changeDomain} from '../redux/domain'
import logo from '../assets/icons/logo.png'
import heroImg from '../assets/images/Hero illustration.jpg'
import findCareerImg from '../assets/images/About illsutration.png'
import notfound from '../assets/images/not found.jpg'
import './landingpage.css'
import { useState } from 'react'

function LandingPage() {
    const dispatch = useDispatch()
    const [isNavExpand, setIsNavExpand] = useState(false)
    const [isRegistrationExpand, setRegistrationExpand] = useState(false)

    const mobileNavStyle = {
      top: isNavExpand? '25%': '-50%'
    }

    const imgSrce = [

      {
        label: 'Career Trends',
        img: './src/assets/images/career trends.png'
      },

      {
        label: 'No degree careers',
        img: './src/assets/images/no degree.png'
      },

      {
        label: 'Discover best career for you',
        img: './src/assets/images/discover careers.png'
      },

      {
        label: 'Set your goals',
        img: './src/assets/images/set goal.png'
      }
    ]

  return (
    <div id='landing-page'>
        <nav className='flex'>
          <a href="#" className='logo'>
            <img src={logo} alt="CareerCompass logo" title='CareerCompass logo' />
          </a>

          <ul className='flex' style={mobileNavStyle} onClick={()=>setIsNavExpand(false)}>
            <li><a href="#">Home</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#contact-us">Contact us</a></li>
            <li>
              <div className="cta flex" onClick={()=>setRegistrationExpand(true)}>
                Sign up
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.308162 1.08844C0.110846 1.28581 0 1.55347 0 1.83256C0 2.11165 0.110846 2.37931 0.308162 2.57669L5.5181 7.78663L0.308162 12.9966C0.116438 13.1951 0.0103501 13.4609 0.0127482 13.7369C0.0151463 14.0129 0.125838 14.2769 0.320983 14.472C0.516127 14.6671 0.78011 14.7778 1.05608 14.7802C1.33204 14.7826 1.59791 14.6765 1.79641 14.4848L7.75048 8.53075C7.9478 8.33338 8.05864 8.06572 8.05864 7.78663C8.05864 7.50754 7.9478 7.23988 7.75048 7.0425L1.79641 1.08844C1.59904 0.891119 1.33138 0.780273 1.05229 0.780273C0.773199 0.780273 0.505537 0.891119 0.308162 1.08844Z" fill="white"/>
                </svg>
              </div>
            </li>
          </ul>

          <button className='menu-btn' onClick={()=>{
            setIsNavExpand(prevState => prevState = !prevState)
          }}>
          <svg width="22" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H33.3077M1 11H33.3077M1 21H33.3077" stroke="var(--secondary)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
          </button>
        </nav>

        { isNavExpand &&
          <div className="mobile-nav-bg"
            onClick={()=>setIsNavExpand(false)}
          ></div>
        }

        { isRegistrationExpand &&
          <div className="registration">
            <div className="registration-container flex">
              <div className="left column">
                <h2>Haan pay nalpas boi!</h2>
                <p>{'(Aguray ka bassit)'}</p>
              </div>
              <div className="right">
                <img src={notfound} alt="Not found" />
              </div>

              <div className="close-registration" onClick={()=>setRegistrationExpand(false)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.559099 0.559099C0.917199 0.201108 1.40282 0 1.90917 0C2.41553 0 2.90115 0.201108 3.25925 0.559099L10.0115 7.31138L16.7638 0.559099C17.124 0.211254 17.6063 0.0187787 18.107 0.0231296C18.6077 0.0274804 19.0866 0.228309 19.4407 0.582361C19.7947 0.936413 19.9956 1.41536 19.9999 1.91605C20.0043 2.41673 19.8118 2.8991 19.464 3.25925L12.7117 10.0115L19.464 16.7638C19.8118 17.124 20.0043 17.6063 19.9999 18.107C19.9956 18.6077 19.7947 19.0866 19.4407 19.4407C19.0866 19.7947 18.6077 19.9956 18.107 19.9999C17.6063 20.0043 17.124 19.8118 16.7638 19.464L10.0115 12.7117L3.25925 19.464C2.8991 19.8118 2.41673 20.0043 1.91605 19.9999C1.41536 19.9956 0.936413 19.7947 0.582361 19.4407C0.228309 19.0866 0.0274804 18.6077 0.0231296 18.107C0.0187787 17.6063 0.211254 17.124 0.559099 16.7638L7.31138 10.0115L0.559099 3.25925C0.201108 2.90115 0 2.41553 0 1.90917C0 1.40282 0.201108 0.917199 0.559099 0.559099Z" fill="var(--secondary)"/>
              </svg>

              </div>
            </div>
          </div>
        }

        <div className="hero">
          <div className="hero-bg">
            <img src={heroImg} alt="Hero image" title='CareerCompass illustration' />
          </div>

          <div className="left column">
            <p className='eye-brow'>Career<span>Compass</span></p>
            <h1>Drive Your Passion, Discover Your Career</h1>
            <p className='text'>Create your interest and find your best career recommendations, opportunities and explore career trends.</p>
            <div className="flex">
              <div className="cta flex" onClick={()=>setRegistrationExpand(true)}>
                Find career
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.308162 1.08844C0.110846 1.28581 0 1.55347 0 1.83256C0 2.11165 0.110846 2.37931 0.308162 2.57669L5.5181 7.78663L0.308162 12.9966C0.116438 13.1951 0.0103501 13.4609 0.0127482 13.7369C0.0151463 14.0129 0.125838 14.2769 0.320983 14.472C0.516127 14.6671 0.78011 14.7778 1.05608 14.7802C1.33204 14.7826 1.59791 14.6765 1.79641 14.4848L7.75048 8.53075C7.9478 8.33338 8.05864 8.06572 8.05864 7.78663C8.05864 7.50754 7.9478 7.23988 7.75048 7.0425L1.79641 1.08844C1.59904 0.891119 1.33138 0.780273 1.05229 0.780273C0.773199 0.780273 0.505537 0.891119 0.308162 1.08844Z" fill="white"/>
                </svg>
              </div>
              <a href='#about-us' className="cta accent">About us</a>
            </div>
          </div>
        </div>

        <div id="about-us" className='flex'>
          <div className="illustration">
            <img src={findCareerImg} alt="Find career image" title='Find career' />
          </div>
          <div className="about column">
            <h2>About us</h2>
            <p className="eye-brow">
              Welcome to
              <span> Career</span>
              <span>Compass</span>
            </p>
            <p className="text">
            Career Compass is your personalized career assessment tool designed to help you discover your true calling and navigate your professional journey with confidence.
            </p>

            <p className="text">
            Our assessment process uncovers your unique strengths, passions, and aspirations, providing tailored guidance and resources to help you reach new heights in your career.
            </p>

            <p className="message">
              Discover Your True Calling with CareerCompass.
            </p>

            <div className="cta flex" onClick={()=>setRegistrationExpand(true)}>
              Get started
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.308162 1.08844C0.110846 1.28581 0 1.55347 0 1.83256C0 2.11165 0.110846 2.37931 0.308162 2.57669L5.5181 7.78663L0.308162 12.9966C0.116438 13.1951 0.0103501 13.4609 0.0127482 13.7369C0.0151463 14.0129 0.125838 14.2769 0.320983 14.472C0.516127 14.6671 0.78011 14.7778 1.05608 14.7802C1.33204 14.7826 1.59791 14.6765 1.79641 14.4848L7.75048 8.53075C7.9478 8.33338 8.05864 8.06572 8.05864 7.78663C8.05864 7.50754 7.9478 7.23988 7.75048 7.0425L1.79641 1.08844C1.59904 0.891119 1.33138 0.780273 1.05229 0.780273C0.773199 0.780273 0.505537 0.891119 0.308162 1.08844Z" fill="white"/>
                </svg>
            </div>
          </div>
        </div>

        <div className="discover">
          <div className="card column">
            <h3>Discover Careers and Career Trends</h3>
            <p className='text'>Discover the best career for you, practice your skills, set your goals and explore career tends, jobs, and degrees the world is offered.</p>
            <div className="cta flex">
              Find career
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.308162 1.08844C0.110846 1.28581 0 1.55347 0 1.83256C0 2.11165 0.110846 2.37931 0.308162 2.57669L5.5181 7.78663L0.308162 12.9966C0.116438 13.1951 0.0103501 13.4609 0.0127482 13.7369C0.0151463 14.0129 0.125838 14.2769 0.320983 14.472C0.516127 14.6671 0.78011 14.7778 1.05608 14.7802C1.33204 14.7826 1.59791 14.6765 1.79641 14.4848L7.75048 8.53075C7.9478 8.33338 8.05864 8.06572 8.05864 7.78663C8.05864 7.50754 7.9478 7.23988 7.75048 7.0425L1.79641 1.08844C1.59904 0.891119 1.33138 0.780273 1.05229 0.780273C0.773199 0.780273 0.505537 0.891119 0.308162 1.08844Z" fill="white"/>
              </svg>
            </div>
          </div>

          { imgSrce.map((src, i) => (
            <div className="card" key={i}>
              <div className="img">
                <img src={src.img} />
              </div>
              <div className="labels">
                <h3>{src.label}</h3>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default LandingPage