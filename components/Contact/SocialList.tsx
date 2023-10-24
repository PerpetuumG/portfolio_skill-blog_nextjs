import React from 'react';
import styles from './socialListContact.module.scss';

const data = [
  {
    id: 1,
    name: 'facebook',
    img: '/img/facebook.svg',
    link: 'www.facebook.com',
  },
  {
    id: 2,
    name: 'vk',
    img: '/img/vk.svg',
    link: 'www.vk.com',
  },
  {
    id: 3,
    name: 'youtube',
    img: '/img/youtube.svg',
    link: 'www.youtube.com',
  },
];

const SocialList = () => {
  return (
    <ul className={styles.social__list}>
      {data.map(item => (
        <li className={styles.social__list__item} key={item.id}>
          <a className={styles.social__list__item__link} href={item.link}>
            <span className={styles.social__list__item__link__text}>{item.name}</span>
            <span
              className={`${styles.social__list__item__link__icon} 
               ${
                 item.name === 'facebook'
                   ? styles.social__list__item__link__icon__facebook
                   : item.name === 'vk'
                   ? styles.social__list__item__link__icon__vk
                   : styles.social__list__item__link__icon__youtube
               }
              `}
            >
              <img
                className={styles.social__list__item__link__img}
                src={item.img}
                alt={item.name}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
