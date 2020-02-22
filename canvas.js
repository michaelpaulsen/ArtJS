var Canvas = function(id){ 
	var c = {
		ctx:document.getElementById(id).getContext("2d"),
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
			a, b, c, d, e, f = 1;
			}
			this.ctx.setTransform(a,b,c,d,e,f);
		}
	}	
	return  c;
}