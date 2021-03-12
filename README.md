## PROBLEM SOLVING IN JAVASCRIPT
### 1. **Write a function to reverse a given string using a stack**

<h3><u>Algorithm</u></h3>

> Step 1: Create a stack utility function.

> Step 2: Split the input string into an Array of characters.

> Step 3: Loop through this array and push all the characters into the stack.

> Step 4: Start popping all the items and appending them to a new string.

> Step 5: When the stack is empty, the new string obtained is the reversed string.

<em>Sample</em>

<pre>
let inputString = "ABCDEFG";
let reversedString = reverseString(string);
console.log(reversedString);
Expected output : GFEDCBA
</pre>