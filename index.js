function page_home() {
    document.title = "BetaBlock | Home";
    document.getElementById("interpage_game").style.display = "none";
    document.getElementById("interpage_home").style.display = "flex";
    document.getElementById("interpage_home").style.animation = "1s page-appear cubic-bezier(.79,.14,.15,.86)";
}
function page_game() {
    document.title = "BetaBlock | Download";
    document.getElementById("interpage_home").style.display = "none";
    document.getElementById("interpage_game").style.display = "flex";
    document.getElementById("interpage_game").style.animation = "1s page-appear cubic-bezier(.79,.14,.15,.86)";
}
function start() {
    document.getElementById("interpage_game").style.display = "none";
    document.getElementById("interpage_home").style.animation = "1s page-appear cubic-bezier(.79,.14,.15,.86)";
}