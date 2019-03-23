function addData() {
var work=document.querySelector("#work").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var rollnumber=document.querySelector("#rollnumber").value;
 var mobilenumber=document.querySelector("#mobilenumber").value;
//
  var college1=document.querySelector("#college1").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;
//
//
  var college2=document.querySelector("#college2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;
//
//
  var college3=document.querySelector("#college3").value;
  var branch3=document.querySelector("#branch3").value;
  var marks3=document.querySelector("#marks3").value;
//
//
 var skills=document.querySelector("#skills").value;


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
 storeDB.put({
    work:work,
    name:name,
    email:email,
    rollnumber:rollnumber,
    mobilenumber: mobilenumber,
education:[
  {
    college:college1,
    branch:branch1,
    marks:marks1
  },
  {
    college:college2,
    branch:branch2,
    marks:marks2
  },
  {
    college:college3,
    branch:branch3,
    marks:marks3
  }
],
skills:skills
});
window.open("index.html");
}
}
