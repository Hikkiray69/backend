'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';
import Questions from './img/Questions.svg'
import Stats from './img/Stats.svg'
import VISA from './img/VISA.svg'
import MC from './img/MC.svg'
import MIR from './img/MIR.svg'
import message from './img/message.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.content}>

                <div className={styles.top}>

                    <div className={styles.top_flex}>
                        <div className={styles.top_margin1}>
                            <p className={styles.titles}>Меню компании</p>
                            <ul className={styles.ul1}>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Что такое Oner</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Реквизиты и информация</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Новости</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Вакансии</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Поставщикам</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Контакты</a></li>
                            </ul>
                        </div>

                        <div className={styles.top_margin2}>
                            <p className={styles.titles}>Каталоги</p>
                            <ul className={styles.ul2}>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Оригинальные запчасти</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Неоригинальные запчасти</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Запчасти для ТО</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Автомасла</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Аккумуляторы</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Распродажа</a></li>
                            </ul>
                        </div>

                        <div className={styles.top_margin3}>
                            <p className={styles.titles}>Помощь</p>
                            <ul className={styles.ul3}>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Часто задаваемые вопросы</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Консультация Online</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Оплата заказа</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Доставка заказа</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Возврат товара</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Забыл пароль</a></li>
                            </ul>
                        </div>

                        <div className={styles.top_margin4}>
                            <p className={styles.titles}>Товары и бренды</p>
                            <ul className={styles.ul4}>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Список брендов</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Популярные товары</a></li>
                                <li className={styles.font_ul}><a href='https://www.youtube.com/' className={styles.text}>Наличие на складах</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={styles.top_stats}>
                        <div className={styles.stats}>
                            <div className={styles.questions}>
                                <Image src={message} alt='' className={styles.questions_img}/>
                                <div className={styles.questions_font0}>
                                    <p className={styles.questions_font1}>Консультация Online</p>
                                    <p className={styles.questions_font2}>Задавайте вопросы</p>
                                </div>
                            </div>

                            <div className={styles.status}>
                                <div className={styles.status_img}></div>
                                <p className={styles.status_font}>Сервис работает в обычном режиме</p>
                            </div>
                        </div>
                        <div className={styles.docx_top}>
                            <p className={styles.docx_font}><a href='https://www.youtube.com/' className={styles.text}>Оферта</a></p>
                            <p className={styles.docx_font}><a href='https://www.youtube.com/' className={styles.text}>Конфиденциальность</a></p>
                        </div>
                    </div>

                </div>

            </div>

            <hr className={styles.hr} />

            <div className={styles.content}>

                <div className={styles.bottom}>


                    <div className={styles.bottom_info}>

                        <p className={styles.copyright}>Copyright © ООО «Oner.ru» 2021. All rights reserved.</p>

                        <div className={styles.payment}>
                            <p className={styles.payment_font}>Принимаем к оплате</p>
                            <div className={styles.payment_img}>
                                <Image src={VISA} alt="Visa" />
                                <Image src={MC} alt="MasterCard" />
                                <Image src={MIR} alt="Мир" />
                            </div>
                        </div>
                        <div className={styles.docx_bottom}>

                            <p className={styles.docx_font}><a href='https://www.youtube.com/' className={styles.text}>Оферта</a></p>
                            <p className={styles.docx_font}><a href='https://www.youtube.com/' className={styles.text}>Конфиденциальность</a></p>

                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}