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

### 2. **How to implement QuickSort algorithm**

<h3><u>Algorithm</u></h3>

> Step 1: Pick a "pivot".

> Step 2. Pivot [P] = median(first + mid + last);

> Step 3. Move Pivot to the end of the array.

> Step 4. Find the below items compared to the pivot.
  <code>
  * largerItemFromLeft -> A[l] //first item
  * smallerItemFromRight -> A[s] //first item
  </code>

> Step 5. swap (l, s) IFF (l < s) // Remember this trick {indices}

> Step 6. Repeat steps 4, 5 until l > s

> Step 7. swap (p, l)

> Step 7. Recrusively do this for larger and smaller partitions

> Step 8. Exit recursion when partition has only 1 element.
