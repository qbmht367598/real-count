$(function(){
   $('.counter-textarea').keyup(function(){
      let cnt=$(this).val().length;
      $('.now-cnt').text(cnt);
        if(cnt>0 && 200>cnt){
            $('.counter-count').removeClass('red');
        }else{
            $('.counter-count').addClass('red');
      }
   });
});