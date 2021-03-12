/* Question 1 */

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