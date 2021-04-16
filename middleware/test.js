export default function(context){
    //how to call 
    context.$axios.$post('https://reqres.in/api/login',{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }).then(res =>{
    if (res !=='token value'){
        context.redirect('/');
    }
    });
    // console.log(context);
}