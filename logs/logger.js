module.exports = (request) => {
    if(request.response.statusCode == 200){
        console.log("\x1b[36m" +request.info.remoteAddress+ "\x1b[37m : \x1b[32m" +
        request.method.toUpperCase() + "\x1b[37m" + request.path + "--> \x1b[32m" +
        request.response.statusCode);
    } else {
        console.log("\x1b[36m" +request.info.remoteAddress + "\x1b[37m : \x1b[32m" +
        request.method.toUpperCase() + "\x1b[37m" + request.path + "--> \u001b[31m" +
        request.response.statusCode);
    }
}