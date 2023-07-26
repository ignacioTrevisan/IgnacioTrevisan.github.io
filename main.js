
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
