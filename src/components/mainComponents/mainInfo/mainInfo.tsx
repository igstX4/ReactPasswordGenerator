import React from 'react'
import s from './mainInfo.module.css'

export const MainInfo = () => {
    return (
        <>
            <div className={s.titlediv}>
                <h1 className={s.title}>Generate strong and random passwords</h1>
            </div>
            <div className={s.descrdiv}><p className={s.descr}>Our online random password generator helps build strong, reliable, passwords instanly. Use the filters below to create a password for any account</p></div>
            
        </>
        )
}

