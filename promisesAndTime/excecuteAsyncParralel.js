/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const arr = [];
        let completed = 0;
        functions.forEach((fn, index) => {
            fn()
            .then(result => {
                arr[index] = result;
                completed++;
                if(completed === functions.length)
                    resolve(arr);
            })
            .catch(err =>
            {
                reject(err);
            });
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */