// validating contact form
var signup = new Vue ({
    el: "#contact-form",
    data () {
      return {
        name: '',
        message: '',
        emptyFields: false
      }
    },
 });

 var selected = new Vue ({
    el: "#contact-form",
    data() {
        return {
          selected: ''
        }
      }
    }
 );