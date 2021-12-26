$(document).foundation();

/*nums*/

var stop = false;

function numStart(self, endNumber) {
  $(self).animate({numberValue: endNumber}, {
    duration: 1000,
    easing: "linear",
    step: function(val) {
      $(self).html(Math.ceil(val));     
    }
  });
}

function scrollStart() {
  var height = $(window).scrollTop();
  if(height >= 3200){
    $(".js-num").each(function(item) {
      var i = parseFloat($(this).text());
      numStart(this, i);
    });
    $(".js-num").addClass('opacity');
    stop = true;
  }
}
$(window).scroll(function() {
  if (stop == false) {
    scrollStart();
  }
});


$(window).on('scroll', function() {
  // console.log( $(this).scrollTop() );
});


/*header fixed*/
var h = $(window).scrollTop();
$(window).scroll(function() {
  if (h >= 600) {
    $(".header").addClass('sticky-header');
  };
});


// var hash = window.location.hash;
// var href = $(".l-categories__buttons-link-href").attr('href');
// console.log(href);
// console.log(hash);

// if (hash == href) {
//   $(".l-categories__buttons-link").addClass('active');
// }

/*slider*/
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
});