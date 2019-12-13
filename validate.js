module.exports = {
    isUserNameValid: function(username){
        if(username.length < 3){
            return false;
        }
        if(username.toLowerCase() !== username) {
            return false;
        }
        if(username.length > 15) {
            return false;
        }
        return true;
    },
    isAgeValid: function(age) {
        if(isNaN(age)){
            return false;
        }
        if(age < 18 || age > 100) {
            return false;
        }
        return true;
    },
    isPasswordValid: function(password) {
        if(password.length < 8) {
            return false;
        }
        if(password.toLowerCase() == password) {
            return false;
        }
        return true;
    }
}
