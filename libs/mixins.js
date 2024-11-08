export default {
    mixin(original, mixin) {
        const _original = original;
        return function (...args) {
            mixin(_original, ...args)
        }
    }
}