function changeNavBG(){
    let scrollValue=window.scrollY
    if(scrollValue<=100)
        document.getElementById("nav").classList.remove("nav-bg")
    else
    document.getElementById("nav").classList.add("nav-bg")
}
window.addEventListener('scroll',changeNavBG)