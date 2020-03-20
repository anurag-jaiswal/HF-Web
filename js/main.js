// Studio Gallery start 

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function () {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener('click', function (e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

// Studio gallery end



// Contact New Code 

    $(document).ready(function () {
      
      $('.js-input').keyup(function () {
        if ($(this).val()) {
          $(this).addClass('not-empty');
        } else {
          $(this).removeClass('not-empty');
        }

      })

  // Overflow hidden on Navigation Menu 

  $(".hamburger").click(function () {
    $("body").css("overflow", "hidden");
  })

  $(".hamburger__line-in .hamburger__line-in--cross01").click(function () {
    $("body").css("overflow-y", "scroll");
  })


});




  
  
 