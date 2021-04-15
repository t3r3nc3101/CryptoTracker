
var retreivedJSON1 = ["NONE"];
var coin = "NONE";
var indexBoii = 0;
var coincoinURL = "";

///// RELOAD BUTTON /////
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("refreshButton").addEventListener("click", handler);});
function handler() {
    //console.log("Reloading results!");
    LoadInfoFromNames();   
}
////////////////////////

document.ready = function(){
    
//////////////// LOAD POSITIONS? ///////////////////
	var localData = JSON.parse(localStorage.getItem('positions'));
	
	if(localData!=null)
		{
	$.each(localData, function(i,value){
	
    	var id_name;

		id_name="#";
		id_name = id_name + value.id;
		//console.log(id_name);
			
			$(id_name).attr({"data-col":value.col, "data-row":value.row, "data-sizex":value.size_x, "data-sizey":value.size_y});
			

});
		}
		else{
			console.log('No data returned by the server');	
		}
///////////////////////////////////////////////////
    
    
    
    
    
    
    
    
////////////////////////  GRIDSTER CONFIG ////////////////////// 
$(".gridster ul").gridster({
widget_margins: [5, 5],
widget_base_dimensions: [100, 100],
widget_margins: [5, 5],
helper: 'clone',    
avoid_overlapped_widgets: true,
max_cols: 4,
extra_rows: 10,
shift_widgets_up: false,
shift_larger_widgets_down: false,
collision: {
    wait_for_mouseup: true
           },       
resize: {
    enabled: true,
    max_size: [2, 2]
        },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
serialize_params: function($w, wgd)
{
    return {
    id: $($w).attr('id'),
    col: wgd.col,
    row: wgd.row,
    size_x: wgd.size_x,
    size_y: wgd.size_y,
   };
},
draggable: 
  {
   stop: function(event, ui) {    
    var positions = JSON.stringify(this.serialize());
    localStorage.setItem('positions', positions);
  
    $.post(
    "",
    {"positions": positions},
    function(data)
     {
       console.log("Layout saved!")
     }
    );}
  }
    }).data('gridster');    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//});
/////////////////////////////////////////////////////////////////

reloadValuesAfterTime();
    setTimeout(() => { unhideAllTiles(); }, 1000);  
      
}


function unhideAllTiles(){
    var slides = document.getElementsByClassName("gridsterSquare");
    for (var i = 0; i < slides.length; i++) {
       slides.item(i).style.visibility = "visible";
    }
};


