/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
   
   if(localStorage.getItem("currentscreen") === null){
       var currentscreen = 5;
       localStorage.setItem("currentscreen",currentscreen);
   }
   var tmp = localStorage.getItem("currentscreen");
   tmp++;
   localStorage.setItem("currentscreen",tmp);
   alert(tmp);
});
