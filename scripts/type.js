
setTimeout(function(){
	$(".i0").css("display", "inherit");
        $(".i0").typed({
            strings: [" "],
            typeSpeed: 50, // typing speed
	    startDelay:50,
            loop: false, // loop on or off (true or false)
            loopCount: true, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2);

setTimeout(function(){
	$(".i1").css("display", "inherit");
        $(".i1").typed({
            strings: [" I am an Engineer by passion,"],
            typeSpeed: 50, // typing speed
	    startDelay:50,
            loop: false, // loop on or off (true or false)
            loopCount: true, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 10);

setTimeout(function(){
        $(".i2").css("display", "inherit");
        $(".i2").typed({
            strings: [" Software Developer by profession,"],
            typeSpeed: 50, 
            startDelay:750,
            loop: false,
            loopCount: false, 
            callback: function(){ } 
        });
    }, 2000);

setTimeout(function(){
        $("i3").css("display", "inherit");
        $(".i3").typed({
            strings: [" an enthusiast by heart,"],
            typeSpeed: 50, 
            startDelay:1960,
            loop: false, 
            loopCount: false, 
            callback: function(){ } 
        });
    }, 4000);

setTimeout(function(){
        $(".i4").css("display", "inherit");
        $(".i4").typed({
            strings: [" always ready to take new Lessons."],
            typeSpeed: 50, 
            startDelay:2060,
            loop: false, 
            loopCount: false, 
        });
    }, 6000);

