var ids;
var k;
var sr;
var socket=io.connect('http://'+document.domain+":"+location.port)
socket.emit("get_job_dt")
socket.on("response_job_dt",function(jobs_dt){
  //console.log(jobs_dt);
    ids=jobs_dt["_id"]["$oid"]
    document.getElementById("Application_Code").value=jobs_dt["Application Code"]
    document.getElementById("Issue_Date").value=jobs_dt["Issue Date"]
    document.getElementById("Job_Name").value=jobs_dt["Job Name"]
    document.getElementById("PICKMOID").value=jobs_dt["PICKMOID"]
    document.getElementById("Status").value=jobs_dt["Status"]
    document.getElementById("Time").value=jobs_dt["Time"]
    
  
   //table filling start here
    var str="";
    str+='<tr>';
    for(var i=0;i<jobs_dt["Pickup Details"].length;i++){
      //  srn=String(i);
         k=jobs_dt["Pickup Details"][i]
         sr=k['sr_number']
        //str+='<td id="'+jobs_dt["Job Name"]+String(i)+'">'+(i+1)+'</td>';
        g=jobs_dt["Pickup Details"][i]


        str+='<td id="'+jobs_dt["Job Name"]+k['sr_number']+'" class="">'+(i+1)+'</td>';

        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="opr'+k['sr_number']+'" value="">';
              for(var j=0;j<jobs_dt["operator"].length;j++){
                      for(k in jobs_dt["operator"][j]){
                                    m=jobs_dt["operator"][j]
                                    str+='<option>'+m[k]+'</option>';
                        }
               }
        str+='</select></td>';
        


        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="inc'+sr+'" value="">';
              for(var j=0;j<jobs_dt["incharge"].length;j++){
                      for(k in jobs_dt["incharge"][j]){
                                c=jobs_dt["incharge"][j]
                                str+='<option>'+c[k]+'</option>';
                        }
              }
        str+='</select></td>';


        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="Choose Browser form-control-sm" id="tro'+sr+'" value="">';
              for(var j=0;j<jobs_dt["trolly"].length;j++){
                      for(k in jobs_dt["trolly"][j]){
                            d=jobs_dt["trolly"][j]
                            str+='<option>'+d[k]+'</option>';
                        }
              }
        str+='</select></td>';

       // g=jobs_dt["Pickup Details"][i]
        //dur=parseInt(g["start_time"])-parseInt(g["end_time"])




       
        if(g["items_picked"]==""){
          str+='<td id="itm'+sr+'">'+0+'</td>';

        }

        if(g["items_picked"]!=""){
          str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';

        }
        //str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';
       str+='<td><input type="text" placeholder="" id="st'+sr+'" value="'+g["start_time"]+'" class="form-control form-control-sm wd-200"></td>';
       if(g["duration"]!=""){
        str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';

        }
        if(g["duration"]==""){
        str+='<td id="dr'+sr+'">'+0+'</td>';

        }


        //str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';
        if(g["status"]=="Not Started"){

        str+='<td id="sts'+sr+'" class="tx-info">'+g["status"]+'</td>';
        }

        if(g["status"]=="In-progress"){
        
        str+='<td id="sts'+sr+'" class="tx-primary">'+g["status"]+'</td>';
      

        }

        if(g["status"]=="Completed"){

        str+='<td id="sts'+sr+'" class="tx-Success">'+g["status"]+'</td>';

        }
        //str+='<td class="tx-primary" id="sts'+i+'">In-progress</td>';


        str+='<td><div class="btn-group btn-group-sm pd-y-1" role="group" aria-label="">\
                  <button type="button" class="btn btn-primary btn-sm pd-y-1" id="'+g["sr_number"]+'"   onclick="scdld_job(this)"><a href="#"><i class="fa fa-hourglass-start tx-white" aria-hidden="true"></i></a> &nbsp; Schedule </button>&nbsp;&nbsp;\
                  <button type="button" class="btn btn-secondary btn-disabled" id="del'+i+'"   onclick="unschd_job(this);"><a href="#"><i class="fa fa-trash tx-white tx-20" aria-hidden="true"></i></a> &nbsp; Unschedule </button>';


       str+="</tr>";




  }
//console.log(str);
document.getElementById("table_fill").innerHTML=str;

// =================== Table  =====================
var table = $('#datatable2').DataTable( {
        "scrollX": true,
        lengthChange: false,
        "dom": 'lrtip',


buttons: [
            {
                extend: 'collection',
                text: 'Export',
                autoClose: true,
                buttons: [
                {
                extend:    'copy',
                text:      '<img src="/static/img/ICONS/copy.png" style="height:24px"></img> Copy ',
                titleAttr: 'Copy'
                },
                {
                extend:    'excel',
                text:      '<img src="/static/img/ICONS/excel.png" style="height:24px"></img> Excel ',
                titleAttr: 'Excel'
                },
                {
                extend:    'pdf',
                text:      '<img src="/static/img/ICONS/pdf.png" style="height:24px"></img> PDF ',
                titleAttr: 'PDF'
                },
                {
                extend:    'print',
                text:      '<img src="/static/img/ICONS/print.png" style="height:24px"></img> Print ',
                titleAttr: 'PDF'
                },
                {
                extend:    'csv',
                text:      '<img src="/static/img/ICONS/csv.png" style="height:24px"></img> CSV ',
                titleAttr: 'CSV'
                },
                {
                extend:    'colvis',
                text:      '<img src="/static/img/ICONS/columns.png" style="height:24px"></img> Columns ',
                titleAttr: 'Columns'
                },
                ]
            }
        ]


    } );
    table.buttons( 0, null ).containers().appendTo( '#table_button' );

 // #myInput is a <input type="text"> element
$('#myInput').on( 'keyup', function () {
    table.search( this.value ).draw();
    console.log("working")
} );

// ================================================

});





