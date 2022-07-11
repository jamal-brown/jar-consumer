$(document).ready(function() {
    $.ajax({
        url: "https://ftajartestjtb01.azurewebsites.net/greeting"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});