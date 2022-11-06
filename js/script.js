window.onload = function loadpage()
{
  Slide();
  NextSlide();
  BackSlide();
  CreatePagination();
  NextPagination();

}





var slideitem = document.getElementsByClassName("slide_item")
var nextbutton = document.getElementById('slide-next')
var Backbutton = document.getElementById('slide-back')
var pagination = document.getElementById('pagination');
var paginationitem = document.getElementsByClassName("pagination-item");
var index = 0;
function Slide()
{



  var i;
  for(i=0;i<slideitem.length;i++)
  {

    slideitem[i].style.display = "none";
  }
  slideitem[index].style.display = "block";
  

if(index==slideitem.length-1)
{
  nextbutton.disabled = true;
  nextbutton.style.opacity = "0.2";
}
else
{
  nextbutton.disabled = false;
  nextbutton.style.opacity = "0.8";


}
if(index==0)
{
  Backbutton.disabled = true;
  Backbutton.style.opacity = "0.2";

}
else
{
  Backbutton.disabled = false;
  Backbutton.style.opacity = "0.8";

  
}

}


function NextSlide()
{  
  nextbutton.addEventListener("click", function()
  {
     index+= 1;

     Slide()
     NextPagination();
    
  });

  
  
}

function BackSlide()
{
  Backbutton.addEventListener("click", function()
  {
     index-= 1;
     Slide()
     BackPagination();

    var addclass = document.getElementById("slide-item");
    });
}

function CreatePagination()
{
for(var i = 0; i<slideitem.length;i++)
{
 var create = document.createElement("span");
 create.classList.add("pagination-item")
 pagination.appendChild(create)


}

}

function NextPagination()
{
  paginationitem[index].classList.add("paginationactive");
  paginationitem[index-1].classList.remove("paginationactive");
}
function BackPagination()
{
  paginationitem[index+1].classList.remove("paginationactive");
  paginationitem[index].classList.add("paginationactive");
}


