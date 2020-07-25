<html>
    <head>
        <title> JavaScript - Writing a code #08 </title>
    </head>
    <body style="margin:0 auto; border-radius:8px; border:3px solid black; width:900px; font-family:Arial, Helvetica, sans-serif; font-size:24px; background-color:beige; line-height:32px;">
        <script>
            document.write("Questo codice calcolerà l'area di un quadrato il cui lato è inserito dall'utente.","<br></br>");
            document.write("This code will calculate the area of a square which side is given by the user.","<br></br>");
            var s = prompt("Prego, inserire il lato: / Please, enter the side: ","");
            document.write("Questo è il lato: " + s + " cm " + "<br></br>");
            document.write("This is the side: " + s + " cm " + "<br></br>");
            var result = s**2;
            document.write("Questa è l'area del quadrato: " + result + " cm<sup>2</sup>" + "<br></br>");
            document.write("This is the area of the square: " + result + " cm<sup>2</sup>" + "<br></br>");

            document.write("Questo codice calcolerà l'area di un triangolo la cui base e la cui altezza sono inserite dall'utente.","<br></br>");
            document.write("This code will calculate the area of a triangle which base and which height are given by the user.","<br></br>");
            var b = prompt("Prego, inserire la base: / Please, enter the base: ","");
            var h = prompt("Prego, inserire l'altezza: / Please, enter the height: ","");
            document.write("Questa è la base: " + b + " cm " + "<br></br>");
            document.write("This is the base: " + b + " cm " + "<br></br>");
            document.write("Questa è l'altezza: " + h + " cm " + "<br></br>");
            document.write("This is the height: " + h + " cm " + "<br></br>");
            var area = (b*h)/2;
            document.write("Questa è l'area del triangolo: " + area + " cm<sup>2</sup>" + "<br></br>");
            document.write("This is the area of the triangle: " + area + " cm<sup>2</sup>" + "<br></br>");
        </script>
    </body>
</html>
