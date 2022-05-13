var click = 1;
var mostrar = 8;
var diplomas = ["scrum.jpg",
"especializacionjava.jpg",
"java-introduccion.jpg",
"java-jdbc-swing.jpg",
"java-jpa.jpg",
"java-jsf-webservice-ireport.jpg",
"talent.png",
"0. FullStack.jpg",
"1.jpg",
"2. gestion-tiempo.jpg",
"3. git-github.jpg",
"4. prework.jpg",
"5. fronted.jpg",
"6. basico-javascript.jpg",
"7. fundamentos-javascript.jpg",
"8. esmascript.jpg",
"9. asincronismo-javascript.jpg",
"10. profesional-javascript.jpg",
"11. Reactjs.jpg",
"12. react-router.jpg",
"13. fundamentos-nodejs.jpg",
"14. backend-nodejs.jpg",
"15. ssr-express.jpg",
"16. passportjs.jpg",
"17. gestion-proyectos.jpg",
"javaee.jpg"
];

//Llenar div de diplomas
var div = document.getElementById("div-certificados");
for(let i=0; i<mostrar;i++){
    let img = document.createElement("img");
    img.setAttribute("src", "./img/Diplomas/"+diplomas[i]);
    img.setAttribute("alt", "certificado");
    img.setAttribute("class", "certificados-card"); 
    div.appendChild(img);
}

function vermas(){
    var div = document.getElementById("div-certificados");
    var cuantosHay = div.childNodes.length;
    var boton2 = document.getElementById("vermenos-certificados");
    var boton = document.getElementById("vermas-certificado");
    
        for(let i=(cuantosHay-1); i<(cuantosHay+7);i++){
            if(i<diplomas.length){
            let img = document.createElement("img");
            img.setAttribute("src", "./img/Diplomas/"+diplomas[i]);
            img.setAttribute("alt", "certificado");
            img.setAttribute("class", "certificados-card"); 
            div.appendChild(img);
           
          }if(i==diplomas.length){
            boton.style.display = "none";
        }
        }
        
        boton2.style.display = "inline";   
    }     
 
 function vermenos(){
    var div = document.getElementById("div-certificados");
    var boton = document.getElementById("vermas-certificado");
    var boton2 = document.getElementById("vermenos-certificados");
   var cuantoshay = div.childNodes.length;
        for(let i=(cuantoshay-1);i>(cuantoshay-8);i--){
        if(i>8){
            var img = div.lastChild;
            div.removeChild(img);
        }else if(i==8){
            boton2.style.display ="none";
        }
    }
    boton.style.display = "inline";
 }