function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; // Handle edge cases
    }
  
    const elementCount = {};
    let mostFrequentElement = arr[0];
    let maxCount = 1;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      elementCount[element] = (elementCount[element] || 0) + 1;
  
      if (elementCount[element] > maxCount) {
        maxCount = elementCount[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function
  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(array);
  console.log("The most frequent element is:", mostFrequent);