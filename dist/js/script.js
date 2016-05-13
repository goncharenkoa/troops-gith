$(document).ready(function() {
 $(".experience ul").customScrollbar({
  skin: "default-skin", 
  hScroll: false,
  updateOnWindowResize: true
  })

 $(".main").onepage_scroll({
   sectionContainer: "section",  
   pagination: false,   
   
});


$( "#scroll-btn" ).click( function ( ) {
    $ ( ".main" ).moveDown ( ) ;
} ) ;

});
