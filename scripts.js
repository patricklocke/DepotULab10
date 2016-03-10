var add = function(){
    davidsLib.add(space1.value,space2.value, function(err,result){
        if (err) {
            console.log("Oops!");
            alert(err);
        } else {
            console.log(result);
            alert(result);
        }
    });
}

var subtract = function(){
    davidsLib.subtract(space1.value,space2.value, function(err,result){
        if (err) {
            console.log("Oops!");
            alert(err);
        } else {
            console.log(result);
            alert(result);
        }
    });
}

var multiply = function(){
    davidsLib.multiply(space1.value,space2.value, function(err,result){
        if (err) {
            console.log("Oops!");
            alert(err);
        } else {
            console.log(result);
            alert(result);
        }
    });
}

var divide = function(){
    davidsLib.divide(space1.value,space2.value, function(err,result){
        if (err) {
            console.log("Oops!");
            alert(err);
        } else {
            console.log(result);
            alert(result);
        }
    });
}
$(document).ready( function(){
    var thinking = ["Hmm..", "I'm thinking, I'm thinking...", "That's a tough one..", "I.. uh.. well....", "Processing..."];
    $('.loader-dots').hide();
    $('#hmm').hide();
    $('.buttons').on('click', function(){
        $('#hmm').text(thinking[Math.floor(Math.random()*6)+1]);
        $('.loader-dots').fadeToggle(1200);
            setTimeout(function(){
                $('.loader-dots').fadeToggle(1000);  
            },4000);
        $(".workspace").fadeToggle(400);
            setTimeout(function(){
               $('.workspace').fadeToggle(200); 
            },6000);
        $('#hmm').fadeToggle(1200);
            setTimeout(function(){
                $('#hmm').fadeToggle(1000)
            },4000);
        
    });
});