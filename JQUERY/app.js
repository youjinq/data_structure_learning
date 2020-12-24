var g = G$('PJ', 'CHEN'); //  language的預設是zh-tw

g.greet().setLang('zh').greet(true).log();

// specific button to be click
$('#login').on('click', 'button', function () {
  let pj = G$('Po-Jung', 'Chen');

  // $('#login').hide();
  pj.setLang($('#Lang').val()).greetHTML('#logMsg', true).log();
});

// const Build = function (name,email,id){
//     this.name= name;
//     this.email= email;
//     this.id= id;

// }

// const ali = new Build('ali','j@gmail.com','5');

// console.log(ali);
