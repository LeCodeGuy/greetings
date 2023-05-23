describe('Test greet function', function() {
    it('should return "Hello, Devan" when Devan and english is passed', function() {
        let greetApp = greetMe();
        let userName = "Devan";
        let languageSelected = "english";

        assert.equal("Hello, Devan",greetApp.greet(userName,languageSelected));
    });

    it('should return "Hallo, Devan" when Devan and afrikaans is passed', function() {
        let greetApp = greetMe();
        let userName = "Devan";
        let languageSelected = "afrikaans";

        assert.equal("Hallo, Devan",greetApp.greet(userName,languageSelected));
    });

    it('should return "Molo, Devan" when Devan and isixhosa is passed', function() {
        let greetApp = greetMe();
        let userName = "Devan";
        let languageSelected = "isixhosa";

        assert.equal("Molo, Devan",greetApp.greet(userName,languageSelected));
    });

});

describe('Test count function', function() {
    it('should only increment the count for each unique user greeted', function() {
        localStorage.clear();
        let counter = 0;
        let greetApp = greetMe();
        //Test user 1
        assert.equal("1",greetApp.count("Devan"));
        //Test user 2
        assert.equal("2",greetApp.count("Mary-Anne"));
        //Test user 3
        assert.equal("3",greetApp.count("John Snow"));
    });
});

describe('Test titleCase function', function() {
    it('should return names in Title Case', function() {
        let greetApp = greetMe();

        assert.equal("Devan",greetApp.titleCase("devan"));
        assert.equal("Mary-Anne",greetApp.titleCase("mary-Anne"));
        assert.equal("John Snow",greetApp.titleCase("JOHN SNOW"));
    });
});

describe('Test clearCount function', function() {
    it('should clear the local storage', function() {
        let greetApp = greetMe();
        
        //Check the count from local storage
        assert.equal(3,localStorage.count);

        greetApp.clearCount();
        
        //check that localStorage is now undefined
        assert.equal(0,localStorage.length);
        
    });
});

describe("Test checkName function", function() {
    it("should return 'Please provide a name and select a language' when no name is provided and no language is selected",function() {
        let greetApp = greetMe();

        assert.equal("Please provide a name and select a language",greetApp.checkName("",""));
    })

    it("should return 'Please select a language' when a name is provided but no language is selected",function() {
        let greetApp = greetMe();

        assert.equal("Please select a language",greetApp.checkName("Devan",""));
    })

    it("should return 'Please provide a name' when no name is provided and a language is selected",function() {
        let greetApp = greetMe();

        assert.equal("Please provide a name",greetApp.checkName("","English"));
    })
    it("should return 'Please provide a name' when an invalid name is provided and a language is selected",function() {
        let greetApp = greetMe();

        assert.equal("Please provide a valid name",greetApp.checkName("Devan123","English"));
    })
})