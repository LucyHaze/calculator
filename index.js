const buttonsContainer =  document.querySelector('.buttons');
const displayElement = document.querySelector('[name="display"]');
const sequenceArray = [0];

buttonsContainer.addEventListener('click', function(eventObject) {
	console.log(eventObject.target.value);
	const currentDisplayValue = displayElement.value;
	displayElement.value = currentDisplayValue + eventObject.target.value;
	
	if (!isNaN (parseInt(eventObject.target.value,10))){
		const lastElement = sequenceArray[sequenceArray.length-1]; 
		console.log(typeof lastElement, sequenceArray);
		if (typeof lastElement === 'number'){
			const newValue = (lastElement ? lastElement.toString() : '');
			sequenceArray[sequenceArray.length-1] = parseInt(newValue + eventObject.target.value, 10);
		}		
	} else {
		if(sequenceArray.length < 3) {

			sequenceArray [1] = eventObject.target.value;
		}

	}
	console.log(sequenceArray);
	

})
