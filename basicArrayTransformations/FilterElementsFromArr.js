/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtred = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (fn(arr[i], i))
            filtred.push(arr[i]);
    }
    return filtred;
};