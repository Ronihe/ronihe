define(["comp/graphicComp","utils/objectUtils","infra/logger"],function(t,e,n){function o(e){t.call(this,e)}return o.prototype=new t,o.prototype.internalDraw=function(){t.prototype.internalDraw.call(this),"html"in this.prop&&(this.div.innerHTML=this.prop.html)},o.prototype.getDefaultProperty=function(){return o.defaultProperty},o.prototype.getInputSchema=function(){return o.inputSchema},o.inputSchema=e.create(t.inputSchema,{html:null}),o.defaultProperty="html",n.log("html component loaded"),o});