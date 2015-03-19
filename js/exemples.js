

$(function() {

   $('.param').hide();
   $('.def').hide();

   $('#btn-show-def').on('click',function () {
       $('.param').toggle();
       $('.def').toggle();
   });
});

