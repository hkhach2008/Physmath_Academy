import React, { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import informatics from './../../../Assets/Images/Home/informatics.svg';
import maths from './../../../Assets/Images/Home/maths.svg';
import physics from './../../../Assets/Images/Home/physics.svg';
import Subject from '../../Subject/Subject';

const Subjects = () => {



    const [subjects, setSubject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/subjcets')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSubject(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <section className={styles.subjects}>
            <div className={styles.title}>Առարկաներ</div>
            <div className={styles.container}>
                {subjects.map((subject, idx) => (
                    <Subject
                        key={idx}
                        img={`http://localhost:8000${subject.img}`}
                        name={subject.title}
                        text={subject.description}
                        to={subject.subjectstatus ? `/courses/${subject.link}` : '/'}
                        active={subject.subjectstatus}
                    />
                ))}
            </div>
        </section>
    );
}

export default Subjects;
