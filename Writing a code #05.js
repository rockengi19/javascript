<html>
    <head>
        <title>JavaScript - Writing a code #05</title>
    </head>
    <body style="margin:0 auto; border-radius:5px; border:3px solid black; width:900px; font-family:Arial, Helvetica, sans-serif; font-size:24px; background-color:beige;">
        <script>
            document.write("Questo codice calcolerà un'elevazione di potenza (base ed esponente inseriti dall'utente) usando la moltiplicazione e il ciclo for. ","<br></br>");
            document.write("This code will calculate an exponentiation (base and exponent given by the user) using the multiplication and the for cycle. ","<br></br>");
            var b = prompt("Prego, inserire la base: / Please, enter the base: ","");
            document.write("Ecco la base: " + b + "<br></br>");
            document.write("This is the base: " + b + "<br></br>");
            var e = prompt("Prego, inserire l'esponente: / Please, enter the exponent: ","");
            document.write("Ecco l'esponente: " + e + "<br></br>");
            document.write("This is the exponent: " + e + "<br></br>");
            var result = 1;
            for(i = 1; i<=e; i++)
            {
                result *= b;
            }
            if(e == 0)
            {
                result = 1;
            }
            if(e < 0)
            {
                for(i = (-1); i>=e; i--)
                {
                    result *= 1.0/b;
                }
            }
            document.write("Ecco il risultato finale: " + result + "<br></br>");
            document.write("This is the final result: " + result + "<br></br>");
        </script>
    </body>
</html>
