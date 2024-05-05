import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from './components/Avatar'
import { expanNav, changContainer } from '../../../redux/apps'
import {emptyIllustration} from '../assets/ImageImporter'
import tempIcon from '../../../assets/icons/logo.png'
import CareerImagesImporter from '../assets/career images/CareerImagesImporter'
import { useEffect, useState } from 'react'

function Home() {
  const avatar = useSelector(state => state.user.avatar)
  const dispatch = useDispatch()
  const results = useSelector(state => state.user.results)

  const tempCareer = [
    {
      career: 'UI/UX design',
      education: ['Skill', 'Experience'],
      id: 1
    },

    {
      career: 'Teacher',
      education: ['Bachelors degree'],
      id: 2
    },

    {
      career: 'Cloud developer',
      education: ['Computer science', 'Skill'],
      id: 3
    }
  ]


  const tempCareerTrends = [
    {
      career: 'Nurse Practitioner',
      salary: 120,
      id: 1
    },

    {
      career: 'Financial manager',
      salary: 130,
      id: 2
    },

    {
      career: 'Software developer',
      salary: 120,
      id: 3
    }
  ]

  const [trendScroll, setTrendScroll] = useState(0)

  const scrollRight = () => {
    const w = document.querySelector('.career-trends').clientWidth

    if(trendScroll < (w*(tempCareerTrends.length-1))) {
      setTrendScroll(prevScroll => prevScroll + w)
    }
  }

  const scrollLeft = () => {
    const w = document.querySelector('.career-trends').clientWidth
    if(trendScroll >= w) {
      setTrendScroll(prevScroll => prevScroll - w)
    }
  }

  useEffect(()=> {
    document.querySelector('.career-trends-card-container').scrollLeft = trendScroll
    const w = document.querySelector('.career-trends').clientWidth

    document.querySelector('.arrow-left').setAttribute('style', `opacity: ${trendScroll <= 0? .2 : 1}`)
    document.querySelector('.arrow-right').setAttribute('style', `opacity: ${trendScroll > w? .2 : 1}`)

  }, [trendScroll])

  return (
    <div id='home'>
      <div className="home-header">
        <button className='menu-button' 
          onClick={()=>{
            dispatch(expanNav(true))
          }}>
          <svg width="18" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H33.3077M1 11H33.3077M1 21H33.3077" stroke="#333A73" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="start-test-button">Start test</div>

        <div className="search-feild">
          <input type="text" placeholder='Search here' />
          <svg 
            onClick={()=>{
              dispatch(changContainer("Search"))
            }}
          width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.27806 10.5138C8.09538 11.3851 6.62716 11.7773 5.16755 11.6119C3.70794 11.4464 2.36474 10.7356 1.40705 9.62175C0.449355 8.5079 -0.052099 7.07332 0.0031478 5.6054C0.0583946 4.13749 0.666262 2.74465 1.70497 1.70595C2.74368 0.667238 4.13651 0.0593712 5.60443 0.00412436C7.07234 -0.0511224 8.50692 0.450332 9.62077 1.40803C10.7346 2.36572 11.4455 3.70892 11.6109 5.16853C11.7763 6.62814 11.3841 8.09636 10.5128 9.27904L13.7221 12.4871C13.808 12.5671 13.8768 12.6636 13.9246 12.7708C13.9723 12.8779 13.998 12.9936 14.0001 13.1109C14.0021 13.2282 13.9805 13.3448 13.9366 13.4535C13.8927 13.5623 13.8273 13.6611 13.7443 13.7441C13.6613 13.8271 13.5625 13.8925 13.4537 13.9364C13.3449 13.9804 13.2284 14.0019 13.1111 13.9999C12.9938 13.9978 12.8781 13.9721 12.7709 13.9244C12.6638 13.8766 12.5673 13.8078 12.4873 13.7219L9.27806 10.5138ZM9.90128 5.82397C9.90128 6.90529 9.47173 7.94232 8.70712 8.70693C7.94251 9.47154 6.90548 9.90109 5.82416 9.90109C4.74284 9.90109 3.70581 9.47154 2.9412 8.70693C2.17659 7.94232 1.74704 6.90529 1.74704 5.82397C1.74704 4.74265 2.17659 3.70562 2.9412 2.94101C3.70581 2.17641 4.74284 1.74685 5.82416 1.74685C6.90548 1.74685 7.94251 2.17641 8.70712 2.94101C9.47173 3.70562 9.90128 4.74265 9.90128 5.82397Z" fill="#333A73"/>
          </svg>
        </div>

        <div 
          onClick={()=>{
            dispatch(changContainer("Profile"))
          }}
        className="home-avatar">
          <Avatar src={avatar} />
        </div>
      </div>


      <div className="home-results">
          <h2>Recent results</h2>
          {/* Showing results */}
          { !results.isTakeTest &&
            <div className="empty-result">
              <img src={emptyIllustration} alt="empty-result" />
              <p>(Please take assessment test)</p>
            </div>
          }
      </div>

      <div className="home-main-content">
          <div className="home-explore">
            <h2>Explore</h2>

            <div className="career-trends">
              <h2>Emerging career trends <span>2024</span> </h2>

              <div className="career-trends-card-container">
                {tempCareerTrends.map((career, i) => (
                  <div className="career-trend-card" key={career.career+i}>
                    <CareerImagesImporter id={career.id} />
                    <div className="info">
                      <p className='career-name'>{career.career}</p>
                      <p className='salary'>Average yearly salary: <span>${career.salary}k</span> </p>
                    </div>
                  </div>
                ))

                }
              </div>

              <button 
                  onClick={()=>{
                    scrollLeft()
                  }}
                className='arrow-left'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4639 2.11374C18.3024 2.0288 18.1208 1.98977 17.9386 2.00087C17.7565 2.01198 17.5809 2.07281 17.4309 2.17674L4.43093 11.1767C4.29849 11.2692 4.19033 11.3922 4.11564 11.5354C4.04095 11.6786 4.00195 11.8377 4.00195 11.9992C4.00195 12.1607 4.04095 12.3199 4.11564 12.4631C4.19033 12.6063 4.29849 12.7293 4.43093 12.8217L17.4309 21.8217C17.581 21.9255 17.7565 21.9863 17.9386 21.9975C18.1207 22.0087 18.3024 21.9699 18.464 21.8852C18.6256 21.8005 18.761 21.6733 18.8554 21.5172C18.9499 21.3611 18.9999 21.1822 18.9999 20.9997V2.99974C19 2.8172 18.95 2.63814 18.8555 2.48196C18.7611 2.32577 18.6256 2.19843 18.4639 2.11374ZM16.9999 19.0907L6.75693 11.9997L16.9999 4.90874V19.0907Z" fill="#FAFAFA"/>
                  </svg>
                </button>

                <button
                  onClick={()=>{
                    scrollRight()
                  }}
                className='arrow-right'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53601 21.8855C5.69777 21.9697 5.8794 22.0082 6.06139 21.9969C6.24338 21.9856 6.41886 21.925 6.56901 21.8215L19.569 12.8215C19.7018 12.7295 19.8104 12.6067 19.8854 12.4635C19.9604 12.3203 19.9995 12.1611 19.9995 11.9995C19.9995 11.8379 19.9604 11.6787 19.8854 11.5356C19.8104 11.3924 19.7018 11.2696 19.569 11.1775L6.56901 2.17754C6.41915 2.07299 6.24346 2.0116 6.0611 2.00004C5.87874 1.98849 5.69671 2.02722 5.53486 2.11202C5.373 2.19682 5.23753 2.32442 5.14322 2.48092C5.0489 2.63743 4.99937 2.81682 5.00001 2.99954V20.9995C4.99998 21.1821 5.04991 21.3611 5.14439 21.5173C5.23888 21.6735 5.37431 21.8008 5.53601 21.8855ZM7.00001 4.90854L17.243 11.9995L7.00001 19.0905V4.90854Z" fill="white"/>
                  </svg>
                </button>

            </div>
            
            <div className="home-careers">
              <div className="career-label">
                <h2>Careers</h2>
                <div className="view-more">View more</div>
              </div>

              {tempCareer.map((career, i) => (
                <div className="career-card" key={career.career+i}>
                  <img src={tempIcon} alt={career.career} />

                  <div className="info column">
                    <p className='career-name'>{career.career}</p>

                    <div className="education flex">
                    {career.education.map((edu, j) => (
                      <div className="edu" key={j}>
                        {edu}
                      </div>
                    ))
                    } 
                    </div>
                  </div>
                </div>
              ))

              }
            </div>

          </div>
          <div className="home-goals">

          </div>
      </div>
      
    </div>
  )
}

export default Home