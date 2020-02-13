# 🎶 Audio Visualizations 🎶 

## Description

This project experiments with different audio visualization graph implementations using frequencies from songs. It utilizes [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) and [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to analyze frequencies and create visuals.

If you'd like to add more cool visualizations to this project, feel free to submit a pull request! Implementation details are below.

## Getting Started (how to run the project)

1. Clone or download repository
2. Open index.html in your browser

## [Link to live project](https://anisha7.github.io/Audio-visualization/)

## Background Information
We have been visualizing music/sound for a long time, using methods such as musical notation (sheet music), spectograms, and string vibrations. 

Musicians find these visuals quite helpful when creating new sounds and analyzing how the it will be recieved by their audience.

Scientists use the visuals to study the nature of sound waves and their impact on the environment.

Teachers use them to help them demonstrate the nature of sound and sound waves, especially in Physics class.

## Implementation
This project is implemented using various helper functions, which allows it to be easily scalable and reusable in various different ways. Below is a breakdown of the files and functions:

The helpers file consists of some general functions to create shapes on a canvas, and the visualize file uses this functions to loop over an array of frequencies. The audio file consists of the program that plays, stops, and analyzes a song file into a frequency array. This program is easily reusable and modifiable for further advancement.

### helpers.js
The functions in this file create shapes on a canvas given the location and frequency for placement and color values.

```
drawSun(c, f, i, item, step, centerX, centerY, radius) 
```
The `drawSun` function  creates a sun with the first frequency line coming off it on a circular radius.

```
drawBars(c, f, i, item, step)
```
The drawBars function draws one falling line (from the top of the canvas) where the length and color are based on the frequency.

```
drawFace(c, f, centerX, centerY)
```
The drawFace function draws a face using an average or max frequency. This function should be called outisde of the for loop over the frequency array, since it is based on one singular frequency value. 

### visualize.js
This file consists of pointers to the canvas elements and uses the canvas helper methods and a frequency array to generate visualizations. 

```
render()
```
The render method loops over an array of frequencies and creates visuals using each frequency value in the array. It also handles calling methods that use an average or max frequency value, such as drawFace. 

### audio.js
This file sets up variables and methods to analyze, play, and stop audio files. It plays the selected audio file in the `startAudio()` function, and stops it from playing using the `stopAudio()` function. Eventlisteners are added to the start and stop buttons in this file as well. All together, this is the program that creates the frequency array that is used by visualize.js.