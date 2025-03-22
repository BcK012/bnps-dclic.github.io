

function contactForm()                                    
{ 
    var prenom = document.forms["fContact"]["prenom"];               
    var nom = document.forms["fContact"]["nom"];    
    var sujet = document.forms["fContact"]["sujet"];  
    var message =  document.forms["fContact"]["message"]; 
    var contacForm = document.forms["fContact"]["contactForm"]
 

    if (prenom.value == "")                                  
    { 
        alert("Mettez votre prenom."); 
        prenom.focus(); 
        return false; 
    }    
    if (nom.value == "")                               
    { 
        alert("Mettez votre nom."); 
        nom.focus(); 
        return false; 
    }        
    if (sujet.value == "")                                   
    { 
        alert("Mettez votre sujet."); 
        sujet.focus(); 
        return false; 
    }    
  
    
    if (message.value == "")                  
    { 
        alert("Entrez votre message."); 
        message.focus(); 
        return false; 
    } 
    return true; 

    
    
}
