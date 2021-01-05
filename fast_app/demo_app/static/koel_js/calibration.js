var socket=io.connect('http://'+document.domain+":"+location.port)
phrase=myVar;
socket.emit("get_all_calibrations");

socket.on("calibrations_response",function(main_list){


//console.log(main_list);

var str="";
for(var i=0;i<main_list.length;i++){

str+='<tr>';
str+='<td class="text-center">'+(i+1)+'</td>';
str+='<td class="text-center">'+main_list[i]['name']+'</td>';
str+='<td class="text-center">'+main_list[i]['timestamp']+'</td>';
str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example"><a href="/calibrations_map"><button type="button" class="btn btn-warning pd-x-5 btn-sm" onclick="view(this);" id="'+main_list[i]['timestamp']+'">View</button></a></td>';
/*if(main_list[i]['set']=="False"){
str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
           <a href="/'+phrase+'/calibrations_map"><button type="button" class="btn btn-warning pd-x-5 btn-sm" onclick="view(this);" id="'+main_list[i]['date']+'">View</button></a>&nbsp;&nbsp;\
               <button type="button" class="btn btn-primary pd-x-8 btn-sm" onclick=set(this); id="'+main_list[i]['date']+"_"+main_list[i]['time']+'">Set</button>\
          </div></td>';

}
if(main_list[i]['set']=="True"){
str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
            <a href="/'+phrase+'/calibrations_map"><button type="button" class="btn btn-warning pd-x-5 btn-sm" onclick="view(this);" id="'+main_list[i]['date']+'">View</button></a>&nbsp;&nbsp;\
               <button type="button" class="btn btn-success pd-x-8 btn-sm" onclick=set(this); id="'+main_list[i]['date']+"_"+main_list[i]['time']+'">Set</button>\
          </div></td>';

}*/

str+='</tr>'

}


document.getElementById("table_fill").innerHTML=str;


});


function set(x){
  date_time = x.id.split("_");

  socket.emit("update_set",{"date":date_time[0],"time":date_time[1]});
}





socket.on("set_response",function(main_list){


//console.log(main_list);

var str="";
for(var i=0;i<main_list.length;i++){

str+='<tr>';
str+='<td class="text-center">'+(i+1)+'</td>';
str+='<td class="text-center">'+main_list[i]['date']+'</td>';
str+='<td class="text-center">'+main_list[i]['time']+'</td>';
if(main_list[i]['set']=="False"){
str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
                <a href="/'+phrase+'/calibrations_map"><button type="button" class="btn btn-warning pd-x-5 btn-sm" onclick="view(this);" id="'+main_list[i]['date']+'">View</button></a>&nbsp;&nbsp;\
               <button type="button" class="btn btn-primary pd-x-8 btn-sm" onclick=set(this); id="'+main_list[i]['date']+"_"+main_list[i]['time']+'">Set</button>\
          </div></td>';

}

if(main_list[i]['set']=="True"){
str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
           <a  href="/'+phrase+'/calibrations_map"><button type="button" class="btn btn-warning pd-x-5 btn-sm" onclick="view(this);" id="'+main_list[i]['date']+'">View</button></a>&nbsp;&nbsp;\
               <button type="button" class="btn btn-success pd-x-8 btn-sm" onclick=set(this); id="'+main_list[i]['date']+"_"+main_list[i]['time']+'">Set</button>\
          </div></td>';

}
str+='</tr>'

}


document.getElementById("table_fill").innerHTML=str;


});



function view(x){

socket.emit("view_calibrate",{"timestamp":x.id});




}
