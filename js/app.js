//
let logo = document.querySelector(`#logo`);
function logo_color(details){
    details[`target`][`style`][`color`] = `red` ;
}
logo.addEventListener(`click` , logo_color)
//
let footer_p = document.querySelector(`#footer_p`);
function footer_color(details){
    details[`target`][`style`][`background-color`] = `black` ;
}
footer_p.addEventListener(`dblclick` , footer_color)
//
let body_para = document.querySelector(`#body_p`);
function body_active(details){
    details[`target`][`style`][`fontSize`] = `4rem` ;
}
body_para.addEventListener(`mouseenter` , body_active);

function body_innactive(details){
    details[`target`][`style`][`fontSize`] = `1rem` ;
}
body_para.addEventListener(`mouseleave` , body_innactive);
//
let keybinds = document.querySelector(`#key_bound`);
function space_key(details){
    details[`target`][`style`][`color`] = `blue`;
}
keybinds.addEventListener('keydown' , ` ` , `space_key`)
