// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


// sticky scrolled  navbar
// navbar Activate animation

window.onscroll = function (){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
        document.getElementById('navbar').classList.add('scrolled');
    }else{
        document.getElementById('navbar').classList.remove('scrolled')
    }
}

