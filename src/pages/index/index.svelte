<script>

    import { onMount } from 'svelte';

    var circles = require("src/pages/index/circles");
    var contants = require("src/pages/index/contants");

    var line;
    var points;
    var handDrawing = false;
    var svg;
    var pt;
    var circlesInstances = {};
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

        var s = Snap(".svg");
        circles.forEach(function (circle, index) {
            circlesInstances["circle0" + (index + 1)] = s.circlePath(circle.cx, circle.cy, circle.r).attr({
                class: "svg-dot",
                // id: "circle0" + (index + 1)
            });
        });
        line = s.path("").attr({
            stroke: "red",
            "stroke-width": "3",
            id: "line",
            fill: "none"
        }).node;


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
        });

        if (handDrawing) {
            points = line.getAttribute("d");
        }

        line.setAttribute("d", points + " " + x + "," + y);

    }
    function stop (event) {

        event.preventDefault();
        svg.removeEventListener('pointermove', move);

        line.setAttribute("d", "");

        [].forEach.call(svg.querySelectorAll(".entered"), function (circle) {
            circle.classList.remove("entered");
        });

    }





</script>

<header>nine dot task</header>

<main>

    handDrawing
    <input type=checkbox bind:checked={handDrawing}>

    <svg on:pointerdown={start} on:pointerup={stop} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 {500 * contants.FACTOR} {500 * contants.FACTOR}" class="svg">
        <rect class="svg-dots-container" x="{150 * contants.FACTOR}" y="{100 * contants.FACTOR}" width="{200 * contants.FACTOR}" height="{200 * contants.FACTOR}"/>


    </svg>


    <br><br><br><br><br><br><br>

    <div class="dots-container">
        <table>
            <tr>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
            </tr>
            <tr>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
            </tr>
            <tr>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
                <td><span class="dot"></span></td>
            </tr>
        </table>
    </div>

</main>



