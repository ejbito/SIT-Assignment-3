Vue.component('welcome-msg', {
    props: ['name'],
    template: 
    `
      <div>
        <p> Hi {{ name }}! Welcome back.</p>
      </div>
    `
  });
  
  new Vue ({
    el: "#greeting"
  });