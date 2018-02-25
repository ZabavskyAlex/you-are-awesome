// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return Object.prototype.propertyName;

};

const createNotEnumerableProperty = (propertyName) => {
     Object.defineProperty(Object.prototype, propertyName, {
         get: function () {
             return Object.prototype.value;
         },
         set: function (new_value) {
             Object.prototype.value = new_value;
         },
        enumerable: false
     });
     return propertyName;
};

const createProtoMagicObject = () => {
    let ProtoObject = new Function();
    ProtoObject.__proto__ = ProtoObject.prototype;
    return ProtoObject;
};

const incrementor = () => {
    incrementor.counter = incrementor.counter + 1 || 1;
    function inner() {
        incrementor.counter = incrementor.counter + 1;
        return inner;
    }
    inner.toString = function() {
        return incrementor.counter;
    };
    return inner;
};

let counter = 0;

const asyncIncrementor = () => {
    return new Promise(function (resolve, reject) {
        counter++;
        resolve(counter);
    });

};

const createIncrementer = () => {
    const inc = function* counter(){
        var value = 1;
        while(true)
            yield value++;
    }
    return inc()
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (date) => {
    return new Promise(function(resolve, reject) {
            setTimeout(function () {
            resolve(date)}, 1001);
            }
    );
};

const getDeepPropertiesCount = (obj) => {
    let count = Object.getOwnPropertyNames(obj).length;
    for(let key of Object.getOwnPropertyNames(obj)){
        if(Object.getOwnPropertyNames(obj[key]).length > 0){
            count += getDeepPropertiesCount(obj[key]);
        }
    }
    return count;
};

const createSerializedObject = () => {
   return null;//O_o
};
const sortByProto = (dict) => {
    return dict.sort(function (a, b) {a.__proto__ - b.__proto__});
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;