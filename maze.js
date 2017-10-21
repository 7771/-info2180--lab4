<script>

<style>
.changeColor{color:red;}
</style>

maze.addEventListener("onmouseover", function(){

onmouseover = "myFunction()"
function myFunction(){
document.body.getElementById("boundary1").setAttribute("youlose","changeColor");
});
function load = {}
window.onload = load;

function divFunction() {
    var x = document.querySelectorAll("boundary");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}
</script>


