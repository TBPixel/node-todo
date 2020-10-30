import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Shell from './components/Shell'
import Home from './features/home/Home'
import About from './features/about/About'
import Todos from './features/todos/Todos'

function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home>
              <Todos />
            </Home>
          </Route>
        </Switch>
      </Shell>
    </BrowserRouter>
  )
}

export default App
