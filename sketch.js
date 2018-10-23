let snow = []
let thunder = []
let fog = []
let rain = []
let sand = []

var sliderSnow;
var sliderThunder;
var sliderFog;
var sliderRain;
var sliderSand;

let elements = [snow, thunder, fog, rain, sand]

function setup() {
  background(0, 0, 0)
  createCanvas(900, 900)
  noStroke()



  sliderSnow = createSlider(0, 255, 20)
  // sliderSnow.style('background-color', 'red');
  sliderSnow.position(0, 850);

  sliderThunder = createSlider(0, 255, 100)
  sliderThunder.position(192.5, 850);

  sliderFog = createSlider(0, 255, 50)
  sliderFog.position(385, 850);

  sliderRain = createSlider(0, 255, 300)
  sliderRain.position(577.5, 850);

  sliderSand = createSlider(0, 255, 200)
  sliderSand.position(770, 850);

  getWeathers(sliderSnow.value(), sliderThunder.value(), sliderFog.value(), sliderRain.value(), sliderSand.value())
  // getWeathers(20, 100, 50, 300, 200)
}


function draw() {

  background(0)
  // getWeathers(sliderSnow.value(), sliderThunder.value(), sliderFog.value(), sliderRain.value(), sliderSand.value())
  // console.log(sliderSnow.value());

  elements.forEach((element, index) => {
    element.forEach((particle, number) => {
      particle.move()
      if (index == 1) {
        particle.thunder()
      } else {
        particle.display()
      }
    })
  })
}

function getWeathers(sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand) {

  let total = [sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand]
  total.forEach((size, type) => {
    elements[type] = []
    for (let i = 0; i < size; i++) {
      let element = new Particle(size, type)
      elements[type].push(element)
    }
  })

  // background(0, 0, 0)
}
