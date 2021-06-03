// <!--------------- loader--------------------- -->
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.getElementById( 
          "loader").style.visibility = "visible"; 
    } else { 
        document.getElementById( 
          "loader").style.display = "none"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 
    } 
}; 


// document.onreadystatechange = function(){
//     if( document.readyState!=="complete"){
//         document.querySelector("popup_1").style.visibility="hidden";
//         document.getElementById( 
//                       "loader").style.visibility = "visible"; 
//                 } else { 
//                     document.getElementById( 
//                       "loader").style.display = "none"; 
//                     document.querySelector( 
//                       "popup_1").style.visibility = "visible"; 
//     }
// }