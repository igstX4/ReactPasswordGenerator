import React from 'react'
import s from './Home.module.css'

export const Home = () => {
  return (
    <div className={s.home}>
        <h1 className={s.title}>Password Generator</h1>
        <p className={s.descr}>This generator generates a random password for you and your account</p>
    </div>
  )
}
