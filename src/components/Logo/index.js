import React from 'react'
import {data} from '@/appdata'

function Logo({className}) {
  const { appname} = data||{}
  return (
    <h1 className={`text-3xl font-extrabold text-[#070b34] ${className}`}>{appname}</h1>
  )
}

export default Logo