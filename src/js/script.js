$(document).ready(function () {
  // Function for changing size when browser size changes
  function onSizeChange() {
    if ($(window).width() > 1200) {
      $("#banner-header-text").removeClass('banner-header-l');
      $("#banner-text-offer").removeClass('banner-offer-l');
      $("#banner-text-money").removeClass('banner-money-l');
      $("#banner-text-slot").removeClass('banner-slot-l');
      $("#banner-text-spin").removeClass('banner-spin-l');
      $("#banner-header-text").addClass('banner-header-xl');
      $("#banner-text-offer").addClass('banner-offer-xl');
      $("#banner-text-money").addClass('banner-money-xl');
      $("#banner-text-slot").addClass('banner-slot-xl');
      $("#banner-text-slot").addClass('banner-slot-xl');
      $("#banner-text-spin").addClass('banner-spin-xl');
    }

    if ($(window).width() <= 1200 && $(window).width() > 992) {
      $("#banner-header-text").removeClass('banner-header-xl');
      $("#banner-text-offer").removeClass('banner-offer-xl');
      $("#banner-text-money").removeClass('banner-money-xl');
      $("#banner-text-slot").removeClass('banner-slot-xl');
      $("#banner-text-spin").removeClass('banner-spin-xl');
      $("#banner-header-text").addClass('banner-header-l');
      $("#banner-text-offer").addClass('banner-offer-l');
      $("#banner-text-money").addClass('banner-money-l');
      $("#banner-text-slot").addClass('banner-slot-l');
      $("#banner-text-spin").addClass('banner-spin-l');
    }

    if ($(window).width() <= 992 && $(window).width() > 768) {
      $("#banner-text-money").removeClass('banner-money-l');
      $("#side-text-container").removeClass('side-text-container-s');
      $("#banner-header-text").addClass('banner-header-l');
      $("#banner-text-offer").addClass('banner-offer-l');
      $("#banner-text-money").addClass('banner-money-m');
      $("#banner-text-slot").addClass('banner-slot-l');
      $("#banner-text-spin").addClass('banner-spin-l');
      $("#side-text-container").addClass('side-text-container');
    }

    if ($(window).width() <= 768 && $(window).width() > 600) {
      $("#side-text-container").removeClass('side-text-container');
      $("#side-text-container").removeClass('side-text-container-xs');
      $("#banner-header-text").addClass('banner-header-l');
      $("#banner-text-offer").addClass('banner-offer-l');
      $("#banner-text-money").addClass('banner-money-m');
      $("#banner-text-slot").addClass('banner-slot-l');
      $("#banner-text-spin").addClass('banner-spin-l');
      $("#side-text-container").addClass('side-text-container-s');
    }

    if ($(window).width() <= 600) {
      $("#side-text-container").removeClass('side-text-container-s');
      $("#banner-header-text").addClass('banner-header-l');
      $("#banner-text-offer").addClass('banner-offer-l');
      $("#banner-text-money").addClass('banner-money-m');
      $("#banner-text-slot").addClass('banner-slot-l');
      $("#banner-text-spin").addClass('banner-spin-l');
      $("#side-text-container").addClass('side-text-container-xs');
    }
  }

  // Trigger function on initial load
  onSizeChange();

  // Event Listener to trigger onSizeChange function when browser size changes
  window.addEventListener('resize', function() {
    onSizeChange();
  });

  // Function for adjusting header when user scrolls
  function onScrollPage() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "65px";
      document.getElementById("navbar").style.opacity = 1;
      document.getElementById("logo").style.width = "110px";
    } else {
      document.getElementById("navbar").style.height = "85px";
      document.getElementById("navbar").style.opacity = 0.7;
      document.getElementById("logo").style.width = "145px";
    }
  }

  // Trigger onScrollPage when user scrolls
  window.onscroll = function () { onScrollPage(); };

});