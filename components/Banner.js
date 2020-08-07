import { useState, useEffect } from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames';

export default function Banner() {
  const [randomNumber, setRandomNumber] = useState(0);

  const currentHour = (new Date()).getHours();
  const isNight = (currentHour > 18 || currentHour < 6);
  const cartoons = [
    styles.cartoonCoffeeInTheHand,
    styles.cartoonNormal,
    styles.cartoonDrinkingCoffee
  ]

  useEffect(() => setRandomNumber(Math.floor(Math.random() * cartoons.length)), []);

  return (
    <header className={styles.header} role="banner">
      <div className={ classNames(styles.headerBanner, { [`${ styles.headerBannerNight }`]: isNight }) }>
        <div className={ classNames(styles.cartoon, cartoons[randomNumber]) }></div>
        <h1 className={ styles.title }><span>Rodrigo Boniatti</span> <span>Software Engineer</span></h1>
      </div>
    </header>
  )
}
