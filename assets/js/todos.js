// $("li").click(function() {
//     // console.log($(this).css("color"));
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({
//             "color": "black",
//             "textDecoration": "none"
//         });
//     } else {
//         $(this).css({
//             "color": "gray",
//             "textDecoration": "line-through"
//         });
        
//     }
// });

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// means all span in ul are listened for click. 
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("#todos").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input").fadeToggle();
});