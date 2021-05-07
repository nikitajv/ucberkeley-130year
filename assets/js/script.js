$('.toggle-button').on('click', function(){
    const buttonText = $(this).text().toLowerCase();
    
    $(this).prev('.remainder-text').slideToggle();
    $(this).text(buttonText === 'show more' ? 'show less' : 'show more');
  })



