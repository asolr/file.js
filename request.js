function GET(file, obj, callback) {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.response);
    }
  }
  var get = "";
  for (o in obj){
    get += o + "=" + encodeURIComponent(obj[o]) + "&";
  }
  http.open("GET", file+"?"+get);
  http.send();
}

function POST(file, obj, callback) {
  var http = new XMLHttpRequest();
  var post = "";
  for (o in obj) {
    post += o + "=" + encodeURIComponent(obj[o]) + "&";
  }
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.response);
    }
  }
  http.open("POST", file);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-length", post.length); // autocalculated, not needed but looks nice
  http.send(post);
}
