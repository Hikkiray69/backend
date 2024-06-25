'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Goods.module.css';
import arrow from './img/arrow.svg';
import oils from './img/oils.svg';
import img_1 from './img/img_1.svg';
import img_2 from './img/img_2.svg';
import img_3 from './img/img_3.svg';
import img_4 from './img/img_4.svg';
import review from './img/review.svg';
import buy_bin from './img/buy_bin.svg';
import buy_bin_active from './img/buy_bin_active.svg';
import genesis from './img/genesis.png';
import wheels from './img/wheels.png';
import autoparts from './img/autoparts.png';
import whitearrow from './img/whitearrow.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import arrow_left from './img/arrow_left.svg';
import arrow_right from './img/arrow_right.svg';
import React, { useRef } from 'react';
import styless from './carousel.module.scss'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            goods: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}


export default function Goods() {
    return (
        <goods className={styles.goods}>
            <div className={styles.content}>
                <div className={styles.oils}>
                    <div className={styles.oils_title}>
                        <p className={styles.oils_font}>Автомасла</p>
                        <div className={styles.oils_button}>
                            <p className={styles.oils_button_font}>Все автомасла</p>
                            <Image src={arrow} alt='' className={styles.arrow} />
                        </div>
                    </div>
                    <div className={styles.group}>

                        <Image src={oils} alt='oils №1' className={styles.img} />

                        <div className={styles.block}>
                            <Image src={img_1} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className={styles.block}>

                            <Image src={img_2} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.block}>

                            <Image src={img_3} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.genesis}>
                        <div className={styles.genesis_text}>
                            <p className={styles.genesis_name}>Моторные масла Genesis</p>
                            <div className={styles.genesis_button}>
                                <p className={styles.genesis_button_font}>Перейти</p>
                                <Image src={whitearrow} alt='' />
                            </div>
                        </div>
                        <Image src={genesis} alt='' className={styles.genesis_img} />
                    </div>

                    <div className={styles.wheels}>
                        <div className={styles.wheels_text}>
                            <p className={styles.wheels_name}>Шины зимние дешевле</p>
                            <div className={styles.wheels_button}>
                                <p className={styles.wheels_button_font}>Выбрать</p>
                                <Image src={whitearrow} alt='' />
                            </div>
                        </div>
                        <Image src={wheels} alt='' className={styles.wheels_img} />
                    </div>

                    <div className={styles.autoparts}>
                        <div className={styles.autoparts_text}>
                            <p className={styles.autoparts_name}>Запчасти для ㅤТО</p>
                            <div className={styles.autoparts_button}>
                                <p className={styles.autoparts_button_font}>Смотреть</p>
                                <Image src={whitearrow} alt='' />
                            </div>
                        </div>
                        <Image src={autoparts} alt='' className={styles.autoparts_img} />
                    </div>
                </div>

                <div className={styles.recomended}>
                    <div className={styles.recomended_title}>
                        <p className={styles.recomended_font}>Рекомендуем</p>
                    </div>

                    <div className={styles.group}>

                        <div className={styles.block}>
                            <Image src={img_4} alt='Товар' className={styles.img_goods} />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' className={styles.stars} />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.block}>

                            <Image src={img_1} alt='Товар' className={styles.img_goods} />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.block}>

                            <Image src={img_3} alt='Товар' className={styles.img_goods} />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.block}>

                            <Image src={img_2} alt='Товар' className={styles.img_goods} />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className={styles.frequently_sold}>
                    <div className={styles.frequently_sold_title}>
                        <p className={styles.frequently_sold_font}>Часто продаваемые</p>
                    </div>
                    <div className={styles.group}>

                        <div className={styles.block}>
                            <Image src={img_3} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.block}>

                            <Image src={img_2} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.block}>

                            <Image src={img_4} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.block}>

                            <Image src={img_1} alt='Товар' />
                            <div className={styles.block_info}>
                                <div className={styles.info}>
                                    <p className={styles.info_font}>Артикул: <span className={styles.info_art}>153789</span></p>
                                    <Image src={review} alt='' />
                                </div>
                                <div className={styles.name}>
                                    <p className={styles.name_font}>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                                </div>
                                <div className={styles.price}>
                                    <div className={styles.price_font}>
                                        <p className={styles.price_stock}>2 334 ₽</p>
                                        <p className={styles.price_base}>2 864 ₽</p>
                                    </div>
                                    <div className={styles.buy_bin}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.buy_bin_fill} xmlns="http://www.w3.org/2000/svg">
                                            <rect stroke='#5946D7' x="1" y="1" width="38" height="38" rx="7" stroke-width="2" />
                                            <path className={styles.buy_bin_stroke} d="M13.874 15L13.224 12H11.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M25.1093 27.2668C24.9073 27.2668 24.7433 27.4308 24.7453 27.6328C24.7453 27.8348 24.9093 27.9988 25.1113 27.9988C25.3133 27.9988 25.4773 27.8348 25.4773 27.6328C25.4763 27.4308 25.3123 27.2668 25.1093 27.2668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M16.6977 27.2663C16.4957 27.2663 16.3317 27.4303 16.3337 27.6323C16.3317 27.8353 16.4967 27.9993 16.6987 27.9993C16.9007 27.9993 17.0647 27.8353 17.0647 27.6333C17.0647 27.4303 16.9007 27.2663 16.6977 27.2663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path className={styles.buy_bin_stroke} d="M13.873 15L15.408 22.246C15.619 23.244 16.548 23.923 17.564 23.822L24.38 23.14C25.22 23.056 25.916 22.454 26.121 21.635L27.469 16.243C27.627 15.611 27.15 15 26.499 15H18.186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div></div>
            </div>
        </goods>
    );
}