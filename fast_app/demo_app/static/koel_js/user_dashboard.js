  var socket=io.connect('http://'+document.domain+":"+location.port)
  var dataa;
  var data1;
  var data2;
  var data3;
  var em=[];
   
  
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data:[1,2,3,4,5,6,7,8,9,10]
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [0,0,0,0,0,0,0,0,0,0],
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
  
  
  
   
  var dom = document.getElementById("container1");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data:[1,2,3,4,5,6,7,8,9,10]
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          //data: [820, 932, 901, 934, 1290, 1330, 1320],
          data:[0,0,0,0,0,0,0,0,0,0],
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
        
  
 
  
   
  var dom = document.getElementById("container2");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data:[1,2,3,4,5,6,7,8,9,10]
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          //data: [820, 932, 901, 934, 1290, 1330, 1320],
          data:[0,0,0,0,0,0,0,0,0,0,0],
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
            
  
  
  
 
      var option_c;
      var option_d;
      var option_d;
      var option_p;
      
                 
      
             var dom = document.getElementById("Barchart1");
             var myChart_p = echarts.init(dom);
             var app = {};
             option_p = null;
             option_p = {
      
              responsive: true,
      
                 title : {
                     text: '',
                 },
                 tooltip : {
                     trigger: 'axis'
                 },
                 legend: {
                     data:['Job']
                 },
                 toolbox: {
                     show : true,
                     feature : {
                         
                         magicType : {show: true, type: ['line', 'bar']},
                         
                     }
                 },
                 calculable : true,
                 xAxis : [
                     {
                         type : 'category',
                         data : ['1','2','3','4','5','6','7','8','9','10']
                     }
                 ],
                 yAxis : [
                     {
                         type : 'value'
                     }
                 ],
                 series : [
                     {
                         name:'Job',
                         color: '#05b080',
                         type:'bar',
                         //data:[4,8,0,0,0,0,0,0,0,0,0,0],
                         data:[0,0,0,0,0,0,0,0,0,0],
                         markPoint : {
                             data : [
                                 {type : 'max', name: 'h1'},
                                 {type : 'min', name: 'h2'}
                             ]
                         },
                         markLine : {
                             data : [
                                 {type : 'average', name: 'h3'}
                             ]
                         }
                     },
                    
                 ]
             };
             
             if (option_p && typeof option_p === "object") {
                 myChart_p.setOption(option_p, true);
             }
                    
  
  
  
  
  
  
    socket.emit("get_dashboard")
  
  
  
  
  
         
    
  
  
  socket.emit("get_all_card")
  socket.emit("get_all_operator")
  socket.on("response_all_cardss",function(card_dt){
    var str="";
    for(var i=0;i<card_dt.length;i++){
        str+='<option value="'+card_dt[i]['application code']+'">'+card_dt[i]['application code']+'</option>';
    }
      
      document.getElementById("chart1_cards").innerHTML=str;
  });
  
  socket.on("operator_response",function(opr_list){
    var str="";
    
      //opr_list = remove_duplicates(oprtr_list);
    for(var i=0;i<opr_list.length;i++){
                 str+='<option value="'+opr_list[i]['operator']+'">'+opr_list[i]['operator']+'</option>';
    }
    document.getElementById("chart2_cards").innerHTML=str;
    document.getElementById("chart3_cards").innerHTML=str;
    document.getElementById("chart4_cards").innerHTML=str;
    
  });
  
  
  
  
  
  
  
  
  
  
  function chart1(){
  var apl_code=document.getElementById("chart1_cards").value;
  var last_days=document.getElementById("last_days").value;
  
  
  socket.emit("chart1_apl_code",{"Application Code":apl_code,"last_days":last_days})
  
  }
  
  
  
  
  function chart2(){
  var opr=document.getElementById("chart2_cards").value;
  var last_days=document.getElementById("lastt_days").value;
  
  socket.emit("chart2_opr",{"operator":opr,"last_days":last_days})
  
  }

  function chart3(){
var opr=document.getElementById("chart3_cards").value;
var last_days=document.getElementById("lastt_dayss").value;

socket.emit("chart3_opr",{"operator":opr,"last_days":last_days})

}

