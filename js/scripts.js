var add = function(marriage,healthcare,breitbart){
  return marriage + healthcare + breitbart;
};




$(function(){
  $("#formOne").submit(function(event) {

    var marriage = parseInt($("input:radio[name=marriage]:checked").val());

    var healthcare = parseInt($("input:radio[name=healthcare]:checked").val());

    var breitbart = parseInt($("input:radio[name=breitbart]:checked").val());


      if (add(marriage,healthcare,breitbart) > 11) {
        $('#conservative').show();
        $('#liberal').hide();
      } else {
        $('#liberal').show();
        $('#conservative').hide();
      }


    event.preventDefault();
  });
});
