import React from 'react';
import styles from './Main.module.scss';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import main from './../../../Assets/Images/Home/main.png';

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.slogan}>Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ</h1>
                <p className={styles.text}>Կան Lorem Ipsum-ի շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ,</p>
                <div className={styles.counts}>
                    <div className={styles.count}>
                        <div className={styles.count_num}>
                            <CountUp start={0} end={35} duration={4} />+
                        </div>
                        <div className={styles.count_txt}>Քննության թեստեր</div>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.count_num}>
                            <CountUp start={0} end={15} duration={4} delay={3.5} />+
                        </div>
                        <div className={styles.count_txt}>Վիդեո դասեր</div>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.count_num}>
                            <CountUp start={0} end={100} duration={4} delay={7} />+
                        </div>
                        <div className={styles.count_txt}>Լուծված խնդիրներ</div>
                    </div>
                </div>
                <Link to="/" className={styles.button}>Սկսել</Link>
            </div>
            <div className={styles.img}>
                <img src={main} alt="" />
            </div>
        </section>
    );
}

export default Main;
