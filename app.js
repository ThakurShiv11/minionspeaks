/*btn.addEventListener("click",function clickEventHandler() {
 console.log("clicked")
} */

var btn = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTraslationURL(text) {
 return serverURL + "?" + "text=" + text
}

/*function errorHandler(error) {
 console.log("Error occured",error)
 alert("Server cannot be reached")
}*/

function clickHandler() {
 var Input = txtInput.value;

 fetch(getTraslationURL(Input))
  .then(response => response.json())
  .then(json => {
   var translatedText = json.contents.translated;
   output.innerText = translatedText;
  })
};

/*.catch(errorHandler)*/

btn.addEventListener("click", clickHandler)


/*function clickhandler()
{

 output.innerText = " jftfgdfdf " + txtInput.value;
 /*console.log("clicked")
 console.log(" input "+ txtInput.value)

}*/