function scdld_job(x){


var incharge="inc"+x.id;
var operator="opr"+x.id;
var trouly="tro"+x.id;
var start_time="st"+x.id;
var duration="dr"+x.id;
var status="sts"+x.id;
var itmes="itm"+x.id;

var inc=document.getElementById(incharge).value;
var opr=document.getElementById(operator).value;
var tro=document.getElementById(trouly).value;
var st=document.getElementById(start_time).value;
var dr=document.getElementById(duration).innerText;
var sts=document.getElementById(status).innerText;
var item=document.getElementById(itmes).innerText;
var job=document.getElementById("Job_Name").value;
var apl=document.getElementById("Application_Code").value;
var PICKMOID=document.getElementById("PICKMOID").value
var scheduled_job={};
//var status_update={};
//status_update["_id"]=ids;

scheduled_job["incharge"]=inc;
scheduled_job["operator"]=opr;
scheduled_job["trolley"]=tro;
scheduled_job["start time"]=st;
scheduled_job["duration"]=dr;
scheduled_job["status"]="In-progress";
scheduled_job["items picked"]=item;
scheduled_job["job name"]=job;
scheduled_job["application code"]=apl;
scheduled_job["sr_no_old"]=x.id;
//scheduled_job["PICKMOID"]=PICKMOID;
scheduled_job["_id"]=ids;


document.getElementById(incharge).disabled=true;
document.getElementById(operator).disabled=true;
document.getElementById(trouly).disabled=true;
document.getElementById(start_time).disabled=true;
document.getElementById(duration).disabled=true;
document.getElementById(status).disabled=true;
document.getElementById(itmes).disabled=true;
document.getElementById(x.id).disabled=true;
document.getElementById(status).className="tx-primary"
document.getElementById(status).innerText="In-progress"
//console.log(scdld_job);
socket.emit("new_job_schd",scheduled_job);

}


function unschd_job(x){

var split_id=x.id.slice(3);
var incharge="inc"+split_id;
var operator="opr"+split_id;
var trouly="tro"+split_id;
var start_time="st"+split_id;
var duration="dr"+split_id;
var status="sts"+split_id;
var itmes="itm"+split_id;
var status="sts"+split_id;

document.getElementById(incharge).disabled=false;
document.getElementById(operator).disabled=false;
document.getElementById(trouly).disabled=false;
document.getElementById(start_time).disabled=false;
document.getElementById(duration).disabled=false;
document.getElementById(status).disabled=false;
document.getElementById(itmes).disabled=false;
document.getElementById(split_id).disabled=false;
document.getElementById(status).innerText="Not Started";
document.getElementById(status).className="tx-info";


var job=document.getElementById("Job_Name").value;
var apl=document.getElementById("Application_Code").value;
var inc=document.getElementById(incharge).value;
var opr=document.getElementById(operator).value;
var del_job={}
del_job["job name"]=job;
del_job["application code"]=apl;
//del_job["sr_no"]=split_id;
del_job["incharge"]=inc;
del_job["operator"]=opr;
del_job["_id"]=ids;
del_job["sr_no_old"]=split_id;
del_job["status"]="Not Started";

//del_job["index"]=x.id
//console.log(del_job);
socket.emit("del_job",del_job)




}



