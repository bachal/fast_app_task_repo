var socket=io.connect('http://'+document.domain+":"+location.port)
var old_sr;
var phrase=myVar;
     
socket.emit("get_schd_job")
socket.on("response_schd_jobs",function(schd_jobs_dt){
    //console.log(schd_jobs_dt);
    var str="";
    str+="<tr>";
for(var i=0;i<schd_jobs_dt.length;i++){

    
             //console.log(schd_jobs_dt[i]["sr_no"]);


             str+='<td id="'+schd_jobs_dt[i]["sr_no"]+'" contentEditable="false" class="bg-white">'+schd_jobs_dt[i]["sr_no"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["application code"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["job name"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["operator"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["incharge"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["trolley"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["items picked"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["start time"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["duration"]+'</td>';
             if(schd_jobs_dt[i]["status"]=="In-progress"){
             str+='<td class="tx-primary">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Completed"){
             str+='<td class="tx-success">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Delayed"){
             str+='<td class="tx-danger">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Not Started"){
             str+='<td class="tx-info">'+schd_jobs_dt[i]["status"]+'</td>';
             }
            // if(schd_jobs_dt[i]["status"]!="Inprogress" || schd_jobs_dt[i]["status"]!="Completed" || schd_jobs_dt[i]["status"]!="Delayed"){
              //str+='<td></td>';

             //}


             str+='<td><div class="btn-group btn-group-sm" role="group" aria-label="">\
                           <button type="button" class="btn btn-primary" id="'+schd_jobs_dt[i]["sr_no"]+'"   onclick="edit(this);"><i class="fa fa-edit" aria-hidden="true"></i></button>&nbsp;\
                           <button type="button" class="btn btn-success" id="'+schd_jobs_dt[i]["_id"]["$oid"]+'" onclick="new_sr(this);"><i class="fa fa-check" aria-hidden="true"></i></button>&nbsp;\
                           <button type="button" class="btn btn-warning" id="'+schd_jobs_dt[i]["job name"]+','+schd_jobs_dt[i]["sr_no_old"]+','+schd_jobs_dt[i]["application code"]+'" onclick="on_map(this);"><a href="/job_map"><i class="fa fa-map tx-white" aria-hidden="true"></i></a></button>';
                          // <button type="button" class="btn btn-secondary" id="'+schd_jobs_dt[i]["job name"]+','+schd_jobs_dt[i]["sr_no_old"]+','+schd_jobs_dt[i]["application code"]+'" onclick="on_map(this);"><a href="{{ url_for('map')}}"><i class="fa fa-play" aria-hidden="true"></i></a></button>\
                           //<button type="button" class="btn btn-secondary"><i class="fa fa-pause" aria-hidden="true"></i></button>\
                           //<button type="button" class="btn btn-secondary"><i class="fa fa-stop" aria-hidden="true"></i></button>\
                        //</div></td>';
             
         


    
str+='</tr>';

}
document.getElementById("table_fill").innerHTML=str;
});
 


function edit(x){
document.getElementById(x.id).contentEditable="true";
document.getElementById(x.id).className="bg-gray-400";

var s=document.getElementById(x.id).innerText;
old_sr=s;
}






function new_sr(x){
document.getElementById(old_sr).contentEditable="false";
document.getElementById(old_sr).className="bg-white";

new_srr=document.getElementById(old_sr).innerText;

sr_update={}
sr_update["old_sr_no"]=old_sr;
sr_update["new_sr_no"]=new_srr;
sr_update["_id"]=x.id;
//console.log(sr_update);
socket.emit("sr_update",sr_update)

}


function search(){
var key=document.getElementById("dtt").value;
var val=document.getElementById("search_value").value;
search_dict={};


if(key=="Apl code"){
search_dict["application code"]=val;
}

if(key=="JOB NAME"){
search_dict["job name"]=val;
}





//console.log(search_dict);
socket.emit("search_req_schd_job",search_dict)
socket.on("get_response_searched_schd_job",function(given_dict){
//console.log(given_dict);
    var str="";
    str+="<tr>";
    for(var i=0;i<given_dict.length;i++){



      str+='<td id="'+given_dict[i]["sr_no"]+'" contentEditable="false" class="bg-white">'+given_dict[i]["sr_no"]+'</td>';
             str+='<td>'+given_dict[i]["application code"]+'</td>';
             str+='<td>'+given_dict[i]["job name"]+'</td>';
             str+='<td>'+given_dict[i]["operator"]+'</td>';
             str+='<td>'+given_dict[i]["incharge"]+'</td>';
             str+='<td>'+given_dict[i]["trolley"]+'</td>';
             str+='<td>'+given_dict[i]["items picked"]+'</td>';
             str+='<td>'+given_dict[i]["start time"]+'</td>';
             str+='<td>'+given_dict[i]["duration"]+'</td>';
             if(given_dict[i]["status"]=="In-progress"){
             str+='<td class="tx-primary">'+given_dict[i]["status"]+'</td>';
             }
             if(given_dict[i]["status"]=="Completed"){
             str+='<td class="tx-success">'+given_dict[i]["status"]+'</td>';
             }
             if(given_dict[i]["status"]=="Delayed"){
             str+='<td class="tx-danger">'+given_dict[i]["status"]+'</td>';
             }
             if(given_dict[i]["status"]=="Not Started"){
             str+='<td class="tx-info">'+given_dict[i]["status"]+'</td>';
             }
            // if(schd_jobs_dt[i]["status"]!="Inprogress" || schd_jobs_dt[i]["status"]!="Completed" || schd_jobs_dt[i]["status"]!="Delayed"){
              //str+='<td></td>';

             //}


             str+='<td><div class="btn-group btn-group-sm" role="group" aria-label="">\
                           <button type="button" class="btn btn-primary" id="'+given_dict[i]["sr_no"]+'"   onclick="edit(this);"><i class="fa fa-edit" aria-hidden="true"></i></button>&nbsp;\
                           <button type="button" class="btn btn-success" id="'+given_dict[i]["_id"]["$oid"]+'" onclick="new_sr(this);"><i class="fa fa-check" aria-hidden="true"></i></button>&nbsp;\
                           <button type="button" class="btn btn-warning" id="'+given_dict[i]["job name"]+','+given_dict[i]["sr_no_old"]+','+given_dict[i]["application code"]+'" onclick="on_map(this);"><a href="/job_map"><i class="fa fa-map tx-white" aria-hidden="true"></i></a></button>';
                           /*<button type="button" class="btn btn-secondary" id="'+given_dict[i]["job name"]+','+given_dict[i]["sr_no_old"]+','+given_dict[i]["application code"]+'" onclick="on_map(this);"><a href="{{ url_for('map')}}"><i class="fa fa-play" aria-hidden="true"></i></a></button>\
                           <button type="button" class="btn btn-secondary"><i class="fa fa-pause" aria-hidden="true"></i></button>\
                           <button type="button" class="btn btn-secondary"><i class="fa fa-stop" aria-hidden="true"></i></button>\
                        </div></td>';*/
             
         


    
str+='</tr>';

}
                       
document.getElementById("table_fill").innerHTML=str;
document.getElementById("add_btn").innerHTML='<button type="button" class="btn btn-warning btn-sm"><a href="/scheduled_jobs">Back</a></button>';


});



}



socket.on("after_update_sr",function(schd_jobs_dt){

var str="";
    str+="<tr>";
for(var i=0;i<schd_jobs_dt.length;i++){

    
             //console.log(schd_jobs_dt[i]["sr_no"]);


             str+='<td id="'+schd_jobs_dt[i]["sr_no"]+'" contentEditable="false" class="bg-white">'+schd_jobs_dt[i]["sr_no"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["application code"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["job name"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["operator"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["incharge"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["trolley"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["items picked"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["start time"]+'</td>';
             str+='<td>'+schd_jobs_dt[i]["duration"]+'</td>';
             if(schd_jobs_dt[i]["status"]=="In-progress"){
             str+='<td class="tx-primary">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Completed"){
             str+='<td class="tx-success">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Delayed"){
             str+='<td class="tx-danger">'+schd_jobs_dt[i]["status"]+'</td>';
             }
             if(schd_jobs_dt[i]["status"]=="Not Started"){
             str+='<td class="tx-info">'+schd_jobs_dt[i]["status"]+'</td>';
             }
            // if(schd_jobs_dt[i]["status"]!="Inprogress" || schd_jobs_dt[i]["status"]!="Completed" || schd_jobs_dt[i]["status"]!="Delayed"){
              //str+='<td></td>';

             //}
          
           console.log(schd_jobs_dt[i]["sr_no_old"]);
             str+='<td><div class="btn-group btn-group-sm" role="group" aria-label="">\
                           <button type="button" class="btn btn-primary" id="'+schd_jobs_dt[i]["sr_no"]+'"   onclick="edit(this);"><i class="fa fa-edit" aria-hidden="true"></i></button> &nbsp;\
                           <button type="button" class="btn btn-success" id="'+schd_jobs_dt[i]["_id"]["$oid"]+'" onclick="new_sr(this);"><i class="fa fa-check" aria-hidden="true"></i></button>&nbsp;\
                           <button type="button" class="btn btn-warning" id="'+schd_jobs_dt[i]["job name"]+','+schd_jobs_dt[i]["sr_no_old"]+','+schd_jobs_dt[i]["application code"]+'" onclick="on_map(this);"><a href="/job_map"><i class="fa fa-map tx-white" aria-hidden="true"></i></a></button>';

                           /*<button type="button" class="btn btn-secondary" id="'+schd_jobs_dt[i]["job name"]+','+schd_jobs_dt[i]["sr_no_old"]+','+schd_jobs_dt[i]["application code"]+'" onclick="on_map(this);"><a href="{{ url_for('map')}}"><i class="fa fa-play" aria-hidden="true"></i></a></button>\
                           <button type="button" class="btn btn-secondary"><i class="fa fa-pause" aria-hidden="true"></i></button>\
                           <button type="button" class="btn btn-secondary"><i class="fa fa-stop" aria-hidden="true"></i></button>\
                        </div></td>';*/
             
         


    
str+='</tr>';

}
document.getElementById("table_fill").innerHTML=str;

});




function on_map(x){
  
xx=x.id.split(",");
job_name=xx[0];
sr_number=xx[1];
apl=xx[2];
map_dict={}
map_dict['job_name']=job_name;
map_dict['sr_number']=sr_number;
map_dict['apl']=apl;
//console.log(map_dict);
socket.emit("for_map",map_dict)
}
