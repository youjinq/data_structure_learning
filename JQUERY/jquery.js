(function (global, $) {
  const Greetr = function (firstName, lastName, language) {
    // init function constructor
    return new Greetr.init(firstName, lastName, language);
  };

  // closure env in IIFE, variable save in memory
  var supportedLangs = ['en', 'zh'];

  var greetings = {
    en : 'Hello',
    zh : '你好'
  };

  var formalGreetings = {
    en : 'Greetings',
    zh : '歡迎您'
  };

  var logMessages = {
    en : 'Logged in',
    zh : '登入'
  };

    
  Greetr.prototype = {
        

    // method dun have return then return this
    fullName: function() {
        return this.firstName + ' ' + this.lastName;   
    },
    
    validate: function() {
         if (supportedLangs.indexOf(this.language)  === -1) {
            throw "Invalid language";   
         }
    },
    
    greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
    },
    
    formalGreeting: function() {
        return formalGreetings[this.language] + ', ' + this.fullName();  
    },
    
    greet: function(formal) {
        var msg;
        
        // if undefined or null it will be coerced to 'false'
        if (formal) {
            msg = this.formalGreeting();  
        }
        else {
            msg = this.greeting();  
        }

        if (console) {
            console.log(msg);
        }

        // 'this' refers to the calling object at execution time
        // makes the method chainable
        return this;
    },
    
    greetHTML: function(selector, formal) {
      if (!$) throw "jQuery not loaded";
  
      if (!selector) throw "no jQuery seletor";
  
      let msg = "";
  
      if (formal) {
          msg = this.formalGreeting();
      } else {
          msg = this.greeting();
      };
  
      $(selector).html(msg);
  
      return this;
  
  },
    log: function() {
        if (console) {
            console.log(logMessages[this.language] + ': ' + this.fullName()); 
        }
                        
        return this;
    },
                        
    setLang: function(lang) {
        this.language = lang;
                
        this.validate();
        
        return this;
    }
    
};


  // function constructor
  Greetr.init = function (firstName, lastName, language) {
    const self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  };

  // init prototype of greetr
  Greetr.init.prototype = Greetr.prototype;

  // initi greetr
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);


