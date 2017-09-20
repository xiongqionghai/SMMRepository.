
if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var urlXml = "../Gateway_System/Gateway_System.xml";
xmlhttp.open("GET",urlXml,false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
	
//read xml code
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
   if (xhr.readyState == 4 && xhr.status == 200) {
       document.getElementById("placeholder").innerText = xhr.responseText;
     }
 }
 xhr.open("GET", urlXml);
 xhr.send();

	
//read JSON file
var xhrJson = new XMLHttpRequest();
xhrJson.onreadystatechange = function() {
   if (xhrJson.readyState == 4 && xhrJson.status == 200) {
       document.getElementById("placeholderJ").innerText = xhrJson.responseText;
     }
 }
 xhrJson.open("GET", "Gateway_System.json");
 xhrJson.send();	
		
document.getElementById("Name").innerHTML=
xmlDoc.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
document.getElementById("Description1").innerHTML=
xmlDoc.getElementsByTagName("Description1")[0].childNodes[0].nodeValue;
document.getElementById("ObjectURN").innerHTML=
xmlDoc.getElementsByTagName("ObjectURN")[0].childNodes[0].nodeValue;

//get elements for resources table
//name value
document.getElementById("rname0").innerHTML=
xmlDoc.getElementsByTagName("Name")[1].childNodes[0].nodeValue;
document.getElementById("rname1").innerHTML=
xmlDoc.getElementsByTagName("Name")[2].childNodes[0].nodeValue;
document.getElementById("rname2").innerHTML=
xmlDoc.getElementsByTagName("Name")[3].childNodes[0].nodeValue;
document.getElementById("rname3").innerHTML=
xmlDoc.getElementsByTagName("Name")[4].childNodes[0].nodeValue;
	
	
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
