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


// $(window).on('scroll', function() {
//   if ($(this).scrollTop() >= 600) {
//     $('.header').addClass('fixed');
//   } else {
//     $('.header').removeClass('fixed');
//   }
//   // console.log( $(this).scrollTop() );
// });


// const scrollToHash = urlHash => {
//   const headerOffset = 90 // полная высота header'a
//   const contentAnchors = document.querySelectorAll("#item")
//   const elementToScroll = Array.from(contentAnchors).filter(item => 
//       item.getAttribute("href") === urlHash)
//   const elementPosition = elementToScroll[0].offsetTop
//   window.scrollTo({ top: elementPosition - headerOffset })
// }

// (() => {
//   const url = new URL(window.location)
//   const urlHash = url.hash
//   if (urlHash) {
//     scrollToHash(urlHash.substr(1)) // убираем символ #
//   }
// })()

/*slider*/
var swiper = new Swiper(".mySwiper-vertical", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  speed: 700,
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* HOVERS */

/* Store the element in el */
document.querySelectorAll('#item').forEach(el => {


/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 8 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -8 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})
})
