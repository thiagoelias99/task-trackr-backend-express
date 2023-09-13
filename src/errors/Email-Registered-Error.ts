export default class EmailAlreadyRegisteredError extends Error {
    constructor(message?: string) {
        super(message || 'Email already registered')
    }
}