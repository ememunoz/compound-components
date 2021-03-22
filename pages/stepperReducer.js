import {
  Stepper,
  Indicators,
  Indicator,
  StepContent,
  Contents,
  defaultReducer,
  stepperActionTypes,
} from '../components/StepperReducer/Stepper'
import { useBoop, Boop } from '../hooks/use-boop'

const stepList = ['Step 1', 'Step 2', 'Step 3', 'Step 4']

export default function StepperPage() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [disabledSteps, setDisabledSteps] = React.useState([
    false,
    true,
    true,
    true,
  ])

  const handleCompleteButton = index => {
    console.log('here')
    const disabledStepsCopy = [...disabledSteps]
    disabledStepsCopy[index] = false
    console.log(disabledStepsCopy)
    setDisabledSteps(disabledStepsCopy)
  }

  const stepContentList = [
    <button
      onClick={() => handleCompleteButton(1)}
      className="bg-primary-reg hover:bg-primary-light py-2 text-white px-4"
    >
      Complete step 1!
    </button>,
    <button
      onClick={() => handleCompleteButton(2)}
      className="bg-primary-reg hover:bg-primary-light py-2 text-white px-4"
    >
      Complete step 2!
    </button>,
    <button
      onClick={() => handleCompleteButton(3)}
      className="bg-primary-reg hover:bg-primary-light py-2 text-white px-4"
    >
      Complete step 3!
    </button>,
    'You are done! 🎉',
  ]

  const stepperReducer = (state, action) => {
    switch (action.type) {
      case stepperActionTypes.GO_TO:
        console.log(action)
        return { ...state, currentStep: action.payload }
      default:
        return state
    }
  }

  return (
    <div className="p-8 h-screen w-screen grid place-items-center grid-cols-1 gap-8 overflow-y-scroll">
      <Stepper
        className="bg-gray-300 w-9/12"
        reducer={stepperReducer}
        state={{ currentStep }}
      >
        <Indicators
          className="p-4"
          activeClassName="border-b-4 border-solid border-primary-dark bg-primary-light"
        >
          {stepList.map((step, index) => (
            <Indicator
              key={JSON.stringify(step)}
              className="bg-primary-reg hover:bg-primary-light py-2 text-white rounded-full px-4  outline-none focus:outline-none active:outline-none disabled:bg-gray-500"
              style={{ aspectRatio: '1' }}
              disabled={disabledSteps[index]}
            >
              {step}
            </Indicator>
          ))}
        </Indicators>
        <Contents className="text-3xl">
          {stepContentList.map((content, index) => (
            <StepContent key={index} className="p-4">
              {content}
            </StepContent>
          ))}
        </Contents>
      </Stepper>
    </div>
  )
}
