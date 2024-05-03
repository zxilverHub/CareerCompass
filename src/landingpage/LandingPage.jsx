import { useSelector, useDispatch } from 'react-redux'
import {changeDomain} from '../redux/domain'
import logo from '../assets/icons/logo.png'
import heroImg from '../assets/images/Hero illustration.jpg'
import findCareerImg from '../assets/images/About illsutration.png'
import registrationIllustration from './images/Registration illustration.png'
import signUpIllustration from './images/sign up.png'
import './landingpage.css'
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import { careerTrends, noDegree, discoverCareer, setGoal, lion1, lion2, lion3, sponsor } from './DiscoverImages'

function LandingPage() {
    const dispatch = useDispatch()
    const [isNavExpand, setIsNavExpand] = useState(false)
    const [isRegistrationExpand, setRegistrationExpand] = useState(true)
    const [isInLogin, setIsInLogin] = useState(false)

    const mobileNavStyle = {
      top: isNavExpand? '25%': '-50%'
    }

    const imgSrce = [

      {
        label: 'Career Trends',
        img: careerTrends
      },

      {
        label: 'No degree careers',
        img: noDegree
      },

      {
        label: 'Discover best career for you',
        img: discoverCareer
      },

      {
        label: 'Set your goals',
        img: setGoal
      }
    ]   
    
    const team = [
      {
        name: 'Josh Ezekiel Delos Santos',
        role: 'Founder',
        img: lion1,
        links: {
          fb: 'https://www.facebook.com/joshezekiel.delossantos',
          ig: '',
          gh: ''
        }
      },

      {
        name: 'Ronal Marcus Gutierrez',
        role: 'Project Manager, Quality Assurance',
        img: lion2,
        links: {
          fb: 'https://www.facebook.com/ryonooob',
          ig: '',
          gh: ''
        }
      },

      {
        name: 'Silver Dave Ramos',
        role: 'UI/UX Designer, Programmer',
        img: lion3,
        links: {
          fb: 'https://www.facebook.com/silverdave.ramos.3/',
          ig: 'https://www.instagram.com/silverdaveramos/?hl=en',
          gh: 'https://github.com/zxilverHub'
        }
      }
    ]

    const footerLinks = {
      tools:
      [
        {
          url: 'https://www.figma.com/',
          label: 'Figma'
        },

        {
          url: 'https://code.visualstudio.com/',
          label: 'VScode'
        },

        {
          url: 'https://git-scm.com/',
          label: 'Git'
        },

        {
          url: 'https://github.com/',
          label: 'Github'
        }
      ],

      resources:
      [
        {
          url: 'https://www.freepik.com/',
          label: 'Freepik'
        },

        {
          url: 'https://openai.com/',
          label: 'chatGPT'
        },

        {
          url: 'https://www.careerexplorer.com/',
          label: 'CareerExplorer'
        },

        {
          url: 'https://www.pixels.com/',
          label: 'Pixels'
        },

        {
          url: 'https://www.unsplash.com/',
          label: 'Unsplash'
        },

        {
          url: 'https://www.dribbble.com/',
          label: 'Dribbble'
        }
      ]
    }

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
              <div className="left">
                { isInLogin?
                  <Login option={setIsInLogin} /> :
                  <Signup option={setIsInLogin} />
                }
              </div>
              <div className="right">
                <img src={signUpIllustration} alt="Not found" />
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
            <div className="cta flex" onClick={()=> setRegistrationExpand(true)}>
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

        <div id="contact-us" className='column'>
          <h4>Our team</h4>

          <div className="team">
            { team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="team-information">
                  <div className="normal">
                    <p className='team-name'>{t.name}</p>
                    <p className='team-role text'>{t.role}</p>
                  </div>

                  <div className="active">
                    <a href={t.links.fb} target='_blank'>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 10.7324C20.5 5.21242 16.02 0.732422 10.5 0.732422C4.98 0.732422 0.5 5.21242 0.5 10.7324C0.5 15.5724 3.94 19.6024 8.5 20.5324V13.7324H6.5V10.7324H8.5V8.23242C8.5 6.30242 10.07 4.73242 12 4.73242H14.5V7.73242H12.5C11.95 7.73242 11.5 8.18242 11.5 8.73242V10.7324H14.5V13.7324H11.5V20.6824C16.55 20.1824 20.5 15.9224 20.5 10.7324Z" fill="white"/>
                      </svg>
                    </a>

                    <a href={t.links.ig} target='_blank'>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5286 0.732422C12.6536 0.735422 13.2246 0.741422 13.7176 0.755422L13.9116 0.762422C14.1356 0.770422 14.3566 0.780422 14.6236 0.792422C15.6876 0.842422 16.4136 1.01042 17.0506 1.25742C17.7106 1.51142 18.2666 1.85542 18.8226 2.41042C19.3311 2.91032 19.7245 3.51501 19.9756 4.18242C20.2226 4.81942 20.3906 5.54542 20.4406 6.61042C20.4526 6.87642 20.4626 7.09742 20.4706 7.32242L20.4766 7.51642C20.4916 8.00842 20.4976 8.57942 20.4996 9.70442L20.5006 10.4504V11.7604C20.503 12.4898 20.4954 13.2192 20.4776 13.9484L20.4716 14.1424C20.4636 14.3674 20.4536 14.5884 20.4416 14.8544C20.3916 15.9194 20.2216 16.6444 19.9756 17.2824C19.7253 17.9502 19.3317 18.555 18.8226 19.0544C18.3225 19.5627 17.7179 19.9562 17.0506 20.2074C16.4136 20.4544 15.6876 20.6224 14.6236 20.6724C14.3863 20.6836 14.149 20.6936 13.9116 20.7024L13.7176 20.7084C13.2246 20.7224 12.6536 20.7294 11.5286 20.7314L10.7826 20.7324H9.47358C8.74384 20.7349 8.0141 20.7273 7.28458 20.7094L7.09058 20.7034C6.85319 20.6944 6.61585 20.6841 6.37858 20.6724C5.31458 20.6224 4.58858 20.4544 3.95058 20.2074C3.28325 19.9568 2.67879 19.5633 2.17958 19.0544C1.67062 18.5547 1.2768 17.95 1.02558 17.2824C0.778577 16.6454 0.610577 15.9194 0.560577 14.8544C0.549436 14.6171 0.539436 14.3798 0.530577 14.1424L0.525577 13.9484C0.507149 13.2192 0.498815 12.4898 0.500577 11.7604V9.70442C0.497786 8.97502 0.50512 8.24562 0.522577 7.51642L0.529577 7.32242C0.537577 7.09742 0.547577 6.87642 0.559577 6.61042C0.609577 5.54542 0.777577 4.82042 1.02458 4.18242C1.27569 3.51433 1.6703 2.90945 2.18058 2.41042C2.67967 1.9019 3.28372 1.50841 3.95058 1.25742C4.58858 1.01042 5.31358 0.842422 6.37858 0.792422C6.64458 0.780422 6.86658 0.770422 7.09058 0.762422L7.28458 0.756422C8.01377 0.738655 8.74317 0.730987 9.47258 0.733422L11.5286 0.732422ZM10.5006 5.73242C9.17449 5.73242 7.90273 6.25921 6.96504 7.19689C6.02736 8.13457 5.50058 9.40634 5.50058 10.7324C5.50058 12.0585 6.02736 13.3303 6.96504 14.268C7.90273 15.2056 9.17449 15.7324 10.5006 15.7324C11.8267 15.7324 13.0984 15.2056 14.0361 14.268C14.9738 13.3303 15.5006 12.0585 15.5006 10.7324C15.5006 9.40634 14.9738 8.13457 14.0361 7.19689C13.0984 6.25921 11.8267 5.73242 10.5006 5.73242ZM10.5006 7.73242C10.8945 7.73236 11.2847 7.80989 11.6487 7.96059C12.0127 8.1113 12.3434 8.33222 12.622 8.61075C12.9007 8.88928 13.1217 9.21996 13.2725 9.58391C13.4233 9.94786 13.501 10.338 13.5011 10.7319C13.5011 11.1259 13.4236 11.516 13.2729 11.88C13.1222 12.244 12.9013 12.5748 12.6228 12.8534C12.3442 13.132 12.0135 13.353 11.6496 13.5039C11.2856 13.6547 10.8955 13.7324 10.5016 13.7324C9.70593 13.7324 8.94287 13.4164 8.38026 12.8537C7.81765 12.2911 7.50158 11.5281 7.50158 10.7324C7.50158 9.93677 7.81765 9.17371 8.38026 8.6111C8.94287 8.04849 9.70593 7.73242 10.5016 7.73242M15.7516 4.23242C15.4201 4.23242 15.1021 4.36412 14.8677 4.59854C14.6333 4.83296 14.5016 5.1509 14.5016 5.48242C14.5016 5.81394 14.6333 6.13189 14.8677 6.36631C15.1021 6.60073 15.4201 6.73242 15.7516 6.73242C16.0831 6.73242 16.401 6.60073 16.6355 6.36631C16.8699 6.13189 17.0016 5.81394 17.0016 5.48242C17.0016 5.1509 16.8699 4.83296 16.6355 4.59854C16.401 4.36412 16.0831 4.23242 15.7516 4.23242Z" fill="white"/>
                      </svg>
                    </a>

                    <a href={t.links.gh} target='_blank'>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3998 1.10016C18.6661 0.366385 17.7831 0 16.7501 0H4.24994C3.21685 0 2.33393 0.366385 1.60016 1.10016C0.866385 1.83393 0.5 2.71685 0.5 3.74994V16.2501C0.5 17.2831 0.866385 18.1661 1.60016 18.8998C2.33393 19.6336 3.21685 20 4.24994 20H7.167C7.3572 20 7.50035 19.993 7.59645 19.98C7.70826 19.9576 7.80918 19.8979 7.88275 19.8108C7.97785 19.7107 8.0259 19.5655 8.0259 19.3753L8.01889 18.4894C8.01489 17.9248 8.01289 17.4784 8.01289 17.148L7.71257 17.2001C7.52237 17.2351 7.28212 17.2501 6.99082 17.2461C6.68718 17.2405 6.38452 17.21 6.08586 17.155C5.76793 17.0963 5.46864 16.9625 5.21295 16.7646C4.94516 16.562 4.74543 16.2827 4.64035 15.9638L4.51021 15.6634C4.40052 15.4265 4.26272 15.2037 4.09978 14.9997C3.91358 14.7565 3.72439 14.5923 3.53318 14.5052L3.44309 14.4402C3.38027 14.3952 3.32312 14.3427 3.27291 14.284C3.22495 14.2295 3.18547 14.1681 3.15579 14.1018C3.12976 14.0407 3.15178 13.9907 3.22086 13.9516C3.29093 13.9116 3.41606 13.8926 3.59925 13.8926L3.85953 13.9326C4.03271 13.9667 4.24794 14.0708 4.5032 14.244C4.76154 14.4201 4.97733 14.6516 5.13487 14.9217C5.33508 15.277 5.57533 15.5483 5.85763 15.7355C6.13992 15.9217 6.42422 16.0158 6.71052 16.0158C6.99682 16.0158 7.24408 15.9938 7.4533 15.9507C7.65563 15.9089 7.85223 15.843 8.03892 15.7545C8.117 15.1739 8.32922 14.7255 8.67659 14.4131C8.22649 14.369 7.7804 14.2907 7.34218 14.1789C6.91453 14.0614 6.50324 13.8909 6.1179 13.6714C5.71472 13.4519 5.35861 13.1553 5.0698 12.7984C4.79251 12.4511 4.56427 11.9956 4.38608 11.432C4.20889 10.8674 4.1198 10.2157 4.1198 9.47795C4.1198 8.42785 4.46216 7.53391 5.14788 6.79513C4.82754 6.00631 4.85758 5.12038 5.23898 4.14035C5.49124 4.06126 5.86463 4.12033 6.35915 4.31553C6.85367 4.51074 7.21605 4.67791 7.44629 4.81606C7.67654 4.9562 7.86073 5.07333 7.99987 5.16843C8.81371 4.94194 9.65474 4.8281 10.4995 4.83007C11.3594 4.83007 12.1923 4.94319 13.0001 5.16843L13.4946 4.8561C13.875 4.62771 14.2762 4.43598 14.6929 4.2835C15.1534 4.10931 15.5038 4.06227 15.748 4.14035C16.1384 5.12138 16.1725 6.00631 15.8511 6.79614C16.5368 7.53391 16.8802 8.42785 16.8802 9.47895C16.8802 10.2167 16.7911 10.8704 16.6129 11.438C16.4357 12.0066 16.2055 12.4621 15.9232 12.8054C15.6293 13.1577 15.2717 13.4515 14.8691 13.6714C14.4486 13.9056 14.0402 14.0748 13.6448 14.1789C13.2066 14.2911 12.7605 14.3697 12.3104 14.4141C12.7609 14.8045 12.9871 15.4202 12.9871 16.2621V19.3753C12.9871 19.5225 13.0081 19.6416 13.0522 19.7327C13.0724 19.7766 13.1013 19.816 13.1371 19.8485C13.1728 19.881 13.2148 19.906 13.2604 19.9219C13.3565 19.956 13.4406 19.978 13.5147 19.986C13.5887 19.996 13.6949 19.999 13.833 19.999H16.7501C17.7831 19.999 18.6661 19.6326 19.3998 18.8988C20.1326 18.1661 20.5 17.2821 20.5 16.2491V3.74994C20.5 2.71685 20.1336 1.83393 19.3998 1.10016Z" fill="white"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))

            }
          </div>
        </div>

        <div className="sponsor">
          <img src={sponsor} alt="" className="bg" />

          <div className="message flex">
            <h4>Navigate your career with confidence</h4>
            <div className="cta" onClick={()=>setRegistrationExpand(true)}>Find career now</div>
          </div>
        </div>

        <div className="footer flex">
          <div className="footer-nav column">
            <a href='#'><img src={logo} alt="CareerCompass logo" title='CareerCompass logo' /></a>
            <div className="nav flex">
              <a href="#">Home</a>
              <a href="#about-us">About us</a>
              <div className="cta" onClick={()=>setRegistrationExpand(true)}>Sign up</div>
            </div>
            <p className="copyright">
              &copy; Copyright reserved 2024.
            </p>
          </div>
          <div className="footer-links flex">
            <div className="links column">
              <h5>Tools</h5>
              {footerLinks.tools.map((tool, i) => (
                <a href={tool.url} key={i} className='link' target='_blank'>{tool.label}</a>
              ))
              }
            </div>

            <div className="links column">
              <h5>Resources</h5>
              {footerLinks.resources.map((source, i) => (
                <a href={source.url} key={i} className='link' target='_blank'>{source.label}</a>
              ))
              }
            </div>

            <div className="links column">
              <h5>Others</h5>
              <div className="link">Developer option</div>
              <div className="link">Feedback</div>
              <div className="link">FAQs</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage