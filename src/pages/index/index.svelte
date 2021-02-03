<script>

    import { onMount } from 'svelte';
    var canvas;
    var context;
    var last_mousex;
    var last_mousey;

    var line;
    var points;
    var handDrawing = true;
    var downEvent;
    var svg;
    var pt;

    // https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
    function cursorPoint(evt){
        pt.x = evt.clientX; pt.y = evt.clientY;
        return pt.matrixTransform(svg.getScreenCTM().inverse());
    }

    onMount(() => {

        svg = document.querySelector(".svg");
        // Create an SVGPoint for future math
        pt = svg.createSVGPoint();
        line = document.querySelector("polyline");
        console.log(line.getAttribute("points"));

    });


    function start (event) {
        event.preventDefault();
        // var x = Math.round(event.touches[0].clientX);
        // var y = Math.round(event.touches[0].clientY);
        var point = cursorPoint(event);
        var x = point.x;
        var y = point.y;
        // console.log(point);

        svg.addEventListener('pointermove', move);
        line.setAttribute("points", x + "," + y);
        points = line.getAttribute("points");
    }
    function move (event) {
        // event.preventDefault();
        // var x = Math.round(event.clientX);
        // var y = Math.round(event.clientY);
        var point = cursorPoint(event);
        var x = point.x;
        var y = point.y;
        // console.log(point);
        console.log("move")

        if (handDrawing) {
            points = line.getAttribute("points");
        }

        line.setAttribute("points", points + " " + x + "," + y);

    }
    function stop (event) {
        console.log("stop")
        event.preventDefault();
        svg.removeEventListener('pointermove', move);
    }

    // https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/


</script>

<header>nine dot task</header>

<main>

    <svg on:pointerdown={start} on:pointerup={stop} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 1000 1000" class="svg">
        <rect class="svg-dots-container" x="300" y="200" width="400" height="400"/>
        <circle class="svg-dot" cx="370" cy="270" r="50"/>
        <circle class="svg-dot" cx="370" cy="400" r="50"/>
        <circle class="svg-dot" cx="370" cy="530" r="50"/>

        <circle class="svg-dot" cx="500" cy="270" r="50"/>
        <circle class="svg-dot" cx="500" cy="400" r="50"/>
        <circle class="svg-dot" cx="500" cy="530" r="50"/>

        <circle class="svg-dot" cx="630" cy="270" r="50"/>
        <circle class="svg-dot" cx="630" cy="400" r="50"/>
        <circle class="svg-dot" cx="630" cy="530" r="50"/>
        <g stroke="red" fill="none">
            <polyline points="" stroke-width="5"/>
            <path stroke="blue" d="M70 75L25.9 1.2" />
        </g>

        <line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95"/>
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



