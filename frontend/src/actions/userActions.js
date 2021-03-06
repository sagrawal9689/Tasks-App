import Axios from "axios"

export const login= (email,password) => async(dispatch)=>{

    try{
        dispatch({ type: 'USER_LOGIN_REQUEST' })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        
        const { data }= await Axios.post('/api/users/login',{ email, password },config)

        dispatch({ type: 'USER_LOGIN_SUCCESS' , payload: data })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }
    catch(err)
    {
        console.log(err.response.data)
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: 
            err.response && err.response.data.message?err.response.data.message: err.message
        })
    }
}

export const logout=()=> async(dispatch)=>{

    localStorage.removeItem('userInfo')
    dispatch({
        type: 'USER_LOGOUT'
    })
    dispatch({
      type: 'RESET_LIST'
  })
  
  dispatch({
    type: 'TASK_CREATE_RESET'
})

  dispatch({
    type: 'TASK_UPDATE_RESET'
  })
}

export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: 'USER_REGISTER_REQUEST',
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await Axios.post(
        '/api/users',
        { name, email, password },
        config
      )
  
      dispatch({
        type: 'USER_REGISTER_SUCCESS',
        payload: data,
      })
  
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: 'USER_REGISTER_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }




  