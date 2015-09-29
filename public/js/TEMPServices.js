var tempServices={
  
  converter:function(temp,type,callback){
    
    
    
    $.ajax({
		  url: '/services/convert',
		  data: {'temp': temp, 'type': type},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
   
  },
  
  description:function(tempConverted,type){
   var result="0";
    tempConverted =tempConverted.toFixed(2);
    //se a temperatura informada for  fahrenheit converte para celsius
     if(type=="fahrenheit"){
      result=tempConverted+" ºC";
      
    }else{
      result=tempConverted+" ºF";
    } 
    return result;
  }    
};