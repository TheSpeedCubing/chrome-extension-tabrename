const hashmap = {};

chrome.tabs.onUpdated.addListener(
    function(tabId,changeInfo,tab){
		console.log("update!!!!");
    	chrome.tabs.sendMessage(tabId,{text:"test",title:"hello"},function(){});
	});
