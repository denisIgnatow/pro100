jQuery('.menuicon').on('click', function() {
  jQuery(this).toggleClass('active')
  jQuery('.header__contacts').toggleClass('active')
})

jQuery('.form-inv__num').mask('+7 (999) 999-99-99')