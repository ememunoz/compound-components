import styled from 'styled-components'
import { useBoop } from '../components/hooks/use-boop';
import { Card } from "../components/Card/Card";
import { animated } from 'react-spring';
// import { Card, CardImage, CardTitle, CardParagraph, CardButton } from "../components/Card/Card";


// const StyledCard = styled(Card)`
//   color: red;
//   & > *:not(:last-child) {
//     margin-bottom: 8px;
//   }
// `

export default function CardPage() {
  const [buttonStyle, buttonTrigger] = useBoop({ scale: 1.05 })

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Card
        title='Very informative :D'
        imageSrc='https://picsum.photos/200/300'
        imageAlt='A card picture'
        content='Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.'
        ctaText='Click me!'
        ctaOnClick={() => { }}
      />








      {/* <Card
        title='Very informative :D'
        imageSrc='https://picsum.photos/200/300'
        imageAlt='A card picture'
        content='Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.'
        ctaText='Click me!'
        ctaOnClick={() => { }}
        isImageBelowParagraph={true}
      />

      <Card
        title='Very informative :D'
        imageSrc='https://picsum.photos/200/300'
        imageAlt='A card picture'
        content='Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.'
      />

      <Card
        title='Very informative :D'
        content='Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.'
      />
      
      <Card
        title='Very informative :D'
        imageSrc='https://picsum.photos/200/300'
        imageAlt='A card picture'
        content='Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.'
        ctaText='Click me!'
        ctaOnClick={() => { }}
      />
      
      */}










      {/* <Card>
        <CardImage src='https://picsum.photos/200/300' alt='' className='mb-4' />
        <CardTitle className='mb-4'>Very informative 👍</CardTitle>
        <CardParagraph className='mb-4'>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.
        </CardParagraph>
        <CardButton onClick={() => alert('Here\'s a cookie 🍪')}>Click me!</CardButton>
      </Card>

      <Card>
        <CardTitle className='mb-4'>Very informative 👍</CardTitle>
        <CardParagraph className='mb-4'>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.
        </CardParagraph>
        <CardImage src='https://picsum.photos/200/300' alt='' className='mb-4' />
        <CardButton href='/card'>Click me!</CardButton>
      </Card>

      <Card>
        <CardTitle className='mb-4'>Very informative 👍</CardTitle>
        <CardParagraph className='mb-4'>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.
        </CardParagraph>
        <CardImage src='https://picsum.photos/200/300' alt='' />
      </Card>

      <Card>
        <CardTitle className='mb-4 text-2xl'>Very informative 👍</CardTitle>
        <p>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.
        </p>
      </Card>

      <Card>
        <CardTitle className='mb-4'>Very informative 👍</CardTitle>
        <CardParagraph className='mb-4'>
          Lorem Ipsum id fugiat nulla enim aute esse aliquip do do adipisicing adipisicing cupidatat aliqua. Fugiat labore Lorem eiusmod exercitation Lorem aute laboris deserunt excepteur consequat excepteur ipsum exercitation culpa.
        </CardParagraph>
        <CardImage src='https://picsum.photos/200/300' alt='' className='mb-4' />
        <animated.span style={buttonStyle}>
          <CardButton href='/card' onMouseEnter={buttonTrigger}>Click me!</CardButton>
        </animated.span>
      </Card> */}
    </div>
  )
}
