export default class PasswordMatchError extends Error {
    constructor() {
        super('Passwords don\'t match')
    }
}