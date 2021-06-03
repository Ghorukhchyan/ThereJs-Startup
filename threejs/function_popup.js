// <!-- --------------------------------popup_1 ---------------------- -->
  // let popup_1_flag = true;
  // let popup_2_flag = true;
  
divs[0].element.onclick = function() { 
      $('#popup_1').fadeIn("slow");
     
      // if(popup_1_flag){
        FirstPopup();
               
      // }   
    }; 


    
    $('#do-not-cancel-upload-confirm').click(function() {
      $('#popup_1').fadeOut("slow");
      // popup_1_flag  = false;
        setTimeout(() => {
          $( "#divobj1" ).load(window.location.href + " #divobj1" );
        }, 500); 
    });

    $('#cancel-upload-confirm').click(function() {
        // popup_1_flag = false;
        $('#popup_1').fadeOut("slow");
       setTimeout(() => {
          $( "#divobj1" ).load(window.location.href + " #divobj1" );
        }, 500); 

      });
    
    
// <!-- --------------------------------popup_1 clicked square div display none ---------------------- -->


    
$('#divid1').click(function() {
  $("#divid1 ,#divid2 ").css("width", "0px");

});

$('#do-not-cancel-upload-confirm').click(function() {
  $("#divid1 ,#divid2 ").css("width", "5px");

})
$('#cancel-upload-confirm').click(function() {
  $("#divid1 ,#divid2 ").css("width", "5px");

})



     
// <!-- --------------------------------popup_2 ---------------------- -->

divs[1].element.onclick = function() {
    $('#popup_2').fadeIn("slow");
    // if(popup_2_flag){
      SecondPopup();
    // }
  };
  $('#do-not-cancel-upload-confirm_2').click(function() {
    $('#popup_2').fadeOut("slow");
    // popup_2_flag = false;
    setTimeout(() => {
      $( "#divobj2" ).load(window.location.href + " #divobj2" );
    }, 500); 

  });

  $('#cancel-upload-confirm_2').click(function() {
        $('#popup_2').fadeOut("slow");
        // popup_2_flag = false;
        setTimeout(() => {
          $( "#divobj2" ).load(window.location.href + " #divobj2" );
        }, 500); 
    });
   



      // <!-- --------------------------------popup_2 clicked square div display none ---------------------- -->


    
$('#divid2').click(function() {
  $("#divid1 ,#divid2 ").css("width", "0px");
});

$('#do-not-cancel-upload-confirm_2').click(function() {
  $("#divid1 ,#divid2 ").css("width", "5px");
})
$('#cancel-upload-confirm_2').click(function() {
  $("#divid1 ,#divid2 ").css("width", "5px");
})





