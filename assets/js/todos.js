//check off specific todos by clicking
$("ul").on('click', "li", function () {
    $(this).toggleClass("done");

});
// click on x to delete to do
$("ul").on("click", "span", function (ev) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    ev.stopPropagation();
});
// take the input value and make a new to do
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grab new to do text from input
        var todoText = $(this).val();
        if (todoText !== "") {
            $(this).val("");
            //create a new li and add to ul
            $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span>' + todoText + "</li>");
        }
        else return
    }
});
$(".fa-plus").on('click',function(){
    $('input').fadeToggle();
});
$('input').mouseenter(function(){
   $('input').css('cursor', 'text');
   $('input').attr('placeholder', "")
});
$('input').mouseout(function(){
   $('input').css('cursor', 'auto');
   $('input').attr('placeholder', "Add New To-Do")
});