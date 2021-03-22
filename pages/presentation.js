import { Slides, Slide } from '../components/Presentation/Presentation'

import {
  SlideIntro01,
  SlideIntro02,
  SlideIntro03,
  SlideIntro04,
  SlideIntro05,
  SlideIntro06,
  SlideIntro07,
} from '../components/Slides/SlidesIntro'
import {
  SlideCCBasic01,
  SlideCCBasic02,
  SlideCCBasic03,
  SlideCCBasic04,
} from '../components/Slides/SlidesCCBasic'
import {
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
} from '../components/Slides/SlidesCCDynamic'

export default function Presentation() {
  return (
    <div className="grid h-screen w-screen">
      <Slides id="slides" className="place-self-center">
        <Slide className="justify-center">
          <SlideIntro01 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro02 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro03 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro04 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro05 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro06 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro07 />
        </Slide>
        <Slide>
          <SlideCCBasic01 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCBasic02 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCBasic03 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCBasic04 />
        </Slide>
        <Slide className="justify-center">
          <SlideIntro02 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic01 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic02 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic03 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic04 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic05 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic06 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic07 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic08 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic09 />
        </Slide>
        <Slide className="justify-center">
          <SlideCCDynamic10 />
        </Slide>
      </Slides>
    </div>
  )
}
