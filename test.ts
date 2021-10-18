import { simpleObj } from "./data";

var serialize = require('serialize-javascript');

const deserialize = (serialObj) => {
	return eval("(" + serialObj + ")");
};
const dateObj = new Date("2021-09-02T17:38:54.232Z");

const testObject = [
	{
		_id: "613e4f3656491508e2f13d2b",
		updated_at: dateObj,
		imposterGotMeLike: [true, false, true, false]
	},
	{
		_id: "6142fb11f3417fdf948ec5a9",
		updated_at: new Date("2021-09-02T17:38:54.232Z"),
		complex: {
			str: "string",
			num: 0,
			obj: { foo: "foo" },
			arr: [1, 2, 3],
			bool: true,
			nil: null,
			undef: undefined,
			inf: Infinity,
			date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
			map: new Map([["hello", "world"]]),
			set: new Set([123, 456]),
			fn: function echo(arg) {
				return arg;
			},
			re: /([^\s]+)/g,
			big: BigInt(10),
			complexer: {
				str: "string",
				num: 0,
				obj: { foo: "foo" },
				arr: [1, 2, 3],
				bool: true,
				nil: null,
				undef: undefined,
				inf: Infinity,
				date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
				map: new Map([["hello", "world"]]),
				set: new Set([123, 456]),
				fn: function echo(arg) {
					return arg;
				},
				re: /([^\s]+)/g,
				big: BigInt(10)
			}
		}
	},
	{
		_id: "61643c7c6ad15e3e86b73418",
		updated_at: dateObj,
		strArray: ["I", "don't like oat meal, ", "So I Cerealized it"]
	}
];

// const serialObj = serialize(testObject);
let serString, tempObj;
const testMarshall = (count, myObj)=>{
  while(count--){
    serString = serialize(myObj);
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
testMarshall(1000,serString);
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

console.time('second_deserialize');
testMarshall(1000,serString);
console.timeEnd('second_deserialize');

console.log(
	"------------------------------------------------------------------------------------"
);

console.log(
	"---------------------------------- isJSON = true | simple object ----------------------------------"
);
console.time('third_serialize');
testMarshall(1000,simpleObj);
console.timeEnd('third_serialize')

console.time('third_deserialize');
testMarshall(1000,serString);
console.timeEnd('third_deserialize');

console.log(
	"------------------------------------------------------------------------------------"
);






/**
 * try with the same test object epoch 1000, get avg 4-5 times
 * try with isJSON true the same this and simpler Test object
 * *** try the simple test obj used for (2) with out isJSON option
 */
