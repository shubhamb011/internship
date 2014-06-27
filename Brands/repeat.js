/**
 * Created by SHUBHAM on 25/6/14.
 */

function changeImage() {
    var image = document.getElementById('myImage');
    setInterval(function(){if (image.src.match("10")) {
        image.src = "11.jpg";
    } else {
        image.src = "10.jpg";
    }},2000);
    }
