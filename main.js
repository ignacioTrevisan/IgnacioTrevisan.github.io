
function transparencia()
{
        window.addEventListener("scroll", function () {
       if(window.pageYOffset>10)
       {
       	header.classList.add("transparente");
       	header.style.transition = "opacity 0.5s ease";
       }else
       {
       	header.classList.remove("transparente");
       	header.style.transition = "opacity 0.5s ease";
       }
   })
        requestAnimationFrame(transparencia);
   }
transparencia();
var imagenes = 
[
"imagenes/proyectoEnAndroid/1.jpeg",
"imagenes/proyectoEnAndroid/2.jpeg",
"imagenes/proyectoEnAndroid/3.jpeg",
"imagenes/proyectoEnAndroid/4.jpeg"
];
var index=0;
function cambiarImagenes()
{
     var imagenCambiante = document.getElementById("imagen-cambiante");
     imagenCambiante.style.backgroundImage ="url('" + imagenes[index] + "')";
     index++;
if(index>=imagenes.length)
{
     index = 0;
}
}
setInterval(cambiarImagenes, 3000);