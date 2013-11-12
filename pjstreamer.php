<?php
/**
 * @author  Manujith Pallewatte [manujith.nc@gmail.com]
 * @date    11/11/13
 * PHP class to stream realtime php to javascript through AJAX
 * Can also be used to show realtime php output on the browser
 */
class PJStreamer{
    /**
     * Setup the necessary switches to make the server have realtime output behaviour
     */
    public static function startStream(){
        try{
            //try to change the server functions first
            // Turn off output buffering
            ini_set('output_buffering', 'off');
            // Turn off PHP output compression
            ini_set('zlib.output_compression', false);
            // Implicitly flush the buffer(s)
            ini_set('implicit_flush', true);            
        }catch(Exception $e){
            
        }        
        //Flush (send) the output buffer and turn off output buffering
        while (@ob_end_flush());        
        ob_implicit_flush(true);
        
        //now add browser tweaks
        echo str_pad("",1024," ");
        echo "<br />";
        ob_flush();
        flush();
        sleep(1);
    }
    
    /**
     * Function to send the content to be streamed, adding special end character
     * @param $out ANY
     * Any kinda output 
     */
    public static function sendStream($out){
        //send the output
        echo $out;
        //flush just to be sure
        ob_flush();
        flush();
    }
}
?>
