//선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

function unpackGiftbox(giftBox, wish) {
  // recursive case
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) {
        return true;
      }
    }
  }

  // base case
  return false;
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true


// 다른 풀이 방법 1
// function unpackGiftbox(giftBox, wish) {
//   // recursive case
//   let anotherBoxes = [];
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) {
//       return true;
//     } else if (Array.isArray(giftBox[i])) {
//       anotherBoxes = anotherBoxes.concat(giftBox[i]);
//     }
//   }

//   if (anotherBoxes.length > 0) {
//     return unpackGiftbox(anotherBoxes, wish);
//   }

//   // base case
//   return false;
// }

// 다른 풀이 방법 2
// function unpackGiftbox(giftBox, wish) {
//   const result = giftBox.reduce((acc, curr) => {
//     if (curr === wish) {
//       return true;
//     } else if (Array.isArray(curr)) {
//       return unpackGiftbox(curr, wish) || acc;
//     } else {
//       return acc;
//     }
//   }, false);
//   return result;
// }