export function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export function isValidPassword(password){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(password).trim());
}
