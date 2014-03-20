$(document).ready(function(){
  var stage = new Kinetic.Stage({
    container: 'container',
    width: 600,
    height: 500
  });

  var layer = new Kinetic.Layer();

  var staticRect = new Kinetic.Rect({
    x: 30,
    y: 15,
    width: 100,
    height: 50,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4
  });

  var rect = new Kinetic.Rect({
    x: 30,
    y: 115,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
  });

  var staticRect2 = new Kinetic.Rect({
    x: 30,
    y: 215,
    width: 100,
    height: 50,
    fill: 'gray',
    stroke: 'black',
    strokeWidth: 4
  });

  var bucket1 = new Kinetic.Rect({
    x: 200,
    y: 300,
    width: 200,
    height: 100,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });

  // var imageObj = new Image();
  // imageObj.onload = function() {
  //   var bucket2 = new Kinetic.Image({
  //     x: 200,
  //     y: 300,
  //     width: 200,
  //     height: 200,
  //     image: imageObj
  //   });
  //   layer.add(bucket2);
  // };

  // imageObj.src = 'images/peek_bin.svg';


  // refactor to add shapes to group

  // add the shape to the layer
  layer.add(rect);

  // add the shape to the layer
  layer.add(staticRect);

  // add the shape to the layer
  layer.add(staticRect2);

  // add the shape to the layer
  layer.add(bucket1);

  // add the shape to the layer
  // layer.add(bucket2);

  // add the layer to the stage
  stage.add(layer);


  var selectRect = new Kinetic.Tween({
    node: rect,
    duration: 3,
    x: 250,
    y: 100
  })

  var selectRectDrop = new Kinetic.Tween({
    node: rect,
    duration: .2,
    y: 300,
    easing: Kinetic.Easings.Linear
  })

  var otherRect = new Kinetic.Tween({
    node: staticRect,
    duration: 1,
    x: -300,
    easing: Kinetic.Easings.Linear
  })

  var otherRect2 = new Kinetic.Tween({
    node: staticRect2,
    duration: 1,
    x: -300,
    easing: Kinetic.Easings.Linear
  })

  var bucketJiggle = new Kinetic.Tween({
    node: bucket1,
    duration: 1,
    x: 250,
    scaleX: 1.5,
    scaleY: 1.5
  })

  setTimeout(function() {
    selectRect.play();
  }, 1000);

  setTimeout(function() {
    selectRectDrop.play();
  }, 4000);

  setTimeout(function() {
    otherRect.play();
  }, 1000);

  setTimeout(function() {
    otherRect2.play();
  }, 1000);

  setTimeout(function() {
    bucketJiggle.play();
  }, 5000);

});