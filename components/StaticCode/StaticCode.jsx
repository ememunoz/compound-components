import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import ClientOnly from '../ClientOnly/ClientOnly'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'
import cx from 'classnames'

const isValidRange = element => {
  const [a, b] = element.split('-')
  return Boolean(a && b && Number(a) < Number(b))
}

const isValidNumber = element => element.length > 0 && !isNaN(element)

// `lines` is a string containing comma separated numbers and ranges
// ranges are formatted{n-m} where n < m
const getHighlightLineNumbers = lines => {
  const elements = lines.replace(/ /g, '').split(',')
  let children = []
  for (const element of elements) {
    if (isValidNumber(element)) {
      children.push(Number(element))
    }
    if (isValidRange(element)) {
      const [a, b] = element.split('-')
      for (let i = Number(a); i <= Number(b); i++) {
        children.push(i)
      }
    }
  }
  return children
}

const StaticCodeWrapper = styled.div`
  ${({ highlightLines }) =>
    highlightLines.length > 0 ? '.token-line { opacity: 0.5; }' : ''}

  ${({ highlightLines }) =>
    highlightLines.map(
      line =>
        `.token-line:nth-child(${line}) { opacity: 1; background-color: rgba(255, 255, 255, 0.1); }`
    )}
`

export default function StaticCode({
  code,
  highlightLines = '',
  className,
  style,
}) {
  const highlightChildren = getHighlightLineNumbers(highlightLines)

  return (
    <ClientOnly className={cx(className)} style={style}>
      <StaticCodeWrapper highlightLines={highlightChildren}>
        <LiveProvider code={code} theme={nightOwl} disabled>
          <div
            className="p-6 pt-3 rounded-md text-white"
            style={{ backgroundColor: 'rgb(1, 22, 39)' }}
          >
            <LiveEditor
              style={{
                fontWeight: 400,
              }}
            />
          </div>
        </LiveProvider>
      </StaticCodeWrapper>
    </ClientOnly>
  )
}
