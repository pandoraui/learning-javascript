//seajs 示例
define(function(require,exports,module){
    
    //exports : 对外的借口
    //require : 依赖的接口
    
    //var a = 10;
    //require('./test2.js');  //如果地址是一个模块的话，那么require的返回值就是模块中的export
    
    function tab(){
        //alert(a);
        alert( require('./test2.js').a );
    }
    
    exports.tab = tab;
    
})