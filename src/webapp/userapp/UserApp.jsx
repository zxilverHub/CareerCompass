import './userapp.css'
import Nav from './nav/Nav'
import { useState } from 'react'

import Home from './containers/Home'
import Profile from './containers/Profile'
import Explore from './containers/Explore'
import Settings from './containers/Settings'

const Container = (container) => {
  switch(container) {
    case 'Home':
      return <Home />
    case 'Profile':
      return <Profile />
    case 'Explore':
      return <Explore />
    case 'Settings':
      return <Settings />
  }
}

function UserApp() {
  const [appContainer, setAppContainer] = useState('Home')

  return (
    <div className='user-app'>
        <Nav container={setAppContainer} />
        <div className="page-container">
            {Container(appContainer)}
        </div>
    </div>
  )
}

export default UserApp