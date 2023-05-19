function greetMe (){
    let message = "";
    let localStoreVal = JSON.parse(localStorage.getItem('namesGreeted'));
    var namesGreeted = localStoreVal || {};

    function greet(userName,language){
        var regExVal = /^[A-Za-z]+$/
        //alert();
        if(regExVal.test(userName)===false){
            message = "Please provide a name and select a language";
        }
        else if(userName.length === 0){
            message = "Please provide a name";
        }
        else if(language.length === 0){
           message = "Please select a language";
        }
        else{
            switch(language){
                case "english":
                    message = "Hello, " + userName;
                    break;
                case "afrikaans":
                    message = "Hallo, " + userName;
                    break;
                case "isixhosa":
                    message = "Molo, " + userName;
                    break;
            }
        }
        return message;
    }

    function count(userName){
            //when the greet button is pressed check if this user was already greeted before
            //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
            if (namesGreeted[userName] === undefined ){
                counter++;
                //add an entry for the user that was greeted in the Object Map
                namesGreeted[userName] = 1;
            } else {
                // update the counter for a specific username
                namesGreeted[userName]++;
            }
        
        //store how many times a user was greeted.
        localStorage['count'] = counter;
        localStorage['namesGreeted'] = JSON.stringify(namesGreeted);

        return counter;
    }
    
    function clearCount() {
        counter = 0;
        //localStorage['count'] = counter;
        // localStorage['count'] = counter;
        localStorage.clear();
        location.reload();
    }

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }      
    
    return {
        greet,
        count,
        clearCount,
        titleCase
    };
}