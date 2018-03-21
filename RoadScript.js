var canvas = document.querySelector("#canvas");
    	var ctx = canvas.getContext("2d");
        
        ctx.save();			// save previous display state
        //  set drawing properties for the sign
        ctx.lineWidth = 32;	       // nice wide line		
        ctx.lineJoin = "round";	   // rounded corners
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "blue";

        // create Rectangle linear path
        ctx.beginPath();
        ctx.moveTo(50, 50);
       
        ctx.lineTo(400, 50);
        ctx.lineTo(400, 450);
        ctx.lineTo(50, 450);
        ctx.lineTo(50, 50);
        
        ctx.closePath();

        // fill the sign and draw wide blue lines
        ctx.fill();
        ctx.stroke();	

        // draw narrower white lines -- these will display on top of the wide red lines and make the blue lines
        // look like the outside edge -- 
        ctx.strokeStyle = "white";
        ctx.lineWidth = 12;
        ctx.stroke();
        
  
        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(110, 200);


        ctx.lineTo(300, 200);
        
        
        ctx.fillStyle="white";
        ctx.closePath();
        ctx.fill();
        
        ctx.lineWidth=100;
        ctx.beginPath();
        
        ctx.moveTo(200,345);
        ctx.lineTo(200,200)
        
        ctx.stroke();
        
        ///////

        // draw STOP text
        ctx.fillStyle  = "blue";
        ctx.font = "bold 80px Arial";
        ctx.fillText( "ONE WAY" ,50, 550);
        ctx.closePath();
        ctx.restore();		// restore previous display state
//        
        /////*********************************************************************************************************
        
         ctx.save();			// save previous display state
        //  set drawing properties for the sign
        ctx.lineWidth = 32;	       // nice wide line		
        ctx.lineJoin = "round";	   // rounded corners
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";

        // create octagon linear path
        ctx.beginPath();
        ctx.moveTo(200, 600);
        ctx.lineTo(350, 600);
        ctx.lineTo(450, 700);
        ctx.lineTo(450, 850);
        ctx.lineTo(350, 950);
        ctx.lineTo(200, 950);
        ctx.lineTo(100, 850);
        ctx.lineTo(100, 700);
        ctx.closePath();

        // fill the sign and draw wide red lines
        ctx.fill();
        ctx.stroke();	

        // draw narrower white lines -- these will display on top of the wide red lines and make the red lines
        // look like the outside edge -- a nice trick!
        ctx.strokeStyle = "white";
        ctx.lineWidth = 10;
        ctx.stroke();

        // draw STOP text
        ctx.fillStyle  = "white";
        ctx.font = "bold 100px Arial";
        ctx.fillText( "STOP" ,140, 810);
        ctx.restore();		// restore previous display state
        
        /////*********************************************************************************************************
     
     