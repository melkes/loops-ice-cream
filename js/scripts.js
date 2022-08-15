window.addEventListener("load", function() {

//make a list of ice cream flavors
// create a loop for them
//the loop will create html for each flavor


const icList = ['chocolate', 'mint chip', 'coffee', 'vanilla'];

const ul = document.createElement("ul");
let tempIC
icList.forEach(function(e) {
  tempIC = document.createElement("li");
  tempIC.innerText = e;
  console.log(tempIC);
  ul.append(tempIC);
  console.log(ul)
  document.body.append(ul);
});


});
