

function mix(massiveVithNumber, sizeElemInTable){
	var tempVal;
	$.each(massiveVithNumber, function(key,val){
		tempVal = getRandomInt(0,sizeElemInTable-1);
		while(tempVal == key){
			tempVal = getRandomInt(1,sizeElemInTable);
		}
		massiveVithNumber[key] = massiveVithNumber[tempVal];
		massiveVithNumber[tempVal] = val;
	})
}