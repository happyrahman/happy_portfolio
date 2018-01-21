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

  $("#teddy").velocity({
    rotateZ: 3,
    translateY: 10
  }, {
    duration: 2500,
    easing: "swing",
    loop: true
  });

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
            easing: "swing"
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:true});

          $("#fish2").velocity({
            opacity: 0.7,
            left: "-45%"
          }, {
            duration: 3000,
            easing: "swing"
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:true});

          $("#fish3").velocity({
            opacity: 0.7,
            left: "-45%"
          }, {
            duration: 4000,
            easing: "swing"
          }).velocity({translateY:10},{duration:2000, easing:"swing", loop:true});

        }
    });

    loadsection(".section-skillset h1", ".section-skillset h2", "10px", 800);
    loadsection(".section-skillset h2", ".section-skillset p", "10px", 800);
    loadsection(".section-aboutme h1", ".section-aboutme p", "10px", 800);
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

function loadsection(trigger, section, yamount, time) {
  $(window).scroll(function() {
        var hT = $(trigger).offset().top,
            hH = $(trigger).outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $(section).velocity({opacity:1, translateY:yamount},{duration:time, easing:"swing"});
        }
    });
}
