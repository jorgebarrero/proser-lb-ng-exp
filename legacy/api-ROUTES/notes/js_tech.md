
## Transpose array
map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

```javascript
array[0].map((col, i) => array.map(row => row[i]));

transpose = m => m[0].map((x,i) => m.map(x => x[i]))
```


### Underscore.js

```javascript
_.zip.apply(_, [[1,2,3], [1,2,3], [1,2,3]])

_.zip(...matrix)
```

### Javascript

```javascript
var = 
function transpose(arr,arrLen) {
  for (var i = 0; i < arrLen; i++) {
    for (var j = 0; j <i; j++) {
      //swap element[i,j] and element[j,i]
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
}

```