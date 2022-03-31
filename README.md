# ML/AI

machine learning, supervised learning, artificial intelligence, neural networks  

## [TensorFlow](https://www.tensorflow.org/) ([GitHub](https://github.com/tensorflow/tensorflow))
"TensorFlow is an end-to-end open source platform for machine learning." (endo)
"TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.
TensorFlow was developed by the Google Brain team for internal Google use in research and production. The initial version was released under the Apache License 2.0 in 2015. Google released the updated version of TensorFlow, named TensorFlow 2.0, in September 2019.
TensorFlow can be used in a wide variety of programming languages, most notably Python, as well as Javascript, C++, and Java. This flexibility lends itself to a range of applications in many different sectors." (Wikipedia)

## [TensorFlow.js (TFJS)](https://www.tensorflow.org/js/) ([GitHub](https://github.com/tensorflow/tfjs))
Version of TensorFlow for JavaScript-based browser use.
### [TFJS tutorial](https://www.tensorflow.org/js/tutorials)
#### [TFJS setup](https://www.tensorflow.org/js/tutorials/setup)
##### script tag:
`<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>`
### [TFJS demos](https://www.tensorflow.org/js/demos)
#### [TFJS examples](https://github.com/tensorflow/tfjs-examples)
#### [Schiffman examples](https://github.com/shiffman/Tensorflow-JS-Examples)
### [TFJS EdX course](https://learning.edx.org/course/course-v1:Google+WebML102+3T2021/home)
### [TFJS models](https://www.tensorflow.org/js/models) ([GitHub](https://github.com/tensorflow/tfjs-models))
Pre-trained TFJS models


## [ml5.js](https://ml5js.org/) ([GitHub](https://github.com/ml5js/ml5-library))
Simplified interface for Tensorflow.js
"ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies." (endo)
### [Dan Schiffman's guide](https://www.youtube.com/watch?v=jmznx0Q1fP0)
### [Pippin Barr's topic](https://pippinbarr.github.io/cart263/topics/ai/introducing-ml5js.html)


## [MediaPipe](https://google.github.io/mediapipe/) ([GitHub](https://github.com/google/mediapipe))
"A framework for building multimodal applied ML pipelines." (endo)
### [MediaPipe Pose](https://google.github.io/mediapipe/solutions/pose.html)
### [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) ([Model Card](https://drive.google.com/file/d/1-rmIgTfuCbBPW_IFHkh3f0-U_lnGrWpg/view))

## Hand Recognition
### TFJS/MediaPipe Hand Pose Detection
[GitHub](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection)  
[Tester](https://storage.googleapis.com/tfjs-models/demos/hand-pose-detection/index.html?model=mediapipe_hands)  
[Blog Post](https://blog.tensorflow.org/2021/11/3D-handpose.html)  
#### [Setup - MediaPipe](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection/src/mediapipe)  
#### [Setup - TFJS](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection/src/tfjs)  
### Legacy/deprecated - single hand
#### [TFJS/MediaPipe Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose)
MediaPipe Handpose is a lightweight ML pipeline consisting of two models: A palm detector and a hand-skeleton finger tracking model. It predicts 21 3D hand keypoints per detected hand.
#### [ml5.js Handpose](https://learn.ml5js.org/#/reference/handpose)
Handpose is a machine-learning model that allows for palm detection and hand-skeleton finger tracking in the browser. It can detect a maximum of one hand at a time and provides 21 3D hand keypoints that describe important locations on the palm and fingers.
The ml5.js Handpose model is ported from the TensorFlow.js Handpose implementation.



## Other
### [Teachable Machine](https://teachablemachine.withgoogle.com/)
"Teachable Machine is a web-based tool that makes creating machine learning models fast, easy, and accessible to everyone." (endo)
