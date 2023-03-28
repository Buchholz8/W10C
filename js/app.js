//adding a query selector for one of my is's. i then function it and give it some style
let logo = document.querySelector(`#logo`);
function logo_color(details){
    details[`target`][`style`][`color`] = `red` ;
}
logo.addEventListener(`click` , logo_color)
//i made another queryselector for anotehr id and gave it styleing
let footer_p = document.querySelector(`#footer_p`);
function footer_color(details){
    details[`target`][`style`][`background-color`] = `black` ;
}
footer_p.addEventListener(`dblclick` , footer_color)
//i made another queryselector for anotehr id and gave it styleing
let body_para = document.querySelector(`#body_p`);
//here i added an event listener for when you hover over something it sill give it a style
function body_active(details){
    details[`target`][`style`][`fontSize`] = `4rem` ;
}
//here is the funtion for when you are no longer hovering over the #body_p id 
function body_innactive(details){
    details[`target`][`style`][`fontSize`] = `1rem` ;
}
//this assignes the active funtion
body_para.addEventListener(`mouseenter` , body_active);
//this assignes the innactive function
body_para.addEventListener(`mouseleave` , body_innactive);
//this was my attempt at figuring out the key binds for the space bar , i couldnt get it to work 
let keybinds = document.querySelector(`#key_bound`);
function space_key(details){
    details[`target`][`style`][`color`] = `blue`;
}
keybinds.addEventListener('keydown' , (e) => {that.space_key(e);});
