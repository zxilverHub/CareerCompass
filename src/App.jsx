import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import CareerCompass from './webapp/CareerCompass'
import LandingPage from './landingpage/LandingPage'

function App() {
  const domain = useSelector(state => state.domain.isInLandingPage)

  return (
    <>
      { domain?
        <LandingPage /> :
        <CareerCompass />
      }
    </>
  )
}

export default App
