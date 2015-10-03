var randomstring = Math.random().toString(36).slice(-8);

//or

function randomPassword(length) {
    length = typeof length !== 'undefined' ? length : 10;
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}