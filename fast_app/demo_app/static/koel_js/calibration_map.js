$("#map").children().prop('disabled', true);

    $('#zoom-in').click(function() {
  updateZoom(0.1);
  });
  
  $('#zoom-out').click(function() {
  if(zoomLevel>0.60){
  updateZoom(-0.1);
  }
  });
  
  
  zoomLevel = 0.60;
  
  var updateZoom = function(zoom) {
  zoomLevel += zoom;
  $('#map').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });}
  
  //------------------------------------------start map code here-------------------------------------------
var myFeatureGroup;
var socket = io.connect('http://' + document.domain + ':' + location.port);
var map_dt;
var given_part_data;
var part_sv_id;
var pickup_location;
var part_descri;
var part_number;
var qty;
var status;
var sr_number;
var job;
var apl_code;
var part_sr;
var marker_count=0;
var map;
var name;
required_data_from_db();


   
// get function for render image on map
function render_map(given_object){
    
   // console.log(map_dt);
    given_data_second_part_3rd=given_object["second_part_3rd"];
    given_data_second_part_1st=given_object["second_part_1st"];
    given_data_second_part_2nd=given_object["second_part_2nd"];
    given_data_third_part_1st=given_object["third_part_1st"];
    given_data_third_part_2nd=given_object["third_part_2nd"];
    given_data_fifth_part_1st=given_object["fifth_part_1st"];
    given_data_fifth_part_2nd=given_object["fifth_part_2nd"];
    given_data_fifth_part_3rd=given_object["fifth_part_3rd"];
    given_data_fifth_part_4th=given_object["fifth_part_4th"];
    given_data_fifth_part_5th=given_object["fifth_part_5th"];
    given_data_fifth_part_6th=given_object["fifth_part_6th"];
    given_data_fifth_part_7th=given_object["fifth_part_7th"];
    given_data_fifth_part_8th=given_object["fifth_part_8th"];
    given_data_fifth_part_9th=given_object["fifth_part_9th"];
    given_data_fifth_part_10th=given_object["fifth_part_10th"];
    given_data_fifth_part_11th=given_object["fifth_part_11th"];
    given_data_fifth_part_12th=given_object["fifth_part_12th"];
    given_data_fifth_part_13th=given_object["fifth_part_13th"];
    given_data_fifth_part_14th=given_object["fifth_part_14th"];
    given_data_fifth_part_15th=given_object["fifth_part_15th"];
    given_data_sixth_part_1st=given_object["sixth_part_1st"];
    given_data_sixth_part_2nd=given_object["sixth_part_2nd"];
    given_data_sixth_part_3rd=given_object["sixth_part_3rd"];
    given_data_sixth_part_4th_1=given_object["sixth_part_4th_1"];
    given_data_sixth_part_4th_2=given_object["sixth_part_4th_2"];
    given_data_sixth_part_4th_3=given_object["sixth_part_4th_3"];
    given_data_sixth_part_4th_4=given_object["sixth_part_4th_4"];
    given_data_sixth_part_5th_1=given_object["sixth_part_5th_1"];
    given_data_sixth_part_5th_2=given_object["sixth_part_5th_2"];
    given_data_sixth_part_5th_3=given_object["sixth_part_5th_3"];
    given_data_sixth_part_5th_4=given_object["sixth_part_5th_4"];
    given_data_sixth_part_6th_1=given_object["sixth_part_6th_1"];
    given_data_sixth_part_6th_2=given_object["sixth_part_6th_2"];
    given_data_sixth_part_6th_3=given_object["sixth_part_6th_3"];
    given_data_sixth_part_6th_4=given_object["sixth_part_6th_4"];
    given_data_sixth_part_7th_1=given_object["sixth_part_7th_1"];
    given_data_sixth_part_7th_2=given_object["sixth_part_7th_2"];
    given_data_sixth_part_7th_3=given_object["sixth_part_7th_3"];
    given_data_sixth_part_7th_4=given_object["sixth_part_7th_4"];
    given_data_third_part_1st_1=given_object["3rd_part_1st_1"];
    given_data_third_part_1st_2=given_object["3rd_part_1st_2"];
    given_data_third_part_1st_3=given_object["3rd_part_1st_3"];
    given_data_third_part_1st_4=given_object["3rd_part_1st_4"];
    given_data_third_part_2nd_1=given_object["3rd_part_2nd_1"];
    given_data_third_part_2nd_2=given_object["3rd_part_2nd_2"];
    given_data_third_part_2nd_3=given_object["3rd_part_2nd_3"];
    given_data_third_part_2nd_4=given_object["3rd_part_2nd_4"];
    given_data_third_part_3rd_1=given_object["3rd_part_3rd_1"];
    given_data_third_part_3rd_2=given_object["3rd_part_3rd_2"];
    given_data_third_part_3rd_3=given_object["3rd_part_3rd_3"];
    given_data_third_part_3rd_4=given_object["3rd_part_3rd_4"];
    given_data_third_part_4th_1=given_object["3rd_part_4th_1"];
    given_data_third_part_4th_2=given_object["3rd_part_4th_2"];
    given_data_third_part_4th_3=given_object["3rd_part_4th_3"];
    given_data_third_part_4th_4=given_object["3rd_part_4th_4"];
    given_data_first_part_1st_1=given_object["1st_part_1st_1"];
    given_data_first_part_1st_2=given_object["1st_part_1st_2"];
    given_data_first_part_2nd_1=given_object["1st_part_2nd_1"];
    given_data_first_part_2nd_2=given_object["1st_part_2nd_2"];
    given_data_first_part_3rd_1=given_object["1st_part_3rd_1"];
    given_data_first_part_3rd_2=given_object["1st_part_3rd_2"];
    given_data_first_part_4th_1=given_object["1st_part_4th_1"];
    given_data_first_part_4th_2=given_object["1st_part_4th_2"];
    given_data_first_part_5th_1=given_object["1st_part_5th_1"];
    given_data_first_part_5th_2=given_object["1st_part_5th_2"];
    given_data_first_part_6th_1=given_object["1st_part_6th_1"];
    given_data_first_part_6th_2=given_object["1st_part_6th_2"];
    given_data_first_part_7th_1=given_object["1st_part_7th_1"];
    given_data_first_part_7th_2=given_object["1st_part_7th_2"];
    given_data_first_part_8th_1=given_object["1st_part_8th_1"];
    given_data_first_part_8th_2=given_object["1st_part_8th_2"];
    given_data_first_part_9th_1=given_object["1st_part_9th_1"];
    given_data_first_part_9th_2=given_object["1st_part_9th_2"];
    given_data_first_part_10th_1=given_object["1st_part_10th_1"];
    given_data_first_part_10th_2=given_object["1st_part_10th_2"];
    given_data_first_part_11th_1=given_object["1st_part_11th_1"];
    given_data_first_part_11th_2=given_object["1st_part_11th_2"];
    given_data_first_part_12th_1=given_object["1st_part_12th_1"];
    given_data_first_part_12th_2=given_object["1st_part_12th_2"];
    given_data_first_part_13th_1=given_object["1st_part_13th_1"];
    given_data_first_part_13th_2=given_object["1st_part_13th_2"];
    given_data_first_part_14th_1=given_object["1st_part_14th_1"];
    given_data_first_part_14th_2=given_object["1st_part_14th_2"];
    given_data_first_part_15th_1=given_object["1st_part_15th_1"];
    given_data_first_part_15th_2=given_object["1st_part_15th_2"];
    given_data_first_part_16th_1=given_object["1st_part_16th_1"];
    given_data_first_part_16th_2=given_object["1st_part_16th_2"];
    given_data_first_part_17th_1=given_object["1st_part_17th_1"];
    given_data_first_part_17th_2=given_object["1st_part_17th_2"];
    given_data_first_part_18th_1=given_object["1st_part_18th_1"];
    given_data_first_part_18th_2=given_object["1st_part_18th_2"];
    given_data_first_part_19th_1=given_object["1st_part_19th_1"];
    given_data_first_part_19th_2=given_object["1st_part_19th_2"];
    given_data_first_part_20th_1=given_object["1st_part_20th_1"];
    given_data_first_part_20th_2=given_object["1st_part_20th_2"];
    given_data_first_part_21th_1=given_object["1st_part_21th_1"];
    given_data_first_part_21th_2=given_object["1st_part_21th_2"];
    given_data_first_part_22th_1=given_object["1st_part_22th_1"];
    given_data_first_part_22th_2=given_object["1st_part_22th_2"];
    given_data_first_part_23th_1=given_object["1st_part_23th_1"];
    given_data_first_part_23th_2=given_object["1st_part_23th_2"];
    given_data_first_part_24th_1=given_object["1st_part_24th_1"];
    given_data_first_part_24th_2=given_object["1st_part_24th_2"];
    given_data_first_part_25th_1=given_object["1st_part_25th_1"];
    given_data_first_part_25th_2=given_object["1st_part_25th_2"];
    given_data_first_part_26th_1=given_object["1st_part_26th_1"];
    given_data_first_part_26th_2=given_object["1st_part_26th_2"];
    given_data_first_part_27th_1=given_object["1st_part_27th_1"];
    given_data_first_part_27th_2=given_object["1st_part_27th_2"];
    given_data_first_part_28th_1=given_object["1st_part_28th_1"];
    given_data_first_part_28th_2=given_object["1st_part_28th_2"];
    given_data_first_part_29th_1=given_object["1st_part_29th_1"];
    given_data_first_part_29th_2=given_object["1st_part_29th_2"];
    given_data_first_part_30th_1=given_object["1st_part_30th_1"];
    given_data_first_part_30th_2=given_object["1st_part_30th_2"];
    given_data_first_part_31th_1=given_object["1st_part_31th_1"];
    given_data_first_part_31th_2=given_object["1st_part_31th_2"];
    given_data_first_part_32th_1=given_object["1st_part_32th_1"];
    given_data_first_part_32th_2=given_object["1st_part_32th_2"];
    given_data_first_part_33th_1=given_object["1st_part_33th_1"];
    given_data_first_part_33th_2=given_object["1st_part_33th_2"];
    given_data_seventh_part_1st_1=given_object["7th_part_1st_1"];
    given_data_seventh_part_1st_2=given_object["7th_part_1st_2"];
    given_data_seventh_part_2nd_1=given_object["7th_part_2nd_1"];
    given_data_seventh_part_2nd_2=given_object["7th_part_2nd_2"];
    given_data_seventh_part_3rd_1=given_object["7th_part_3rd_1"];
    given_data_seventh_part_3rd_2=given_object["7th_part_3rd_2"];
    given_data_seventh_part_4th_1=given_object["7th_part_4th_1"];
    given_data_seventh_part_4th_2=given_object["7th_part_4th_2"];
    given_data_seventh_part_5th_1=given_object["7th_part_5th_1"];
    given_data_seventh_part_5th_2=given_object["7th_part_5th_2"];
    given_data_seventh_part_6th_1=given_object["7th_part_6th_1"];
    given_data_seventh_part_6th_2=given_object["7th_part_6th_2"];
    given_data_seventh_part_7th_1=given_object["7th_part_7th_1"];
    given_data_seventh_part_7th_2=given_object["7th_part_7th_2"];
    given_data_seventh_part_8th_1=given_object["7th_part_8th_1"];
    given_data_seventh_part_8th_2=given_object["7th_part_8th_2"];
    given_data_seventh_part_9th_1=given_object["7th_part_9th_1"];
    given_data_seventh_part_9th_2=given_object["7th_part_9th_2"];
    given_data_seventh_part_10th_1=given_object["7th_part_10th_1"];
    given_data_seventh_part_10th_2=given_object["7th_part_10th_2"];
    given_data_seventh_part_11th_1=given_object["7th_part_11th_1"];
    given_data_seventh_part_11th_2=given_object["7th_part_11th_2"];
    given_data_seventh_part_12th_1=given_object["7th_part_12th_1"];
    given_data_seventh_part_12th_2=given_object["7th_part_12th_2"];
    given_data_seventh_part_13th_1=given_object["7th_part_13th_1"];
    given_data_seventh_part_13th_2=given_object["7th_part_13th_2"];
    given_data_seventh_part_14th_1=given_object["7th_part_14th_1"];
    given_data_seventh_part_14th_2=given_object["7th_part_14th_2"];
    given_data_seventh_part_15th_1=given_object["7th_part_15th_1"];
    given_data_seventh_part_15th_2=given_object["7th_part_15th_2"];
    given_data_seventh_part_16th_1=given_object["7th_part_16th_1"];
    given_data_seventh_part_16th_2=given_object["7th_part_16th_2"];
    given_data_seventh_part_17th_1=given_object["7th_part_17th_1"];
    given_data_seventh_part_17th_2=given_object["7th_part_17th_2"];
    given_data_seventh_part_18th_1=given_object["7th_part_18th_1"];
    given_data_seventh_part_18th_2=given_object["7th_part_18th_2"];
    given_data_seventh_part_19th_1=given_object["7th_part_19th_1"];
    given_data_seventh_part_19th_2=given_object["7th_part_19th_2"];
    given_data_seventh_part_20th_1=given_object["7th_part_20th_1"];
    given_data_seventh_part_20th_2=given_object["7th_part_20th_2"];
    given_data_seventh_part_21th_1=given_object["7th_part_21th_1"];
    given_data_seventh_part_21th_2=given_object["7th_part_21th_2"];
    given_data_seventh_part_22th_1=given_object["7th_part_22th_1"];
    given_data_seventh_part_22th_2=given_object["7th_part_22th_2"];
    given_data_seventh_part_23th_1=given_object["7th_part_23th_1"];
    given_data_seventh_part_23th_2=given_object["7th_part_23th_2"];
    given_data_seventh_part_24th_1=given_object["7th_part_24th_1"];
    given_data_seventh_part_24th_2=given_object["7th_part_24th_2"];
    given_data_seventh_part_25th_1=given_object["7th_part_25th_1"];
    given_data_seventh_part_25th_2=given_object["7th_part_25th_2"];
    given_data_seventh_part_26th_1=given_object["7th_part_26th_1"];
    given_data_seventh_part_26th_2=given_object["7th_part_26th_2"];
    given_data_seventh_part_27th_1=given_object["7th_part_27th_1"];
    given_data_seventh_part_27th_2=given_object["7th_part_27th_2"];
    given_data_seventh_part_28th_1=given_object["7th_part_28th_1"];
    given_data_seventh_part_28th_2=given_object["7th_part_28th_2"];
    given_data_seventh_part_29th_1=given_object["7th_part_29th_1"];
    given_data_seventh_part_29th_2=given_object["7th_part_29th_2"];
    // required part 6th block
    given_loc_data_sixth_part=given_object["required_part_location_6th_block"];
    given_loc_data_fourth_part=given_object["required_part_location_4th_block"];
    given_loc_data_first_part=given_object["required_part_location_1th_block"];
    given_loc_data_seventh_part=given_object["required_part_location_7th_block"];










    //given_data_sixth_part_6th_1

    //given_data_sixth_part_5th_1




    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -0.60,
        maxZoom: -0.60,
        zoomControl: false
       

        //salert(minZoom);
    });

    //var heat = L.heatLayer([50.5, 30.5, 0.2,50.5, 30.5, 0.2,50.5, 30.5, 0.2], { radius: 35 });
    //map.addLayer(heat);
   
    L.tileLayer('', { attribution: '' }).addTo(map);
    myFeatureGroup = L.featureGroup().addTo(map).on("click", groupClick);
    var bounds = [[-200, 0], [3300, 2500]];
    //var image = L.imageOverlay("{{ url_for('static', filename='white_background.jpeg')}}", bounds).addTo(map);
     var image = L.imageOverlay("{{ url_for('static', filename='logo.jpg')}}", bounds).addTo(map);

    //var image = L.VideoOverlay("{{ url_for('static', filename='r1.svg')}}", bounds).addTo(map);
    //console.log(myFeatureGroup);
    
    map.fitBounds(bounds);
    var yx = L.latLng;
    var xy = function (x, y) {
        if (L.Util.isArray(x)) {
            return yx(x[1], x[0]);
        }
        return yx(y, x);  // When doing xy(x, y);
    };

    var markers_2nd_part_3rd=given_data_second_part_3rd;
    
    // filling all markers using for loop
    for (var i = 0; i < markers_2nd_part_3rd.length; i++) {
      

        var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [50, 30],
              }
         });
         var svg=' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
         const blob = new Blob([svg], {type: 'image/svg+xml'});
         const urlu = URL.createObjectURL(blob);
         var greenIcon = new LeafIcon({ iconUrl: urlu});
        // test = "Id " + i;
        test = markers_2nd_part_3rd[i]["SV ID"];
        //marker_arr = markers[i]
        //var new_marker = xy(marker_arr[0], marker_arr[1]);
        x_val=markers_2nd_part_3rd[i]["marker_position"];
       // console.log("x_val");
        //console.log(x_val);
        var new_marker = xy(x_val[0], x_val[1]);
        var given_marker = L.marker(new_marker, { icon: greenIcon })
        given_marker.addTo(myFeatureGroup)
        given_marker.test = test;
       }

    //---------------------------------------------- fill 1st part of 2nd block-----------------------------
    var markers_2nd_part_1st=given_data_second_part_1st;
    for (var i = 0; i < markers_2nd_part_1st.length; i++) {
        var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [50, 30],
           
        }
    });
        var svg=' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

       // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 36" width="50" height="36" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const svg_url = URL.createObjectURL(blob);
        //var greenIcon = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
        var greenIcon = new LeafIcon({ iconUrl: svg_url});

        test = markers_2nd_part_1st[i]["SV ID"];
        x_val=markers_2nd_part_1st[i]["marker_position"];
        var new_marker = xy(x_val[0], x_val[1]);
        var given_marker = L.marker(new_marker, { icon: greenIcon })
        given_marker.addTo(myFeatureGroup)
        given_marker.test = test;
       }
       
       

       //---------------------------------------------- fill 2nd part of 2nd block---------------------------
    
