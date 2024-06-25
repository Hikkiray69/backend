'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Promo.module.css';
import styless from './carousel.module.scss'
import banner from './img/banner.svg';
import banner2 from './img/banner2.svg'
import banner3 from './img/banner3.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React, { useRef } from 'react';




declare global {
  namespace JSX {
    interface IntrinsicElements {
      promo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Promo() {
  return (
    <promo className={styles.promo}>

      <div className={styles.content}>
        <Carousel className={styless.carousel}
          interval={5000}
          autoPlay
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          renderArrowPrev={(clickHandler) => {
            return (
              <div className={styles.hasPrev} onClick={clickHandler}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" xmlns="http://www.w3.org/2000/svg" className={styles.arrow_left}>
                  <rect width="40" height="40" rx="10" transform="matrix(-1 0 0 1 40 0)" fill="white" />
                  <path d="M22 24L18 20L22 16" stroke="#505255" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            );
          }}
          renderArrowNext={(clickHandler) => {
            return (
              <div className={styles.hasNext} onClick={clickHandler}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" xmlns="http://www.w3.org/2000/svg" className={styles.arrow_right}>
                  <rect width="40" height="40" rx="10" fill="white" />
                  <path d="M18 24L22 20L18 16" stroke="#505255" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            );
          }}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = { marginLeft: 20, left: 20, width: 60, height: 4, cursor: 'pointer', opacity: 0.3, pos: 'absolute', };
            const style = isSelected ? { ...defStyle, opacity: 1 } : { ...defStyle };
            return (
              <div
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button">
                <div style={style}>
                  <svg width="60" height="4" viewBox="0 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="4" rx="2" fill="white" />
                  </svg>
                </div>
              </div>
            )

          }}
        >

          <div className={styles.baner_margin}>
            <Image src={banner} alt='' className={styles.baner_img} />
          </div>

          <div className={styles.baner_margin}>
            <Image src={banner2} alt='' className={styles.baner_img} />
          </div>

          <div className={styles.baner_margin}>
            <Image src={banner3} alt='' className={styles.baner_img} />
          </div>

        </Carousel>
      </div>

    </promo>
  );
}
