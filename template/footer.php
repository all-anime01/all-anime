<form name="formulario-reporte" netlify method="POST">

    <div class="modal-container">
        <div class="modal modal-close">
            <p class="close">X</p>
            <h4>Reportar<img src="../image/Banderas-lenguaje/windrose.gif" width="30px"></i></h4>
            <div class="modal-text">
                <label for="report-resaon">Motivo:</label>
                <select class="form-control" id="report_reason">
                    <option value="0">No reproduce</option>
                    <option value="1">Problemas de Audio</option>
                    <option value="2">No se encuentra el Archivo</option>
                    <option value="3">No es el Episodio</option>
                </select>
                <div class="form-group">
                    <label for="report-comment">Explicanos el problema:</label>
                    <textarea class="form-control" id="report_comment"></textarea>
                </div>
                <button onclick='mensaje("fue enviado")' class="popup-btn">Enviar Reporte</button>
            </div>
        </div>
    </div>
</form>

<script>
    function mensaje(enviado) {
        console.log("El mensaje" + " " + enviado);
        alert("El mensaje" + " " + enviado + " " + "gracias por reportarlo!");
    }
</script>
<!-- Inicio comentarios Disqus -->
<div class="comentarios"><img src="/image/Logo-server/kame-senin.png" width="45px" alt="" id="mycircle"> Comentarios</div>
<div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document,
            s = d.createElement('script');
        s.src = 'https://all-anime-comment.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</section>
</section>
</section>
<!--contacto-->
<div class='flx'>
    <div class='demo-content'>
        <div class="nshare">
            <a class="nshare-item nshare-fb" href="#">
                <i class="fab fa-facebook"></i>
            </a>
            <a class="nshare-item nshare-tt" href="#">
                <i class="fab fa-youtube"></i>
            </a>
            <a class="nshare-item nshare-tb" href="#">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    </div>
</div>

<footer class="Footer">
    <div class="Container">
        <div class="BX Row BFluid Sp20 NMb">
            <div>
                <p><span>Anime HD Online</span> - Ningún vídeo se encuentra alojado en nuestros servidores.</p>
                <nav class="mnftxt">
                    <a href="https://www.all-anime.ga/condiciones-de-uso">Términos y Condiciones</a>
                    <a href="https://www.all-anime.ga/politica-de-privacidad">Política de Privacidad</a>
                    <a href="https://www.all-anime.ga/sobre-all-anime">Sobre All-ANIME</a>
                </nav>
            </div>
        </div>
    </div>
</footer>
<script src="../js/script.js"></script>
<script src="../js/idioma.js"></script>
</body>

</html>