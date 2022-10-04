function palindrome(str) {
    const rstTrue = str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/gi, '').split('').join('')
    const rstFalse = str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/gi, '').split('').reverse().join('')
  
    if (rstTrue === rstFalse) {
    return true;
    }
    return false
  }