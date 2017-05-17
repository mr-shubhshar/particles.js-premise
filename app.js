particlesJS("snowfall", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "shape": {
            "type": "star"
        },
        "size": {
            "value": 7,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true, //default
            "speed": 1.2,
            "direction": "bottom",
            "straight": false //default
        },
        "color": {
            //"value": "#f7f7f7"
            "value": ["#f7f7f7", "#f9eded", "#e5e0e0", "#f2efef"],
            "random": true
            //"value": "random"
        },
        "opacity": {
            "value": 1,
            "random": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false
            }
        }
    }
});

particlesJS("space", {
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 300
            }
        },
        "line_linked": {
            "enable": false
        },
        "shape": {
            "type": ["circle", "star"],
            "random": true
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 2,
                "sync": false
            }
        },
        "move": {
            "speed": 3.3,
            "direction": "right",
            "straight": true
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 5,
                "opacity_min": 0.3,
                "sync": false
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            }
        }
    }
});

particlesJS("particles", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "value": 1
        }
    },
    "interactivity": {

    }
});
