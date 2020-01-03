let sourceArr = [[0], [2, 3, 4], 1, [1, [2, 3]]];

function flatten(sourceArr) {
  return sourceArr.reduce((result, ele) => {
    return result.concat(Array.isArray(ele) ? flatten(ele) : ele);
  }, []);
}

console.log(flatten(sourceArr));

console.log(sourceArr.toString().split(','));


