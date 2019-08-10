var isNumber = function(s) {
    if(s.trim() === "") {
        return false
    }
    return !isNaN(Number(s))
};