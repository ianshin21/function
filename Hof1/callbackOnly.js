function callbackOnly(callback, response) {
  // TODO: 여기에 코드를 작성합니다.
  if(response.status === 'success'){
    // result = callback(response.data);
    return callback(response.data);
  }else{
    // result = "Something went wrong"
    return "Something went wrong"
  }
  // return result;
}


function getDomain(email){
  return email.split('@')[1].split('.')[0];
}

function getUserId(email) {
  return email.split('@')[0];
}

let output = callbackOnly(getDomain, {
  status: 'success',
  data: 'mike@codestates.com',
});

console.log(output);

output = callbackOnly(getUserId, {
  status: 'success',
  data: 'mike@codestates.com',
});

console.log(output); // --> mike

output = callbackOnly(getUserId, {
  status: 'fail',
  data: 'mike@codestates.com',
});
console.log(output); // --> 'Something went wrong!'

