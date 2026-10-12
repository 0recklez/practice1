
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

function allSettled(promises) {
    return Promise.all(
        promises.map(el => {
            return Promise.resolve(el)
                .then(value => {
                    return { status: 'fulfilled', value: value }
                })
                .catch(reason => {
                    return { status: 'rejected', reason: reason }
                });
        })
    );
}


