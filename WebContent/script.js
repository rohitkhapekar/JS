/**
 * http://usejsdoc.org/
 */
var isEven=function(num){
	return(num % 2==0);
}

test('Test Even...',function(){
	ok(isEven(3),'3 is an odd number');
	ok(isEven(-4),'-4 is an -ve number');
	ok(isEven(0),'0 is an even number');
	ok(isEven(10),'10 is an even number');
});

test('Deep eq', function(){
	deepEqual([10],['10'],'Comparing to diffrent arrays');
	equal([10],['10'],'Aray with only eq()');
	equal(0,false,'compare 0 vs false');
	equal(1,true,'compare 1 vs true');
	equal('1',true,'compare "1" and true');
	equal(1,'true','compare 1 and "\'true\'"');
	deepEqual([25],['25'],'Compare string array');
	deepEqual({name:"abc"},{"name":"abc"},"JSON array");
});

test('sync test', function(){
	stop();
	setTimeout(function(){
		ok(true);
		start();
	},1000);
});

test('async test', function(){
	stop();
	setTimeout(function(){
		ok(true);
		start();
	},1000);
});