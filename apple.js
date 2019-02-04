function Apple() {
  this.x;
  this.y;
  this.collision = null

  this.pickLocation = function (level) {
    var selectedLevel = level


    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;

    if (this.checkCollision(selectedLevel)) {
      this.pickLocation(selectedLevel);
    }

  }

  this.checkCollision = function (level) {
    var selectedLevel = levels[level];

    for (var i = 0; i < selectedLevel.length; i++) {
      if (this.x === selectedLevel[i].x && this.y === selectedLevel[i].y) {
        return true
      }
    }
  }

  this.draw = function () {
    ctx.fillStyle = "#7CFC00";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}