function LoadInfoFromNames(){
    var slides = document.getElementsByClassName("coinSelectDropdown");
    for (var i = 0; i < slides.length; i++) {
        indexBoii = i;

var e = slides.item(i)
coin = e.options[e.selectedIndex].text;

    ///////// SET COIN BG IMAGE /////////
    switch(coin) {
      case "Eth":
        //console.log("eth boii");
            refreshImage(i, "/icons/Eth.svg");
            var firstOfArray = document.getElementsByClassName("gridsterSquare");            
                   firstOfArray.item(i).style.borderColor = "darkgrey";             
                   firstOfArray.item(i).id = coin;              
        break;
      case "Xbt":
        //console.log("btccc boii");
            refreshImage(i, "/icons/Btc.svg");
            var firstOfArray = document.getElementsByClassName("gridsterSquare");            
                   firstOfArray.item(i).style.borderColor = "orange";               
                   firstOfArray.item(i).id = coin; 
        break;
      case "Xrp":
        //console.log("ripppllly boii");
            refreshImage(i, "/icons/Xrp.svg");
            var firstOfArray = document.getElementsByClassName("gridsterSquare");            
                   firstOfArray.item(i).style.borderColor = "black";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Bat":
    //console.log("batty boii");
        refreshImage(i, "/icons/Bat.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "purple";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Link":
        refreshImage(i, "/icons/Link.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "blue";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Usdt":
        refreshImage(i, "/icons/Usdt.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "green";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Usdc":
        refreshImage(i, "/icons/Usdc.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "blue";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Bch":
        refreshImage(i, "/icons/Bch.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "lightgreen";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Bsv":
        refreshImage(i, "/icons/Bsv.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "gold";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Ltc":
        refreshImage(i, "/icons/Ltc.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "darkblue";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Mkr":
        refreshImage(i, "/icons/Mkr.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "aqua";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Dai":
        refreshImage(i, "/icons/Dai.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "gold";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Comp":
        refreshImage(i, "/icons/Comp.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "lightgreen";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Snx":
        refreshImage(i, "/icons/Snx.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "lightblue";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Eos":
        refreshImage(i, "/icons/Eos.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "black";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Xlm":
        refreshImage(i, "/icons/Xlm.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "black";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Etc":
        refreshImage(i, "/icons/Etc.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "green";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Pmgt":
        refreshImage(i, "/icons/Pmgt.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "yellow";              
                   firstOfArray.item(i).id = coin;  
    break;
      case "Yfi":
        refreshImage(i, "/icons/Yfi.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "blue";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Aave":
        refreshImage(i, "/icons/Aave.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "purple";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Knc":
        refreshImage(i, "/icons/Knc.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "green";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Zrx":
        refreshImage(i, "/icons/Zrx.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "black";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Omg":
        refreshImage(i, "/icons/Omg.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "blue";               
                   firstOfArray.item(i).id = coin; 
    break;
      case "Gnt":
        refreshImage(i, "/icons/Gnt.svg");
        var firstOfArray = document.getElementsByClassName("gridsterSquare");            
               firstOfArray.item(i).style.borderColor = "darkblue";              
                   firstOfArray.item(i).id = coin;  
    break;
            
      default:
        // code block
    }
    ////////////////////////////////////

var coinRawURL = 'https://api.independentreserve.com/Public/GetMarketSummary?primaryCurrencyCode=coin&secondaryCurrencyCode=ZZZ';  
coinURLBeforeZZZ = coinRawURL.replace("coin", coin);
        
var e = document.getElementById("selectedCurr");
var selectedZZZ = e.options[e.selectedIndex].text;
        
coinURL = coinURLBeforeZZZ.replace("ZZZ", selectedZZZ);
        
 
    var boii = document.getElementsByClassName("currentCurrency");
        boii.item(i).innerHTML = selectedZZZ;
       // console.log(boii.item(i));
 
        
loadNewJSON(i);
    
}; // end of LoadInfoFromNames
}
         
function loadNewJSON(indexx){
    $.ajax({
      url: coinURL,
      dataType: 'json',
      data: "",
      success: function(downloadedJSON1) {
        // JSON result in `data` variable
       // console.log(downloadedJSON1);
            retreivedJSON1 = downloadedJSON1;
          var JSON1 = retreivedJSON1; 
    var coinValues = document.getElementsByClassName("coinValue");
    coinValues.item(indexx).innerHTML = "$ " + JSON1.CurrentLowestOfferPrice;
         // console.log(indexx);
      }
    });    
}

// REFRESH IMAGE FUNCTION //
function refreshImage(imgElement, imgURL){    
var timestamp = new Date().getTime();  
var queryString = "?t=" + timestamp;    
var retreivedimgElement = document.getElementsByClassName("coinImage")
retreivedimgElement.item(imgElement).src = imgURL + queryString;    
}
//////////////////////////// 



/////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function reloadValuesAfterTime() {
LoadInfoFromNames();
setTimeout(() => { reloadValuesAfterTime() }, 1000);
    console.log("Auto-reload! 1secs");
}

///// ADD BUTTON /////

document.addEventListener('DOMContentLoaded', function() {
document.getElementById("addButton").addEventListener("click", handler);});

function handler() {
    var randInt = Math.floor(Math.random() * 101);   
    var gridster = $(".gridster ul").gridster().data('gridster');   
    gridster.add_widget('<li class="gridsterSquare"></li>', 1, 1);
    //console.log("NEW BOX ADDDEDDD");
    // CLONE FIRST BOX TO CREATED BOXES //
    var itm = document.getElementById("squareContentsDiv");
    var cln = itm.cloneNode(true);
    //gridster.appendChild(cln);
    var last = document.getElementById("masterList").lastChild;
   // console.log(last);
    last.appendChild(cln);
    
    unhideAllTiles();
}

////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////

















