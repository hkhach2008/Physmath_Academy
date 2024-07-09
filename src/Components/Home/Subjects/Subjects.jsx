import React, { useState, useEffect } from 'react';
import styles from './Subjects.module.scss';
import informatics from './../../../Assets/Images/Home/informatics.svg';
import maths from './../../../Assets/Images/Home/maths.svg';
import physics from './../../../Assets/Images/Home/physics.svg';
import Subject from '../../Subject/Subject';

const Subjects = () => {



    const [data, setData] = useState([]);
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
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const subjects = [
        {
            name: "Մաթեմատիկա",
            img: maths,
            text: "Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: ",
            active: true,
            to: "/courses/maths"
        },
        {
            name: "Ֆիզիկա",
            img: physics,
            text: "Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: ",
            active: false,
            to: "/"
        },
        {
            name: "Ինֆորմատիկա",
            img: informatics,
            text: "Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: ",
            active: false,
            to: "/"
        },
    ];

    return (
        <section className={styles.subjects}>
            <div className={styles.title}>Առարկաներ</div>
            <div className={styles.container}>
                {subjects.map((subject, idx) => (
                    <Subject
                        key={idx}
                        img={subject.img}
                        name={subject.name}
                        text={subject.text}
                        to={subject.to}
                        active={subject.active}
                    />
                ))}
            </div>
            <img src={`http://localhost:8000${data["all subjects"][1].img}`} alt="" />
        </section>
    );
}

export default Subjects;
