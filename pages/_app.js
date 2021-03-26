import Nav from '../components/nav'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div
      className="bg-teal-900 min-h-screen flex flex-col"
      style={{ backgroundColor: 'rgb(34,34,34)' }}
    >
      {/* <Nav /> */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
