//header and footer -- 共通部分
window.addEventListener('load', (event) => {
 const nav = document.querySelector('header');
 fetch('header.html')
 .then(res=> res.text())
 .then(data=>{
  nav.innerHTML=data
})
})

