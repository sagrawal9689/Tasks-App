import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AddTaskScreen from './screens/AddTaskScreen'
import UpdateTaskScreen from './screens/UpdateTaskScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/addTask' component={AddTaskScreen} />
        <Route path='/updateTask' component={UpdateTaskScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
