import styled from 'styled-components'
import { useBoop } from '../hooks/use-boop'
import { animated } from 'react-spring'
import {
  Card,
  CardImage,
  CardTitle,
  CardParagraph,
  CardButton,
} from '../components/Card2/Card2'

const StyledCard = styled(Card)`
  color: red;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`

export default function CardPage() {
  const [buttonStyle, buttonTrigger] = useBoop({ scale: 1.05 })
  const [buttonStyle2, buttonTrigger2] = useBoop({ scale: 1.15 })

  return (
    <div className="flex-grow w-screen grid grid-cols-3 justify-center items-center gap-24 p-24">
      <Card className="p-0 overflow-hidden">
        <CardImage src="images/build.jpg" alt="" />
        <div className="p-4">
          <CardTitle className="mb-4">Very informative 👍</CardTitle>
          <CardParagraph className="mb-4">
            Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing
            adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod
            exercitation Lorem aute laboris deserunt excepteur consequat
            excepteur ipsum exercitation culpa.
          </CardParagraph>
          <CardButton
            className=" bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
            onClick={() => alert("Here's a cookie 🍪")}
          >
            Click me!
          </CardButton>
        </div>
      </Card>

      <Card>
        <CardTitle className="mb-4">Very informative 👍</CardTitle>
        <CardImage src="images/build.jpg" alt="" className="mb-4" />
        <CardParagraph className="mb-4">
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing
          adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation
          Lorem aute laboris deserunt excepteur consequat excepteur ipsum
          exercitation culpa.
        </CardParagraph>
        <CardButton
          className=" bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
          href="/card"
        >
          Click me!
        </CardButton>
      </Card>

      <Card>
        <CardTitle className="mb-4 text-2xl">Very informative 👍</CardTitle>
        <p>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing
          adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation
          Lorem aute laboris deserunt excepteur consequat excepteur ipsum
          exercitation culpa...
        </p>
        <a href="#" className="text-primary-reg hover:text-primary-dark">
          Read more
        </a>
      </Card>

      <Card>
        <CardImage src="images/build.jpg" alt="" className="mb-4" />
        <CardTitle className="mb-4">Very informative 👍</CardTitle>
        <CardParagraph className="mb-4">
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing
          adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation
          Lorem aute laboris deserunt excepteur consequat excepteur ipsum
          exercitation culpa.
        </CardParagraph>
        <animated.span style={buttonStyle}>
          <CardButton
            href="/card"
            onMouseEnter={buttonTrigger}
            className=" bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
          >
            Click me!
          </CardButton>
        </animated.span>
      </Card>

      <Card className="p-0 overflow-hidden">
        <CardImage src="images/build.jpg" alt="" />
        <div className="relative p-4">
          <CardTitle className="mb-4">Very informative 👍</CardTitle>
          <CardParagraph className="mb-4">
            Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing
            adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod
            exercitation Lorem aute laboris deserunt excepteur consequat
            excepteur ipsum exercitation culpa.
          </CardParagraph>
          <animated.span
            className="absolute"
            style={{ top: -24, right: 16, ...buttonStyle2 }}
          >
            <CardButton
              onClick={() => alert("Here's a cookie 🍪")}
              onMouseEnter={buttonTrigger2}
              className="rounded-full bg-primary-reg active:bg-primary-dark hover:bg-primary-light"
              style={{
                width: 48,
                height: 48,
              }}
            >
              🍪
            </CardButton>
          </animated.span>
        </div>
      </Card>
    </div>
  )
}
