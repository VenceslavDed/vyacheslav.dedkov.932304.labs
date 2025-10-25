function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // [min...max]
}

function generationCircle() {
  var newDiv = document.createElement("div");
  r = getRandomInt(10,300);
  newDiv.style.width = '' + r + 'px';
  newDiv.style.height = '' + r + 'px';
  newDiv.style.background = 'green';
  newDiv.style['border-radius'] = '50%';
  newDiv.style['border'] = '1px solid #000';
  max_x = document.documentElement.clientWidth - 50;
  max_y = document.documentElement.clientHeight - 50;
  x = getRandomInt(10,max_x);
  y = getRandomInt(10,max_y);
  newDiv.style.left = '' + x + 'px';
  newDiv.style.top = '' + y + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.opacity = '0.7';

  newDiv.addEventListener('click', function () {
    if (newDiv.style.background === 'green') {
      newDiv.style.background = 'yellow';
    } else {
      newDiv.style.background = 'green';
    }
  });

  newDiv.addEventListener('dblclick', function () {
    newDiv.remove();
  });

  document.body.appendChild(newDiv);
}

function generationSquare() {
  var newDiv = document.createElement("div");
  r = getRandomInt(10,300);
  newDiv.style.width = '' + r + 'px';
  newDiv.style.height = '' + r + 'px';
  newDiv.style.background = 'red';
  newDiv.style['border'] = '1px solid #000';
  max_x = document.documentElement.clientWidth - 50;
  max_y = document.documentElement.clientHeight - 50;
  x = getRandomInt(10,max_x);
  y = getRandomInt(10,max_y);
  newDiv.style.left = '' + x + 'px';
  newDiv.style.top = '' + y + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.opacity = '0.7';

  newDiv.addEventListener('click', function () {
    if (newDiv.style.background === 'red') {
      newDiv.style.background = 'yellow';
    } else {
      newDiv.style.background = 'red';
    }
  });

  newDiv.addEventListener('dblclick', function () {
    newDiv.remove();
  });

  document.body.appendChild(newDiv);
}

function generationTriangle() {
  var newDiv = document.createElement("div");
  r = getRandomInt(10,300);
  newDiv.style.width = '' + 0 + 'px';
  newDiv.style.height = '' + 0 + 'px';
  newDiv.style['border-left'] = '' + r + 'px' + ' solid transparent';
  newDiv.style['border-right'] = '' + r + 'px' + ' solid transparent';
  newDiv.style['border-bottom'] = '' + r + 'px' + ' solid blue';
  max_x = document.documentElement.clientWidth - 50;
  max_y = document.documentElement.clientHeight - 50;
  x = getRandomInt(10,max_x);
  y = getRandomInt(10,max_y);
  newDiv.style.left = '' + x + 'px';
  newDiv.style.top = '' + y + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.opacity = '0.7';

  newDiv.addEventListener('click', function () {
    if (newDiv.style['border-bottom-color'] === 'blue') {
      newDiv.style['border-bottom-color'] = 'yellow';
    } else {
      newDiv.style['border-bottom-color'] = 'blue';
    }
  });

  newDiv.addEventListener('dblclick', function () {
    newDiv.remove();
  });

  document.body.appendChild(newDiv);
}

const buttons = Array.from(document.querySelectorAll('[id^="btn"]'));
const input = document.getElementById('input');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnNum = button.id.replace('btn', '');
        var count = input.value;
        for (var i = 0; i < count; i++)
        {
          buttonsClick(btnNum);
        }
    });
});

function buttonsClick(number) {
    switch (number) {
        case '1':
            generationSquare();
            break;
        case '2':
            generationTriangle();
            break;
        case '3':
            generationCircle();
            break;
        default:
            console.log('error');
    }
}