$().ready(function() {
    $("#link1").hide();
    $("#sub1").click(function() {
        if($("#a1")[0].value === "stone") {
            alert("Rätt");
            $("link1").show();
        } else {
            alert("Fel! Försök igen :)");
        }
    });
});
