
//valid parenthesis

/*
// with different parenthesis types
var validParentheses = function(s) {
  const matches = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  const stack = [];
  let level = 0;
  let valid = true;
  let arr = s.split("");

  for( let i = 0; i < arr.length; i ++ ) {
    const e = arr[i];
    if ( Object.keys(matches).indexOf(e) >= 0 ) {
      stack.push(e);
      level += 1;
    } else if ( Object.values(matches).indexOf(e) >= 0 ) {
      if ( stack.length === 0 ) {
          return false;
      }
      const left = stack.pop(e);
      if ( matches[left] !== e ) {
        valid = false;
      }
      level -= 1;
    }
  };
  if ( stack.length > 0 ) {
    valid = false;
  }
  return valid;
}

console.log(validParentheses("[{}{}()}"));
*/

var validParentheses = function(s) {
  const stack = [];
  let level = 0;
  let valid = true;
  let arr = s.split("");

  for( let i = 0; i < arr.length; i ++ ) {
    const e = arr[i];
    if ( e === "(" ) {
      stack.push(e);
      level += 1;
    } else if ( e === ")" ) {
      if ( stack.length === 0 ) {
          return false;
      }
      stack.pop();
      level -= 1;
    }
  };
  if ( stack.length > 0 ) {
    valid = false;
  }
  return valid;
}

console.log(validParentheses("()()"));