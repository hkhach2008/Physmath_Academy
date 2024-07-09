import React from 'react'
import styles from './Classes.module.scss'

import Button from './../../Button/Button'

import top from './../../../Assets/Images/Home/top.svg'
import btm from './../../../Assets/Images/Home/btm.svg'

const Classes = () => {
    return (
        <section className={styles.classes}>
            <div className={styles.row}>
                <div className={styles.row_content}>
                    <h2 className={styles.title}>Միացե՛ք մեր առցանց դասերին</h2>
                    <p className={styles.text}>Վաղուց հաստատված փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ նայում է դրա դասավորությունը: Վաղուց հաստատված փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ դիտում է դրա դասավորությունը: Վաղուց հաստատված փաստ է, որ ընթերցողի ուշադրությունը կշեղվի ընթեռնելի բովանդակությունից djh basgfhsc:</p>
                    <Button to="#" filled={false}>Հանդիպման հղում</Button>
                </div>
                <div className={styles.row_img}>
                    <img src={top} alt="" />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.row_img}>
                    <img src={btm} alt="" />
                </div>
                <div className={styles.row_content}>
                    <h2 className={styles.title}>Հասանելի է բոլորին անվճար:</h2>
                    <p className={styles.text}>Վաղուց հաստատված փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ նայում է դրա դասավորությունը: Վաղուց հաստատված փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ դիտում է դրա դասավորությունը: Վաղուց հաստատված փաստ է, որ ընթերցողի ուշադրությունը կշեղվի ընթեռնելի բովանդակությունից djh basgfhsc:</p>
                </div>
            </div>
        </section>
    )
}

export default Classes
