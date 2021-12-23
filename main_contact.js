function AffIcher()
{
    var nom=document.getElementById("nom").value;
    var email=document.getElementById("email").value;
    var sujet=document.getElementById("sujet").value;
    var message=document.getElementById("message").value;

    var concat="Your Name : "+nom+",   Your Email : "+email+"\nSujet : "+sujet+"\nMessage : "+message;
    var viriFier=(nom.trim()==""||email.trim()==""||sujet.trim()==""||message.trim()=="")?alert(`Remplire tous les info`):alert(concat);
    
}