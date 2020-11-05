module.exports = (codeLength=5, complexity=1) => {
    let code = '';
    for (let i=0; i<codeLength; i++) {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        chars += complexity > 0 ? '1234567890' : '';
        chars += complexity > 1 ? '!#$%&/' : '';
        chars += complexity > 2 ? '()=?-_' : '';
        chars += complexity > 3 ? '{}[]|' : '';
        const randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }
    return code;
}