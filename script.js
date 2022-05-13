var click = 1;
var mostrar = 8;
var diplomas = [["scrum.jpg","scrum.pdf"],
["especializacionjava.jpg","javaEsp (1).pdf"],
["java-introduccion.jpg","javaEsp (2)"],
["java-jdbc-swing.jpg","javaEsp (3).pdf"],
["java-jpa.jpg","javaEsp (4).pdf"],
["java-jsf-webservice-ireport.jpg","javaEsp (5).pdf"],
["talent.png","talent.pdf"],
["0. FullStack.jpg","0.js1-67.pdf"],
["1.jpg","1.diploma-aprender-2019.pdf"],
["2. gestion-tiempo.jpg","2.diploma-gestion-tiempo.pdf"],
["3. git-github.jpg","3.diploma-git-github.pdf"],
["4. prework.jpg","4.diploma-prework-2019.pdf"],
["5. fronted.jpg","5.diploma-frontend-developer-2019.pdf"],
["6. basico-javascript.jpg","6.diploma-basico-javascript.pdf"],
["7. fundamentos-javascript.jpg","7.diploma-fundamentos-javascript-2018.pdf"],
["8. esmascript.jpg","8.diploma-ecmascript-6.pdf"],
["9. asincronismo-javascript.jpg","9.diploma-asincronismo-js.pdf"],
["10. profesional-javascript.jpg","10.diploma-javascript-profesional.pdf"],
["11. Reactjs.jpg","11.diploma-react-ejs-2019.pdf"],
["12. react-router.jpg","12.diploma-react-router-redux.pdf"],
["13. fundamentos-nodejs.jpg","13.diploma-fundamentos-node.pdf"],
["14. backend-nodejs.jpg","14.diploma-backend-nodejs-2019.pdf"],
["15. ssr-express.jpg","15.diploma-ssr.pdf"],
["16. passportjs.jpg","16.diploma-passport-2019.pdf"],
["17. gestion-proyectos.jpg","16.diploma-passport-2019.pdf"],
["javaee.jpg","java EE.pdf"]
];

//Llenar div de diplomas
var div = document.getElementById("div-certificados");

for(let i=0; i<mostrar;i++){
    let img = document.createElement("img");
    var a = document.createElement("a");
    img.setAttribute("src", "./img/Diplomas/"+diplomas[i][0]);
    img.setAttribute("alt", "certificado");
    img.setAttribute("class", "certificados-card"); 
    a.setAttribute("href","./pdf/Diplomas/"+diplomas[i][1]);
    a.appendChild(img);
    div.appendChild(a);
}

function vermas(){
    var div = document.getElementById("div-certificados");
    var cuantosHay = div.childNodes.length;
    var boton2 = document.getElementById("vermenos-certificados");
    var boton = document.getElementById("vermas-certificado");
       
        for(let i=(cuantosHay-1); i<(cuantosHay+7);i++){
            if(i<diplomas.length){
            let img = document.createElement("img");
            let a = document.createElement("a");
            img.setAttribute("src", "./img/Diplomas/"+diplomas[i][0]);
            img.setAttribute("alt", "certificado");
            img.setAttribute("class", "certificados-card"); 
            a.setAttribute("href","./pdf/Diplomas/"+diplomas[i][1]);
            a.appendChild(img);
            div.appendChild(a);
           
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
        for(let i=(cuantoshay-1);i>(cuantoshay-9);i--){
        if(i>8){
            var img = div.lastChild;
            div.removeChild(img);
        }else if(i==8){
            boton2.style.display ="none";
        }
    }
    boton.style.display = "inline";
 }