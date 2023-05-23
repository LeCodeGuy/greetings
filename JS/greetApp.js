function greetMe (){
    let message = "";
    let counter = 0;
    let localStoreVal = JSON.parse(localStorage.getItem('namesGreeted'));
    var namesGreeted = localStoreVal || {};

    function greet(userName,language){
        
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
        localStorage.clear();
        if (window.location.href.indexOf("greetings/index.html") > -1) {
            location.reload();
        }
    }
    function checkName(userName,language){
        var regExVal = /^[A-Za-z|\s|-]+$/
        //alert();
        if(userName.length === 0 && language.length === 0){
            return "Please provide a name and select a language";
        }        
        else if(userName.length === 0){
            return "Please provide a name";
        }
        else if(regExVal.test(userName)===false){
            return "Please provide a valid name";
        }
        else if(language.length === 0){
            return "Please select a language";
        }
        else{
            return "message";
        }
    }

    function titleCase(str) {
        //keep track of the original string passed
        const originalStr = str;
        const regexHyphen = /-/
        str = str.toLowerCase().split(/\s|-/);

        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }

        if(regexHyphen.test(originalStr)=== true){
           str = str.join('-')
        }
        else{
            str = str.join(' ');
        }

        return str;
      }      
    
    return {
        greet,
        count,
        clearCount,
        titleCase,
        checkName
    };
}