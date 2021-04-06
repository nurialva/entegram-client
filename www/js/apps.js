const graphurl = 'http://localhost:8080/';
sessionStorage.setItem('isLogin', 'false');
let isLogin = sessionStorage.getItem('isLogin');
if ( isLogin == "false" ) {
    $('.appContainer').load('pages/login.html')
    $('.login').on('click', function(e){
        e.preventDefault;
        let email = $('.email').val();
        if ( email == "" ) {
            console.log('Val is empty');
        }
        else {
            if ( email.length > 5 ) {
                console.log('Email is valid');
            }
            else {
                console.log('Email not valid');
            }
        }
        $('.login').text("logging in...");
    })


}