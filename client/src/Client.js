
function profile() {
  return fetch(`/api/profile`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function personal() {
    return fetch(`/api/personal`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON);
}

function workExperience() {
    return fetch(`/api/work-experience`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON);
}

function education() {
    return fetch(`/api/education`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON);
}

function skills() {
    return fetch(`/api/skills`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { profile, personal, workExperience, education, skills };
export default Client;
