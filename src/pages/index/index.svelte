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

    onMount(() => {

        line = document.querySelector("polyline");
        console.log(line.getAttribute("points"));

    });


    function start (event) {
        var x = Math.round(event.touches[0].clientX);
        var y = Math.round(event.touches[0].clientY);
        document.querySelector(".svg").addEventListener('touchmove', move);
        line.setAttribute("points", x + "," + y);
        points = line.getAttribute("points");
    }
    function move (event) {

        var x = Math.round(event.touches[0].clientX);
        var y = Math.round(event.touches[0].clientY);
        if (handDrawing) {
            points = line.getAttribute("points");
        }
        
        line.setAttribute("points", points + " " + x + "," + y);

    }
    function end (event) {
        document.querySelector(".svg").removeEventListener('touchmove', move);
    }

    // https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/


</script>

<header>nine dot task</header>

<main>

    <svg on:touchstart={start} on:touchend={end} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
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
            <polyline points="14,17 136,37" stroke-width="5"/>
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



