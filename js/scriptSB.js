let gPose, gModel, gIsRunning;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}

async function main() {
  console.log("main");
  gModel = await tf.loadGraphModel("./model/model.json");
  gImage = await loadImage("./img/dancer-pose.jpeg");

  // Setup pose detection
  gPose = new Pose({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    },
  });
  gPose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: true,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });
  gPose.onResults(onPose);

  startCamera();
}

function startCamera() {
  const videoElement = document.getElementById("webcam");
  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await gPose.send({ image: videoElement });
    },
    width: 512,
    height: 512,
  });
  camera.start();
}

async function onPose(results) {
  console.log("onPose", results);
  const drawCanvas = document.getElementById("input");
  const drawCtx = drawCanvas.getContext("2d");
  drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  drawConnectors(drawCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: "#00FF00", lineWidth: 4 });
  executePix2pix(drawCanvas);
}

async function executePix2pix(image) {
  console.log("executePix2pix");

  let tensor = tf.expandDims(tf.browser.fromPixels(image), 0);
  tensor = tf.cast(tensor, "float32");
  // Normalize values between -1 and 1
  tensor = tensor.div(tf.scalar(127)).sub(tf.scalar(1));

  let result = await gModel.execute(tensor);
  // Convert results back to 0-1 range
  result = result.mul(tf.scalar(0.5)).add(tf.scalar(0.5));

  const resultCanvas = document.getElementById("output");
  await tf.browser.toPixels(result.squeeze(), resultCanvas);
}

main();

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }
//
// async function asyncCall() {
//   console.log('calling');
//   const model = await tf.loadGraphModel(`assets/models/model.json`);
//   console.log(model);
//   const graph = model.getGraph(`conv_pw_13_relu`);
//   return tf.model({input: model.inputs, outputs: graph.output})
//   // Return a model that outputs an internal activation.
//   // const layer = mobilenet.getLayer('conv_pw_13_relu');
//   // return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
//
// // const zeros = tf.zeros([1, 224, 224, 3]);
// const zeros = tf.zeros([1, 512, 512, 3]);
// // model.predict(zeros).print();
// }
//
//
// function setup() {
//
//   asyncCall();
//
//   let canvas = createCanvas(640,480);
//   //
//   // // Create a pix2pix model using a pre trained network
//   // const pix2pix = ml5.pix2pix('models/model.json', modelLoaded);
//   //
//   // // When the model is loaded
//   // function modelLoaded() {
//   //   console.log('Model Loaded!');
//   // }
//   //
//   // // Transfer using a canvas
//   // pix2pix.transfer(canvas, (err, result) => {
//   //   console.log(result);
//   // });
// }


// let canvas;
// let video;
// let poseNet;
// let poses = [];
// let skeleton;
//
// function setup() {
//   let canvas = createCanvas(640, 480);
//   video = createCapture(VIDEO);
//
//   // Create a new poseNet method
//   poseNet = ml5.poseNet(video, { flipHorizontal: true }, modelLoaded);
//   // Listen to new 'pose' events
//   poseNet.on('pose', (results) => { poses = results; });
//   // Hide the video element, and just show the canvas
//   // video.hide();
// }
//
// function modelLoaded() {
//   console.log('Model Loaded!');
// }
//
// function draw() {
//   if (poses.length > 0) {
//     // DEBUG - print poses info
//     // console.log(poses);
//     skeleton = poses[0].skeleton;
//     // DEBUG - print skeleton info
//     console.log(skeleton);
//     // draw skeleton
//     drawSkeleton();
//   }
// }
//
// function drawSkeleton() {
//   for (let i = 0; i < skeleton.length; i++) {
//     let partA = skeleton[i][0];
//     let partB = skeleton[i][1];
//     push();
//     stroke(255, 0, 0);
//     line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
//     pop();
//   }
// }
