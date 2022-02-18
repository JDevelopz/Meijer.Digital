$(".c-intro button").hover(
    function(e){
    // $(this).removeClass("btn-warning");
    // $(this).addClass("btn-w");
    $(this).text("Fast response");
  }, // over
    function(e){
    // $(this).removeClass("btn-w");
    // $(this).addClass("btn-warning");
    $(this).text("Request quote"); }  // out
);
