var $navbar = $(".navbar");

$(document).ready(function() {
  adapt_navbar();

  $(".section-hello>div").velocity("transition.slideUpIn", {
    duration: 1500
  });
  $(".section-hello>img").velocity({
    rotateZ: 5,
    translateY: 10
  }, {
    duration: 2000,
    easing: "swing",
    loop: true
  });

  $(".theboat").velocity({
    rotateZ: 5,
    translateY: 10
  }, {
    duration: 2500,
    easing: "swing",
    loop: true
  },{ mobileHA: true });

  $(".thewater2").velocity({
    rotateZ: 5,
    translateY: 12
  }, {
    duration: 2900,
    easing: "swing",
    loop: true,
  },{ mobileHA: true });

  $(".thewater").velocity({
    rotateZ: -10,
    translateY: 12
  }, {
    duration: 2500,
    easing: "swing",
    loop: true
  },{ mobileHA: true });

  $(".thesail").velocity({
    rotateY:35,
    scale:1.1,
    translateY: 10
  }, {
    duration: 3500,
    easing: "swing",
    loop: true
  },{ mobileHA: true });

  $(window).scroll(function() {
        var hT = $(".section-skillset h1").offset().top,
            hH = $(".section-skillset h1").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
          $("#fish1").velocity({
            opacity: 0.7,
            left: "-45%"
          }, {
            duration: 5000,
            easing: "swing",
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:500});

          $("#fish2").velocity({
            opacity: 0.7,
            left: "-45%"
          }, {
            duration: 3000,
            easing: "swing",
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:500});

          $("#fish3").velocity({
            opacity: 0.7,
            left: "-45%"
          }, {
            duration: 4000,
            easing: "swing",
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:500});

        }
    });

    loadsection(".section-skillset h1", ".section-skillset h2");
    loadsection(".section-skillset h2", ".section-skillset p");
    loadsection(".section-aboutme h1", ".section-aboutme p");
    loadsection(".section-contactme h1",".section-contactme h1");
});

function adapt_navbar() {
  $(window).scroll(function() {
    var aTop = $navbar.height();
    if ($(this).scrollTop() >= aTop) {
      $navbar.addClass("navbar-scroll-state");
    } else {
      $navbar.removeClass("navbar-scroll-state");
    }
  });
}

// function loadsection(trigger, section, yamount, time) {
//   $(window).scroll(function() {
//         var hT = $(trigger).offset().top,
//             hH = $(trigger).outerHeight(),
//             wH = $(window).height(),
//             wS = $(this).scrollTop();
//         if (wS > (hT + hH - wH)) {
//             $(section).velocity({opacity:1, translateY:yamount},{duration:time, easing:"swing"});
//         }
//     });
// }

function loadsection(trigger, section) {
  $(window).scroll(function() {
        var hT = $(trigger).offset().top,
            hH = $(trigger).outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $(section).addClass("paragraphTransition");
        }
    });
}

/* Open when someone clicks on the span element for HappyNav*/
function openNav() {
    $(".overlay a").velocity({opacity:1},{duration:1000});
    $(".overlay .closebtn").velocity({rotateZ:90},{duration:100});
    $navbar.addClass("navbar-scroll-state");
    document.getElementById("myNav").style.width = "100%";
    $(".section-hello").addClass("addBlur");
    $(".section-skillset").addClass("addBlur");
    $(".section-myprojects").addClass("addBlur");
    $(".section-aboutme").addClass("addBlur");
    $(".section-contactme").addClass("addBlur");
    $(".footer").addClass("addBlur");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $(".overlay a").velocity({opacity:0},{duration:1000});
    $(".overlay .closebtn").velocity({rotateZ:-90});
    $navbar.removeClass("navbar-scroll-state");
    document.getElementById("myNav").style.width = "0%";
    adapt_navbar();
    $(".section-hello").removeClass("addBlur");
    $(".section-skillset").removeClass("addBlur");
    $(".section-myprojects").removeClass("addBlur");
    $(".section-aboutme").removeClass("addBlur");
    $(".section-contactme").removeClass("addBlur");
    $(".footer").removeClass("addBlur");
}
