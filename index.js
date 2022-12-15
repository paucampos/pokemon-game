const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const playerImage = new Image();
const image = new Image();
playerImage.src = './assets/img/playerDown.png';
image.src = './assets/img/Pellet Town.png';

image.onload = () => {
    context.drawImage(image, -735, -600);
    context.drawImage(
        playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        canvas.width/2 - playerImage.width/4/2,
        canvas.height/2 - playerImage.height/2,
        playerImage.width/4,
        playerImage.height);
}