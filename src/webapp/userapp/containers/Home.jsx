import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from './components/Avatar'
import { expanNav } from '../../../redux/apps'

function Home() {
  const avatar = useSelector(state => state.user.avatar)
  const dispatch = useDispatch()

  return (
    <div id='home'>
      <div className="home-header">
        <button className='menu-button' 
          onClick={()=>{
            dispatch(expanNav(true))
          }}>
          <svg width="22" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H33.3077M1 11H33.3077M1 21H33.3077" stroke="#333A73" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="start-test-button">Start test</div>

        <div className="search-feild">
          <input type="text" placeholder='Search here' />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.27806 10.5138C8.09538 11.3851 6.62716 11.7773 5.16755 11.6119C3.70794 11.4464 2.36474 10.7356 1.40705 9.62175C0.449355 8.5079 -0.052099 7.07332 0.0031478 5.6054C0.0583946 4.13749 0.666262 2.74465 1.70497 1.70595C2.74368 0.667238 4.13651 0.0593712 5.60443 0.00412436C7.07234 -0.0511224 8.50692 0.450332 9.62077 1.40803C10.7346 2.36572 11.4455 3.70892 11.6109 5.16853C11.7763 6.62814 11.3841 8.09636 10.5128 9.27904L13.7221 12.4871C13.808 12.5671 13.8768 12.6636 13.9246 12.7708C13.9723 12.8779 13.998 12.9936 14.0001 13.1109C14.0021 13.2282 13.9805 13.3448 13.9366 13.4535C13.8927 13.5623 13.8273 13.6611 13.7443 13.7441C13.6613 13.8271 13.5625 13.8925 13.4537 13.9364C13.3449 13.9804 13.2284 14.0019 13.1111 13.9999C12.9938 13.9978 12.8781 13.9721 12.7709 13.9244C12.6638 13.8766 12.5673 13.8078 12.4873 13.7219L9.27806 10.5138ZM9.90128 5.82397C9.90128 6.90529 9.47173 7.94232 8.70712 8.70693C7.94251 9.47154 6.90548 9.90109 5.82416 9.90109C4.74284 9.90109 3.70581 9.47154 2.9412 8.70693C2.17659 7.94232 1.74704 6.90529 1.74704 5.82397C1.74704 4.74265 2.17659 3.70562 2.9412 2.94101C3.70581 2.17641 4.74284 1.74685 5.82416 1.74685C6.90548 1.74685 7.94251 2.17641 8.70712 2.94101C9.47173 3.70562 9.90128 4.74265 9.90128 5.82397Z" fill="#333A73"/>
          </svg>
        </div>

        <div className="home-avatar">
          <Avatar src={avatar} />
        </div>
      </div>
    </div>
  )
}

export default Home