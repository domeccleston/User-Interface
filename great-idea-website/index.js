/* JQuery function for color changing navbar: credit for this & accompanying CSS goes to Yahya Essam on StackOverflow 
https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
*/

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
