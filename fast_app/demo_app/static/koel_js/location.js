


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
var job_details;
var sr_num;
var indexes;
var text=[];
var lctn=[];
socket.emit("get_ids")

socket.emit("all_ids")


socket.on("received_ids",function(idss){

  var obj = JSON.parse(idss);

  
  ids=obj['id_list']
for(var i=0;i<ids.length;i++){
    trans.push(ids[i]["Transparent"])
    opaq.push(ids[i]["Opaque"])
    medium.push(ids[i]["Medium"])
    covers.push(ids[i]["Cover"])
    text.push(ids[i]["Text IDs"])
    lctn.push(ids[i]["Location"])

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


arr = covers.filter(function(e){return e});

 
for(var l=0 ;l < arr.length ; l++){
document.getElementById(arr4[l]).onclick=function(){part_detail(this)} ;
}


text_array=text.filter(function(e){return e});
lctn_array=lctn.filter(function(e){return e});
for(var l=0 ;l < text_array.length ; l++){
document.getElementById(text_array[l]).innerHTML=lctn_array[l] ;
}





function part_detail(x){
socket.emit("get_cover_id",{"Cover":x.id})
//console.log(x.id);
document.getElementById('modal').click();

}

});


/*function part_detail(x){
socket.emit("get_cover_id",{"Cover":x.id})
//console.log(x.id);
document.getElementById('pn').disabled=true;
document.getElementById('pl').disabled=true;
document.getElementById('qn').disabled=true;
document.getElementById('sts').disabled=true;
document.getElementById('pd').disabled=true;
document.getElementById('modal').click();

}*/





socket.on("cover_response",function(main_list){
//console.log(main_list);
job_details=main_list[1];
part_detail=main_list[0];
sr_num=main_list[2];
indexes=main_list[3];
document.getElementById('pn').disabled=true;
document.getElementById('pl').disabled=true;
document.getElementById('qn').disabled=true;
document.getElementById('sts').disabled=true;
document.getElementById('pd').disabled=true;
//console.log(part_detail[0]["Part Number"]);
document.getElementById('pn').value=part_detail[0]["Part Number"];
document.getElementById('pl').value=part_detail[0]["Pickup Location"];
document.getElementById('qn').value=part_detail[0]["Qty"];
document.getElementById('sts').value=part_detail[0]["Status"];
document.getElementById('pd').value=part_detail[0]["Part Description"];
});



function changes(){

          document.getElementById('pn').disabled=false;
          document.getElementById('pl').disabled=false;
          document.getElementById('qn').disabled=false;
          //document.getElementById('sts').disabled=false;
          document.getElementById('pd').disabled=false;

}







function save_update(){

            part_number=document.getElementById('pn').value;
            part_location=document.getElementById('pl').value;
            quan= document.getElementById('qn').value;
            sts= document.getElementById('sts').value;
            part_descri=document.getElementById('pd').value;
             
            update_dict={}
            update_dict["Part Number"]=part_number
            update_dict["Pickup Location"]=part_location
            update_dict["Qty"]=quan
            update_dict["Status"]=sts
            update_dict["Part Description"]=part_descri
            update_array=[]
            update_array.push(update_dict)
            update_array.push(job_details)
            update_array.push(sr_num)
            update_array.push(indexes)
            //console.log(update_array);
            socket.emit("update_part_detail",update_array);          
}

socket.on("cover_updated",function(updated_cover_list){
//alert("okkk");
//console.log(updated_cover_list);

document.getElementById(updated_cover_list['Text IDs']).innerHTML=updated_cover_list['Location'] ;


});
