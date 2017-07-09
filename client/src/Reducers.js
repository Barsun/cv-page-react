import './Actions'

var initialState = {
  Profiles: [],
  Personal: [],
  WorkExperience: [],
  Education: []
};

function mainReducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
          Profiles: action.data.profile,
          Personal: action.data.personal,
          WorkExperience: action.data.workExperience,
          Education: action.data.education
      }
    default:
      return state
  }
}

export default mainReducer
