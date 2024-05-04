import './userapp.css'
import Nav from './nav/Nav'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
  const appContainer = useSelector(state => state.apps.currentPage) 

  return (
    <div className='user-app'>
        <Nav />
        <div className="page-container">
            {Container(appContainer)}
        </div>
    </div>
  )
}

export default UserApp