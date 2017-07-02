import './Actions'

var initialState = {
  Profiles: []
};

function mainReducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_SEARCH_DATA':
      return {
        ...state,
          Profiles: action.data,
      }
    default:
      return state
  }
}

export default mainReducer
