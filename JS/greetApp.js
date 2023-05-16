function greetMe (){
    let message = "";
    

    function greet(name,language){
        switch(language){
            case "english":
                message = "Hello, " + name;
                break;
            case "afrikaans":
                message = "Hallo, " + name;
                break;
            case "isixhosa":
                message = "Molo, " + name;
                break;
        }
        
        return message;
    }

    function count(){
        //increment counter by 1
        counter++;
        
        //store how many times a user was greeted.
        localStorage['count'] = counter;

        return counter;
    }

    return {
        greet,
        count
    };
}