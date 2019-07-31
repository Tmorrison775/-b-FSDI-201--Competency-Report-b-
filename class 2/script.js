//(function(){
 //   'use strict';
   // document.addEventListener('DOMContentLoad', function(){
    var logo=document.getElementById('logo');
    var a=document.getElementsByTagName('a');
    var squares=document.getElementsByClassName('square');

     //this can change the links in individual tags inside an id/class
    var links = document.getElementById('nav').getElementsByTagName('a');
    links[0].setAttribute('href','http://www.google.com');

    //create new element
    /*var newElement=document.createElement('a');
    var newText=document.createTextNode('Google');
    var navigation=document.querySelector("#nav");
    var footer=document.querySelector('#footer');
    newElement.setAttribute('href', 'http://www.google.com');
    newElement.setAttribute('target','_blank');
    newElement.appendChild(newText);
    navigation.appendChild(newElement);
    */
    //footer.appendChild(logo);





   /* console.log(a);
  for(let i=0;i<=a.length;i++)
  {
      a[i].setAttribute("target","_blank");
  }
//}
    //document.getElementById('footer').innerHTML=logo;
    //console.log(logo);
    
  //  });

//})();

//console.log('2')*/