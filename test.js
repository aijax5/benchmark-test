"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var serialize = require('serialize-javascript');
var deserialize = function (serialObj) {
    return eval('(' + serialObj + ')');
};
// const serialObj = serialize(testObject);
var serString, tempObj;
var testMarshall = function (count, myObj, options) {
    while (count--) {
        serString = options ? serialize(myObj, options) : serialize(myObj);
    }
};
var testUnMarshall = function (count, str) {
    while (count--) {
        tempObj = deserialize(str);
    }
};
console.log('---------------------------------- isJSON = false | complex object ----------------------------------');
console.time('first_serialize');
testMarshall(1000, data_1.testObject);
console.timeEnd('first_serialize');
console.time('first_deserialize');
testUnMarshall(1000, serString);
console.timeEnd('first_deserialize');
console.log('------------------------------------------------------------------------------------');
console.log('---------------------------------- isJSON = false | simple object ----------------------------------');
console.time('second_serialize');
testMarshall(1000, data_1.simpleObj);
console.timeEnd('second_serialize');
console.log({ serString: serString });
console.time('second_deserialize');
testUnMarshall(1000, serString);
console.timeEnd('second_deserialize');
var temp = serString;
console.log('------------------------------------------------------------------------------------');
console.log('---------------------------------- isJSON = true | simple object ----------------------------------');
console.time('third_serialize');
testMarshall(1000, data_1.simpleObj, { isJSON: true, ignoreFunction: true });
console.timeEnd('third_serialize');
console.time('third_deserialize');
console.log({ serString: serString });
testUnMarshall(1000, serString);
console.timeEnd('third_deserialize');
console.log('------------------------------------------------------------------------------------');
console.log(temp === serString);
/**
 * try with the same test object epoch 1000, get avg 4-5 times
 * try with isJSON true the same this and simpler Test object
 * *** try the simple test obj used for (2) with out isJSON option
 */
