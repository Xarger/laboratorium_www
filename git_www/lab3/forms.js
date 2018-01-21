 function checkForm() {
        var error=false;
        var errorText=""; 
        var contactName = document.getElementById("contactName") ;
        var contactEmail = document.getElementById("contactEmail") ;

        if (contactName.value == "") {
          errorText += "imię\n"
          error=true;
        } 

        if (contactEmail.value == "") {
              errorText += "email\n"
              error=true;
            } else {
              var email = contactEmail.value;
              var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9. -]+\.)+[a-zA-Z0-9. -]{2,4}$/;

              if(regex.test(email)==false) {
                errorText += "błędny email\n";
                error=true;
              }
            }

        if (! error) return true;
        else {
          alert ("Nie wypełniłeś następujących pól: \n" + errorText);
          return false;
        }
      }