import cx from 'classnames'

const StepperContext = React.createContext()
const useStepperContext = () => React.useContext(StepperContext)

const stepperActionTypes = {
  GO_TO: 'GO_TO',
}

const defaultReducer = (state, action) => {
  switch (action.type) {
    case stepperActionTypes.GO_TO:
      return { ...state, currentStep: action.payload }
    default:
      return state
  }
}

const defaultState = {
  currentStep: 0,
}

const Stepper = ({
  children,
  className,
  state = defaultState,
  reducer = defaultReducer,
  ...props
}) => {
  // const [currentStep, setCurrentStep] = React.useState(0)
  const [{ currentStep }, dispatch] = React.useReducer(reducer, state)
  return (
    <StepperContext.Provider value={{ currentStep, dispatch }}>
      <div className={cx('flex flex-col', className)} {...props}>
        {children}
      </div>
    </StepperContext.Provider>
  )
}

const Indicators = ({ children, className, activeClassName = '', ...rest }) => {
  const { currentStep, dispatch } = useStepperContext()

  return (
    <ul className={cx('flex flex-row justify-around', className)} {...rest}>
      {React.Children.map(children, (child, index) => {
        if (child.type === Indicator) {
          const {
            onClick,
            className: childClassName,
            ...childProps
          } = child.props
          const isActive = currentStep === index
          return (
            <li key={index}>
              {React.cloneElement(child, {
                onClick: () =>
                  dispatch({ type: stepperActionTypes.GO_TO, payload: index }),
                className: cx(childClassName, { [activeClassName]: isActive }),
                isActive,
                ...childProps,
              })}
            </li>
          )
        }
      })}
    </ul>
  )
}

const Indicator = ({
  children,
  className,
  activeClassName = '',
  onClick,
  isActive,
  ...rest
}) => {
  return (
    <button
      className={cx(className, { [activeClassName]: isActive })}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

const Contents = ({ children, className, ...rest }) => {
  const { currentStep } = useStepperContext()
  let childrenRefs = []

  React.useEffect(() => {
    childrenRefs[currentStep].current.scrollIntoView({
      inline: 'start',
      block: 'nearest',
    })
  }, [currentStep])

  return (
    <ul
      className={cx(
        'overflow-x-hidden grid grid-rows-1 grid-auto-cols-full grid-flow-col',
        className
      )}
      {...rest}
    >
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
}

const StepContent = React.forwardRef(
  ({ children, className, ...rest }, ref) => {
    return (
      <li className={cx('w-full', className)} ref={ref} {...rest}>
        {children}
      </li>
    )
  }
)

export {
  Stepper,
  Indicators,
  Indicator,
  Contents,
  StepContent,
  defaultReducer,
  stepperActionTypes,
}
