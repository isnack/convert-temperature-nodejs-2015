var tempController={
    
    init:function(){
    tempController.setForm();
  },
    
    setForm:function(){
      var form = document.getElementById('temperaturas');
      
      form.addEventListener('submit',function(event){
        tempController.calcular();
         event.preventDefault();
      });
      
    },
    calcular:function(){
      var radio = document.getElementsByName('temp');
      var tempInput = document.getElementById('numTemp');
      var type=tempController.getType(radio);
      var temp = parseFloat(tempInput.value);
      var result =0;
      
      var callback = function(result) {
        
      result = tempServices.description(result,type);
			tempController.showResult(result);
			
		};
      tempServices.converter(temp,type,callback);
    //	var result = tempServices.description(type);
    //	
    },
    
    getType:function(radio){
      var type=null;
        for (var i = 0, length = radio.length; i < length; i++) {
        if(radio[i].checked){
          type=radio[i].value;
        }
      };
      return type;
    },
    showResult:function(result){
    var divResult = document.getElementById('result');
    divResult.innerHTML=result;
    
  }
    
  };
  
  tempController.init();