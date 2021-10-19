import { simpleObj, testObject } from "./data";

var serialize = require('serialize-javascript');

const deserialize = (serialObj) => {
	return eval("(" + serialObj + ")");
};



// const serialObj = serialize(testObject);
let serString, tempObj;
const testMarshall = (count, myObj, options?)=>{
  while(count--){
    serString = options? serialize(myObj,options): serialize(myObj);
  }
}

const testUnMarshall = (count, str)=>{
  while(count--){
    tempObj = deserialize(str);
  }
}




console.log(
	"---------------------------------- isJSON = false | complex object ----------------------------------"
);
console.time('first_serialize');
testMarshall(1000,testObject);
console.timeEnd('first_serialize')

console.time('first_deserialize');
testUnMarshall(1000,serString);
console.timeEnd('first_deserialize');

console.log(
	"------------------------------------------------------------------------------------"
);

console.log(
	"---------------------------------- isJSON = false | simple object ----------------------------------"
);
console.time('second_serialize');
testMarshall(1000,simpleObj);
console.timeEnd('second_serialize')
// console.log({serString});
console.time('second_deserialize');
testUnMarshall(1000,serString);
console.timeEnd('second_deserialize');

console.log(
	"------------------------------------------------------------------------------------"
);

console.log(
	"---------------------------------- isJSON = true | simple object ----------------------------------"
);
console.time('third_serialize');
testMarshall(1000,simpleObj, {isJSON:true, ignoreFunction:true});
console.timeEnd('third_serialize')
console.time('third_deserialize');
// console.log({serString});
testUnMarshall(1000,serString);
console.timeEnd('third_deserialize');

console.log(
	"------------------------------------------------------------------------------------"
);



/**
 * try with the same test object epoch 1000, get avg 4-5 times
 * try with isJSON true the same this and simpler Test object
 * *** try the simple test obj used for (2) with out isJSON option
 */
