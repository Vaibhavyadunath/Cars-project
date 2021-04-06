Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

car1_width = 200;
car1_height = 100;
car1_image = "car1.png";
background_img = "racing.jpg";
car1_x = 10;
car1_y = 10;


car2_width = 250;
car2_height = 130;
car2_image = "car2.png";
background_img = "racing.jpg";
car2_x = 10;
car2_y = 100;
function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadrover;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadrover;
    car2_imgTag.src = car2_image;
}
function uploadBackground () {
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}
function uploadrover() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1up();
        console.log("up");
    }
    if(keyPressed =='40')
    {
        car1down();
        console.log("down");
    }
    if(keyPressed == '37') 
    {
        car1left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        car1right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        car2up();
        console.log("up");
    }
    if(keyPressed =='65')
    {
        car2down();
        console.log("down");
    }
    if(keyPressed == '83') 
    {
        car2left();
        console.log("left");
    }
    if(keyPressed == '68')
    {
        car2right();
        console.log("right");
    }
}