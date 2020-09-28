
exports.min = function min (array) {
  if (!!array && array != '') {
    array.sort((a, b) => {
        return a - b;
    });
    return array[0];
  } else {
      return 0;
  } 
}

exports.max = function max (array) {
  if (!!array && array != '') {
    array.sort((a, b) => {
        return a - b;
    });
    array.reverse();
    return array[0];
  } else {
      return 0;
  }
}

exports.avg = function avg(array) {
    if (!!array && array != '') {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else {
        return 0;
    }
}
