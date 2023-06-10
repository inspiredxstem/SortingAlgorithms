// Psuedo for Bubble sort:
// Big O Complexity -> O(n^2)
// Start looping from the variable i at the end of the array towards the beginning 
// i = arr.legnth; i--
// Start an inner loop with the variable j from the beginning to the end until i - 1
// if arr[j] is smaller that arr[j+1], swap them
function bubbleSort(arr) {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(`step ${j}:`, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break;
  }
  console.log(`Array sorted with Bubble sorts:`, arr)
}

bubbleSort([101, 2, 12, 54, 21])

// Psuedo for Selection sort:
// Big O Complexity -> O(n^2)
// Store the first element as the smallest value
// Compare this value to the next item until we find another smaller value
// We make a swap at the end of each loop
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min) {
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }

  }
  console.log(`Array sorted with Selection sort:`, arr)
}

selectionSort([32, 41, 5, 31, 2])

//Psuedo for Insertion Sort:
// Start by picking the second element in the array
// Now compare the second element with the one before and swap if applicable
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// Repeat until array is sorted

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    console.log(`Array sorted with Inerstion sort:`, arr)
}


insertionSort([2,1,9,12,4])

// Faster family of sorting algorithms: Megrge, Quick, Radix
// Time complexity -> O(n log n)

//Merge Sort: combination of merging and sorting
// Divide and Conquer approach (split the larger array into subarrays of 0 or 1 elements) 

// Helper merge function:
// It is useful to first implement a function that merges two sorted array
// This helper function creates a new array which is sorted and consists of all of the elements in the two input arrays
// This function should run in O(n+m) time and space
// Create an empty array
// Recommendation: while loop (while there are still values we have not looked)
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while(i < arr1.length){
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    results.push(arr2[j])
    j++
  }
  
  return results;
}

// merge([1,10,50], [2,14,99,100])
//        i          j
// results [1, 2]

// mergeSort Psuedocode:
// mergeSort is recursive
// Big O: O(n log n)
// O(log n) decompositions (breaking the arrays into halves)
// O(n) comparisons per decomposition (we compare the elements)
// Break up the array into halves until the arrays are empty or have one element
// Once we have the smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length
// Return the merged and sorted array
function mergeSort(arr){
  if(arr.length <= 1) return arr;
  // recommend slice the array to split the array into halves
  // arr.slice(0,Math.floor(arr.length/2))
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
  
}

console.log(mergeSort([10,24,76,73,1]))

// Quick Sort: Easy to solve through recursive like merge sort
// exploits the fact that arrays of 0 or 1 element are sorted
// Works with selecting one element (calling pivot) and finding the index where the pivct should end up in the sorted array

// Pivot/Partition helper function:
// It is useful to first implement a function responsible arranging elements in an array on eitehr side of a pivot
// This helper function should designate an element as the pivot 
// Then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on eitehr side of the pivot does not matter!
// This function should do this in place, meaning do not create a new array
// Runtime of quick sort depends on how one selects the pivot
// Ideally, the pivot should be chosen so that it is the median value in the data set (i.e. array)

// Pivot Pseudocode:
// It will accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up and how many elements are less than the current pivot)
// Loop through the array
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (the pivot) with the pivot index
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j){
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  
  let pivot = arr[start];
  var swapIndex = start; // starts at index 0

  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
  return swapIndex
}

pivot([4,8,2,1,5,7,6,3])
// Comparisons for the pivot:
// OG Array: [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]
// Very last thing is to take the swapIndex and swap with the start : [3,2,1,4,5,7,6,8]

// 3
// pivot([2,1,3,4,8,7,6,5])


// Quicksort Pseudocode:
// Big O: O(n log n)
// Call the pivot helper on the array
// Call quicksort again on the left side and right side of the pivot
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index 
// Base case: if the subarray has one element
function quickSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right)
    // recursive call for left side
    quickSort(arr, left, pivotIndex-1) // so we do not include the actual pivot 
    // recursive call for right side
    quickSort(arr, pivotIndex+1,right)
  }
  return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))