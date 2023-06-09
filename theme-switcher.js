const switchButton = document.querySelector('.switcher-theme__input')
switchButton.addEventListener('click', toggleClass)

function toggleClass({ currentTarget }) {
   const inputStatus = currentTarget.checked
   if (inputStatus) {
      document.body.classList.add('dark-theme')
   } else {
      document.body.classList.remove('dark-theme')
   }
   localStorage.setItem('theme', inputStatus)
}

function savesThemeSelection() {
   if (localStorage.getItem('theme') == 'true') {
      document.body.classList.add('dark-theme')
      switchButton.checked = 'true'
   }
}
savesThemeSelection()
