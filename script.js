$(document).ready(function () {
    $("#modal ").hide();
    $('#btn-modal').on('click',function(){
        $("#modal ").show();
    })
    $('#dismiss').click(function(){
        $("#modal ").hide();
    })
        
});
