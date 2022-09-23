// validating registration form
var signup = new Vue ({
    el: "#signup-form",
    
    data: {
       email: "",
       password: "",
       confirmPass: "",
       emptyFields: false
    },
 });