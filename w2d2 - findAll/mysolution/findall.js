// want a function `findAll( arr, search )` that I can use to look for all occurences of `search` in
// the array `arr`. The function must return another array, with the indexes of each occurence of `search`.

// And `catsAt` would be an array `[1,3,6,7]`

// Look at the indexOf function - but don't return anything inside the loop.
// Make the function create an empty solution-array, then iterate through the `arr`, and for every match,
// push the index to the solution-array.
// Then return the solution-array

const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];

function findAll(arr, search) {
  let indexes = [];
  let i;
  for (i = 0; i < arr.length; i++) if (arr[i] === search) indexes.push(i);
  return indexes;
}

let catsAt = findAll(animals, "cat");
console.log(catsAt);
