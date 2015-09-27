/*

    JavaScript HTML5 GET & POST Request + File Loader
    Version: 1.5

    WARNING: Requires Filtering of URI requests otherwise its open to the world!?!
    This will load files directly from the browser window or from an URI

    FAQ: http://www.html5rocks.com/en/tutorials/file/dndfiles/

*/

function File(name) {
  this.name = document.getElementById(name) ? document.getElementById(name).files : name.files ? name.files : name;
}

// Reads the file from the browser
File.prototype.read = function(callback) {
  var files = this.name;
  if (!files.length) {
    alert('Please select a file!?');
    return;
  }
  var file = files[0];
  var reader = new FileReader();
  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      callback(evt.target.result);
    }
  };
  var data = file.slice(0, file.size);
  reader.readAsBinaryString(data);
}

// Reads the file from an internet address (uri)
File.prototype.uri = function (callback){
  var uri = "file.php";
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // for async requests / future implementation
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        callback(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", uri+"?uri="+encodeURIComponent(this.name), true); // async request = true
  xmlhttp.send();
  return;
}
