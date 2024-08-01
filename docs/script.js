const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 



if (daysToChristmas == 0) 
$('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

if (daysToChristmas > 0) 
$('#days').text(daysToChristmas+" days to Christmas!");

const CC = document.getElementsByClassName("candy-cane")[0]

CC.style.width = `${((13.0 - daysToChristmas)/12.0)*100.0}%`

// CC.style.width = `${((13.0 - 12.0)/12.0)*100.0}%`
// CC.style.width = `50.0%`

//make snow
const body = document.getElementsByTagName('body')[0];
console.log(body.clientWidth);

snowDrop(200, randomInt(0, body.clientWidth));
snow(200, 150);

function snow(num, speed) {
  if (num > 0) {
    setTimeout(function () {
      $('#drop_' + randomInt(1, 250)).addClass('animate');
      num--;
      snow(num, speed);
    }, speed);
  }
};



function snowDrop(num, position) {
  if (num > 0) {
    var drop = '<div class="drop snow" id="drop_' + num + '"></div>';
    // var drop = `<div class="drop snow nf ${selectRandom(config.snow_flakes)} " id="drop_${str(num)}"></div>`;

    $('body').append(drop);
    $('#drop_' + num).css('left', position);
    num--;
    snowDrop(num, randomInt(0, body.clientWidth));
  }
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ***mouse thingie***
// this is too much and will make the other snow glitch
/*

let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
}

const config = {
  starAnimationDuration: 1500,
  // minimumTimeBetweenStars: 125,
  // minimumDistanceBetweenStars: 30,
  minimumTimeBetweenStars: 62,
  minimumDistanceBetweenStars: 15,
  glowDuration: 600,
  maximumGlowPointSpacing: 5,
  // colors: ["249 146 253", "252 254 255"],
  colors: ["255 255 255"],
  sizes: ["1.4rem", "1rem", "0.6rem","2rem","2.4rem"],
  animations: ["fall-0","fall-1", "fall-2", "fall-3","fall-4"],
  snow_flakes:['nf-fa-snowflake_o','nf-md-snowflake','nf-weather-snowflake_cold']
}

let count = 0;
  
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
      px = value => withUnit(value, "px"),
      ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
        diffY = b.y - a.y;
  
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

const calcElapsedTime = (start, end) => end - start;

const appendElement = element => document.body.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = position => {
  const star = document.createElement("span"),
        color = selectRandom(config.colors);
  
  // var sf = ['nf-fa-snowflake_o','nf-md-snowflake','nf-weather-snowflake_cold']
  
  star.className = `star nf ${selectRandom(config.snow_flakes)}`;
  
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);
  
  appendElement(star);

  removeElement(star, config.starAnimationDuration);
}

const createGlowPoint = position => {
  const glow = document.createElement("div");
  
  glow.className = "glow-point";
  
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);
  
  appendElement(glow)
  
  removeElement(glow, config.glowDuration);
}

const determinePointQuantity = distance => Math.max(
  Math.floor(distance / config.maximumGlowPointSpacing),
  1
);

const createGlow = (last, current) => {
  const distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);
  
  const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;
  
  Array.from(Array(quantity)).forEach((_, index) => { 
    const x = last.x + dx * index, 
          y = last.y + dy * index;
    
    createGlowPoint({ x, y });
  });
}

const updateLastStar = position => {
  last.starTimestamp = new Date().getTime();

  last.starPosition = position;
}

const updateLastMousePosition = position => last.mousePosition = position;

const adjustLastMousePosition = position => {
  if(last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

window.onpointermove = e => {
  const mousePosition = { x: e.clientX, y: e.clientY }
  
  adjustLastMousePosition(mousePosition);
  
  const now = new Date().getTime(),
        hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
  
  if(hasMovedFarEnough || hasBeenLongEnough) {
    createStar(mousePosition);
    
    updateLastStar(mousePosition);
  }
  
  createGlow(last.mousePosition, mousePosition);
  
  updateLastMousePosition(mousePosition);
}

document.body.onmouseleave = () => updateLastMousePosition(originPosition);
*/