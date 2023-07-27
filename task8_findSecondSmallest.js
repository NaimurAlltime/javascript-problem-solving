function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return null; 
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return null;
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const array = [5, 2, 8, 1, 3, 6];
  const secondSmallest = findSecondSmallest(array);
  
  console.log("The second smallest element is:", secondSmallest);
  