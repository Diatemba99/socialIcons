var i =0;
function pop()
 {
	var item1 = document.getElementById("item1");
	var item2 = document.getElementById("item2");
	var item3 = document.getElementById("item3");
	var item4 = document.getElementById("item4");
	var item5 = document.getElementById("item5");
     if (i==0) 
     {
	   item1.style.transform= 'translate(0)';
	   item2.style.transform= 'translate(0)';
	   item3.style.transform= 'translate(0)';
	   item4.style.transform= 'translate(0)';
	   item5.style.transform= 'translate(0)';
       i=1;
     }
     else
     {
       item1.style.transform= 'translateX(-150px)';
	   item2.style.transform= 'translate(-100px, -100px)';
	   item3.style.transform= 'translateY(-150px)';
	   item4.style.transform= 'translate(100px, -100px)';
	   item5.style.transform= 'translateX(150px)';
       i=0;
     }

}