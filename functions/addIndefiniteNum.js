function add() {
    var result = 0;
    if (arguments.length === 0 ){
        return "Enter a number"
    }
    for (var i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === "number"){
            result += arguments[i]
        }
        else{ 
            return "invalid input"

        }
    }
    return result;
}

