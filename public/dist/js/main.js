$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});

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
  if(height >= 6600){
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


// var hash = window.location.hash;
// var href = $(".l-categories__buttons-link-href").attr('href');
// console.log(href);
// console.log(hash);

// if (hash == href) {
//   $(".l-categories__buttons-link").addClass('active');
// }

