import {
  Stepper,
  Indicators,
  Indicator,
  StepContent,
  Contents,
} from '../components/Stepper/Stepper'
import { useBoop, Boop } from '../hooks/use-boop'

const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
const stepContentList = ['Hello World!', '👁👄👁', '👁👅👁', 'Bye World!']

export default function StepperPage() {
  // const [currentStep, setCurrentStep] = React.useState(3)
  // const [indicatorStyle, indicatorTrigger] = useBoop({ scale: 1.05 })

  // const goPrevious = () => {
  //   if (currentStep > 0) setCurrentStep((prev) => prev - 1)
  // }

  // const goNext = () => {
  //   if (currentStep + 1 < stepList.length) setCurrentStep((prev) => prev + 1)
  // }

  return (
    <div className="p-8 h-screen w-screen grid place-items-center grid-cols-1 gap-8 overflow-y-scroll">
      <Stepper>
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
      </Stepper>

      <Stepper className="bg-gray-300 w-9/12">
        <Indicators
          className="p-4"
          activeClassName="border-b-4 border-solid border-primary-dark bg-primary-light"
        >
          {stepList.map(step => (
            <Indicator
              key={JSON.stringify(step)}
              className="bg-primary-reg hover:bg-primary-light py-2 text-white rounded-full px-4  outline-none focus:outline-none active:outline-none"
              style={{ aspectRatio: '1' }}
            >
              {step}
            </Indicator>
          ))}
        </Indicators>
        <Contents className="text-6xl">
          {stepContentList.map(content => (
            <StepContent key={JSON.stringify(content)} className="p-4">
              {content}
            </StepContent>
          ))}
        </Contents>
      </Stepper>

      <Stepper className="bg-gray-300 w-9/12 grid grid-cols-h-stepper">
        <Indicators className="p-4 flex-col col-span-1">
          {stepList.map(step => (
            <Indicator
              key={JSON.stringify(step)}
              className="bg-primary-reg hover:bg-primary-light py-2 text-white rounded-full px-4 mb-4"
            >
              {step}
            </Indicator>
          ))}
        </Indicators>
        <Contents className="text-6xl col-span-1">
          {stepContentList.map(content => (
            <StepContent key={JSON.stringify(content)} className="p-4">
              {content}
            </StepContent>
          ))}
        </Contents>
      </Stepper>

      {/* <Stepper className='bg-gray-300 w-9/12' currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <Indicators className='p-4'>
          {stepList.map(step => <Indicator key={JSON.stringify(step)}>
            <Boop scale={1.05}>
              <div className='bg-primary-reg hover:bg-primary-light py-2 text-white rounded-full px-4'>
                {step}
              </div>
            </Boop>
          </Indicator>)
          }
        </Indicators>
        <Contents className='text-6xl'>
          {stepContentList.map(content =>
            <StepContent key={JSON.stringify(content)} className='p-4'>
              {content}
            </StepContent>)
          }
        </Contents>
        <div className='flex flex-row justify-between p-4'>
          <button
            className='bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 px-4 text-white disabled:opacity-50 disabled:bg-primary-dark disabled:cursor-default'
            onClick={goPrevious}
            disabled={currentStep === 0}
          >
            Prev
          </button>
          <button
            className='bg-primary-reg active:bg-primary-dark hover:bg-primary-light py-2 px-4 text-white disabled:opacity-50 disabled:bg-primary-dark disabled:cursor-default'
            onClick={goNext}
            disabled={currentStep === stepList.length - 1}
          >
            Next
          </button>
        </div>
      </Stepper> */}
    </div>
  )
}
