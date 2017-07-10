import './Actions'

var initialState = {
  Profiles: [],
  Personal: [],
  WorkExperience: [],
  Education: [],
  Skills: []
};

function mainReducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
          Profiles: action.data.profile,
          Personal: action.data.personal,
          WorkExperience: action.data.workExperience,
          Education: action.data.education,
          Skills: action.data.skills
      }
    default:
      return state
  }
}

export default mainReducer
