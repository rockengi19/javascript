<html>
    <head>
        <title>JavaScript - Writing a code #10</title>
        <link href="css/style.css" type="text/css" rel="stylesheet" media="screen"></link>
    </head>
    <body>
        <script>
            document.write("This code will calculate the greatest common divisor of two number given by the user.","<br></br>");
            document.write("Questo codice calcolerà il massimo comun divisore di due numeri inseriti dall utente.","<br></br>");
            var a = prompt("Please enter the first number: / Inserire il primo numero, prego: ","");
            document.write("This is the first number: / Ecco il primo numero: " + a + "<br></br>");
            var b = prompt("Please enter the second number: / Inserire il secondo numero, prego: ","");
            document.write("This is the second number: / Ecco il secondo numero: " + b + "<br></br>");
            var d = a;
            var e = b;
            while(b)
            {
                var c = b;
                b = a%b;
                a = c
            }        
            document.write("This is the greatest common divisor of " + d + " and " + e + " : " + c + "<br></br>");
            document.write("Questo è il massimo comun divisore di " + d + " e " + e + " : " + c + "<br></br>");
        </script>
    </body>
</html>

