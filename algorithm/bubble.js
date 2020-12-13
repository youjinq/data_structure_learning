// bubble wrap - for(all), for(all-1-i), if     0(n^2)

function modifiedBubbleSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(modifiedBubbleSort([1, 5, 7, 2, 8]));

// selection sort - for(length-1),for(length), set min = i, swap is not       0(n^2) - find minimal value and swap

function selectionSort2(array) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min != i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}


console.log(selectionSort2([1, 5, 7, 2, 8]));
