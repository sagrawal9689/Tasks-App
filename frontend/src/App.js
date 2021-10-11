import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact />
          {/* <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} /> */}
        </Container>
      </main>
    </Router>
  )
}

export default App
