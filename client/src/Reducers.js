import './Actions'

var initialState = {
  Profiles: [],
  Personal: [],
  WorkExperience: [],
  Education: [],
  Skills: [],
  Contact: []
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
          Skills: action.data.skills,
          Contact: action.data.contact
      }
    default:
      return state
  }
}

export default mainReducer
