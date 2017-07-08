
/*
This is a client for Wordnik REST API.

REF: http://developer.wordnik.com/docs.html
*/
const HOSTNAME = 'http://api.wordnik.com:80';
const endpoint = '/v4/word.json';

class Api {


  //  example of using the "examples" API in wordnik
  //  added a limit setter
  // http://api.wordnik.com:80/v4/word.json/phone/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  examples(word,limit) {
    let queryParams = 'includeDuplicates=false&useCanonical=false&skip=0&limit=';
    let queryParams2 = '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    let url = `${HOSTNAME}${endpoint}/${word}/examples?${queryParams}${limit}${queryParams2}`;

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    })
  }

  // the 'definition' function to lookup definition(s) of a word
  // http://api.wordnik.com:80/v4/word.json/hello/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
 definition(word){
   let queryParams = 'definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
   let url = `${HOSTNAME}${endpoint}/${word}/${queryParams}`;


   fetch(url).then(function(response) {
     return response.json();
   }).then(function(json) {
     console.log(json);
   })
 }

 

}

export default Api;
