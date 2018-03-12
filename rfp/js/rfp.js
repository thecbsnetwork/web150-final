function openNav() {
        document.getElementById("sidenav").style.width = "280px";
    }

    function closeNav() {
        document.getElementById("sidenav").style.width = "0";
    }

$("#test").html("<div id='child1'>You thrive on collaboration.</div><div id='child2'>You're a theatre artist who works or is interested in working in Seattle.</div><div id='child3'>You love big, cheap theatre.</div><div id='child4'>You're an emerging director with a passion for diving in headfirst.</div><div id='child5'>You're committed to the new play process.</div>");

$(document).ready(function(){
    $("#child1").click(function(){
        $("#child1").remove();
    });
    $("#child2").click(function(){
        $("#child2").remove();
    });
    $("#child3").click(function(){
        $("#child3").remove();
    });
    $("#child4").click(function(){
        $("#child4").remove();
    });
    $("#child5").click(function(){
        $("#child5").remove();
    });
    $("#test").click(function(){
        $("#result").append("<p style='text-align:center;color:#fff'><strong>You should <a href='http://www.growlingwillow.com/web150/rfp/submit.html'>submit</a> to Annex Theatre!</strong></p>");
    })
});