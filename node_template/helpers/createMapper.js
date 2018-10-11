
module.exports = (mapping) => (orig) => {
    return Object.keys(mapping).reduce((acc, key) => {
        if(typeof mapping[key] == 'function') {
            acc[key] = mapping[key](orig)
        } else if (typeof mapping[key] == 'object'){
            acc[key] = createMapper(mapping[key])(orig)
        }
        return acc
    }, {})
}