/*
$(document).ready(function() {
    $.ajax({
        url: "https://jar-spring-rest-service.azurewebsites.net/greeting"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
*/

$(document).ready(function() {
    $.ajax({
        url: "https://dotnetcors001.azurewebsites.net/api/todo"
        //url:"http://localhost:5000/api/todo"
    }).then(function(data, status, jqxhr) {
       $('.item-id').append(data.id);
       $('.item-name').append(data.name);
       $('.item-isComplete').append(data.isComplete);
       console.log(jqxhr);
    });
});
