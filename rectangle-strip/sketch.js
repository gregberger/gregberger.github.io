var angle = 0;
var radius = 10;
var elem = 40;
var cX, cY;

var base, heightMult, heightPow;
var darkMode = 0,
  darkModeCbx;
var autoMode = false;
var params = {};
var c;
function setup() {
  createCanvas(windowWidth, windowHeight-100);
  rectMode(CENTER);

  noFill();
  strokeWeight(0.8);
  colorMode(HSB);
  background(0);
  base = createSlider(0.01, 10.0, 10,0.1);
  heightMult = createSlider(1, 100, 10);
  heightPow = createSlider(1, 16, 15, 0.5);
  elem = createSlider(10, 200, 177);
  radius = createSlider(10, windowWidth/2,200);



  darkModeCbx = createCheckbox('Light Mode', true);
  darkModeCbx.changed(() => {
    if (this.checked()) {
      this.label = "Light Mode";
      darkMode = 0;
    } else {
      darkMode = 1;
      this.label = "Dark Mode";
    }
  });
  autoModeCbx = createCheckbox('Auto', false);
  autoModeCbx.changed(()=>{autoMode=!autoMode;});

  share = createButton('Share');
  share.mouseReleased(shareUrl);


  var input = selectAll('input');
  // sets callbacks and styles to input elements
  input.forEach((i)=>{
    if(i.elt.type == "range"){
      i.changed(logParams)
    }
    if(i.elt.type == 'checkbox'){
      i.elt.nextSibling.style.color = '#FFFFFF';
    //  console.log(i.elt.nextSibling);
    }
  });
  params = getURLParams();
  setValues(params);

}

function draw() {
  background(255 * darkMode,0.3);
  cX = width / 2  ;
  cY = height / 2 ;
  if(autoMode){
    base.value(abs(sin(radians(frameCount/10))*360));
  }

  var steps = base.value();//round((360 / elem.value()));

  var nbElem = round(elem.value());//%radius.value());
  var alpha = map(nbElem, 200, 10, 0.4, 1.0);

  // angle = 0;
  for (var i = 0; i <= nbElem; i += 1) {
    var radAng = radians(angle);
    var r = radius.value();
    var rectHmult = heightMult.value();
    var rectHpow = heightPow.value();
    var x = cX + cos(radAng) * r;//%nbElem;
    var y = cY + sin(radAng) * r;//%nbElem;


    //stroke(255);
    push();
    translate(x, y);
    if(rectHmult > 0){
      rotate(radians(angle/2 / ((width/2)-r)));
      stroke(255,alpha-0.1)
      ellipse(0, 0, (r/200)*(nbElem/rectHpow)*sin(radAng), (r/100)*rectHmult*pow(cos(radAng),floor(rectHpow)));
      stroke(floor(angle) % 360, 200, 255,alpha);
      var squareSize = rectHmult*10;
      rect(0,0,squareSize,squareSize*sin(rectHpow));

    }else{
      rotate(radAng);
      rect(0,0,r,r);
    }


    pop();
    angle += (steps*nbElem);
  }
}
function keyPressed(){
  if(key == ' '){
    // not working
    //dlImg();
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight-100);
  //radius = createSlider(10, windowWidth/2,200);

  radius.elt.max = windowWidth/2;
}

var logParams= function(){
  params = {
    'angleSteps': base.value(),
    'hMult':heightMult.value(),
    'hPow':heightPow.value(),
    'nbElem':elem.value(),
    'radius':radius.value()
  };
  console.log(params)

}

var setValues = (_params)=>{
  base.value(_params.angleSteps);
  heightMult.value(_params.hMult);
  heightPow.value(_params.hPow);
  elem.value(_params.nbElem);
  radius.value(_params.radius);
}
var dlImg = () =>{
  saveCanvas('image', 'png');
}
var shareUrl = () => {
  var q = [];
  if(params != {}){
    for(var p in params){
      q.push(encodeURIComponent(p)+'='+encodeURIComponent(params[p]));
    }
  //  q.join("&");
  }
  //console.log(q);
  window.location.search = "?"+q.join('&');

}
