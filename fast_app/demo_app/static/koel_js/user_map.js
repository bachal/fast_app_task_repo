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

socket.emit("get_ids")
socket.emit("req_map")


socket.on("received_ids",function(idss){

var obj = JSON.parse(idss);

//console.log(typeof(obj));
//console.log(obj['id_list']);
 ids=obj['id_list']
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


for(var h=0 ;h < arr4.length ; h++){
//console.log(arr4[h]);
var coverr_id = document.getElementById(arr4[h]);
coverr_id.style.fill = "red";
}



/*for(var g=0 ;g < svg_id_arr.length ; g++){
  var svg_id = document.getElementById(svg_id_arr[g]);
  svg_id.style.fill = "red";

}





for(var c=0 ;c < svg_id_arr1.length ; c++){
  var svg_id = document.getElementById(svg_id_arr1[c]);
  svg_id.style.fill = "#2BF906";

}*/


arr = covers.filter(function(e){return e});

 
for(var l=0 ;l < arr.length ; l++){
document.getElementById(arr[l]).onclick=function(){part_detail(this)};
}




});




function part_detail(x){
socket.emit("cover_id",{"Cover":x.id})
document.getElementById('modal').click();

}




socket.on("cover_response",function(id_list){
for(var j=0 ;j < arr1.length ; j++){
  var medium_id = document.getElementById(arr1[j]);
  var opaq_id = document.getElementById(arr2[j]);
  var trans_id = document.getElementById(arr3[j]);
  //var cover_id = document.getElementById(arr4[j]);


  medium_id.style.fill = "#8a8a8a";
  opaq_id.style.fill = "#8a8a8a";
  trans_id.style.fill = "#8a8a8a";
  

}


var obj1 = JSON.parse(id_list);

console.log(obj1[0]);
opq=obj1[0]["Opaque"];
mdm=obj1[0]["Medium"];
trans=obj1[0]["Transparent"];
svg=obj1[0]["SV ID"];
//console.log(opq);
//console.log("svg here");
//console.log(svg);
var od = document.getElementById(opq);
var dd = document.getElementById(trans);
var gd = document.getElementById(mdm);

od.style.fill = "blue";
dd.style.fill="#1B4F72";
gd.style.fill="#2E86C1";

clearInterval(opac1);

//document.getElementById('modal').click();




if(opac1 != 'undefine'){
    clearInterval(opac1);
  }
var y = 1.9
function opac1(){
   var od = document.getElementById(opq);
   var dd = document.getElementById(trans);
   var gd = document.getElementById(mdm);


  
      if(y < 0.1){
        y = 0.9
      }else{
        dd.style.opacity = y;
        gd.style.opacity=y;
        y -= 0.1
      }
    }
   
 
    var iter = setInterval(opac1,100);


for(var s=0;s<main_array.length;s++){
   main_dict=main_array[s];
   partlist_array=main_dict['partlist']
   for (var z=0;z<partlist_array.length;z++){

     if(svg==partlist_array[z]['SV ID']){

         //console.log("find");
         part_sv_id= partlist_array[z]['SV ID'];
         pickup_location= partlist_array[z]['Pickup Location'];
         part_descri= partlist_array[z]['Part Description'];
         part_number=partlist_array[z]['Part Number'];
         qty=partlist_array[z]['Qty'];
         part_sr=partlist_array[z]['Serial No'];

         status=partlist_array[z]['Status'];
         console.log(pickup_location);
         console.log(part_descri);
         console.log(part_number);
         console.log(status);


       }
else{

// document.getElementById('modal_body').innerText="Sorry given part not your list.Plz pick another"

}

  }   

}


document.getElementById('pn').value=part_number;
document.getElementById('pl').value=pickup_location;
document.getElementById('qn').value=qty;
document.getElementById('sts').value=status;
document.getElementById('pd').value=part_descri;
//document.getElementById('pn').value=part_number;

//document.getElementById('m1').innerText="Part Number: "+part_number +"\n"+"Part Description: "+part_descri+ "\n"+"Quantity: "+qty
//document.getElementById('m2').innerText="Pickup Loction: "+pickup_location+"\n"+"Status :"+status

/*document.getElementById('modal_body').innerText ="Part Number: "+part_number +"\n"+"Part Description: "+part_descri+ "\n"+"Quantity: "+qty+"\n"+"Pickup Loction: "+pickup_location+"\n"+"Status :"+status
*/

});



