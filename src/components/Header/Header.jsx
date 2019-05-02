import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGvOZoivcDpZ-byAdPFGMOdvv90FkM55qw8Pf4fGe7LhU2c7j'></img>
                </NavLink>
        </header>
    );
}
export default Header;