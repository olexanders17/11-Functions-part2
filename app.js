function myTimer(ms) {
    var startDate = new Date().getTime();
    var limit = ms;

    while (true) {
        var nowDate = new Date().getTime();
        if (( nowDate - startDate) >= 20000) {
            console.log("munulo 3 sec" + new Date(nowDate - startDate).getSeconds());
            break;
        }

    }
}
