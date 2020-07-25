<html>
    <head>
        <title> JavaScript - Writing a code #06 </title>
    </head>
    <body style="margin:0 auto; border-radius:8px; border:3px solid black; width:900px; font-family:Arial, Helvetica, sans-serif; font-size:24px; background-color:beige;">
        <script>
            document.write("Questo codice calcolerà il fattoriale di un numero inserito dall'utente.","<br></br>");
            document.write("This code will calculate the factorial of a number given by the user","<br></br>");
            var n = prompt("Please enter a number: / Prego inserire un numero: ","");
            document.write("Ecco il suo numero: " + n + "<br></br>");
            document.write("This is your number: " + n + "<br></br>");
            var result = 1;
            for(i = 1; i<=n; i++)
            {
                result *= i;
            }
            document.write("Ecco il fattoriale del suo numero: " + result + "<br></br>");
            document.write("This is the factorial of your number: " + result + "<br></br>");
        </script>
    </body>
</html>
