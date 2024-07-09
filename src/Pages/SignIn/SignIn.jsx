import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye as Visible, FaEyeSlash as InVisible } from "react-icons/fa";
import styles from './SignIn.module.scss';
import image from './../../Assets/Images/Account/signin_signup_vector.svg';
import google from './../../Assets/Images/Account/google.svg';
import facebook from './../../Assets/Images/Account/facebook.svg';
import apple from './../../Assets/Images/Account/apple.svg';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const dataSubmit = event => {
        event.preventDefault();
        console.log(formData);
    };

    const dataChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    };

    return (
        <section className={styles.main}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Մուտք Գործել
                    </h1>
                    <form className={styles.form} action="" method="POST" onSubmit={dataSubmit}>
                        <h3 className={styles.formText}>
                            Չունե՞ք պրոֆիլ <Link to={'/signup'}>Գրանցվել</Link>
                        </h3>
                        <input
                            className={`${styles.input} ${errors.email ? styles.active : ''}`}
                            type="text" name="email"
                            placeholder="Էլ․ Հասցե"
                            onChange={dataChange}
                            required />
                        {errors.email && <div className={styles.errorMessage} title={errors.email}>{errors.email}</div>}
                        <div className={styles.password}>
                            <input className={`${styles.input} ${errors.password ? styles.active : ''}`}
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Գաղտնաբառ"
                                onChange={dataChange}
                                required />
                            <span className={styles.vision}
                                onClick={() => {
                                    setIsPasswordVisible(!isPasswordVisible);
                                }}
                            >
                                {isPasswordVisible ? <Visible /> : <InVisible />}
                            </span>
                        </div>
                        {errors.password && <div className={styles.errorMessage} title={errors.password}>{errors.password}</div>}
                        <button className={styles.submit} type="submit">Մուտք Գործել</button>
                    </form>
                    <div className={styles.or}>Կամ</div>
                    <div className={styles.options}>
                        <a className={styles.icon} href="!#"><img src={google} alt="" /> Շարունակել Google-ով</a>
                        <a className={styles.icon} href="!#"><img src={facebook} alt="" /> Շարունակել Facebook-ով</a>
                        <a className={styles.icon} href="!#"><img src={apple} alt="" /> Շարունակել Apple-ով</a>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default SignIn;
