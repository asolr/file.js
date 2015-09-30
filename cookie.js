function setCookie(cname, cvalue, days) {
    var date = new Date();
    days != null ? days = days : days = 365;
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "expires="+date.toUTCString();
    document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + "; " + expires;
}

function getCookie(cname) {
    var name = encodeURIComponent(cname) + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {c = c.substring(1)};
        // if we find a matching cookie return it...
        if (c.indexOf(name) == 0) {return c.substring(name.length, c.length)};
    }
    return ""; // no cookie found
}
