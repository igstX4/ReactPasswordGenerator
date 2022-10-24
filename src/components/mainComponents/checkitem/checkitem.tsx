import React from 'react'
import Checkbox from "@mui/material/Checkbox";
import s from './checkitem.module.css'
interface ICheckitem {
    value: boolean;
    handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}
export const Checkitem : React.FC<ICheckitem> = ({value, handle, text}) => {
  return (
    <>
        <div className={s.checkitem}>
            <Checkbox checked={value} onChange={handle} />
            <p className={s.text1}>{text}</p>
        </div>
    </>
  )
}

