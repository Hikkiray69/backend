'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Catalog.module.css';
import ico_1 from './img/ico_1.svg';
import ico_2 from './img/ico_2.svg';
import ico_3 from './img/ico_3.svg';
import ico_4 from './img/ico_4.svg';
import ico_5 from './img/ico_5.svg';
import ico_6 from './img/ico_6.svg';
import ico_7 from './img/ico_7.svg';
import ico_8 from './img/ico_8.svg';
import ico_9 from './img/ico_9.svg';
import ico_10 from './img/ico_10.svg';
import ico_11 from './img/ico_11.svg';
import ico_12 from './img/ico_12.svg';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            catalog: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function Catalog() {
    return (
        <catalog className={styles.catalog}>

            <div className={styles.grid}>

                <div className={styles.grid_1}>
                    <Image src={ico_1} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_1_font}>Оригинальные запчасти</p>
                        <p className={styles.count}>730 товаров</p>
                        
                    </div>
                </div>

                <div className={styles.grid_2}>
                    <Image src={ico_2} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_2_font}>Неоригинальные запчасти</p>
                        <p className={styles.count}>287 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_3}>
                    <Image src={ico_3} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_3_font}>Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_4}>
                    <Image src={ico_4} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_4_font}>Кузовные запчасти</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_5}>
                    <Image src={ico_5} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_5_font}>Запчасти для ТО</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_6}>
                    <Image src={ico_6} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_6_font}>Автостёкла</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_7}>
                    <Image src={ico_7} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_7_font}>Автомасла</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_8}>
                    <Image src={ico_8} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_8_font}>Автохимия</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_9}>
                    <Image src={ico_9} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_9_font}>Диски</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_10}>
                    <Image src={ico_10} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_10_font}>Аккумуляторы</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_11}>
                    <Image src={ico_11} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_11_font}>Автолампы</p>
                        <p className={styles.count}>730 товаров</p>
                    </div>
                </div>

                <div className={styles.grid_12}>
                    <Image src={ico_12} alt='' className={styles.grid_img} />
                    <div className={styles.text}>
                        <p className={styles.grid_12_font}>Поставщикам</p>
                    </div>
                </div>

            </div>

        </catalog>
    );
}