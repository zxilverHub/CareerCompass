import React, { useState } from 'react'
import defautAvatar from './user.png'

function Avatar({src}) {
    const [imageFound, setImageFound] = useState(true)

    const handleSrcError = ()=> {
        setImageFound(false)
    }

  return (
    <>
        {imageFound?
            <img src={src} onError={handleSrcError} /> :
            <img src={defautAvatar} />
        }
    </>
  )
}

export default Avatar