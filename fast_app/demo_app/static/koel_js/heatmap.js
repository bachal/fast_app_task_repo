
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
      panZoomInstance.zoom(2.5)


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
var arr5;
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
var live_list=[];
var box_list=[];

socket.emit("get_ids")
socket.emit("get_all_parts_durations")



socket.on("received_ids",function(idss){

  var obj = JSON.parse(idss);

   //console.log(typeof(obj));
 // console.log(obj['id_list']);
  ids=obj['id_list']
for(var i=0;i<ids.length;i++){
    trans.push(ids[i]["Transparent"])
    opaq.push(ids[i]["Opaque"])
    medium.push(ids[i]["Medium"])
    covers.push(ids[i]["Cover"])
    box_list.push(ids[i]["Box"])
}
arr1 = medium.filter(function(e){return e});
arr2 = opaq.filter(function(e){return e});
arr3 = trans.filter(function(e){return e});
arr4 = covers.filter(function(e){return e});
arr5 = box_list.filter(function(e){return e});

//console.log(arr5);
for(var j=0 ;j < arr1.length ; j++){
  var medium_id = document.getElementById(arr1[j]);
  var opaq_id = document.getElementById(arr2[j]);
  var trans_id = document.getElementById(arr3[j]);
 
 
  medium_id.style.fill = "#8a8a8a";
  opaq_id.style.fill = "#8a8a8a";
  trans_id.style.fill = "#8a8a8a";
 

}

for(var j=0 ;j < arr5.length ; j++){
  var box_ids = document.getElementById(arr5[j]);
  
 
  box_ids.style.fillOpacity="4.5";
  box_ids.style.fill = "blue";

 

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




//parts_duration,box_ids received here

socket.on("all_parts_duration_response",function(main_list){

//console.log("Correct List arrived .")
alert("okkkk");
console.log(main_list);

m_array=main_list;





/*m_array=[{'Part Number': '3H.962.01.0.00', 'total Duration': 9200, 'Box': 'rect34959-36', 'part_copy': '3H.962.01.0.00'}, {'Part Number': '4H.030.01.0.00', 'total Duration': 14000, 'Box': 'rect34959-91', 'part_copy': '4H.030.01.0.00'}, {'Part Number': '4H.1315.30.0.00', 'total Duration': 23000, 'Box': 'rect34959-6', 'part_copy': '4H.1315.30.0.00'},{'Part Number': '4H.1799.02.0.00', 'total Duration': 44000, 'Box': 'rect34959-76', 'part_copy': '4H.1799.02.0.00'}]
*/

main_array = m_array.filter(function(e){return e});

//console.log(main_array);
for(var n=0;n<main_array.length;n++){
main_duration=main_array[n]["total Duration"];

if(main_duration<10800){


var box_id = document.getElementById(main_array[n]["Box"]);
box_id.style.fill="#0D5AF3";
box_id.style.fillOpacity="4.5";
}

if(main_duration>10800 && main_duration<21600){


var box_id = document.getElementById(main_array[n]["Box"]);
box_id.style.fill="#29E93E";
box_id.style.fillOpacity="4.5";
}

if(main_duration>21600 && main_duration<32400){


var box_id = document.getElementById(main_array[n]["Box"]);
box_id.style.fill="#E1D32F";
box_id.style.fillOpacity="4.5";
}


if(main_duration>32400){


var box_id = document.getElementById(main_array[n]["Box"]);
box_id.style.fill="#F60707";
box_id.style.fillOpacity="4.5";
}

if(main_duration==0){


var box_id = document.getElementById(main_array[n]["Box"]);
box_id.style.fill="blue";
box_id.style.fillOpacity="4.5";
}



}


});
