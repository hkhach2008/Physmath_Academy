import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye as Visible, FaEyeSlash as InVisible } from "react-icons/fa";
import styles from './SignUp.module.scss';
import image from './../../Assets/Images/Account/signin_signup_vector.svg';
import google from './../../Assets/Images/Account/google.svg';
import facebook from './../../Assets/Images/Account/facebook.svg';
import apple from './../../Assets/Images/Account/apple.svg';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const dataSubmit = event => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log(formData);
    };

    const dataChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    };

    const validateForm = () => {
        const nameRegex = /^(?:([^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]'’,.\s-])['’,.]?){2,}(?:[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]'’,.\s-]){2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x20-\x7E]|\\[\x20-\x7E])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x20-\x7E]|\\[\x20-\x7E])+)\])/;
        const validationErrors = {};

        if (!nameRegex.test(formData.name)) {
            validationErrors.name = "Invalid Name";
        }

        if (formData.password === "pi" || formData.password === "e") {
            validationErrors.password = "Your password is too long";
        } else if (!passwordRegex.test(formData.password)) {
            validationErrors.password = "Password must be at least 8 characters long, containing at least one lowercase letter, one uppercase letter, one number, and one special character";
        }

        if (!emailRegex.test(formData.email)) {
            validationErrors.email = "Invalid Email";
        }

        return validationErrors;
    };

    return (
        <section className={styles.main}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Ստեղծել Պրոֆիլ
                    </h1>
                    <div className={styles.options}>
                        <a className={styles.icon} href="!#"><img src={google} alt="" /></a>
                        <a className={styles.icon} href="!#"><img src={facebook} alt="" /></a>
                        <a className={styles.icon} href="!#"><img src={apple} alt="" /></a>
                    </div>
                    <div className={styles.or}>Կամ</div>
                    <form className={styles.form} action="" method="POST" onSubmit={dataSubmit}>
                        <h2 className={styles.formName}>Գրանցվել Էլ․ Հասցեյով</h2>
                        <h3 className={styles.formText}>Արդեն ունե՞ք պրոֆիլ <Link to={'/signin'}>Մուտք Գործել</Link></h3>
                        <input className={`${styles.input} ${errors.name && styles.active}`}
                            type="text"
                            name="name"
                            placeholder="Անուն Ազգանուն"
                            onChange={dataChange}
                            required />
                        {errors.name && <div className={styles.errorMessage} title={errors.name}>{errors.name}</div>}
                        <input className={`${styles.input} ${errors.email && styles.active}`}
                            type="text"
                            name="email"
                            placeholder="Էլ․ Հասցե"
                            onChange={dataChange}
                            required />
                        {errors.email && <div className={styles.errorMessage} title={errors.email}>{errors.email}</div>}
                        <div className={styles.password}>
                            <input
                                className={`${styles.input} ${errors.password && styles.active}`}
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
                        <button className={styles.submit} type="submit">Գրանցվել</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
