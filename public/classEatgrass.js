class Eatgrass extends Mariakan {
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 15;

    }





    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }



    eat() {

        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);
        if (frameCount % 40 >= 0 && frameCount % 40 <= 10)/*Amar */ {
            if (cord) {
                this.multiply++;

                var x = cord[0];
                var y = cord[1];

                matrix[y][x] = 2;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;


                for (var i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                    break;
                }
                if (this.multiply == 1) {
                    this.mul()
                    this.multiply = 0;
                }
            }
        }
       else if (frameCount % 40 >= 10 && frameCount % 40 <= 20)/*Ashun */ {
            if (cord) {
                this.multiply++;

                var x = cord[0];
                var y = cord[1];

                matrix[y][x] = 2;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;


                for (var i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                    break;
                }
                if (this.multiply == 2) {
                    this.mul()
                    this.multiply = 0;
                }
            }
        }
        else if (frameCount % 40 >= 20 && frameCount % 40 <= 30)/*Dzmer */ {
            if (cord) {
                this.multiply++;

                var x = cord[0];
                var y = cord[1];

                matrix[y][x] = 2;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;


                for (var i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                    break;
                }
                if (this.multiply == 0) {
                    this.mul()
                    this.multiply = 0;
                }
            }
        }
         else if (frameCount %40>=30 && frameCount %40<=39)/*Garun */ {
            if (cord) {
                this.multiply++;

                var x = cord[0];
                var y = cord[1];

                matrix[y][x] = 2;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;


                for (var i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                    break;
                }
                if (this.multiply == 10) {
                    this.mul()
                    this.multiply = 0;
                }
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
                //this.energy = 10;
            }
        }
    }

    mul() {

        var emptyCord = this.getDirections(0);


        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
                break;
            }
        }

    }

}
