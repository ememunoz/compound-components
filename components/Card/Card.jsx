import cx from 'classnames'
import styles from './Card.module.css'

const Card = ({ title, imageSrc, imageAlt, content, ctaText, ctaOnClick }) => {
  return (
    <div className={cx(styles.card)}>
      <img className={cx(styles.cardImg)} src={imageSrc} alt={imageAlt} />
      <h2 className={cx(styles.cardTitle)}>{title}</h2>
      <p className={cx(styles.cardParagraph)}>{content}</p>
      <button className={cx(styles.cardButton)} onClick={ctaOnClick}>
        {ctaText}
      </button>
    </div>
  )
}

export { Card }
