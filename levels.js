function Levels() {
  this.first = [{
      x: 0,
      y: 20
    }, {
      x: 10,
      y: 20
    }, {
      x: 20,
      y: 20
    },
    {
      x: 30,
      y: 20
    },
    {
      x: 40,
      y: 20
    },
    {
      x: 0,
      y: 30
    }, {
      x: 10,
      y: 30
    }, {
      x: 20,
      y: 30
    },
    {
      x: 30,
      y: 30
    },
    {
      x: 40,
      y: 30
    },
    {
      x: 0,
      y: 40
    }, {
      x: 10,
      y: 40
    }, {
      x: 20,
      y: 40
    },
    {
      x: 30,
      y: 40
    },
    {
      x: 40,
      y: 40
    },
    {
      x: 0,
      y: 50
    },
    {
      x: 10,
      y: 50
    }, {
      x: 20,
      y: 50
    }, {
      x: 30,
      y: 50
    },
    {
      x: 40,
      y: 50
    },

  ]

  this.second = [{
      x: 0,
      y: 60
    }, {
      x: 10,
      y: 60
    }, {
      x: 20,
      y: 60
    },
    {
      x: 30,
      y: 60
    },
    {
      x: 40,
      y: 60
    },
    {
      x: 0,
      y: 70
    }, {
      x: 10,
      y: 70
    }, {
      x: 20,
      y: 70
    },
    {
      x: 30,
      y: 70
    },
    {
      x: 40,
      y: 70
    },
    {
      x: 0,
      y: 80
    }, {
      x: 10,
      y: 80
    }, {
      x: 20,
      y: 80
    },
    {
      x: 30,
      y: 80
    },
    {
      x: 40,
      y: 80
    },
  ]



  this.draw = function (level) {

    var selectedLevel = this[level]

    ctx.fillStyle = "#FF00FF";
    for (let i = 0; i < selectedLevel.length; i++) {
      ctx.fillRect(selectedLevel[i].x, selectedLevel[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }
}