<script>
    function sub() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var tel = document.getElementById("tel").value;
      var sujet = document.getElementById("sujet").value;
      var mesg = document.getElementById("mesg").value;
      if (name && email && tel && sujet && mesg) {
        var confirm = document.createElement("p");
        confirm.textContent = "Formulaire soumis avec succès !";
        confirm.style.textAlign = "center";
        document.body.appendChild(confirm);
        document.getElementById("contactForm").reset();
      } else {
        alert("Veuillez remplir tous les champs du formulaire.");
      }
    }
  </script>
