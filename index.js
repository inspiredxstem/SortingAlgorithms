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