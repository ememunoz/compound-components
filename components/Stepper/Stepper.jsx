import { cloneElement, createContext, useContext, useState, useEffect, useRef, useLayoutEffect } from 'react'
import cx from 'classnames'

const StepperContext = createContext()

const Stepper = ({ children, className, currentStep: userCurrentStep, setCurrentStep: userSetCurrentStep }) => {
  const [defaultCurrentStep, defaultSetCurrentStep] = useState(0)
  let currentStep = defaultCurrentStep
  let setCurrentStep = defaultSetCurrentStep
  if (!!userCurrentStep && !!userSetCurrentStep) {
    currentStep = userCurrentStep
    setCurrentStep = userSetCurrentStep
  }
  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
      <div className={cx('flex flex-col', className)}>
        {children}
      </div>
    </StepperContext.Provider>
  )
}

const Indicators = ({ children, className, ...rest }) => {
  const { currentStep, setCurrentStep } = useContext(StepperContext)

  return (
    <ul className={cx('flex flex-row justify-around', className)} {...rest}>
      {children.map((child, index) => {
        const { onClick, ...rest } = child.props
        if (child.type === Indicator) return (
          <li key={index}>
            {cloneElement(child, {
              onClick: () => {
                setCurrentStep(index)
                onClick && onClick()
              },
              // isActive: currentStep === index,
              ...rest
            })}
          </li>
        )
      })}
    </ul>
  )
}

const Indicator = ({ children, className, onClick, ...rest }) => {
  return <button className={className} onClick={onClick} type='button' {...rest}>{children}</button>
}

const Contents = ({ children, className, ...rest }) => {
  const { currentStep } = useContext(StepperContext)
  let childrenRefs = []

  useLayoutEffect(() => {
    childrenRefs[currentStep].current.scrollIntoView({ inline: 'start', block: 'nearest' })
  }, [currentStep])

  return (
    <ul className={cx('overflow-x-hidden grid grid-rows-1 auto-cols-full grid-flow-col', className)} {...rest} >
      {children.map((child, index) => {
        const contentRef = useRef()
        childrenRefs.push(contentRef)
        return cloneElement(child, {
          childRef: contentRef,
          step: index,
          ...child.props,
          key: index
        })
      })}
    </ul>
  )
}

const StepContent = ({ children, step, childRef, className, ...rest }) => {
  return (
    <li className={cx('w-full', className)} ref={childRef} {...rest}>
      {children}
    </li>
  )
}

export { Stepper, Indicators, Indicator, Contents, StepContent }
