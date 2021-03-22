import CodePlayground from '../CodePlayground/CodePlayground'
import StaticCode from '../StaticCode/StaticCode'
import {
  htmlCCDynamicDetailsCode,
  htmlCCDynamicSelectCode,
  reactChildrenCode,
  stepperCode,
  stepperContentCode,
  stepperContentsCode,
  stepperDesignCode,
  stepperIndicatorCode,
  stepperIndicatorsCode,
  stepperPlaygroundCode,
} from './codeSnippets'
import {
  Stepper,
  Indicators,
  Indicator,
  StepContent,
  Contents,
} from '../Stepper/Stepper'
import { useHighlightedCode } from '../../hooks/use-highlighted-code'

const SlideCCDynamic01 = () => {
  const highlights = [undefined, '1,5', '2-4', undefined]
  const highlightLines = useHighlightedCode(12, highlights)

  return (
    <CodePlayground
      highlightLines={highlightLines}
      code={htmlCCDynamicSelectCode}
      lang="html"
      className="mx-auto"
      style={{ fontSize: '1.8vw' }}
    />
  )
}

const SlideCCDynamic02 = () => {
  const highlights = [undefined, '1,5', '2', '3,4', undefined]
  const highlightLines = useHighlightedCode(13, highlights)
  return (
    <CodePlayground
      highlightLines={highlightLines}
      code={htmlCCDynamicDetailsCode}
      lang="html"
      className=""
      style={{ fontSize: '1.8vw' }}
    />
  )
}

const SlideCCDynamic03 = () => {
  const highlights = [
    undefined,
    '1,14',
    '2,7',
    '3-6',
    '8,13',
    '9-12',
    undefined,
  ]
  const highlightLines = useHighlightedCode(14, highlights)
  return (
    <StaticCode
      code={stepperDesignCode}
      style={{ fontSize: '1.8vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic04 = () => {
  const highlights = [undefined, '1,2', '5', '8, 10', '4,9', undefined]
  const highlightLines = useHighlightedCode(15, highlights)
  return (
    <StaticCode
      code={stepperCode}
      style={{ fontSize: '1.8vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic05 = () => {
  const highlights = [undefined, '5', undefined]
  const highlightLines = useHighlightedCode(16, highlights)
  return (
    <StaticCode
      code={stepperIndicatorCode}
      style={{ fontSize: '1.8vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic06 = () => {
  const highlights = [undefined, '2', '6,15', '7,14', '9-12', undefined]
  const highlightLines = useHighlightedCode(17, highlights)
  return (
    <StaticCode
      code={stepperIndicatorsCode}
      style={{ fontSize: '1.8vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic07 = () => {
  return (
    <div>
      <StaticCode code={reactChildrenCode} style={{ fontSize: '1.5vw' }} />
      <p>
        Source:{' '}
        <a
          href="https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/"
          target="_blank"
        >
          React Children: The misunderstood prop
        </a>{' '}
        by Cassidy Williams
      </p>
    </div>
  )
}

const SlideCCDynamic08 = () => {
  const highlights = [
    undefined,
    '2',
    '3,5-7',
    '11,12,20,21',
    '13,14',
    '15-19',
    undefined,
  ]
  const highlightLines = useHighlightedCode(19, highlights)
  return (
    <StaticCode
      code={stepperContentsCode}
      style={{ fontSize: '1.1vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic09 = () => {
  const highlights = [undefined, '1,2,8,9', undefined]
  const highlightLines = useHighlightedCode(20, highlights)
  return (
    <StaticCode
      code={stepperContentCode}
      style={{ fontSize: '1.8vw' }}
      highlightLines={highlightLines}
    />
  )
}

const SlideCCDynamic10 = () => (
  <CodePlayground
    style={{ fontSize: '1.8vw' }}
    code={stepperPlaygroundCode}
    scope={{ Stepper, Indicators, Indicator, Contents, StepContent }}
  />
)

export {
  SlideCCDynamic01,
  SlideCCDynamic02,
  SlideCCDynamic03,
  SlideCCDynamic04,
  SlideCCDynamic05,
  SlideCCDynamic06,
  SlideCCDynamic07,
  SlideCCDynamic08,
  SlideCCDynamic09,
  SlideCCDynamic10,
}
