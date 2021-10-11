import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand>Tasks App</Navbar.Brand>
                </LinkContainer>
                <div style={{display: 'flex'}}>
                <Button variant="light" className="mx-4">    
                    Add Task
                </Button>
                  <Nav className='ms-auto'>
                    <LinkContainer to='/login'>
                      <Nav.Link>
                        Sign In
                      </Nav.Link>
                    </LinkContainer>
                  </Nav>
                </div>
              </Container>
            </Navbar>
      </header>
    )
}

export default Header
