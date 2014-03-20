$(document).ready(function(){
  var stage = new Kinetic.Stage({
    container: 'container',
    width: 600,
    height: 500
  });

  // Static Rectangles
  var shapesLayer = new Kinetic.Layer();

  var staticRectGroup = new Kinetic.Group({
    x: 30,
    y: 40
  });

  var rectColors = ['black', 'gray'];

  for(var n = 0; n < 2; n++) {
    (function() {
      var i = n;
      var staticRect = new Kinetic.Rect({
        x: 30,
        y: i * 150,
        width: 100,
        height: 50,
        fill: rectColors[i],
        stroke: rectColors[i],
        strokeWidth: 4
      });
      staticRectGroup.add(staticRect);
    })();
  }

  shapesLayer.add(staticRectGroup);
  stage.add(shapesLayer);

  // Moving Rectangle
  var movingRectLayer = new Kinetic.Layer();

  var movingRect = new Kinetic.Rect({
    x: 60,
    y: 115,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
  });

  // add the shape to the layer
  movingRectLayer.add(movingRect);

  stage.add(movingRectLayer);


  // Peek bucket

  var bucketLayer = new Kinetic.Layer();


  var peekBucket = new Kinetic.Rect({
    x: 700,
    // x: 200,
    y: 300,
    width: 200,
    height: 100,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });

  // add the shape to the layer
  bucketLayer.add(peekBucket);

  stage.add(bucketLayer);


  var selectRect = new Kinetic.Tween({
    node: movingRect,
    duration: 4.4,
    x: 250,
    y: 100
  })

  var rectDrop = new Kinetic.Tween({
    node: movingRect,
    duration: .2,
    y: 300,
    easing: Kinetic.Easings.Linear
  })

  var staticShapes = new Kinetic.Tween({
    node: staticRectGroup,
    duration: 3,
    x: -300,
    easing: Kinetic.Easings.Linear
  })

  var bucketSlide = new Kinetic.Tween({
    node: peekBucket,
    duration: 1.5,
    x: -200,
    easing: Kinetic.Easings.Linear
  })

  var bucketJiggle = new Kinetic.Tween({
    node: peekBucket,
    duration: 3.5,
    x: 150,
    scaleX: 1.5,
    scaleY: 1.5
  })

  setTimeout(function() {
    selectRect.play();
  }, 1000);

  setTimeout(function() {
    rectDrop.play();
  }, 5500);

  setTimeout(function() {
    bucketSlide.play();
  }, 600);

  setTimeout(function() {
    staticShapes.play();
  }, 1000);

  setTimeout(function() {
    bucketJiggle.play();
  }, 2000);



  // GSAP
  var photo = document.getElementById("bin");
  TweenLite.from(photo, 1.5, {width:100});

});