function to_map(x){

dt={}
x_id=x.id.slice( 1 );
xx_id=x.id[0];

apl=document.getElementById("Application_Code").value
//ft=document.getElementById(x_id+xx_id).innerText;

//alert(x.id);

//alert(ft);
dt['job_name']=x_id;
dt['sr_number']=x.id[0];
dt['apl']=apl;




socket.emit("for_map",dt);



}






socket.on("updated_status",function(job_dt){

console.log("========= Updated Status ====================")

  //console.log(job_dt);
    ids=job_dt["_id"]["$oid"]
    document.getElementById("Application_Code").value=job_dt["Application Code"]
    document.getElementById("Issue_Date").value=job_dt["Issue Date"]
    document.getElementById("Job_Name").value=job_dt["Job Name"]
    document.getElementById("PICKMOID").value=job_dt["PICKMOID"]
    document.getElementById("Status").value=job_dt["Status"]
    document.getElementById("Time").value=job_dt["Time"]


   //table filling start here
    var str="";
    str+='<tr>';
    for(var i=0;i<job_dt["Pickup Details"].length;i++){
      //  srn=String(i);
         k=job_dt["Pickup Details"][i]
         sr=k['sr_number']
        //str+='<td id="'+jobs_dt["Job Name"]+String(i)+'">'+(i+1)+'</td>';
        g=job_dt["Pickup Details"][i]

        str+='<td id="'+job_dt["Job Name"]+k['sr_number']+'" class="">'+(i+1)+'</td>';

        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="opr'+k['sr_number']+'" value="">';
              for(var j=0;j<job_dt["operator"].length;j++){
                      for(k in job_dt["operator"][j]){
                                    m=job_dt["operator"][j]
                                    str+='<option>'+m[k]+'</option>';
                        }
               }
        str+='</select></td>';



        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="inc'+sr+'" value="">';
              for(var j=0;j<job_dt["incharge"].length;j++){
                      for(k in job_dt["incharge"][j]){
                                c=job_dt["incharge"][j]
                                str+='<option>'+c[k]+'</option>';
                        }
              }
        str+='</select></td>';


        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="Choose Browser form-control-sm" id="tro'+sr+'" value="">';
              for(var j=0;j<job_dt["trolly"].length;j++){
                      for(k in job_dt["trolly"][j]){
                            d=job_dt["trolly"][j]
                            str+='<option>'+d[k]+'</option>';
                        }
              }
        str+='</select></td>';

       // g=jobs_dt["Pickup Details"][i]
        //dur=parseInt(g["start_time"])-parseInt(g["end_time"])





        if(g["items_picked"]==""){
          str+='<td id="itm'+sr+'">'+0+'</td>';

        }

        if(g["items_picked"]!=""){
          str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';

        }
        //str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';
       str+='<td><input type="text" placeholder="" id="st'+sr+'" value="'+g["start_time"]+'" class="form-control form-control-sm wd-200"></td>';
       if(g["duration"]!=""){
        str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';

        }
        if(g["duration"]==""){
        str+='<td id="dr'+sr+'">'+0+'</td>';

        }


        //str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';
        if(g["status"]=="Not Started"){
        str+='<td id="sts'+sr+'" class="tx-info">'+g["status"]+'</td>';
        }

        if(g["status"]=="In-progress"){

        str+='<td id="sts'+sr+'" class="tx-primary">'+g["status"]+'</td>';


        }

        if(g["status"]=="Completed"){
        str+='<td id="sts'+sr+'" class="tx-Success">'+g["status"]+'</td>';
        }
        //str+='<td class="tx-primary" id="sts'+i+'">In-progress</td>';



        str+='<td><div class="btn-group btn-group-sm pd-y-1" role="group" aria-label="">\
                  <button type="button" class="btn btn-primary btn-sm pd-y-1" id="'+g["sr_number"]+'"   onclick="scdld_job(this)"><a href="#"><i class="fa fa-hourglass-start tx-white" aria-hidden="true"></i></a>&nbsp; Schedule </button>&nbsp;&nbsp;\
                  <button type="button" class="btn btn-secondary " id="del'+i+'"   onclick="unschd_job(this);"><a href="#"><i class="fa fa-trash tx-white tx-20" aria-hidden="true"></i></a> &nbsp; Unschedule </button>';

           str+="</tr>";


    }
//console.log(str);
document.getElementById("table_fill").innerHTML=str;

});




