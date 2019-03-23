var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var request;
var idb=window.indexedDB ||window.mozIndexedDB || window.msIndexedDB ||window.webkitIndexedDB;

var open=idb.open("storeData",1);
console.log("IndexedDB created");

open.onupgradeneeded=function(event){
 var request=event.target.result;
  var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});

}
open.onerror=function(error){
  console.log("object not created");
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  var info=storeDB.get(paramValue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
    resume(data.target.result);
    // oops(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data){
var img=document.createElement("img");
img.src="images/toxic.svg";
img.alt=data.name;
left.append(img);

var h3=document.createElement("h3");
h3.textContent=data.name;
left.append(h3);


var h3=document.createElement("h3");
h3.textContent=data.email;
left.append(h3);

var h3=document.createElement("h3");
h3.textContent=data.rollnumber;
left.append(h3);

var h3=document.createElement("h3");
h3.textContent=data.mobilenumber;
left.append(h3);
}
function resume(data) {
var head=document.createElement("h2");
head.textContent="career objective";
right.append(head);

var car=document.createElement("p");
car.textContent=data.work;
right.append(car);

var hr=document.createElement("hr");
right.append(hr);

var heading=document.createElement("h2");
heading.textContent="Educational Details";
right.append(heading);

var table=document.createElement("table");
let row="";
let aa="<tr><th>college</th><th>branch</th><th>marks</th></tr>"

for(var i in data.education){
  row+="<tr>"+"<td>"+data.education[i].college+"</td>"+
"<td>"+data.education[i].branch+"<td>"+
"<td>"+data.education[i].marks+"<td>"+
"</tr>";

}
table.innerHTML=aa+row;
right.append(table);
var skil=document.createElement("h3");
skil.textContent="skills";
right.append(skil);

var ski=document.createElement("h3");
ski.textContent=data.skills;
right.append(ski);


}
