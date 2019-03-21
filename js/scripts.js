$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    var userResponses = [];
    $("#work-response-label").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);

      
      $.each(userResponses, function(index,value) {
        $("#work-responses").html(userResponses.join("" + "<br>" + "")).show();
      });
    });

    // userResponses.forEach(function(response) {
    //   $("#work-responses").append(response + "<br>");
    // });
    $("#work-responses").show();
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
