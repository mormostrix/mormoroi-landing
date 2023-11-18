$(document).ready(function(){
  $("#nav > div.navme").show();
  $("#navimg img").click(function(){
    var navid = $(this).attr('id');
      var navsrc = $(this).attr('src');
    $("#nav > div, #nav > h4, #nav > img:nth-of-type(2)").hide();
    $("#nav > div."+navid).toggle();
    $(".navcontent img").attr("src", navsrc);
  });
});