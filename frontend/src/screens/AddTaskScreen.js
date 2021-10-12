import React,{ useState,useEffect } from 'react'
import { Button, Form ,Row, Col, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../actions/taskActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const AddTaskScreen = ({history}) => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = '/'

    useEffect(() => {
      if (!userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])

    const taskCreate = useSelector((state) => state.taskCreate)
    const {
      loading,
      error,
      success,
    } = taskCreate

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(createTask({description}))
      setDescription('')
    }

  return (
    <Container className="my-2">
      <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
      <h1>Add Task</h1>
      {success&& <Message variant='success'>Task Created</Message>}     
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Description</Form.Label>  
          <Form.Control
            as='textarea'
            placeholder='Enter Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className="my-2">
          Add
        </Button>
      </Form>
      </Col>
      </Row>
    </Container>
  )
}

export default AddTaskScreen
