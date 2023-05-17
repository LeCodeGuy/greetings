function greetMe (){
    let message = "";
    //var namesGreeted = {};

    function greet(userName,language){
        
        if(userName.length === 0){
            message = "Please provide a name";
        }
        else if(language.length === 0){
           message = "Please select a language";
        }
        else{
           /* //when the greet button is pressed check if this user was already greeted before
            //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
            if (namesGreeted[userName] === undefined){
                counter++;
                //add an entry for the user that was greeted in the Object Map
                namesGreeted[userName] = 1;
            } else {
                // update the counter for a specific username
                namesGreeted[userName]++;
            }
            localStorage['count'] = counter;*/

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

    function count(){
        /*//when the greet button is pressed check if this user was already greeted before
        //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
        if (namesGreeted[userName] === undefined){
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[userName] = 1;
        } else {
            // update the counter for a specific username
            namesGreeted[userName]++;
        }*/
        
        
        //increment counter by 1
        counter++;
        
        //store how many times a user was greeted.
        localStorage['count'] = counter;

        return counter;
    }
    
    function clearCount() {
        counter = 0;
        localStorage['count'] = counter;
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