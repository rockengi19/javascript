<html>
    <head>
        <title>JavaScript - Writing a code #07</title>
    </head>
    <body style="margin:0 auto; border-radius:8px; border:3px solid black; width:900px; font-family:Arial, Helvetica, sans-serif; font-size:24px; background-color:beige;line-height:30px;">
        <script>
            document.write("Questo codice calcolerà l'area di un cerchio il cui raggio è inserito dall'utente.","<br></br>");
            document.write("This code will calculate the area of a circle which radius is given by the user.","<br></br>");
            var r = prompt("Prego inserire il raggio / Please enter the radius","");
            document.write("Questo è il raggio: " + r + "<br></br>");
            document.write("This is the radius: " + r + "<br></br>");
            var result = Math.PI*r**2;
            document.write("Questa è l'area del cerchio: " + Math.round(result) + " cm<sup>2</sup>" + "<br></br>");
            document.write("This is the area of the circle: " + Math.round(result) + " cm<sup>2</sup>" + "<br></br>");
        </script>
    </body>
</html>
