import React, { useState } from 'react';
import styles from './Header.module.scss';

import Button from '../Button/Button';
import logo from './../../Assets/Images/logo.svg';

import { GoSearch as Search, GoX as Close } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuState, setMenuState] = useState(false);

    const nav = [
        {
            name: "Գլխավոր",
            to: "/",
            active: true
        },
        {
            name: "Դասընթացներ",
            to: "/courses",
            active: false
        },
        {
            name: "Մեր մասին",
            to: "/about",
            active: false
        },
        {
            name: "Կապ",
            to: "/contact",
            active: false
        }
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div 
                    className={`${styles.menu} ${menuState ? styles.active : ''}`} 
                    onClick={() => setMenuState(!menuState)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`${styles.list} ${menuState ? styles.active : ''}`}>
                    {nav.map((link, idx) => (
                        <Link 
                            key={idx} 
                            to={link.to} 
                            className={`${styles.list_item} ${link.active && styles.selected}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className={styles.accounts}>
                        <Button to={'/signin'} filled={false}>Մուտք</Button>
                        <div className={styles.btn_space}></div>
                        <Button to={'/signup'} filled={true}>Գրանցում</Button>
                    </div>
                    <form 
                        action="" 
                        method="POST" 
                        className={`${styles.form} ${styles.form_menu}`}
                    >
                        <input 
                            type="search" 
                            name="search" 
                            className={styles.search} 
                            placeholder='Search...' 
                        />
                        <div className={styles.search_btn}>
                            <Search className={styles.search_ico} />
                        </div>
                    </form>
                </ul>
            </nav>
            <div className={styles.user}>
                <form 
                    action="" 
                    method="POST" 
                    className={`${styles.form} ${styles.form_big}`} 
                    id='search_bar'
                >
                    <input 
                        type="search" 
                        name="search" 
                        className={styles.search} 
                        placeholder='Search...' 
                    />
                    <div 
                        className={styles.search_btn} 
                        onClick={() => {
                            document.getElementById("search_bar").classList.toggle(styles.search_active);
                        }}
                    >
                        <Search className={styles.search_ico} />
                        <Close className={styles.close_ico} />
                    </div>
                </form>
                <div className={styles.accounts}>
                    <Button to={'/signin'} filled={false}>Մուտք</Button>
                    <div className={styles.btn_space}></div>
                    <Button to={'/signup'} filled={true}>Գրանցում</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
