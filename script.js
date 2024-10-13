function abrirModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }
  