var matrix = []
var side = 5;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var takardArr = [];
var qarArr = [];

/*
var matrix = [
    [2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 2],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 2, 1, 0, 1],
    [0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 4, 2, 1, 0, 0, 1, 5, 1, 1, 4, 1, 1, 1, 1],
    [0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 0, 1, 2, 2, 2, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 2, 1, 2, 3, 2, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 4, 1, 0, 5, 1, 2, 2, 1, 1, 1],
    [0, 0, 2, 0, 0, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 2, 1],
    [0, 2, 0, 0, 2, 1, 0, 2, 1, 2, 0, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 3, 1, 1, 0, 0, 1, 0, 0, 2, 5, 4, 0, 1, 1],
    [2, 0, 5, 0, 4, 1, 0, 0, 1, 1, 1, 1, 1, 2, 0, 2, 1],
    [2, 0, 0, 0, 0, 1, 0, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1],
    [2, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
]
*/


var bardz = 100;
var layn = 100;
var GrassCount = 100;
var EatgrassCount = 20;
var GishatichCount = 25;
var TakardCount = 15;
var QarCount = 10;




function setup() {

    for (var i = 0; i < bardz; i++){
        matrix.push([]);
        for (var j = 0; j<layn; j++) {
            matrix[i][j] = 0 ;
        }
}


    var c = 0;
    while (c < GrassCount){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if(matrix[x][y] == 0){
        matrix[x][y] = 1 ;
        c++;
    }
}

    var c = 0;
    while (c < EatgrassCount){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if(matrix[x][y] == 0){
        matrix[x][y] = 2 ;
        c++;
    }
}

var c = 0;
     while (c < GishatichCount){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if(matrix[x][y] == 0){
        matrix[x][y] = 3 ;
        c++;
    }
}

var c = 0;
     while (c < TakardCount){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if(matrix[x][y] == 0){
        matrix[x][y] = 4 ;
        c++;
    }
}
var c = 0;
     while (c < QarCount){
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        if(matrix[x][y] == 0){
        matrix[x][y] = 5 ;
        c++;
    }
}


    noStroke()
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishatichArr.push(gishatich);
                }
            else if (matrix[i][j] == 4) {
                var takard = new Takard(j, i, 4);
                takardArr.push(takard);

            }
             else if (matrix[i][j] == 5) {
                var qar = new Qar(j, i, 5);
                qarArr.push(qar);

            }
           
          
    }

}
}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('');
                rect(j * side, i * side, side, side);
            }
           
        }
    }




    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
      for (var i in takardArr) {
        takardArr[i].eat();
    }
    }
