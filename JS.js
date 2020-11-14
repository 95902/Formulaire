const slidePage =document.querySelector(".sliderpage");
const premierBtnSuivant =document.querySelector(".nextBtn");
const btnPrecedentSelc = document.querySelector(".prev-1");
const btnSuivantSelc = document.querySelector(".next-1");
const secondBtnPrecedentSelc = document.querySelector(".prev-2");
const secondBtnSuivantSelc = document.querySelector(".next-2");
const troisdBtnPrecedentSelc = document.querySelector(".prev-3");

const quatreBtnPrecedentSelc = document.querySelector(".prev-4");
const sumbitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bulle = document.querySelectorAll(".step .bulle");
let max=4;
let current = 1;

//******************************************
//*************BOUTON PRECEDENT**************
//******************************************
btnPrecedentSelc.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%"
    bulle[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;

});
secondBtnPrecedentSelc.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%"
    bulle[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;

});
troisdBtnPrecedentSelc.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%"
    bulle[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;

});


//******************************************
//***FUNCTION VALIDATION FORM Page 1 ******
//******************************************
var b_civilit=false;var b_nom =false;var b_prenom=false;var b_email = false;var b_telephone = false;var b_statut = false;
function verification(nom_controle) {
    var longueur = document.getElementById(nom_controle).value.length;
     //validation civilite//
     if (nom_controle == 'civilite') {
        if (document.getElementById(nom_controle).value > 0) {
            document.getElementById(nom_controle).style.border = '#9FE855 1px solid';
            b_civilit = true
        }
        else {
            b_civilit = false
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert('veuillez selectioner votre civilité')
        }
    }
    //validation string nom & prénon //
    else if (nom_controle == 'nom' || nom_controle == 'prenom') {
        var letters = /^[A-Za-z]+$/;
        if (!document.getElementById(nom_controle).value.match(letters)) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez tapez des lettres");
            b_nom = false;
            b_prenom = false
        }
        else {
            b_nom = true;
            b_prenom = true;
            document.getElementById(nom_controle).style.border = '#096A09 2px solid';
        }
    }
    //validation email//
    else if (nom_controle == 'email') {
        if (document.getElementById(nom_controle).value.indexOf("@") == -1 || document.getElementById(nom_controle).value.indexOf(".") == -1) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez saisir un email valid");
            b_email = false
        }
        else {
            b_email = true
            document.getElementById(nom_controle).style.border = '#9FE855 1px solid';
        }
    }
    //validation telephone//
    else if (nom_controle == 'phone') {
        var number =/^[0-9-+\s()]+$/;
        if (longueur < 10 ||!document.getElementById(nom_controle).value.match(number)) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez saisir un n°téléphone valid");
            b_telephone = false
        }
        else {
            b_telephone = true
            document.getElementById(nom_controle).style.border = '#9FE855 2px solid';
        }
    }
    //validation statut//
    else if(nom_controle == 'statut'){
        if(document.getElementById(nom_controle).value > 0){
            b_statut = true;
            document.getElementById(nom_controle).style.border = '#9FE855 2px solid';
        }
        else{
            b_statut = false;
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez selectioner un statut");
        }
    }


}
/*  Validation Page 1
*/ 
function validationPage1() {
        if(b_civilit== false && b_nom ==false && b_prenom==false && b_email ==false && b_telephone == false && b_statut == false){
            alert("Veuillez compléter tout les champs")
            
        } if(b_civilit == false){document.getElementById("civilite").style.border = '#CC3300 3px solid'; }
            if(b_nom == false){ document.getElementById("nom").style.border = '#CC3300 3px solid';}
            if(b_prenom == false){document.getElementById("prenom").style.border = '#CC3300 3px solid';}
            if(b_email == false){document.getElementById("email").style.border = '#CC3300 3px solid';}
            if(b_telephone == false){document.getElementById("phone").style.border = '#CC3300 3px solid';}
            if(b_statut == false){document.getElementById("statut").style.border = '#CC3300 3px solid';}

    if(b_civilit== true && b_nom ==true && b_prenom==true && b_email ==true && b_telephone == true && b_statut == true){
        premierBtnSuivant.addEventListener("click",function(){
            slidePage.style.marginLeft = "-25%"
            bulle[current -1].classList.add("active");
            progressCheck[current -1].classList.add("active"); 
            current += 1;
            console.log(current);
        });
    }
}
//******************************************
//***FUNCTION VALIDATION FORM Page 2 ******
//******************************************
var b_duree=false;var b_loisir =false;var b_budget=false;
function verification_page_2(nom_controle) {
   
     //validation duree//
     if (nom_controle == "duree") {
        for (i = 0; i < document.forms['form']['duree'].length; i++) {
            if (document.forms['form']['duree'][i].checked== true) {
                b_duree = true;
                document.getElementById('question1').style.color = '#000000';
            }      
        }console.log(b_duree);
    }
    //validation string nom & prénon //
    if (nom_controle == "loisir") {
        for (i = 0; i < document.forms['form']['loisir'].length; i++) {
            if (document.forms['form']['loisir'][i].checked== true) {
                b_loisir = true;
                document.getElementById('question2').style.color = '#000000';
            }      
        }console.log(b_loisir);
    }
    //validation slider//    
    else if (nom_controle == "slider") {
        if (document.getElementById(nom_controle).value > 0) {
            b_budget = true;
            document.getElementById('question3').style.color = '#000000';
        }
        else {
            b_budget = false
            document.getElementById(nom_controle).style.backgroundColor = 'red';
        }
        console.log(b_budget)
    }
} 



