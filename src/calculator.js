function add ( numbers) {
	
	
	
	if(numbers == "")
	{
		return 0;
	}
	
	if(numbers.includes(",") | numbers.includes("\n"))
	{
		var numbersArray = numbers.split(",");
		var numbersArray = numbers.split(/[\n,]/g);
		
		throwIfNegativeNumbers(numbersArray);
		
		return sum(numbersArray);
	}
	else
	{
		return parseInt(numbers);
	}

	
}


function throwIfNegativeNumbers(numbersArray) 
{
	
	var negatives = '';
	var count = 0;
		
	for(var i=0; i < numbersArray.length;i++)
	{
		
		if(parseInt(numbersArray[i]) < 0)
		{
			if (i < numbersArray.length-1)
			{
				negatives += parseInt(numbersArray[i]) + ',';
				
			}
			else
			{
				negatives += parseInt(numbersArray[i])
			}
			
		}
		
			
	}
		if (negatives.length > 0) {
		
			throw new Error("Negatives not allowed: "+negatives);
			
		}
		
	
}

function sum(numbersArray)
{
	var total = 0;
		
	for(var i=0; i < numbersArray.length;i++)
	{	
		if(numbersArray[i] < 1001)
		{
			total += parseInt(numbersArray[i]);
		}
	
	}
	
	return total;
}



module.exports = add;