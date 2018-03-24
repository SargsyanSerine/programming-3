class Takard extends Mariakan{
    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 10;
       }

       

    eat() {
    	
        var emptyCord = this.getDirections(3);
        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);

        if (cord) {
           

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 0;

            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            

        } 
    }

   }
   


