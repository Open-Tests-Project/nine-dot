<script>

	import { onMount } from 'svelte';

    var canvas;
    var context;
    var last_mousex;
	var last_mousey;

	onMount(() => {
                

        canvas = document.getElementById('myCanvas');
        context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(50, 50);
        context.stroke();
    

       context.lineWidth = 3;

      // miter line join (left)
      context.beginPath();
      context.moveTo(99, 150);
      context.lineTo(149, 50);
      context.lineTo(199, 150);
      context.lineJoin = 'miter';
      context.stroke();

      // round line join (middle)
      context.beginPath();
      context.moveTo(239, 150);
      context.lineTo(289, 50);
      context.lineTo(339, 150);
      context.lineJoin = 'round';
      context.stroke();

      // bevel line join (right)
      context.beginPath();
      context.moveTo(379, 150);
      context.lineTo(429, 50);
      context.lineTo(479, 150);
      context.lineJoin = 'bevel';
      context.stroke();

    });


    function mousedown (event) {
        last_mousex = event.clientX;
	    last_mousey = event.clientY;
        window.addEventListener('mousemove', mousemove);
    }
    function mousemove (event) {
        //context.lineTo(event.clientX, event.clientY);
        //context.stroke();
        context.clearRect(0,0,canvas.width,canvas.height); //clear canvas
        context.beginPath();
        context.moveTo(last_mousex,last_mousey);
        context.lineTo(event.clientX, event.clientY);
        context.strokeStyle = 'black';
        context.lineWidth = 10;
        context.lineJoin = context.lineCap = 'round';
        context.stroke();
    }
    function mouseup (event) {
        window.removeEventListener('mousemove', mousemove);
    }


</script>

<svelte:window on:mouseup={mouseup} on:mousedown={mousedown}/>

<header>nine dot task</header>

<main>

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



