
var numberMassive = [];

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RehdreTable(sizeElemInTable){

	/*  ������������ ���������� ���������  */
	for(var i = 0; i < sizeElemInTable; i++){
		numberMassive[i] = i+1;
	}

	/*  ������������ ������  */
	mix(numberMassive, sizeElemInTable)

	
	console.log(numberMassive);
	
	//console.log(numberMassive);
	$.each($("td"), function( key, znach ){
		$(znach).html( numberMassive[key] );
	});
//  newArr[key]
}

