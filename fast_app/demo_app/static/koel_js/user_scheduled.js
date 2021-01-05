var socket=io.connect('http://'+document.domain+":"+location.port)

var phrase=myVar;

socket.emit("get_schd")

socket.on("response_schd",function(schd_jobs_dt){
    //console.log(schd_jobs_dt);
    var str="";
    str+="<tr>";
for(var i=0;i<schd_jobs_dt.length;i++){
             str+='<td id="'+schd_jobs_dt[i]["sr_no"]+'" contentEditable="false" class="bg-white">'+(i+1)+'</td>';
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


             str+='<td><div class="btn-group btn-group-sm" role="group" aria-label="">';
                          //<button type="button" class="btn btn-primary" id="'+schd_jobs_dt[i]["sr_no"]+'"   onclick="edit(this);"><i class="fa fa-edit" aria-hidden="true"></i></button>
                           //<button type="button" class="btn btn-success" id="'+schd_jobs_dt[i]["_id"]["$oid"]+'" onclick="new_sr(this);"><i class="fa fa-check" aria-hidden="true"></i></button>-->
              str+='<button type="button" class="btn btn-warning" id="'+schd_jobs_dt[i]["job name"]+','+schd_jobs_dt[i]["sr_no_old"]+','+schd_jobs_dt[i]["application code"]+'" onclick="on_map(this)";><a href="/'+phrase+'/map"><i class="fa fa-map tx-white" aria-hidden="true"></i></a></button></div></td>';
             
         


    
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
