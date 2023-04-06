import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import './main.jsx'

function App() {
  return (
    <Container customClass='min-height'>
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo projeto</Link>
      </div>
      <Routes>
        
      <Route exact path='/' element={<Home />}>
        </Route>

        <Route exact path='/company' element={<Company />}>
        </Route>

        <Route exact path='/contact' element={<Contact />}>
        
        </Route>

        <Route exact path='/newproject' element={<NewProject />}>
        </Route>
        
      </Routes>
      <p>Footer</p>
    </Router>
    </Container>
  )
}

export default App
