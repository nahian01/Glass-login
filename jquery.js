/* show login form on button click*/
$('.loginbtn').click(function(){
    $('.login').show();
    $('.signup').hide();
    $('.loginbtn').css({'border-bottom' : '2px solid #ff4141'});
    $('.signupbtn').css({'border-style' : 'none'});
});

/* show signup button form on button click */
$('.signupbtn').click(function(){
    $('.login').hide();
    $('.signup').show();
    $('.signupbtn').css({'border-bottom' : '2px solid #ff4141'});
     $('.loginbtn').css({'border-style' : 'none'});
});
