import './Actions'

var initialState = {
  Profiles: [],
  Personal: []
};

function mainReducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
          Profiles: action.data.profile,
          Personal: action.data.personal,
      }
    default:
      return state
  }
}

export default mainReducer
