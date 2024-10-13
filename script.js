function abrirModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
}

  
  function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      var modals = document.getElementsByClassName('modal');
      for (let modal of modals) {
        modal.style.display = 'none';
        modal.classList.remove('show');
      }
    }
  });
  
  
  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }
  
