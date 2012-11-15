/*

    JavaScript HTML5 File Loader
    Version: 1.0 
    WARNING: Requires Filtering of URI requests otherwise its open to the world!?!
    
    This will load files directly from the browser window or from an URI 
    
    FAQ: http://www.html5rocks.com/en/tutorials/file/dndfiles/
    
    Example: (JavaScript Only)
      <html>
        <head>
        <script type="text/javascript" charset="utf-8" src="file.js"></script>
        </head>
        <body>
          <h1>File Loader</h1>
          <h3>JavaScript Only:</h3>
          <input type="file" id="files" name="file"/> 
          <button onclick="file_clicker()">Load File</button><br /><br />
          <h3>HTTP Request (PHP):</h3>
          <input type="text" id="uri" name="uri" value="http://www.bing.com"/> 
          <button onclick="uri_clicker()">Load File</button><br /><br />
          <h3>File Text:</h3>
          <div id="content"></div>
          <script>
            function file_clicker() {
              var fileObj = document.getElementById("files");
              var fp = new File(fileObj);
              fp.read(callback);
            }
            function uri_clicker() {
              var uri = document.getElementById("uri").value;
              var fp = new File(uri);
              fp.uri(callback);
            }
            function callback(text) {
              var content = document.getElementById("content");
              content.innerHTML = text;
            }
          </script>
        </body>
      </html>
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