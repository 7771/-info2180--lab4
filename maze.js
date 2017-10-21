<script>

<style>
.changeColor{color:red;}
</style>

maze.addEventListener("onmouseover", function(){

onmouseover = "myFunction()"
function myFunction(){
document.body.getElementById("boundary1").setAttribute("youlose","changeColor");
})};
                      
var x;                    
                    
function load = {}
window.onload = load;

var count;
var elements = document.querySelectorAll("div");

for ( var i=0; i<elements.length; i++) {
    elements[i].hover(function(){
        $(this).css("color", "red");
        count+=1;
    }, 
        function(){
    $(this).css("color", "black")
    }
</script>


