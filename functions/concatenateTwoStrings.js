function concatenate(firstString, secondString) {
    if (!firstString && !secondString){
        return "Enter two words"
    }
    if (typeof firstString === "string" && typeof secondString === "string"){
        return firstString + secondString
    } else {
    return "invalid input"
     }
}

module.exports = concatenate;