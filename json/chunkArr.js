/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var newArr = [];
    for (let i = 0; i < arr.length; i += size)
    {
        var chunk = [];
        for(let j = i; (j < size + i) && j < arr.length; j++)
        {
            chunk.push(arr[j]);
        }
        newArr.push(chunk);
    }
    return newArr;
};
