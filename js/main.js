
(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS 
            ======================================*/
           
            
            window.scrollReveal = new scrollReveal();

        },
         scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS 
                ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },

         top_flex_slider_fun:function()
         {
             /*====================================
              FLEX SLIDER SCRIPTS 
             ======================================*/
             $('#main-section').flexslider({
                 animation: "fade", //String: Select your animation type, "fade" or "slide"
                 slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                 animationSpeed: 1000,           //Integer: Set the speed of animations, in milliseconds
                 startAt: 0,    //Integer: The slide that the slider should start on. Array notation (0 = first slide)

             });
         },
      
        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/
        },

    }
   
   
    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();
    });
}(jQuery));


if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","Gateway_System/Gateway_System.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
	

//read XML file
var xhrxml = new XMLHttpRequest();
xhrxml.onreadystatechange = function() {
   if (xhrxml.readyState == 4 && xhrxml.status == 200) {
       document.getElementById("placeholder").innerText = xhrxml.responseText;
     }
 }
 xhrxml.open("GET", "Gateway_System.xml");
 xhrxml.send();

//
var xhrJson = new XMLHttpRequest();
xhrJson.onreadystatechange = function() {
   if (xhrJson.readyState == 4 && xhrJson.status == 200) {
       document.getElementById("placeholderJ").innerText = xhrJson.responseText;
     }
 }
 xhrJson.open("GET", "Gateway_System/Gateway_System.json");
 xhrJson.send();
 
document.getElementById("Name").innerHTML=
xmlDoc.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
document.getElementById("Description1").innerHTML=
xmlDoc.getElementsByTagName("Description1")[0].childNodes[0].nodeValue;
document.getElementById("ObjectURN").innerHTML=
xmlDoc.getElementsByTagName("ObjectURN")[0].childNodes[0].nodeValue;


//get elements for resources table
//Operations value
document.getElementById("Operations0").innerHTML=
xmlDoc.getElementsByTagName("Operations")[1].childNodes[0].nodeValue;
document.getElementById("Operations1").innerHTML=
xmlDoc.getElementsByTagName("Operations")[1].childNodes[0].nodeValue;
document.getElementById("Operations2").innerHTML=
xmlDoc.getElementsByTagName("Operations")[2].childNodes[0].nodeValue;
document.getElementById("Operations3").innerHTML=
xmlDoc.getElementsByTagName("Operations")[3].childNodes[0].nodeValue;

//MultipleInstances value
document.getElementById("MultipleInstances0").innerHTML=
xmlDoc.getElementsByTagName("MultipleInstances")[0].childNodes[0].nodeValue;
document.getElementById("MultipleInstances1").innerHTML=
xmlDoc.getElementsByTagName("MultipleInstances")[1].childNodes[0].nodeValue;
document.getElementById("MultipleInstances2").innerHTML=
xmlDoc.getElementsByTagName("MultipleInstances")[2].childNodes[0].nodeValue;
document.getElementById("MultipleInstances3").innerHTML=
xmlDoc.getElementsByTagName("MultipleInstances")[3].childNodes[0].nodeValue;

//Mandatory value
document.getElementById("Mandatory0").innerHTML=
xmlDoc.getElementsByTagName("Mandatory")[0].childNodes[0].nodeValue;
document.getElementById("Mandatory1").innerHTML=
xmlDoc.getElementsByTagName("Mandatory")[1].childNodes[0].nodeValue;
document.getElementById("Mandatory2").innerHTML=
xmlDoc.getElementsByTagName("Mandatory")[2].childNodes[0].nodeValue;
document.getElementById("Mandatory3").innerHTML=
xmlDoc.getElementsByTagName("Mandatory")[3].childNodes[0].nodeValue;

//Type value
document.getElementById("Type0").innerHTML=
xmlDoc.getElementsByTagName("Type")[0].childNodes[0].nodeValue;
document.getElementById("Type1").innerHTML=
xmlDoc.getElementsByTagName("Type")[1].childNodes[0].nodeValue;
document.getElementById("Type2").innerHTML=
xmlDoc.getElementsByTagName("Type")[2].childNodes[0].nodeValue;
document.getElementById("Type3").innerHTML=
xmlDoc.getElementsByTagName("Type")[3].childNodes[0].nodeValue;

//Description value
document.getElementById("Description0").innerHTML=
xmlDoc.getElementsByTagName("Description")[0].childNodes[0].nodeValue;
document.getElementById("Description01").innerHTML=
xmlDoc.getElementsByTagName("Description")[1].childNodes[0].nodeValue;
document.getElementById("Description2").innerHTML=
xmlDoc.getElementsByTagName("Description")[2].childNodes[0].nodeValue;
document.getElementById("Description3").innerHTML=
xmlDoc.getElementsByTagName("Description")[3].childNodes[0].nodeValue;
