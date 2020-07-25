<html>
    <head>
        <title>JavaScript - Writing a code #03</title>
    </head>
    <body style="margin:0 auto; border-radius:5px; border:3px solid black; width:900px font-family:Arial,Helvetica,sans-serif; font-size:24px;">
        <script>
            document.write("Questo codice calcolerà un'approssimazione del pi Greco usando la serie Madhava-Leibniz e un numero inserito dall'utente.","<br></br>");
            document.write("This code will calculate an approximation of the Greek Pi using the Madhava-Leibniz series and a number given by the user.","<br></br>");
            var n = prompt("Prego, inserire un numero / Please, enter a number","");
            document.write("Ecco il numero: ", n, "<br></br>");
            document.write("This is your number: ", n, "<br></br>");
            var greekpi = 0;
            for(i=0;i<=n;i++)
            {
                greekpi += ((-1)**i)/(2*i + 1);
            }
            document.write("Ecco l'approsimazione del pi Greco: " + 4*greekpi + "<br></br>");
            document.write("This is the approximation of the Greek Pi: " + 4*greekpi + "<br></br>");
        </script>
    </body>
</html>