//required_part_location_2_of_2=["M/MT/FL058A2","M/MT/FL059A2","M/MT/FL060A2","M/MT/FL060A3","M/MT/FL061A2","M/MT/FL062A2","M/MT/FL063A2","M/MT/FL063A3","M/MT/FL064A2","M/MT/FL065A2","M/MT/FL066A2","M/MT/FL066A3","M/MT/FL067A2","M/MT/FL068A2","M/MT/FL069A2","M/MT/FL069A3","M/MT/FL070A2","M/MT/FL071A2","M/MT/FL072A2","M/MT/FL072A3","M/MT/FL073A2","M/MT/FL074A2"]

    var markers_2nd_part_2nd=given_data_second_part_2nd;
    for (var k = 0; k < markers_2nd_part_2nd.length; k++) {
        var greenIcon;
        if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL060A2"){
            var LeafIcon = L.Icon.extend({
                 options: {
                    iconSize: [50, 15],
           
                    }
        });
            x_val=markers_2nd_part_2nd[k]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_2nd_part_2nd[k]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]-10);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }

        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL060A3"){
            var LeafIcon = L.Icon.extend({
                 options: {
                    iconSize: [50, 15],
           
                    }
            });
            x_val=markers_2nd_part_2nd[k]["marker_position"];
            var new_marker = xy(x_val[0], x_val[1]-42);
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_2nd_part_2nd[k]["SV ID"];
            //var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }

        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL063A2"){
            var LeafIcon = L.Icon.extend({
                 options: {
                    iconSize: [50, 15],
           
                    }
            });
            x_val=markers_2nd_part_2nd[k]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_2nd_part_2nd[k]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]-57);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL063A3"){
            var LeafIcon = L.Icon.extend({
                    options: {
                        iconSize: [50, 15],

                        }
            });
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                test = markers_2nd_part_2nd[k]["SV ID"];
                var new_marker = xy(x_val[0], x_val[1]-90);
                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
        }
        
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL058A2" ||markers_2nd_part_2nd[k]['Location']=="M/MT/FL059A2" ){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;

        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL064A2" ||markers_2nd_part_2nd[k]['Location']=="M/MT/FL065A2"  ){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-97);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL070A2" ||markers_2nd_part_2nd[k]['Location']=="M/MT/FL071A2"  ){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-202);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL073A2" ){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-250);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;

        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL067A2" ||markers_2nd_part_2nd[k]['Location']=="M/MT/FL068A2"){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-151);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;

        }

        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL075A2" || markers_2nd_part_2nd[k]['Location']=="M/MT/FL076A2" || markers_2nd_part_2nd[k]['Location']=="M/MT/FL077A2"){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-296);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;

        }
        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL079A2" || markers_2nd_part_2nd[k]['Location']=="M/MT/FL080A2"){
                var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                test = markers_2nd_part_2nd[k]["SV ID"];
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-345);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;

        }


        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL066A2"){

                    var LeafIcon = L.Icon.extend({
                        options: {
                            iconSize: [50, 15],

                            }
                    });
                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                    const svg_url = URL.createObjectURL(blob);
                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                    test = markers_2nd_part_2nd[k]["SV ID"];
                    var new_marker = xy(x_val[0], x_val[1]-108);
                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                    given_marker.addTo(myFeatureGroup)
                    given_marker.test = test;


            }

            else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL066A3"){

                    var LeafIcon = L.Icon.extend({
                        options: {
                            iconSize: [50, 15],

                            }
                    });
                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                    const svg_url = URL.createObjectURL(blob);
                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                    test = markers_2nd_part_2nd[k]["SV ID"];
                    var new_marker = xy(x_val[0], x_val[1]-138);
                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                    given_marker.addTo(myFeatureGroup)
                    given_marker.test = test;


                    }

            else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL069A2"){

                var LeafIcon = L.Icon.extend({
                    options: {
                        iconSize: [50, 15],

                        }
                    });
                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                    const svg_url = URL.createObjectURL(blob);
                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                    test = markers_2nd_part_2nd[k]["SV ID"];
                    var new_marker = xy(x_val[0], x_val[1]-160);
                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                    given_marker.addTo(myFeatureGroup)
                    given_marker.test = test;


             }

            else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL069A3"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-193);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                }


                                else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL072A2"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-212);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                    }

                                    else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL072A3"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-242);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                    }
                 else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL074A2"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-255);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                    }

                                    else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL074A3"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-286);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                    }

                        else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL078A2"){

                            var LeafIcon = L.Icon.extend({
                                options: {
                                    iconSize: [50, 15],

                                    }
                            });
                            x_val=markers_2nd_part_2nd[k]["marker_position"];
                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                            const svg_url = URL.createObjectURL(blob);
                            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                            test = markers_2nd_part_2nd[k]["SV ID"];
                            var new_marker = xy(x_val[0], x_val[1]-306);
                            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                            given_marker.addTo(myFeatureGroup)
                            given_marker.test = test;


                            }

                                else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL078A3"){

                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                            iconSize: [50, 15],

                                            }
                                    });
                                    x_val=markers_2nd_part_2nd[k]["marker_position"];
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                    test = markers_2nd_part_2nd[k]["SV ID"];
                                    var new_marker = xy(x_val[0], x_val[1]-335);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                                }

                                else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL081A2"){

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [50, 15],

                                        }
                                });
                                x_val=markers_2nd_part_2nd[k]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_2nd_part_2nd[k]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]-356);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                                    else if(markers_2nd_part_2nd[k]['Location']=="M/MT/FL081A3"){

                                        var LeafIcon = L.Icon.extend({
                                            options: {
                                                iconSize: [50, 15],

                                                }
                                        });
                                        x_val=markers_2nd_part_2nd[k]["marker_position"];
                                        var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                        const blob = new Blob([svg], {type: 'image/svg+xml'});
                                        const svg_url = URL.createObjectURL(blob);
                                        var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                        test = markers_2nd_part_2nd[k]["SV ID"];
                                        var new_marker = xy(x_val[0], x_val[1]-385);
                                        var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                        given_marker.addTo(myFeatureGroup)
                                        given_marker.test = test;


                                    }
        
        else{
               var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_2nd_part_2nd[k]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

              
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                test = markers_2nd_part_2nd[k]["SV ID"];
                
                x_val=markers_2nd_part_2nd[k]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]-47);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
               

        }
        
       }


       // ------------------------------filling 1st part of third block--------------------------
      // required_part_location_1_of_3=["M/MT/FL051A1","M/MT/FL050A1","M/MT/FL049A2","M/MT/FL049A1","M/MT/FL048A1","M/MT/FL047A1","M/MT/FL046A2","M/MT/FL046A1","M/MT/FL045A1","M/MT/FL044A1"]

       var markers_3rd_part_1st=given_data_third_part_1st;

       for (var i = 0; i < markers_3rd_part_1st.length; i++) {
        var greenIcon;
        //console.log("all location")
        //console.log(markers_2nd_part_2nd[k]['Location']);
        if(markers_3rd_part_1st[i]['Location']=="M/MT/FL051A1" || markers_3rd_part_1st[i]['Location']=="M/MT/FL050A1"){
            var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

             
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                test = markers_3rd_part_1st[i]["SV ID"];
               
                x_val=markers_3rd_part_1st[i]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
               


             }

                else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL049A2"){

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [50, 15],

                                        }
                                });
                                x_val=markers_3rd_part_1st[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]-10);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                                else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL049A1"){

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [50, 15],

                                        }
                                });
                                x_val=markers_3rd_part_1st[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]-35);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                                else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL048A1" || markers_3rd_part_1st[i]['Location']=="M/MT/FL047A1"){
                                        var LeafIcon = L.Icon.extend({
                                                options: {
                                                iconSize: [50, 30],
                                                }
                                            });
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                      

                                            //console.log()
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                                            //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                            
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var new_marker = xy(x_val[0], x_val[1]-45);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;
                                           



                                        }


                                        else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL046A2"){

                                            var LeafIcon = L.Icon.extend({
                                                options: {
                                                    iconSize: [50, 15],

                                                    }
                                            });
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                            var new_marker = xy(x_val[0], x_val[1]-52);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;


                                            }

                                            else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL046A1"){

                                            var LeafIcon = L.Icon.extend({
                                                options: {
                                                    iconSize: [50, 15],

                                                    }
                                            });
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                            var new_marker = xy(x_val[0], x_val[1]-81);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;


                                            }

                                else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL045A1" || markers_3rd_part_1st[i]['Location']=="M/MT/FL044A1"){
                                        var LeafIcon = L.Icon.extend({
                                                options: {
                                                iconSize: [50, 30],
                                                }
                                            });
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                        

                                            //console.log()
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                                            //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                            
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var new_marker = xy(x_val[0], x_val[1]-92);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;
                                          



                                        }

                                        else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL044A2"){
                                        var LeafIcon = L.Icon.extend({
                                                options: {
                                                iconSize: [50, 30],
                                                }
                                            });
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                        

                                            //console.log()
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                                            //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                          
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var new_marker = xy(x_val[0]+100, x_val[1]-200);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;
                                          



                                        }

                                        else if(markers_3rd_part_1st[i]['Location']=="M/MT/FL044A3"){
                                        var LeafIcon = L.Icon.extend({
                                                options: {
                                                iconSize: [50, 30],
                                                }
                                            });
                                            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg_1"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                        

                                            //console.log()
                                            const blob = new Blob([svg], {type: 'image/svg+xml'});
                                            const svg_url = URL.createObjectURL(blob);
                                            var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                                            //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                            test = markers_3rd_part_1st[i]["SV ID"];
                                          
                                            x_val=markers_3rd_part_1st[i]["marker_position"];
                                            var new_marker = xy(x_val[0]+200, x_val[1]-200);
                                            var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                            given_marker.addTo(myFeatureGroup)
                                            given_marker.test = test;
                                          



                                        }




       }

       //----------------------------filling 2nd part for 3rd block----------------------------
       var markers_3rd_part_2nd=given_data_third_part_2nd;
       required_part_location_2_of_3=["M/MT/FL044A2","M/MT/FL044A3","M/MT/FL044A4","M/MT/FL044A5"]

       for (var i = 0; i < markers_3rd_part_2nd.length; i++) {
        var greenIcon;
        //console.log("all location")
        //console.log(markers_2nd_part_2nd[k]['Location']);
        if(markers_3rd_part_2nd[i]['Location']=="M/MT/FL044A2" || markers_3rd_part_2nd[i]['Location']=="M/MT/FL044A3" || markers_3rd_part_2nd[i]['Location']=="M/MT/FL044A4" || markers_3rd_part_2nd[i]['Location']=="M/MT/FL044A5"){
            var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_3rd_part_2nd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

             

                //console.log(markers_3rd_part_2nd[i]["Location"]);
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                test = markers_3rd_part_2nd[i]["SV ID"];
                
                x_val=markers_3rd_part_2nd[i]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
             

                


             }
             
       }
       //given_data_fifth_part_1st

     

    //---------------------------------------filling 5th block---------------------------------------------
     //----------------------------filling 1st part for 5th block----------------------------
    // required_part_location_1_of_5=["M/MT/FL043A1","M/MT/FL043A2","M/MT/FL043A3","M/MT/FL043A4"]

     var markers_5th_part_1st=given_data_fifth_part_1st;
      //console.log("length here");
      //console.log(markers_5th_part_1st);

       for (var i = 0; i < markers_5th_part_1st.length; i++) {
        var greenIcon;
        //console.log("all location")
        //console.log(markers_2nd_part_2nd[k]['Location']);
        if(markers_5th_part_1st[i]['Location']=="M/MT/FL043A1" || markers_5th_part_1st[i]['Location']=="M/MT/FL043A2" || markers_5th_part_1st[i]['Location']=="M/MT/FL043A3" || markers_5th_part_1st[i]['Location']=="M/MT/FL043A4"){
            var LeafIcon = L.Icon.extend({
                    options: {
                    iconSize: [50, 30],
                    }
                });
                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_1st[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

             

                //console.log(markers_3rd_part_2nd[i]["Location"]);
                const blob = new Blob([svg], {type: 'image/svg+xml'});
                const svg_url = URL.createObjectURL(blob);
                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                test = markers_5th_part_1st[i]["SV ID"];
                
                x_val=markers_5th_part_1st[i]["marker_position"];
                var new_marker = xy(x_val[0], x_val[1]);
                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                given_marker.addTo(myFeatureGroup)
                given_marker.test = test;
             

                


             }
             
       }



       //----------------------------filling 2nd part for 5th block----------------------------
    // required_part_location_1_of_5=["M/MT/FL043A1","M/MT/FL043A2","M/MT/FL043A3","M/MT/FL043A4"]

        var markers_5th_part_2nd=given_data_fifth_part_2nd;

            for (var i = 0; i < markers_5th_part_2nd.length; i++) {
            var greenIcon;
            //console.log("all location")
            //console.log(markers_2nd_part_2nd[k]['Location']);
            if(markers_5th_part_2nd[i]['Location']=="M/MT/FL042A1"){
                var LeafIcon = L.Icon.extend({
                        options: {
                        iconSize: [50, 30],
                        }
                    });
                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_2nd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                

                    //console.log(markers_3rd_part_2nd[i]["Location"]);
                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                    const svg_url = URL.createObjectURL(blob);
                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                    test = markers_5th_part_2nd[i]["SV ID"];
                    
                    x_val=markers_5th_part_2nd[i]["marker_position"];
                    var new_marker = xy(x_val[0], x_val[1]);
                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                    given_marker.addTo(myFeatureGroup)
                    given_marker.test = test;
                

                    


                }
                
            }


       //----------------------------filling 3rd part for 5th block----------------------------
       var markers_5th_part_3rd=given_data_fifth_part_3rd;

            for (var i = 0; i < markers_5th_part_3rd.length; i++) {
            var greenIcon;
            //console.log("all location")
            //console.log(markers_2nd_part_2nd[k]['Location']);
            if(markers_5th_part_3rd[i]['Location']=="M/MT/FL041A1"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A2"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A3"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A4"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A5"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A6"||markers_5th_part_3rd[i]['Location']=="M/MT/FL041A7"){
                var LeafIcon = L.Icon.extend({
                        options: {
                        iconSize: [50, 30],
                        }
                    });
                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_3rd[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                

                    //console.log(markers_3rd_part_2nd[i]["Location"]);
                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                    const svg_url = URL.createObjectURL(blob);
                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                    test = markers_5th_part_3rd[i]["SV ID"];
                    
                    x_val=markers_5th_part_3rd[i]["marker_position"];
                    var new_marker = xy(x_val[0], x_val[1]);
                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                    given_marker.addTo(myFeatureGroup)
                    given_marker.test = test;
                

                    


                }
                
            }


            //----------------------------filling 4th part for 5th block----------------------------
                var markers_5th_part_4th=given_data_fifth_part_4th;

                for (var i = 0; i < markers_5th_part_4th.length; i++) {
                   // console.log("hiiii");
                    //console.log(markers_5th_part_4th);

                var greenIcon;
                //console.log("all location")
                //console.log(markers_2nd_part_2nd[k]['Location']);
                if(markers_5th_part_4th[i]['Location']=="M/MT/FL040A1"){
                    var LeafIcon = L.Icon.extend({
                            options: {
                            iconSize: [50, 30],
                            }
                        });
                        var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_4th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                    

                        //console.log(markers_3rd_part_2nd[i]["Location"]);
                        const blob = new Blob([svg], {type: 'image/svg+xml'});
                        const svg_url = URL.createObjectURL(blob);
                        var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                        //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                        test = markers_5th_part_4th[i]["SV ID"];
                        x_val=markers_5th_part_4th[i]["marker_position"];
                        var new_marker = xy(x_val[0], x_val[1]);
                        var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                        given_marker.addTo(myFeatureGroup)
                        given_marker.test = test;
    

        
                }

    }



                      //----------------------------filling 5th part for 5th block----------------------------
                          var markers_5th_part_5th=given_data_fifth_part_5th;
                         // console.log(markers_5th_part_5th);

                            for (var i = 0; i < markers_5th_part_5th.length; i++) {
                                //console.log("hiiii soma");

                            var greenIcon;
                            //console.log("all location")
                            //console.log(markers_2nd_part_2nd[k]['Location']);
                            if(markers_5th_part_5th[i]['Location']=="M/MT/FL039A1" || markers_5th_part_5th[i]['Location']=="M/MT/FL039A2" ||markers_5th_part_5th[i]['Location']=="M/MT/FL039A3" ||markers_5th_part_5th[i]['Location']=="M/MT/FL039A4" ||markers_5th_part_5th[i]['Location']=="M/MT/FL039A5"){
                                var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_5th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                

                                    //console.log(markers_3rd_part_2nd[i]["Location"]);
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});

                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_5th[i]["SV ID"];
                                    x_val=markers_5th_part_5th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;


                            

                            }

                            }
                            //----------------------------filling 6th part for 5th block----------------------------
                          var markers_5th_part_6th=given_data_fifth_part_6th;
                          //required_part_location_6_of_5=["M/MT/FL038A1","M/MT/FL037A1","M/MT/FL036A1","M/MT/FL035A1","M/MT/FL034A1","M/MT/FL033A1","M/MT/FL032A1","M/MT/FL031A1","M/MT/FL030A1","M/MT/FL029A1","M/MT/FL028A1"]

                            for (var i = 0; i < markers_5th_part_6th.length; i++) {
                               

                            var greenIcon;
                            //console.log("all location")
                            //console.log(markers_2nd_part_2nd[k]['Location']);
                            if(markers_5th_part_6th[i]['Location']=="M/MT/FL038A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL037A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL036A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL035A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL034A1" || markers_5th_part_6th[i]['Location']=="M/MT/FL033A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL032A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL031A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL030A1" ||markers_5th_part_6th[i]['Location']=="M/MT/FL029A1"||markers_5th_part_6th[i]['Location']=="M/MT/FL028A1" || markers_5th_part_6th[i]['Location']=="M/MT/FL027A1" ){
                                

                             
                                var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_6th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'

                                

                                    //console.log(markers_3rd_part_2nd[i]["Location"]);
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_6th[i]["SV ID"];
                                    x_val=markers_5th_part_6th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;
                                   // console.log(test);
                              

                              

                            }
                }

                        //----------------------fill 7th part of 6th block---------------------------------
                     var markers_5th_part_7th=given_data_fifth_part_7th;
                    // required_part_location_7_of_5=["M/MT/FL026A1","M/MT/FL025A1","M/MT/FL024A1","M/MT/FL023A1","M/MT/FL022A1","M/MT/FL021A1","M/MT/FL020A1","M/MT/FL019A1","M/MT/FL018A1","M/MT/FL017A1","M/MT/FL016A1","M/MT/FL015A1","M/MT/FL014A1"]

                            for (var i = 0; i < markers_5th_part_7th.length; i++) {
                            var greenIcon;
                            if(markers_5th_part_7th[i]['Location']=="M/MT/FL026A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL025A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL024A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL023A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL022A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL021A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL020A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL019A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL018A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL017A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL016A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL015A1" ||markers_5th_part_7th[i]['Location']=="M/MT/FL014A1"  ){
                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_7th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_7th[i]["SV ID"];
                                    x_val=markers_5th_part_7th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;
                        }
                    }


                     //----------------------fill 7th part of 6th block---------------------------------
                     var markers_5th_part_8th=given_data_fifth_part_8th;
                    // required_part_location_8_of_5=["M/MT/FL013A1","M/MT/FL012A1","M/MT/FL011A1","M/MT/FL010A1","M/MT/FL009A1","M/MT/FL008A1","M/MT/FL007A1","M/MT/FL006A1","M/MT/FL005A1","M/MT/FL004A1","M/MT/FL003A1","M/MT/FL002A1","M/MT/FL001A1"]

                            for (var i = 0; i < markers_5th_part_8th.length; i++) {
                            var greenIcon;
                            if(markers_5th_part_8th[i]['Location']=="M/MT/FL013A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL012A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL011A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL010A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL009A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL008A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL007A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL006A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL005A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL004A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL003A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL002A1" ||markers_5th_part_8th[i]['Location']=="M/MT/FL001A1"  ){
                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_8th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_8th[i]["SV ID"];
                                    x_val=markers_5th_part_8th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;
                                }
                        }


                         //----------------------fill 9th part of 6th block---------------------------------
                     var markers_5th_part_9th=given_data_fifth_part_9th;
                    // required_part_location_8_of_5=["M/MT/FL013A1","M/MT/FL012A1","M/MT/FL011A1","M/MT/FL010A1","M/MT/FL009A1","M/MT/FL008A1","M/MT/FL007A1","M/MT/FL006A1","M/MT/FL005A1","M/MT/FL004A1","M/MT/FL003A1","M/MT/FL002A1","M/MT/FL001A1"]

                            for (var i = 0; i < markers_5th_part_9th.length; i++) {
                            var greenIcon;
                            if(markers_5th_part_9th[i]['Location']=="M/MT/FL029A2"){
                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_9th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_9th[i]["SV ID"];
                                    x_val=markers_5th_part_9th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;
                                }
                        }

                          //----------------------fill 10th part of 6th block---------------------------------
                     var markers_5th_part_10th=given_data_fifth_part_10th;

                            for (var i = 0; i < markers_5th_part_10th.length; i++) {
                            var greenIcon;
                            if(markers_5th_part_10th[i]['Location']=="M/MT/FL026A2" || markers_5th_part_10th[i]['Location']=="M/MT/FL026A3"){
                                    var LeafIcon = L.Icon.extend({
                                        options: {
                                        iconSize: [50, 30],
                                        }
                                    });
                                    var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_10th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                    const blob = new Blob([svg], {type: 'image/svg+xml'});
                                    const svg_url = URL.createObjectURL(blob);
                                    var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                    //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                    test = markers_5th_part_10th[i]["SV ID"];
                                    x_val=markers_5th_part_10th[i]["marker_position"];
                                    var new_marker = xy(x_val[0], x_val[1]);
                                    var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                    given_marker.addTo(myFeatureGroup)
                                    given_marker.test = test;
                                }
                        }
                          //----------------------fill 11th part of 6th block---------------------------------
                     var markers_5th_part_11th=given_data_fifth_part_11th;

                        for (var i = 0; i < markers_5th_part_11th.length; i++) {
                        var greenIcon;
                        if(markers_5th_part_11th[i]['Location']=="M/MT/FL021A2"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_11th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_5th_part_11th[i]["SV ID"];
                                x_val=markers_5th_part_11th[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }
                        }

                        var markers_5th_part_12th=given_data_fifth_part_12th;

                        for (var i = 0; i < markers_5th_part_12th.length; i++) {
                        var greenIcon;
                        if(markers_5th_part_12th[i]['Location']=="M/MT/FL013A2"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_12th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_5th_part_12th[i]["SV ID"];
                                x_val=markers_5th_part_12th[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }
                        }


                        var markers_5th_part_13th=given_data_fifth_part_13th;

                        for (var i = 0; i < markers_5th_part_13th.length; i++) {
                        var greenIcon;
                        if(markers_5th_part_13th[i]['Location']=="M/MT/FL011A2"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_13th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_5th_part_13th[i]["SV ID"];
                                x_val=markers_5th_part_13th[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }
                        }


                        var markers_5th_part_14th=given_data_fifth_part_14th;

                        for (var i = 0; i < markers_5th_part_14th.length; i++) {
                        var greenIcon;
                        if(markers_5th_part_14th[i]['Location']=="M/MT/FL006A2"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_14th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_5th_part_14th[i]["SV ID"];
                                x_val=markers_5th_part_14th[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }
                        }


                        var markers_5th_part_15th=given_data_fifth_part_15th;

                        for (var i = 0; i < markers_5th_part_15th.length; i++) {
                        var greenIcon;
                        if(markers_5th_part_15th[i]['Location']=="M/MT/FL005A2"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_5th_part_15th[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_5th_part_15th[i]["SV ID"];
                                x_val=markers_5th_part_15th[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }
                        

                        }

                        
                        
                        // code for fill 6th block

                        var markers_6th_part_1st=given_data_sixth_part_1st;
                        for (var i = 0; i < markers_6th_part_1st.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_1st[i]['Location']=="M/MT/FL083A3" || markers_6th_part_1st[i]['Location']=="M/MT/FL083A2" || markers_6th_part_1st[i]['Location']=="M/MT/FL083A1"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_6th_part_1st[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_6th_part_1st[i]["SV ID"];
                                x_val=markers_6th_part_1st[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }


                        }


                        //---------------------------------------------------------
                        var markers_6th_part_2nd=given_data_sixth_part_2nd;
                        for (var i = 0; i < markers_6th_part_2nd.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_2nd[i]['Location']=="M/MT/FL084A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL085A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL086A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL087A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL088A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL089A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL090A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL091A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL092A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL093A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL093A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL094A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL095A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL096A1" || markers_6th_part_2nd[i]['Location']=="M/MT/FL097A1"){
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_6th_part_2nd[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test =  markers_6th_part_2nd[i]["SV ID"];
                                x_val=markers_6th_part_2nd[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }


                        }
                     //-------------------------------------------------------------------

                     //given_data_sixth_part_4th_1
                        var markers_6th_part_3rd=given_data_sixth_part_3rd;
                        for (var i = 0; i < markers_6th_part_3rd.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_3rd[i]['Location']=="M/MT/FL084A2"){

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [50, 15],

                                        }
                                });
                                x_val=markers_6th_part_3rd[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_6th_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_3rd[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]-10);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            else if(markers_6th_part_3rd[i]['Location']=="M/MT/FL084A3"){

                                        var LeafIcon = L.Icon.extend({
                                            options: {
                                                iconSize: [50, 15],

                                                }
                                        });
                                        x_val=markers_6th_part_3rd[i]["marker_position"];
                                        var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_6th_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                        const blob = new Blob([svg], {type: 'image/svg+xml'});
                                        const svg_url = URL.createObjectURL(blob);
                                        var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                        test = markers_6th_part_3rd[i]["SV ID"];
                                        var new_marker = xy(x_val[0], x_val[1]-40);
                                        var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                        given_marker.addTo(myFeatureGroup)
                                        given_marker.test = test;


                                    }



                                   else if(markers_6th_part_3rd[i]['Location']=="M/MT/FL085A2"){

                                        var LeafIcon = L.Icon.extend({
                                            options: {
                                                iconSize: [50, 15],

                                                }
                                        });
                                        x_val=markers_6th_part_3rd[i]["marker_position"];
                                        var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_6th_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                        const blob = new Blob([svg], {type: 'image/svg+xml'});
                                        const svg_url = URL.createObjectURL(blob);
                                        var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                        test = markers_6th_part_3rd[i]["SV ID"];
                                        var new_marker = xy(x_val[0], x_val[1]-60);
                                        var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                        given_marker.addTo(myFeatureGroup)
                                        given_marker.test = test;


                                        }

                                        else if(markers_6th_part_3rd[i]['Location']=="M/MT/FL085A3"){

                                                var LeafIcon = L.Icon.extend({
                                                    options: {
                                                        iconSize: [50, 15],

                                                        }
                                                });
                                                x_val=markers_6th_part_3rd[i]["marker_position"];
                                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 15" width="50" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+markers_6th_part_3rd[i]["Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                                const svg_url = URL.createObjectURL(blob);
                                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                                test = markers_6th_part_3rd[i]["SV ID"];
                                                var new_marker = xy(x_val[0], x_val[1]-90);
                                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                                given_marker.addTo(myFeatureGroup)
                                                given_marker.test = test;


                                            }
                                                        
                                                        
                        
                            else{
                                var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="svg'+String(i)+'" fill="#0853bf"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+markers_6th_part_3rd[i]['Location']+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = markers_6th_part_3rd[i]["SV ID"];
                                x_val=markers_6th_part_3rd[i]["marker_position"];
                                var new_marker = xy(x_val[0], x_val[1]-97);
                                var given_marker = L.marker(new_marker, { icon: greenIcon2 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;
                            }

                        
                    
                    
                    
                    }


                    //-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                    var markers_6th_part_4th_1=given_data_sixth_part_4th_1;
                        for (var i = 0; i < markers_6th_part_4th_1.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_4th_1[i]['Location']=="M/MT/MD101A1" || markers_6th_part_4th_1[i]['Location']=="M/MT/MD101A2" ||markers_6th_part_4th_1[i]['Location']=="M/MT/MD101A3" ||markers_6th_part_4th_1[i]['Location']=="M/MT/MD101A4"){
                                var loc = markers_6th_part_4th_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_4th_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_4th_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------



                //-------------------------------filling 6th block 4_2----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_4th_2=given_data_sixth_part_4th_2;
                        for (var i = 0; i < markers_6th_part_4th_2.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_4th_2[i]['Location']=="M/MT/MD101B1" || markers_6th_part_4th_2[i]['Location']=="M/MT/MD101B2" ||markers_6th_part_4th_2[i]['Location']=="M/MT/MD101B3" ||markers_6th_part_4th_2[i]['Location']=="M/MT/MD101B4"){
                                var loc = markers_6th_part_4th_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_4th_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_4th_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------



 //-------------------------------filling 6th block 4_3----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_4th_3=given_data_sixth_part_4th_3;
                        for (var i = 0; i < markers_6th_part_4th_3.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_4th_3[i]['Location']=="M/MT/MD101C1" || markers_6th_part_4th_3[i]['Location']=="M/MT/MD101C2" ||markers_6th_part_4th_3[i]['Location']=="M/MT/MD101C3" ||markers_6th_part_4th_3[i]['Location']=="M/MT/MD101C4"){
                                var loc = markers_6th_part_4th_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_4th_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_4th_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }



                    //--------------------------------end 6th block-------------------------------------



//-------------------------------filling 6th block 4_4----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_4th_4=given_data_sixth_part_4th_4;
                        for (var i = 0; i < markers_6th_part_4th_4.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_4th_4[i]['Location']=="M/MT/MD101D1" || markers_6th_part_4th_4[i]['Location']=="M/MT/MD101D2" ||markers_6th_part_4th_4[i]['Location']=="M/MT/MD101D3" ||markers_6th_part_4th_4[i]['Location']=="M/MT/MD101D4"){
                                var loc = markers_6th_part_4th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_4th_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_4th_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    

                    //--------------------------------end 6th block-------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_5th_1=given_data_sixth_part_5th_1;
                        for (var i = 0; i < markers_6th_part_5th_1.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_5th_1[i]['Location']=="M/MT/MD102A1" || markers_6th_part_5th_1[i]['Location']=="M/MT/MD102A2" ||markers_6th_part_5th_1[i]['Location']=="M/MT/MD102A3" ||markers_6th_part_5th_1[i]['Location']=="M/MT/MD102A4"){
                                var loc = markers_6th_part_5th_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_5th_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_5th_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------



//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_5th_2=given_data_sixth_part_5th_2;
                        for (var i = 0; i < markers_6th_part_5th_2.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_5th_2[i]['Location']=="M/MT/MD102B1" || markers_6th_part_5th_2[i]['Location']=="M/MT/MD102B2" ||markers_6th_part_5th_2[i]['Location']=="M/MT/MD102B3" ||markers_6th_part_5th_2[i]['Location']=="M/MT/MD102B4"){
                                var loc = markers_6th_part_5th_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_5th_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_5th_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_5th_3=given_data_sixth_part_5th_3;
                        for (var i = 0; i < markers_6th_part_5th_3.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_5th_3[i]['Location']=="M/MT/MD102C1" || markers_6th_part_5th_3[i]['Location']=="M/MT/MD102C2" ||markers_6th_part_5th_3[i]['Location']=="M/MT/MD102C3" ||markers_6th_part_5th_3[i]['Location']=="M/MT/MD102C4"){
                                var loc = markers_6th_part_5th_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_5th_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_5th_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------

//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_5th_4=given_data_sixth_part_5th_4;
                        for (var i = 0; i < markers_6th_part_5th_4.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_5th_4[i]['Location']=="M/MT/MD102D1" || markers_6th_part_5th_4[i]['Location']=="M/MT/MD102D2" ||markers_6th_part_5th_4[i]['Location']=="M/MT/MD102D3" ||markers_6th_part_5th_4[i]['Location']=="M/MT/MD102D4"){
                                var loc = markers_6th_part_5th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_5th_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_5th_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------



//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_6th_1=given_data_sixth_part_6th_1;
                        for (var i = 0; i < markers_6th_part_6th_1.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_6th_1[i]['Location']=="M/MT/MD103A1" || markers_6th_part_6th_1[i]['Location']=="M/MT/MD103A2" ||markers_6th_part_6th_1[i]['Location']=="M/MT/MD103A3" ||markers_6th_part_6th_1[i]['Location']=="M/MT/MD103A4"){
                                var loc = markers_6th_part_6th_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_6th_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_6th_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_6th_2=given_data_sixth_part_6th_2;
                        for (var i = 0; i < markers_6th_part_6th_2.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_6th_2[i]['Location']=="M/MT/MD103B1" || markers_6th_part_6th_2[i]['Location']=="M/MT/MD103B2" ||markers_6th_part_6th_2[i]['Location']=="M/MT/MD103B3" ||markers_6th_part_6th_2[i]['Location']=="M/MT/MD103B4"){
                                var loc = markers_6th_part_6th_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_6th_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_6th_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_6th_3=given_data_sixth_part_6th_3;
                        for (var i = 0; i < markers_6th_part_6th_3.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_6th_3[i]['Location']=="M/MT/MD103C1" || markers_6th_part_6th_3[i]['Location']=="M/MT/MD103C2" ||markers_6th_part_6th_3[i]['Location']=="M/MT/MD103C3" ||markers_6th_part_6th_3[i]['Location']=="M/MT/MD103C4"){
                                var loc = markers_6th_part_6th_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_6th_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_6th_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_6th_4=given_data_sixth_part_6th_4;
                        for (var i = 0; i < markers_6th_part_6th_4.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_6th_4[i]['Location']=="M/MT/MD103D1" || markers_6th_part_6th_4[i]['Location']=="M/MT/MD103D2" ||markers_6th_part_6th_4[i]['Location']=="M/MT/MD103D3" ||markers_6th_part_6th_4[i]['Location']=="M/MT/MD103D4"){
                                var loc = markers_6th_part_6th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_6th_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_6th_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------

//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_7th_1=given_data_sixth_part_7th_1;
                        for (var i = 0; i < markers_6th_part_7th_1.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_7th_1[i]['Location']=="M/MT/MD104A1" || markers_6th_part_7th_1[i]['Location']=="M/MT/MD104A2" ||markers_6th_part_7th_1[i]['Location']=="M/MT/MD104A3" ||markers_6th_part_7th_1[i]['Location']=="M/MT/MD104A4"){
                                var loc = markers_6th_part_7th_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_7th_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_7th_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_7th_2=given_data_sixth_part_7th_2;
                        for (var i = 0; i < markers_6th_part_7th_2.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_7th_2[i]['Location']=="M/MT/MD104B1" || markers_6th_part_7th_2[i]['Location']=="M/MT/MD104B2" ||markers_6th_part_7th_2[i]['Location']=="M/MT/MD104B3" ||markers_6th_part_7th_2[i]['Location']=="M/MT/MD104B4"){
                                var loc = markers_6th_part_7th_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_7th_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_7th_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_7th_3=given_data_sixth_part_7th_3;
                        for (var i = 0; i < markers_6th_part_7th_3.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_7th_3[i]['Location']=="M/MT/MD104C1" || markers_6th_part_7th_3[i]['Location']=="M/MT/MD104C2" ||markers_6th_part_7th_3[i]['Location']=="M/MT/MD104C3" ||markers_6th_part_7th_3[i]['Location']=="M/MT/MD104C4"){
                                var loc = markers_6th_part_7th_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_7th_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_7th_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                    
                    
                    }

                    //--------------------------------end 6th block--------------------------------------


//-------------------------------filling 6th block 4_1----------------------------------
                     //given_data_sixth_part_4th_1
                     //required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]

                     var markers_6th_part_7th_4=given_data_sixth_part_7th_4;
                        for (var i = 0; i < markers_6th_part_6th_4.length; i++) {
                        var greenIcon;
                        if(markers_6th_part_7th_4[i]['Location']=="M/MT/MD104D1" || markers_6th_part_7th_4[i]['Location']=="M/MT/MD104D2" ||markers_6th_part_7th_4[i]['Location']=="M/MT/MD104D3" ||markers_6th_part_7th_4[i]['Location']=="M/MT/MD104D4"){
                                var loc = markers_6th_part_7th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_6th_part_7th_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_6th_part_7th_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                        }

                        // ----------------------required partloc name render here of 6th block
                        var markers_6th_loc_data=given_loc_data_sixth_part;
                        for (var i = 0; i < markers_6th_loc_data.length; i++) {
                        var greenIcon;
                        if(markers_6th_loc_data[i]['part_location']=="M/MT/MD101" || markers_6th_loc_data[i]['part_location']=="M/MT/MD102" ||markers_6th_loc_data[i]['part_location']=="M/MT/MD103" ||markers_6th_loc_data[i]['part_location']=="M/MT/MD104"){
                                //var loc = markers_6th_part_7th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [200, 20],

                                        }
                                });
                               var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20" width="200" viewBox="0 0 200 20"><text x="3" y="10" fill="black" font-size="8" font-weight="700">'+markers_6th_loc_data[i]['part_location']+'</text></svg>';
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = "location"
                                var new_marker = xy(markers_6th_loc_data[i]['x_val'], markers_6th_loc_data[i]['y_val']);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                        }


                        //------------------part loc 4th block here ---------------------
                           // ----------------------required partloc name render here of 6th block
                        var markers_4th_loc_data=given_loc_data_fourth_part;
                        for (var i = 0; i < markers_4th_loc_data.length; i++) {
                        var greenIcon;
                        if(markers_4th_loc_data[i]['part_location']=="M/MT/MD105" || markers_4th_loc_data[i]['part_location']=="M/MT/MD106" ||markers_4th_loc_data[i]['part_location']=="M/MT/MD107" ||markers_4th_loc_data[i]['part_location']=="M/MT/MD108"){
                                //var loc = markers_6th_part_7th_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [200, 20],

                                        }
                                });
                               var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20" width="200" viewBox="0 0 200 20"><text x="3" y="10" fill="black" font-size="8" font-weight="700">'+markers_4th_loc_data[i]['part_location']+'</text></svg>';
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = "location"
                                var new_marker = xy(markers_4th_loc_data[i]['x_val'], markers_4th_loc_data[i]['y_val']);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                        }

                          // ----------------------required partloc name render here of 6th block
                        var markers_1st_loc_data=given_loc_data_first_part;
                        for (var i = 0; i < markers_1st_loc_data.length; i++) {
                                var LeafIcon = L.Icon.extend({options: {iconSize: [200, 10]}
                                });
                               var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="10" width="200" viewBox="0 0 200 10"><text x="3" y="10" fill="black" font-size="6" font-weight="600">'+markers_1st_loc_data[i]['part_location']+'</text></svg>';
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = "location"
                                var new_marker = xy(markers_1st_loc_data[i]['x_val'], markers_1st_loc_data[i]['y_val']);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                        }



    // ---------------------------------------------required partloc name render here of 6th block------------------
                        var markers_7th_loc_data=given_loc_data_seventh_part;
                        for (var i = 0; i < markers_7th_loc_data.length; i++) {
                                var LeafIcon = L.Icon.extend({options: {iconSize: [200, 10]}
                                });
                               var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="10" width="200" viewBox="0 0 200 10"><text x="3" y="10" fill="black" font-size="6" font-weight="600">'+markers_7th_loc_data[i]['part_location']+'</text></svg>';
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = "location"
                                var new_marker = xy(markers_7th_loc_data[i]['x_val'], markers_7th_loc_data[i]['y_val']);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                        }




                        // ---------------------------------partloc render end here of 6th block
                    //--------------------------------end 6th block--------------------------------------

//-----------------------------------------filling 3rd block m/mt/md105-----------------------------------------
                    var markers_3rd_part_1st_1=given_data_third_part_1st_1;

                    for (var i = 0; i < markers_3rd_part_1st_1.length; i++) {
                        if(markers_3rd_part_1st_1[i]['Location']=="M/MT/MD105D1" || markers_3rd_part_1st_1[i]['Location']=="M/MT/MD105D2" ||markers_3rd_part_1st_1[i]['Location']=="M/MT/MD105D3" ||markers_3rd_part_1st_1[i]['Location']=="M/MT/MD105D4"){
                                var loc = markers_3rd_part_1st_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_1st_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }
                    }


                    var markers_3rd_part_1st_2=given_data_third_part_1st_2;

                    for (var i = 0; i < markers_3rd_part_1st_2.length; i++) {
                        if(markers_3rd_part_1st_2[i]['Location']=="M/MT/MD105C1" || markers_3rd_part_1st_2[i]['Location']=="M/MT/MD105C2" ||markers_3rd_part_1st_2[i]['Location']=="M/MT/MD105C3" ||markers_3rd_part_1st_2[i]['Location']=="M/MT/MD105C4"){
                                var loc = markers_3rd_part_1st_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_1st_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                    }



                    var markers_3rd_part_1st_3=given_data_third_part_1st_3;
                    for (var i = 0; i < markers_3rd_part_1st_3.length; i++) {
                        var greenIcon;
                        if(markers_3rd_part_1st_3[i]['Location']=="M/MT/MD105B1" || markers_3rd_part_1st_3[i]['Location']=="M/MT/MD105B2" ||markers_3rd_part_1st_3[i]['Location']=="M/MT/MD105B3" ||markers_3rd_part_1st_3[i]['Location']=="M/MT/MD105B4"){
                                var loc = markers_3rd_part_1st_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_1st_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                        }

                        var markers_3rd_part_1st_4=given_data_third_part_1st_4;
                        for (var i = 0; i < markers_3rd_part_1st_4.length; i++) {
                        var greenIcon;
                        if(markers_3rd_part_1st_4[i]['Location']=="M/MT/MD105A1" || markers_3rd_part_1st_4[i]['Location']=="M/MT/MD105A2" ||markers_3rd_part_1st_4[i]['Location']=="M/MT/MD105A3" ||markers_3rd_part_1st_4[i]['Location']=="M/MT/MD105A4"){
                                var loc = markers_3rd_part_1st_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_1st_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_1st_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                        }
//-----------------------------------------end m/mt/md105--------------------------------------------------------------


//-----------------------------------------filling 3rd block m/mt/md106-----------------------------------------
                    var markers_3rd_part_2nd_1=given_data_third_part_2nd_1;

                    for (var i = 0; i < markers_3rd_part_2nd_1.length; i++) {
                        if(markers_3rd_part_2nd_1[i]['Location']=="M/MT/MD106D1" || markers_3rd_part_2nd_1[i]['Location']=="M/MT/MD106D2" ||markers_3rd_part_2nd_1[i]['Location']=="M/MT/MD106D3" ||markers_3rd_part_2nd_1[i]['Location']=="M/MT/MD106D4"){
                                var loc = markers_3rd_part_2nd_1[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_2nd_1[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_2nd_1[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }
                    }


                    var markers_3rd_part_2nd_2=given_data_third_part_2nd_2;

                    for (var i = 0; i < markers_3rd_part_2nd_2.length; i++) {
                        if(markers_3rd_part_2nd_2[i]['Location']=="M/MT/MD106C1" || markers_3rd_part_2nd_2[i]['Location']=="M/MT/MD106C2" ||markers_3rd_part_2nd_2[i]['Location']=="M/MT/MD106C3" ||markers_3rd_part_2nd_2[i]['Location']=="M/MT/MD106C4"){
                                var loc = markers_3rd_part_2nd_2[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_2nd_2[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_2nd_2[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                    }


                   
                    var markers_3rd_part_2nd_3=given_data_third_part_2nd_3;
                    for (var i = 0; i < markers_3rd_part_2nd_3.length; i++) {
                        var greenIcon;
                        if(markers_3rd_part_2nd_3[i]['Location']=="M/MT/MD106B1" || markers_3rd_part_2nd_3[i]['Location']=="M/MT/MD106B2" ||markers_3rd_part_2nd_3[i]['Location']=="M/MT/MD106B3" ||markers_3rd_part_2nd_3[i]['Location']=="M/MT/MD106B4"){
                                var loc = markers_3rd_part_2nd_3[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_2nd_3[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_2nd_3[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                        }

                        var markers_3rd_part_2nd_4=given_data_third_part_2nd_4;
                        for (var i = 0; i < markers_3rd_part_2nd_4.length; i++) {
                        var greenIcon;
                        if(markers_3rd_part_2nd_4[i]['Location']=="M/MT/MD106A1" || markers_3rd_part_2nd_4[i]['Location']=="M/MT/MD106A2" ||markers_3rd_part_2nd_4[i]['Location']=="M/MT/MD106A3" ||markers_3rd_part_2nd_4[i]['Location']=="M/MT/MD106A4"){
                                var loc = markers_3rd_part_2nd_4[i]['Location'].slice(-2);

                                var LeafIcon = L.Icon.extend({
                                    options: {
                                        iconSize: [13, 13],

                                        }
                                });
                                x_val=markers_3rd_part_2nd_4[i]["marker_position"];
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
                               // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
                                test = markers_3rd_part_2nd_4[i]["SV ID"];
                                var new_marker = xy(x_val[0], x_val[1]);
                                var given_marker = L.marker(new_marker, { icon: greenIcon1 })
                                given_marker.addTo(myFeatureGroup)
                                given_marker.test = test;


                                }

                            
                        
                    
                        }



//-----------------------------------------end m/mt/md106--------------------------------------------------------------


//-----------------------------------------filling 3rd block m/mt/md107-----------------------------------------
var markers_3rd_part_3rd_1=given_data_third_part_3rd_1;

for (var i = 0; i < markers_3rd_part_3rd_1.length; i++) {
    if(markers_3rd_part_3rd_1[i]['Location']=="M/MT/MD107D1" || markers_3rd_part_3rd_1[i]['Location']=="M/MT/MD107D2" ||markers_3rd_part_3rd_1[i]['Location']=="M/MT/MD107D3" ||markers_3rd_part_3rd_1[i]['Location']=="M/MT/MD107D4"){
            var loc = markers_3rd_part_3rd_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_3rd_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_3rd_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_3rd_part_3rd_2=given_data_third_part_3rd_2;

for (var i = 0; i < markers_3rd_part_3rd_2.length; i++) {
    if(markers_3rd_part_3rd_2[i]['Location']=="M/MT/MD107C1" || markers_3rd_part_3rd_2[i]['Location']=="M/MT/MD107C2" ||markers_3rd_part_3rd_2[i]['Location']=="M/MT/MD107C3" ||markers_3rd_part_3rd_2[i]['Location']=="M/MT/MD107C4"){
            var loc = markers_3rd_part_3rd_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_3rd_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_3rd_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

}



var markers_3rd_part_3rd_3=given_data_third_part_3rd_3;
for (var i = 0; i < markers_3rd_part_3rd_3.length; i++) {
    if(markers_3rd_part_3rd_3[i]['Location']=="M/MT/MD107B1" || markers_3rd_part_3rd_3[i]['Location']=="M/MT/MD107B2" ||markers_3rd_part_3rd_3[i]['Location']=="M/MT/MD107B3" ||markers_3rd_part_3rd_3[i]['Location']=="M/MT/MD107B4"){
            var loc = markers_3rd_part_3rd_3[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_3rd_3[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_3rd_3[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

    }

    var markers_3rd_part_3rd_4=given_data_third_part_3rd_4;
    for (var i = 0; i < markers_3rd_part_3rd_4.length; i++) {
    if(markers_3rd_part_3rd_4[i]['Location']=="M/MT/MD107A1" || markers_3rd_part_3rd_4[i]['Location']=="M/MT/MD107A2" ||markers_3rd_part_3rd_4[i]['Location']=="M/MT/MD107A3" ||markers_3rd_part_3rd_4[i]['Location']=="M/MT/MD107A4"){
            var loc = markers_3rd_part_3rd_4[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_3rd_4[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_3rd_4[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

        
    

    }



//-----------------------------------------end m/mt/md107--------------------------------------------------------------


//-----------------------------------------filling 3rd block m/mt/md108-----------------------------------------
var markers_3rd_part_4th_1=given_data_third_part_4th_1;


for (var i = 0; i < markers_3rd_part_4th_1.length; i++) {
    if(markers_3rd_part_4th_1[i]['Location']=="M/MT/MD108D1" || markers_3rd_part_4th_1[i]['Location']=="M/MT/MD108D2" ||markers_3rd_part_4th_1[i]['Location']=="M/MT/MD108D3" ||markers_3rd_part_4th_1[i]['Location']=="M/MT/MD108D4"){
            var loc = markers_3rd_part_4th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_4th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_4th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_3rd_part_4th_2=given_data_third_part_4th_2;

for (var i = 0; i < markers_3rd_part_4th_2.length; i++) {
    if(markers_3rd_part_4th_2[i]['Location']=="M/MT/MD108C1" || markers_3rd_part_4th_2[i]['Location']=="M/MT/MD108C2" ||markers_3rd_part_4th_2[i]['Location']=="M/MT/MD108C3" ||markers_3rd_part_4th_2[i]['Location']=="M/MT/MD108C4"){
            var loc = markers_3rd_part_4th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_4th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_4th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

}



var markers_3rd_part_4th_3=given_data_third_part_4th_3;
for (var i = 0; i < markers_3rd_part_4th_3.length; i++) {
    if(markers_3rd_part_4th_3[i]['Location']=="M/MT/MD108B1" || markers_3rd_part_4th_3[i]['Location']=="M/MT/MD108B2" ||markers_3rd_part_4th_3[i]['Location']=="M/MT/MD108B3" ||markers_3rd_part_4th_3[i]['Location']=="M/MT/MD108B4"){
            var loc = markers_3rd_part_4th_3[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_4th_3[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_4th_3[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

    }

    var markers_3rd_part_4th_4=given_data_third_part_4th_4;
    for (var i = 0; i < markers_3rd_part_4th_4.length; i++) {
    if(markers_3rd_part_4th_4[i]['Location']=="M/MT/MD108A1" || markers_3rd_part_4th_4[i]['Location']=="M/MT/MD108A2" ||markers_3rd_part_4th_4[i]['Location']=="M/MT/MD108A3" ||markers_3rd_part_4th_4[i]['Location']=="M/MT/MD108A4"){
            var loc = markers_3rd_part_4th_4[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 13],

                    }
            });
            x_val=markers_3rd_part_4th_4[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" style="fill:#0853bf" viewBox="0 0 13 13"><rect width="13" height="13" style="" /><text x="3" y="10" fill="white" font-size="7" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_3rd_part_4th_4[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }

        
    

    }



//-----------------------------------------end m/mt/md107--------------------------------------------------------------


//given_data_first_part_1st_1
//-------------------------------------------filling 1st block--------------------------------------------------
var markers_1st_part_1st_1=given_data_first_part_1st_1;


for (var i = 0; i < markers_1st_part_1st_1.length; i++) {
    if(markers_1st_part_1st_1[i]['Location']=="M/MT/FR064D2" || markers_1st_part_1st_1[i]['Location']=="M/MT/FR064C2" ||markers_1st_part_1st_1[i]['Location']=="M/MT/FR064B2" ||markers_1st_part_1st_1[i]['Location']=="M/MT/FR064A2"){
            var loc = markers_1st_part_1st_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_1st_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_1st_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_1st_2=given_data_first_part_1st_2;


for (var i = 0; i < markers_1st_part_1st_2.length; i++) {
    if(markers_1st_part_1st_2[i]['Location']=="M/MT/FR064D1" || markers_1st_part_1st_2[i]['Location']=="M/MT/FR064C1" ||markers_1st_part_1st_2[i]['Location']=="M/MT/FR064B1" ||markers_1st_part_1st_2[i]['Location']=="M/MT/FR064A1"){
            var loc = markers_1st_part_1st_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],
                }
            });
            x_val=markers_1st_part_1st_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
// var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_1st_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//---------------------------------------------1st part 2nd block------------------------------------------
var markers_1st_part_2nd_1=given_data_first_part_2nd_1;
for (var i = 0; i < markers_1st_part_2nd_1.length; i++) {
    if(markers_1st_part_2nd_1[i]['Location']=="M/MT/FR063D2" || markers_1st_part_2nd_1[i]['Location']=="M/MT/FR063C2" ||markers_1st_part_2nd_1[i]['Location']=="M/MT/FR063B2" ||markers_1st_part_2nd_1[i]['Location']=="M/MT/FR063A2"){
            var loc = markers_1st_part_2nd_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_2nd_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_2nd_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_2nd_2=given_data_first_part_2nd_2;


for (var i = 0; i < markers_1st_part_2nd_2.length; i++) {
    if(markers_1st_part_2nd_2[i]['Location']=="M/MT/FR063D1" || markers_1st_part_2nd_2[i]['Location']=="M/MT/FR063C1" || markers_1st_part_2nd_2[i]['Location']=="M/MT/FR063B1" || markers_1st_part_2nd_2[i]['Location']=="M/MT/FR063A1"){
            var loc =markers_1st_part_2nd_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_2nd_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_2nd_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------3rd part of first block----------------------------------------------
var markers_1st_part_3rd_1=given_data_first_part_3rd_1;
for (var i = 0; i <markers_1st_part_3rd_1.length; i++) {
    if(markers_1st_part_3rd_1[i]['Location']=="M/MT/FR062D2" || markers_1st_part_3rd_1[i]['Location']=="M/MT/FR062C2" ||markers_1st_part_3rd_1[i]['Location']=="M/MT/FR062B2" ||markers_1st_part_3rd_1[i]['Location']=="M/MT/FR062A2"){
            var loc = markers_1st_part_3rd_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_3rd_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_3rd_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_3rd_2=given_data_first_part_3rd_2;


for (var i = 0; i < markers_1st_part_3rd_2.length; i++) {
    if(markers_1st_part_3rd_2[i]['Location']=="M/MT/FR062D1" || markers_1st_part_3rd_2[i]['Location']=="M/MT/FR062C1" || markers_1st_part_3rd_2[i]['Location']=="M/MT/FR062B1" || markers_1st_part_3rd_2[i]['Location']=="M/MT/FR062A1"){
            var loc =markers_1st_part_3rd_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_3rd_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_3rd_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------4th part of first block----------------------------------------------
var markers_1st_part_4th_1=given_data_first_part_4th_1;

//console.log("check sonath");
//console.log(markers_1st_part_4th_1);
for (var i = 0; i <markers_1st_part_4th_1.length; i++) {
    if(markers_1st_part_4th_1[i]['Location']=="M/MT/FR061D2" || markers_1st_part_4th_1[i]['Location']=="M/MT/FR061C2" ||markers_1st_part_4th_1[i]['Location']=="M/MT/FR061B2" ||markers_1st_part_4th_1[i]['Location']=="M/MT/FR061A2"){
            var loc = markers_1st_part_4th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_4th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_4th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_4th_2=given_data_first_part_4th_2;


for (var i = 0; i < markers_1st_part_4th_2.length; i++) {
    if(markers_1st_part_4th_2[i]['Location']=="M/MT/FR061D1" || markers_1st_part_4th_2[i]['Location']=="M/MT/FR061C1" || markers_1st_part_4th_2[i]['Location']=="M/MT/FR061B1" || markers_1st_part_4th_2[i]['Location']=="M/MT/FR061A1"){
            var loc =markers_1st_part_4th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_4th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_4th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}




//----------------------------------5th part of first block----------------------------------------------
var markers_1st_part_5th_1=given_data_first_part_5th_1;
for (var i = 0; i <markers_1st_part_5th_1.length; i++) {
    if(markers_1st_part_5th_1[i]['Location']=="M/MT/FR060D2" || markers_1st_part_5th_1[i]['Location']=="M/MT/FR060C2" ||markers_1st_part_5th_1[i]['Location']=="M/MT/FR060B2" ||markers_1st_part_5th_1[i]['Location']=="M/MT/FR060A2"){
            var loc = markers_1st_part_5th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_5th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_5th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_5th_2=given_data_first_part_5th_2;


for (var i = 0; i < markers_1st_part_5th_2.length; i++) {
    if(markers_1st_part_5th_2[i]['Location']=="M/MT/FR060D1" || markers_1st_part_5th_2[i]['Location']=="M/MT/FR060C1" || markers_1st_part_5th_2[i]['Location']=="M/MT/FR060B1" || markers_1st_part_5th_2[i]['Location']=="M/MT/FR060A1"){
            var loc =markers_1st_part_5th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_5th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_5th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------6th part of first block----------------------------------------------
var markers_1st_part_6th_1=given_data_first_part_6th_1;
for (var i = 0; i <markers_1st_part_6th_1.length; i++) {
    if(markers_1st_part_6th_1[i]['Location']=="M/MT/FR059D2" || markers_1st_part_6th_1[i]['Location']=="M/MT/FR059C2" ||markers_1st_part_6th_1[i]['Location']=="M/MT/FR059B2" ||markers_1st_part_6th_1[i]['Location']=="M/MT/FR059A2"){
            var loc = markers_1st_part_6th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_6th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_6th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


var markers_1st_part_6th_2=given_data_first_part_6th_2;


for (var i = 0; i < markers_1st_part_6th_2.length; i++) {
    if(markers_1st_part_6th_2[i]['Location']=="M/MT/FR059D1" ||markers_1st_part_6th_2[i]['Location']=="M/MT/FR059C1" || markers_1st_part_6th_2[i]['Location']=="M/MT/FR059B1" || markers_1st_part_6th_2[i]['Location']=="M/MT/FR059A1"){
            var loc =markers_1st_part_6th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_6th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_6th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------7th part of first block----------------------------------------------
    var markers_1st_part_7th_1=given_data_first_part_7th_1;
    for (var i = 0; i <markers_1st_part_7th_1.length; i++) {
        if(markers_1st_part_7th_1[i]['Location']=="M/MT/FR058D2" || markers_1st_part_7th_1[i]['Location']=="M/MT/FR058C2" ||markers_1st_part_7th_1[i]['Location']=="M/MT/FR058B2" ||markers_1st_part_7th_1[i]['Location']=="M/MT/FR058A2"){
            var loc = markers_1st_part_7th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_7th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_7th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_7th_2=given_data_first_part_7th_2;


    for (var i = 0; i < markers_1st_part_7th_2.length; i++) {
        if(markers_1st_part_7th_2[i]['Location']=="M/MT/FR058D1" ||markers_1st_part_7th_2[i]['Location']=="M/MT/FR058C1" || markers_1st_part_7th_2[i]['Location']=="M/MT/FR058B1" || markers_1st_part_7th_2[i]['Location']=="M/MT/FR058A1"){
            var loc =markers_1st_part_7th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_7th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_7th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------8th part of first block----------------------------------------------
var markers_1st_part_8th_1=given_data_first_part_8th_1;
    for (var i = 0; i <markers_1st_part_8th_1.length; i++) {
        if(markers_1st_part_8th_1[i]['Location']=="M/MT/FR057D2" || markers_1st_part_8th_1[i]['Location']=="M/MT/FR057C2" ||markers_1st_part_8th_1[i]['Location']=="M/MT/FR057B2" ||markers_1st_part_8th_1[i]['Location']=="M/MT/FR057A2"){
            var loc = markers_1st_part_8th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_8th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_8th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_8th_2=given_data_first_part_8th_2;
    for (var i = 0; i < markers_1st_part_8th_2.length; i++) {
        if(markers_1st_part_8th_2[i]['Location']=="M/MT/FR057D1" ||markers_1st_part_8th_2[i]['Location']=="M/MT/FR057C1" || markers_1st_part_8th_2[i]['Location']=="M/MT/FR057B1" || markers_1st_part_8th_2[i]['Location']=="M/MT/FR057A1"){
            var loc =markers_1st_part_8th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_8th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_8th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------9th part of first block----------------------------------------------
var markers_1st_part_9th_1=given_data_first_part_9th_1;
    for (var i = 0; i <markers_1st_part_9th_1.length; i++) {
        if(markers_1st_part_9th_1[i]['Location']=="M/MT/FR056D2" || markers_1st_part_9th_1[i]['Location']=="M/MT/FR056C2" ||markers_1st_part_9th_1[i]['Location']=="M/MT/FR056B2" ||markers_1st_part_9th_1[i]['Location']=="M/MT/FR056A2"){
            var loc = markers_1st_part_9th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_9th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_9th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_9th_2=given_data_first_part_9th_2;
    for (var i = 0; i < markers_1st_part_9th_2.length; i++) {
        if(markers_1st_part_9th_2[i]['Location']=="M/MT/FR056D1" ||markers_1st_part_9th_2[i]['Location']=="M/MT/FR056C1" || markers_1st_part_9th_2[i]['Location']=="M/MT/FR056B1" || markers_1st_part_9th_2[i]['Location']=="M/MT/FR056A1"){
            var loc =markers_1st_part_9th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_9th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_9th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------10th part of first block----------------------------------------------
    var markers_1st_part_10th_1=given_data_first_part_10th_1;
    for (var i = 0; i <markers_1st_part_10th_1.length; i++) {
        if(markers_1st_part_10th_1[i]['Location']=="M/MT/FR055D2" || markers_1st_part_10th_1[i]['Location']=="M/MT/FR055C2" ||markers_1st_part_10th_1[i]['Location']=="M/MT/FR055B2" ||markers_1st_part_10th_1[i]['Location']=="M/MT/FR055A2"){
            var loc = markers_1st_part_10th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_10th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_10th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_10th_2=given_data_first_part_10th_2;
    for (var i = 0; i < markers_1st_part_10th_2.length; i++) {
        if(markers_1st_part_10th_2[i]['Location']=="M/MT/FR055D1" ||markers_1st_part_10th_2[i]['Location']=="M/MT/FR055C1" || markers_1st_part_10th_2[i]['Location']=="M/MT/FR055B1" || markers_1st_part_10th_2[i]['Location']=="M/MT/FR055A1"){
            var loc =markers_1st_part_10th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_10th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_10th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------11th part of first block----------------------------------------------
var markers_1st_part_11th_1=given_data_first_part_11th_1;
    for (var i = 0; i <markers_1st_part_11th_1.length; i++) {
        if(markers_1st_part_11th_1[i]['Location']=="M/MT/FR054D2" || markers_1st_part_11th_1[i]['Location']=="M/MT/FR054C2" ||markers_1st_part_11th_1[i]['Location']=="M/MT/FR054B2" ||markers_1st_part_11th_1[i]['Location']=="M/MT/FR054A2"){
            var loc = markers_1st_part_11th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_11th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_11th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_11th_2=given_data_first_part_11th_2;
    for (var i = 0; i < markers_1st_part_11th_2.length; i++) {
        if(markers_1st_part_11th_2[i]['Location']=="M/MT/FR054D1" ||markers_1st_part_11th_2[i]['Location']=="M/MT/FR054C1" || markers_1st_part_11th_2[i]['Location']=="M/MT/FR054B1" || markers_1st_part_11th_2[i]['Location']=="M/MT/FR054A1"){
            var loc =markers_1st_part_11th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_11th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_11th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------12th part of first block----------------------------------------------
    var markers_1st_part_12th_1=given_data_first_part_12th_1;
    for (var i = 0; i <markers_1st_part_12th_1.length; i++) {
        if(markers_1st_part_12th_1[i]['Location']=="M/MT/FR053D2" || markers_1st_part_12th_1[i]['Location']=="M/MT/FR053C2" ||markers_1st_part_12th_1[i]['Location']=="M/MT/FR053B2" ||markers_1st_part_12th_1[i]['Location']=="M/MT/FR053A2"){
            var loc = markers_1st_part_12th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_12th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_12th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_12th_2=given_data_first_part_12th_2;
    for (var i = 0; i < markers_1st_part_12th_2.length; i++) {
        if(markers_1st_part_12th_2[i]['Location']=="M/MT/FR053D1" ||markers_1st_part_12th_2[i]['Location']=="M/MT/FR053C1" || markers_1st_part_12th_2[i]['Location']=="M/MT/FR053B1" || markers_1st_part_12th_2[i]['Location']=="M/MT/FR053A1"){
            var loc =markers_1st_part_12th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_12th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_12th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}




//----------------------------------13th part of first block----------------------------------------------
    var markers_1st_part_13th_1=given_data_first_part_13th_1;
    for (var i = 0; i <markers_1st_part_13th_1.length; i++) {
        if(markers_1st_part_13th_1[i]['Location']=="M/MT/FR052D2" || markers_1st_part_13th_1[i]['Location']=="M/MT/FR052C2" ||markers_1st_part_13th_1[i]['Location']=="M/MT/FR052B2" ||markers_1st_part_13th_1[i]['Location']=="M/MT/FR052A2"){
            var loc = markers_1st_part_13th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_13th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_13th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_13th_2=given_data_first_part_13th_2;
    for (var i = 0; i < markers_1st_part_13th_2.length; i++) {
        if(markers_1st_part_13th_2[i]['Location']=="M/MT/FR052D1" ||markers_1st_part_13th_2[i]['Location']=="M/MT/FR052C1" || markers_1st_part_13th_2[i]['Location']=="M/MT/FR052B1" || markers_1st_part_13th_2[i]['Location']=="M/MT/FR052A1"){
            var loc =markers_1st_part_13th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_13th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_13th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------14th part of first block----------------------------------------------
    var markers_1st_part_14th_1=given_data_first_part_14th_1;
    for (var i = 0; i <markers_1st_part_14th_1.length; i++) {
        if(markers_1st_part_14th_1[i]['Location']=="M/MT/FR051D2" || markers_1st_part_14th_1[i]['Location']=="M/MT/FR051C2" || markers_1st_part_14th_1[i]['Location']=="M/MT/FR051B2" || markers_1st_part_14th_1[i]['Location']=="M/MT/FR051A2"){
            var loc = markers_1st_part_14th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_14th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_14th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_14th_2=given_data_first_part_14th_2;
    for (var i = 0; i < markers_1st_part_14th_2.length; i++) {
        if(markers_1st_part_14th_2[i]['Location']=="M/MT/FR051D1" || markers_1st_part_14th_2[i]['Location']=="M/MT/FR051C1" || markers_1st_part_14th_2[i]['Location']=="M/MT/FR051B1" || markers_1st_part_14th_2[i]['Location']=="M/MT/FR051A1"){
            var loc =markers_1st_part_14th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_14th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_14th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------15th part of first block----------------------------------------------
    var markers_1st_part_15th_1=given_data_first_part_15th_1;
    
    for (var i = 0; i <markers_1st_part_15th_1.length; i++) {
        if(markers_1st_part_15th_1[i]['Location']=="M/MT/FR050D2" || markers_1st_part_15th_1[i]['Location']=="M/MT/FR050C2" || markers_1st_part_15th_1[i]['Location']=="M/MT/FR050B2" || markers_1st_part_15th_1[i]['Location']=="M/MT/FR050A2"){
            var loc = markers_1st_part_15th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_15th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_15th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_15th_2=given_data_first_part_15th_2;
    for (var i = 0; i < markers_1st_part_15th_2.length; i++) {
        if(markers_1st_part_15th_2[i]['Location']=="M/MT/FR050D1" || markers_1st_part_15th_2[i]['Location']=="M/MT/FR050C1" || markers_1st_part_15th_2[i]['Location']=="M/MT/FR050B1" || markers_1st_part_15th_2[i]['Location']=="M/MT/FR050A1"){
            var loc =markers_1st_part_15th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_15th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_15th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------16th part of first block----------------------------------------------
   var markers_1st_part_16th_1=given_data_first_part_16th_1;
    
    for (var i = 0; i <markers_1st_part_16th_1.length; i++) {
        if(markers_1st_part_16th_1[i]['Location']=="M/MT/FR049D2" || markers_1st_part_16th_1[i]['Location']=="M/MT/FR049C2" || markers_1st_part_16th_1[i]['Location']=="M/MT/FR049B2" || markers_1st_part_16th_1[i]['Location']=="M/MT/FR049A2"){
            var loc = markers_1st_part_16th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_16th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_16th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_16th_2=given_data_first_part_16th_2;
    for (var i = 0; i < markers_1st_part_16th_2.length; i++) {
        if(markers_1st_part_16th_2[i]['Location']=="M/MT/FR049D1" || markers_1st_part_16th_2[i]['Location']=="M/MT/FR049C1" || markers_1st_part_16th_2[i]['Location']=="M/MT/FR049B1" || markers_1st_part_16th_2[i]['Location']=="M/MT/FR049A1"){
            var loc =markers_1st_part_16th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_16th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_16th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------17th part of first block----------------------------------------------
   var markers_1st_part_17th_1=given_data_first_part_17th_1;
    
    for (var i = 0; i <markers_1st_part_17th_1.length; i++) {
        if(markers_1st_part_17th_1[i]['Location']=="M/MT/FR048D2" || markers_1st_part_17th_1[i]['Location']=="M/MT/FR048C2" || markers_1st_part_17th_1[i]['Location']=="M/MT/FR048B2" || markers_1st_part_17th_1[i]['Location']=="M/MT/FR048A2"){
            var loc = markers_1st_part_17th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_17th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_17th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_17th_2=given_data_first_part_17th_2;
    for (var i = 0; i < markers_1st_part_17th_2.length; i++) {
        if(markers_1st_part_17th_2[i]['Location']=="M/MT/FR048D1" || markers_1st_part_17th_2[i]['Location']=="M/MT/FR048C1" || markers_1st_part_17th_2[i]['Location']=="M/MT/FR048B1" || markers_1st_part_17th_2[i]['Location']=="M/MT/FR048A1"){
            var loc =markers_1st_part_17th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_17th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_17th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------18th part of first block----------------------------------------------
    var markers_1st_part_18th_1=given_data_first_part_18th_1;
    
    for (var i = 0; i <markers_1st_part_18th_1.length; i++) {
        if(markers_1st_part_18th_1[i]['Location']=="M/MT/FR047D2" ||markers_1st_part_18th_1[i]['Location']=="M/MT/FR047C2" || markers_1st_part_18th_1[i]['Location']=="M/MT/FR047B2" || markers_1st_part_18th_1[i]['Location']=="M/MT/FR047A2"){
            var loc = markers_1st_part_18th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_18th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_18th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_18th_2=given_data_first_part_18th_2;
    for (var i = 0; i < markers_1st_part_18th_2.length; i++) {
        if(markers_1st_part_18th_2[i]['Location']=="M/MT/FR047D1" || markers_1st_part_18th_2[i]['Location']=="M/MT/FR047C1" || markers_1st_part_18th_2[i]['Location']=="M/MT/FR047B1" || markers_1st_part_18th_2[i]['Location']=="M/MT/FR047A1"){
            var loc =markers_1st_part_18th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_18th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_18th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------19th part of first block----------------------------------------------
    var markers_1st_part_19th_1=given_data_first_part_19th_1;
    
    for (var i = 0; i <markers_1st_part_19th_1.length; i++) {
        if(markers_1st_part_19th_1[i]['Location']=="M/MT/FR046D2" ||markers_1st_part_19th_1[i]['Location']=="M/MT/FR046C2" || markers_1st_part_19th_1[i]['Location']=="M/MT/FR046B2" || markers_1st_part_19th_1[i]['Location']=="M/MT/FR046A2"){
            var loc = markers_1st_part_19th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_19th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_19th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_19th_2=given_data_first_part_19th_2;
    for (var i = 0; i < markers_1st_part_19th_2.length; i++) {
        if(markers_1st_part_19th_2[i]['Location']=="M/MT/FR046D1" || markers_1st_part_19th_2[i]['Location']=="M/MT/FR046C1" || markers_1st_part_19th_2[i]['Location']=="M/MT/FR046B1" || markers_1st_part_19th_2[i]['Location']=="M/MT/FR046A1"){
            var loc =markers_1st_part_19th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_19th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_19th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------20th part of first block----------------------------------------------
    var markers_1st_part_20th_1=given_data_first_part_20th_1;
    
    for (var i = 0; i <markers_1st_part_20th_1.length; i++) {
        if(markers_1st_part_20th_1[i]['Location']=="M/MT/FR045D2" ||markers_1st_part_20th_1[i]['Location']=="M/MT/FR045C2" || markers_1st_part_20th_1[i]['Location']=="M/MT/FR045B2" || markers_1st_part_20th_1[i]['Location']=="M/MT/FR045A2"){
            var loc = markers_1st_part_20th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_20th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_20th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_20th_2=given_data_first_part_20th_2;
    for (var i = 0; i < markers_1st_part_20th_2.length; i++) {
        
        if(markers_1st_part_20th_2[i]['Location']=="M/MT/FR045D1" || markers_1st_part_20th_2[i]['Location']=="M/MT/FR045C1" || markers_1st_part_20th_2[i]['Location']=="M/MT/FR045B1" || markers_1st_part_20th_2[i]['Location']=="M/MT/FR045A1"){
            var loc =markers_1st_part_20th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_20th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_20th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------21th part of first block----------------------------------------------
    var markers_1st_part_21th_1=given_data_first_part_21th_1;
    
    for (var i = 0; i <markers_1st_part_21th_1.length; i++) {
        if(markers_1st_part_21th_1[i]['Location']=="M/MT/FR044D2" ||markers_1st_part_21th_1[i]['Location']=="M/MT/FR044C2" || markers_1st_part_21th_1[i]['Location']=="M/MT/FR044B2" || markers_1st_part_21th_1[i]['Location']=="M/MT/FR044A2"){
            var loc = markers_1st_part_21th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_21th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_21th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_21th_2=given_data_first_part_21th_2;
    for (var i = 0; i < markers_1st_part_21th_2.length; i++) {
        
        if(markers_1st_part_21th_2[i]['Location']=="M/MT/FR044D1" || markers_1st_part_21th_2[i]['Location']=="M/MT/FR044C1" || markers_1st_part_21th_2[i]['Location']=="M/MT/FR044B1" || markers_1st_part_21th_2[i]['Location']=="M/MT/FR044A1"){
            var loc =markers_1st_part_21th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_21th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_21th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------22th part of first block----------------------------------------------
    var markers_1st_part_22th_1=given_data_first_part_22th_1;
    
    for (var i = 0; i <markers_1st_part_22th_1.length; i++) {
        if(markers_1st_part_22th_1[i]['Location']=="M/MT/FR043D2" ||markers_1st_part_22th_1[i]['Location']=="M/MT/FR043C2" || markers_1st_part_22th_1[i]['Location']=="M/MT/FR043B2" || markers_1st_part_22th_1[i]['Location']=="M/MT/FR043A2"){
            var loc = markers_1st_part_22th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_22th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_22th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_22th_2=given_data_first_part_22th_2;
    for (var i = 0; i < markers_1st_part_22th_2.length; i++) {
        
        if(markers_1st_part_22th_2[i]['Location']=="M/MT/FR043D1" || markers_1st_part_22th_2[i]['Location']=="M/MT/FR043C1" || markers_1st_part_22th_2[i]['Location']=="M/MT/FR043B1" || markers_1st_part_22th_2[i]['Location']=="M/MT/FR043A1"){
            var loc =markers_1st_part_22th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_22th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_22th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------23th part of first block----------------------------------------------
    var markers_1st_part_23th_1=given_data_first_part_23th_1;
    
    for (var i = 0; i <markers_1st_part_23th_1.length; i++) {
        if(markers_1st_part_23th_1[i]['Location']=="M/MT/FR042D2" ||markers_1st_part_23th_1[i]['Location']=="M/MT/FR042C2" || markers_1st_part_23th_1[i]['Location']=="M/MT/FR042B2" || markers_1st_part_23th_1[i]['Location']=="M/MT/FR042A2"){
            var loc = markers_1st_part_23th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_23th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_23th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_23th_2=given_data_first_part_23th_2;
    for (var i = 0; i < markers_1st_part_23th_2.length; i++) {
        
        if(markers_1st_part_23th_2[i]['Location']=="M/MT/FR042D1" || markers_1st_part_23th_2[i]['Location']=="M/MT/FR042C1" || markers_1st_part_23th_2[i]['Location']=="M/MT/FR042B1" || markers_1st_part_23th_2[i]['Location']=="M/MT/FR042A1"){
            var loc =markers_1st_part_23th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_23th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_23th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------24th part of first block----------------------------------------------
   var markers_1st_part_24th_1=given_data_first_part_24th_1;
    
    for (var i = 0; i <markers_1st_part_24th_1.length; i++) {
        if(markers_1st_part_24th_1[i]['Location']=="M/MT/FR041D2" ||markers_1st_part_24th_1[i]['Location']=="M/MT/FR041C2" || markers_1st_part_24th_1[i]['Location']=="M/MT/FR041B2" || markers_1st_part_24th_1[i]['Location']=="M/MT/FR041A2"){
            var loc = markers_1st_part_24th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_24th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_24th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_24th_2=given_data_first_part_24th_2;
    for (var i = 0; i < markers_1st_part_24th_2.length; i++) {
        
        if(markers_1st_part_24th_2[i]['Location']=="M/MT/FR041D1" || markers_1st_part_24th_2[i]['Location']=="M/MT/FR041C1" || markers_1st_part_24th_2[i]['Location']=="M/MT/FR041B1" || markers_1st_part_24th_2[i]['Location']=="M/MT/FR041A1"){
            var loc =markers_1st_part_24th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_24th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_24th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------25th part of first block----------------------------------------------
    var markers_1st_part_25th_1=given_data_first_part_25th_1;
    
    for (var i = 0; i <markers_1st_part_25th_1.length; i++) {
        if(markers_1st_part_25th_1[i]['Location']=="M/MT/FR040D2" ||markers_1st_part_25th_1[i]['Location']=="M/MT/FR040C2" || markers_1st_part_25th_1[i]['Location']=="M/MT/FR040B2" || markers_1st_part_25th_1[i]['Location']=="M/MT/FR040A2"){
            var loc = markers_1st_part_25th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_25th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_25th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_25th_2=given_data_first_part_25th_2;
    for (var i = 0; i < markers_1st_part_25th_2.length; i++) {
        
        if(markers_1st_part_25th_2[i]['Location']=="M/MT/FR040D1" || markers_1st_part_25th_2[i]['Location']=="M/MT/FR040C1" || markers_1st_part_25th_2[i]['Location']=="M/MT/FR040B1" || markers_1st_part_25th_2[i]['Location']=="M/MT/FR040A1"){
            var loc =markers_1st_part_25th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_25th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_25th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------26th part of first block----------------------------------------------
var markers_1st_part_26th_1=given_data_first_part_26th_1;
    
    for (var i = 0; i <markers_1st_part_26th_1.length; i++) {
        if(markers_1st_part_26th_1[i]['Location']=="M/MT/FR039D2" ||markers_1st_part_26th_1[i]['Location']=="M/MT/FR039C2" || markers_1st_part_26th_1[i]['Location']=="M/MT/FR039B2" || markers_1st_part_26th_1[i]['Location']=="M/MT/FR039A2"){
            var loc = markers_1st_part_26th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_26th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_26th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_26th_2=given_data_first_part_26th_2;
    for (var i = 0; i < markers_1st_part_26th_2.length; i++) {
        
        if(markers_1st_part_26th_2[i]['Location']=="M/MT/FR039D1" || markers_1st_part_26th_2[i]['Location']=="M/MT/FR039C1" || markers_1st_part_26th_2[i]['Location']=="M/MT/FR039B1" || markers_1st_part_26th_2[i]['Location']=="M/MT/FR039A1"){
            var loc =markers_1st_part_26th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_26th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_26th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------27th part of first block----------------------------------------------
var markers_1st_part_27th_1=given_data_first_part_27th_1;
    
    for (var i = 0; i <markers_1st_part_27th_1.length; i++) {
        if(markers_1st_part_27th_1[i]['Location']=="M/MT/FR038D2" ||markers_1st_part_27th_1[i]['Location']=="M/MT/FR038C2" || markers_1st_part_27th_1[i]['Location']=="M/MT/FR038B2" || markers_1st_part_27th_1[i]['Location']=="M/MT/FR038A2"){
            var loc = markers_1st_part_27th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_27th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_27th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_27th_2=given_data_first_part_27th_2;
    for (var i = 0; i < markers_1st_part_27th_2.length; i++) {
        
        if(markers_1st_part_27th_2[i]['Location']=="M/MT/FR038D1" || markers_1st_part_27th_2[i]['Location']=="M/MT/FR038C1" || markers_1st_part_27th_2[i]['Location']=="M/MT/FR038B1" || markers_1st_part_27th_2[i]['Location']=="M/MT/FR038A1"){
            var loc =markers_1st_part_27th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_27th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_27th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------28th part of first block----------------------------------------------
    var markers_1st_part_28th_1=given_data_first_part_28th_1;
    
    for (var i = 0; i <markers_1st_part_28th_1.length; i++) {
        if(markers_1st_part_28th_1[i]['Location']=="M/MT/FR037D2" ||markers_1st_part_28th_1[i]['Location']=="M/MT/FR037C2" || markers_1st_part_28th_1[i]['Location']=="M/MT/FR037B2" || markers_1st_part_28th_1[i]['Location']=="M/MT/FR037A2"){
            var loc = markers_1st_part_28th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_28th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_28th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_28th_2=given_data_first_part_28th_2;
    for (var i = 0; i < markers_1st_part_28th_2.length; i++) {
        
        if(markers_1st_part_28th_2[i]['Location']=="M/MT/FR037D1" || markers_1st_part_28th_2[i]['Location']=="M/MT/FR037C1" || markers_1st_part_28th_2[i]['Location']=="M/MT/FR037B1" || markers_1st_part_28th_2[i]['Location']=="M/MT/FR037A1"){
            var loc =markers_1st_part_28th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_28th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_28th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------29th part of first block----------------------------------------------
    var markers_1st_part_29th_1=given_data_first_part_29th_1;
    
    for (var i = 0; i <markers_1st_part_29th_1.length; i++) {
        if(markers_1st_part_29th_1[i]['Location']=="M/MT/FR036D2" ||markers_1st_part_29th_1[i]['Location']=="M/MT/FR036C2" || markers_1st_part_29th_1[i]['Location']=="M/MT/FR036B2" || markers_1st_part_29th_1[i]['Location']=="M/MT/FR036A2"){
            var loc = markers_1st_part_29th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_29th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_29th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_29th_2=given_data_first_part_29th_2;
    for (var i = 0; i < markers_1st_part_29th_2.length; i++) {
        
        if(markers_1st_part_29th_2[i]['Location']=="M/MT/FR036D1" || markers_1st_part_29th_2[i]['Location']=="M/MT/FR036C1" || markers_1st_part_29th_2[i]['Location']=="M/MT/FR036B1" || markers_1st_part_29th_2[i]['Location']=="M/MT/FR036A1"){
            var loc =markers_1st_part_29th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_29th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_29th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------30th part of first block----------------------------------------------
    var markers_1st_part_30th_1=given_data_first_part_30th_1;
    
    for (var i = 0; i <markers_1st_part_30th_1.length; i++) {
        if(markers_1st_part_30th_1[i]['Location']=="M/MT/FR035D2" ||markers_1st_part_30th_1[i]['Location']=="M/MT/FR035C2" || markers_1st_part_30th_1[i]['Location']=="M/MT/FR035B2" || markers_1st_part_30th_1[i]['Location']=="M/MT/FR035A2"){
            var loc = markers_1st_part_30th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_30th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_30th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_30th_2=given_data_first_part_30th_2;
    for (var i = 0; i < markers_1st_part_30th_2.length; i++) {
        
        if(markers_1st_part_30th_2[i]['Location']=="M/MT/FR035D1" || markers_1st_part_30th_2[i]['Location']=="M/MT/FR035C1" || markers_1st_part_30th_2[i]['Location']=="M/MT/FR035B1" || markers_1st_part_30th_2[i]['Location']=="M/MT/FR035A1"){
            var loc =markers_1st_part_30th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_30th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_30th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------31th part of first block----------------------------------------------
var markers_1st_part_31th_1=given_data_first_part_31th_1;
    
    for (var i = 0; i <markers_1st_part_31th_1.length; i++) {
        if(markers_1st_part_31th_1[i]['Location']=="M/MT/FR034D2" ||markers_1st_part_31th_1[i]['Location']=="M/MT/FR034C2" || markers_1st_part_31th_1[i]['Location']=="M/MT/FR034B2" || markers_1st_part_31th_1[i]['Location']=="M/MT/FR034A2"){
            var loc = markers_1st_part_31th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_31th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_31th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_31th_2=given_data_first_part_31th_2;
    for (var i = 0; i < markers_1st_part_31th_2.length; i++) {
        
        if(markers_1st_part_31th_2[i]['Location']=="M/MT/FR034D1" || markers_1st_part_31th_2[i]['Location']=="M/MT/FR034C1" || markers_1st_part_31th_2[i]['Location']=="M/MT/FR034B1" || markers_1st_part_31th_2[i]['Location']=="M/MT/FR034A1"){
            var loc =markers_1st_part_31th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_31th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_31th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}

//----------------------------------32th part of first block----------------------------------------------
    var markers_1st_part_32th_1=given_data_first_part_32th_1;
    
    for (var i = 0; i <markers_1st_part_32th_1.length; i++) {
        if(markers_1st_part_32th_1[i]['Location']=="M/MT/FR033D2" ||markers_1st_part_32th_1[i]['Location']=="M/MT/FR033C2" || markers_1st_part_32th_1[i]['Location']=="M/MT/FR033B2" || markers_1st_part_32th_1[i]['Location']=="M/MT/FR033A2"){
            var loc = markers_1st_part_32th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_32th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_32th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_32th_2=given_data_first_part_32th_2;
    for (var i = 0; i < markers_1st_part_32th_2.length; i++) {
        
        if(markers_1st_part_32th_2[i]['Location']=="M/MT/FR033D1" || markers_1st_part_32th_2[i]['Location']=="M/MT/FR033C1" || markers_1st_part_32th_2[i]['Location']=="M/MT/FR033B1" || markers_1st_part_32th_2[i]['Location']=="M/MT/FR033A1"){
            var loc =markers_1st_part_32th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_32th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_32th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}




//----------------------------------33th part of first block----------------------------------------------
    var markers_1st_part_33th_1=given_data_first_part_33th_1;
    
    for (var i = 0; i <markers_1st_part_33th_1.length; i++) {
        if(markers_1st_part_33th_1[i]['Location']=="M/MT/FR032D2" ||markers_1st_part_33th_1[i]['Location']=="M/MT/FR032C2" || markers_1st_part_33th_1[i]['Location']=="M/MT/FR032B2" || markers_1st_part_33th_1[i]['Location']=="M/MT/FR032A2"){
            var loc = markers_1st_part_33th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_33th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_33th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_1st_part_33th_2=given_data_first_part_33th_2;
    for (var i = 0; i < markers_1st_part_33th_2.length; i++) {
        
        if(markers_1st_part_33th_2[i]['Location']=="M/MT/FR032D1" || markers_1st_part_33th_2[i]['Location']=="M/MT/FR032C1" || markers_1st_part_33th_2[i]['Location']=="M/MT/FR032B1" || markers_1st_part_33th_2[i]['Location']=="M/MT/FR032A1"){
            var loc =markers_1st_part_33th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_1st_part_33th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_1st_part_33th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}




//----------------------------------filling 7th block small boxes-----------------------------------
//----------------------------------1th part of 7th block----------------------------------------------
var markers_7th_part_1st_1=given_data_seventh_part_1st_1;
    
    for (var i = 0; i <markers_7th_part_1st_1.length; i++) {
        if(markers_7th_part_1st_1[i]['Location']=="M/MT/FR029D2" ||markers_7th_part_1st_1[i]['Location']=="M/MT/FR029C2" || markers_7th_part_1st_1[i]['Location']=="M/MT/FR029B2" || markers_7th_part_1st_1[i]['Location']=="M/MT/FR029A2"){
            var loc = markers_7th_part_1st_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_1st_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_1st_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_7th_part_1st_2=given_data_seventh_part_1st_2;
    for (var i = 0; i < markers_7th_part_1st_2.length; i++) {
        
        if(markers_7th_part_1st_2[i]['Location']=="M/MT/FR029D1" || markers_7th_part_1st_2[i]['Location']=="M/MT/FR029C1" || markers_7th_part_1st_2[i]['Location']=="M/MT/FR029B1" || markers_7th_part_1st_2[i]['Location']=="M/MT/FR029A1"){
            var loc =markers_7th_part_1st_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_1st_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_1st_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}




//----------------------------------2nd part of 7th block----------------------------------------------
  var markers_7th_part_2nd_1=given_data_seventh_part_2nd_1;
    
    for (var i = 0; i <markers_7th_part_2nd_1.length; i++) {
        if(markers_7th_part_2nd_1[i]['Location']=="M/MT/FR028D2" ||markers_7th_part_2nd_1[i]['Location']=="M/MT/FR028C2" || markers_7th_part_2nd_1[i]['Location']=="M/MT/FR028B2" || markers_7th_part_2nd_1[i]['Location']=="M/MT/FR028A2"){
            var loc = markers_7th_part_1st_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_2nd_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_2nd_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_7th_part_2nd_2=given_data_seventh_part_2nd_2;
    for (var i = 0; i < markers_7th_part_2nd_2.length; i++) {
        
        if(markers_7th_part_2nd_2[i]['Location']=="M/MT/FR028D1" || markers_7th_part_2nd_2[i]['Location']=="M/MT/FR028C1" || markers_7th_part_2nd_2[i]['Location']=="M/MT/FR028B1" || markers_7th_part_2nd_2[i]['Location']=="M/MT/FR028A1"){
            var loc =markers_7th_part_2nd_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_2nd_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_2nd_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------3rd part of 7th block----------------------------------------------
   var markers_7th_part_3rd_1=given_data_seventh_part_3rd_1;
    
    for (var i = 0; i <markers_7th_part_3rd_1.length; i++) {
        if(markers_7th_part_3rd_1[i]['Location']=="M/MT/FR027D2" ||markers_7th_part_3rd_1[i]['Location']=="M/MT/FR027C2" || markers_7th_part_3rd_1[i]['Location']=="M/MT/FR027B2" || markers_7th_part_3rd_1[i]['Location']=="M/MT/FR027A2"){
            var loc = markers_7th_part_3rd_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_3rd_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_3rd_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_7th_part_3rd_2=given_data_seventh_part_3rd_2;
    for (var i = 0; i < markers_7th_part_3rd_2.length; i++) {
        
        if(markers_7th_part_3rd_2[i]['Location']=="M/MT/FR027D1" || markers_7th_part_3rd_2[i]['Location']=="M/MT/FR027C1" || markers_7th_part_3rd_2[i]['Location']=="M/MT/FR027B1" || markers_7th_part_3rd_2[i]['Location']=="M/MT/FR027A1"){
            var loc =markers_7th_part_3rd_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_3rd_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_3rd_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}





//----------------------------------4th part of 7th block----------------------------------------------
    var markers_7th_part_4th_1=given_data_seventh_part_4th_1;
    
    for (var i = 0; i <markers_7th_part_4th_1.length; i++) {
        if(markers_7th_part_4th_1[i]['Location']=="M/MT/FR026D2" ||markers_7th_part_4th_1[i]['Location']=="M/MT/FR026C2" || markers_7th_part_4th_1[i]['Location']=="M/MT/FR026B2" || markers_7th_part_4th_1[i]['Location']=="M/MT/FR026A2"){
            var loc = markers_7th_part_4th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_4th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_4th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_7th_part_4th_2=given_data_seventh_part_4th_2;
    for (var i = 0; i < markers_7th_part_4th_2.length; i++) {
        
        if(markers_7th_part_4th_2[i]['Location']=="M/MT/FR026D1" || markers_7th_part_4th_2[i]['Location']=="M/MT/FR026C1" || markers_7th_part_4th_2[i]['Location']=="M/MT/FR026B1" || markers_7th_part_4th_2[i]['Location']=="M/MT/FR026A1"){
            var loc =markers_7th_part_4th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_4th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_4th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}


//----------------------------------5th part of 7th block----------------------------------------------
    var markers_7th_part_5th_1=given_data_seventh_part_5th_1;
    
    for (var i = 0; i <markers_7th_part_5th_1.length; i++) {
        if(markers_7th_part_5th_1[i]['Location']=="M/MT/FR025D2" ||markers_7th_part_5th_1[i]['Location']=="M/MT/FR025C2" || markers_7th_part_5th_1[i]['Location']=="M/MT/FR025B2" || markers_7th_part_5th_1[i]['Location']=="M/MT/FR025A2"){
            var loc = markers_7th_part_5th_1[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_5th_1[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_5th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
    }


    var markers_7th_part_5th_2=given_data_seventh_part_5th_2;
    for (var i = 0; i < markers_7th_part_5th_2.length; i++) {
        
        if(markers_7th_part_5th_2[i]['Location']=="M/MT/FR025D1" || markers_7th_part_5th_2[i]['Location']=="M/MT/FR025C1" ||markers_7th_part_5th_2[i]['Location']=="M/MT/FR025B1" || markers_7th_part_5th_2[i]['Location']=="M/MT/FR025A1"){
            var loc =markers_7th_part_5th_2[i]['Location'].slice(-2);

            var LeafIcon = L.Icon.extend({
                options: {
                    iconSize: [13, 6],

                    }
            });
            x_val=markers_7th_part_5th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_5th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;


            }
}



//----------------------------------6th part of 7th block----------------------------------------------
    var markers_7th_part_6th_1=given_data_seventh_part_6th_1;
    for (var i = 0; i <markers_7th_part_6th_1.length; i++) {
        if(markers_7th_part_6th_1[i]['Location']=="M/MT/FR024D2" ||markers_7th_part_6th_1[i]['Location']=="M/MT/FR024C2" || markers_7th_part_6th_1[i]['Location']=="M/MT/FR024B2" || markers_7th_part_6th_1[i]['Location']=="M/MT/FR024A2"){
            var loc = markers_7th_part_6th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_6th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_6th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_6th_2=given_data_seventh_part_6th_2;
    for (var i = 0; i < markers_7th_part_6th_2.length; i++) {
        if(markers_7th_part_6th_2[i]['Location']=="M/MT/FR024D1" || markers_7th_part_6th_2[i]['Location']=="M/MT/FR024C1" ||markers_7th_part_6th_2[i]['Location']=="M/MT/FR024B1" || markers_7th_part_6th_2[i]['Location']=="M/MT/FR024A1"){
            var loc =markers_7th_part_5th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_6th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_6th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------7th part of 7th block----------------------------------------------
    var markers_7th_part_7th_1=given_data_seventh_part_7th_1;
    for (var i = 0; i <markers_7th_part_7th_1.length; i++) {
        if(markers_7th_part_7th_1[i]['Location']=="M/MT/FR023D2" ||markers_7th_part_7th_1[i]['Location']=="M/MT/FR023C2" || markers_7th_part_7th_1[i]['Location']=="M/MT/FR023B2" || markers_7th_part_7th_1[i]['Location']=="M/MT/FR023A2"){
            var loc = markers_7th_part_7th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_7th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_7th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_7th_2=given_data_seventh_part_7th_2;
    for (var i = 0; i < markers_7th_part_7th_2.length; i++) {
        if(markers_7th_part_7th_2[i]['Location']=="M/MT/FR023D1" || markers_7th_part_7th_2[i]['Location']=="M/MT/FR023C1" || markers_7th_part_7th_2[i]['Location']=="M/MT/FR023B1" || markers_7th_part_7th_2[i]['Location']=="M/MT/FR023A1"){
            var loc =markers_7th_part_7th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_7th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_7th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------8th part of 7th block----------------------------------------------
var markers_7th_part_8th_1=given_data_seventh_part_8th_1;
    for (var i = 0; i <markers_7th_part_8th_1.length; i++) {
        if(markers_7th_part_8th_1[i]['Location']=="M/MT/FR022D2" ||markers_7th_part_8th_1[i]['Location']=="M/MT/FR022C2" || markers_7th_part_8th_1[i]['Location']=="M/MT/FR022B2" || markers_7th_part_8th_1[i]['Location']=="M/MT/FR022A2"){
            var loc = markers_7th_part_8th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_8th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_8th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_8th_2=given_data_seventh_part_8th_2;
    for (var i = 0; i < markers_7th_part_8th_2.length; i++) {
        if(markers_7th_part_8th_2[i]['Location']=="M/MT/FR022D1" || markers_7th_part_8th_2[i]['Location']=="M/MT/FR022C1" || markers_7th_part_8th_2[i]['Location']=="M/MT/FR022B1" || markers_7th_part_8th_2[i]['Location']=="M/MT/FR022A1"){
            var loc =markers_7th_part_8th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_8th_2[i]["marker_position"];
            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_8th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------9th part of 7th block----------------------------------------------
    var markers_7th_part_9th_1=given_data_seventh_part_9th_1;
    for (var i = 0; i <markers_7th_part_9th_1.length; i++) {
        if(markers_7th_part_9th_1[i]['Location']=="M/MT/FR021D2" ||markers_7th_part_9th_1[i]['Location']=="M/MT/FR021C2" || markers_7th_part_9th_1[i]['Location']=="M/MT/FR021B2" || markers_7th_part_9th_1[i]['Location']=="M/MT/FR021A2"){
            var loc = markers_7th_part_9th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_9th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_9th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_9th_2=given_data_seventh_part_9th_2;
    for (var i = 0; i < markers_7th_part_9th_2.length; i++) {
        if(markers_7th_part_9th_2[i]['Location']=="M/MT/FR021D1" || markers_7th_part_9th_2[i]['Location']=="M/MT/FR021C1" || markers_7th_part_9th_2[i]['Location']=="M/MT/FR021B1" ||markers_7th_part_9th_2[i]['Location']=="M/MT/FR021A1"){
            var loc =markers_7th_part_9th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_9th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_9th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------10th part of 7th block----------------------------------------------
    var markers_7th_part_10th_1=given_data_seventh_part_10th_1;
    for (var i = 0; i <markers_7th_part_10th_1.length; i++) {
        if(markers_7th_part_10th_1[i]['Location']=="M/MT/FR020D2" ||markers_7th_part_10th_1[i]['Location']=="M/MT/FR020C2" || markers_7th_part_10th_1[i]['Location']=="M/MT/FR020B2" || markers_7th_part_10th_1[i]['Location']=="M/MT/FR020A2"){
            var loc = markers_7th_part_10th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_10th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_10th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_10th_2=given_data_seventh_part_10th_2;
    for (var i = 0; i < markers_7th_part_10th_2.length; i++) {
        if(markers_7th_part_10th_2[i]['Location']=="M/MT/FR020D1" || markers_7th_part_10th_2[i]['Location']=="M/MT/FR020C1" || markers_7th_part_10th_2[i]['Location']=="M/MT/FR020B1" ||markers_7th_part_10th_2[i]['Location']=="M/MT/FR020A1"){
            var loc =markers_7th_part_10th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_10th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_10th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------11th part of 7th block----------------------------------------------
    var markers_7th_part_11th_1=given_data_seventh_part_11th_1;
    for (var i = 0; i <markers_7th_part_11th_1.length; i++) {
        if(markers_7th_part_11th_1[i]['Location']=="M/MT/FR019D2" ||markers_7th_part_11th_1[i]['Location']=="M/MT/FR019C2" || markers_7th_part_11th_1[i]['Location']=="M/MT/FR019B2" || markers_7th_part_11th_1[i]['Location']=="M/MT/FR019A2"){
            var loc = markers_7th_part_11th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_11th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_11th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_11th_2=given_data_seventh_part_11th_2;
    for (var i = 0; i < markers_7th_part_11th_2.length; i++) {
        if(markers_7th_part_11th_2[i]['Location']=="M/MT/FR019D1" ||markers_7th_part_11th_2[i]['Location']=="M/MT/FR019C1" || markers_7th_part_11th_2[i]['Location']=="M/MT/FR019B1" ||markers_7th_part_11th_2[i]['Location']=="M/MT/FR019A1"){
            var loc =markers_7th_part_11th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_11th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_11th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------12th part of 7th block----------------------------------------------
    var markers_7th_part_12th_1=given_data_seventh_part_12th_1;
    for (var i = 0; i <markers_7th_part_12th_1.length; i++) {
        if(markers_7th_part_12th_1[i]['Location']=="M/MT/FR018D2" ||markers_7th_part_12th_1[i]['Location']=="M/MT/FR018C2" || markers_7th_part_12th_1[i]['Location']=="M/MT/FR018B2" || markers_7th_part_12th_1[i]['Location']=="M/MT/FR018A2"){
            var loc = markers_7th_part_11th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_12th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_12th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_12th_2=given_data_seventh_part_12th_2;
    for (var i = 0; i < markers_7th_part_12th_2.length; i++) {
        if(markers_7th_part_12th_2[i]['Location']=="M/MT/FR018D1" ||markers_7th_part_12th_2[i]['Location']=="M/MT/FR018C1" || markers_7th_part_12th_2[i]['Location']=="M/MT/FR018B1" ||markers_7th_part_12th_2[i]['Location']=="M/MT/FR018A1"){
            var loc =markers_7th_part_12th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_12th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_12th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------13th part of 7th block----------------------------------------------
    var markers_7th_part_13th_1=given_data_seventh_part_13th_1;
    for (var i = 0; i <markers_7th_part_13th_1.length; i++) {
        if(markers_7th_part_13th_1[i]['Location']=="M/MT/FR017D2" ||markers_7th_part_13th_1[i]['Location']=="M/MT/FR017C2" || markers_7th_part_13th_1[i]['Location']=="M/MT/FR017B2" || markers_7th_part_13th_1[i]['Location']=="M/MT/FR017A2"){
            var loc = markers_7th_part_13th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_13th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_13th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_13th_2=given_data_seventh_part_13th_2;
    for (var i = 0; i < markers_7th_part_13th_2.length; i++) {
        if(markers_7th_part_13th_2[i]['Location']=="M/MT/FR017D1" ||markers_7th_part_13th_2[i]['Location']=="M/MT/FR017C1" ||markers_7th_part_13th_2[i]['Location']=="M/MT/FR017B1" ||markers_7th_part_13th_2[i]['Location']=="M/MT/FR017A1"){
            var loc =markers_7th_part_13th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_13th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_13th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------14th part of 7th block----------------------------------------------
    var markers_7th_part_14th_1=given_data_seventh_part_14th_1;
    for (var i = 0; i <markers_7th_part_14th_1.length; i++) {
        if(markers_7th_part_14th_1[i]['Location']=="M/MT/FR016D2" ||markers_7th_part_14th_1[i]['Location']=="M/MT/FR016C2" || markers_7th_part_14th_1[i]['Location']=="M/MT/FR016B2" || markers_7th_part_14th_1[i]['Location']=="M/MT/FR016A2"){
            var loc = markers_7th_part_14th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_14th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_14th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_14th_2=given_data_seventh_part_14th_2;
    for (var i = 0; i < markers_7th_part_14th_2.length; i++) {
        if(markers_7th_part_14th_2[i]['Location']=="M/MT/FR016D1" ||markers_7th_part_14th_2[i]['Location']=="M/MT/FR016C1" ||markers_7th_part_14th_2[i]['Location']=="M/MT/FR016B1" ||markers_7th_part_14th_2[i]['Location']=="M/MT/FR016A1"){
            var loc =markers_7th_part_14th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_14th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_14th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------15th part of 7th block----------------------------------------------
    var markers_7th_part_15th_1=given_data_seventh_part_15th_1;
    for (var i = 0; i <markers_7th_part_15th_1.length; i++) {
        if(markers_7th_part_15th_1[i]['Location']=="M/MT/FR015D2" ||markers_7th_part_15th_1[i]['Location']=="M/MT/FR015C2" || markers_7th_part_15th_1[i]['Location']=="M/MT/FR015B2" || markers_7th_part_15th_1[i]['Location']=="M/MT/FR015A2"){
            var loc = markers_7th_part_15th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_15th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_15th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_15th_2=given_data_seventh_part_15th_2;
    for (var i = 0; i < markers_7th_part_15th_2.length; i++) {
        if(markers_7th_part_15th_2[i]['Location']=="M/MT/FR015D1" || markers_7th_part_15th_2[i]['Location']=="M/MT/FR015C1" || markers_7th_part_15th_2[i]['Location']=="M/MT/FR015B1" || markers_7th_part_15th_2[i]['Location']=="M/MT/FR015A1"){
            var loc = markers_7th_part_15th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_15th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_15th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------16th part of 7th block----------------------------------------------
    var markers_7th_part_16th_1=given_data_seventh_part_16th_1;
    for (var i = 0; i <markers_7th_part_16th_1.length; i++) {
        if(markers_7th_part_16th_1[i]['Location']=="M/MT/FR014D2" ||markers_7th_part_16th_1[i]['Location']=="M/MT/FR014C2" || markers_7th_part_16th_1[i]['Location']=="M/MT/FR014B2" || markers_7th_part_16th_1[i]['Location']=="M/MT/FR014A2"){
            var loc = markers_7th_part_16th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_16th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_16th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_16th_2=given_data_seventh_part_16th_2;
    for (var i = 0; i < markers_7th_part_16th_2.length; i++) {
        if(markers_7th_part_16th_2[i]['Location']=="M/MT/FR014D1" || markers_7th_part_16th_2[i]['Location']=="M/MT/FR014C1" || markers_7th_part_16th_2[i]['Location']=="M/MT/FR014B1" || markers_7th_part_16th_2[i]['Location']=="M/MT/FR014A1"){
            var loc = markers_7th_part_16th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_16th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_16th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------17th part of 7th block----------------------------------------------
    var markers_7th_part_17th_1=given_data_seventh_part_17th_1;
    for (var i = 0; i <markers_7th_part_17th_1.length; i++) {
        if(markers_7th_part_17th_1[i]['Location']=="M/MT/FR013D2" ||markers_7th_part_17th_1[i]['Location']=="M/MT/FR013C2" || markers_7th_part_17th_1[i]['Location']=="M/MT/FR013B2" || markers_7th_part_17th_1[i]['Location']=="M/MT/FR013A2"){
            var loc = markers_7th_part_17th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_17th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_17th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_17th_2=given_data_seventh_part_17th_2;
    for (var i = 0; i < markers_7th_part_17th_2.length; i++) {
        if(markers_7th_part_17th_2[i]['Location']=="M/MT/FR013D1" || markers_7th_part_17th_2[i]['Location']=="M/MT/FR013C1" || markers_7th_part_17th_2[i]['Location']=="M/MT/FR013B1" || markers_7th_part_17th_2[i]['Location']=="M/MT/FR013A1"){
            var loc = markers_7th_part_17th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_17th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_17th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}

//----------------------------------18th part of 7th block----------------------------------------------
    var markers_7th_part_18th_1=given_data_seventh_part_18th_1;
    for (var i = 0; i <markers_7th_part_18th_1.length; i++) {
        if(markers_7th_part_18th_1[i]['Location']=="M/MT/FR012D2" ||markers_7th_part_18th_1[i]['Location']=="M/MT/FR012C2" || markers_7th_part_18th_1[i]['Location']=="M/MT/FR012B2" || markers_7th_part_18th_1[i]['Location']=="M/MT/FR012A2"){
            var loc = markers_7th_part_18th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_18th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_18th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_18th_2=given_data_seventh_part_18th_2;
    for (var i = 0; i < markers_7th_part_18th_2.length; i++) {
        if(markers_7th_part_18th_2[i]['Location']=="M/MT/FR012D1" || markers_7th_part_18th_2[i]['Location']=="M/MT/FR012C1" || markers_7th_part_18th_2[i]['Location']=="M/MT/FR012B1" || markers_7th_part_18th_2[i]['Location']=="M/MT/FR012A1"){
            var loc = markers_7th_part_18th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_18th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_18th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------19th part of 7th block----------------------------------------------
    var markers_7th_part_19th_1=given_data_seventh_part_19th_1;
    for (var i = 0; i <markers_7th_part_19th_1.length; i++) {
        if(markers_7th_part_19th_1[i]['Location']=="M/MT/FR011D2" ||markers_7th_part_19th_1[i]['Location']=="M/MT/FR011C2" || markers_7th_part_19th_1[i]['Location']=="M/MT/FR011B2" || markers_7th_part_19th_1[i]['Location']=="M/MT/FR011A2"){
            var loc = markers_7th_part_19th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_19th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_19th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_19th_2=given_data_seventh_part_19th_2;
    for (var i = 0; i < markers_7th_part_19th_2.length; i++) {
        if(markers_7th_part_19th_2[i]['Location']=="M/MT/FR011D1" || markers_7th_part_19th_2[i]['Location']=="M/MT/FR011C1" || markers_7th_part_19th_2[i]['Location']=="M/MT/FR011B1" || markers_7th_part_19th_2[i]['Location']=="M/MT/FR011A1"){
            var loc = markers_7th_part_19th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_19th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_19th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------20th part of 7th block----------------------------------------------
    var markers_7th_part_20th_1=given_data_seventh_part_20th_1;
    for (var i = 0; i <markers_7th_part_20th_1.length; i++) {
        if(markers_7th_part_20th_1[i]['Location']=="M/MT/FR010D2" || markers_7th_part_20th_1[i]['Location']=="M/MT/FR010C2" || markers_7th_part_20th_1[i]['Location']=="M/MT/FR010B2" || markers_7th_part_20th_1[i]['Location']=="M/MT/FR010A2"){
            var loc = markers_7th_part_20th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_20th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_20th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_20th_2=given_data_seventh_part_20th_2;
    for (var i = 0; i < markers_7th_part_20th_2.length; i++) {
        if(markers_7th_part_20th_2[i]['Location']=="M/MT/FR010D1" || markers_7th_part_20th_2[i]['Location']=="M/MT/FR010C1" || markers_7th_part_20th_2[i]['Location']=="M/MT/FR010B1" || markers_7th_part_20th_2[i]['Location']=="M/MT/FR010A1"){
            var loc = markers_7th_part_20th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_20th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =markers_7th_part_20th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------21th part of 7th block----------------------------------------------
    var markers_7th_part_21th_1=given_data_seventh_part_21th_1;
    for (var i = 0; i <markers_7th_part_21th_1.length; i++) {
        if(markers_7th_part_21th_1[i]['Location']=="M/MT/FR009D2" || markers_7th_part_21th_1[i]['Location']=="M/MT/FR009C2" || markers_7th_part_21th_1[i]['Location']=="M/MT/FR009B2" || markers_7th_part_21th_1[i]['Location']=="M/MT/FR009A2"){
            var loc = markers_7th_part_21th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_21th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_21th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_21th_2=given_data_seventh_part_21th_2;
    for (var i = 0; i < markers_7th_part_21th_2.length; i++) {
        if(markers_7th_part_21th_2[i]['Location']=="M/MT/FR009D1" || markers_7th_part_21th_2[i]['Location']=="M/MT/FR009C1" || markers_7th_part_21th_2[i]['Location']=="M/MT/FR009B1" || markers_7th_part_21th_2[i]['Location']=="M/MT/FR009A1"){
            var loc = markers_7th_part_21th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_21th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =markers_7th_part_21th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}




//----------------------------------22th part of 7th block----------------------------------------------
    var markers_7th_part_22th_1=given_data_seventh_part_22th_1;
    for (var i = 0; i <markers_7th_part_22th_1.length; i++) {
        if(markers_7th_part_22th_1[i]['Location']=="M/MT/FR008D2" || markers_7th_part_22th_1[i]['Location']=="M/MT/FR008C2" || markers_7th_part_22th_1[i]['Location']=="M/MT/FR008B2" || markers_7th_part_22th_1[i]['Location']=="M/MT/FR008A2"){
            var loc = markers_7th_part_22th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_22th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_22th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_22th_2=given_data_seventh_part_22th_2;
    for (var i = 0; i < markers_7th_part_22th_2.length; i++) {
        if(markers_7th_part_22th_2[i]['Location']=="M/MT/FR008D1" || markers_7th_part_22th_2[i]['Location']=="M/MT/FR008C1" || markers_7th_part_22th_2[i]['Location']=="M/MT/FR008B1" || markers_7th_part_22th_2[i]['Location']=="M/MT/FR008A1"){
            var loc = markers_7th_part_22th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_22th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =markers_7th_part_22th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------23th part of 7th block----------------------------------------------
    var markers_7th_part_23th_1=given_data_seventh_part_23th_1;
    for (var i = 0; i <markers_7th_part_23th_1.length; i++) {
        if(markers_7th_part_23th_1[i]['Location']=="M/MT/FR007D2" || markers_7th_part_23th_1[i]['Location']=="M/MT/FR007C2" || markers_7th_part_23th_1[i]['Location']=="M/MT/FR007B2" || markers_7th_part_23th_1[i]['Location']=="M/MT/FR007A2"){
            var loc = markers_7th_part_23th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_23th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_23th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_23th_2=given_data_seventh_part_23th_2;
    for (var i = 0; i < markers_7th_part_23th_2.length; i++) {
        if(markers_7th_part_23th_2[i]['Location']=="M/MT/FR007D1" || markers_7th_part_23th_2[i]['Location']=="M/MT/FR007C1" || markers_7th_part_23th_2[i]['Location']=="M/MT/FR007B1" || markers_7th_part_23th_2[i]['Location']=="M/MT/FR007A1"){
            var loc = markers_7th_part_23th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=markers_7th_part_23th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =markers_7th_part_23th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------24th part of 7th block----------------------------------------------
    var markers_7th_part_24th_1=given_data_seventh_part_24th_1;
    for (var i = 0; i <markers_7th_part_24th_1.length; i++) {
        if(markers_7th_part_24th_1[i]['Location']=="M/MT/FR006D2" || markers_7th_part_24th_1[i]['Location']=="M/MT/FR006C2" || markers_7th_part_24th_1[i]['Location']=="M/MT/FR006B2" || markers_7th_part_24th_1[i]['Location']=="M/MT/FR006A2"){
            var loc = markers_7th_part_24th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_24th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_24th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_24th_2=given_data_seventh_part_24th_2;
    for (var i = 0; i <  markers_7th_part_24th_2.length; i++) {
        if( markers_7th_part_24th_2[i]['Location']=="M/MT/FR006D1" ||  markers_7th_part_24th_2[i]['Location']=="M/MT/FR006C1" ||  markers_7th_part_24th_2[i]['Location']=="M/MT/FR006B1" ||  markers_7th_part_24th_2[i]['Location']=="M/MT/FR006A1"){
            var loc =  markers_7th_part_24th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val= markers_7th_part_24th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_24th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------25th part of 7th block----------------------------------------------
    var markers_7th_part_25th_1=given_data_seventh_part_25th_1;
    for (var i = 0; i <markers_7th_part_25th_1.length; i++) {
        if(markers_7th_part_25th_1[i]['Location']=="M/MT/FR005D2" || markers_7th_part_25th_1[i]['Location']=="M/MT/FR005C2" || markers_7th_part_25th_1[i]['Location']=="M/MT/FR005B2" || markers_7th_part_25th_1[i]['Location']=="M/MT/FR005A2"){
            var loc = markers_7th_part_25th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_25th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_25th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_25th_2=given_data_seventh_part_25th_2;
    for (var i = 0; i <  markers_7th_part_25th_2.length; i++) {
        if( markers_7th_part_25th_2[i]['Location']=="M/MT/FR005D1" ||  markers_7th_part_25th_2[i]['Location']=="M/MT/FR005C1" ||  markers_7th_part_25th_2[i]['Location']=="M/MT/FR005B1" || markers_7th_part_25th_2[i]['Location']=="M/MT/FR005A1"){
            var loc =  markers_7th_part_25th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val= markers_7th_part_25th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_25th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}

//----------------------------------26th part of 7th block----------------------------------------------
    var markers_7th_part_26th_1=given_data_seventh_part_26th_1;
    for (var i = 0; i <markers_7th_part_26th_1.length; i++) {
        if(markers_7th_part_26th_1[i]['Location']=="M/MT/FR004D2" || markers_7th_part_26th_1[i]['Location']=="M/MT/FR004C2" || markers_7th_part_26th_1[i]['Location']=="M/MT/FR004B2" || markers_7th_part_26th_1[i]['Location']=="M/MT/FR004A2"){
            var loc = markers_7th_part_26th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_26th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_26th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_26th_2=given_data_seventh_part_26th_2;
    for (var i = 0; i <  markers_7th_part_26th_2.length; i++) {
        if( markers_7th_part_26th_2[i]['Location']=="M/MT/FR004D1" ||  markers_7th_part_26th_2[i]['Location']=="M/MT/FR004C1" ||  markers_7th_part_26th_2[i]['Location']=="M/MT/FR004B1" || markers_7th_part_26th_2[i]['Location']=="M/MT/FR004A1"){
            var loc =  markers_7th_part_26th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val= markers_7th_part_26th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_26th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}


//----------------------------------27th part of 7th block----------------------------------------------
    var markers_7th_part_27th_1=given_data_seventh_part_27th_1;
    for (var i = 0; i <markers_7th_part_27th_1.length; i++) {
        if(markers_7th_part_27th_1[i]['Location']=="M/MT/FR003D2" || markers_7th_part_27th_1[i]['Location']=="M/MT/FR003C2" || markers_7th_part_27th_1[i]['Location']=="M/MT/FR003B2" || markers_7th_part_27th_1[i]['Location']=="M/MT/FR003A2"){
            var loc = markers_7th_part_27th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_27th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_27th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_27th_2=given_data_seventh_part_27th_2;
    for (var i = 0; i <   markers_7th_part_27th_2.length; i++) {
        if(  markers_7th_part_27th_2[i]['Location']=="M/MT/FR003D1" ||   markers_7th_part_27th_2[i]['Location']=="M/MT/FR003C1" ||   markers_7th_part_27th_2[i]['Location']=="M/MT/FR003B1" ||  markers_7th_part_27th_2[i]['Location']=="M/MT/FR003A1"){
            var loc =   markers_7th_part_27th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=  markers_7th_part_27th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =  markers_7th_part_27th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------28th part of 7th block----------------------------------------------
    var markers_7th_part_28th_1=given_data_seventh_part_28th_1;
    for (var i = 0; i <markers_7th_part_28th_1.length; i++) {
        if(markers_7th_part_28th_1[i]['Location']=="M/MT/FR002D2" || markers_7th_part_28th_1[i]['Location']=="M/MT/FR002C2" || markers_7th_part_28th_1[i]['Location']=="M/MT/FR002B2" || markers_7th_part_28th_1[i]['Location']=="M/MT/FR002A2"){
            var loc = markers_7th_part_28th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_28th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_28th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_28th_2=given_data_seventh_part_28th_2;
    for (var i = 0; i <   markers_7th_part_28th_2.length; i++) {
        if(  markers_7th_part_28th_2[i]['Location']=="M/MT/FR002D1" ||  markers_7th_part_28th_2[i]['Location']=="M/MT/FR002C1" ||   markers_7th_part_28th_2[i]['Location']=="M/MT/FR002B1" ||  markers_7th_part_28th_2[i]['Location']=="M/MT/FR002A1"){
            var loc =   markers_7th_part_28th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=  markers_7th_part_28th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =  markers_7th_part_28th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}



//----------------------------------29th part of 7th block----------------------------------------------
    var markers_7th_part_29th_1=given_data_seventh_part_29th_1;
    for (var i = 0; i <markers_7th_part_29th_1.length; i++) {
        if(markers_7th_part_29th_1[i]['Location']=="M/MT/FR001D2" || markers_7th_part_29th_1[i]['Location']=="M/MT/FR001C2" || markers_7th_part_29th_1[i]['Location']=="M/MT/FR001B2" || markers_7th_part_29th_1[i]['Location']=="M/MT/FR001A2"){
            var loc = markers_7th_part_29th_1[i]['Location'].slice(-2);
            
            var LeafIcon = L.Icon.extend({
                options: {iconSize: [13, 6]}});
            x_val=markers_7th_part_29th_1[i]["marker_position"];

            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test = markers_7th_part_29th_1[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
            }
    }
    var markers_7th_part_29th_2=given_data_seventh_part_29th_2;
    for (var i = 0; i < markers_7th_part_29th_2.length; i++) {
        if(  markers_7th_part_29th_2[i]['Location']=="M/MT/FR001D1" ||  markers_7th_part_29th_2[i]['Location']=="M/MT/FR001C1" ||   markers_7th_part_29th_2[i]['Location']=="M/MT/FR001B1" ||  markers_7th_part_29th_2[i]['Location']=="M/MT/FR001A1"){
            var loc =   markers_7th_part_29th_2[i]['Location'].slice(-2);
            var LeafIcon = L.Icon.extend({options: {iconSize: [13, 6]}});

            x_val=  markers_7th_part_29th_2[i]["marker_position"];


            var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="6" style="fill:#0853bf" viewBox="0 0 13 6"><rect width="13" height="13" style="" /><text x="3" y="5" fill="white" font-size="5" font-weight="700">'+loc+'</text></svg>'
           // var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15" width="15" height="15"><defs><path d="M0 0L50 0L50 18L0 18L0 0Z" id="a1au4DcYqa"></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start">'+loc+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#a1au4DcYqa" opacity="1" fill="#0853bf" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
            const blob = new Blob([svg], {type: 'image/svg+xml'});
            const svg_url = URL.createObjectURL(blob);
            var  greenIcon1 = new LeafIcon({ iconUrl:svg_url });
            test =  markers_7th_part_29th_2[i]["SV ID"];
            var new_marker = xy(x_val[0], x_val[1]);
            var given_marker = L.marker(new_marker, { icon: greenIcon1 })
            given_marker.addTo(myFeatureGroup)
            given_marker.test = test;
        }
}









// given_loc_data_sixth_part=given_object["required_part_location_6th_block"];

                        //------------------------------------------extra code-------------------------
               //          code for render road
              //image size height 3300 and width 1800
              // intial 3 points are:-1=[80,50],2=[700,50],3=[1450,50]
                        /*   var LeafIcon = L.Icon.extend({
                                    options: {
                                    iconSize: [50, 30],
                                    }
                                });
                                
                                var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="" fill="red"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">road</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="red" opacity="1" fill="red" fill-opacity="1"></use></g></g></g></svg>'
                                const blob = new Blob([svg], {type: 'image/svg+xml'});
                                const svg_url = URL.createObjectURL(blob);
                                var greenIcon2 = new LeafIcon({ iconUrl: svg_url});
                                //var greenIcon2 = new LeafIcon({ iconUrl: "{{ url_for('static', filename='1.svg')}}"});
                                test = "cover_Id=";
                               
                               
                                x_val_1=[50,50];
                                x_val_1_end=[50,3100];
                                x_val_2=[1100,50];
                                x_val_2_end=[1100,3100];
                                x_val_3=[1950,50];
                                x_val_3_end=[1950,3100];
                                
                                
                               


                                var new_marker_1 = xy(x_val_1[0], x_val_1[1]);
                                var new_marker_2= xy(x_val_2[0], x_val_2[1]);
                                var new_marker_3= xy(x_val_3[0], x_val_3[1]);
                                var new_marker_1_end = xy(x_val_1_end[0], x_val_1_end[1]);
                                var new_marker_3_end = xy(x_val_3_end[0], x_val_3_end[1]);
                                var new_marker_2_end= xy(x_val_2_end[0], x_val_2_end[1]);




                                var given_marker1 = L.marker(new_marker_1, { icon: greenIcon2 })
                                var given_marker2 = L.marker(new_marker_2, { icon: greenIcon2 })
                                var given_marker3 = L.marker(new_marker_3, { icon: greenIcon2 })
                                var given_marker1_end = L.marker(new_marker_1_end, { icon: greenIcon2 })
                                var given_marker3_end = L.marker(new_marker_3_end, { icon: greenIcon2 })
                                var given_marker2_end = L.marker(new_marker_2_end, { icon: greenIcon2 })




                                given_marker1.addTo(myFeatureGroup)
                                given_marker2.addTo(myFeatureGroup)
                                given_marker3.addTo(myFeatureGroup)
                                given_marker1_end.addTo(myFeatureGroup)
                                given_marker3_end.addTo(myFeatureGroup)
                                given_marker2_end.addTo(myFeatureGroup)*/




                                //given_marker.test = test;


                        



                            

                        

      
    //------------------------------------------onclick function here--------------------------------------
    

    }
    //change_required_partlocation();
//---------------------------------------------------------------------------------------
    /*var pt=map_dt[0]['partlist']
    for(var j=0;j<pt.length;j++){
      if(pt[j]['Status']=="Not picked"){
      //some code
      var svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 30" width="50" height="30" id="" fill="red"><defs><path d="M0 0L50 0L50 36L0 36L0 0Z" id="d1HwhFdh0a" ></path><text id="edJQPl1YZ" x="3.19" y="1.83" font-size="5" font-family="Open Sans" font-weight="700" font-style="normal" letter-spacing="0" alignment-baseline="before-edge" transform="matrix(1 0 0 1 -1.7462686567164205 -1.335820895522378)" style="line-height:100%" xml:space="preserve" dominant-baseline="text-before-edge"><tspan x="3.19" dy="0em" alignment-baseline="before-edge" dominant-baseline="text-before-edge" text-anchor="start" id="t_span">'+pt[j]['Status']["Pickup Location"]+'</tspan></text><style id="opensans700normal"></style></defs><g><g><g><g></g><use xlink:href="#d1HwhFdh0a" opacity="1" fill-opacity="1"></use></g><g id="bv4yYAEIG"><use xlink:href="#edJQPl1YZ" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>'
      const blob = new Blob([svg], {type: 'image/svg+xml'});
      const svg_url = URL.createObjectURL(blob);
      var hazardIcon = L.icon({
        //iconUrl:svg_url,
        color:"red",
        //iconSize: [50, 10]
        
       });
    
    for(key in myFeatureGroup._layers){
        if(myFeatureGroup._layers[key]['test']==pt[j]['SV ID']){
            console.log("selected marker");
            console.log(key);
        //myFeatureGroup._layers[key].setIcon(hazardIcon);
      myFeatureGroup._layers[key]._icon.classList.add('leaflet-marker-icon','leaflet-zoom-animated','leaflet-interactive','redbox') ;
       //or any color

        }
    }
    
    
    
    }
    if(pt[j]['Status']=="picked"){
    // some code
    
    console.log("not");
    
   
}



}*/
   
//-------------------------------------------------------------------------------------
var given_all_id;
function required_data_from_db(){
        socket.emit("get_ids");
        socket.on("received_ids",function(idss){
        var trans=[];
        var opaq=[];
        var medium=[];
        var covers=[];
        var svg_ids_array=[];
        var arr1;
        var arr2;
        var arr3;
        var arr4;
        var arr5;
        var obj = JSON.parse(idss);
        ids=obj['id_list']
        given_all_id=obj['id_list']

        //main_array=idss;
        //sr_number=obj[0]['sr_number'];
        //job=obj[0]['job_name'];
        //apl_code=obj[0]['apl'];
        //document.getElementById("report").id = job+','+apl_code+','+sr_number;
        console.log("received_data_here");
        console.log(obj);
        for(var i=0;i<ids.length;i++){
            trans.push(ids[i]["Transparent"])
            opaq.push(ids[i]["Opaque"])
            medium.push(ids[i]["Medium"])
            covers.push(ids[i]["Cover"])
            svg_ids_array.push(ids[i]["SV ID"])
        }
        arr1 = medium.filter(function(e){return e});
        arr2 = opaq.filter(function(e){return e});
        arr3 = trans.filter(function(e){return e});
        arr4 = covers.filter(function(e){return e});
        arr5 = svg_ids_array.filter(function(e){return e});

        //filling 2nd block need part location arrray
        required_part_location_3_of_2=["M/MT/FL052A1","M/MT/FL053A1","M/MT/FL054A1","M/MT/FL055A1","M/MT/FL056A1","M/MT/FL057A1","M/MT/FL058A1","M/MT/FL059A1","M/MT/FL060A1","M/MT/FL061A1","M/MT/FL062A1","M/MT/FL063A1","M/MT/FL064A1","M/MT/FL065A1","M/MT/FL066A1","M/MT/FL067A1","M/MT/FL068A1","M/MT/FL069A1","M/MT/FL070A1","M/MT/FL071A1","M/MT/FL072A1","M/MT/FL073A1","M/MT/FL074A1","M/MT/FL075A1","M/MT/FL076A1","M/MT/FL077A1","M/MT/FL078A1","M/MT/FL079A1","M/MT/FL080A1","M/MT/FL081A1"]
        required_part_location_1_of_2=["M/MT/FL082A1","M/MT/FL082A2","M/MT/FL082A3"]
        required_part_location_2_of_2=["M/MT/FL058A2","M/MT/FL059A2","M/MT/FL060A2","M/MT/FL060A3","M/MT/FL061A2","M/MT/FL062A2","M/MT/FL063A2","M/MT/FL063A3","M/MT/FL064A2","M/MT/FL065A2","M/MT/FL066A2","M/MT/FL066A3","M/MT/FL067A2","M/MT/FL068A2","M/MT/FL069A2","M/MT/FL069A3","M/MT/FL070A2","M/MT/FL071A2","M/MT/FL072A2","M/MT/FL072A3","M/MT/FL073A2","M/MT/FL074A2","M/MT/FL074A3","M/MT/FL075A2","M/MT/FL076A2","M/MT/FL077A2","M/MT/FL078A2","M/MT/FL078A3","M/MT/FL079A2","M/MT/FL080A2","M/MT/FL081A2","M/MT/FL081A3"]

        var getting_part_location_1_of_2=[];
        var getting_part_location_3_of_2=[];
        var getting_part_location_2_of_2=[];




        var render_map_with_part_loation={};
        var position_1_of_2_x=830;
        var position_1_of_2_y=1650;
        var position_2_of_2_x=830;
        var position_2_of_2_y=405;
        var position_3_of_2_x=1000;
        var position_3_of_2_y=100;
        for(var j=0;j<required_part_location_3_of_2.length;j++){
            for(var k=0;k<ids.length;k++){
            if( required_part_location_3_of_2[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_3_of_2_x,position_3_of_2_y]
                getting_part_location_3_of_2.push(ids[k]);
                position_3_of_2_x=position_3_of_2_x;
                position_3_of_2_y=position_3_of_2_y+51;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        //create data for 1st part for 2nd block

        for(var j=0;j<required_part_location_1_of_2.length;j++){
            for(var k=0;k<ids.length;k++){
            if( required_part_location_1_of_2[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_1_of_2_x,position_1_of_2_y]
                getting_part_location_1_of_2.push(ids[k]);
                position_1_of_2_x=position_1_of_2_x+85;
                position_1_of_2_y=position_1_of_2_y;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        //create data for 2nd part for 2nd block

        for(var j=0;j<required_part_location_2_of_2.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_2_of_2[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_2_of_2_x,position_2_of_2_y]
                getting_part_location_2_of_2.push(ids[k]);
                position_2_of_2_x=position_2_of_2_x;
                position_2_of_2_y=position_2_of_2_y+51;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        render_map_with_part_loation["second_part_3rd"]=getting_part_location_3_of_2;
        render_map_with_part_loation["second_part_1st"]=getting_part_location_1_of_2;
        render_map_with_part_loation["second_part_2nd"]=getting_part_location_2_of_2;
        //--------------------------end of required data 1st part of 3rd block--------------------

        // --------------------------filling 3rd block---------------------------------------------
        required_part_location_1_of_3=["M/MT/FL051A1","M/MT/FL050A1","M/MT/FL049A2","M/MT/FL049A1","M/MT/FL048A1","M/MT/FL047A1","M/MT/FL046A2","M/MT/FL046A1","M/MT/FL045A1","M/MT/FL044A1"]
        required_part_location_2_of_3=["M/MT/FL044A2","M/MT/FL044A3","M/MT/FL044A4","M/MT/FL044A5"]

        var getting_part_location_1_of_3=[];
        var getting_part_location_2_of_3=[];

        var position_1_of_3_x=1200;
        var position_1_of_3_y=100;
        var position_2_of_3_x=1300;
        var position_2_of_3_y=465;


        for(var j=0;j<required_part_location_1_of_3.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_1_of_3[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_1_of_3_x,position_1_of_3_y]
                getting_part_location_1_of_3.push(ids[k]);
                position_1_of_3_x=position_1_of_3_x;
                position_1_of_3_y=position_1_of_3_y+51;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        for(var j=0;j<required_part_location_2_of_3.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_2_of_3[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_2_of_3_x,position_2_of_3_y]
                getting_part_location_2_of_3.push(ids[k]);
                position_2_of_3_x=position_2_of_3_x+100;
                position_2_of_3_y=position_2_of_3_y;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        //--------------------------end of required data 1st part of 3rd block--------------------
        render_map_with_part_loation["third_part_1st"]=getting_part_location_1_of_3;
        render_map_with_part_loation["third_part_2nd"]=getting_part_location_2_of_3;


        // --------------------------filling 5th block---------------------------------------------

        required_part_location_1_of_5=["M/MT/FL043A1","M/MT/FL043A2","M/MT/FL043A3","M/MT/FL043A4"]
        required_part_location_2_of_5=["M/MT/FL042A1"]
        required_part_location_3_of_5=["M/MT/FL041A1","M/MT/FL041A2","M/MT/FL041A3","M/MT/FL041A4","M/MT/FL041A5","M/MT/FL041A6","M/MT/FL041A7"]
        required_part_location_4_of_5=["M/MT/FL040A1"]
        required_part_location_5_of_5=["M/MT/FL039A1","M/MT/FL039A2","M/MT/FL039A3","M/MT/FL039A4","M/MT/FL039A5"]
        required_part_location_6_of_5=["M/MT/FL038A1","M/MT/FL037A1","M/MT/FL036A1","M/MT/FL035A1","M/MT/FL034A1","M/MT/FL033A1","M/MT/FL032A1","M/MT/FL031A1","M/MT/FL030A1","M/MT/FL029A1","M/MT/FL028A1","M/MT/FL027A1"]
        required_part_location_7_of_5=["M/MT/FL026A1","M/MT/FL025A1","M/MT/FL024A1","M/MT/FL023A1","M/MT/FL022A1","M/MT/FL021A1","M/MT/FL020A1","M/MT/FL019A1","M/MT/FL018A1","M/MT/FL017A1","M/MT/FL016A1","M/MT/FL015A1","M/MT/FL014A1"]
        required_part_location_8_of_5=["M/MT/FL013A1","M/MT/FL012A1","M/MT/FL011A1","M/MT/FL010A1","M/MT/FL009A1","M/MT/FL008A1","M/MT/FL007A1","M/MT/FL006A1","M/MT/FL005A1","M/MT/FL004A1","M/MT/FL003A1","M/MT/FL002A1","M/MT/FL001A1"]
        required_part_location_9_of_5=["M/MT/FL029A2"]
        required_part_location_10_of_5=["M/MT/FL026A2","M/MT/FL026A3"]
        required_part_location_11_of_5=["M/MT/FL021A2"]
        required_part_location_12_of_5=["M/MT/FL013A2"]
        required_part_location_13_of_5=["M/MT/FL011A2"]
        required_part_location_14_of_5=["M/MT/FL006A2"]
        required_part_location_15_of_5=["M/MT/FL005A2"]




        //M/MT/FL012A1 nahi 

        var getting_part_location_1_of_5=[];
        var getting_part_location_2_of_5=[];
        var getting_part_location_3_of_5=[];
        var getting_part_location_4_of_5=[];
        var getting_part_location_5_of_5=[];
        var getting_part_location_6_of_5=[];
        var getting_part_location_7_of_5=[];
        var getting_part_location_8_of_5=[];
        var getting_part_location_9_of_5=[];
        var getting_part_location_10_of_5=[];
        var getting_part_location_11_of_5=[];
        var getting_part_location_12_of_5=[];
        var getting_part_location_13_of_5=[];
        var getting_part_location_14_of_5=[];
        var getting_part_location_15_of_5=[];




        var position_1_of_5_x=1200;
        var position_1_of_5_y=600;
        var position_2_of_5_x=1200;
        var position_2_of_5_y=660;
        var position_3_of_5_x=1200;
        var position_3_of_5_y=720;
        var position_4_of_5_x=1200;
        var position_4_of_5_y=775;
        var position_5_of_5_x=1200;
        var position_5_of_5_y=830;
        var position_6_of_5_x=1200;
        var position_6_of_5_y=880;
        var position_7_of_5_x=1200;
        var position_7_of_5_y=1570;
        var position_8_of_5_x=1200;
        var position_8_of_5_y=2300;
        var position_9_of_5_x=1300;
        var position_9_of_5_y=1375;
        var position_10_of_5_x=1300;
        var position_10_of_5_y=1570;
        var position_11_of_5_x=1300;
        var position_11_of_5_y=1842;
        var position_12_of_5_x=1300;
        var position_12_of_5_y=2300;
        var position_13_of_5_x=1300;
        var position_13_of_5_y=2410;
        var position_14_of_5_x=1300;
        var position_14_of_5_y=2685;
        var position_15_of_5_x=1300;
        var position_15_of_5_y=2740;

        for(var j=0;j<required_part_location_1_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_1_of_5[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_1_of_5_x,position_1_of_5_y]
                getting_part_location_1_of_5.push(ids[k]);
                position_1_of_5_x=position_1_of_5_x+110;
                position_1_of_5_y=position_1_of_5_y;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        render_map_with_part_loation["fifth_part_1st"]=getting_part_location_1_of_5;

        for(var j=0;j<required_part_location_2_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_2_of_5[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_2_of_5_x,position_2_of_5_y]
                getting_part_location_2_of_5.push(ids[k]);
                position_2_of_5_x=position_2_of_5_x+110;
                position_2_of_5_y=position_2_of_5_y;
                }//end if loop
                
            }//end inner for loop
        }//end outer for loop
        /* extra work*/
        if(getting_part_location_2_of_5.length==0){
              // ids[k]["Location"]=="M/MT/FL042A1"
              dt={}
              dt["Location"]="M/MT/FL042A1"
              dt["marker_position"]=[position_2_of_5_x,position_2_of_5_y]
               getting_part_location_2_of_5.push(dt);
              // getting_part_location_2_of_5.push(dt["marker_position"]=[position_2_of_5_x,position_2_of_5_y]);


        }
        render_map_with_part_loation["fifth_part_2nd"]=getting_part_location_2_of_5;


/* extra ork ends here*/

        for(var j=0;j<required_part_location_3_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_3_of_5[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_3_of_5_x,position_3_of_5_y]
                getting_part_location_3_of_5.push(ids[k]);
                position_3_of_5_x=position_3_of_5_x+90;
                position_3_of_5_y=position_3_of_5_y;
                }//end if loop
            }//end inner for loop
        }//end outer for loop

        render_map_with_part_loation["fifth_part_3rd"]=getting_part_location_3_of_5;

        



        for(var j=0;j<required_part_location_4_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
               
            if( required_part_location_4_of_5[j]==ids[k]["Location"]){
                
                ids[k]["marker_position"]=[position_4_of_5_x,position_4_of_5_y]
                getting_part_location_4_of_5.push(ids[k]);
                position_4_of_5_x=position_4_of_5_x+110;
                position_4_of_5_y=position_4_of_5_y;
                }//end if loop
                
            }//end inner for loop
        }//end outer for loop
        /* extra work*/
        if(getting_part_location_4_of_5.length==0){
              // ids[k]["Location"]=="M/MT/FL042A1"
              dt={}
              dt["Location"]="M/MT/FL040A1"
              dt["marker_position"]=[position_4_of_5_x,position_4_of_5_y]
               getting_part_location_4_of_5.push(dt);
              // getting_part_location_2_of_5.push(dt["marker_position"]=[position_2_of_5_x,position_2_of_5_y]);


        }
        render_map_with_part_loation["fifth_part_4th"]=getting_part_location_4_of_5;



        for(var j=0;j<required_part_location_5_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_5_of_5[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_5_of_5_x,position_5_of_5_y]
                getting_part_location_5_of_5.push(ids[k]);
                position_5_of_5_x=position_5_of_5_x+110;
                position_5_of_5_y=position_5_of_5_y;
                }//end if loop
            }//end inner for loop
        }//end outer for loop
        render_map_with_part_loation["fifth_part_5th"]=getting_part_location_5_of_5;


        for(var j=0;j<required_part_location_6_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_6_of_5[j]==ids[k]["Location"] && ids[k]["Item"] !="4H.144.04.0.00"){
                ids[k]["marker_position"]=[position_6_of_5_x,position_6_of_5_y]
                getting_part_location_6_of_5.push(ids[k]);
                position_6_of_5_x=position_6_of_5_x;
                position_6_of_5_y=position_6_of_5_y+55;
                }//end if loop
            }//end inner for loop
        }//end outer for loop
         
         
        render_map_with_part_loation["fifth_part_6th"]=getting_part_location_6_of_5;

        for(var j=0;j<required_part_location_7_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_7_of_5[j]==ids[k]["Location"]){
                ids[k]["marker_position"]=[position_7_of_5_x,position_7_of_5_y]
                getting_part_location_7_of_5.push(ids[k]);
                position_7_of_5_x=position_7_of_5_x;
                position_7_of_5_y=position_7_of_5_y+55;
                }//end if loop
            }//end inner for loop
        }//end outer for loop
         
         
        render_map_with_part_loation["fifth_part_7th"]=getting_part_location_7_of_5;

        for(var j=0;j<required_part_location_8_of_5.length;j++){
            for(var k=0;k<ids.length;k++){
                
            if( required_part_location_8_of_5[j]==ids[k]["Location"] && ids[k]["Item"] !="4H.1543.04.0.00"){
                ids[k]["marker_position"]=[position_8_of_5_x,position_8_of_5_y]
                getting_part_location_8_of_5.push(ids[k]);
                position_8_of_5_x=position_8_of_5_x;
                position_8_of_5_y=position_8_of_5_y+55;
                }//end if loop
            }//end inner for loop
        }//end outer for loop
         
         
        render_map_with_part_loation["fifth_part_8th"]=getting_part_location_8_of_5;

        

            for(var j=0;j<required_part_location_9_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_9_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_9_of_5_x,position_9_of_5_y]
                        getting_part_location_9_of_5.push(ids[k]);
                        position_9_of_5_x=position_9_of_5_x;
                        position_9_of_5_y=position_9_of_5_y+55;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_9th"]=getting_part_location_9_of_5;

          for(var j=0;j<required_part_location_10_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_10_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_10_of_5_x,position_10_of_5_y]
                        getting_part_location_10_of_5.push(ids[k]);
                        position_10_of_5_x=position_10_of_5_x+100;
                        position_10_of_5_y=position_10_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_10th"]=getting_part_location_10_of_5;

          for(var j=0;j<required_part_location_11_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_11_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_11_of_5_x,position_11_of_5_y]
                        getting_part_location_11_of_5.push(ids[k]);
                        position_11_of_5_x=position_11_of_5_x+100;
                        position_11_of_5_y=position_11_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_11th"]=getting_part_location_11_of_5;

          for(var j=0;j<required_part_location_12_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_12_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_12_of_5_x,position_12_of_5_y]
                        getting_part_location_12_of_5.push(ids[k]);
                        position_12_of_5_x=position_12_of_5_x+100;
                        position_12_of_5_y=position_12_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_12th"]=getting_part_location_12_of_5;

          for(var j=0;j<required_part_location_13_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_13_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_13_of_5_x,position_13_of_5_y]
                        getting_part_location_13_of_5.push(ids[k]);
                        position_13_of_5_x=position_13_of_5_x+100;
                        position_13_of_5_y=position_13_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_13th"]=getting_part_location_13_of_5;


          for(var j=0;j<required_part_location_14_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_14_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_14_of_5_x,position_14_of_5_y]
                        getting_part_location_14_of_5.push(ids[k]);
                        position_14_of_5_x=position_14_of_5_x+100;
                        position_14_of_5_y=position_14_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_14th"]=getting_part_location_14_of_5;

          for(var j=0;j<required_part_location_15_of_5.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_15_of_5[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_15_of_5_x,position_15_of_5_y]
                        getting_part_location_15_of_5.push(ids[k]);
                        position_15_of_5_x=position_15_of_5_x+100;
                        position_15_of_5_y=position_15_of_5_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["fifth_part_15th"]=getting_part_location_15_of_5;
       
       

/* extra ork ends here*/

// --------------------------filling 6th block---------------------------------------------

        required_part_location_1_of_6=["M/MT/FL083A3","M/MT/FL083A2","M/MT/FL083A1"]
        required_part_location_2_of_6=["M/MT/FL084A1","M/MT/FL085A1","M/MT/FL086A1","M/MT/FL087A1","M/MT/FL088A1","M/MT/FL089A1","M/MT/FL090A1","M/MT/FL091A1","M/MT/FL092A1","M/MT/FL093A1","M/MT/FL094A1","M/MT/FL095A1","M/MT/FL096A1","M/MT/FL097A1"]
        required_part_location_3_of_6=["M/MT/FL084A2","M/MT/FL084A3","M/MT/FL085A2","M/MT/FL085A3","M/MT/FL086A2","M/MT/FL087A2","M/MT/FL088A2"]
        required_part_location_4_of_6_1=["M/MT/MD101A1","M/MT/MD101A2","M/MT/MD101A3","M/MT/MD101A4"]
        required_part_location_4_of_6_2=["M/MT/MD101B1","M/MT/MD101B2","M/MT/MD101B3","M/MT/MD101B4"]
        required_part_location_4_of_6_3=["M/MT/MD101C1","M/MT/MD101C2","M/MT/MD101C3","M/MT/MD101C4"]
        required_part_location_4_of_6_4=["M/MT/MD101D1","M/MT/MD101D2","M/MT/MD101D3","M/MT/MD101D4"]
        required_part_location_5_of_6_1=["M/MT/MD102A1","M/MT/MD102A2","M/MT/MD102A3","M/MT/MD102A4"]
        required_part_location_5_of_6_2=["M/MT/MD102B1","M/MT/MD102B2","M/MT/MD102B3","M/MT/MD102B4"]
        required_part_location_5_of_6_3=["M/MT/MD102C1","M/MT/MD102C2","M/MT/MD102C3","M/MT/MD102C4"]
        required_part_location_5_of_6_4=["M/MT/MD102D1","M/MT/MD102D2","M/MT/MD102D3","M/MT/MD102D4"]
        required_part_location_6_of_6_1=["M/MT/MD103A1","M/MT/MD103A2","M/MT/MD103A3","M/MT/MD103A4"]
        required_part_location_6_of_6_2=["M/MT/MD103B1","M/MT/MD103B2","M/MT/MD103B3","M/MT/MD103B4"]
        required_part_location_6_of_6_3=["M/MT/MD103C1","M/MT/MD103C2","M/MT/MD103C3","M/MT/MD103C4"]
        required_part_location_6_of_6_4=["M/MT/MD103D1","M/MT/MD103D2","M/MT/MD103D3","M/MT/MD103D4"]
        required_part_location_7_of_6_1=["M/MT/MD104A1","M/MT/MD104A2","M/MT/MD104A3","M/MT/MD104A4"]
        required_part_location_7_of_6_2=["M/MT/MD104B1","M/MT/MD104B2","M/MT/MD104B3","M/MT/MD104B4"]
        required_part_location_7_of_6_3=["M/MT/MD104C1","M/MT/MD104C2","M/MT/MD104C3","M/MT/MD104C4"]
        required_part_location_7_of_6_4=["M/MT/MD104D1","M/MT/MD104D2","M/MT/MD104D3","M/MT/MD104D4"]
        required_part_location_6th_block=["M/MT/MD101","M/MT/MD102","M/MT/MD103","M/MT/MD104"]



        var getting_part_location_1_of_6=[];
        var getting_part_location_2_of_6=[];
        var getting_part_location_3_of_6=[];
        var getting_part_location_4_of_6_1=[];
        var getting_part_location_4_of_6_2=[];
        var getting_part_location_4_of_6_3=[];
        var getting_part_location_4_of_6_4=[];
        var getting_part_location_5_of_6_1=[];
        var getting_part_location_5_of_6_2=[];
        var getting_part_location_5_of_6_3=[];
        var getting_part_location_5_of_6_4=[];
        var getting_part_location_6_of_6_1=[];
        var getting_part_location_6_of_6_2=[];
        var getting_part_location_6_of_6_3=[];
        var getting_part_location_6_of_6_4=[];
        var getting_part_location_7_of_6_1=[];
        var getting_part_location_7_of_6_2=[];
        var getting_part_location_7_of_6_3=[];
        var getting_part_location_7_of_6_4=[];
        var getting_required_part_location_6th_block=[];







        var position_1_of_6_x=830;
        var position_1_of_6_y=1800;
        var position_2_of_6_x=1000;
        var position_2_of_6_y=1860;
        var position_3_of_6_x=830;
        var position_3_of_6_y=1860;
        var position_4_of_6_1_x=960;
        var position_4_of_6_1_y=2570;
        var position_4_of_6_2_x=985;
        var position_4_of_6_2_y=2570;
        var position_4_of_6_3_x=1010;
        var position_4_of_6_3_y=2570;
        var position_4_of_6_4_x=1035;
        var position_4_of_6_4_y=2570;
        var position_5_of_6_1_x=960;
        var position_5_of_6_1_y=2700;
        var position_5_of_6_2_x=985;
        var position_5_of_6_2_y=2700;
        var position_5_of_6_3_x=1010;
        var position_5_of_6_3_y=2700;
        var position_5_of_6_4_x=1035;
        var position_5_of_6_4_y=2700;
        var position_6_of_6_1_x=960;
        var position_6_of_6_1_y=2830;
        var position_6_of_6_2_x=985;
        var position_6_of_6_2_y=2830;
        var position_6_of_6_3_x=1010;
        var position_6_of_6_3_y=2830;
        var position_6_of_6_4_x=1035;
        var position_6_of_6_4_y=2830;
        var position_7_of_6_1_x=960;
        var position_7_of_6_1_y=2960;
        var position_7_of_6_2_x=985;
        var position_7_of_6_2_y=2960;
        var position_7_of_6_3_x=1010;
        var position_7_of_6_3_y=2960;
        var position_7_of_6_4_x=1035;
        var position_7_of_6_4_y=2960;

        var required_part_location_6th_block_1_x=1105;
        var required_part_location_6th_block_1_y=2660;
        var required_part_location_6th_block_2_x=1105;
        var required_part_location_6th_block_2_y=2790;
        var required_part_location_6th_block_3_x=1105;
        var required_part_location_6th_block_3_y=2920;
        var required_part_location_6th_block_4_x=1105;
        var required_part_location_6th_block_4_y=3050;



        for(var j=0;j<required_part_location_6th_block.length;j++){
        
                
                    var loc_dt={}
                    if( required_part_location_6th_block[j]=="M/MT/MD101"){
                        loc_dt['part_location']="M/MT/MD101"
                        loc_dt['x_val']=required_part_location_6th_block_1_x
                        loc_dt['y_val']=required_part_location_6th_block_1_y
                        getting_required_part_location_6th_block.push(loc_dt)
                    }//end if loop
                    if( required_part_location_6th_block[j]=="M/MT/MD102"){
                        loc_dt['part_location']="M/MT/MD102"
                        loc_dt['x_val']=required_part_location_6th_block_2_x
                        loc_dt['y_val']=required_part_location_6th_block_2_y
                        getting_required_part_location_6th_block.push(loc_dt)
                    }//end if loop
                    if( required_part_location_6th_block[j]=="M/MT/MD103"){
                        loc_dt['part_location']="M/MT/MD103"
                        loc_dt['x_val']=required_part_location_6th_block_3_x
                        loc_dt['y_val']=required_part_location_6th_block_3_y
                        getting_required_part_location_6th_block.push(loc_dt)
                    }//end if loop
                    if( required_part_location_6th_block[j]=="M/MT/MD104"){
                        loc_dt['part_location']="M/MT/MD104"
                        loc_dt['x_val']=required_part_location_6th_block_4_x
                        loc_dt['y_val']=required_part_location_6th_block_4_y
                        getting_required_part_location_6th_block.push(loc_dt)
                    }//end if loop
                    
            }//end outer for loop
                
          render_map_with_part_loation["required_part_location_6th_block"]=getting_required_part_location_6th_block;




        for(var j=0;j<required_part_location_1_of_6.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_1_of_6[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_6_x,position_1_of_6_y]
                        getting_part_location_1_of_6.push(ids[k]);
                        position_1_of_6_x=position_1_of_6_x+90;
                        position_1_of_6_y=position_1_of_6_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_1st"]=getting_part_location_1_of_6;
       
       

        
        for(var j=0;j<required_part_location_2_of_6.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_2_of_6[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_6_x,position_2_of_6_y]
                        getting_part_location_2_of_6.push(ids[k]);
                        position_2_of_6_x=position_2_of_6_x;
                        position_2_of_6_y=position_2_of_6_y+51;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_2nd"]=getting_part_location_2_of_6;


          for(var j=0;j<required_part_location_3_of_6.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_3_of_6[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_6_x,position_3_of_6_y]
                        getting_part_location_3_of_6.push(ids[k]);
                        position_3_of_6_x=position_3_of_6_x;
                        position_3_of_6_y=position_3_of_6_y+51;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_3rd"]=getting_part_location_3_of_6;
       

          for(var j=0;j<required_part_location_4_of_6_1.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_4_of_6_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_6_1_x,position_4_of_6_1_y]
                        getting_part_location_4_of_6_1.push(ids[k]);
                        position_4_of_6_1_x=position_4_of_6_1_x
                        position_4_of_6_1_y=position_4_of_6_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_4th_1"]=getting_part_location_4_of_6_1;

          for(var j=0;j<required_part_location_4_of_6_2.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_4_of_6_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_6_2_x,position_4_of_6_2_y]
                        getting_part_location_4_of_6_2.push(ids[k]);
                        position_4_of_6_2_x=position_4_of_6_2_x
                        position_4_of_6_2_y=position_4_of_6_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_4th_2"]=getting_part_location_4_of_6_2;
          for(var j=0;j<required_part_location_4_of_6_3.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_4_of_6_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_6_3_x,position_4_of_6_3_y]
                        getting_part_location_4_of_6_3.push(ids[k]);
                        position_4_of_6_3_x=position_4_of_6_3_x
                        position_4_of_6_3_y=position_4_of_6_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_4th_3"]=getting_part_location_4_of_6_3;

          for(var j=0;j<required_part_location_4_of_6_4.length;j++){
                for(var k=0;k<ids.length;k++){
        
                    if( required_part_location_4_of_6_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_6_4_x,position_4_of_6_4_y]
                        getting_part_location_4_of_6_4.push(ids[k]);
                        position_4_of_6_4_x=position_4_of_6_4_x
                        position_4_of_6_4_y=position_4_of_6_4_y+25;
                        }//end if loop
                    }//end inner for loop

            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_4th_4"]=getting_part_location_4_of_6_4;
        
        
        //console.log("new give small part list here");


        for(var j=0;j<required_part_location_5_of_6_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_6_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_6_1_x,position_5_of_6_1_y]
                        getting_part_location_5_of_6_1.push(ids[k]);
                        position_5_of_6_1_x=position_5_of_6_1_x
                        position_5_of_6_1_y=position_5_of_6_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_5th_1"]=getting_part_location_5_of_6_1;

          for(var j=0;j<required_part_location_5_of_6_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_6_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_6_2_x,position_5_of_6_2_y]
                        getting_part_location_5_of_6_2.push(ids[k]);
                        position_5_of_6_2_x=position_5_of_6_2_x
                        position_5_of_6_2_y=position_5_of_6_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_5th_2"]=getting_part_location_5_of_6_2;

          for(var j=0;j<required_part_location_5_of_6_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_6_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_6_3_x,position_5_of_6_3_y]
                        getting_part_location_5_of_6_3.push(ids[k]);
                        position_5_of_6_3_x=position_5_of_6_3_x
                        position_5_of_6_3_y=position_5_of_6_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_5th_3"]=getting_part_location_5_of_6_3;

          for(var j=0;j<required_part_location_5_of_6_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_6_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_6_4_x,position_5_of_6_4_y]
                        getting_part_location_5_of_6_4.push(ids[k]);
                        position_5_of_6_4_x=position_5_of_6_4_x
                        position_5_of_6_4_y=position_5_of_6_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_5th_4"]=getting_part_location_5_of_6_4;

          for(var j=0;j<required_part_location_6_of_6_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_6_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_6_1_x,position_6_of_6_1_y]
                        getting_part_location_6_of_6_1.push(ids[k]);
                        position_6_of_6_1_x=position_6_of_6_1_x
                        position_6_of_6_1_y=position_6_of_6_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_6th_1"]=getting_part_location_6_of_6_1;
          for(var j=0;j<required_part_location_6_of_6_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_6_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_6_2_x,position_6_of_6_2_y]
                        getting_part_location_6_of_6_2.push(ids[k]);
                        position_6_of_6_2_x=position_6_of_6_2_x
                        position_6_of_6_2_y=position_6_of_6_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_6th_2"]=getting_part_location_6_of_6_2;

          for(var j=0;j<required_part_location_6_of_6_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_6_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_6_3_x,position_6_of_6_3_y]
                        getting_part_location_6_of_6_3.push(ids[k]);
                        position_6_of_6_3_x=position_6_of_6_3_x
                        position_6_of_6_3_y=position_6_of_6_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_6th_3"]=getting_part_location_6_of_6_3;
          for(var j=0;j<required_part_location_6_of_6_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_6_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_6_4_x,position_6_of_6_4_y]
                        getting_part_location_6_of_6_4.push(ids[k]);
                        position_6_of_6_4_x=position_6_of_6_4_x
                        position_6_of_6_4_y=position_6_of_6_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_6th_4"]=getting_part_location_6_of_6_4;
          for(var j=0;j<required_part_location_7_of_6_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_6_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_6_1_x,position_7_of_6_1_y]
                        getting_part_location_7_of_6_1.push(ids[k]);
                        position_7_of_6_1_x=position_7_of_6_1_x
                        position_7_of_6_1_y=position_7_of_6_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_7th_1"]=getting_part_location_7_of_6_1;

          for(var j=0;j<required_part_location_7_of_6_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_6_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_6_2_x,position_7_of_6_2_y]
                        getting_part_location_7_of_6_2.push(ids[k]);
                        position_7_of_6_2_x=position_7_of_6_2_x
                        position_7_of_6_2_y=position_7_of_6_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_7th_2"]=getting_part_location_7_of_6_2;

          for(var j=0;j<required_part_location_7_of_6_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_6_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_6_3_x,position_7_of_6_3_y]
                        getting_part_location_7_of_6_3.push(ids[k]);
                        position_7_of_6_3_x=position_7_of_6_3_x
                        position_7_of_6_3_y=position_7_of_6_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_7th_3"]=getting_part_location_7_of_6_3;

          for(var j=0;j<required_part_location_7_of_6_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_6_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_6_4_x,position_7_of_6_4_y]
                        getting_part_location_7_of_6_4.push(ids[k]);
                        position_7_of_6_4_x=position_7_of_6_4_x
                        position_7_of_6_4_y=position_7_of_6_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
                
          render_map_with_part_loation["sixth_part_7th_4"]=getting_part_location_7_of_6_4;
          
          //render_map_with_part_loation["required_part_location_6th_block"]=required_part_location_6th_block;



        
        
        //--------------------------end of required data 5th block--------------------

        //--------------------------filling 3rd bock-------------------------------------

        required_part_location_1_of_3_1=["M/MT/MD105D1","M/MT/MD105D2","M/MT/MD105D3","M/MT/MD105D4"]
        required_part_location_1_of_3_2=["M/MT/MD105C1","M/MT/MD105C2","M/MT/MD105C3","M/MT/MD105C4"]
        required_part_location_1_of_3_3=["M/MT/MD105B1","M/MT/MD105B2","M/MT/MD105B3","M/MT/MD105B4"]
        required_part_location_1_of_3_4=["M/MT/MD105A1","M/MT/MD105A2","M/MT/MD105A3","M/MT/MD105A4"]
        var getting_part_location_1_of_3_1=[];
        var getting_part_location_1_of_3_2=[];
        var getting_part_location_1_of_3_3=[];
        var getting_part_location_1_of_3_4=[];
        var position_1_of_3_1_x=2020;
        var position_1_of_3_1_y=10;
        var position_1_of_3_2_x=2045;
        var position_1_of_3_2_y=10;
        var position_1_of_3_3_x=2070;
        var position_1_of_3_3_y=10;
        var position_1_of_3_4_x=2095;
        var position_1_of_3_4_y=10;

        //--------------------------1st 4 coloumn and 4 row for part M/MT/MD105
       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD106

        required_part_location_2_of_3_1=["M/MT/MD106D1","M/MT/MD106D2","M/MT/MD106D3","M/MT/MD106D4"]
        required_part_location_2_of_3_2=["M/MT/MD106C1","M/MT/MD106C2","M/MT/MD106C3","M/MT/MD106C4"]
        required_part_location_2_of_3_3=["M/MT/MD106B1","M/MT/MD106B2","M/MT/MD106B3","M/MT/MD106B4"]
        required_part_location_2_of_3_4=["M/MT/MD106A1","M/MT/MD106A2","M/MT/MD106A3","M/MT/MD106A4"]
        var getting_part_location_2_of_3_1=[];
        var getting_part_location_2_of_3_2=[];
        var getting_part_location_2_of_3_3=[];
        var getting_part_location_2_of_3_4=[];
        var position_2_of_3_1_x=2020;
        var position_2_of_3_1_y=140;
        var position_2_of_3_2_x=2045;
        var position_2_of_3_2_y=140;
        var position_2_of_3_3_x=2070;
        var position_2_of_3_3_y=140;
        var position_2_of_3_4_x=2095;
        var position_2_of_3_4_y=140;
       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD106
       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD107

       required_part_location_3_of_3_1=["M/MT/MD107D1","M/MT/MD107D2","M/MT/MD107D3","M/MT/MD107D4"]
        required_part_location_3_of_3_2=["M/MT/MD107C1","M/MT/MD107C2","M/MT/MD107C3","M/MT/MD107C4"]
        required_part_location_3_of_3_3=["M/MT/MD107B1","M/MT/MD107B2","M/MT/MD107B3","M/MT/MD107B4"]
        required_part_location_3_of_3_4=["M/MT/MD107A1","M/MT/MD107A2","M/MT/MD107A3","M/MT/MD107A4"]
        var getting_part_location_3_of_3_1=[];
        var getting_part_location_3_of_3_2=[];
        var getting_part_location_3_of_3_3=[];
        var getting_part_location_3_of_3_4=[];
        var position_3_of_3_1_x=2020;
        var position_3_of_3_1_y=270;
        var position_3_of_3_2_x=2045;
        var position_3_of_3_2_y=270;
        var position_3_of_3_3_x=2070;
        var position_3_of_3_3_y=270;
        var position_3_of_3_4_x=2095;
        var position_3_of_3_4_y=270;
       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD107

       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD108

       required_part_location_4_of_3_1=["M/MT/MD108D1","M/MT/MD108D2","M/MT/MD108D3","M/MT/MD108D4"]
        required_part_location_4_of_3_2=["M/MT/MD108C1","M/MT/MD108C2","M/MT/MD108C3","M/MT/MD108C4"]
        required_part_location_4_of_3_3=["M/MT/MD108B1","M/MT/MD108B2","M/MT/MD108B3","M/MT/MD108B4"]
        required_part_location_4_of_3_4=["M/MT/MD108A1","M/MT/MD108A2","M/MT/MD108A3","M/MT/MD108A4"]
        var getting_part_location_4_of_3_1=[];
        var getting_part_location_4_of_3_2=[];
        var getting_part_location_4_of_3_3=[];
        var getting_part_location_4_of_3_4=[];
        var position_4_of_3_1_x=2020;
        var position_4_of_3_1_y=395;
        var position_4_of_3_2_x=2045;
        var position_4_of_3_2_y=395;
        var position_4_of_3_3_x=2070;
        var position_4_of_3_3_y=395;
        var position_4_of_3_4_x=2095;
        var position_4_of_3_4_y=395;
       //--------------------------1st 4 coloumn and 4 row for part M/MT/MD108


       //-------------------------------part location



       required_part_location_4th_block=["M/MT/MD105","M/MT/MD106","M/MT/MD107","M/MT/MD108"]

       var required_part_location_4th_block_1_x=2160;
       var required_part_location_4th_block_1_y=100;
       var required_part_location_4th_block_2_x=2160;
       var required_part_location_4th_block_2_y=230;
       var required_part_location_4th_block_3_x=2160;
       var required_part_location_4th_block_3_y=360;
       var required_part_location_4th_block_4_x=2160;
       var required_part_location_4th_block_4_y=485;
       var getting_required_part_location_4th_block=[];
       //-------------------------------------





       for(var j=0;j<required_part_location_4th_block.length;j++){
        
                
        var loc_dt={}
        if( required_part_location_4th_block[j]=="M/MT/MD105"){
            loc_dt['part_location']="M/MT/MD105"
            loc_dt['x_val']=required_part_location_4th_block_1_x
            loc_dt['y_val']=required_part_location_4th_block_1_y
            getting_required_part_location_4th_block.push(loc_dt)
        }//end if loop
        if( required_part_location_4th_block[j]=="M/MT/MD106"){
            loc_dt['part_location']="M/MT/MD106"
            loc_dt['x_val']=required_part_location_4th_block_2_x
            loc_dt['y_val']=required_part_location_4th_block_2_y
            getting_required_part_location_4th_block.push(loc_dt)
        }//end if loop
        if( required_part_location_4th_block[j]=="M/MT/MD107"){
            loc_dt['part_location']="M/MT/MD107"
            loc_dt['x_val']=required_part_location_4th_block_3_x
            loc_dt['y_val']=required_part_location_4th_block_3_y
            getting_required_part_location_4th_block.push(loc_dt)
        }//end if loop
        if( required_part_location_4th_block[j]=="M/MT/MD108"){
            loc_dt['part_location']="M/MT/MD108"
            loc_dt['x_val']=required_part_location_4th_block_4_x
            loc_dt['y_val']=required_part_location_4th_block_4_y
            getting_required_part_location_4th_block.push(loc_dt)
        }//end if loop
        
}//end outer for loop
    
render_map_with_part_loation["required_part_location_4th_block"]=getting_required_part_location_4th_block;



        for(var j=0;j<required_part_location_1_of_3_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_3_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_3_1_x,position_1_of_3_1_y]
                        getting_part_location_1_of_3_1.push(ids[k]);
                        position_1_of_3_1_x=position_1_of_3_1_x
                        position_1_of_3_1_y=position_1_of_3_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_1st_1"]=getting_part_location_1_of_3_1;

        for(var j=0;j<required_part_location_1_of_3_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_3_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_3_2_x,position_1_of_3_2_y]
                        getting_part_location_1_of_3_2.push(ids[k]);
                        position_1_of_3_2_x=position_1_of_3_2_x
                        position_1_of_3_2_y=position_1_of_3_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_1st_2"]=getting_part_location_1_of_3_2;

        for(var j=0;j<required_part_location_1_of_3_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_3_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_3_3_x,position_1_of_3_3_y]
                        getting_part_location_1_of_3_3.push(ids[k]);
                        position_1_of_3_3_x=position_1_of_3_3_x
                        position_1_of_3_3_y=position_1_of_3_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_1st_3"]=getting_part_location_1_of_3_3;

        for(var j=0;j<required_part_location_1_of_3_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_3_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_3_4_x,position_1_of_3_4_y]
                        getting_part_location_1_of_3_4.push(ids[k]);
                        position_1_of_3_4_x=position_1_of_3_4_x
                        position_1_of_3_4_y=position_1_of_3_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_1st_4"]=getting_part_location_1_of_3_4;

//---------------------------------------------------------------------------------------------------------
        for(var j=0;j<required_part_location_2_of_3_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_3_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_3_1_x,position_2_of_3_1_y]
                        getting_part_location_2_of_3_1.push(ids[k]);
                        position_2_of_3_1_x=position_2_of_3_1_x
                        position_2_of_3_1_y=position_2_of_3_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_2nd_1"]=getting_part_location_2_of_3_1;

        for(var j=0;j<required_part_location_2_of_3_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_3_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_3_2_x,position_2_of_3_2_y]
                        getting_part_location_2_of_3_2.push(ids[k]);
                        position_2_of_3_2_x=position_2_of_3_2_x
                        position_2_of_3_2_y=position_2_of_3_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_2nd_2"]=getting_part_location_2_of_3_2;

        for(var j=0;j<required_part_location_2_of_3_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_3_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_3_3_x,position_2_of_3_3_y]
                        getting_part_location_2_of_3_3.push(ids[k]);
                        position_2_of_3_3_x=position_2_of_3_3_x
                        position_2_of_3_3_y=position_2_of_3_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_2nd_3"]=getting_part_location_2_of_3_3;

        for(var j=0;j<required_part_location_2_of_3_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_3_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_3_4_x,position_2_of_3_4_y]
                        getting_part_location_2_of_3_4.push(ids[k]);
                        position_2_of_3_4_x=position_2_of_3_4_x
                        position_2_of_3_4_y=position_2_of_3_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_2nd_4"]=getting_part_location_2_of_3_4;

//----------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------
for(var j=0;j<required_part_location_3_of_3_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_3_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_3_1_x,position_3_of_3_1_y]
                        getting_part_location_3_of_3_1.push(ids[k]);
                        position_3_of_3_1_x=position_3_of_3_1_x
                        position_3_of_3_1_y=position_3_of_3_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_3rd_1"]=getting_part_location_3_of_3_1;

        for(var j=0;j<required_part_location_3_of_3_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_3_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_3_2_x,position_3_of_3_2_y]
                        getting_part_location_3_of_3_2.push(ids[k]);
                        position_3_of_3_2_x=position_3_of_3_2_x
                        position_3_of_3_2_y=position_3_of_3_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_3rd_2"]=getting_part_location_3_of_3_2;

        for(var j=0;j<required_part_location_3_of_3_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_3_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_3_3_x,position_3_of_3_3_y]
                        getting_part_location_3_of_3_3.push(ids[k]);
                        position_3_of_3_3_x=position_3_of_3_3_x
                        position_3_of_3_3_y=position_3_of_3_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_3rd_3"]=getting_part_location_3_of_3_3;

        for(var j=0;j<required_part_location_3_of_3_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_3_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_3_4_x,position_3_of_3_4_y]
                        getting_part_location_3_of_3_4.push(ids[k]);
                        position_3_of_3_4_x=position_3_of_3_4_x
                        position_3_of_3_4_y=position_3_of_3_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_3rd_4"]=getting_part_location_3_of_3_4;


        //---------------------------------------------------------------------------------------------------------
for(var j=0;j<required_part_location_4_of_3_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_3_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_3_1_x,position_4_of_3_1_y]
                        getting_part_location_4_of_3_1.push(ids[k]);
                        position_4_of_3_1_x=position_4_of_3_1_x
                        position_4_of_3_1_y=position_4_of_3_1_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_4th_1"]=getting_part_location_4_of_3_1;

        for(var j=0;j<required_part_location_4_of_3_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_3_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_3_2_x,position_4_of_3_2_y]
                        getting_part_location_4_of_3_2.push(ids[k]);
                        position_4_of_3_2_x=position_4_of_3_2_x
                        position_4_of_3_2_y=position_4_of_3_2_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_4th_2"]=getting_part_location_4_of_3_2;

        for(var j=0;j<required_part_location_4_of_3_3.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_3_3[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_3_3_x,position_4_of_3_3_y]
                        getting_part_location_4_of_3_3.push(ids[k]);
                        position_4_of_3_3_x=position_4_of_3_3_x
                        position_4_of_3_3_y=position_4_of_3_3_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_4th_3"]=getting_part_location_4_of_3_3;

        for(var j=0;j<required_part_location_4_of_3_4.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_3_4[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_3_4_x,position_4_of_3_4_y]
                        getting_part_location_4_of_3_4.push(ids[k]);
                        position_4_of_3_4_x=position_4_of_3_4_x
                        position_4_of_3_4_y=position_4_of_3_4_y+25;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["3rd_part_4th_4"]=getting_part_location_4_of_3_4;
//--------------------------end filling 3rd block---------------------------------------


 //--------------------------filling 1st bock-------------------------------------

 //required_part_location_1_of_3_1=["M/MT/MD105D1","M/MT/MD105D2","M/MT/MD105D3","M/MT/MD105D4"]
        required_part_location_1_of_1_1=["M/MT/FR064D2","M/MT/FR064C2","M/MT/FR064B2","M/MT/FR064A2"]
        required_part_location_1_of_1_2=["M/MT/FR064D1","M/MT/FR064C1","M/MT/FR064B1","M/MT/FR064A1"]
        var getting_part_location_1_of_1_1=[];
        var getting_part_location_1_of_1_2=[];
        var position_1_of_1_1_x=120;
        var position_1_of_1_1_y=170;
        var position_1_of_1_2_x=120;
        var position_1_of_1_2_y=185;
        for(var j=0;j<required_part_location_1_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_1_1_x,position_1_of_1_1_y]
                        getting_part_location_1_of_1_1.push(ids[k]);
                        position_1_of_1_1_x=position_1_of_1_1_x+30;
                        position_1_of_1_1_y=position_1_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_1st_1"]=getting_part_location_1_of_1_1;

        for(var j=0;j<required_part_location_1_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_1_2_x,position_1_of_1_2_y]
                        getting_part_location_1_of_1_2.push(ids[k]);
                        position_1_of_1_2_x=position_1_of_1_2_x+30;
                        position_1_of_1_2_y=position_1_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_1st_2"]=getting_part_location_1_of_1_2;

//---------------------------------------------------------------2nd of 1st------------------------
        required_part_location_2_of_1_1=["M/MT/FR063D2","M/MT/FR063C2","M/MT/FR063B2","M/MT/FR063A2"]
        required_part_location_2_of_1_2=["M/MT/FR063D1","M/MT/FR063C1","M/MT/FR063B1","M/MT/FR063A1"]
        var getting_part_location_2_of_1_1=[];
        var getting_part_location_2_of_1_2=[];
        var position_2_of_1_1_x=120;
        var position_2_of_1_1_y=215;
        var position_2_of_1_2_x=120;
        var position_2_of_1_2_y=230;
        for(var j=0;j<required_part_location_2_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_1_1_x,position_2_of_1_1_y]
                        getting_part_location_2_of_1_1.push(ids[k]);
                        position_2_of_1_1_x=position_2_of_1_1_x+30;
                        position_2_of_1_1_y=position_2_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_2nd_1"]=getting_part_location_2_of_1_1;

        for(var j=0;j<required_part_location_2_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_1_2_x,position_2_of_1_2_y]
                        getting_part_location_2_of_1_2.push(ids[k]);
                        position_2_of_1_2_x=position_2_of_1_2_x+30;
                        position_2_of_1_2_y=position_2_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_2nd_2"]=getting_part_location_2_of_1_2;


        
//-----------------------------------3rd of 1st-----------------------------

        required_part_location_3_of_1_1=["M/MT/FR062D2","M/MT/FR062C2","M/MT/FR062B2","M/MT/FR062A2"]
        required_part_location_3_of_1_2=["M/MT/FR062D1","M/MT/FR062C1","M/MT/FR062B1","M/MT/FR062A1"]
        var getting_part_location_3_of_1_1=[];
        var getting_part_location_3_of_1_2=[];
        var position_3_of_1_1_x=120;
        var position_3_of_1_1_y=260;
        var position_3_of_1_2_x=120;
        var position_3_of_1_2_y=275;
        for(var j=0;j<required_part_location_3_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_1_1_x,position_3_of_1_1_y]
                        getting_part_location_3_of_1_1.push(ids[k]);
                        position_3_of_1_1_x=position_3_of_1_1_x+30;
                        position_3_of_1_1_y=position_3_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_3rd_1"]=getting_part_location_3_of_1_1;

        for(var j=0;j<required_part_location_3_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_1_2_x,position_3_of_1_2_y]
                        getting_part_location_3_of_1_2.push(ids[k]);
                        position_3_of_1_2_x=position_3_of_1_2_x+30;
                        position_3_of_1_2_y=position_3_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_3rd_2"]=getting_part_location_3_of_1_2;



//---------------------------------------------------------------4th of 1st------------------------
        required_part_location_4_of_1_1=["M/MT/FR061D2","M/MT/FR061C2","M/MT/FR061B2","M/MT/FR061A2"]
        required_part_location_4_of_1_2=["M/MT/FR061D1","M/MT/FR061C1","M/MT/FR061B1","M/MT/FR061A1"]
        var getting_part_location_4_of_1_1=[];
        var getting_part_location_4_of_1_2=[];
        var position_4_of_1_1_x=120;
        var position_4_of_1_1_y=305;
        var position_4_of_1_2_x=120;
        var position_4_of_1_2_y=320;
        for(var j=0;j<required_part_location_4_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_1_1_x,position_4_of_1_1_y]
                        getting_part_location_4_of_1_1.push(ids[k]);
                        position_4_of_1_1_x=position_4_of_1_1_x+30;
                        position_4_of_1_1_y=position_4_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_4th_1"]=getting_part_location_4_of_1_1;

        for(var j=0;j<required_part_location_4_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_1_2_x,position_4_of_1_2_y]
                        getting_part_location_4_of_1_2.push(ids[k]);
                        position_4_of_1_2_x=position_4_of_1_2_x+30;
                        position_4_of_1_2_y=position_4_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_4th_2"]=getting_part_location_4_of_1_2;

        

    //---------------------------------------------------------------5th of 1st------------------------
        required_part_location_5_of_1_1=["M/MT/FR060D2","M/MT/FR060C2","M/MT/FR060B2","M/MT/FR060A2"]
        required_part_location_5_of_1_2=["M/MT/FR060D1","M/MT/FR060C1","M/MT/FR060B1","M/MT/FR060A1"]
        var getting_part_location_5_of_1_1=[];
        var getting_part_location_5_of_1_2=[];
        var position_5_of_1_1_x=120;
        var position_5_of_1_1_y=350;
        var position_5_of_1_2_x=120;
        var position_5_of_1_2_y=365;
        for(var j=0;j<required_part_location_5_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_1_1_x,position_5_of_1_1_y]
                        getting_part_location_5_of_1_1.push(ids[k]);
                        position_5_of_1_1_x=position_5_of_1_1_x+30;
                        position_5_of_1_1_y=position_5_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_5th_1"]=getting_part_location_5_of_1_1;

        for(var j=0;j<required_part_location_5_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_1_2_x,position_5_of_1_2_y]
                        getting_part_location_5_of_1_2.push(ids[k]);
                        position_5_of_1_2_x=position_5_of_1_2_x+30;
                        position_5_of_1_2_y=position_5_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_5th_2"]=getting_part_location_5_of_1_2;


//---------------------------------------------------------------6th of 1st------------------------
        required_part_location_6_of_1_1=["M/MT/FR059D2","M/MT/FR059C2","M/MT/FR059B2","M/MT/FR059A2"]
        required_part_location_6_of_1_2=["M/MT/FR059D1","M/MT/FR059C1","M/MT/FR059B1","M/MT/FR059A1"]
        var getting_part_location_6_of_1_1=[];
        var getting_part_location_6_of_1_2=[];
        var position_6_of_1_1_x=120;
        var position_6_of_1_1_y=395;
        var position_6_of_1_2_x=120;
        var position_6_of_1_2_y=410;
        for(var j=0;j<required_part_location_6_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_1_1_x,position_6_of_1_1_y]
                        getting_part_location_6_of_1_1.push(ids[k]);
                        position_6_of_1_1_x=position_6_of_1_1_x+30;
                        position_6_of_1_1_y=position_6_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_6th_1"]=getting_part_location_6_of_1_1;

        for(var j=0;j<required_part_location_6_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_1_2_x,position_6_of_1_2_y]
                        getting_part_location_6_of_1_2.push(ids[k]);
                        position_6_of_1_2_x=position_6_of_1_2_x+30;
                        position_6_of_1_2_y=position_6_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_6th_2"]=getting_part_location_6_of_1_2;

        

        //---------------------------------------------------------------7th of 1st------------------------
        required_part_location_7_of_1_1=["M/MT/FR058D2","M/MT/FR058C2","M/MT/FR058B2","M/MT/FR058A2"]
        required_part_location_7_of_1_2=["M/MT/FR058D1","M/MT/FR058C1","M/MT/FR058B1","M/MT/FR058A1"]
        var getting_part_location_7_of_1_1=[];
        var getting_part_location_7_of_1_2=[];
        var position_7_of_1_1_x=120;
        var position_7_of_1_1_y=440;
        var position_7_of_1_2_x=120;
        var position_7_of_1_2_y=455;
        for(var j=0;j<required_part_location_7_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_1_1_x,position_7_of_1_1_y]
                        getting_part_location_7_of_1_1.push(ids[k]);
                        position_7_of_1_1_x=position_7_of_1_1_x+30;
                        position_7_of_1_1_y=position_7_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_7th_1"]=getting_part_location_7_of_1_1;

        for(var j=0;j<required_part_location_7_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_1_2_x,position_7_of_1_2_y]
                        getting_part_location_7_of_1_2.push(ids[k]);
                        position_7_of_1_2_x=position_7_of_1_2_x+30;
                        position_7_of_1_2_y=position_7_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_7th_2"]=getting_part_location_7_of_1_2;

        
        //---------------------------------------------------------------8th of 1st------------------------
        required_part_location_8_of_1_1=["M/MT/FR057D2","M/MT/FR057C2","M/MT/FR057B2","M/MT/FR057A2"]
        required_part_location_8_of_1_2=["M/MT/FR057D1","M/MT/FR057C1","M/MT/FR057B1","M/MT/FR057A1"]
        var getting_part_location_8_of_1_1=[];
        var getting_part_location_8_of_1_2=[];
        var position_8_of_1_1_x=120;
        var position_8_of_1_1_y=485;
        var position_8_of_1_2_x=120;
        var position_8_of_1_2_y=500;
        for(var j=0;j<required_part_location_8_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_8_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_8_of_1_1_x,position_8_of_1_1_y]
                        getting_part_location_8_of_1_1.push(ids[k]);
                        position_8_of_1_1_x=position_8_of_1_1_x+30;
                        position_8_of_1_1_y=position_8_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_8th_1"]=getting_part_location_8_of_1_1;

        for(var j=0;j<required_part_location_8_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_8_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_8_of_1_2_x,position_8_of_1_2_y]
                        getting_part_location_8_of_1_2.push(ids[k]);
                        position_8_of_1_2_x=position_8_of_1_2_x+30;
                        position_8_of_1_2_y=position_8_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_8th_2"]=getting_part_location_8_of_1_2;

        //---------------------------------------------------------------9th of 1st------------------------
        required_part_location_9_of_1_1=["M/MT/FR056D2","M/MT/FR056C2","M/MT/FR056B2","M/MT/FR056A2"]
        required_part_location_9_of_1_2=["M/MT/FR056D1","M/MT/FR056C1","M/MT/FR056B1","M/MT/FR056A1"]
        var getting_part_location_9_of_1_1=[];
        var getting_part_location_9_of_1_2=[];
        var position_9_of_1_1_x=120;
        var position_9_of_1_1_y=530;
        var position_9_of_1_2_x=120;
        var position_9_of_1_2_y=545;
        for(var j=0;j<required_part_location_9_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_9_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_9_of_1_1_x,position_9_of_1_1_y]
                        getting_part_location_9_of_1_1.push(ids[k]);
                        position_9_of_1_1_x=position_9_of_1_1_x+30;
                        position_9_of_1_1_y=position_9_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_9th_1"]=getting_part_location_9_of_1_1;

        for(var j=0;j<required_part_location_9_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_9_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_9_of_1_2_x,position_9_of_1_2_y]
                        getting_part_location_9_of_1_2.push(ids[k]);
                        position_9_of_1_2_x=position_9_of_1_2_x+30;
                        position_9_of_1_2_y=position_9_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_9th_2"]=getting_part_location_9_of_1_2;

        
        //---------------------------------------------------------------10th of 1st------------------------
        required_part_location_10_of_1_1=["M/MT/FR055D2","M/MT/FR055C2","M/MT/FR055B2","M/MT/FR055A2"]
        required_part_location_10_of_1_2=["M/MT/FR055D1","M/MT/FR055C1","M/MT/FR055B1","M/MT/FR055A1"]
        var getting_part_location_10_of_1_1=[];
        var getting_part_location_10_of_1_2=[];
        var position_10_of_1_1_x=120;
        var position_10_of_1_1_y=575;
        var position_10_of_1_2_x=120;
        var position_10_of_1_2_y=590;
        for(var j=0;j<required_part_location_10_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_10_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_10_of_1_1_x,position_10_of_1_1_y]
                        getting_part_location_10_of_1_1.push(ids[k]);
                        position_10_of_1_1_x=position_10_of_1_1_x+30;
                        position_10_of_1_1_y=position_10_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_10th_1"]=getting_part_location_10_of_1_1;

        for(var j=0;j<required_part_location_10_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_10_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_10_of_1_2_x,position_10_of_1_2_y]
                        getting_part_location_10_of_1_2.push(ids[k]);
                        position_10_of_1_2_x=position_10_of_1_2_x+30;
                        position_10_of_1_2_y=position_10_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_10th_2"]=getting_part_location_10_of_1_2;
//---------------------------------------------------------------11th of 1st------------------------
        required_part_location_11_of_1_1=["M/MT/FR054D2","M/MT/FR054C2","M/MT/FR054B2","M/MT/FR054A2"]
        required_part_location_11_of_1_2=["M/MT/FR054D1","M/MT/FR054C1","M/MT/FR054B1","M/MT/FR054A1"]
        var getting_part_location_11_of_1_1=[];
        var getting_part_location_11_of_1_2=[];
        var position_11_of_1_1_x=120;
        var position_11_of_1_1_y=620;
        var position_11_of_1_2_x=120;
        var position_11_of_1_2_y=635;
        for(var j=0;j<required_part_location_11_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_11_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_11_of_1_1_x,position_11_of_1_1_y]
                        getting_part_location_11_of_1_1.push(ids[k]);
                        position_11_of_1_1_x=position_11_of_1_1_x+30;
                        position_11_of_1_1_y=position_11_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_11th_1"]=getting_part_location_11_of_1_1;

        for(var j=0;j<required_part_location_11_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_11_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_11_of_1_2_x,position_11_of_1_2_y]
                        getting_part_location_11_of_1_2.push(ids[k]);
                        position_11_of_1_2_x=position_11_of_1_2_x+30;
                        position_11_of_1_2_y=position_11_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_11th_2"]=getting_part_location_11_of_1_2;
//---------------------------------------------------------------12th of 1st------------------------
        required_part_location_12_of_1_1=["M/MT/FR053D2","M/MT/FR053C2","M/MT/FR053B2","M/MT/FR053A2"]
        required_part_location_12_of_1_2=["M/MT/FR053D1","M/MT/FR053C1","M/MT/FR053B1","M/MT/FR053A1"]
        var getting_part_location_12_of_1_1=[];
        var getting_part_location_12_of_1_2=[];
        var position_12_of_1_1_x=120;
        var position_12_of_1_1_y=665;
        var position_12_of_1_2_x=120;
        var position_12_of_1_2_y=680;
        for(var j=0;j<required_part_location_12_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_12_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_12_of_1_1_x,position_12_of_1_1_y]
                        getting_part_location_12_of_1_1.push(ids[k]);
                        position_12_of_1_1_x=position_12_of_1_1_x+30;
                        position_12_of_1_1_y=position_12_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_12th_1"]=getting_part_location_12_of_1_1;

        for(var j=0;j<required_part_location_12_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_12_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_12_of_1_2_x,position_12_of_1_2_y]
                        getting_part_location_12_of_1_2.push(ids[k]);
                        position_12_of_1_2_x=position_12_of_1_2_x+30;
                        position_12_of_1_2_y=position_12_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_12th_2"]=getting_part_location_12_of_1_2;

     //---------------------------------------------------------------13th of 1st------------------------
        required_part_location_13_of_1_1=["M/MT/FR052D2","M/MT/FR052C2","M/MT/FR052B2","M/MT/FR052A2"]
        required_part_location_13_of_1_2=["M/MT/FR052D1","M/MT/FR052C1","M/MT/FR052B1","M/MT/FR052A1"]
        var getting_part_location_13_of_1_1=[];
        var getting_part_location_13_of_1_2=[];
        var position_13_of_1_1_x=120;
        var position_13_of_1_1_y=710;
        var position_13_of_1_2_x=120;
        var position_13_of_1_2_y=725;
        for(var j=0;j<required_part_location_13_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_13_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_13_of_1_1_x,position_13_of_1_1_y]
                        getting_part_location_13_of_1_1.push(ids[k]);
                        position_13_of_1_1_x=position_13_of_1_1_x+30;
                        position_13_of_1_1_y=position_13_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_13th_1"]=getting_part_location_13_of_1_1;

        for(var j=0;j<required_part_location_13_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_13_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_13_of_1_2_x,position_13_of_1_2_y]
                        getting_part_location_13_of_1_2.push(ids[k]);
                        position_13_of_1_2_x=position_13_of_1_2_x+30;
                        position_13_of_1_2_y=position_13_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_13th_2"]=getting_part_location_13_of_1_2;

        //---------------------------------------------------------------14th of 1st------------------------
        required_part_location_14_of_1_1=["M/MT/FR051D2","M/MT/FR051C2","M/MT/FR051B2","M/MT/FR051A2"]
        required_part_location_14_of_1_2=["M/MT/FR051D1","M/MT/FR051C1","M/MT/FR051B1","M/MT/FR051A1"]
        var getting_part_location_14_of_1_1=[];
        var getting_part_location_14_of_1_2=[];
        var position_14_of_1_1_x=120;
        var position_14_of_1_1_y=755;
        var position_14_of_1_2_x=120;
        var position_14_of_1_2_y=770;
        for(var j=0;j<required_part_location_14_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_14_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_14_of_1_1_x,position_14_of_1_1_y]
                        getting_part_location_14_of_1_1.push(ids[k]);
                        position_14_of_1_1_x=position_14_of_1_1_x+30;
                        position_14_of_1_1_y=position_14_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_14th_1"]=getting_part_location_14_of_1_1;

        for(var j=0;j<required_part_location_14_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_14_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_14_of_1_2_x,position_14_of_1_2_y]
                        getting_part_location_14_of_1_2.push(ids[k]);
                        position_14_of_1_2_x=position_14_of_1_2_x+30;
                        position_14_of_1_2_y=position_14_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_14th_2"]=getting_part_location_14_of_1_2;

//---------------------------------------------------------------15th of 1st------------------------
        required_part_location_15_of_1_1=["M/MT/FR050D2","M/MT/FR050C2","M/MT/FR050B2","M/MT/FR050A2"]
        required_part_location_15_of_1_2=["M/MT/FR050D1","M/MT/FR050C1","M/MT/FR050B1","M/MT/FR050A1"]
        var getting_part_location_15_of_1_1=[];
        var getting_part_location_15_of_1_2=[];
        var position_15_of_1_1_x=120;
        var position_15_of_1_1_y=800;
        var position_15_of_1_2_x=120;
        var position_15_of_1_2_y=815;
        for(var j=0;j<required_part_location_15_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_15_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_15_of_1_1_x,position_15_of_1_1_y]
                        getting_part_location_15_of_1_1.push(ids[k]);
                        position_15_of_1_1_x=position_15_of_1_1_x+30;
                        position_15_of_1_1_y=position_15_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_15th_1"]=getting_part_location_15_of_1_1;

        for(var j=0;j<required_part_location_15_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_15_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_15_of_1_2_x,position_15_of_1_2_y]
                        getting_part_location_15_of_1_2.push(ids[k]);
                        position_15_of_1_2_x=position_15_of_1_2_x+30;
                        position_15_of_1_2_y=position_15_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_15th_2"]=getting_part_location_15_of_1_2;


//---------------------------------------------------------------16th of 1st------------------------
        required_part_location_16_of_1_1=["M/MT/FR049D2","M/MT/FR049C2","M/MT/FR049B2","M/MT/FR049A2"]
        required_part_location_16_of_1_2=["M/MT/FR049D1","M/MT/FR049C1","M/MT/FR049B1","M/MT/FR049A1"]
        var getting_part_location_16_of_1_1=[];
        var getting_part_location_16_of_1_2=[];
        var position_16_of_1_1_x=120;
        var position_16_of_1_1_y=845;
        var position_16_of_1_2_x=120;
        var position_16_of_1_2_y=860;
        for(var j=0;j<required_part_location_16_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_16_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_16_of_1_1_x,position_16_of_1_1_y]
                        getting_part_location_16_of_1_1.push(ids[k]);
                        position_16_of_1_1_x=position_16_of_1_1_x+30;
                        position_16_of_1_1_y=position_16_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_16th_1"]=getting_part_location_16_of_1_1;

        for(var j=0;j<required_part_location_16_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_16_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_16_of_1_2_x,position_16_of_1_2_y]
                        getting_part_location_16_of_1_2.push(ids[k]);
                        position_16_of_1_2_x=position_16_of_1_2_x+30;
                        position_16_of_1_2_y=position_16_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_16th_2"]=getting_part_location_16_of_1_2;

//---------------------------------------------------------------17th of 1st------------------------
        required_part_location_17_of_1_1=["M/MT/FR048D2","M/MT/FR048C2","M/MT/FR048B2","M/MT/FR048A2"]
        required_part_location_17_of_1_2=["M/MT/FR048D1","M/MT/FR048C1","M/MT/FR048B1","M/MT/FR048A1"]
        var getting_part_location_17_of_1_1=[];
        var getting_part_location_17_of_1_2=[];
        var position_17_of_1_1_x=120;
        var position_17_of_1_1_y=890;
        var position_17_of_1_2_x=120;
        var position_17_of_1_2_y=905;
        for(var j=0;j<required_part_location_17_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_17_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_17_of_1_1_x,position_17_of_1_1_y]
                        getting_part_location_17_of_1_1.push(ids[k]);
                        position_17_of_1_1_x=position_17_of_1_1_x+30;
                        position_17_of_1_1_y=position_17_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_17th_1"]=getting_part_location_17_of_1_1;

        for(var j=0;j<required_part_location_17_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_17_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_17_of_1_2_x,position_17_of_1_2_y]
                        getting_part_location_17_of_1_2.push(ids[k]);
                        position_17_of_1_2_x=position_17_of_1_2_x+30;
                        position_17_of_1_2_y=position_17_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_17th_2"]=getting_part_location_17_of_1_2;

//---------------------------------------------------------------18th of 1st------------------------
        required_part_location_18_of_1_1=["M/MT/FR047D2","M/MT/FR047C2","M/MT/FR047B2","M/MT/FR047A2"]
        required_part_location_18_of_1_2=["M/MT/FR047D1","M/MT/FR047C1","M/MT/FR047B1","M/MT/FR047A1"]
        var getting_part_location_18_of_1_1=[];
        var getting_part_location_18_of_1_2=[];
        var position_18_of_1_1_x=120;
        var position_18_of_1_1_y=935;
        var position_18_of_1_2_x=120;
        var position_18_of_1_2_y=950;
        for(var j=0;j<required_part_location_18_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_18_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_18_of_1_1_x,position_18_of_1_1_y]
                        getting_part_location_18_of_1_1.push(ids[k]);
                        position_18_of_1_1_x=position_18_of_1_1_x+30;
                        position_18_of_1_1_y=position_18_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_18th_1"]=getting_part_location_18_of_1_1;

        for(var j=0;j<required_part_location_18_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_18_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_18_of_1_2_x,position_18_of_1_2_y]
                        getting_part_location_18_of_1_2.push(ids[k]);
                        position_18_of_1_2_x=position_18_of_1_2_x+30;
                        position_18_of_1_2_y=position_18_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_18th_2"]=getting_part_location_18_of_1_2;
//---------------------------------------------------------------19th of 1st------------------------
        required_part_location_19_of_1_1=["M/MT/FR046D2","M/MT/FR046C2","M/MT/FR046B2","M/MT/FR046A2"]
        required_part_location_19_of_1_2=["M/MT/FR046D1","M/MT/FR046C1","M/MT/FR046B1","M/MT/FR046A1"]
        var getting_part_location_19_of_1_1=[];
        var getting_part_location_19_of_1_2=[];
        var position_19_of_1_1_x=120;
        var position_19_of_1_1_y=980;
        var position_19_of_1_2_x=120;
        var position_19_of_1_2_y=995;
        for(var j=0;j<required_part_location_19_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_19_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_19_of_1_1_x,position_19_of_1_1_y]
                        getting_part_location_19_of_1_1.push(ids[k]);
                        position_19_of_1_1_x=position_19_of_1_1_x+30;
                        position_19_of_1_1_y=position_19_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_19th_1"]=getting_part_location_19_of_1_1;

        for(var j=0;j<required_part_location_19_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_19_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_19_of_1_2_x,position_19_of_1_2_y]
                        getting_part_location_19_of_1_2.push(ids[k]);
                        position_19_of_1_2_x=position_19_of_1_2_x+30;
                        position_19_of_1_2_y=position_19_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_19th_2"]=getting_part_location_19_of_1_2;

//---------------------------------------------------------------20th of 1st------------------------
        required_part_location_20_of_1_1=["M/MT/FR045D2","M/MT/FR045C2","M/MT/FR045B2","M/MT/FR045A2"]
        required_part_location_20_of_1_2=["M/MT/FR045D1","M/MT/FR045C1","M/MT/FR045B1","M/MT/FR045A1"]
        var getting_part_location_20_of_1_1=[];
        var getting_part_location_20_of_1_2=[];
        var position_20_of_1_1_x=120;
        var position_20_of_1_1_y=1025;
        var position_20_of_1_2_x=120;
        var position_20_of_1_2_y=1040;
        for(var j=0;j<required_part_location_20_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_20_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_20_of_1_1_x,position_20_of_1_1_y]
                        getting_part_location_20_of_1_1.push(ids[k]);
                        position_20_of_1_1_x=position_20_of_1_1_x+30;
                        position_20_of_1_1_y=position_20_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_20th_1"]=getting_part_location_20_of_1_1;

        for(var j=0;j<required_part_location_20_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_20_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_20_of_1_2_x,position_20_of_1_2_y]
                        getting_part_location_20_of_1_2.push(ids[k]);
                        position_20_of_1_2_x=position_20_of_1_2_x+30;
                        position_20_of_1_2_y=position_20_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_20th_2"]=getting_part_location_20_of_1_2;

//---------------------------------------------------------------21th of 1st------------------------
        required_part_location_21_of_1_1=["M/MT/FR044D2","M/MT/FR044C2","M/MT/FR044B2","M/MT/FR044A2"]
        required_part_location_21_of_1_2=["M/MT/FR044D1","M/MT/FR044C1","M/MT/FR044B1","M/MT/FR044A1"]
        var getting_part_location_21_of_1_1=[];
        var getting_part_location_21_of_1_2=[];
        var position_21_of_1_1_x=120;
        var position_21_of_1_1_y=1070;
        var position_21_of_1_2_x=120;
        var position_21_of_1_2_y=1085;
        for(var j=0;j<required_part_location_21_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_21_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_21_of_1_1_x,position_21_of_1_1_y]
                        getting_part_location_21_of_1_1.push(ids[k]);
                        position_21_of_1_1_x=position_21_of_1_1_x+30;
                        position_21_of_1_1_y=position_21_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_21th_1"]=getting_part_location_21_of_1_1;

        for(var j=0;j<required_part_location_21_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_21_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_21_of_1_2_x,position_21_of_1_2_y]
                        getting_part_location_21_of_1_2.push(ids[k]);
                        position_21_of_1_2_x=position_21_of_1_2_x+30;
                        position_21_of_1_2_y=position_21_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_21th_2"]=getting_part_location_21_of_1_2;

//---------------------------------------------------------------22th of 1st------------------------
        required_part_location_22_of_1_1=["M/MT/FR043D2","M/MT/FR043C2","M/MT/FR043B2","M/MT/FR043A2"]
        required_part_location_22_of_1_2=["M/MT/FR043D1","M/MT/FR043C1","M/MT/FR043B1","M/MT/FR043A1"]
        var getting_part_location_22_of_1_1=[];
        var getting_part_location_22_of_1_2=[];
        var position_22_of_1_1_x=120;
        var position_22_of_1_1_y=1115;
        var position_22_of_1_2_x=120;
        var position_22_of_1_2_y=1130;
        for(var j=0;j<required_part_location_22_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_22_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_22_of_1_1_x,position_22_of_1_1_y]
                        getting_part_location_22_of_1_1.push(ids[k]);
                        position_22_of_1_1_x=position_22_of_1_1_x+30;
                        position_22_of_1_1_y=position_22_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_22th_1"]=getting_part_location_22_of_1_1;

        for(var j=0;j<required_part_location_22_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_22_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_22_of_1_2_x,position_22_of_1_2_y]
                        getting_part_location_22_of_1_2.push(ids[k]);
                        position_22_of_1_2_x=position_22_of_1_2_x+30;
                        position_22_of_1_2_y=position_22_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_22th_2"]=getting_part_location_22_of_1_2;

        
        //---------------------------------------------------------------23th of 1st------------------------
        required_part_location_23_of_1_1=["M/MT/FR042D2","M/MT/FR042C2","M/MT/FR042B2","M/MT/FR042A2"]
        required_part_location_23_of_1_2=["M/MT/FR042D1","M/MT/FR042C1","M/MT/FR042B1","M/MT/FR042A1"]
        var getting_part_location_23_of_1_1=[];
        var getting_part_location_23_of_1_2=[];
        var position_23_of_1_1_x=120;
        var position_23_of_1_1_y=1160;
        var position_23_of_1_2_x=120;
        var position_23_of_1_2_y=1175;
        for(var j=0;j<required_part_location_23_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_23_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_23_of_1_1_x,position_23_of_1_1_y]
                        getting_part_location_23_of_1_1.push(ids[k]);
                        position_23_of_1_1_x=position_23_of_1_1_x+30;
                        position_23_of_1_1_y=position_23_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_23th_1"]=getting_part_location_23_of_1_1;

        for(var j=0;j<required_part_location_23_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_23_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_23_of_1_2_x,position_23_of_1_2_y]
                        getting_part_location_23_of_1_2.push(ids[k]);
                        position_23_of_1_2_x=position_23_of_1_2_x+30;
                        position_23_of_1_2_y=position_23_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_23th_2"]=getting_part_location_23_of_1_2;
 //---------------------------------------------------------------24th of 1st------------------------
        required_part_location_24_of_1_1=["M/MT/FR041D2","M/MT/FR041C2","M/MT/FR041B2","M/MT/FR041A2"]
        required_part_location_24_of_1_2=["M/MT/FR041D1","M/MT/FR041C1","M/MT/FR041B1","M/MT/FR041A1"]
        var getting_part_location_24_of_1_1=[];
        var getting_part_location_24_of_1_2=[];
        var position_24_of_1_1_x=120;
        var position_24_of_1_1_y=1205;
        var position_24_of_1_2_x=120;
        var position_24_of_1_2_y=1220;
        for(var j=0;j<required_part_location_24_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_24_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_24_of_1_1_x,position_24_of_1_1_y]
                        getting_part_location_24_of_1_1.push(ids[k]);
                        position_24_of_1_1_x=position_24_of_1_1_x+30;
                        position_24_of_1_1_y=position_24_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_24th_1"]=getting_part_location_24_of_1_1;

        for(var j=0;j<required_part_location_24_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_24_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_24_of_1_2_x,position_24_of_1_2_y]
                        getting_part_location_24_of_1_2.push(ids[k]);
                        position_24_of_1_2_x=position_24_of_1_2_x+30;
                        position_24_of_1_2_y=position_24_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_24th_2"]=getting_part_location_24_of_1_2;

      //---------------------------------------------------------------25th of 1st------------------------
        required_part_location_25_of_1_1=["M/MT/FR040D2","M/MT/FR040C2","M/MT/FR040B2","M/MT/FR040A2"]
        required_part_location_25_of_1_2=["M/MT/FR040D1","M/MT/FR040C1","M/MT/FR040B1","M/MT/FR040A1"]
        var getting_part_location_25_of_1_1=[];
        var getting_part_location_25_of_1_2=[];
        var position_25_of_1_1_x=120;
        var position_25_of_1_1_y=1250;
        var position_25_of_1_2_x=120;
        var position_25_of_1_2_y=1265;
        for(var j=0;j<required_part_location_25_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_25_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_25_of_1_1_x,position_25_of_1_1_y]
                        getting_part_location_25_of_1_1.push(ids[k]);
                        position_25_of_1_1_x=position_25_of_1_1_x+30;
                        position_25_of_1_1_y=position_25_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_25th_1"]=getting_part_location_25_of_1_1;

        for(var j=0;j<required_part_location_25_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_25_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_25_of_1_2_x,position_25_of_1_2_y]
                        getting_part_location_25_of_1_2.push(ids[k]);
                        position_25_of_1_2_x=position_25_of_1_2_x+30;
                        position_25_of_1_2_y=position_25_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_25th_2"]=getting_part_location_25_of_1_2;


//---------------------------------------------------------------26th of 1st------------------------
        required_part_location_26_of_1_1=["M/MT/FR039D2","M/MT/FR039C2","M/MT/FR039B2","M/MT/FR039A2"]
        required_part_location_26_of_1_2=["M/MT/FR039D1","M/MT/FR039C1","M/MT/FR039B1","M/MT/FR039A1"]
        var getting_part_location_26_of_1_1=[];
        var getting_part_location_26_of_1_2=[];
        var position_26_of_1_1_x=120;
        var position_26_of_1_1_y=1295;
        var position_26_of_1_2_x=120;
        var position_26_of_1_2_y=1310;
        for(var j=0;j<required_part_location_26_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_26_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_26_of_1_1_x,position_26_of_1_1_y]
                        getting_part_location_26_of_1_1.push(ids[k]);
                        position_26_of_1_1_x=position_26_of_1_1_x+30;
                        position_26_of_1_1_y=position_26_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_26th_1"]=getting_part_location_26_of_1_1;

        for(var j=0;j<required_part_location_26_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_26_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_26_of_1_2_x,position_26_of_1_2_y]
                        getting_part_location_26_of_1_2.push(ids[k]);
                        position_26_of_1_2_x=position_26_of_1_2_x+30;
                        position_26_of_1_2_y=position_26_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_26th_2"]=getting_part_location_26_of_1_2;

//---------------------------------------------------------------27th of 1st------------------------
        required_part_location_27_of_1_1=["M/MT/FR038D2","M/MT/FR038C2","M/MT/FR038B2","M/MT/FR038A2"]
        required_part_location_27_of_1_2=["M/MT/FR038D1","M/MT/FR038C1","M/MT/FR038B1","M/MT/FR038A1"]
        var getting_part_location_27_of_1_1=[];
        var getting_part_location_27_of_1_2=[];
        var position_27_of_1_1_x=120;
        var position_27_of_1_1_y=1340;
        var position_27_of_1_2_x=120;
        var position_27_of_1_2_y=1355;
        for(var j=0;j<required_part_location_27_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_27_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_27_of_1_1_x,position_27_of_1_1_y]
                        getting_part_location_27_of_1_1.push(ids[k]);
                        position_27_of_1_1_x=position_27_of_1_1_x+30;
                        position_27_of_1_1_y=position_27_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_27th_1"]=getting_part_location_27_of_1_1;

        for(var j=0;j<required_part_location_27_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_27_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_27_of_1_2_x,position_27_of_1_2_y]
                        getting_part_location_27_of_1_2.push(ids[k]);
                        position_27_of_1_2_x=position_27_of_1_2_x+30;
                        position_27_of_1_2_y=position_27_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_27th_2"]=getting_part_location_27_of_1_2;

//---------------------------------------------------------------28th of 1st------------------------
        required_part_location_28_of_1_1=["M/MT/FR037D2","M/MT/FR037C2","M/MT/FR037B2","M/MT/FR037A2"]
        required_part_location_28_of_1_2=["M/MT/FR037D1","M/MT/FR037C1","M/MT/FR037B1","M/MT/FR037A1"]
        var getting_part_location_28_of_1_1=[];
        var getting_part_location_28_of_1_2=[];
        var position_28_of_1_1_x=120;
        var position_28_of_1_1_y=1385;
        var position_28_of_1_2_x=120;
        var position_28_of_1_2_y=1400;
        for(var j=0;j<required_part_location_28_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_28_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_28_of_1_1_x,position_28_of_1_1_y]
                        getting_part_location_28_of_1_1.push(ids[k]);
                        position_28_of_1_1_x=position_28_of_1_1_x+30;
                        position_28_of_1_1_y=position_28_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_28th_1"]=getting_part_location_28_of_1_1;

        for(var j=0;j<required_part_location_28_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_28_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_28_of_1_2_x,position_28_of_1_2_y]
                        getting_part_location_28_of_1_2.push(ids[k]);
                        position_28_of_1_2_x=position_28_of_1_2_x+30;
                        position_28_of_1_2_y=position_28_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_28th_2"]=getting_part_location_28_of_1_2;

        //---------------------------------------------------------------29th of 1st------------------------
        required_part_location_29_of_1_1=["M/MT/FR036D2","M/MT/FR036C2","M/MT/FR036B2","M/MT/FR036A2"]
        required_part_location_29_of_1_2=["M/MT/FR036D1","M/MT/FR036C1","M/MT/FR036B1","M/MT/FR036A1"]
        var getting_part_location_29_of_1_1=[];
        var getting_part_location_29_of_1_2=[];
        var position_29_of_1_1_x=120;
        var position_29_of_1_1_y=1430;
        var position_29_of_1_2_x=120;
        var position_29_of_1_2_y=1445;
        for(var j=0;j<required_part_location_29_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_29_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_29_of_1_1_x,position_29_of_1_1_y]
                        getting_part_location_29_of_1_1.push(ids[k]);
                        position_29_of_1_1_x=position_29_of_1_1_x+30;
                        position_29_of_1_1_y=position_29_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_29th_1"]=getting_part_location_29_of_1_1;

        for(var j=0;j<required_part_location_29_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_29_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_29_of_1_2_x,position_29_of_1_2_y]
                        getting_part_location_29_of_1_2.push(ids[k]);
                        position_29_of_1_2_x=position_29_of_1_2_x+30;
                        position_29_of_1_2_y=position_29_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_29th_2"]=getting_part_location_29_of_1_2;

        
         //---------------------------------------------------------------30th of 1st------------------------
        required_part_location_30_of_1_1=["M/MT/FR035D2","M/MT/FR035C2","M/MT/FR035B2","M/MT/FR035A2"]
        required_part_location_30_of_1_2=["M/MT/FR035D1","M/MT/FR035C1","M/MT/FR035B1","M/MT/FR035A1"]
        var getting_part_location_30_of_1_1=[];
        var getting_part_location_30_of_1_2=[];
        var position_30_of_1_1_x=120;
        var position_30_of_1_1_y=1475;
        var position_30_of_1_2_x=120;
        var position_30_of_1_2_y=1490;
        for(var j=0;j<required_part_location_30_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_30_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_30_of_1_1_x,position_30_of_1_1_y]
                        getting_part_location_30_of_1_1.push(ids[k]);
                        position_30_of_1_1_x=position_30_of_1_1_x+30;
                        position_30_of_1_1_y=position_30_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_30th_1"]=getting_part_location_30_of_1_1;

        for(var j=0;j<required_part_location_30_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_30_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_30_of_1_2_x,position_30_of_1_2_y]
                        getting_part_location_30_of_1_2.push(ids[k]);
                        position_30_of_1_2_x=position_30_of_1_2_x+30;
                        position_30_of_1_2_y=position_30_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_30th_2"]=getting_part_location_30_of_1_2;

        
        //---------------------------------------------------------------31th of 1st------------------------
        required_part_location_31_of_1_1=["M/MT/FR034D2","M/MT/FR034C2","M/MT/FR034B2","M/MT/FR034A2"]
        required_part_location_31_of_1_2=["M/MT/FR034D1","M/MT/FR034C1","M/MT/FR034B1","M/MT/FR034A1"]
        var getting_part_location_31_of_1_1=[];
        var getting_part_location_31_of_1_2=[];
        var position_31_of_1_1_x=120;
        var position_31_of_1_1_y=1520;
        var position_31_of_1_2_x=120;
        var position_31_of_1_2_y=1535;
        for(var j=0;j<required_part_location_31_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_31_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_31_of_1_1_x,position_31_of_1_1_y]
                        getting_part_location_31_of_1_1.push(ids[k]);
                        position_31_of_1_1_x=position_31_of_1_1_x+30;
                        position_31_of_1_1_y=position_31_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_31th_1"]=getting_part_location_31_of_1_1;

        for(var j=0;j<required_part_location_31_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_31_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_31_of_1_2_x,position_31_of_1_2_y]
                        getting_part_location_31_of_1_2.push(ids[k]);
                        position_31_of_1_2_x=position_31_of_1_2_x+30;
                        position_31_of_1_2_y=position_31_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_31th_2"]=getting_part_location_31_of_1_2;


 //---------------------------------------------------------------32th of 1st------------------------
        required_part_location_32_of_1_1=["M/MT/FR033D2","M/MT/FR033C2","M/MT/FR033B2","M/MT/FR033A2"]
        required_part_location_32_of_1_2=["M/MT/FR033D1","M/MT/FR033C1","M/MT/FR033B1","M/MT/FR033A1"]
        var getting_part_location_32_of_1_1=[];
        var getting_part_location_32_of_1_2=[];
        var position_32_of_1_1_x=120;
        var position_32_of_1_1_y=1565;
        var position_32_of_1_2_x=120;
        var position_32_of_1_2_y=1580;
        for(var j=0;j<required_part_location_32_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_32_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_32_of_1_1_x,position_32_of_1_1_y]
                        getting_part_location_32_of_1_1.push(ids[k]);
                        position_32_of_1_1_x=position_32_of_1_1_x+30;
                        position_32_of_1_1_y=position_32_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_32th_1"]=getting_part_location_32_of_1_1;

        for(var j=0;j<required_part_location_32_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_32_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_32_of_1_2_x,position_32_of_1_2_y]
                        getting_part_location_32_of_1_2.push(ids[k]);
                        position_32_of_1_2_x=position_32_of_1_2_x+30;
                        position_32_of_1_2_y=position_32_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_32th_2"]=getting_part_location_32_of_1_2;

        //---------------------------------------------------------------33th of 1st------------------------
        required_part_location_33_of_1_1=["M/MT/FR032D2","M/MT/FR032C2","M/MT/FR032B2","M/MT/FR032A2"]
        required_part_location_33_of_1_2=["M/MT/FR032D1","M/MT/FR032C1","M/MT/FR032B1","M/MT/FR032A1"]
        var getting_part_location_33_of_1_1=[];
        var getting_part_location_33_of_1_2=[];
        var position_33_of_1_1_x=120;
        var position_33_of_1_1_y=1610;
        var position_33_of_1_2_x=120;
        var position_33_of_1_2_y=1625;
        for(var j=0;j<required_part_location_33_of_1_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_33_of_1_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_33_of_1_1_x,position_33_of_1_1_y]
                        getting_part_location_33_of_1_1.push(ids[k]);
                        position_33_of_1_1_x=position_33_of_1_1_x+30;
                        position_33_of_1_1_y=position_33_of_1_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["1st_part_33th_1"]=getting_part_location_33_of_1_1;

        for(var j=0;j<required_part_location_33_of_1_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_33_of_1_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_33_of_1_2_x,position_33_of_1_2_y]
                        getting_part_location_33_of_1_2.push(ids[k]);
                        position_33_of_1_2_x=position_33_of_1_2_x+30;
                        position_33_of_1_2_y=position_33_of_1_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["1st_part_33th_2"]=getting_part_location_33_of_1_2;


//--------------------------------------------------------- start here 7th block fill--------------------------------
//---------------------------------------------------------------1st of 7th------------------------
        required_part_location_1_of_7_1=["M/MT/FR029D2","M/MT/FR029C2","M/MT/FR029B2","M/MT/FR029A2"]
        required_part_location_1_of_7_2=["M/MT/FR029D1","M/MT/FR029C1","M/MT/FR029B1","M/MT/FR029A1"]
        var getting_part_location_1_of_7_1=[];
        var getting_part_location_1_of_7_2=[];
        var position_1_of_7_1_x=120;
        var position_1_of_7_1_y=1780;
        var position_1_of_7_2_x=120;
        var position_1_of_7_2_y=1795;
        for(var j=0;j<required_part_location_1_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_7_1_x,position_1_of_7_1_y]
                        getting_part_location_1_of_7_1.push(ids[k]);
                        position_1_of_7_1_x=position_1_of_7_1_x+30;
                        position_1_of_7_1_y=position_1_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_1st_1"]=getting_part_location_1_of_7_1;

        for(var j=0;j<required_part_location_1_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_1_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_1_of_7_2_x,position_1_of_7_2_y]
                        getting_part_location_1_of_7_2.push(ids[k]);
                        position_1_of_7_2_x=position_1_of_7_2_x+30;
                        position_1_of_7_2_y=position_1_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_1st_2"]=getting_part_location_1_of_7_2;


//---------------------------------------------------------------2nd of 7th------------------------
        required_part_location_2_of_7_1=["M/MT/FR028D2","M/MT/FR028C2","M/MT/FR028B2","M/MT/FR028A2"]
        required_part_location_2_of_7_2=["M/MT/FR028D1","M/MT/FR028C1","M/MT/FR028B1","M/MT/FR028A1"]
        var getting_part_location_2_of_7_1=[];
        var getting_part_location_2_of_7_2=[];
        var position_2_of_7_1_x=120;
        var position_2_of_7_1_y=1825;
        var position_2_of_7_2_x=120;
        var position_2_of_7_2_y=1840;
        for(var j=0;j<required_part_location_2_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_7_1_x,position_2_of_7_1_y]
                        getting_part_location_2_of_7_1.push(ids[k]);
                        position_2_of_7_1_x=position_2_of_7_1_x+30;
                        position_2_of_7_1_y=position_2_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_2nd_1"]=getting_part_location_2_of_7_1;

        for(var j=0;j<required_part_location_2_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_2_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_2_of_7_2_x,position_2_of_7_2_y]
                        getting_part_location_2_of_7_2.push(ids[k]);
                        position_2_of_7_2_x=position_2_of_7_2_x+30;
                        position_2_of_7_2_y=position_2_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_2nd_2"]=getting_part_location_2_of_7_2;

        

        //---------------------------------------------------------------3rd of 7th------------------------
        required_part_location_3_of_7_1=["M/MT/FR027D2","M/MT/FR027C2","M/MT/FR027B2","M/MT/FR027A2"]
        required_part_location_3_of_7_2=["M/MT/FR027D1","M/MT/FR027C1","M/MT/FR027B1","M/MT/FR027A1"]
        var getting_part_location_3_of_7_1=[];
        var getting_part_location_3_of_7_2=[];
        var position_3_of_7_1_x=120;
        var position_3_of_7_1_y=1870;
        var position_3_of_7_2_x=120;
        var position_3_of_7_2_y=1885;
        for(var j=0;j<required_part_location_3_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_7_1_x,position_3_of_7_1_y]
                        getting_part_location_3_of_7_1.push(ids[k]);
                        position_3_of_7_1_x=position_3_of_7_1_x+30;
                        position_3_of_7_1_y=position_3_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_3rd_1"]=getting_part_location_3_of_7_1;

        for(var j=0;j<required_part_location_3_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_3_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_3_of_7_2_x,position_3_of_7_2_y]
                        getting_part_location_3_of_7_2.push(ids[k]);
                        position_3_of_7_2_x=position_3_of_7_2_x+30;
                        position_3_of_7_2_y=position_3_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_3rd_2"]=getting_part_location_3_of_7_2;



//---------------------------------------------------------------4th of 7th------------------------
        required_part_location_4_of_7_1=["M/MT/FR026D2","M/MT/FR026C2","M/MT/FR026B2","M/MT/FR026A2"]
        required_part_location_4_of_7_2=["M/MT/FR026D1","M/MT/FR026C1","M/MT/FR026B1","M/MT/FR026A1"]
        var getting_part_location_4_of_7_1=[];
        var getting_part_location_4_of_7_2=[];
        var position_4_of_7_1_x=120;
        var position_4_of_7_1_y=1915;
        var position_4_of_7_2_x=120;
        var position_4_of_7_2_y=1930;
        for(var j=0;j<required_part_location_4_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_7_1_x,position_4_of_7_1_y]
                        getting_part_location_4_of_7_1.push(ids[k]);
                        position_4_of_7_1_x=position_4_of_7_1_x+30;
                        position_4_of_7_1_y=position_4_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_4th_1"]=getting_part_location_4_of_7_1;

        for(var j=0;j<required_part_location_4_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_4_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_4_of_7_2_x,position_4_of_7_2_y]
                        getting_part_location_4_of_7_2.push(ids[k]);
                        position_4_of_7_2_x=position_4_of_7_2_x+30;
                        position_4_of_7_2_y=position_4_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_4th_2"]=getting_part_location_4_of_7_2;

//---------------------------------------------------------------5th of 7th------------------------
        required_part_location_5_of_7_1=["M/MT/FR025D2","M/MT/FR025C2","M/MT/FR025B2","M/MT/FR025A2"]
        required_part_location_5_of_7_2=["M/MT/FR025D1","M/MT/FR025C1","M/MT/FR025B1","M/MT/FR025A1"]
        var getting_part_location_5_of_7_1=[];
        var getting_part_location_5_of_7_2=[];
        var position_5_of_7_1_x=120;
        var position_5_of_7_1_y=1960;
        var position_5_of_7_2_x=120;
        var position_5_of_7_2_y=1975;
        for(var j=0;j<required_part_location_5_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_7_1_x,position_5_of_7_1_y]
                        getting_part_location_5_of_7_1.push(ids[k]);
                        position_5_of_7_1_x=position_5_of_7_1_x+30;
                        position_5_of_7_1_y=position_5_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_5th_1"]=getting_part_location_5_of_7_1;

        for(var j=0;j<required_part_location_5_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_5_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_5_of_7_2_x,position_5_of_7_2_y]
                        getting_part_location_5_of_7_2.push(ids[k]);
                        position_5_of_7_2_x=position_5_of_7_2_x+30;
                        position_5_of_7_2_y=position_5_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_5th_2"]=getting_part_location_5_of_7_2;

//---------------------------------------------------------------6th of 7th------------------------
        required_part_location_6_of_7_1=["M/MT/FR024D2","M/MT/FR024C2","M/MT/FR024B2","M/MT/FR024A2"]
        required_part_location_6_of_7_2=["M/MT/FR024D1","M/MT/FR024C1","M/MT/FR024B1","M/MT/FR024A1"]
        var getting_part_location_6_of_7_1=[];
        var getting_part_location_6_of_7_2=[];
        var position_6_of_7_1_x=120;
        var position_6_of_7_1_y=2005;
        var position_6_of_7_2_x=120;
        var position_6_of_7_2_y=2020;
        for(var j=0;j<required_part_location_6_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_7_1_x,position_6_of_7_1_y]
                        getting_part_location_6_of_7_1.push(ids[k]);
                        position_6_of_7_1_x=position_6_of_7_1_x+30;
                        position_6_of_7_1_y=position_6_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_6th_1"]=getting_part_location_6_of_7_1;

        for(var j=0;j<required_part_location_6_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_6_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_6_of_7_2_x,position_6_of_7_2_y]
                        getting_part_location_6_of_7_2.push(ids[k]);
                        position_6_of_7_2_x=position_6_of_7_2_x+30;
                        position_6_of_7_2_y=position_6_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_6th_2"]=getting_part_location_6_of_7_2;


        //---------------------------------------------------------------7th of 7th------------------------
        required_part_location_7_of_7_1=["M/MT/FR023D2","M/MT/FR023C2","M/MT/FR023B2","M/MT/FR023A2"]
        required_part_location_7_of_7_2=["M/MT/FR023D1","M/MT/FR023C1","M/MT/FR023B1","M/MT/FR023A1"]
        var getting_part_location_7_of_7_1=[];
        var getting_part_location_7_of_7_2=[];
        var position_7_of_7_1_x=120;
        var position_7_of_7_1_y=2050;
        var position_7_of_7_2_x=120;
        var position_7_of_7_2_y=2065;
        for(var j=0;j<required_part_location_7_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_7_1_x,position_7_of_7_1_y]
                        getting_part_location_7_of_7_1.push(ids[k]);
                        position_7_of_7_1_x=position_7_of_7_1_x+30;
                        position_7_of_7_1_y=position_7_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_7th_1"]=getting_part_location_7_of_7_1;

        for(var j=0;j<required_part_location_7_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_7_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_7_of_7_2_x,position_7_of_7_2_y]
                        getting_part_location_7_of_7_2.push(ids[k]);
                        position_7_of_7_2_x=position_7_of_7_2_x+30;
                        position_7_of_7_2_y=position_7_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_7th_2"]=getting_part_location_7_of_7_2;


        //---------------------------------------------------------------8th of 7th------------------------
        required_part_location_8_of_7_1=["M/MT/FR022D2","M/MT/FR022C2","M/MT/FR022B2","M/MT/FR022A2"]
        required_part_location_8_of_7_2=["M/MT/FR022D1","M/MT/FR022C1","M/MT/FR022B1","M/MT/FR022A1"]
        var getting_part_location_8_of_7_1=[];
        var getting_part_location_8_of_7_2=[];
        var position_8_of_7_1_x=120;
        var position_8_of_7_1_y=2095;
        var position_8_of_7_2_x=120;
        var position_8_of_7_2_y=2110;
        for(var j=0;j<required_part_location_8_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_8_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_8_of_7_1_x,position_8_of_7_1_y]
                        getting_part_location_8_of_7_1.push(ids[k]);
                        position_8_of_7_1_x=position_8_of_7_1_x+30;
                        position_8_of_7_1_y=position_8_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_8th_1"]=getting_part_location_8_of_7_1;

        for(var j=0;j<required_part_location_8_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_8_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_8_of_7_2_x,position_8_of_7_2_y]
                        getting_part_location_8_of_7_2.push(ids[k]);
                        position_8_of_7_2_x=position_8_of_7_2_x+30;
                        position_8_of_7_2_y=position_8_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_8th_2"]=getting_part_location_8_of_7_2;
 //---------------------------------------------------------------9th of 7th------------------------
        required_part_location_9_of_7_1=["M/MT/FR021D2","M/MT/FR021C2","M/MT/FR021B2","M/MT/FR021A2"]
        required_part_location_9_of_7_2=["M/MT/FR021D1","M/MT/FR021C1","M/MT/FR021B1","M/MT/FR021A1"]
        var getting_part_location_9_of_7_1=[];
        var getting_part_location_9_of_7_2=[];
        var position_9_of_7_1_x=120;
        var position_9_of_7_1_y=2140;
        var position_9_of_7_2_x=120;
        var position_9_of_7_2_y=2155;
        for(var j=0;j<required_part_location_9_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_9_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_9_of_7_1_x,position_9_of_7_1_y]
                        getting_part_location_9_of_7_1.push(ids[k]);
                        position_9_of_7_1_x=position_9_of_7_1_x+30;
                        position_9_of_7_1_y=position_9_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_9th_1"]=getting_part_location_9_of_7_1;

        for(var j=0;j<required_part_location_9_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_9_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_9_of_7_2_x,position_9_of_7_2_y]
                        getting_part_location_9_of_7_2.push(ids[k]);
                        position_9_of_7_2_x=position_9_of_7_2_x+30;
                        position_9_of_7_2_y=position_9_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_9th_2"]=getting_part_location_9_of_7_2;


//---------------------------------------------------------------10th of 7th------------------------
        required_part_location_10_of_7_1=["M/MT/FR020D2","M/MT/FR020C2","M/MT/FR020B2","M/MT/FR020A2"]
        required_part_location_10_of_7_2=["M/MT/FR020D1","M/MT/FR020C1","M/MT/FR020B1","M/MT/FR020A1"]
        var getting_part_location_10_of_7_1=[];
        var getting_part_location_10_of_7_2=[];
        var position_10_of_7_1_x=120;
        var position_10_of_7_1_y=2185;
        var position_10_of_7_2_x=120;
        var position_10_of_7_2_y=2200;
        for(var j=0;j<required_part_location_10_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_10_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_10_of_7_1_x,position_10_of_7_1_y]
                        getting_part_location_10_of_7_1.push(ids[k]);
                        position_10_of_7_1_x=position_10_of_7_1_x+30;
                        position_10_of_7_1_y=position_10_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_10th_1"]=getting_part_location_10_of_7_1;

        for(var j=0;j<required_part_location_10_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_10_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_10_of_7_2_x,position_10_of_7_2_y]
                        getting_part_location_10_of_7_2.push(ids[k]);
                        position_10_of_7_2_x=position_10_of_7_2_x+30;
                        position_10_of_7_2_y=position_10_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_10th_2"]=getting_part_location_10_of_7_2;

        

        //---------------------------------------------------------------11th of 7th------------------------
        required_part_location_11_of_7_1=["M/MT/FR019D2","M/MT/FR019C2","M/MT/FR019B2","M/MT/FR019A2"]
        required_part_location_11_of_7_2=["M/MT/FR019D1","M/MT/FR019C1","M/MT/FR019B1","M/MT/FR019A1"]
        var getting_part_location_11_of_7_1=[];
        var getting_part_location_11_of_7_2=[];
        var position_11_of_7_1_x=120;
        var position_11_of_7_1_y=2230;
        var position_11_of_7_2_x=120;
        var position_11_of_7_2_y=2245;
        for(var j=0;j<required_part_location_11_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_11_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_11_of_7_1_x,position_11_of_7_1_y]
                        getting_part_location_11_of_7_1.push(ids[k]);
                        position_11_of_7_1_x=position_11_of_7_1_x+30;
                        position_11_of_7_1_y=position_11_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_11th_1"]=getting_part_location_11_of_7_1;

        for(var j=0;j<required_part_location_11_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_11_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_11_of_7_2_x,position_11_of_7_2_y]
                        getting_part_location_11_of_7_2.push(ids[k]);
                        position_11_of_7_2_x=position_11_of_7_2_x+30;
                        position_11_of_7_2_y=position_11_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_11th_2"]=getting_part_location_11_of_7_2;


//---------------------------------------------------------------12th of 7th------------------------
        required_part_location_12_of_7_1=["M/MT/FR018D2","M/MT/FR018C2","M/MT/FR018B2","M/MT/FR018A2"]
        required_part_location_12_of_7_2=["M/MT/FR018D1","M/MT/FR018C1","M/MT/FR018B1","M/MT/FR018A1"]
        var getting_part_location_12_of_7_1=[];
        var getting_part_location_12_of_7_2=[];
        var position_12_of_7_1_x=120;
        var position_12_of_7_1_y=2275;
        var position_12_of_7_2_x=120;
        var position_12_of_7_2_y=2290;
        for(var j=0;j<required_part_location_12_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_12_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_12_of_7_1_x,position_12_of_7_1_y]
                        getting_part_location_12_of_7_1.push(ids[k]);
                        position_12_of_7_1_x=position_12_of_7_1_x+30;
                        position_12_of_7_1_y=position_12_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_12th_1"]=getting_part_location_12_of_7_1;

        for(var j=0;j<required_part_location_12_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_12_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_12_of_7_2_x,position_12_of_7_2_y]
                        getting_part_location_12_of_7_2.push(ids[k]);
                        position_12_of_7_2_x=position_12_of_7_2_x+30;
                        position_12_of_7_2_y=position_12_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_12th_2"]=getting_part_location_12_of_7_2;



        //---------------------------------------------------------------13th of 7th------------------------
        required_part_location_13_of_7_1=["M/MT/FR017D2","M/MT/FR017C2","M/MT/FR017B2","M/MT/FR017A2"]
        required_part_location_13_of_7_2=["M/MT/FR017D1","M/MT/FR017C1","M/MT/FR017B1","M/MT/FR017A1"]
        var getting_part_location_13_of_7_1=[];
        var getting_part_location_13_of_7_2=[];
        var position_13_of_7_1_x=120;
        var position_13_of_7_1_y=2320;
        var position_13_of_7_2_x=120;
        var position_13_of_7_2_y=2335;
        for(var j=0;j<required_part_location_13_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_13_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_13_of_7_1_x,position_13_of_7_1_y]
                        getting_part_location_13_of_7_1.push(ids[k]);
                        position_13_of_7_1_x=position_13_of_7_1_x+30;
                        position_13_of_7_1_y=position_13_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_13th_1"]=getting_part_location_13_of_7_1;

        for(var j=0;j<required_part_location_13_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_13_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_13_of_7_2_x,position_13_of_7_2_y]
                        getting_part_location_13_of_7_2.push(ids[k]);
                        position_13_of_7_2_x=position_13_of_7_2_x+30;
                        position_13_of_7_2_y=position_13_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_13th_2"]=getting_part_location_13_of_7_2;

//---------------------------------------------------------------14th of 7th------------------------
        required_part_location_14_of_7_1=["M/MT/FR016D2","M/MT/FR016C2","M/MT/FR016B2","M/MT/FR016A2"]
        required_part_location_14_of_7_2=["M/MT/FR016D1","M/MT/FR016C1","M/MT/FR016B1","M/MT/FR016A1"]
        var getting_part_location_14_of_7_1=[];
        var getting_part_location_14_of_7_2=[];
        var position_14_of_7_1_x=120;
        var position_14_of_7_1_y=2365;
        var position_14_of_7_2_x=120;
        var position_14_of_7_2_y=2380;
        for(var j=0;j<required_part_location_14_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_14_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_14_of_7_1_x,position_14_of_7_1_y]
                        getting_part_location_14_of_7_1.push(ids[k]);
                        position_14_of_7_1_x=position_14_of_7_1_x+30;
                        position_14_of_7_1_y=position_14_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_14th_1"]=getting_part_location_14_of_7_1;

        for(var j=0;j<required_part_location_14_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_14_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_14_of_7_2_x,position_14_of_7_2_y]
                        getting_part_location_14_of_7_2.push(ids[k]);
                        position_14_of_7_2_x=position_14_of_7_2_x+30;
                        position_14_of_7_2_y=position_14_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_14th_2"]=getting_part_location_14_of_7_2;

//---------------------------------------------------------------15th of 7th------------------------
        required_part_location_15_of_7_1=["M/MT/FR015D2","M/MT/FR015C2","M/MT/FR015B2","M/MT/FR015A2"]
        required_part_location_15_of_7_2=["M/MT/FR015D1","M/MT/FR015C1","M/MT/FR015B1","M/MT/FR015A1"]
        var getting_part_location_15_of_7_1=[];
        var getting_part_location_15_of_7_2=[];
        var position_15_of_7_1_x=120;
        var position_15_of_7_1_y=2410;
        var position_15_of_7_2_x=120;
        var position_15_of_7_2_y=2425;
        for(var j=0;j<required_part_location_15_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_15_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_15_of_7_1_x,position_15_of_7_1_y]
                        getting_part_location_15_of_7_1.push(ids[k]);
                        position_15_of_7_1_x=position_15_of_7_1_x+30;
                        position_15_of_7_1_y=position_15_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_15th_1"]=getting_part_location_15_of_7_1;

        for(var j=0;j<required_part_location_15_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_15_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_15_of_7_2_x,position_15_of_7_2_y]
                        getting_part_location_15_of_7_2.push(ids[k]);
                        position_15_of_7_2_x=position_15_of_7_2_x+30;
                        position_15_of_7_2_y=position_15_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_15th_2"]=getting_part_location_15_of_7_2;
//---------------------------------------------------------------16th of 7th------------------------
        required_part_location_16_of_7_1=["M/MT/FR014D2","M/MT/FR014C2","M/MT/FR014B2","M/MT/FR014A2"]
        required_part_location_16_of_7_2=["M/MT/FR014D1","M/MT/FR014C1","M/MT/FR014B1","M/MT/FR014A1"]
        var getting_part_location_16_of_7_1=[];
        var getting_part_location_16_of_7_2=[];
        var position_16_of_7_1_x=120;
        var position_16_of_7_1_y=2455;
        var position_16_of_7_2_x=120;
        var position_16_of_7_2_y=2470;
        for(var j=0;j<required_part_location_16_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_16_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_16_of_7_1_x,position_16_of_7_1_y]
                        getting_part_location_16_of_7_1.push(ids[k]);
                        position_16_of_7_1_x=position_16_of_7_1_x+30;
                        position_16_of_7_1_y=position_16_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_16th_1"]=getting_part_location_16_of_7_1;

        for(var j=0;j<required_part_location_16_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_16_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_16_of_7_2_x,position_16_of_7_2_y]
                        getting_part_location_16_of_7_2.push(ids[k]);
                        position_16_of_7_2_x=position_16_of_7_2_x+30;
                        position_16_of_7_2_y=position_16_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_16th_2"]=getting_part_location_16_of_7_2;
        //---------------------------------------------------------------17th of 7th------------------------
        required_part_location_17_of_7_1=["M/MT/FR013D2","M/MT/FR013C2","M/MT/FR013B2","M/MT/FR013A2"]
        required_part_location_17_of_7_2=["M/MT/FR013D1","M/MT/FR013C1","M/MT/FR013B1","M/MT/FR013A1"]
        var getting_part_location_17_of_7_1=[];
        var getting_part_location_17_of_7_2=[];
        var position_17_of_7_1_x=120;
        var position_17_of_7_1_y=2500;
        var position_17_of_7_2_x=120;
        var position_17_of_7_2_y=2515;
        for(var j=0;j<required_part_location_17_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_17_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_17_of_7_1_x,position_17_of_7_1_y]
                        getting_part_location_17_of_7_1.push(ids[k]);
                        position_17_of_7_1_x=position_17_of_7_1_x+30;
                        position_17_of_7_1_y=position_17_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_17th_1"]=getting_part_location_17_of_7_1;

        for(var j=0;j<required_part_location_17_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_17_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_17_of_7_2_x,position_17_of_7_2_y]
                        getting_part_location_17_of_7_2.push(ids[k]);
                        position_17_of_7_2_x=position_17_of_7_2_x+30;
                        position_17_of_7_2_y=position_17_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_17th_2"]=getting_part_location_17_of_7_2;

 //---------------------------------------------------------------18th of 7th------------------------
        required_part_location_18_of_7_1=["M/MT/FR012D2","M/MT/FR012C2","M/MT/FR012B2","M/MT/FR012A2"]
        required_part_location_18_of_7_2=["M/MT/FR012D1","M/MT/FR012C1","M/MT/FR012B1","M/MT/FR012A1"]
        var getting_part_location_18_of_7_1=[];
        var getting_part_location_18_of_7_2=[];
        var position_18_of_7_1_x=120;
        var position_18_of_7_1_y=2545;
        var position_18_of_7_2_x=120;
        var position_18_of_7_2_y=2560;
        for(var j=0;j<required_part_location_18_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_18_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_18_of_7_1_x,position_18_of_7_1_y]
                        getting_part_location_18_of_7_1.push(ids[k]);
                        position_18_of_7_1_x=position_18_of_7_1_x+30;
                        position_18_of_7_1_y=position_18_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_18th_1"]=getting_part_location_18_of_7_1;

        for(var j=0;j<required_part_location_18_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_18_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_18_of_7_2_x,position_18_of_7_2_y]
                        getting_part_location_18_of_7_2.push(ids[k]);
                        position_18_of_7_2_x=position_18_of_7_2_x+30;
                        position_18_of_7_2_y=position_18_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_18th_2"]=getting_part_location_18_of_7_2;
//---------------------------------------------------------------19th of 7th------------------------
        required_part_location_19_of_7_1=["M/MT/FR011D2","M/MT/FR011C2","M/MT/FR011B2","M/MT/FR011A2"]
        required_part_location_19_of_7_2=["M/MT/FR011D1","M/MT/FR011C1","M/MT/FR011B1","M/MT/FR011A1"]
        var getting_part_location_19_of_7_1=[];
        var getting_part_location_19_of_7_2=[];
        var position_19_of_7_1_x=120;
        var position_19_of_7_1_y=2590;
        var position_19_of_7_2_x=120;
        var position_19_of_7_2_y=2605;
        for(var j=0;j<required_part_location_19_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_19_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_19_of_7_1_x,position_19_of_7_1_y]
                        getting_part_location_19_of_7_1.push(ids[k]);
                        position_19_of_7_1_x=position_19_of_7_1_x+30;
                        position_19_of_7_1_y=position_19_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_19th_1"]=getting_part_location_19_of_7_1;

        for(var j=0;j<required_part_location_19_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_19_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_19_of_7_2_x,position_19_of_7_2_y]
                        getting_part_location_19_of_7_2.push(ids[k]);
                        position_19_of_7_2_x=position_19_of_7_2_x+30;
                        position_19_of_7_2_y=position_19_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_19th_2"]=getting_part_location_19_of_7_2;

//---------------------------------------------------------------20th of 7th------------------------
        required_part_location_20_of_7_1=["M/MT/FR010D2","M/MT/FR010C2","M/MT/FR010B2","M/MT/FR010A2"]
        required_part_location_20_of_7_2=["M/MT/FR010D1","M/MT/FR010C1","M/MT/FR010B1","M/MT/FR010A1"]
        var getting_part_location_20_of_7_1=[];
        var getting_part_location_20_of_7_2=[];
        var position_20_of_7_1_x=120;
        var position_20_of_7_1_y=2635;
        var position_20_of_7_2_x=120;
        var position_20_of_7_2_y=2650;
        for(var j=0;j<required_part_location_20_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_20_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_20_of_7_1_x,position_20_of_7_1_y]
                        getting_part_location_20_of_7_1.push(ids[k]);
                        position_20_of_7_1_x=position_20_of_7_1_x+30;
                        position_20_of_7_1_y=position_20_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_20th_1"]=getting_part_location_20_of_7_1;

        for(var j=0;j<required_part_location_20_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_20_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_20_of_7_2_x,position_20_of_7_2_y]
                        getting_part_location_20_of_7_2.push(ids[k]);
                        position_20_of_7_2_x=position_20_of_7_2_x+30;
                        position_20_of_7_2_y=position_20_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_20th_2"]=getting_part_location_20_of_7_2;


//---------------------------------------------------------------21th of 7th------------------------
        required_part_location_21_of_7_1=["M/MT/FR009D2","M/MT/FR009C2","M/MT/FR009B2","M/MT/FR009A2"]
        required_part_location_21_of_7_2=["M/MT/FR009D1","M/MT/FR009C1","M/MT/FR009B1","M/MT/FR009A1"]
        var getting_part_location_21_of_7_1=[];
        var getting_part_location_21_of_7_2=[];
        var position_21_of_7_1_x=120;
        var position_21_of_7_1_y=2680;
        var position_21_of_7_2_x=120;
        var position_21_of_7_2_y=2695;
        for(var j=0;j<required_part_location_21_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_21_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_21_of_7_1_x,position_21_of_7_1_y]
                        getting_part_location_21_of_7_1.push(ids[k]);
                        position_21_of_7_1_x=position_21_of_7_1_x+30;
                        position_21_of_7_1_y=position_21_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_21th_1"]=getting_part_location_21_of_7_1;

        for(var j=0;j<required_part_location_21_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_21_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_21_of_7_2_x,position_21_of_7_2_y]
                        getting_part_location_21_of_7_2.push(ids[k]);
                        position_21_of_7_2_x=position_21_of_7_2_x+30;
                        position_21_of_7_2_y=position_21_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_21th_2"]=getting_part_location_21_of_7_2;

//---------------------------------------------------------------22th of 7th------------------------
        required_part_location_22_of_7_1=["M/MT/FR008D2","M/MT/FR008C2","M/MT/FR008B2","M/MT/FR008A2"]
        required_part_location_22_of_7_2=["M/MT/FR008D1","M/MT/FR008C1","M/MT/FR008B1","M/MT/FR008A1"]
        var getting_part_location_22_of_7_1=[];
        var getting_part_location_22_of_7_2=[];
        var position_22_of_7_1_x=120;
        var position_22_of_7_1_y=2725;
        var position_22_of_7_2_x=120;
        var position_22_of_7_2_y=2740;
        for(var j=0;j<required_part_location_22_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_22_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_22_of_7_1_x,position_22_of_7_1_y]
                        getting_part_location_22_of_7_1.push(ids[k]);
                        position_22_of_7_1_x=position_22_of_7_1_x+30;
                        position_22_of_7_1_y=position_22_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_22th_1"]=getting_part_location_22_of_7_1;

        for(var j=0;j<required_part_location_22_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_22_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_22_of_7_2_x,position_22_of_7_2_y]
                        getting_part_location_22_of_7_2.push(ids[k]);
                        position_22_of_7_2_x=position_22_of_7_2_x+30;
                        position_22_of_7_2_y=position_22_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_22th_2"]=getting_part_location_22_of_7_2;

//---------------------------------------------------------------23th of 7th------------------------
        required_part_location_23_of_7_1=["M/MT/FR007D2","M/MT/FR007C2","M/MT/FR007B2","M/MT/FR007A2"]
        required_part_location_23_of_7_2=["M/MT/FR007D1","M/MT/FR007C1","M/MT/FR007B1","M/MT/FR007A1"]
        var getting_part_location_23_of_7_1=[];
        var getting_part_location_23_of_7_2=[];
        var position_23_of_7_1_x=120;
        var position_23_of_7_1_y=2770;
        var position_23_of_7_2_x=120;
        var position_23_of_7_2_y=2785;
        for(var j=0;j<required_part_location_23_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_23_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_23_of_7_1_x,position_23_of_7_1_y]
                        getting_part_location_23_of_7_1.push(ids[k]);
                        position_23_of_7_1_x=position_23_of_7_1_x+30;
                        position_23_of_7_1_y=position_23_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_23th_1"]=getting_part_location_23_of_7_1;

        for(var j=0;j<required_part_location_23_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_23_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_23_of_7_2_x,position_23_of_7_2_y]
                        getting_part_location_23_of_7_2.push(ids[k]);
                        position_23_of_7_2_x=position_23_of_7_2_x+30;
                        position_23_of_7_2_y=position_23_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_23th_2"]=getting_part_location_23_of_7_2;

//---------------------------------------------------------------24th of 7th------------------------
        required_part_location_24_of_7_1=["M/MT/FR006D2","M/MT/FR006C2","M/MT/FR006B2","M/MT/FR006A2"]
        required_part_location_24_of_7_2=["M/MT/FR006D1","M/MT/FR006C1","M/MT/FR006B1","M/MT/FR006A1"]
        var getting_part_location_24_of_7_1=[];
        var getting_part_location_24_of_7_2=[];
        var position_24_of_7_1_x=120;
        var position_24_of_7_1_y=2815;
        var position_24_of_7_2_x=120;
        var position_24_of_7_2_y=2830;
        for(var j=0;j<required_part_location_24_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_24_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_24_of_7_1_x,position_24_of_7_1_y]
                        getting_part_location_24_of_7_1.push(ids[k]);
                        position_24_of_7_1_x=position_24_of_7_1_x+30;
                        position_24_of_7_1_y=position_24_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_24th_1"]=getting_part_location_24_of_7_1;

        for(var j=0;j<required_part_location_24_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_24_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_24_of_7_2_x,position_24_of_7_2_y]
                        getting_part_location_24_of_7_2.push(ids[k]);
                        position_24_of_7_2_x=position_24_of_7_2_x+30;
                        position_24_of_7_2_y=position_24_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_24th_2"]=getting_part_location_24_of_7_2;

//---------------------------------------------------------------25th of 7th------------------------
        required_part_location_25_of_7_1=["M/MT/FR005D2","M/MT/FR005C2","M/MT/FR005B2","M/MT/FR005A2"]
        required_part_location_25_of_7_2=["M/MT/FR005D1","M/MT/FR005C1","M/MT/FR005B1","M/MT/FR005A1"]
        var getting_part_location_25_of_7_1=[];
        var getting_part_location_25_of_7_2=[];
        var position_25_of_7_1_x=120;
        var position_25_of_7_1_y=2860;
        var position_25_of_7_2_x=120;
        var position_25_of_7_2_y=2875;
        for(var j=0;j<required_part_location_25_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_25_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_25_of_7_1_x,position_25_of_7_1_y]
                        getting_part_location_25_of_7_1.push(ids[k]);
                        position_25_of_7_1_x=position_25_of_7_1_x+30;
                        position_25_of_7_1_y=position_25_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_25th_1"]=getting_part_location_25_of_7_1;

        for(var j=0;j<required_part_location_25_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_25_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_25_of_7_2_x,position_25_of_7_2_y]
                        getting_part_location_25_of_7_2.push(ids[k]);
                        position_25_of_7_2_x=position_25_of_7_2_x+30;
                        position_25_of_7_2_y=position_25_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_25th_2"]=getting_part_location_25_of_7_2;
//---------------------------------------------------------------26th of 7th------------------------
        required_part_location_26_of_7_1=["M/MT/FR004D2","M/MT/FR004C2","M/MT/FR004B2","M/MT/FR004A2"]
        required_part_location_26_of_7_2=["M/MT/FR004D1","M/MT/FR004C1","M/MT/FR004B1","M/MT/FR004A1"]
        var getting_part_location_26_of_7_1=[];
        var getting_part_location_26_of_7_2=[];
        var position_26_of_7_1_x=120;
        var position_26_of_7_1_y=2905;
        var position_26_of_7_2_x=120;
        var position_26_of_7_2_y=2920;
        for(var j=0;j<required_part_location_26_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_26_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_26_of_7_1_x,position_26_of_7_1_y]
                        getting_part_location_26_of_7_1.push(ids[k]);
                        position_26_of_7_1_x=position_26_of_7_1_x+30;
                        position_26_of_7_1_y=position_26_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_26th_1"]=getting_part_location_26_of_7_1;

        for(var j=0;j<required_part_location_26_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_26_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_26_of_7_2_x,position_26_of_7_2_y]
                        getting_part_location_26_of_7_2.push(ids[k]);
                        position_26_of_7_2_x=position_26_of_7_2_x+30;
                        position_26_of_7_2_y=position_26_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_26th_2"]=getting_part_location_26_of_7_2;
//---------------------------------------------------------------27th of 7th------------------------
        required_part_location_27_of_7_1=["M/MT/FR003D2","M/MT/FR003C2","M/MT/FR003B2","M/MT/FR003A2"]
        required_part_location_27_of_7_2=["M/MT/FR003D1","M/MT/FR003C1","M/MT/FR003B1","M/MT/FR003A1"]
        var getting_part_location_27_of_7_1=[];
        var getting_part_location_27_of_7_2=[];
        var position_27_of_7_1_x=120;
        var position_27_of_7_1_y=2950;
        var position_27_of_7_2_x=120;
        var position_27_of_7_2_y=2965;
        for(var j=0;j<required_part_location_27_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_27_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_27_of_7_1_x,position_27_of_7_1_y]
                        getting_part_location_27_of_7_1.push(ids[k]);
                        position_27_of_7_1_x=position_27_of_7_1_x+30;
                        position_27_of_7_1_y=position_27_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_27th_1"]=getting_part_location_27_of_7_1;

        for(var j=0;j<required_part_location_27_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_27_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_27_of_7_2_x,position_27_of_7_2_y]
                        getting_part_location_27_of_7_2.push(ids[k]);
                        position_27_of_7_2_x=position_27_of_7_2_x+30;
                        position_27_of_7_2_y=position_27_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_27th_2"]=getting_part_location_27_of_7_2;
//---------------------------------------------------------------28th of 7th------------------------
        required_part_location_28_of_7_1=["M/MT/FR002D2","M/MT/FR002C2","M/MT/FR002B2","M/MT/FR002A2"]
        required_part_location_28_of_7_2=["M/MT/FR002D1","M/MT/FR002C1","M/MT/FR002B1","M/MT/FR002A1"]
        var getting_part_location_28_of_7_1=[];
        var getting_part_location_28_of_7_2=[];
        var position_28_of_7_1_x=120;
        var position_28_of_7_1_y=2991;
        var position_28_of_7_2_x=120;
        var position_28_of_7_2_y=3006;
        for(var j=0;j<required_part_location_28_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_28_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_28_of_7_1_x,position_28_of_7_1_y]
                        getting_part_location_28_of_7_1.push(ids[k]);
                        position_28_of_7_1_x=position_28_of_7_1_x+30;
                        position_28_of_7_1_y=position_28_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_28th_1"]=getting_part_location_28_of_7_1;

        for(var j=0;j<required_part_location_28_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_28_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_28_of_7_2_x,position_28_of_7_2_y]
                        getting_part_location_28_of_7_2.push(ids[k]);
                        position_28_of_7_2_x=position_28_of_7_2_x+30;
                        position_28_of_7_2_y=position_28_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_28th_2"]=getting_part_location_28_of_7_2;

//---------------------------------------------------------------29th of 7th------------------------
        required_part_location_29_of_7_1=["M/MT/FR001D2","M/MT/FR001C2","M/MT/FR001B2","M/MT/FR001A2"]
        required_part_location_29_of_7_2=["M/MT/FR001D1","M/MT/FR001C1","M/MT/FR001B1","M/MT/FR001A1"]
        var getting_part_location_29_of_7_1=[];
        var getting_part_location_29_of_7_2=[];
        var position_29_of_7_1_x=120;
        var position_29_of_7_1_y=3036;
        var position_29_of_7_2_x=120;
        var position_29_of_7_2_y=3051;
        for(var j=0;j<required_part_location_29_of_7_1.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_29_of_7_1[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_29_of_7_1_x,position_29_of_7_1_y]
                        getting_part_location_29_of_7_1.push(ids[k]);
                        position_29_of_7_1_x=position_29_of_7_1_x+30;
                        position_29_of_7_1_y=position_29_of_7_1_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop
            render_map_with_part_loation["7th_part_29th_1"]=getting_part_location_29_of_7_1;

        for(var j=0;j<required_part_location_29_of_7_2.length;j++){
                for(var k=0;k<ids.length;k++){
                   // position_5_of_6_1_x
                    if( required_part_location_29_of_7_2[j]==ids[k]["Location"]){
                        ids[k]["marker_position"]=[position_29_of_7_2_x,position_29_of_7_2_y]
                        getting_part_location_29_of_7_2.push(ids[k]);
                        position_29_of_7_2_x=position_29_of_7_2_x+30;
                        position_29_of_7_2_y=position_29_of_7_2_y;
                        }//end if loop
                    }//end inner for loop
            }//end outer for loop

        render_map_with_part_loation["7th_part_29th_2"]=getting_part_location_29_of_7_2;



//---------------------------------render part locations 1st block----------------------------------
var counter1=64
required_part_location_1st_block=[]
do{
    var prt="M/MT/FR0"+String(counter1)
    required_part_location_1st_block.push(prt)
    counter1=counter1-1

}
while(counter1>31);
var required_part_location_1st_block_x=285;
var required_part_location_1st_block_y=205;
getting_required_part_location_1st_block=[]
part_loc_1st_block=["M/MT/FR064", "M/MT/FR063", "M/MT/FR062", "M/MT/FR061", "M/MT/FR060", "M/MT/FR059", "M/MT/FR058", "M/MT/FR057", "M/MT/FR056", "M/MT/FR055", "M/MT/FR054", "M/MT/FR053", "M/MT/FR052", "M/MT/FR051", "M/MT/FR050", "M/MT/FR049", "M/MT/FR048", "M/MT/FR047", "M/MT/FR046", "M/MT/FR045", "M/MT/FR044", "M/MT/FR043", "M/MT/FR042", "M/MT/FR041", "M/MT/FR040", "M/MT/FR039", "M/MT/FR038", "M/MT/FR037", "M/MT/FR036", "M/MT/FR035", "M/MT/FR034", "M/MT/FR033", "M/MT/FR032"]
for(var i=0;i<required_part_location_1st_block.length;i++){
        dt={}
        dt['part_location']=required_part_location_1st_block[i];
        dt['x_val']=required_part_location_1st_block_x
        dt['y_val']=required_part_location_1st_block_y
        getting_required_part_location_1st_block.push(dt)
        required_part_location_1st_block_y=required_part_location_1st_block_y+44.8;

}
render_map_with_part_loation["required_part_location_1th_block"]=getting_required_part_location_1st_block;


//---------------------------------render part locations 7th block----------------------------------
var counter7=29
required_part_location_7th_block=[]
do{
    if(counter7>9){
    var prt="M/MT/FR0"+String(counter7)
    required_part_location_7th_block.push(prt)
    
    }

    if(counter7<10){
    var prt="M/MT/FR00"+String(counter7)
    required_part_location_7th_block.push(prt)
   
    }
    counter7=counter7-1
}
while(counter7>0);
var required_part_location_7th_block_x=285;
var required_part_location_7th_block_y=1815;
getting_required_part_location_7th_block=[]
part_loc_7th_block=["M/MT/FR064", "M/MT/FR063", "M/MT/FR062", "M/MT/FR061", "M/MT/FR060", "M/MT/FR059", "M/MT/FR058", "M/MT/FR057", "M/MT/FR056", "M/MT/FR055", "M/MT/FR054", "M/MT/FR053", "M/MT/FR052", "M/MT/FR051", "M/MT/FR050", "M/MT/FR049", "M/MT/FR048", "M/MT/FR047", "M/MT/FR046", "M/MT/FR045", "M/MT/FR044", "M/MT/FR043", "M/MT/FR042", "M/MT/FR041", "M/MT/FR040", "M/MT/FR039", "M/MT/FR038", "M/MT/FR037", "M/MT/FR036", "M/MT/FR035", "M/MT/FR034", "M/MT/FR033", "M/MT/FR032"]
for(var i=0;i<required_part_location_7th_block.length;i++){
        dt={}
        dt['part_location']=required_part_location_7th_block[i];
        dt['x_val']=required_part_location_7th_block_x
        dt['y_val']=required_part_location_7th_block_y
        getting_required_part_location_7th_block.push(dt)
        required_part_location_7th_block_y=required_part_location_7th_block_y+44.8;

}
render_map_with_part_loation["required_part_location_7th_block"]=getting_required_part_location_7th_block;


       



//-----------------------------------end prt locations------------------------------------------
        
        
        
        console.log(render_map_with_part_loation);

        render_map(render_map_with_part_loation);


        });
}
 














function groupClick(event) {
        var svg_ids_list=[]
        console.log(event);
       // var svg=event.layer.test;
        //console.log("Clicked on marker ID " + event.layer.test);
        given_lat=event.latlng['lat']
        given_lng=event.latlng['lng']
        console.log("Clicked on marker lat " + given_lat);
        
}

socket.emit("get_cal");
    






socket.on("cal_response",function(given_cal_data){
   console.log(given_cal_data);
   name=given_marker_array= given_cal_data[0]['name']
   for(var i=0;i<given_cal_data.length;i++){
     var given_marker_array= given_cal_data[i]['cal_data']
     //name=given_marker_array= given_cal_data[i]['name']
     for(var j=0;j<given_marker_array.length;j++){

        console.log(given_marker_array[j]['selected_location_lat']);
        console.log(given_marker_array[j]['selected_location_lng']);
        add_cal_marker(given_marker_array[j]['selected_location_lat'],given_marker_array[j]['selected_location_lng'])
        
     }


   }


});

function add_cal_marker(x,y){
   console.log("trigger");
   var LeafIcon = L.Icon.extend({options: {iconSize:[40, 40]}});
   var greenIcon = new LeafIcon({ iconUrl: "{{ url_for('static', filename='red_loc.png')}}"});
   live_marker = L.marker([x,y], {icon: greenIcon}).on("click", get_beacon_detail);
   live_marker.addTo(map)
   
}

function get_beacon_detail(event){
         console.log(event);
        given_lat=event.latlng['lat']
        given_lng=event.latlng['lng']
        console.log("Clicked on marker lat " + given_lat);
        console.log(name);

        socket.emit("get_beacon_data",{"selected_location_lat":given_lat,"selected_location_lng":given_lng,"name":name});

}

socket.on("get_beacon_data_response",function(given_beacons_data){
console.log("yess");
console.log(given_beacons_data);
document.getElementById('modal1').click();
    var str="";
    beakons_data_array=given_beacons_data;
    for(var i=0;i<given_beacons_data.length;i++){

        
        str+='<tr>';
        str+='<td>'+(i+1)+'</td>';
        str+='<td id="beakon_id'+String(i)+'">'+given_beacons_data[i]['Beacon ID']+'</td>';
        str+='<td id="beakon_power'+String(i)+'">'+given_beacons_data[i]['RSSI']+'</td>';
        str+='</tr>';
        
    }
    document.getElementById("table_fill").innerHTML=str;





});

var live_marker;
var live_marker_array=[];
var d=0;




