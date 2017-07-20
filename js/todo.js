$(document).ready(function(){
  submitForm()
});

// define functions
function submitForm() {
      $("form").on("submit", function(event){
        var newlistitem = $("<li></li>")
        newlistitem.text($("#item").val());
        newlistitem.appendTo("ol");
        event.preventDefault();
    })
  }
