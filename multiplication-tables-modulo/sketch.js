function sketch(p) {
    var r = 300;
    var points = 40;
    var lightMe = 0;
    var table = 2;
    var tSlider, pSlider;
    var tVal, pVal;
    var auto = 0.001;

     p.setup =function() {
        p.createCanvas(p.windowWidth, p.windowHeight-200);
        r = 300;
        p.strokeWeight(10);
        tSlider = p.createSlider(1, 200, 70, 1);
        tSlider.mouseMoved(changeVal);
        tSlider.style('width', '500px');

        pSlider = p.createSlider(1, 1000, 142, 1);
        pSlider.style('width', '500px');
        pSlider.mouseMoved(changeVal);

        rSlider = p.createSlider(100,1000, 300, 1);
        rSlider.mouseMoved(changeVal);
        rSlider.style('width', '500px');

        tVal = p.createP();
        pVal = p.createP();
        rVal = p.createP();
        // pDiv = p.createDiv();
        //pVal.parent(pDiv);
        //pSlider.parent(pDiv);
        drawLines();

    }



    function changeVal(el) {
        drawLines();
    }

    function drawLines() {
        p.background(255);
        points = pSlider.value();
        table = tSlider.value();
        r = rSlider.value();

        tVal.html("table " + table);
        pVal.html("points " + points);
        rVal.html("r "+r)
        p.stroke(40, 0, 200, 80);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        // puts the point idx 0 on top
        p.rotate(p.radians(-90));
        var section = p.TWO_PI / points;
        for (var i = 0; i < points; i++) {
            var angle = i * section;

            var x = r * p.cos(angle);
            var y = r * p.sin(angle);
            p.strokeWeight(5);
            p.point(x, y);
            var angle2 = table * angle;
            var x1 = r * p.cos(angle2);
            var y1 = r * p.sin(angle2);
            p.strokeWeight(1);
            p.line(x, y, x1, y1);
        }
        p.pop();
    }
}
new p5(sketch, window.document.getElementById('container'));
