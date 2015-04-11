window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})


var source = document.getElementById('source'),
	reslower = document.getElementById('reslower'),
	resupper = document.getElementById('resupper');



var change = function () {
	var sourcetext = source.value;
	reslower.innerHTML = sourcetext.toLowerCase();
	resupper.innerHTML = sourcetext.toUpperCase();
}

source.addEventListener('keyup', change, false);