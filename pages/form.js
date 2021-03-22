import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { animated } from 'react-spring';
import cx from 'classnames'

import { Stepper, Indicators, Indicator, StepContent, Contents } from '../components/Stepper/Stepper'
import { useBoop } from '../components/hooks/use-boop'

const Button = ({ children, className, type, ...rest }) =>
  <button {...rest} type={type || 'button'} className={cx('bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 px-4 text-white disabled:opacity-50 disabled:bg-primary-dark disabled:cursor-default', className)}>
    {children}
  </button>

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']

const isValidEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

export default function StepperPage() {
  const { register, handleSubmit, errors } = useForm()
  const [currentStep, setCurrentStep] = useState(0)
  const [disabledSteps, setDisabledSteps] = useState([false, true, true, true])

  const goPrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1)
  }

  const goNext = () => {
    if (currentStep + 1 < stepList.length) setCurrentStep((prev) => prev + 1)
  }
  const onSubmit = data => console.log(data)
  console.log(errors)
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='p-8 h-screen w-screen grid place-items-center grid-cols-1 gap-8 overflow-y-scroll'
    >
      <Stepper className='bg-gray-300 w-9/12' currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Indicators className='p-4'>
          {stepList.map((step, index) => {
            return (
              <Indicator key={JSON.stringify(step)}>
                <Boop
                  {...{
                    scale: 2.2,
                    springConfig: {
                      tension: 400,
                      friction: 10,
                    }
                  }}
                >
                  <span className='bg-primary-reg hover:bg-primary-light py-2 text-white rounded-full px-4'>
                    {step}
                  </span>
                </Boop>
              </Indicator>
            )
          })
          }
        </Indicators>
        <Contents>
          <StepContent className='p-4'>
            <h3>Please enter a valid email</h3>
            <label htmlFor='email' >Email</label>
            <input name='email' type='email' ref={register({ validate: isValidEmail })} />
            {errors.email && <p>{JSON.stringify(errors.email.type)}</p>}
          </StepContent>
          <StepContent className='p-4'>
          </StepContent>
          <StepContent className='p-4'>
          </StepContent>
          <StepContent className='p-4'>
            Form part 4
            <Button type='submit'>
              Submit
            </Button>
          </StepContent>
        </Contents>
        <div className='flex flex-row justify-between p-4'>
          <Button onClick={goNext} disabled={currentStep === stepList.length - 1}>
            Next
          </Button>
          <Button onClick={goPrevious} disabled={currentStep === 0}>
            Prev
          </Button>
        </div>
      </Stepper>
    </form>
  )
}
