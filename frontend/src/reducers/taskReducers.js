export const taskListReduer = (state= { tasks: [] },action)=>{
    switch(action.type)
    {
        case 'TASK_LIST_REQUEST':
            return { loading: true ,tasks: []}
        case 'TASK_LIST_SUCCESS':
            return { loading: false,tasks: action.payload }
        case 'TASK_LIST_FAIL':
            return { loading: false,error: action.payload }
        case 'RESET_LIST':
            return { tasks:[] }
        default:
            return state 
    }
}

export const taskCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'TASK_CREATE_REQUEST':
        return { loading: true }
      case 'TASK_CREATE_SUCCESS':
        return { loading: false, success: true, task: action.payload }
      case 'TASK_CREATE_FAIL':
        return { loading: false, error: action.payload }
      case 'TASK_CREATE_RESET':
        return {}
      default:
        return state
    }
}

export const taskUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_UPDATE_REQUEST':
      return { loading: true }
    case 'TASK_UPDATE_SUCCESS':
      return { loading: false, success: true, task: action.payload }
    case 'TASK_UPDATE_FAIL':
      return { loading: false, error: action.payload }
    case 'TASK_UPDATE_RESET':
      return {}
    default:
      return state
  }
}

export const taskDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_DELETE_REQUEST':
      return { loading: true }
    case 'TASK_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'TASK_DELETE_FAIL':
      return { loading: false, error: action.payload }
    case 'TASK_DELETE_RESET':
      return {}
    default:
      return state
  }
}