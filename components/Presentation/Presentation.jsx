import cx from 'classnames'

const PresentationContext = React.createContext()
const usePresentationContext = () => React.useContext(PresentationContext)

const Slide = React.forwardRef(
  ({ children, className, style, ...props }, ref) => (
    <li
      className={cx(
        'w-full h-full flex flex-col items-center px-16',
        className
      )}
      style={{
        scrollSnapAlign: 'start',
        ...style,
      }}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  )
)

const Slides = ({ children, className, style, ...props }) => {
  const [currentStep, setCurrentStep] = React.useState(0)
  let childrenRefs = []

  React.useEffect(() => {
    const eventHandler = e => {
      e.preventDefault()
    }
    document.addEventListener('scroll', eventHandler)
    return () => document.removeEventListener('scroll', eventHandler)
  }, [])

  React.useEffect(() => {
    const eventHandler = e => {
      const { key } = e
      switch (key) {
        case 'ArrowLeft':
          e.preventDefault()
          setCurrentStep(prevStep => {
            if (prevStep > 0) {
              return prevStep - 1
            }
            return prevStep
          })
          break
        case 'ArrowRight':
          e.preventDefault()
          setCurrentStep(prevStep => {
            if (prevStep < childrenRefs.length - 1) {
              return prevStep + 1
            }
            return prevStep
          })
          break
        default:
          break
      }
    }
    document.addEventListener('keydown', eventHandler)
    return () => document.removeEventListener('keydown', eventHandler)
  }, [childrenRefs])

  React.useEffect(() => {
    childrenRefs[currentStep].current.scrollIntoView({ behavior: 'smooth' })
  }, [currentStep])

  return (
    <PresentationContext.Provider value={currentStep}>
      <div
        className={cx('w-screen', className)}
        // style={{ aspectRatio: '16 / 9', ...style }}
      >
        <ul
          className="overflow-x-scroll grid grid-rows-1 grid-auto-cols-full grid-flow-col h-full"
          style={{ scrollSnapType: 'x mandatory' }}
          {...props}
        >
          {React.Children.map(children, (child, index) => {
            if (child.type === Slide) {
              const ref = React.useRef()
              childrenRefs.push(ref)
              return React.cloneElement(child, {
                ref,
                ...child.props,
                key: index,
              })
            }
          })}
        </ul>
      </div>
    </PresentationContext.Provider>
  )
}

const Heading = ({ children, className, style, ...props }) => (
  <h1
    className={cx(className)}
    style={{ fontSize: '5vw', ...style }}
    {...props}
  >
    {children}
  </h1>
)

const Paragraph = ({ children, className, style, ...props }) => (
  <p
    className={cx(className)}
    style={{ fontSize: '2.5vw', ...style }}
    {...props}
  >
    {children}
  </p>
)

const Image = ({ className, style, src, ...props }) => (
  <img src={src} className={cx(className)} style={style} {...props} />
)

export { Slides, Slide, Heading, Paragraph, Image, usePresentationContext }
