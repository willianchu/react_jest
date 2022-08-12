function isMountain(arr) {
  let isClimbing = true;
  let lastValue = arr[0];
  if (arr[0] > arr[1]) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lastValue) {
     // is climbing
     if (isClimbing === false) {
       return false;
     }
     lastValue = arr[i];
    } else if (arr[i] < lastValue) {
      // is descending
      isClimbing = false;
      lastValue = arr[i];
    } 
  }
  return isClimbing === false ? true : false;
}

module.exports = isMountain;