<html>
    <head>
        <title>JavaScript - Writing a code #04</title>
    </head>
    <body style="margin:0 auto; border-radius:5px; border:3px solid black; width:900px; font-family:Arial, Helvetica, sans-serif; font-size:24px;">
        <script>
            document.write("Questo codice userà una formula di interesse composto per calcolare il futuro valore di un prestito (o deposito).","<br></br>");
            document.write("This code will use a compound interest formula to calculate the future value of your loan (or deposit).","<br></br>");
            var p = prompt("Prego, inserire il valore iniziale del prestito/deposito: / Please enter the initial value of your loan/deposit: ","");
            document.write("Ecco il valore iniziale: EUR ",p,"<br></br>");
            document.write("This is the initial value: EUR ",p,"<br></br>");
            var n = 15;
            var i = prompt("Ora inserire il tasso di interesse: / Now enter the tax on interest: ","");
            document.write("Ecco il tasso di interesse: ",i,"<br></br>");
            document.write("This is the tax on interest: ",i,"<br></br>");
            var t = prompt("Scegliere il numero di anni: / Choose the number of years: ","");
            a = p*(1 + (i/n))**(n*t);
            document.write("Ecco il futuro valore del prestito/deposito: EUR " + a + "<br></br>");
            document.write("This is the future value of your loan/deposit: EUR " + a + "<br></br>")
        </script>
    </body>
</html>
