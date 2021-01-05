var socket=io.connect('http://'+document.domain+":"+location.port)
socket.emit("get_all_jobs")


socket.on("response_all_jobs",function(jobs){
  //const geocodeArr = JSON.parse('{{ phrase_id }}');
  vb=myVar;
  //console.log(vb);
//console.log(jobs.length);
//console.log(jobs[0]);
//console.log(jobs[0]['Application Code']);
//console.log(jobs.length);
var str="";
//Application Code,Issue Date,Job Name,PICKMOID,Qty,Status,Time
str+="<tr>";

//alert(phrase_id);

for(var i=0;i<jobs.length;i++){
  //console.log(jobs[i]["_id"]);
  
        str+='<td>'+jobs[i]['Application Code']+'</td>';
        str+='<td>'+jobs[i]['Issue Date']+'</td>';

        if(jobs[i]["Job Name"].slice(0,3)=="YEL"){
          str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#F6E405"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
         }

        else if(jobs[i]["Job Name"].slice(0,3)=="GRE"){
          str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#27F016"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
        }

       else if(jobs[i]["Job Name"].slice(0,3)=="BLA"){
           str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#070807"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
        }
       else if(jobs[i]["Job Name"].slice(0,3)=="CAP"){
           str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#a5a5a1"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
        }
       else if(jobs[i]["Job Name"].slice(0,3)=="RED"){
           str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#FF0000"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
        }
       else{
          str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark"></i>&nbsp;&nbsp;</td><td>'+jobs[i]['Job Name']+'</td>';
        }
       
         str+='<td>'+jobs[i]['Qty']+'</td>';
         str+='<td>'+jobs[i]['PICKMOID']+'</td>';
   
     if(jobs[i]["Time"]==""){
        str+='<td><div class="progress ">\
           <div class="progress-bar" role="progressbar" aria-valuenow="30"\
           aria-valuemin="0" aria-valuemax="100" style="width:0%"> 0 mins</div></div></td>';}
    if(jobs[i]["Time"]!=""){
      str+='<td><div class="progress ">\
           <div class="progress-bar" role="progressbar" aria-valuenow="30"\
           aria-valuemin="0" aria-valuemax="100" style="width:'+jobs[i]["Time"]+'%">'+jobs[i]["Time"]+' %</div></div></td>';
      }

      
    
    if(jobs[i]["Status"]=="In-progress"){
      str+='<td class="tx-primary">'+jobs[i]["Status"]+'</td>';
     }
     if(jobs[i]["Status"]=="Not Started"){
      str+='<td class="tx-info">'+jobs[i]["Status"]+'</td>';
     }

     if(jobs[i]["Status"]=="Completed"){
      str+='<td class="tx-success">'+jobs[i]["Status"]+'</td>';
     }

     if(jobs[i]["Status"]=="Delayed"){
      str+='<td class="tx-danger">'+jobs[i]["Status"]+'</td>';
     }
    
    
    
    
  
  str+='<td><a  href="/job_details" class="bg-warning tx-white p-1 m-1" id="'+jobs[i]["_id"]["$oid"]+'" onclick="get_job_name(this);">View</a></td>';
  str+='</tr>';
  }

document.getElementById("table_fill").innerHTML=str;

 var table = $('#datatable2').DataTable( {
        "scrollX": true,
        lengthChange: false,
        "dom": 'lrtip',
       "order": [[ 4, "desc" ]],


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




});


function get_job_name(x){

socket.emit("request_job_details",{"_id":x.id})

}

function search(){
var key=document.getElementById("dtt").value;
var val=document.getElementById("search_value").value;
search_dict={};
if(key=="ISSUE Date"){
search_dict["Issue Date"]=val;
}

if(key=="Apl code"){
search_dict["Application Code"]=val;
}

if(key=="JOB NAME"){
search_dict["Job Name"]=val;
}

if(key=="PICKMOID"){
search_dict["PICKMOID"]=val;
}


//console.log(search_dict);
socket.emit("search_req",search_dict)

}


socket.on("response_search_details",function(jobs){

  //console.log(data);
  
var str="";
str+="<tr>";
for(var i=0;i<jobs.length;i++){
  //console.log(jobs[i]["_id"]);
  
    
        str+='<td>'+jobs[i]['Issue Date']+'</td>';
        str+='<td>'+jobs[i]['Application Code']+'</td>';
        if(jobs[i]["Job Name"].slice(0,3)=="YEL"){
          str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#F6E405"></i>&nbsp;&nbsp;'+jobs[i]['Job Name']+'</td>';
         }

        if(jobs[i]["Job Name"].slice(0,3)=="GRE"){
          str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#27F016"></i>&nbsp;&nbsp;'+jobs[i]['Job Name']+'</td>';
        }

       if(jobs[i]["Job Name"].slice(0,3)=="BLA"){
           str+='<td><i class="menu-item-icon fa fa-circle tx-20 bd-dark" style="color:#070807"></i>&nbsp;&nbsp;'+jobs[i]['Job Name']+'</td>';
        }
       if(jobs[i]["Job Name"].slice(0,3)!="YEL"){
         str+='<td><i class="menu-item-icon fa fa-circle tx-20 tx-gray-500 bd-dark"></i>&nbsp;&nbsp;'+jobs[i]['Job Name']+'</td>';
       }
         str+='<td>'+jobs[i]['Qty']+'</td>';
         str+='<td>'+jobs[i]['PICKMOID']+'</td>';
   
     if(jobs[i]["Time"]==""){
        str+='<td><div class="progress ">\
           <div class="progress-bar" role="progressbar" aria-valuenow="30"\
           aria-valuemin="0" aria-valuemax="100" style="width:0%"> 0 mins</div></div></td>';}
    if(jobs[i]["Time"]!=""){
      str+='<td><div class="progress ">\
           <div class="progress-bar" role="progressbar" aria-valuenow="30"\
           aria-valuemin="0" aria-valuemax="100" style="width:'+jobs[i]["Time"]+'%">'+jobs[i]["Time"]+' %</div></div></td>';
      }
    
    if(jobs[i]["Status"]=="In-progress"){
      str+='<td class="tx-primary">'+jobs[i]["Status"]+'</td>';
      //str+='<td></td>'
     }
     if(jobs[i]["Status"]=="Not Started"){
      str+='<td class="tx-info">'+jobs[i]["Status"]+'</td>';
     }

     if(jobs[i]["Status"]=="Completed"){
      str+='<td class="tx-success">'+jobs[i]["Status"]+'</td>';
     }

     if(jobs[i]["Status"]=="Delayed"){
      str+='<td class="tx-danger">'+jobs[i]["Status"]+'</td>';
     }
    
    
    
    
  
  str+='<td><a href="/job_details" class="bg-warning tx-white p-1 m-1" id="'+jobs[i]["_id"]["$oid"]+'" onclick="get_job_name(this);">View</a></td>'
  //str += "<td></td>"
  str+='</tr>';
  }


document.getElementById("table_fill").innerHTML=str;

});
