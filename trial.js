document.querySelector("#mybtn").onclick = function () {
    const h1 = document.querySelector("#myh1");

    console.log(h1.style);
    h1.style.color = "blue";
    h1.style.textalighnment = "center";
    h1.style.backgroundColor = "red";
    h1.style.bordercolor = "green";
    h1.style.border = "5px solid";
    h1.style.fontFamily = "consolas"; 
    var name = window.prompt("what is your Name?");
    console.log("Hello",name);
    document.getElementById("#myButton").onclick = function () {
        var city = document.getElementById("#myText").Value;
        console.log("your favorite City is", city);

        function toCelsius(f) {
            return (F - 32) * (5 / 9);  
        };
        function toFareinHeit(c) {
            return (c * 9 / 5) + 32; 
        };
        var temp = toCelsius(37.777);
        console.log("My tempreture is" + temp+"degrees");
    }
    
}