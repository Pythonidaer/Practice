$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // var hideList = $("body");

  // Hide list items when clicked away
  // hideList.click(function(e) {
  //   var z = (".definitions");
  //   if (z.style.display === "block") {
  //     z.style.display = "none";
  //   } else {
  //     alert("Test complete");
  //   }
  // })

  // Active link switching
  // $(window).scroll(function() {
  //   var scrollbarLocation = $(this).scrollTop();
  //
  //   scrollLink.each(function() {
  //
  //     var sectionOffset = $(this.hash).offset().top - 20;
  //
  //     if ( sectionOffset <= scrollbarLocation ) {
  //       $(this).parent().addClass('active');
  //       $(this).parent().siblings().removeClass('active');
  //     }
  //   })
  //
  // })

})




$( ".definitions" ).css( "display", "none" );

function akDIV() {
  var x = document.getElementById("akDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function acDIV() {
  var x = document.getElementById("acDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function adDIV() {
  var x = document.getElementById("adDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
