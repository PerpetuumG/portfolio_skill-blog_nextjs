'use client';

import React, { FC } from 'react';
import styles from './about.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import SocialList from './SocialList';
import { useMediaQuery } from '../../hooks';

const About: FC = () => {
  const isMedia1080 = useMediaQuery(1080);

  return (
    <section className={styles.about} id={'about'}>
      <div className={'container'}>
        <MainTitle text={'Обо мне'} />
      </div>
      <div className={`sub-container ${styles.about__subcontainer}`}>
        <img className={styles.about__img} src='/img/about.png' alt='avatar' />

        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            Иван Иванов
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>

          <div className={styles.about__text}>
            <p>
              Расположенный в Хартфорде, штат Коннектикут. В настоящее время я работаю по
              совместительству Удаленным младшим веб-разработчиком для Coolor, расположенного в
              Лас-Вегасе.
            </p>
            <p>
              Я ищу, чтобы взять на себя больше работы и повысить свои навыки в качестве
              веб-разработчика.
            </p>
          </div>

          {!isMedia1080 && <SocialList />}
        </div>
      </div>

      <div className={'sub-container'}>{isMedia1080 && <SocialList />}</div>
    </section>
  );
};

export default About;
