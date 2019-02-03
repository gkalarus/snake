var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
var scale = 10;
var rows = canvas.height / scale;
var columns = canvas.width / scale;
var activationBtn = document.querySelector('.activationBtn');
var stopBtn = document.querySelector('.stopBtn');

activationBtn.addEventListener('click', function () {

  (function setup() {
    var selection = document.querySelector('.selection')
    var selectedLevel = selection[selection.selectedIndex].value;

    snake = new Snake();
    apple = new Apple();
    levels = new Levels();
    apple.pickLocation(selectedLevel);

    var updateInterval = window.setInterval(function () {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      levels.draw(selectedLevel);
      apple.draw();
      snake.update();
      snake.draw();

      if (snake.eat(apple, selectedLevel)) {
        apple.pickLocation(selectedLevel);
      }

      snake.checkCollision(selectedLevel);
      document.querySelector('.score').innerText = snake.total;

    }, 200);


    stopBtn.addEventListener('click', function () {
      clearInterval(updateInterval);
    })


  }());



  window.addEventListener('keydown', function (e) {
    var direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
  });


})