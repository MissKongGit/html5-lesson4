onmessage = function (e) {
    console.log(e.data);
    var num = e.data * 10;
    postMessage(num);
}