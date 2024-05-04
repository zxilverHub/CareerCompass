import { expanNav } from '../../../redux/apps'
import { useSelector, useDispatch } from 'react-redux'


function Explore() {
  const dispatch = useDispatch()
  return (
    <div>Explore

    <button className='menu-button' 
              onClick={()=>{
                dispatch(expanNav(true))
              }}>
              <svg width="18" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H33.3077M1 11H33.3077M1 21H33.3077" stroke="#333A73" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
              </svg>
          </button>
    </div>
  )
}

export default Explore