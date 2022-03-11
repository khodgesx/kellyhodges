//homepage pizza "accordion" for mobile
$("#pizza-one").on("click", ()=>{
    $("#pizza-one-div").slideToggle();
    $("#pizza-two-div").slideUp();
    $("#pizza-three-div").slideUp();
    
  });
  $("#pizza-two").on("click", ()=>{
    $("#pizza-two-div").slideToggle();
    $("#pizza-one-div").slideUp();
    $("#pizza-three-div").slideUp();
  
  });
  $("#pizza-three").on("click", ()=>{
    $("#pizza-three-div").slideToggle();
    $("#pizza-one-div").slideUp();
    $("#pizza-two-div").slideUp();
    
  });
  //click on #hamburger image and add class menu open to menu
$('#hamburger').on('click', ()=>{
    $('.menu').addClass('menu-open')
});
//click X and remove class from menu/close it
$('#menu-close').on('click', ()=>{
    $('.menu').removeClass('menu-open')
})

//close aside menu if contact is clicked
$('.links').on('click', ()=>{
    $('.menu').removeClass('menu-open')
})