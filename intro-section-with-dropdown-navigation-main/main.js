// document.addEventListener('click', (e) => {
//     const isDropDown = e.target.matches('[data-dropdown-button]')
//     // if (!isDropDown && e.target.closest("[data-dropdown]") != null) return

//     let currentDropDown
//     if (isDropDown) {
//         currentDropDown = e.target.closest("[data-dropdown]")
//         currentDropDown.classList.toggle('active')
//     }
//     document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
//         if (dropDown === currentDropDown) {
//             dropDown.classList.remove("active")
//         }
//     })
// })