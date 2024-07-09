import React from 'react'
import styles from './Footer.module.scss'

import phone from './../../Assets/Images/Home/phone.svg'

import logo from './../../Assets/Images/logo.svg'

import Button from './../Button/Button'

import { Link } from 'react-router-dom'

import { FaInstagram as Instagram, FaFacebookF as Facebook, FaTelegramPlane as Telegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <Link to="/"><Instagram /></Link>
                        </div>
                        <div className={styles.listItem}>
                            <Link to="/"><Facebook /></Link>
                        </div>
                        <div className={styles.listItem}>
                            <Link to="/"><Telegram /></Link>
                        </div>

                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.img}>
                        <img src={phone} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.name}>Միացե՛ք մեր Telegram ալիքին!</h3>
                        <p className={styles.text}>Քննարկեք խնդիրները այլ աշակերտների հետ</p>
                        <Button to="#" className={styles.button}>Միանալ Telegram-ին հիմա</Button>
                    </div>
                </div>
                <div className={styles.right}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <Link to="/">Գլխավոր</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/courses">Դասընթացներ</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/about">Մեր մասին</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/contact">Կապ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                2024 &#169; Physmath Academy. Բոլոր իրավունքները պաշտպանված են։
            </div>
        </footer>
    )
}

export default Footer
