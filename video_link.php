<?php
/* 
@wordpress.plugin
Plugin Name: Video Link
Description: Copy video links from sites such as Youtube and Dailymotion and have them view as videos in your post
version: 1.0
Author: Gus Lally
Author URI: https://ca.linkedin.com/in/augustine-lally-34691a27
*/


add_action( 'wp_enqueue_scripts', 'video_style' );
add_filter( 'mce_external_plugins', 'get_js' );
// Add the button to the post editor
add_filter( 'mce_buttons', 'get_button' );


// Get the css to makesure it can work on most screens
function get_css() {

wp_register_style( 'iframe.embed', plugins_url('/css/video_size.css', __FILE__) );
wp_enqueue_style( 'iframe.embed' );
}
add_action('wp_enqueue_scripts','get_css');

// Get the javascript file so the button can work
function get_js( $js ) {

    $js['video_link'] = plugins_url( 'link.js', __FILE__ );
    return $js;
}

// retrieve the button from JS file
function get_button( $button ) {

    array_push( $button, 'click' );
   
    return $button;
}






 
 



?>
