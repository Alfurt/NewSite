var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_QYo1WAau";

  myform.find("button").text("Отправка...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
    	alert("Письмо отправлено.");
       myform.find("button").text("Отправлено");
    }, function(err) {
       alert("Что-то пошло не так. Свяжитесь со мной через социальные сети.");
       myform.find("button").text("Отправить");
    });
  return false;
});
