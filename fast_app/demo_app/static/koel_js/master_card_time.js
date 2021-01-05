
var ids;
var idss;
var m_card;
var part_list;
var socket=io.connect('http://'+document.domain+":"+location.port)
socket.emit("get_all_cards")
socket.on("response_all_cards_for_time",function(all_cards){
    //console.log(all_cards);
    var str="";
    //str+='<select class="form-control-sm select2 wd-200" data-placeholder="Choose Browser form-control-sm" id="cards" value="">';

    
    for(var i=0;i<all_cards.length;i++){
    str+="<tr>";
    
    str+='<td class="text-center">'+(i+1)+'</td><td class="text-center">'+all_cards[i]['master_card']+'</td>';
    if(all_cards[i]['duration']==""){
    str+='<td contentEditable="false" id="'+all_cards[i]['master_card']+'dur" class="text-center">'+0+'</td>';
    }
    if(all_cards[i]['duration']!=""){
    str+='<td id="'+all_cards[i]['master_card']+'dur" contentEditable="false" class="text-center">'+all_cards[i]['duration']+'</td>';
   
    }

    str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card_time(this);" id="'+all_cards[i]['master_card']+'">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card(this); id="'+all_cards[i]['master_card']+'">Save</button>\
          </div></td>';
    str+='</tr>';
    }
    //str+='</select>';
    document.getElementById("table_fill").innerHTML=str;
});



function search(){
  search_type= document.getElementById("dtt").value;
  searchd_value=document.getElementById("search_value").value;
  
  searchd_val=searchd_value.split(/\s/).join('');

  search_dict={}
  search_dict['master_card']=searchd_val;
  //console.log(search_dict);
  socket.emit("serach_req",search_dict);
 
  


  
    
  
}

function edit_card_time(x){
  //alert(x.id);
  // se pn pd q pl sts put
 //document.getElementById(x.id+"se").contentEditable="true";
 document.getElementById(x.id+"dur").contentEditable="true";
 document.getElementById(x.id+"dur").className="bg-gray-300";

}
function save_card(x){
   duration= document.getElementById(x.id+"dur").innerText;
   document.getElementById(x.id+"dur").className="white";
   update_card={}
   update_card['master_card']=x.id;
   update_card['duration']=duration;
   socket.emit("update_card_time", update_card);

   //alert(duration);

    
}



socket.on("after_update_time",function(all_cards){
    //console.log(all_cards);
    var str="";
    //str+='<select class="form-control-sm select2 wd-200" data-placeholder="Choose Browser form-control-sm" id="cards" value="">';

    
    for(var i=0;i<all_cards.length;i++){
    str+="<tr>";
    
    str+='<td class="text-center">'+(i+1)+'</td><td class="text-center">'+all_cards[i]['master_card']+'</td>';
    if(all_cards[i]['duration']==""){
    str+='<td contentEditable="false" id="'+all_cards[i]['master_card']+'dur" class="text-center">'+0+'</td>';
    }
    if(all_cards[i]['duration']!=""){
    str+='<td id="'+all_cards[i]['master_card']+'dur" contentEditable="false" class="text-center">'+all_cards[i]['duration']+'</td>';
   
    }

    str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card_time(this);" id="'+all_cards[i]['master_card']+'">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card(this); id="'+all_cards[i]['master_card']+'">Save</button>\
          </div></td>';
    str+='</tr>';
    }
    //str+='</select>';
    document.getElementById("table_fill").innerHTML=str;
});


socket.on("after_serach",function(all_cards){
   // console.log(all_cards);
    var str="";
    //str+='<select class="form-control-sm select2 wd-200" data-placeholder="Choose Browser form-control-sm" id="cards" value="">';

    
    for(var i=0;i<all_cards.length;i++){
    str+="<tr>";
    
    str+='<td class="text-center">'+(i+1)+'</td><td class="text-center">'+all_cards[i]['master_card']+'</td>';
    if(all_cards[i]['duration']==""){
    str+='<td contentEditable="false" id="'+all_cards[i]['master_card']+'dur" class="text-center">'+0+'</td>';
    }
    if(all_cards[i]['duration']!=""){
    str+='<td id="'+all_cards[i]['master_card']+'dur" contentEditable="false" class="text-center">'+all_cards[i]['duration']+'</td>';
   
    }

    str+='<td class="text-center"><div class="btn-group" role="group" aria-label="Basic example">\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick="edit_card_time(this);" id="'+all_cards[i]['master_card']+'">Edit</button>&nbsp;\
               <button type="button" class="btn btn-secondary pd-x-5 btn-sm" onclick=save_card(this); id="'+all_cards[i]['master_card']+'">Save</button>&nbsp;\
              <a href="/'+myVar+'/master_card_time"> <button type="button" class="btn btn-danger pd-x-5 btn-sm">Back</button>\
             </div></td>';
    str+='</tr>';
    }
    //str+='</select>';
    document.getElementById("table_fill").innerHTML=str;
});

  
