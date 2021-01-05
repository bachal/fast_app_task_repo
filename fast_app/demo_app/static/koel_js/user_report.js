var socket=io.connect('http://'+document.domain+":"+location.port)
var list;
socket.emit("report_data")
socket.on("get_report_data",function(report_data_list){


   //console.log(report_data_list);
    list=report_data_list;
    for(var j=0;j<list.length;j++){
   
       y=list[0]['partlist']
       //console.log("hiiiii");
       //console.log(y);




    }


    var k = '<tbody>'
	for (i = 0; i < y.length; i++) {
		k += '<tr>';
		k += '<td style="text-align:center; border-bottom: 1px solid #000000; border-left: 1px solid #000000;  height="25" align="center" valign=bottom sdval="1" sdnum="1033;"><font size=3 color="#000000">' + y[i]["Serial No"] + '</td>';
		k += '<td style="text-align:center; border-bottom: 1px solid #000000; border-left: 1px solid #000000;  align="center" valign=bottom><font size=3 color="#000000">' + y[i]["Part Number"] + '</td>';
		k += '<td style="text-align:center; height:40px; border-bottom: 1px solid #000000; border-left: 1px solid #000000;  align="center" valign=bottom><font size=3 color="#000000">' + y[i]["Part Description"] + '</td>';
		k += '<td style="text-align:center; border-bottom: 1px solid #000000; border-left: 1px solid #000000;  align="center" valign=bottom sdval="1" sdnum="1033;"><font size=3 color="#000000">' + y[i]["Qty"] + '</td>';
		k += '<td style="text-align:center; border-bottom: 1px solid #000000; border-left: 1px solid #000000; align="center" valign=bottom><font size=3 color="#000000">' + y[i]["Pickup Location"] + '</td>';
		k += '<td style="text-align:center; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font size=3 color="#000000">' + y[i]["Status"] + '</td>';
		k += '</tr>';
	}
	k += '</tbody>';
	document.getElementById('tableData').innerHTML = k;

});





