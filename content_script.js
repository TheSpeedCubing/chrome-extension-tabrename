chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
	if(request.text == "test") {
		const currentDate = new Date();
        const year = currentDate.getFullYear().toString().substring(2);
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const currentTime = `${year}${month}${day}`;
		const original = document.title
		
		const timeFormat = /^\d{2}\d{2}\d{2}/;
		
		if(!timeFormat.test(document.title))
	    document.title= currentTime +" "+ original;
	}
});
