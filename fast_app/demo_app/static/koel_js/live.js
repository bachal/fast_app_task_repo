
	
   $(function () {

      panZoomInstance = svgPanZoom('#svg121753', {
         zoomEnabled: true,
         controlIconsEnabled: true,
         fit: true,
         center: true,
         minZoom: 0.75,
         onZoom: function () {
            var zoomLevel = panZoomInstance.getZoom();
            if (zoomLevel <= 0.75) {
               panZoomInstance.disablePan();
            }

            if (!panZoomInstance.isPanEnabled() && zoomLevel > 0.25) {
               panZoomInstance.enablePan();
            }
         },
      });

      // zoom out
      panZoomInstance.zoom(3.5)


   })

var socket = io.connect('http://' + document.domain + ':' + location.port);
var trans=[];
var opaq=[];
var medium=[];
var svg_id=[];
var ids=[];
var req_sv=[];
var covers=[];
var opq;
var mdm;
var trans;
var arr1;
var arr2;
var arr3;
var arr4;
var svg_id_arr;
var main_array;
var part_sv_id;
var pickup_location;
var part_descri;
var part_number;
var qty;
var status;
var apl;
var map;
var part_sr;
var sr_number;
var job;
var apl_code;
var idd_arr=[];
var live_list;

socket.emit("get_ids_and_live");
//socket.emit("live_req");


socket.on("received_ids",function(idss){
//alert("hiiiii");
  var obj = JSON.parse(idss);
  console.log(obj);
   //console.log(typeof(obj));
  //console.log(obj['id_list']);
  ids=obj['id_list']
  live_list=obj['lives']
  length_live=live_list.length;
  // alert(length_live);
   document.getElementById("msg").innerText=length_live;
for(var i=0;i<ids.length;i++){
    trans.push(ids[i]["Transparent"])
    opaq.push(ids[i]["Opaque"])
    medium.push(ids[i]["Medium"])
    covers.push(ids[i]["Cover"])
}
arr1 = medium.filter(function(e){return e});
arr2 = opaq.filter(function(e){return e});
arr3 = trans.filter(function(e){return e});
arr4 = covers.filter(function(e){return e});

for(var j=0 ;j < arr1.length ; j++){
  var medium_id = document.getElementById(arr1[j]);
  var opaq_id = document.getElementById(arr2[j]);
  var trans_id = document.getElementById(arr3[j]);
 
  medium_id.style.fill = "#8a8a8a";
  opaq_id.style.fill = "#8a8a8a";
  trans_id.style.fill = "#8a8a8a";
 

}


for(var i=0;i<live_list.length;i++){

opqs=live_list[i]["Opaque"];
mdms=live_list[i]["Medium"];
transs=live_list[i]["Transparent"];
//console.log(opqs);
//console.log(mdms);
//console.log(transs);

var opq_id = document.getElementById(opqs);
var trans_id = document.getElementById(transs);
var mdm_id = document.getElementById(mdms);


opq_id.style.fill = "blue";
trans_id.style.fill="#1B4F72";
mdm_id.style.fill="#2E86C1";

}
});



socket.on("live_response",function(live_listt){
   //alert("okkkkk");
   
   live_list=live_listt;

   length_live=live_listt.length;
  // alert(length_live);
   document.getElementById("msg").innerText=length_live;

//console.log(live_list);



});





var y = 1.9
function opac1(){
    for(var i=0;i<live_list.length;i++){

       opqs=live_list[i]["Opaque"];
       mdms=live_list[i]["Medium"];
       transs=live_list[i]["Transparent"];

   var od = document.getElementById(opqs);
   var dd = document.getElementById(transs);
   var gd = document.getElementById(mdms);


  
      if(y < 0.1){
        y = 0.9
      }else{
        dd.style.opacity = y;
        gd.style.opacity=y;
        y -= 0.1
      }
    }


}

 var iter = setInterval(opac1,100);















