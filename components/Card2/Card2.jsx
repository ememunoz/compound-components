import cx from 'classnames'
import styles from './Card2.module.css'

const Card = ({ children, className, ...props }) => (
  <div className={cx(styles.card, className)} {...props}>
    {children}
  </div>
)

const CardImage = ({ className, src, alt, ...props }) => (
  <img
    className={cx(styles.cardImg, className)}
    src={src}
    alt={alt}
    {...props}
  />
)

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cx(styles.cardTitle, className)} {...props}>
    {children}
  </h3>
)

const CardParagraph = ({ children, className, ...props }) => (
  <p className={cx(styles.cardParagraph, className)} {...props}>
    {children}
  </p>
)

const CardButton = ({ children, className, href, onClick, ...props }) => {
  if (href)
    return (
      <a className={cx(styles.cardButton, className)} href={href} {...props}>
        {children}
      </a>
    )
  return (
    <button
      className={cx(styles.cardButton, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export { Card, CardImage, CardTitle, CardParagraph, CardButton }
