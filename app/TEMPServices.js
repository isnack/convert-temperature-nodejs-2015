var tempServices={
  
  converter:function(temp,type){
            
    var result=0;
    
    if(type=="fahrenheit"){
      result=(temp-32)/1.8;
      
    }else{
      result=(temp*1.8)+32;
    } 
    return result;
   
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