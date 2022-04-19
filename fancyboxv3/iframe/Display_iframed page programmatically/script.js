$("#test").on('click', function() {

  $.fancybox.open({
    src  : 'https://codepen.io/about/',
    type : 'iframe',
    opts : {
      afterShow : function( instance, current ) {
        console.info( 'done!' );
      }
    }
  });

});