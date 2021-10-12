import axios from "axios"
import {logout} from './../actions/userActions'

export const listTasks =() => async(dispatch,getState)=>{
    try
    {
        dispatch({ type: 'TASK_LIST_REQUEST' })

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.get('/api/task',config);

        dispatch({ type:'TASK_LIST_SUCCESS', payload: data.tasks })
    }
    catch(error)
    {
          const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message

        if (message === 'Not authorized, token failed' || message === 'jwt expired') {
          dispatch(logout())
        }
        dispatch({ type: 'TASK_LIST_FAIL' , 
        payload: 
            message
    })
    }
}

export const updateTask = (taskData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TASK_UPDATE_REQUEST',
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.patch(`/api/task`, taskData , config)
  
      dispatch({
        type: 'TASK_UPDATE_SUCCESS',
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed' || message === 'jwt expired') {
        dispatch(logout())
      }
      dispatch({
        type: 'TASK_UPDATE_FAIL',
        payload: message,
      })
    }
  }

  export const createTask = (taskData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TASK_CREATE_REQUEST',
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/task`, taskData , config)
  
      dispatch({
        type: 'TASK_CREATE_SUCCESS',
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed' || message === 'jwt expired') {
        dispatch(logout())
      }
      dispatch({
        type: 'TASK_CREATE_FAIL',
        payload: message,
      })
    }
  }

  export const deleteTask = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TASK_DELETE_REQUEST',
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        }
      }
      await axios.delete(`/api/task?taskId=${id}`,config)
  
      dispatch({
        type: 'TASK_DELETE_SUCCESS',
        
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed' || message === 'jwt expired') {
        dispatch(logout())
      }
      dispatch({
        type: 'TASK_DELETE_FAIL',
        payload: message,
      })
    }
  }