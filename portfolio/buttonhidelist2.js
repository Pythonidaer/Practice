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



function toggleDefinitions(id){
document.querySelectorAll('ul > li.definitions[style="display: block;"]').forEach((def)=>{
def.setAttribute("style","display: none;");
});
document.querySelector('ul > li.definitions[id="'+id+'"]').setAttribute("style","display: block;");
}

window.addEventListener('click', function(e) {
  var post = document.getElementsByClassName('definitions');
  var tests = Array.prototype.filter.call(post, function(postEl) {
    return postEl.nodeName === 'defintions';
  })
  console.log(tests);
  // if(event.target != post) {
  //   post.style.display = 'none';
  // }
});
