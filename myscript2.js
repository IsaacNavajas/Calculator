
function init(){

            //Events and logic
            var screen = document.getElementById("screen") //the screen

            var one = document.getElementById("one").onclick = function(e){screen.textContent += "1"; }
            var two = document.getElementById("two").onclick=function(){screen.textContent += "2"; }
            var three = document.getElementById("three").onclick=function(){screen.textContent += "3"; }
            var four = document.getElementById("four").onclick=function(){screen.textContent += "4"; }
            var five = document.getElementById("five").onclick=function(){screen.textContent += "5"; }
            var six = document.getElementById("six").onclick=function(){screen.textContent += "6"; }
            var seven = document.getElementById("seven").onclick=function(){screen.textContent += "7"; }
            var eight = document.getElementById("eight").onclick=function(){screen.textContent += "8"; }
            var nine = document.getElementById("nine").onclick=function(){screen.textContent += "9"; }
            var cero = document.getElementById("cero").onclick=function(){screen.textContent += "0"; }

            //Operational events
            var mul = document.getElementById("multiplication")
            var div = document.getElementById("division")
            var sum = document.getElementById("sum")
            var res = document.getElementById("subtraction")

            var rs = document.getElementById("reset").onclick = function(){reset();}
            var same = document.getElementById("same")

        //Interpreted logic

        sum.onclick = function(){
            operatingA= screen.textContent;
            operation= "+";
            clean();
        }

        res.onclick = function(){
            operatingA= screen.textContent;
            operation= "-";
            clean();
        }

        div.onclick = function(){
            operatingA= screen.textContent;
            operation= "/";
            clean();
        }
        
        mul.onclick = function(){
            operatingA= screen.textContent;
            operation= "*";
            clean();
        }

        //same
        same.onclick = function(){
            operatingB= screen.textContent;
            solve();
        }
        
        //functions; 
        
        //clean()
        function clean(){screen.textContent = ""}

        //reset()
        function reset() {
            screen.textContent ="";
            operatingA="";
            operatingB="";
            operation="";
        }

        //solve()
        function solve(){
            var cont="";
                switch(operation){
                        case "+":
                            cont = parseFloat(operatingA) + parseFloat(operatingB) 
                        break;
                        
                        case "-":
                            cont = parseFloat(operatingA) - parseFloat(operatingB)
                        break;

                        case "*":
                            cont = parseFloat(operatingA) * parseFloat(operatingB)
                        break;

                        case "/":
                            cont = parseFloat(operatingA) / parseFloat(operatingB)
                        break;
                }
            reset();
            screen.textContent = cont; 
    
        }
 
}

