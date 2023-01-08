/**
* See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause}
*/

(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
      throw new Error('Something go wrong', {
        cause: { res }
      });
    }
    console.log(res);
  } catch (error) {
   switch (error.cause.res?.status) {
    case 400:
      console.log('HANDLE 400') ;
      break;
    case 404:
      console.log('HANDLE 404');
      break;

    default:
      break;
   } 
  }
})()
