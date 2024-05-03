import { useSelector, useDispatch } from 'react-redux'
import {changeDomain} from '../redux/domain.jsx'
import UserApp from './userapp/UserApp.jsx'
import Admin from './adminapp/Admin.jsx'


function CareerCompass() {
    const dispatch = useDispatch()
    const isInAdmin = useSelector(state => state.domain.isInAdmin)

  return (
    <div id='career-compass'>
      {isInAdmin?
        <Admin /> :
        <UserApp />
      }
    </div>
  )
}

export default CareerCompass