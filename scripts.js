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
    $('.loader-dots').hide();
    
    $('.buttons').on('click', function(){
        $('.loader-dots').toggle();
        setTimeout(function(){
            $('.loader-dots').toggle();  
        },5000);
        
    });
    
   
});