'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from "./img/logo.svg";
import styles from './Header.module.css';
import Location from './img/Location.svg';
import Phone from './img/Phone.svg';
import User from './img/User.svg';
import category from './img/category.svg';
import bin from './img/bin.svg';
import minibin from './img/minibin.svg';
import Script from 'next/script'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.contaier}>
                <div className={styles.content}>

                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <a href='http://localhost:3000/' className={styles.a}><Image src={logo} alt="ONER.RU" className={styles.logo_size} /></a>
                        </div>
                        <div className={styles.navigation}>
                            <div className={styles.search_top}>

                                <div className={styles.search_zone}>
                                    <div className={styles.search}>
                                        <form>
                                            <input type="search" name="text" className={styles.srch} placeholder="Введите номер запчасти или VIN" />
                                            {/*<input type="submit" name="submit" className="submit" value="Search" />*/}
                                        </form>
                                        <button className={styles.search_button}>

                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 
                                            14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 
                                            21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 
                                            2 11 2Z">
                                                </path>
                                            </svg>

                                        </button>

                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className={styles.settings}>
                            <div className={styles.settings_Location}>
                                <Image src={Location} alt="Loc" />
                                <p className={styles.font_margin_Location}>Санкт-Петербург</p>
                            </div>
                            <div className={styles.settings_Phone}>
                                <Image src={Phone} alt="Phn" />
                                <p className={styles.font_margin_Phone}>+7 (347) 229-46-45</p>
                            </div>
                            <div className={styles.settings_minibin}>
                                <Image src={minibin} alt="bin" />
                            </div>
                            <div className={styles.settings_Enter}>
                                <Image src={User} alt="User" />
                                <p className={styles.font_margin_Enter}>Вход / Регистрация</p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className={styles.hr} />

                <div className={styles.content}>

                    <div className={styles.bottom}>

                        <button className={styles.general_category_button}>
                            <p className={styles.font_margin_general_category_button}>Все категории</p>
                            <Image src={category} alt='' className={styles.general_category_img} />
                        </button>
                        <div className={styles.search_bottom}>

                            <div className={styles.search_zone}>
                                <div className={styles.search}>
                                    <form className={styles.srch_form}>
                                        <input type="search" name="text" className={styles.srch} placeholder="Введите номер запчасти или VIN" />
                                        {/*<input type="submit" name="submit" className="submit" value="Search" />*/}
                                    </form>
                                    <button className={styles.search_button}>

                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 
                                        14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 
                                        21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 
                                        2 11 2Z">
                                            </path>
                                        </svg>

                                    </button>

                                </div>
                            </div>

                        </div>
                        

                        <div className={styles.category}>


                            <button className={styles.category_button1}>
                                <p className={styles.font_margin_category_button}>Запчасти для ТО</p>
                            </button>

                            <button className={styles.category_button2}>
                                <p className={styles.font_margin_category_button}>Автомасла</p>
                            </button>

                            <button className={styles.category_button3}>
                                <p className={styles.font_margin_category_button}>Оригинальные запчасти</p>
                            </button>

                            <button className={styles.category_button4}>
                                <p className={styles.font_margin_category_button}>Неоригинальные запчасти</p>
                            </button>

                            <button className={styles.category_button5}>
                                <p className={styles.font_margin_category_button}>Лампочки</p>
                            </button>
                                
                            <button className={styles.category_button6}>
                                <p className={styles.font_margin_category_button}>Аккумуляторы</p>
                            </button>

                        </div>


                        <button className={styles.bin}>
                            <p className={styles.bin_message}>5</p>
                            <p className={styles.font_margin_bin}>Корзина</p>
                            <Image src={bin} alt='' className={styles.bin_ico} />
                        </button>

                    </div>

                </div>
            </div>
        </header>
    );
}