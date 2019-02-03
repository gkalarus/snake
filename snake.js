function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0; //licznik zmieniający się po zjedzeniu jabłka
  this.tailCounter = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = "#fff";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function () {


    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.tailCounter - 1] = {
      x: this.x,
      y: this.y
    };

    // Zmiana położenia snake'a o jedną pozycję poziomo lub pionowo

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // sprawdzenie czy snake wychodzi poza planszę

    if (this.x > canvas.width) {
      this.x = 0;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  // funkcja zmieniająca położenie snake w zależności od przyciśniętej strzałki

  this.changeDirection = function (direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  // sprawdzenie czy snake zjadł jabłko

  this.eat = function (fruit, level) {
    if (this.x === fruit.x && this.y === fruit.y) {
      if (level === 'first') {
        this.tailCounter++;
        this.total++;
      } else if (level === 'second') {
        this.tailCounter++;
        this.total += 2;
      }

      return true;
    }
    return false;
  }

  // sprawdzenie czy wystąpiła kolizja snake'a ze sobą bądź z przeszkodami

  this.checkCollision = function (level) {

    var selectedLevel = levels[level]

    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tailCounter = 0;
        this.tail = [];
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
      }
    }
    for (var i = 0; i < selectedLevel.length; i++) {
      if (this.x === selectedLevel[i].x && this.y === selectedLevel[i].y) {
        this.total = 0;
        this.tailCounter = 0;
        this.tail = [];
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;

      }
    }
  }
}