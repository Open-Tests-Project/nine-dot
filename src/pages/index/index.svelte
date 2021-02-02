<script>

    import { onMount } from 'svelte';
    var canvas;
    var context;
    var last_mousex;
    var last_mousey;

    var line;
    var points;
    var handDrawing = true;

    onMount(() => {

        line = document.querySelector("polyline");
        console.log(line.getAttribute("points"));
        // canvas = document.getElementById('myCanvas');
        // context = canvas.getContext('2d');
        //
        // context.beginPath();
        // context.moveTo(100, 150);
        // context.lineTo(50, 50);
        // context.stroke();
      //
      //
      //  context.lineWidth = 3;
      //
      // // miter line join (left)
      // context.beginPath();
      // context.moveTo(99, 150);
      // context.lineTo(149, 50);
      // context.lineTo(199, 150);
      // context.lineJoin = 'miter';
      // context.stroke();
      //
      // // round line join (middle)
      // context.beginPath();
      // context.moveTo(239, 150);
      // context.lineTo(289, 50);
      // context.lineTo(339, 150);
      // context.lineJoin = 'round';
      // context.stroke();
      //
      // // bevel line join (right)
      // context.beginPath();
      // context.moveTo(379, 150);
      // context.lineTo(429, 50);
      // context.lineTo(479, 150);
      // context.lineJoin = 'bevel';
      // context.stroke();

    });


    function mousedown (event) {
        // last_mousex = event.clientX;
        // last_mousey = event.clientY;
        window.addEventListener('mousemove', mousemove);
        line.setAttribute("points", event.clientX + "," + event.clientY);
        points = line.getAttribute("points");
    }
    function mousemove (event) {

        // context.clearRect(0,0,canvas.width,canvas.height); //clear canvas
        // context.beginPath();
        // context.moveTo(last_mousex,last_mousey);
        // context.lineTo(event.clientX, event.clientY);
        // context.strokeStyle = 'black';
        // context.lineWidth = 10;
        // context.lineJoin = context.lineCap = 'round';
        // context.stroke();

        
        if (handDrawing) {
            points = line.getAttribute("points");
        }

        line.setAttribute("points", points + " " + event.clientX + "," + event.clientY);

    }
    function mouseup (event) {
        window.removeEventListener('mousemove', mousemove);
    }

    // https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/


</script>

<svelte:window on:mouseup={mouseup} on:mousedown={mousedown}/>

<header>nine dot task</header>

<main>

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 1000 1000"
        class="svg">
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
    <canvas id="myCanvas" width="578" height="200" on:mousedown={mousedown}></canvas>
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



