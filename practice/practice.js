function signup(){
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    var finalResult = `
        username = ${username},
        password = ${password}
    `
    if(username == ''){
        alert('please enter username');
    }
    else if(password == ''){
        alert('please enter password');
    }
    else{
        alert(finalResult);
    }
}


// window.onload=function docFunction(){
// // var firstClass=4;
// for(var i=0;i<=4;i++){
//     document.getElementsByClassName("firstClass")[i].style.color="red"
// }
// }
