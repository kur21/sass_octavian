document.addEventListener('DOMContentLoaded', function() {
   // Menu toggle
   const menuOpen = document.querySelector('.icon-toggle')
   const menuClose = document.querySelector('.menu-close')
   var menu = document.querySelector('.menu')
   if (!menuOpen || !menuClose || !menuOpen) return;
   menuOpen.onclick = function() {
      menu.classList.add('is-active')
   }
   menuClose.onclick = function() {
      menu.classList.remove('is-active')
   }

   // Hover button effect
   const btnList = [...document.querySelectorAll(".btn")]
   btnList.forEach(function(btn) {
      btn.appendChild(document.createElement('span'));
      btn.onmouseenter = function(e) {
         var span = btn.querySelector('span')
         span.style.left = (e.pageX - btn.offsetLeft) + 'px'
         span.style.top = (e.pageY - btn.offsetTop) + 'px'
      }
      btn.onmouseout = function(e) {
         var span = btn.querySelector('span')
         span.style.left = (e.pageX - btn.offsetLeft) + 'px'
         span.style.top = (e.pageY - btn.offsetTop) + 'px'
      }
   })
})
