var ids;
var idss;
var m_card;
var part_list;
var socket=io.connect('http://'+document.domain+":"+location.port)
socket.emit("get_all_card")
socket.on("response_all_cards",function(all_cards){
    //console.log(all_cards);
    var str="";
    //str+='<select class="form-control-sm select2 wd-200" data-placeholder="Choose Browser form-control-sm" id="cards" value="">';

    
    for(var i=0;i<all_cards.length;i++){
    str+='<option value="'+all_cards[i]['master_card']+'">'+all_cards[i]['master_card']+'</option>';
    }
    //str+='</select>';
    document.getElementById("cards").innerHTML=str;
});

function get_card(){
document.getElementById("dtt").disabled=false;
document.getElementById("search_value").disabled=false;

var card=document.getElementById("cards").value;
var card_dict={}
card_dict["master_card"]=card;
//console.log(card_dict);
socket.emit("get_card_detail",card_dict)




}

socket.on("response_card_data",function(card_dt){
    //console.log(card_dt);
    m_card=card_dt[0]["master_card"]
    part_list=card_dt[0]["partlist"]
    var str="";
    str+='<tr>';
    idss=card_dt[0]["_id"]["$oid"]
    for(var i=0;i<card_dt.length;i++){
        str+='<td>'+i+'</td>';
        str+='<td id="m_card" contentEditable="false">'+card_dt[i]["master_card"]+'</td>'; 
        str+='<td id="ttl" contentEditable="false">'+card_dt[i]["total_item_count"]+'</td>';
        str+='<td id="opr" contentEditable="false">'+card_dt[i]["operator"]+'</td>';
        str+='<td id="inc" contentEditable="false">'+card_dt[i]["incharge"]+'</td>';
        str+='<td id="itp" contentEditable="false">'+card_dt[i]["items_picked"]+'</td>';
        str+='<td id="st" contentEditable="false">'+card_dt[i]["start_time"]+'</td>';
        str+='<td id="et" contentEditable="false">'+card_dt[i]["end_time"]+'</td>';
        str+='<td id="dur" contentEditable="false">'+card_dt[i]["duration"]+'</td>';
        str+='<td id="sts" contentEditable="false">'+card_dt[i]["status"]+'</td>';



    }
    str+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card();">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card();>Save</button>\
          </div></td>';
str+='</tr>';

    document.getElementById("table_fill").innerHTML=str;

    var part=card_dt[0]["partlist"]
    var str2="";
    str2+='<tr>';
    for(var j=0;j<part.length;j++){
        str2+='<td id="'+part[j]["Serial No"]+'se" contentEditable="false">'+part[j]["Serial No"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'pn" contentEditable="false">'+part[j]["Part Number"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'pd"  contentEditable="false">'+part[j]["Part Description"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'q"  contentEditable="false">'+part[j]["Qty"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'pl"  contentEditable="false">'+part[j]["Pickup Location"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'sts"  contentEditable="false">'+part[j]["Status"]+'</td>';
        str2+='<td id="'+part[j]["Serial No"]+'put"  contentEditable="false">'+part[j]["Pick Up Time"]+'</td>';
        str2+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" id="'+part[j]["Serial No"]+'" onclick="edit_part(this);">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="save_part(this);" id="'+part[j]["Serial No"]+'" >Save</button>\
          </div></td>';
        str2+='</tr>';

     }
document.getElementById("table1_fill").innerHTML=str2;


});

function edit_card(){
    //alert(idss);
document.getElementById("ttl").contentEditable="true";
document.getElementById("opr").contentEditable="true";
document.getElementById("inc").contentEditable="true";
document.getElementById("itp").contentEditable="true";
document.getElementById("st").contentEditable="true";
document.getElementById("et").contentEditable="true";
document.getElementById("dur").contentEditable="true";
document.getElementById("sts").contentEditable="true";
document.getElementById("m_card").className="bg-gray-300";
document.getElementById("ttl").className="bg-gray-300";
document.getElementById("opr").className="bg-gray-300";
document.getElementById("inc").className="bg-gray-300";
document.getElementById("itp").className="bg-gray-300";
document.getElementById("st").className="bg-gray-300";
document.getElementById("et").className="bg-gray-300";
document.getElementById("dur").className="bg-gray-300";
document.getElementById("sts").className="bg-gray-300";





}

function save_card(){
update_card_dict={}
update_card_dict["master_card"]=document.getElementById("m_card").innerText;
update_card_dict["total_item_count"]=document.getElementById("ttl").innerText;
update_card_dict["operator"]=document.getElementById("opr").innerText;
update_card_dict["incharge"]=document.getElementById("inc").innerText;
update_card_dict["items_picked"]=document.getElementById("itp").innerText;
update_card_dict["start_time"]=document.getElementById("st").innerText;
update_card_dict["end_time"]=document.getElementById("et").innerText;
update_card_dict["duration"]=document.getElementById("dur").innerText;
update_card_dict["status"]=document.getElementById("sts").innerText;
update_card_dict["_id"]=idss;
socket.emit("save_card",update_card_dict)



}


socket.on("updated_card_data",function(card_dt){
    //console.log(card_dt);
   
    var str="";
    str+='<tr>';
    idss=card_dt[0]["_id"]["$oid"]
    for(var i=0;i<card_dt.length;i++){
        str+='<td>'+i+'</td>';
        str+='<td id="m_card" contentEditable="false">'+card_dt[i]["master_card"]+'</td>'; 
        str+='<td id="ttl" contentEditable="false">'+card_dt[i]["total_item_count"]+'</td>';
        str+='<td id="opr" contentEditable="false">'+card_dt[i]["operator"]+'</td>';
        str+='<td id="inc" contentEditable="false">'+card_dt[i]["incharge"]+'</td>';
        str+='<td id="itp" contentEditable="false">'+card_dt[i]["items_picked"]+'</td>';
        str+='<td id="st" contentEditable="false">'+card_dt[i]["start_time"]+'</td>';
        str+='<td id="et" contentEditable="false">'+card_dt[i]["end_time"]+'</td>';
        str+='<td id="dur" contentEditable="false">'+card_dt[i]["duration"]+'</td>';
        str+='<td id="sts" contentEditable="false">'+card_dt[i]["status"]+'</td>';



    }
    str+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card();">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card();>Save</button>\
          </div></td>';
str+='</tr>';

    document.getElementById("table_fill").innerHTML=str;

    var part=card_dt[0]["partlist"]
    var str2="";
    str2+='<tr>';
    for(var j=0;j<part.length;j++){
        str2+='<td>'+part[j]["Serial No"]+'</td>';
        str2+='<td>'+part[j]["Part Number"]+'</td>';
        str2+='<td>'+part[j]["Part Description"]+'</td>';
        str2+='<td>'+part[j]["Qty"]+'</td>';
        str2+='<td>'+part[j]["Pickup Location"]+'</td>';
        str2+='<td>'+part[j]["Status"]+'</td>';
        str2+='<td>'+part[j]["Pick Up Time"]+'</td>';
        str2+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm">Save</button>\
          </div></td>';
        str2+='</tr>';

     }
document.getElementById("table1_fill").innerHTML=str2;


});

function edit_part(x){
  
 // se pn pd q pl sts put
//document.getElementById(x.id+"se").contentEditable="true";
document.getElementById(x.id+"pn").contentEditable="true";
document.getElementById(x.id+"pd").contentEditable="true";
document.getElementById(x.id+"q").contentEditable="true";
document.getElementById(x.id+"pl").contentEditable="true";
document.getElementById(x.id+"sts").contentEditable="true";
document.getElementById(x.id+"put").contentEditable="true";
document.getElementById(x.id+"se").className="bg-gray-300";
document.getElementById(x.id+"pn").className="bg-gray-300";
document.getElementById(x.id+"pd").className="bg-gray-300";
document.getElementById(x.id+"q").className="bg-gray-300";
document.getElementById(x.id+"pl").className="bg-gray-300";
document.getElementById(x.id+"sts").className="bg-gray-300";
document.getElementById(x.id+"put").className="bg-gray-300";



}


function save_part(x){


part_dict={}

part_dict["Serial No"]=document.getElementById(x.id+"se").innerText;
part_dict["Part Number"]=document.getElementById(x.id+"pn").innerText;
part_dict["Part Description"]=document.getElementById(x.id+"pd").innerText;
part_dict["Qty"]=document.getElementById(x.id+"q").innerText;
part_dict["Pickup Location"]=document.getElementById(x.id+"pl").innerText;
part_dict["Status"]=document.getElementById(x.id+"sts").innerText;
part_dict["Pick Up Time"]=document.getElementById(x.id+"put").innerText;
part_dict["master_card"]=m_card;
part_dict["_id"]=idss;

socket.emit("part_save",part_dict);






}


socket.on("updated_part_data",function(card_dt){
    //console.log(card_dt);
   
    var str="";
    str+='<tr>';
    idss=card_dt[0]["_id"]["$oid"]
    for(var i=0;i<card_dt.length;i++){
        str+='<td>'+i+'</td>';
        str+='<td id="m_card" contentEditable="false">'+card_dt[i]["master_card"]+'</td>'; 
        str+='<td id="ttl" contentEditable="false">'+card_dt[i]["total_item_count"]+'</td>';
        str+='<td id="opr" contentEditable="false">'+card_dt[i]["operator"]+'</td>';
        str+='<td id="inc" contentEditable="false">'+card_dt[i]["incharge"]+'</td>';
        str+='<td id="itp" contentEditable="false">'+card_dt[i]["items_picked"]+'</td>';
        str+='<td id="st" contentEditable="false">'+card_dt[i]["start_time"]+'</td>';
        str+='<td id="et" contentEditable="false">'+card_dt[i]["end_time"]+'</td>';
        str+='<td id="dur" contentEditable="false">'+card_dt[i]["duration"]+'</td>';
        str+='<td id="sts" contentEditable="false">'+card_dt[i]["status"]+'</td>';



    }
    str+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card();">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card();>Save</button>\
          </div></td>';
str+='</tr>';

    document.getElementById("table_fill").innerHTML=str;

    var part=card_dt[0]["partlist"]
    var str2="";
    str2+='<tr>';
    for(var j=0;j<part.length;j++){
        str2+='<td>'+part[j]["Serial No"]+'</td>';
        str2+='<td>'+part[j]["Part Number"]+'</td>';
        str2+='<td>'+part[j]["Part Description"]+'</td>';
        str2+='<td>'+part[j]["Qty"]+'</td>';
        str2+='<td>'+part[j]["Pickup Location"]+'</td>';
        str2+='<td>'+part[j]["Status"]+'</td>';
        str2+='<td>'+part[j]["Pick Up Time"]+'</td>';
        str2+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm">Save</button>\
          </div></td>';
        str2+='</tr>';

     }
document.getElementById("table1_fill").innerHTML=str2;


});

function search(){
  search_type= document.getElementById("dtt").value;
  searchd_value=document.getElementById("search_value").value;
  
 
  if(search_type=="pick_up_location"){
  for(var i=0;i<part_list.length;i++){

    if(part_list[i]["Pickup Location"]==searchd_value){
      result=part_list[i]
    }
  }
  }

  if(search_type=="part_number"){
  for(var i=0;i<part_list.length;i++){

    if(part_list[i]["Part Number"]==searchd_value){
      result=part_list[i]
    }
  }
  }


  if(search_type=="part_description"){
  for(var i=0;i<part_list.length;i++){

    if(part_list[i]["Part Description"]==searchd_value){
      result=part_list[i]
    }
  }
  }
    var str2="";
    str2+='<tr>';
    str2+='<td id="'+result["Serial No"]+'se" contentEditable="false">'+result["Serial No"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'pn" contentEditable="false">'+result["Part Number"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'pd"  contentEditable="false">'+result["Part Description"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'q"  contentEditable="false">'+result["Qty"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'pl"  contentEditable="false">'+result["Pickup Location"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'sts"  contentEditable="false">'+result["Status"]+'</td>';
    str2+='<td id="'+result["Serial No"]+'put"  contentEditable="false">'+result["Pick Up Time"]+'</td>';
    str2+='<td><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" id="'+result["Serial No"]+'" onclick="edit_part(this);">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="save_part(this);" id="'+result["Serial No"]+'">Save</button>\
               <button type="button" class="btn btn-warning pd-x-5 btn-sm"><a href="master_card_detail">Back</a></button>\
           </div></td>';
    str2+='</tr>';

     
document.getElementById("table1_fill").innerHTML=str2;
  
}
