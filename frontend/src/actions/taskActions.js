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