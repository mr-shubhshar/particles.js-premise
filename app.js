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