/*  Validation Page 2
*/
function validationPage2() {
    if(b_duree == false){document.getElementById("question1").style.color ='#CC3300 '; }
        if(b_loisir == false){ document.getElementById("question2").style.color ='#CC3300 '; }
        if(b_budget == false){document.getElementById("question3").style.color ='#CC3300 '; }
        if(b_duree== false && b_loisir ==false && b_budget==false){
            alert("Veuillez compléter tout les champs")           
        }  
    if(b_duree == true && b_loisir==true && b_budget==true){
        btnSuivantSelc.addEventListener("click",function(){
            slidePage.style.marginLeft = "-50%"
            bulle[current -1].classList.add("active");
            progressCheck[current -1].classList.add("active"); 
            current += 1;
        });
    }
}


//******************************************
//***FUNCTION VALIDATION FORM Page 3 ******
//******************************************
var b_accompagnant=false;var b_frequence =false;var b_qualite=false;var b_etoile=false;
function verification_page_3(nom_controle) {
   //validation accompagnant//   
    if (nom_controle == "accompagnant") {
                for (i = 0; i < document.forms['form']['accompagnant'].length; i++) {
                    if (document.forms['form']['accompagnant'][i].checked) {
                        b_accompagnant = true;
                        document.getElementById('question4').style.color = '#000000';
                    }
                } 
                console.log(b_accompagnant);
            }
            //validation frequence// 
             else if (nom_controle == "frequence") {
                    for (i = 0; i < document.forms['form']['frequence'].length; i++) {
                        if (document.forms['form']['frequence'][i].checked) {
                            b_frequence = true;
                            document.getElementById('question5').style.color = '#000000';
                        }
                    }
                    console.log(b_frequence);
                }
                //validation qualite// 
                else if (nom_controle == "qualite") {
                    for (i = 0; i < document.forms['form']['qualite'].length; i++) {
                        if (document.forms['form']['qualite'][i].checked) {
                            b_qualite = true;
                            document.getElementById('question6').style.color = '#000000';
                        }       
                    }
                    console.log(b_qualite);
                }
               
                //validation etoile// 
                else if (nom_controle =="rating-input" ) {
                    if(document.getElementById("rating-input").value>0){
                        b_etoile = true;
                        document.getElementById('question7').style.color = '#000000';
                    }
                    else{
                        b_etoile = false;
                    }
                     console.log(b_etoile);
                     
                     etoile= document.getElementById("rating-input").dataset.rating;
        console.log(etoile);
                }
}
/*  Validation Page 3
*/
function validationPage3() {
    if(b_accompagnant == false){document.getElementById("question4").style.color ='#CC3300 '; }
        if(b_frequence == false){ document.getElementById("question5").style.color ='#CC3300 '; }
        if(b_qualite == false){document.getElementById("question6").style.color ='#CC3300 '; }
        if(b_etoile == false){document.getElementById("question7").style.color ='#CC3300 '; }
        if(b_accompagnant== false && b_frequence ==false && b_qualite==false && b_etoile ==false){
            alert("Veuillez compléter tout les champs")           
        }  
    if(b_accompagnant == true && b_frequence==true && b_qualite==true ){
        secondBtnSuivantSelc.addEventListener("click",function(){
            slidePage.style.marginLeft = "-75%";
            bulle[current -1].classList.add("active");
            progressCheck[current -1].classList.add("active"); 
            current += 1;
        });
        
    }
}

//******************************************
//***FUNCTION VALIDATION FORM Page 4*******
//******************************************
var b_commentaire = false; var b_destination = false;
function vérification_mots(params) {
  
    /*faire un tableau de destination pour améliorer le code 
        faire incrementation des point
    */

    if (params.includes("France")) {
        point = 2;
    }
    if (params.includes("Maroc")) {
        point = 1;
    }
    if (params.includes("Espagne")) {
        point = 1;
    }
    if (params.includes("Angleterre")) {
        point = 1;
    }
    //validation commentaire_destination//
    if (params == "commentaire_destination") {
        if (document.getElementById(params).value.length == 0) {
            b_destination = false;
        } else {
            b_destination = true;
            document.getElementById(params).style.border = '#000000';
        }
    }
    //validation commentaire//
    if (params == "commentaire") {
        if (document.getElementById(params).value.length == 0) {
            b_commentaire = false;
        } else {
            b_commentaire = true;
            document.getElementById(params).style.border = '#000000';
        }
    }
}
function count_down(obj) {
    var element = document.getElementById('count1');
    element.innerHTML = 50 - obj.value.length;
    if (50 - obj.value.length <= 0) {
        alert("vous avez utilisé le maximun de mots autorise");
    } else {
        element.style.color = 'grey';
    }
}
    var point = 0;
