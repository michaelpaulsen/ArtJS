var Canvas = function(id){ 
	var c = {
		ctx:document.getElementById(id).getContext("2d"),
		toRads(x){ return x* Math.PI/180;},
		rect:function(x,y,w,h){
			this.ctx.strokeRect(x,y,w,h);
		},
		ellipse:function(){
			var args = arguments;
			this.ctx.beginPath();
			if( args.length == 9){
				this.ctx.ellipse(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
			}else if(args.length == 4 ){
				this.ctx.ellipse(args[0], args[1], args[2], args[3],0,0,360);
			}else{ 
			console.error("ellipse takes ether 4 arguments or 9")
			}
			this.ctx.stroke();
		},
		arc:function(){
			/**ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);*/
			this.ctx.beginPath();
			if(arguments.length == 3){
				this.ctx.arc(arguments[0],arguments[1],arguments[2],0,2*Math.PI);
			}else if( arguments.length == 5){
				this.ctx.arc(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);	
			}else if(arguments.length == 6){
				this.ctx.arc(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],true);	
			}
			this.ctx.stroke();
		},
		setLineDash: function(lineDash){ 
			if(Array.isArray(arguments[0])){
				this.ctx.setLineDash(arguments[0]); 
			}else if(arguments.length == 1){
				this.ctx.setLineDash([arguments[0],0]);
			}else{
				this.ctx.setLineDash(arguments);
			}
		},
		transform:function(hs,vs,hsk,vsk,dx,dy){
		/**Horizontal scaling,  Vertical scaling Horizontal skewing Vertical skewing,dx, dy. */
			this.ctx.transform(hs, vsk, hsk, vs, dx, dy);
		},
		setTransform: function(a,b,c,d,e,f){
			if(arguments.length != 8){ 
			a, d = 1;
			b, c, e, f =0;
			}
			this.ctx.setTransform(a,b,c,d,e,f);
		},
		line:function(x1,y1,x2,y2){
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2); 
			this.ctx.stroke();  
		},
		triangle:function(x1,y1,x2,y2,x3,y3){
			this.line(x1,y1,x2,y2); 
			this.line(x2,y2,x3,y3); 
			this.line(x1,y1,x3,y3); 
		}
	}	
	return  c;
}