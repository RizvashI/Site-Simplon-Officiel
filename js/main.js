$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          
          $(window).scroll(function() {
if ($(this).scrollTop() > 150){  
    $('.container').addClass("sticky");
  }
  else{
    $('.container').removeClass("sticky");
  }
});

                    $(window).scroll(function() {
if ($(this).scrollTop() > 150){  
    $('#ul').addClass("sticky");
  }
  else{
    $('#ul').removeClass("sticky");
  }
});

                    $(window).scroll(function() {
if ($(this).scrollTop() > 150){  
    $('#logo1').addClass("sticky");
  }
  else{
    $('#logo1').removeClass("sticky");
  }
});

                                        $(window).scroll(function() {
if ($(this).scrollTop() > 150){  
    $('#mainmenu').addClass("sticky");
  }
  else{
    $('#mainmenu').removeClass("sticky");
  }
});

