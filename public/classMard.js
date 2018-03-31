//խոտի կլասը
class Mard extends Mariakan{
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 40;


    }

   
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }

    eat() {

        var emptyCord = this.getDirections(3);
        var emptyCord = this.getDirections(2);
        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);
        

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
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
        else {
            this.move();
            this.energy--;
            if (this.energy < 1) {
                this.die();
                //this.energy = 25;
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

            var norMard = new Mard(x, y, this.index);
            mardArr.push(norMard);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in mardArr) {
            if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                mardArr.splice(i, 1);
            }
        }

    }

}








