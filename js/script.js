document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");

}

window.addEventListener('scroll', () => {
    NavbarStyle();
    buttonUpStyle();
  })
  
   function NavbarStyle(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
  }
  
  function buttonUpStyle() {myFunction()};
  
      var headero = document.getElementById("myHeader");
      
      
      var sticky = headero.offsetTop;
      
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          headero.classList.add("sticky");
        } else {
          headero.classList.remove("sticky");
        }
      }
  

let lerm_btn = document.getElementById('lerm_btn');

let lerm = document.getElementById('lerm');


lerm_btn.addEventListener('click', toggleText);

function toggleText() {
    lerm.classList.toggle('showoo');
    if(lerm.classList.contains('showoo')) {
        lerm_btn.innerHTML ='Leer menos';
    }
    else {
        lerm_btn.innerHTML = 'Leer más';
    }
    }

