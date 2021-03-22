import { Heading, Image } from '../Presentation/Presentation'
import {
  cardInitCode,
  cardUsageCode,
  cardBadCode,
  cardMehCode,
} from './codeSnippets'
import StaticCode from '../StaticCode/StaticCode'
import { Card } from '../Card/Card'
import { useHighlightedCode } from '../../hooks/use-highlighted-code'

const SlideIntro01 = () => <Heading>React Composition Patterns</Heading>

const SlideIntro02 = () => (
  <Image
    className="rounded-md"
    style={{ height: '75vh' }}
    src="/images/build.jpg"
  />
)

const SlideIntro03 = () => {
  const highlights = [
    undefined,
    '1',
    '3,17',
    '4-8',
    '9',
    '10',
    '11-16',
    undefined,
  ]
  const highlightLines = useHighlightedCode(2, highlights)
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-center">
      <StaticCode
        code={cardInitCode}
        style={{ fontSize: '1.5vw' }}
        highlightLines={highlightLines}
      />
      <StaticCode
        className="w-full"
        code={cardUsageCode}
        style={{ fontSize: '1.5vw' }}
      />
    </div>
  )
}

const SlideIntro04 = () => (
  <div className="w-84">
    <Card
      title="Very informative :D"
      imageSrc="images/build.jpg"
      imageAlt="A card picture"
      content="Minim ex laboris dolor anim eiusmod culpa veniam elit proident magna sint incididunt. Velit laborum veniam commodo voluptate reprehenderit culpa nulla. Irure velit."
      ctaText="Click me!"
      ctaOnClick={() => {}}
    />
  </div>
)

const SlideIntro05 = () => (
  <Image
    className="rounded-md"
    style={{ height: '75vh' }}
    src="/images/problems.jpg"
  />
)

const SlideIntro06 = () => (
  <StaticCode
    className="place-self-center"
    code={cardBadCode}
    style={{ fontSize: '1.1vw' }}
  />
)

const SlideIntro07 = () => (
  <StaticCode
    className="place-self-center"
    code={cardMehCode}
    style={{ fontSize: '1.8vw' }}
  />
)

export {
  SlideIntro01,
  SlideIntro02,
  SlideIntro03,
  SlideIntro04,
  SlideIntro05,
  SlideIntro06,
  SlideIntro07,
}
