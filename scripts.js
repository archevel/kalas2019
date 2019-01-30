$().ready(function() {

    $("#sub").click(function() {
        var actualAnswer = $("#a").val().toLowerCase();
        var acceptedAnswers = $("#a").attr('data-expect').toLowerCase().split(",");
        
        if(acceptedAnswers.indexOf(actualAnswer) >= 0) {
            alert("Korrekt!");
            window.location.href = $("#link").attr('href');
        } else {
            alert("Fel! :)");
        }
    });
});