function chart4(){
var opr=document.getElementById("chart4_cards").value;
var last_days=document.getElementById("lasst_day").value;

socket.emit("chart4_opr",{"operator":opr,"last_days":last_days})

}
  
    
  
  
  
  socket.on("chart1_response",function(chart1_list){
  
    //console.log(chart1_list);
    //dataa=chart1_list;
    dataa=chart1_list[0];
    x_axis=chart1_list[1];
  //----------------------------------------chart1 code-----------------------------------------------
  
  
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
         // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
         data:x_axis
      },
      yAxis: {
          type: 'value'
      },
      series: [{
         // data: [1120, 932, 901, 934, 1290, 1330, 1520],
          data:dataa,
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
  
  
  
  
  //--------------------------------------- chart1 code end here-------------------------------------
  
  
  
  
  });
  
  
  
  
  socket.on("chart2_response",function(chart2_list){
    //console.log(chart2_list);
  if(chart2_list[0].length==0){
    data1=[0,0,0,0,0,0,0,0,0];
  
  }
  else{
    data1=chart2_list[0];
  }
  x_axis=chart2_list[1];
  var dom = document.getElementById("container1");
  var myChart= echarts.init(dom);
  var app1 = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data:x_axis
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          //data: [820, 932, 901, 934, 1290, 1330, 1320],
          data:data1,
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
  
    
  
  
  });
  
  
  socket.on("chart3_response",function(chart3_list){
//-------------------------------chart3 code------------------------------------------
//console.log(chart3_list)
data2=chart3_list[0];
x_axis=chart3_list[1];
var dom = document.getElementById("container2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    xAxis: {
        type: 'category',
        //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        data:x_axis
    },
    yAxis: {
        type: 'value'
    },
    series: [{
       // data: [820, 932, 901, 934, 1290, 1330, 1320],
       data:data2,
        type: 'line'
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}




});
  

socket.on("chart4_response",function(chart4_list){
//console.log(chart4_list);

if(chart4_list[0].length==0){
  data4=[0,0,0,0,0,0,0,0,0];

}
else{
  data4=chart4_list[0];
}
//data4=chart4_list[0]
x_axis=chart4_list[1]


  var option_c;
    var option_d;
    var option_d;
    var option_p;
    
               
    
           var dom = document.getElementById("Barchart1");
           var myChart_p = echarts.init(dom);
           var app = {};
           option_p = null;
           option_p = {
    
            responsive: true,
    
               title : {
                   text: '',
               },
               tooltip : {
                   trigger: 'axis'
               },
               legend: {
                   data:['Job']
               },
               toolbox: {
                   show : true,
                   feature : {
                       
                       magicType : {show: true, type: ['line', 'bar']},
                       
                   }
               },
               calculable : true,
               xAxis : [
                   {
                       type : 'category',
                       //data : ['1','2','3','4','5','6','7','8','9','10','11','12']
                       data:x_axis
                   }
               ],
               yAxis : [
                   {
                       type : 'value'
                   }
               ],
               series : [
                   {
                       name:'Job',
                       color: '#05b080',
                       type:'bar',
                       //data:[4,8,0,0,0,0,0,0,0,0,0,0],
                       data:data4,
                       markPoint : {
                           data : [
                               {type : 'max', name: 'h1'},
                               {type : 'min', name: 'h2'}
                           ]
                       },
                       markLine : {
                           data : [
                               {type : 'average', name: 'h3'}
                           ]
                       }
                   },
                  
               ]
           };
           
           if (option_p && typeof option_p === "object") {
               myChart_p.setOption(option_p, true);
           }









});

  
    
       function login(){



        location.href ="http://"+document.domain+":"+"80";


       }   
  
  
  