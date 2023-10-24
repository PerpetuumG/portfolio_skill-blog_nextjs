'use client';

import React, { FC } from 'react';
import styles from './contact.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import SocialList from '../About/SocialList';
import ContactForm from './ContactForm';
import { useMediaQuery } from '../../hooks';

const Contact: FC = () => {
  const isMobile485 = useMediaQuery(485);

  return (
    <section className={styles.contact} id={'contact'}>
      <div className={'container'}>
        <MainTitle text={'Напишите мне'} />
      </div>

      <div className={'sub-container'}>
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>
              Вы работаете над чем-то великим? Я с удовольствием помогу вам в этом! Напишите мне
              письмо и мы начнем проект прямо сейчас!
            </p>
            <p className={styles.contact__text}>Просто сделай это!</p>

            {!isMobile485 && (
              <>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>Я в соцсетях:</span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>

                <SocialList />
              </>
            )}
          </div>

          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
