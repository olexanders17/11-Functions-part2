function myTimer(ms) {
    var startDate = new Date().getTime();
    var limit = ms;

    while (true) {
        var nowDate = new Date().getTime();
        if (( nowDate - startDate) >= limit) {
            console.log("munulo  sec: " + new Date(nowDate - startDate).getSeconds());
            break;
        }

    }
}

var testFunction = function () {
    console.log('I am test function');
}

var wrapper = function (func, ms) {
    setTimeout(function () {

    }, 0);
    func();
};
var count = 0;
function setIntervalCustom(func, ms,maxCount) {
    var maxCount=maxCount||5
    console.log('run setIntervalCustom delay: ' + ms+ "count: "+count);
    if (count >= maxCount) {
        return;
    }
    count++;

    myTimer(ms);
    setTimeout(setIntervalCustom(func, ms,6), 0);


}
;


console.log('Answer 1');
setIntervalCustom(testFunction, 3000, 5);


