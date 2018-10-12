function add(numbers) {
	
	if(numbers == "")
	{
		return 0;
	}
	
	var delimiter = delimiterHandler("", numbers);
		
	var numbersArray = numbers.split(delimiter);
		 
	throwIfNegativeNumbers(numbersArray);
		
	return sum(numbersArray);
		
}

// Coverts number to integer
function toInt(number) 
{
	return parseInt(number);
}

// Decides which delimiter/s to use
function delimiterHandler(delimiter, numbers)
{
	// base delimiters
	var delimiter = /[\n,]/g;
	
	if(numbers.includes("//"))
	{
		delimiter = numbers.substring(2,3);
		numbers = numbers.substring(4);
	}
		
	return delimiter;
}

// Throws exception if numbersArray has negatives
function throwIfNegativeNumbers(numbersArray) 
{
	
	var negatives = '';
		
	for(var i=0; i < numbersArray.length;i++)
	{
		
		if(toInt(numbersArray[i]) < 0)
		{
			if (i < numbersArray.length-1)
			{
				negatives += toInt(numbersArray[i]) + ',';
				
			}
			else
			{
				negatives += toInt(numbersArray[i])
			}
			
		}
				
	}
		if (negatives.length > 0) {
		
			throw new Error("Negatives not allowed: "+ negatives);
			
		}
		
	
}

// Calcutaltes sum of numbersArray 

function sum(numbersArray)
{
	var total = 0;
		
	for(var i=0; i < numbersArray.length;i++)
	{	
		if(numbersArray[i] < 1001)
		{
			total += toInt(numbersArray[i]);
		}
	
	}
	
	return total;
}



module.exports = add;