php to javascript streamer
==========================

Library for streaming output from php to javascript via ajax in realtime.

Usage
-----

Contains two parts of interaction

PHP class
------------

Output form the php files that to be streamed over to should be passed through the PJStreamer class.

1. Include the php class : pjstreamer.php
2. Initiate the stream by calling PJStreamer::start() method
3. Send output over the stream using PJStreamer::send($output)

```php
<?php
include './pjstreamer.php';

PJStreamer::startStream();

for($i=1;$i<5;$i++){
    PJStreamer::sendStream($i);
    sleep(1);
}
?>
```

**What happens?**

Above library just do realtime php output, that's it flushes the existing buffer so any output from the php script will
immediately be displayed

Javascrip class
---------------

Output form the streaming php script is captured by an XMLHTTPObject and is processed by the JS class.

1. Attach pjstreamer.js
2. Make a new XMLHttpObject with the GET/POST parameters as for your requirement
3. Initiate a new PJStreamer class with your XMLHTTPObject and a callback function as parameters
4. Start the process by calling PJSreamer.start() method

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>PJStreamer demo</title>
        <script type="text/javascript" src="pjstreamer.js"></script>
        <script>                      
            window.onload = function(){
                var xmlhttp;
                if (window.XMLHttpRequest)
                  {// code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp=new XMLHttpRequest();
                  }
                else
                  {// code for IE6, IE5
                  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                  }
                
                xmlhttp.open("GET","stream.php",true);

                new PJStreamer(xmlhttp,function(data){
                    alert(data);
                }).start();
            }
        </script>
    </head>
    <body>
         
    </body>
</html>
```

**What happends?**

Above library can remove the unwanted browser tweaks sending from the PJStreamer php script, and deliver ONLY the new data.

NOTE: Jqyery AJAX wont work since their callback is made only after status=200 is received. But for streaming you 
need to check for response in all.


Output
------

Aobe code togather will result in a 4 textbox displaying 1-4, each displayed with an interval of 1 second

Confused?
---------

Feel free to contact me on

@email : manujith.nc@gmail.com

@twitter : @\_manzzup\_

@blog  : http://manzzup.blogspot.com

