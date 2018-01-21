 function checkForm() {
        var error=false;
        var errorText=""; 
        var contactName = document.getElementById("contactName") ;
        var contactEmail = document.getElementById("contactEmail") ;

        if (contactName.value == "") {

          document.getElementById(‘errorName’).className=’ alert getEalertdanger’;


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
      }