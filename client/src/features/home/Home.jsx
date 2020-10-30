import Hero from './Hero'

function Home({ children }) {
  return (
    <div>
      <Hero>{children}</Hero>
    </div>
  )
}

export default Home
