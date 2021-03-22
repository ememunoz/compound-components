import { Heading, Paragraph, Image } from '../Presentation/Presentation'
import {
  Card,
  CardImage,
  CardTitle,
  CardParagraph,
  CardButton,
} from '../Card2/Card2'
import CodePlayground from '../CodePlayground/CodePlayground'
import StaticCode from '../StaticCode/StaticCode'
import {
  compoundExampleCode,
  cardCCCode1,
  cardCCCode2,
  cardCCExampleCode1,
  cardCCExampleCode2,
} from './codeSnippets'
import { useHighlightedCode } from '../../hooks/use-highlighted-code'

const SlideCCBasic01 = () => (
  <>
    <Heading>Compound Components</Heading>
    <div className="grid grid-cols-2 gap-8 h-full">
      <Paragraph>Componentes que trabajan juntos para formar una UI</Paragraph>
      <StaticCode code={compoundExampleCode} style={{ fontSize: '1.5vw' }} />
    </div>
  </>
)

const SlideCCBasic02 = () => {
  const highlights = [undefined, '1-5', '7-14', '999', '999', undefined]
  const highlights2 = [undefined, '999', '999', '1-5', '7-11', undefined]
  const highlightLines = useHighlightedCode(8, highlights)
  const highlightLines2 = useHighlightedCode(8, highlights2)
  return (
    <div className="grid grid-cols-2 gap-8">
      <StaticCode
        code={cardCCCode1}
        style={{ fontSize: '1.5vw' }}
        highlightLines={highlightLines}
      />
      <StaticCode
        code={cardCCCode2}
        style={{ fontSize: '1.5vw' }}
        highlightLines={highlightLines2}
      />
    </div>
  )
}

const SlideCCBasic03 = () => (
  <CodePlayground
    code={cardCCExampleCode1}
    scope={{ Card, CardImage, CardTitle, CardParagraph, CardButton }}
    style={{ fontSize: '1.5vw', maxWidth: '100vw' }}
  />
)

const SlideCCBasic04 = () => (
  <CodePlayground
    code={cardCCExampleCode2}
    scope={{ Card, CardImage, CardTitle, CardParagraph, CardButton }}
    style={{ fontSize: '1.5vw', maxWidth: '100vw' }}
  />
)

export { SlideCCBasic01, SlideCCBasic02, SlideCCBasic03, SlideCCBasic04 }
