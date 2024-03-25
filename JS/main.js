document.getElementById('sendEmail').addEventListener('click', function() {
    var recipient = 'eduard.varela@idc.cat';
    var subject = encodeURIComponent('FELIÇ ANIVERSARI EDU!');
    var body = encodeURIComponent('Que gaudeixis del teu dia i que el passis molt bé. 🎉');
    var mailtoLink = 'https://mail.google.com/mail/?view=cm&to=' + recipient + '&su=' + subject + '&body=' + body;
    
    window.open(mailtoLink, 'ANIVERSARI EDU');
  });
document.addEventListener('DOMContentLoaded', function() {
    var cancion = document.getElementById("cancion");
    cancion.play().catch(function(error) {
      // Manejar errores si la reproducción automática falla
      console.error('La reproducción automática del audio falló:', error);
    });
  });