function count_down_2(obj) {
    var element = document.getElementById('count2');
    element.innerHTML = 200 - obj.value.length;
    if (200 - obj.value.length <= 0) {
        point = 5;
        b_commentaire = true;
        alert("vous avez utilisé le maximun de mots autorise");
    } else {
        b_commentaire = false;
        element.style.color = 'grey';
    }
} 
/*  Validation Page 4
*/
function validationPage4() {
    if(b_commentaire == false){document.getElementById("commentaire_destination").style.border = '#CC3300 2px solid'; }
        if(b_destination == false){ document.getElementById("commentaire").style.border = '#CC3300 2px solid'; }
        if(b_destination== false && b_commentaire){
            alert("Veuillez compléter tout les champs");
            document.getElementById("commentaire").style.border = '#CC3300 2px solid';
            document.getElementById("commentaire_destination").style.border = '#CC3300 2px solid';           
        }  
    if(b_commentaire == true && b_destination==true ){       
        sumbitBtn.addEventListener("click", function () {
            bulle[current -1].classList.add("active");
            progressCheck[current -1].classList.add("active"); 
            current += 1;
            document.forms["form"].submit()
        });
    }
}
/*  Validation Page 5
*/
function validationPage5() {
    setTimeout(function () {
        alert("Merci");
        location.reload();
    }, 800)
    
}



//******************************************
//*************FUNCTION COOKIES**************

//******************************************
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setCookies(){

    cookie_nom = escape(document.form.nom.value);
    cookie_prenom = escape(document.form.prenom.value);
    document.cookie="name=" + cookie_nom+ " " +cookie_prenom+"; path=/";
    document.getElementById("cookies").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
    document.getElementById("cookies2").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
    document.getElementById("cookies3").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
    document.getElementById("cookies4").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
    
    duree=document.querySelector('input[id=duree]:checked').value;
    setCookie("duree", duree, 1);
    loisir=document.querySelector('input[id=loisir]:checked').value;
    setCookie("loisir", loisir,1);
    setCookie("slider", (document.getElementById("slider").value/10),1);
    accompagnant+=document.querySelector('input[id=accompagnant]:checked').value;
    setCookie("accompagnant", accompagnant);
    frequence=document.querySelector('input[id=frequence]:checked').value;
    setCookie("frequence", frequence);
    etoile=document.querySelector('span[id=etoile]:checked').dataset.star;
    setCookie("etoile", etoile);
    qualite=document.querySelector('input[id=qualite]:checked').value;
    setCookie("qualite", qualite);

}
function Score(){

    var  dure=  parseInt(Cookies.get("duree"));
    var  periode= parseInt(Cookies.get("periode"));
    var loisir= parseInt(Cookies.get("loisir"));
    var  slider= parseInt(Cookies.get("slider"));
    var  accompagnant= parseInt(Cookies.get("accompagnant"));
    var  frequence= parseInt(Cookies.get("frequence"));
    var  qualite= parseInt(Cookies.get("qualite"));
    total=dure+periode+loisir+slider+accompagnant+frequence+qualite;
     alert(total);
    // document.getElementById("nomCokkies").innerText = total;
     
}
//******************************************
//*************FUNCTION ETOILE**************
//******************************************

jQuery(document).ready(function () {
  
    function setRating(rating) {
      $('#rating-input').val(rating);
      // fill all the stars assigning the '.selected' class
      $('.rating-star').removeClass('fa-star-o').addClass('selected');
      // empty all the stars to the right of the mouse
      $('.rating-star#rating-' + rating + ' ~ .rating-star').removeClass('selected').addClass('fa-star-o');
    }
    
    $('.rating-star')
    .on('mouseover', function(e) {
      var rating = $(e.target).data('rating');
      // fill all the stars
      $('.rating-star').removeClass('fa-star-o').addClass('fa-star');
      // empty all the stars to the right of the mouse
      $('.rating-star#rating-' + rating + ' ~ .rating-star').removeClass('fa-star').addClass('fa-star-o');
    })
    .on('mouseleave', function (e) {
      // empty all the stars except those with class .selected
      $('.rating-star').removeClass('fa-star').addClass('fa-star-o');
    })
    .on('click', function(e) {
      var rating = $(e.target).data('rating');
      setRating(rating);
    })
    .on('keyup', function(e){
      // if spacebar is pressed while selecting a star
      if (e.keyCode === 32) {
        // set rating (same as clicking on the star)
        var rating = $(e.target).data('rating');
        setRating(rating);
      }
    });
  });