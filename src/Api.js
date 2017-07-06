
/*
This is a client for Wordnik REST API.

REF: http://developer.wordnik.com/docs.html
*/
const HOSTNAME = 'http://api.wordnik.com:80';

class Api {

  water() {
    console.log('hello');
  }

  // http://api.wordnik.com:80/v4/word.json/phone/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  examples(word) {
    let endpoint = '/v4/word.json';
    let queryParams = 'includeDuplicates=false&useCanonical=false&skip=0&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    let url = `${HOSTNAME}${endpoint}/${word}/examples?${queryParams}`;

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    })
  }
}

export default Api;
