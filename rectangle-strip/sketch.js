var angle = 0;
var radius = 10;
var elem = 40;
var cX, cY;

var base, heightMult, heightPow;
var darkMode = 0,
  darkModeCbx;
var autoMode = false;
var params = {};

function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);

  noFill();
  strokeWeight(0.8);
  colorMode(HSB);
  background(0);
  base = createSlider(0, 360, 180);
  heightMult = createSlider(0, 100, 10);
  heightPow = createSlider(-30, 30, 0);
  elem = createSlider(10, 200, 177);
  radius = createSlider(10, 400,200);



  darkModeCbx = createCheckbox('Light Mode', true);
  darkModeCbx.changed(function() {
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
  cX = width / 2 ;
  cY = height / 2;
  if(autoMode){
    base.value(abs(sin(radians(frameCount/10))*360));
  }

  var steps = base.value();//round((360 / elem.value()));

  var nbElem = round(elem.value());//%radius.value());
  //angle = 0;
  for (var i = 0; i <= nbElem; i += 1) {
    var radAng = radians(angle);
    var r = radius.value();
    var rectHmult = heightMult.value();
    var rectHpow = heightPow.value();
    var x = cX + cos(radAng) * r;//%nbElem;
    var y = cY + sin(radAng) * r;//%nbElem;

    stroke(floor(angle) % 360, 200, 255,0.4);
    //stroke(255);
    push();
    translate(x, y);
    if(rectHmult > 0){
      rotate(radians(angle/2 / (401-r)));

      rect(0, 0, (r/10)*(nbElem)*sin(radAng), (r/10)*i*rectHmult*pow(cos(radAng),rectHpow));

    }else{
      rotate(radAng);
      rect(0,0,r,r);
    }


    pop();
    angle += steps;
  }
}
var logParams= function(){
  params = {
  'angleSteps': base.value(),
  'hMult':heightMult.value(),
  'hPow':heightPow.value(),
  'nbElem':elem.value(),
  'radius':radius.value(),
  };
  console.log(params)

}

function setValues(_params){
  base.value(_params.angleSteps);
  heightMult.value(_params.hMult);
  heightPow.value(_params.hPow);
  elem.value(_params.nbElem);
  radius.value(_params.radius);
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
