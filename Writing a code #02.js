<html>
    <head>
        <title>JavaScript - Writing a code #02</title>
    </head>
    <body style="margin:0 auto; border-radius:5px; border:3px solid black; width:900px; font-family:Arial, Helvetica; font-size:24px;">
        <script>
            document.write("Questo codice calcolerà un'approssimazione della costante numerica e usando la formula (1 + <sup>1</sup>/<sub>n</sub>)<sup>n</sup>","<br></br>");
            document.write("This code will find an approximation of the Euler's number by (1 + <sup>1</sup>/<sub>n</sub>)<sup>n</sup>","<br></br>");
            var n = prompt("Prego, inserire un numero / Please, enter a number","");
            document.write("Ecco il numero: / This is your number:", n, "<br></br>");
            var e = (1 + 1/n)**n;
            document.write("Ecco l'approssimazione della costante numerica e: " + e + "<br></br>");
            document.write("This is the approximation of the Euler's number: " + e + "<br></br>");
        </script>
    </body>
</html>
