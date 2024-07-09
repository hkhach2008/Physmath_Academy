import React from 'react';
import styles from './Gallery.module.scss';

import gallery1 from '../../../Assets/Images/Home/gallery1.png';
import gallery2 from '../../../Assets/Images/Home/gallery2.png';
import gallery3 from '../../../Assets/Images/Home/gallery3.png';
import illustr1 from '../../../Assets/Images/Home/illustr1.svg';
import notes from '../../../Assets/Images/Home/notes.svg';
import book from '../../../Assets/Images/Home/book.svg';
import key from '../../../Assets/Images/Home/key.svg';
import time from '../../../Assets/Images/Home/time.svg';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <div className={styles.photos}>
                <div className={styles.photos_top}>
                    <div className={styles.photos_top_left}>
                        <img src={gallery1} alt="" />
                    </div>
                    <div className={styles.photos_top_right}>
                        <p className={styles.gallery_text}>Ձեր ուսուցումը ավելի հեշտ ու հաճելի՝ մեզ հետ</p>
                    </div>
                </div>
                <div className={styles.photos_bottom}>
                    <div className={styles.photos_bottom_left}>
                        <div className={styles.photos_bottom_left_top}>
                            <img src={gallery2} alt="" />
                        </div>
                        <div className={styles.photos_bottom_left_bottom}>
                            <img src={illustr1} alt="" />
                        </div>
                    </div>
                    <div className={styles.photos_bottom_right}>
                        <img src={gallery3} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.texts}>
                <div className={styles.texts_img}>
                    <img src={notes} alt="" />
                </div>
                <div className={styles.texts_list}>
                    <div className={styles.texts_listItem}>
                        <div className={styles.texts_listItem_icon}>
                            <img src={book} alt="" />
                        </div>
                        <div className={styles.texts_listItem_txt}>
                            Բարելավեք ձեր գիտելիքները մեզ հետ
                        </div>
                    </div>
                    <div className={styles.texts_listItem}>
                        <div className={styles.texts_listItem_icon}>
                            <img src={key} alt="" />
                        </div>
                        <div className={styles.texts_listItem_txt}>
                            Ստացեք հեշտ մուտք դեպի ամեն ինչ
                        </div>
                    </div>
                    <div className={styles.texts_listItem}>
                        <div className={styles.texts_listItem_icon}>
                            <img src={time} alt="" />
                        </div>
                        <div className={styles.texts_listItem_txt}>
                            Խնայեք Ձեր ժամանակը վստահելով մեզ
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
