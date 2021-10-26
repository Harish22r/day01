//step01:create an XHR object
//request has to used in whole program
var request=new XMLHttpRequest();
//step02:create a connection
//true:optional,
request.open('GET','https://restcountries.com/v2/all',true);
//step03:send a request
//push for the api to send request to server
request.send();
//step04:once data successfully received from server
//http:200
request.onload=function(){
    //conversion from string to array of json objects
    var data=JSON.parse(request.response);
    //console.log(data);
   var res=data.filter((ele)=>ele.population<100000);
   console.log(res);
   }



