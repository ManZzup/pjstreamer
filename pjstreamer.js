/**
 * @author Manujith Pallewatte [manujith.nc@gmail.com]
 * @date   11/11/13
 * Javascript part of the PJStreamer package used to stream realtime php over to JS via AJAX
 * @param XMLHTTPObject xmlhttp Configured to your options
 * @param Function callback function to run after each new data
 * @returns {PJStreamer}
 */
function PJStreamer(xmlhttp,callback){
    //vairable that hold old data length
    this.prevDataLen = -1;
    //variable that hold new data
    this.newData = "";
    //variable holding the user AJAX object
    this.xmlhttp = xmlhttp;
    xmlhttp.onreadystatechange=function(){
       if (xmlhttp.responseText != ""){
          if(typeof this.prevDataLen === 'undefined'){
              //if first time run, the first message is a blank, so ignore it
              this.prevDataLen = xmlhttp.responseText.toString().length;
          }else{
              //from second on remove the old msg and give the new one to the user
              this.newData = xmlhttp.responseText.substr(this.prevDataLen);
              this.prevDataLen = xmlhttp.responseText.toString().length;
              if(this.newData != ""){
                  callback(this.newData);
              }
          }            
       }
    }    
}
//function to start the AJAX streaming
PJStreamer.prototype.start = function(){
    this.xmlhttp.send();
}
