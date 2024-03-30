document.getElementById('sendEmail').addEventListener('click', function() {
  var recipient = 'eduard.varela@idc.cat';
  var subject = encodeURIComponent('FELIÇ ANIVERSARI EDU!');
  var body = encodeURIComponent('Que gaudeixis del teu dia i que el passis molt bé. 🎉');
  var mailtoLink = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

  // Verificar si el dispositivo es un dispositivo móvil
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
      // Abrir enlace mailto directamente en dispositivos móviles
      window.location.href = mailtoLink;
  } else {
      // Abrir una nueva ventana con el enlace en dispositivos de escritorio
      window.open(mailtoLink, '_blank');
  }
});
document.addEventListener('DOMContentLoaded', function() {
    var cancion = document.getElementById("cancion");
    cancion.play().catch(function(error) {
      // Manejar errores si la reproducción automática falla
      console.error('La reproducción automática del audio falló:', error);
    });
  });