'use client';

import React, { useState } from 'react';
import styles from './header.module.scss';
import stylesMenu from './mobileMenu.module.scss';
import Logo from '../../Logo/Logo';
import { Link } from 'react-scroll';
import { useMediaQuery } from '../../../hooks';

const data = [
  { id: 1, name: 'Обо мне', to: 'about' },
  { id: 2, name: 'Навыки', to: 'about' },
  { id: 3, name: 'Портфолио', to: 'about' },
  { id: 4, name: 'Обратная связь', to: 'about' },
];

const Header = () => {
  const isMobile = useMediaQuery(640);
  const [menuOpen, setMenuOpen] = useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;
  const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

  const handleToggleMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden'); //скрыть прокрутку
    setMenuOpen(!menuOpen);
  };

  // закрытие меню
  const closeMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden'); //скрыть прокрутку
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />

        {isMobile && (
          <button
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}
            onClick={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        )}

        <nav
          className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${
            menuOpen ? stylesMenu.open : ''
          }`}
        >
          <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
            {data.map(item => (
              <li className={currentMenuItemClass} key={item.id}>
                <Link
                  href='/public'
                  to={item.to}
                  spy={spy}
                  smooth={smooth}
                  offset={offset}
                  duration={duration}
                  className={styles.header__nav__list__item__link}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/*<li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='about'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Обо мне
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='skills'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Навыки
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='portfolio'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Портфолио
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href="/"
                                to='contact'
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Обратная связь
                            </Link>
                        </li>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
