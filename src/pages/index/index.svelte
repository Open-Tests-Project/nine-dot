<script>

    import { onMount } from 'svelte';

    var circles = require("src/pages/index/circles");
    var constants = require("src/pages/index/contants");

    var s;
    var line;
    var points;
    var handDrawing = false;
    var svg;
    var pt;
    var timeout;
    var circlesInstances = {};
    var lineCircles = [];
    var segmentCounter = 0;
    var circlesCounter = 0;
    Snap.plugin( function( Snap, Element, Paper, global ) {
        Paper.prototype.circlePath = function(cx,cy,r) {
            var p = "M" + cx + "," + cy;
            p += "m" + -r + ",0";
            p += "a" + r + "," + r + " 0 1,0 " + (r*2) +",0";
            p += "a" + r + "," + r + " 0 1,0 " + -(r*2) + ",0";
            return this.path(p, cx, cy );
        };
    });


    // https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
    function cursorPoint(evt){
        pt.x = evt.clientX; pt.y = evt.clientY;
        return pt.matrixTransform(svg.getScreenCTM().inverse());
    }

    onMount(() => {

        svg = document.querySelector(".svg");
        // Create an SVGPoint for future math
        pt = svg.createSVGPoint();

        s = Snap(".svg");
        circles.forEach(function (circle, index) {
            circlesInstances["circle0" + (index + 1)] = s.circlePath(circle.cx, circle.cy, circle.r).attr({
                class: "svg-dot",
                // id: "circle0" + (index + 1)
            });
        });
        line = s.path("").attr({
            stroke: "#101014",
            "stroke-width": "3",
            class: "line",
            fill: "none"
        }).node;


        // svg.style.height = document.body.clientHeight + "px";

    });


    function start (event) {
        event.preventDefault();
        var point = cursorPoint(event);
        var x = point.x;
        var y = point.y;

        svg.addEventListener('pointermove', move);
        line.setAttribute("d", "M" + x + "," + y);
        points = line.getAttribute("d");

    }
    function move (event) {
        event.preventDefault();

        var point = cursorPoint(event);
        var x = point.x;
        var y = point.y;

        requestAnimationFrame(function () {
            for (var circle in circlesInstances) {
                var c = circlesInstances[circle];
                var intersects = Snap.path.intersection(c.node.getAttribute("d"), line.getAttribute("d"));
                if (intersects.length) {
                    c.node.classList.add("entered");
                } else {
                    c.node.classList.remove("entered");
                }
            }

            circlesCounter = svg.querySelectorAll(".entered").length;

        });

        if (handDrawing) {
            points = line.getAttribute("d");
        }

        line.setAttribute("d", points + " " + x + "," + y);

        clearInterval(timeout);
        timeout = setTimeout(function () {

            points = line.getAttribute("d");
            if (points && circlesCounter < 9) {
                s.circlePath(x, y, 5).attr({
                    class: "line-dot",
                });
                segmentCounter += 1;
            }

            if (circlesCounter === 9) {
                svg.removeEventListener('pointermove', move);
            }

        }, 1000);

    }
    function stop (event) {

        event.preventDefault();
        svg.removeEventListener('pointermove', move);

        line.setAttribute("d", "");

        [].forEach.call(svg.querySelectorAll(".entered"), function (circle) {
            circle.classList.remove("entered");
        });

        [].forEach.call(svg.querySelectorAll(".line-dot"), function (circle) {
            circle.parentNode.removeChild(circle);
        });

        segmentCounter = 0;
    }



</script>

<header>nine dot task</header>

<main>

    <div>
        handDrawing
        <input type=checkbox bind:checked={handDrawing}>
        segments: {segmentCounter}
        circles: {circlesCounter}
    </div>

    <svg on:pointerdown={start} on:pointerup={stop} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 {500 * constants.FACTOR} {500 * constants.FACTOR}" class="svg">
        <rect class="svg-dots-container" x="{125 * constants.FACTOR}" y="{125 * constants.FACTOR}" width="{250 * constants.FACTOR}" height="{250 * constants.FACTOR}"/>
    </svg>

</main>



