//Copy Menu For Mobile

function copyMenu() {
    //Copy Inside .dpt-cat to .departments

    let dptCategory = document.querySelector(".dpt-cat")
    let dptPlace = document.querySelector(".departments")
    dptPlace.innerHTML = dptCategory.innerHTML

    // copy inside nav to nav
    let mainNav = document.querySelector(".header-nav nav")
    let navPlace = document.querySelector(".off-canvas nav")
    navPlace.innerHTML = mainNav.innerHTML

    //copy .header-top .wrapper to .theTop-nav
    let topNav = document.querySelector(".header-top wrapper")
    let topPlace = document.querySelector(".off-canvas .theTop-nav")
    topPlace.innerHTML = topNav.innerHTML
}

copyMenu()