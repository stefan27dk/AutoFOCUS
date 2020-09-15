

//#1 - Variables            
var a = -0.5;
var b = 0;
var c = 4.5; 
var power_X = 2;
var d = 0;
// var dx = 0;
var nextX = 0;
var x1 = 0;
var x2 = 0;
var adj_p = 0.01;
var Area = 0;
var ratio = 0;

var manual_X_cordinates = 0;




// ON Page fully loaded
window.onload = function() {
    perform_Clear_Graph_Draw();
};






 // Clear Graph Holder
function clear_Graph_Div()
{
    manual_X_cordinates = 1;
    document.getElementById("graph_holder").innerHTML =""; 
}







// FETCH VALUES
function fetch_Values()
{ 
    manual_X_cordinates = 0; // Resset if X  and X2 are manual input

    // Fetch from inputboxes to Calculator
        ratio = parseInt(document.getElementById("ratio_display").value); // Ratio
        var accur = parseFloat(document.getElementById("accuratness_display").value); // Accuratness
        
        if(accur!= 0) // Make sure the value is not 0 so it does not crash
        {
            adj_p = parseFloat(document.getElementById("accuratness_display").value);
        }
        else
        {
            adj_p = 0.1;
        }

        
         // X1
        if(document.getElementById("x1_display").value != "NaN")
        { 
            manual_X_cordinates = 1;
            x1 = parseFloat(document.getElementById("x1_display").value); 
        }


          // X2
          if(document.getElementById("x2_display").value != "NaN")
          { 
              manual_X_cordinates = 1;
              x2 = parseFloat(document.getElementById("x2_display").value); 
          }


a = parseFloat(document.getElementById("in_a").value); 
power_X = parseFloat(document.getElementById("in_pow").value);
b = parseFloat(document.getElementById("in_b").value);
c = parseFloat(document.getElementById("in_c").value);
      
 
        //   a = parseFloat(document.getElementById("a_display").value);

      
}




// Reset X1 and X2
function Reset_Input_X()
{
     
    document.getElementById("x1_display").value = "NaN";
    document.getElementById("x2_display").value = "NaN";
    manual_X_cordinates = 0;
    perform_Clear_Graph_Draw();
    
}






// Draw Clear Graph
function perform_Clear_Graph_Draw()
{
    clear_Graph_Div();
    fetch_Values(); 
    calculateArea();
}










// Calculate Graph Area / Draw Graph
function calculateArea()
{
    

// //#1 - Variables            
// var a = -0.5;
// var b = 0;
// var c = 4.5; 
// var power_X = 2;
// var d = 0;
// // var dx = 0;
// var nextX = 0;
// var x1 = 0;
// var x2 = 0;
// var adj_p = 0.01;
// var Area = 0;
// var ratio = 67;


//#2 - Diskriminant
d = Math.pow(b,2) - 4*a*c; 
 


if(manual_X_cordinates == 0 && d>0) // If is posible to calculate Area. If d > 0
{
  x1 = (-b + Math.sqrt(d)) / (2*a); // X1
  x2 = (-b - Math.sqrt(d)) / (2*a); // X2

  // Show Values in GUI
   document.getElementById("x1_display").value = x1; 
   document.getElementById("x2_display").value = x2;  
}

else if((d<0 || d == 0) && manual_X_cordinates == 0)
{
    alert("Diskriminanten er minus tal eller 0 eller er i manual mode"); 
}

 // View 
var gr_holder = document.getElementById("graph_holder"); // Get Graph Holder


// Calc
nextX = x1 + adj_p; // Start point 
var graph_height = 0; // Graph Height
Area = 0; // Reset Area

while(nextX < x2)
{
    // MAIN - Calculations ---::START::--->
    graph_height = (c+(a*(Math.pow((nextX),power_X)))); // Height
    Area += ( graph_height * adj_p); // Area
    // MAIN - Calculations <---::END::---
    

    // DRAW Graph ----::START::------->
    var graph_rect = document.createElement("div"); // Create Divs
    graph_rect.style.width = (adj_p * ratio) +"px";
    graph_rect.style.height = (graph_height * ratio) +"px";
    // graph_rect.style.backgroundColor = "blue"; 
    graph_rect.className += "graphStyle";

    gr_holder.appendChild(graph_rect); // Add Created Graph to the Graph Holder
    // DRAW Graph <----::END::--------
    
    nextX += adj_p; // Assign Next rectangle X cordinate  
}

document.getElementById("Area_display").value = Area; // Show Area in InputTag
document.getElementById("a_display").value = a; 
document.getElementById("b_display").value = b; 
document.getElementById("c_display").value = c; 
document.getElementById("d_display").value = d;  
document.getElementById("top_display").value = (b/(2*(a))); // Get Top point
 
}
 

 
 
// GET HOVERED RECTANGLE
window.onmouseover=function(e) {

     
    var height = e.target.style.height; // Get Hovered Rectangle
    var width = e.target.style.width; // Get Hovered Rectangle
 
    
    document.getElementById("selectedRec_Height_display").value = (parseFloat(height) /ratio).toFixed(3); // Show C in Inputbox;  
    document.getElementById("selectedRec_width_display").value = (parseFloat(width) /ratio).toFixed(3); // Show C in Inputbox;  
     
    
    
};