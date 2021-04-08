Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

car1_width = 200;
car1_height = 100;
car2_width = 200;
car2_height = 100;
car1_image = "car1.png";
car2_image = "car2.png";
background_img = "racing.jpg";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 150;

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
    if(keyPressed =='83')
    {
        car2down();
        console.log("down");
    }
    if(keyPressed == '65') 
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
function car1up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadBackground();
		 uploadrover();
	}
}
function car1down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " +car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadrover();
	}
}
function car1left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = "  + car1_x + " | y = " + car1_y);
		uploadBackground();
		 uploadrover();
	}
}
function car1right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = "  + car1_x + " | y = " + car1_y);
		uploadBackground();
		uploadrover();
   }
}
function car2up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = "  + car2_x + " | y = " + car2_y);
		 uploadBackground();
		 uploadrover();
	}
}
function car2down()
{
	if(car2_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = "  + car2_x + " | y = " + car2_y);
		uploadBackground();
		 uploadrover();
	}
}
function car2left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = "  + car2_x + " | y = " + car2_y);
		uploadBackground();
		 uploadrover();
	}
}
function car2right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = "  + car2_x + " | y = " + car2_y);
		uploadBackground();
		uploadrover();
   }
}