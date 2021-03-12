/* Write a function to reverse a given string using a stack, */

// let inputString = "ABCDEFG";
// let reversedString = reverseString(string);

// console.log(reversedString);


// Expected output : GFEDCBA

/* SOLUTION */
/* Step 1: Create a stack utility function.

Step 2: Split the input string into an Array of characters.

Step 3: Loop through this array and push all the characters into the stack.

Step 4: Start popping all the items and appending them to a new string;

Step 5: When the stack is empty, the new string obtained is the reversed string. */

function StackFunc () {
  let output = [];
  let length = 0;
  return {
    push: (item) => {
      length++;
      return output.push(item)
    },
    pop: () => {
      if(output.length <= 0){
        return null;
      } else {
        length--;
        return output.pop()
      }
    },
    peek: () => {
      if(output.length <= 0){
        return null;
      } else{
        return output[length - 1]
      }
    },
    isEmpty: () => {
      return !length
    }
  }
}

const reverseString = str => {
  let result = "";
  let stack = new StackFunc();
  let stringArr = str.split("");
  stringArr.forEach(element => {
    stack.push(element)
  })
  while(!stack.isEmpty()){
    result += stack.pop()
  }
  return result
}

reverseString('ASDFG')