socket.on("update_del",function(jobss_dt){

console.log("========= Unscheduled Status ====================")


    //console.log(jobss_dt);
    ids=jobss_dt["_id"]["$oid"]
    document.getElementById("Application_Code").value=jobss_dt["Application Code"]
    document.getElementById("Issue_Date").value=jobss_dt["Issue Date"]
    document.getElementById("Job_Name").value=jobss_dt["Job Name"]
    document.getElementById("PICKMOID").value=jobss_dt["PICKMOID"]
    document.getElementById("Status").value=jobss_dt["Status"]
    document.getElementById("Time").value=jobss_dt["Time"]


   //table filling start here
    var str="";
    str+='<tr>';
    for(var i=0;i<jobss_dt["Pickup Details"].length;i++){
      //  srn=String(i);
         k=jobss_dt["Pickup Details"][i]
         sr=k['sr_number']
        //str+='<td id="'+jobs_dt["Job Name"]+String(i)+'">'+(i+1)+'</td>';
        g=jobss_dt["Pickup Details"][i]

        str+='<td id="'+jobss_dt["Job Name"]+k['sr_number']+'" class="">'+(i+1)+'</td>';

        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="opr'+k['sr_number']+'" value="">';
              for(var j=0;j<jobss_dt["operator"].length;j++){
                      for(k in jobss_dt["operator"][j]){
                                    m=jobss_dt["operator"][j]
                                    str+='<option>'+m[k]+'</option>';
                        }
               }
        str+='</select></td>';



        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="form-control-sm" id="inc'+sr+'" value="">';
              for(var j=0;j<jobss_dt["incharge"].length;j++){
                      for(k in jobss_dt["incharge"][j]){
                                c=jobss_dt["incharge"][j]
                                str+='<option>'+c[k]+'</option>';
                        }
              }
        str+='</select></td>';


        str+='<td><select class="form-control select2 wd-150 form-control-sm" data-placeholder="Choose Browser form-control-sm" id="tro'+sr+'" value="">';
              for(var j=0;j<jobss_dt["trolly"].length;j++){
                      for(k in jobss_dt["trolly"][j]){
                            d=jobss_dt["trolly"][j]
                            str+='<option>'+d[k]+'</option>';
                        }
              }
        str+='</select></td>';

       // g=jobs_dt["Pickup Details"][i]
        //dur=parseInt(g["start_time"])-parseInt(g["end_time"])





        if(g["items_picked"]==""){
          str+='<td id="itm'+sr+'">'+0+'</td>';

        }

        if(g["items_picked"]!=""){
          str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';

        }
        //str+='<td id="itm'+sr+'">'+g["items_picked"]+'</td>';
       str+='<td><input type="text" placeholder="" id="st'+sr+'" value="'+g["start_time"]+'" class="form-control form-control-sm wd-200"></td>';
       if(g["duration"]!=""){
        str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';

        }
        if(g["duration"]==""){
        str+='<td id="dr'+sr+'">'+0+'</td>';

        }


        //str+='<td id="dr'+sr+'">'+g["duration"]+'</td>';
        if(g["status"]=="Not Started"){
        str+='<td id="sts'+sr+'" class="tx-info">'+g["status"]+'</td>';
        }

        if(g["status"]=="In-progress"){

        str+='<td id="sts'+sr+'" class="tx-primary">'+g["status"]+'</td>';


        }

        if(g["status"]=="Completed"){
        str+='<td id="sts'+sr+'" class="tx-Success">'+g["status"]+'</td>';
        }
        //str+='<td class="tx-primary" id="sts'+i+'">In-progress</td>';



        str+='<td><div class="btn-group btn-group-sm pd-y-1" role="group" aria-label="">\
                  <button type="button" class="btn btn-primary btn-sm pd-y-1" id="'+g["sr_number"]+'"   onclick="scdld_job(this)"><a href="#"><i class="fa fa-hourglass-start tx-white" aria-hidden="true"></i></a>&nbsp; Schedule </button>&nbsp;&nbsp;\
                  <button type="button" class="btn btn-secondary" id="del'+i+'"   onclick="unschd_job(this);"><a href="#"><i class="fa fa-trash tx-white tx-20" aria-hidden="true"></i></a> &nbsp;Unschedule </button>';

          str+="</tr>";

       

    
     }
//console.log(str);
document.getElementById("table_fill").innerHTML=str;

});

