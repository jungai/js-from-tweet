import wretch from 'wretch';

(() => {
  wretch("https://jsonplaceholder.typicode.com/posts")
  .get()
  .notFound(_error => console.log('HANDLE 404'))
  .unauthorized(_error => console.log('HANDLE 401'))
  .error(418, _error => console.log('HANDLE CUSTOM ERROR'))
  .internalError(_error => console.log('HANDLE 5xx'))
  .res(response => console.log(response))
})()
