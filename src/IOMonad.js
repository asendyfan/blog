export default class IO {
    constructor(effect) {
        if (!_.isFunction(effect)) {
            throw 'IO Usage: function required'
        }
        this.effect = effect
    }
    static of (a) {
        return new IO(() => a)
    }
    static from(fn) {
        return new IO(fn)
    }

}