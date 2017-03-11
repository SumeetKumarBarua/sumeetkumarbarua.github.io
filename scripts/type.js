setTimeout(function(){
		$(".e1").css("display", "inherit");
        $(".e1").typed({
            strings: ["I am an Engineer by passion,"],
            typeSpeed: 50, // typing speed
            loop: false, // loop on or off (true or false)
            loopCount: true, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);

setTimeout(function(){
        $(".e2").css("display", "inherit");
        $(".e2").typed({
            strings: ["Software Developer by profession,"],
            typeSpeed: 50, 
            startDelay:700,
            loop: false,
            loopCount: false, 
            callback: function(){ } 
        });
    }, 2000);

setTimeout(function(){
        $("e3").css("display", "inherit");
        $(".e3").typed({
            strings: ["an enthusiast by heart,"],
            typeSpeed: 50, 
            startDelay:1900,
            loop: false, 
            loopCount: false, 
            callback: function(){ } 
        });
    }, 4000);

setTimeout(function(){
        $(".e4").css("display", "inherit");
        $(".e4").typed({
            strings: ["always ready to take new Lessons."],
            typeSpeed: 50, 
            startDelay:2000,
            loop: false, 
            loopCount: false, 
        });
    }, 6000);

