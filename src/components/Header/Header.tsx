import React from "react";
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  return <div className={s.header}>
    <h1 className={s.title}>Gen<span className={s.pass}>Pass</span></h1>
    <div className={s.links}>
      <NavLink className={s.Navlink} to='/'><div><h1 className={s.link}>Home</h1></div></NavLink>
      <NavLink className={s.Navlink} to='/generator'><div><h1 className={s.link}>Password Generator</h1></div></NavLink>
      

    </div>
  </div>;
};
