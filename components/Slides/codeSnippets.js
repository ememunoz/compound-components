const cardInitCode = `const Card = ({ title, imageSrc, imageAlt, content, ctaText, ctaOnClick }) => {
  return (
    <div className='...'>
      <img
        className='...'
        src={imageSrc}
        alt={imageAlt}
      />
      <h2 className='...'>{title}</h2>
      <p className='...'>{content}</p>
      <button
        className='...'
        onClick={ctaOnClick}
      >
        {ctaText}
      </button>
    </div>
  )
}`

const cardUsageCode = `<Card
  title="Very informative :D"
  imageSrc="/images/someimg.jpg"
  imageAlt="A card picture"
  content="Lorem Ipsum..."
  ctaText="Click me!"
  ctaOnClick={() => {}}
/>`

const cardBadCode = `const Card = ({
  cardClassName,
  title,
  titleClassName,
  titlePosition,
  titleHref,
  imageSrc,
  imageAlt,
  imageClassName,
  imageTooltip,
  imageSizes,
  imageSrcset,
  imagePosition,
  content,
  contentClassName,
  contentLang,
  contentTitle,
  contentPosition,
  contentOnHover,
  ctaText,
  ctaDisabled,
  ctaHref,
  ctaOnClick,
  ctaPosition,
  ctaAnimated
}) => {
  ...😭
}`

const cardMehCode = `const Card = ({
  cardProps
  titleProps,
  imageProps,
  contentProps,
  ctaProps
}) => {
  ...😑
}`

const compoundExampleCode = `<table>
  <thead>...</thead>
  <tbody>
    <tr>...</tr>
    <tr>...</tr>
  </tbody>
</table>

<GrandParent>
  <Parent1>...</Parent1>
  <Parent2>
    <Child>...</Child>
    <Child>...</Child>
  </Parent2>
</GrandParent>`

const cardCCCode1 = `const Card = ({ children, className, ...props }) => (
  <div className={cx('...', className)} {...props}>
    {children}
  </div>
)

const CardImage = ({ className, src, alt, ...props }) => (
  <img
    className={cx('...', className)}
    src={src}
    alt={alt}
    {...props}
  />
)
`
const cardCCCode2 = `const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cx('...', className)} {...props}>
    {children}
  </h3>
)

const CardParagraph = ({ children, className, ...props }) => (
  <p className={cx('...', className)} {...props}>
    {children}
  </p>
)`
const cardCCExampleCode1 = `<Card className="w-84">
  <CardImage src="images/build.jpg" alt="Alt text" className="mb-4" />
  <CardTitle className="mb-2">Very informative 👍</CardTitle>
  <CardParagraph className="mb-4">
    Lorem Ipsum id fugiat nulla enim aute esse aliquip adipisicing Lorem Ipsum id fugiat nulla enim aute esse aliquip
  </CardParagraph>
  <CardButton
    className="bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
    onClick={() => alert("Here's a cookie 🍪")}
  >
    Click me!
  </CardButton>
</Card>`

const cardCCExampleCode2 = `<Card className="p-0 overflow-hidden w-84">
  <CardImage src="images/build.jpg" alt="Alt text" />
  <div className="p-4">
    <CardTitle className="mb-2">Very informative 👍</CardTitle>
    <CardParagraph className="mb-4">
      Lorem Ipsum id fugiat nulla enim aute esse aliquip adipisicing Lorem Ipsum id fugiat nulla enim aute esse aliquip
    </CardParagraph>
    <CardButton
      className="bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
      onClick={() => alert("Here's a cookie 🍪")}
    >
      Click me!
    </CardButton>
  </div>
</Card>`

const htmlCCDynamicSelectCode = `<select>
  <option value="">Click me!</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`

const htmlCCDynamicDetailsCode = `<details>
  <summary>Click me!</summary>
  <p>Some toggleable content</p>
  <p>👁👄👁</p>
</details>`

const stepperDesignCode = `<Stepper>
  <Indicators>
    <Indicator>Step 1</Indicator>
    <Indicator>Step 2</Indicator>
    <Indicator>Step 3</Indicator>
    <Indicator>Step 4</Indicator>
  </Indicators>
  <Contents>
    <StepContent>Hello World!</StepContent>
    <StepContent>👁👄👁</StepContent>
    <StepContent>👁👅👁</StepContent>
    <StepContent>Bye World!</StepContent>
  </Contents>
</Stepper>`

const stepperCode = `const StepperContext = React.createContext()
const useStepperContext = () => React.useContext(StepperContext)

const Stepper = ({ children, className, ...props }) => {
  const [currentStep, setCurrentStep] = React.useState(0)

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
      <div className={cx('...', className)} {...props}>{children}</div>
    </StepperContext.Provider>
  )
}`

const stepperIndicatorCode = `const Indicator = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cx('...', className)}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}`

const stepperIndicatorsCode = `const Indicators = ({ children, className, ...props }) => {
  const { setCurrentStep } = useStepperContext()

  return (
    <div className={cx('...', className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (child.type === Indicator) {
          return (
            React.cloneElement(child, {
              key={index}
              onClick: () => setCurrentStep(index),
            })
          )
        }
      })}
    </div>
  )
}`

const reactChildrenCode = `// Turns children into an array
React.Children.toArray(children)

// Counts the children
React.Children.count(children)

// Makes sure there's only one child
React.Children.only(children)

// Lets you run map over children without having to worry about if it's an object or not
React.Children.map(children, fn)

// Lets you run forEach over children without having to worry about if it's an object or not
React.Children.forEach(children, fn)`

const stepperContentsCode = `const Contents = ({ children, className, ...props }) => {
  const { currentStep } = useStepperContext()
  let childrenRefs = []

  React.useEffect(() => {
    // Scroll to current content each time the step changes
  }, [currentStep])

  return (
    <ul className={cx('...',className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (child.type === StepContent) {
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
  )
}`

const stepperContentCode = `const StepContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <li className={cx('...', className)} ref={ref} {...props}>
        {children}
      </li>
    )
  }
)`

const stepperPlaygroundCode = `<Stepper>
  <Indicators>
    <Indicator>Step 1</Indicator>
    <Indicator>Step 2</Indicator>
    <Indicator>Step 3</Indicator>
    <Indicator>Step 4</Indicator>
  </Indicators>
  <Contents>
    <StepContent>Hello World!</StepContent>
    <StepContent>👁👄👁</StepContent>
    <StepContent>👁👅👁</StepContent>
    <StepContent>Bye World!</StepContent>
  </Contents>
</Stepper>`

export {
  cardInitCode,
  cardUsageCode,
  cardBadCode,
  cardMehCode,
  compoundExampleCode,
  cardCCCode1,
  cardCCCode2,
  cardCCExampleCode1,
  cardCCExampleCode2,
  htmlCCDynamicSelectCode,
  htmlCCDynamicDetailsCode,
  stepperDesignCode,
  stepperCode,
  stepperIndicatorCode,
  stepperIndicatorsCode,
  reactChildrenCode,
  stepperContentsCode,
  stepperContentCode,
  stepperPlaygroundCode,
}
