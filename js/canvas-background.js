(function() {

    var width, height, largeHeader, canvas, ctx, triangles, target, animateHeader = true;
    //var colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'];
    var colors = ['255,103,103', '97,223,255', '255,232,88', '141,255,139'];

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('canvas-background');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('canvas-background');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        triangles = [];
        for(var x = 0; x < 100; x++) {
            addTriangle(x * 300);
        }
    }

    function addTriangle(delay) {
        setTimeout(function() {
            var t = new Triangle();
            triangles.push(t);
            tweenTriangle(t);
        }, delay);
    }

    function initAnimation() {
        animate();
    }

    function tweenTriangle(tri) {
        var t = Math.random() * (2 * Math.PI);
        var x = (500 + Math.random() * 100) * Math.cos(t) + width * 0.5;
        var y = (500 + Math.random() * 100) * Math.sin(t) + height * 0.5-20;
        var time = 4 + 3 * Math.random();

        TweenLite.to(tri.pos, time, {
            x: x,
            y: y,
            ease: Circ.easeOut,
            onComplete: function() {
                tri.init();
                tweenTriangle(tri);
            }
        });
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in triangles) {
                triangles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Triangle() {
        var _this = this;

        // constructor
        (function() {
            _this.coords = [{},{},{}];
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = width * 0.5;
            _this.pos.y = height * 0.5-20;
            _this.random = Math.random() * 100;
            _this.color = colors[Math.floor(Math.random() * colors.length)];
            setTimeout(function() { _this.alpha = 0.4; }, 10);
        }

        this.draw = function() {
            if(_this.alpha >= 0.005) _this.alpha -= 0.004;
            else _this.alpha = 0;
            var x1 = _this.random * Math.sin(Math.PI / 10);
            var y1 = _this.random * Math.cos(Math.PI / 10);
            var x2 = _this.random / 2;
            var y2 = _this.random / 2*Math.tan(Math.PI / 5);
            ctx.beginPath();
            // ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
            // ctx.lineTo(_this.coords[1].x+_this.pos.x, _this.coords[1].y+_this.pos.y);
            // ctx.lineTo(_this.coords[2].x+_this.pos.x, _this.coords[2].y+_this.pos.y);
            ctx.moveTo(_this.pos.x, _this.pos.y);
            ctx.lineTo(_this.pos.x + x1, _this.pos.y + y1);
            ctx.lineTo(_this.pos.x - x2, _this.pos.y + y2);
            ctx.lineTo(_this.pos.x + x2, _this.pos.y + y2);
            ctx.lineTo(_this.pos.x - x1, _this.pos.y + y1);
            ctx.lineTo(_this.pos.x - x1, _this.pos.y + y1);
            ctx.lineTo(_this.pos.x - x1, _this.pos.y + y1);
            ctx.closePath(_this.pos.x, _this.pos.y);
            ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
            ctx.fill();
        };

        this.init = init;
    }
    
})();