function removeCookies(){
   let cookies=document.getElementById('container');
   cookies.style.display="none";
   localStorage.setItem("cookiesAccepted", "true");
 
}
if(localStorage.getItem("cookiesAccepted")){
   document.getElementById('container').style.display = "none";

}
  