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

var wrapper=function (func,ms) {
    setTimeout(func,0)
    func();
};

function setIntervalCustom(func, ms, maxCount) {
    var count = 0;
    console.log('run setIntervalCustom delay=' + ms + "iterations" + maxCount  );
    while (true) {
        myTimer(ms);
        setTimeout(wrapper(func,0),0);

        if (maxCount <= count) {
            break
        }
        count++
    }

};


console.log('Answer 1');
setIntervalCustom(testFunction,3000,5);


