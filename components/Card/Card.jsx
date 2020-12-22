import cx from 'classnames'

const Card = ({ title, imageSrc, imageAlt, content, ctaText, ctaOnClick }) => {
  return (
    <div className='w-84 p-4 max-w-xs shadow-xl bg-gray-300 rounded-md m-8'>
      <img className='min-w-full h-40 object-cover mb-4' src={imageSrc} alt={imageAlt} />
      <h3 className='text-xl mb-4'>{title}</h3>
      <p className="first-letter mb-4">{content}</p>
      <button className="w-full bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 text-white" onClick={ctaOnClick}>{ctaText}</button>
    </div>
  )
}








// const Card = ({ title, imageSrc, imageAlt, content, ctaText, ctaOnClick, isImageBelowParagraph }) => {
//   const img = imageSrc && imageAlt && <img className='min-w-full h-40 object-cover mb-4' src={imageSrc} alt={imageAlt} />
//   const cta = ctaText && ctaOnClick && <button className="w-full bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 text-white" onClick={ctaOnClick}>{ctaText}</button>
//   return (
//     <div className='w-84 p-4 max-w-xs shadow-xl bg-gray-300 rounded-md m-8'>
//       {!isImageBelowParagraph && img}
//       <h3 className='text-xl mb-4'>{title}</h3>
//       <p className="first-letter mb-4">{content}</p>
//       {isImageBelowParagraph && img}
//       {cta}
//     </div>
//   )
// }









// const Card = ({ children, className, ...props }) => {
//   return (
//     <div
//       className={cx('p-4', 'max-w-xs', 'shadow-xl', 'bg-gray-300', 'rounded-md', 'w-84', 'm-8', className)}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }

// const CardImage = ({ className, src, alt, ...props }) => (
//   <img
//     className={cx('min-w-full', 'h-40', 'object-cover', className)}
//     src={src}
//     alt={alt}
//     {...props}
//   />
// )

// const CardTitle = ({ children, className, ...props }) => (
//   <h3 className={cx('text-xl', className)} {...props}>{children}</h3>
// )

// const CardParagraph = ({ children, className, ...props }) => (
//   <p className={cx('first-letter', className)} {...props}>{children}</p>
// )

// const CardButton = ({ children, className, href, onClick, ...props }) => {
//   const finalClassName = cx("w-full bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 text-white block text-center", className)
//   if (href) return (
//     <a className={finalClassName} href={href} {...props}>
//       {children}
//     </a>
//   )
//   return (
//     <button className={finalClassName} onClick={onClick} {...props}>
//       {children}
//     </button>
//   )
// }

export { Card }
// export { Card, CardImage, CardTitle, CardParagraph, CardButton }
