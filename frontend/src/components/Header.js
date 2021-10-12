import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const dispatch= useDispatch()
    
    const history = useHistory();

    const logoutHandler=(e)=>{
      dispatch(logout())
    }
    
    const addTaskHandler=()=>{
      history.push('/addTask')
    }

    return (
        <header>
            <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand>Tasks App</Navbar.Brand>
                </LinkContainer>
                <div style={{display: 'flex'}}>
                <Button variant="light" className="mx-4" onClick={addTaskHandler}>    
                    Add Task
                </Button>
                  <Nav className='ms-auto'>
                    { userInfo?(
                      <Nav.Link onClick={ logoutHandler }>
                        Log Out
                      </Nav.Link>
                    ):
                    <LinkContainer to='/login'>
                      <Nav.Link>
                        Log In
                      </Nav.Link>
                    </LinkContainer>
                    }
                  </Nav>
                </div>
              </Container>
            </Navbar>
      </header>
    )
}

export default Header
