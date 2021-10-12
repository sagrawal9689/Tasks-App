import React,{ useState,useEffect } from 'react'
import { Button, Form ,Row, Col, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../actions/taskActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const UpdateTaskScreen = ({ location, history}) => { 

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

    const taskUpdate = useSelector((state) => state.taskUpdate)
    const {
      loading,
      error,
      success,
    } = taskUpdate

    const submitHandler = (e) => {
      e.preventDefault()
      const search = location.search;
      const taskId = new URLSearchParams(search).get('taskId');
      console.log(taskId)
      dispatch(updateTask({description, id: taskId}))
    //   setDescription('')
    }

  return (
    <Container className="my-2">
      <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
      <h1>Update Task</h1>
      {success&& <Message variant='success'>Task Updated</Message>}     
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
          Update
        </Button>
      </Form>
      </Col>
      </Row>
    </Container>
  )
}

export default UpdateTaskScreen
