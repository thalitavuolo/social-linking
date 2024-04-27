function toggleMode() {
  const html = document.documentElement
  /* 
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }
  este código funcionaria para trocar o light mode pelo darkmode 
  (e vice-versa), mas o JS já tem essa funcionalidade através do método toggle.
*/
  html.classList.toggle('light')
}