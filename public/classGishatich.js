class Gishatich extends Mariakan {
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 30;

    }



    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }

    eat() {

        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);
        var mult = 1;
        if (frameCount % 40 >= 0 && frameCount % 40 <= 10)/*Amar */ {

            mult = 1;
        }
        else if (frameCount % 40 >= 10 && frameCount % 40 <= 20)/*Ashun */ {
            mult = 2;
        }
        else if (frameCount % 40 >= 20 && frameCount % 40 <= 30)/*Dzmer */ {
            mult = 3;
        }
        else if (frameCount % 40 >= 30 && frameCount % 40 <= 39)/*Garun */ {
            mult = 2;
        }

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
            if (this.multiply == mult) {
                this.mul()
                this.multiply = 0;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
                //this.energy = 20;
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

            var norGishatich = new Gishatich(x, y, this.index);
            gishatichArr.push(norGishatich);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }

    }

}