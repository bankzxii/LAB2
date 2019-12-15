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
        // Check password < 8
        if(password.length < 8) {
            return false;
        }
        // Check Uppercase
        let upperCaseLetters = /[A-Z]/g;
        if(password.match(upperCaseLetters) == undefined) { 
            return false;
        }
        
        // Check Number < 3
        let num = 0;
        for(i = 0; i < password.length ; i++) {
            for(x = 0; x < 10 ; x++) {
                if(password.charAt(i) == x) {
                    num = num+1;
                }
            }
        }
        if(num < 3){
            return false;
        }
        
        // Check Special Charecter
        let special = /[!@#\$%\^&]/g;
        if(password.match(special) == undefined) { 
            return false;
        }
        return true;
    },
    isDateValid: function(day,month,year) {
        // Check input is Number?
        if(isNaN(day) && isNaN(month) && isNaN(year)) {
            return false;
        }

        // Check Year is 1970 to 2020
        if(year < 1970 || year > 2020) {
            return false;
        }

        // Check is year is asuratin
        if(year % 400 == 0 && year % 100 == 0) {
            if(month == 2) {
                if(day < 1 || day > 29) {
                    return false;
                }
            }
        } else if(month == 2) {
            if(day < 1 || day > 28) {
                return false;
            }
        }
        // Check month = 31 days
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if(day < 1 || day > 31) {
                return false;
            }
        }

        // Check month = 30 days
        if(month == 4 || month == 6 || month == 9 || month == 11){
            if(day < 1 || day > 30) {
                return false;
            }
        }
        return true;
    }
}
