particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "images/aw.png",
        "width": 72,
        "height": 72
      }
    },
    "opacity": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#61EB61",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 1200,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 350,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 350,
        "duration": 1
      },
      "push": {
        "particles_nb": 2
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});
