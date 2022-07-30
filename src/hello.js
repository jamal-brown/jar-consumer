$(document).ready(function() {
    $.ajax({
        url: "https://dotnetcors001.azurewebsites.net/api/todo"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});
