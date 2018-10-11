function add ( numbers) {
	
	
	
	if(numbers == "")
	{
		return 0;
	}
	
	if(numbers.includes(",") | numbers.includes("\n"))
	{
		var numbersArray = numbers.split(",");
		var numbersArray = numbers.split(/[\n,]/g);
		
		
		var negatives = '';
		var size = 0;
		var count = 0;
		for(var i=0; i < numbersArray.length;i++)
	{
		
		size++;
			
	}
	
		for(var i=0; i < numbersArray.length;i++)
	{
		
		if(parseInt(numbersArray[i]) < 0)
		{
			if (i < size-1)
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
		
		return sum(numbersArray);
	}
	else
	{
		return parseInt(numbers);
	}

	
}


function findNegativeNumber(numbersArray) 
{
	
	var negatives = '';
	
	for(var i=0; i < numbersArray.length;i++)
	{
		
		
		if(parseInt(numbersArray[i]) < 0)
		{
			negatives += ' ' + parseInt(numbersArray[i]);
		}
			
	}
		if (negatives.length > 0) {
		
			throw 'Negatives not allowed:' + negatives;
		}
		else 
		{
			return numbersArray;
		}
		
	
}

function sum(numbersArray)
{
	var total = 0;
		
	for(var i=0; i < numbersArray.length;i++)
	{
		total += parseInt(numbersArray[i]);
	}
	
	return total;
}



module.exports = add;