socket.on("map_response",function(map_dt){
//console.log(map_dt);
main_array=map_dt;
sr_number=map_dt[0]['sr_number'];
job=map_dt[0]['job_name'];
apl_code=map_dt[0]['apl'];
//console.log(job);
//document.getElementById("report").id = job+','+apl_code+','+sr_number;
document.getElementById("report").id = job+','+apl_code+','+sr_number;



id_arr=[]
for(var b=0;b<map_dt.length;b++){
pt=map_dt[b]['partlist']
for(var j=0;j<pt.length;j++){
 //  console.log(pt[j]['SV ID']);
   if(pt[j]['Status']=="Picked"){

       idd_arr.push(pt[j]['SV ID']);
     }

    if(pt[j]['Status']=="Not picked"){

       id_arr.push(pt[j]['SV ID']);
     }

}

}



svg_id_arr = id_arr.filter(function(e){return e});
svg_id_arr1 = idd_arr.filter(function(e){return e});

/* code changed by somnath */
for(var g=0 ;g < svg_id_arr.length ; g++){
  var svg_id = document.getElementById(svg_id_arr[g]);
  svg_id.style.fill = "red";
  //console.log("correct");

document.getElementById(svg_id_arr[g]).onclick=function(){part_detail_using_sv(this)};
document.getElementById(svg_id_arr[g]).ontouchend=function(){part_detail_using_sv(this)};

}




for(var g=0 ;g < svg_id_arr.length ; g++){
  var svg_id = document.getElementById(svg_id_arr[g]);
  svg_id.style.fill = "red";

}





for(var c=0 ;c < svg_id_arr1.length ; c++){
  var svg_id = document.getElementById(svg_id_arr1[c]);
  svg_id.style.fill = "#2BF906";

}






});

// new function added by somnath for click issue purpose
function part_detail_using_sv(x){
socket.emit("cover_id",{"svg_id":x.id})
document.getElementById('modal').click();



}






function save_update(){

update_part={}

update_part['SV ID']=part_sv_id;
update_part['Pickup Location']=pickup_location
update_part['Part Description']=part_descri;
update_part['Part Number']=part_number;
update_part['Qty']=qty;
update_part['Status']=status;
update_part['Serial No']=part_sr;
update_part['sr_number']=sr_number;
update_part['Job Name']=job;
update_part['apl']=apl_code;


//console.log(update_part);
socket.emit("update_part",update_part);


}

socket.on("update_response",function(dt){

//console.log(dt);
   var svg_id = document.getElementById(dt['sv_id']);
   svg_id.style.fill = "#2BF906";



});


function get_start_time(){
update_time={}
update_time['sr_number']=sr_number;
update_time['job']=job;
update_time['apl_code']=apl_code;
//console.log(update_time)
  document.getElementById("svg121753").style.pointerEvents = "all";
  document.getElementById("msg").innerText = "Job started";
  socket.emit("start_time",update_time)
}


function get_end_time(){
update_time={}
update_time['sr_number']=sr_number;
update_time['job']=job;
update_time['apl_code']=apl_code;
socket.emit("end_time",update_time)
document.getElementById("svg121753").style.pointerEvents = "none";
document.getElementById("msg").innerText = "Job end";

}





socket.on("start_time_response",function(time){

     document.getElementById("start_time").innerHTML=time;
});


socket.on("end_time_response",function(time){

     document.getElementById("end_time").innerHTML=time;
});

function get_report(x){

xx=x.id.split(",");
job_name=xx[0];
sr_number=xx[2];
apl=xx[1];
report_dict={}
report_dict['job_name']=job_name;
report_dict['sr_number']=sr_number;
report_dict['apl']=apl;
//console.log(report_dict);
socket.emit("for_report",report_dict)
}


