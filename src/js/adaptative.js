function ajusta() {
    var team = document.getElementById("team");
    var hero = document.getElementById("col0");
    var mision = "";
    var vision = "";
    var nos = document.getElementById("rowN");
    var serv = document.getElementById("servicio");
    var contact = document.getElementById("contact");
    var w = screen.width;
    var h = screen.height;

    if (w > 1660) {
        $("#col32_1").removeClass().addClass("col-3");
        $("#col32_2").removeClass().addClass("col-3");
        $("#show").removeClass().addClass("col-4 bk-point mostrar");
        $("#show_1").removeClass().addClass("navbar fixed-top container-fluid mostrar");
        $("#col0").removeClass().addClass("col-8 hero-col1");
        $("#rrow").removeClass().addClass("row");
        $("#rowN").removeClass().addClass("row");
        $("#ejes").removeClass().addClass("row padding-eje");
        $("#cifras").removeClass().addClass("row");
        $("#colD_1").removeClass().addClass("col-3");
        $("#colD_2").removeClass().addClass("col-3");
        nos.innerHTML = '<div class="col-1"></div><div class="col-3 col-ficha"><div class="div-ficha text-dark' +
                ' Tnormal text-normal"><text class="Tnormal text-sec-subtitle" ><b><center class="text-dark">M' +
                'isión<hr class="white-rect" style="border-color: #555555; width: 90%;"/></center></b></text><' +
                'br/><center id="mision" class="text-dark text-normal Tnormal text-ficha"></center><br/></div>' +
                '</div><div class="col"><center><br/><br/><img src="src/imgs/uron.png" alt="uron" class="img-u' +
                'ron" onclick="hola();"></center></div><div class="col-3 col-ficha"><div class="div-ficha text' +
                '-dark Tnormal text-normal"><text class="Tnormal text-sec-subtitle"><b><center class="text-dar' +
                'k">Visión<hr class="white-rect" style="border-color: #555555; width: 90%;;"/></center></b></t' +
                'ext><br/><center id="vision" class="text-dark text-normal Tnormal text-ficha"></center><br/><' +
                '/div></div><div class="col-1"></div>';
        mision = document.getElementById("mision");
        vision = document.getElementById("vision");
        mision.innerHTML = 'Somos una empresa de programadores con sede en México los cuales ofertan: calidad, ' +
                'seguridad, inovación y forma&hyphen;lidad. Ofrecemos precios acce&hyphen;sibles a todo el públ' +
                'ico. Escuchamos y valo&hyphen;ramos la opinión de nuestros clientes pues ellos son nuestros gu' +
                'ías. Con esto damos el mejor servicio con el mayor esfuerzo y compromiso de cara a cada persona que nos solicite.';

        vision.innerHTML = 'Seremos líderes de la industria y nos expandiremos a todos los lugares del mundo, B' +
                'eruon no solo será tu mejor opción, será tu favorita. Dando faci&hyphen;lidades a clientes tan' +
                'to de bajos como de altos recursos, mejorando así la industria con nuestro esfuerzo, soli&hyph' +
                'en;daridad y empeño. Pondremos la tec&hyphen;nología al alcance de todos. Ningún reto es inalcanzable para nosotros.';
        hero.innerHTML = '<img src="src/imgs/beruon.svg" alt="beruon" class="brand-title"><br/><text class="tex' +
                't-sec-title text-white">HEART OF THE FUTURE</text><br/><br/><hr style="border-color: white"/><' +
                'text class="Tnormal text-white text-normal">Ofrecemos nuestro mejor servicio, dando el mayor e' +
                'sfuerzo y compromiso de cara a cada persona que nos solicite.</text>';
        serv.innerHTML = '<div class="row"><div id="col21_1" class="col-2"></div><div class="col col-ficha"><ce' +
                'nter class="text-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/pagweb.s' +
                'vg" alt="Plataformas Web" onclick="servicios(1);"><br/><br/>Plataformas Web</center></div><div' +
                ' class="col col-ficha"><center class="text-sec-subtitle Tnormal text-white"><img class="img-se' +
                'rv" src="src/imgs/infra.svg" alt="Infraestructura" onclick="servicios(2);"><br/><br/>Infraestr' +
                'uctura</center></div><div class="col col-ficha"><center class="text-sec-subtitle Tnormal text-' +
                'white"><img class="img-serv" src="src/imgs/soporte.svg" alt="Soporte Técnico" onclick="servici' +
                'os(3);"><br/><br/>Soporte Técnico</center></div><div class="col col-ficha"><center class="text' +
                '-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/apps.svg" alt="Apps Móvi' +
                'les" onclick="servicios(4);"><br/><br/>Apps Móviles</center></div><div id="col21_2" class="col-2"></div></div>';
        contact.innerHTML = '<div class="row"><div id="col32_3" class="col-3"></div><div class="col"><text clas'+
                's="text-dark Tnormal text-normal"><b>Nombre</b></text><br/><input type="text" placeholder="¿Qu'+
                'ién escribe?"/></div><div class="col"><text class="text-dark Tnormal text-normal"><b>Correo</b'+
                '></text><br/><input type="email" placeholder="¿A dónde te escibimos?"/></div><div class="col">'+
                '<text class="text-dark Tnormal text-normal"><b>Teléfono</b></text><br/><input type="tel" place'+
                'holder="¿A donde te llamamos?"/></div><div id="col32_4" class="col-3"></div></div><br/><br/><d'+
                'iv class="row"><div id="col32_5" class="col-3"></div><div class="col"><text class="text-dark T'+
                'normal text-normal"><b>Mensaje</b></text><br/><textarea type="text" class="input-msj" placehol'+
                'der="¿Qué nos quieres decir?" maxlength="1300"></textarea></div> <div id="col32_6" class="col-'+
                '3"></div></div><div class="row"><div class="col"></div><div id="col12" class="col-1"><br/><br/'+
                '><input type="submit" class="button-enviar" class="text-sec-subtitle" value="Enviar"></input><'+
                '/div><div class="col"></div></div>';
        $("#col32_3").removeClass().addClass("col-3");
        $("#col32_4").removeClass().addClass("col-3");
        $("#col32_5").removeClass().addClass("col-3");
        $("#col32_6").removeClass().addClass("col-3");
        $("#col12").removeClass().addClass("col-1");

    } else if (w > 1024) {

        $("#col32_1").removeClass().addClass("col-2");
        $("#col32_2").removeClass().addClass("col-2");
        $("#show").removeClass().addClass("col-4 bk-point mostrar");
        $("#show_1").removeClass().addClass("navbar fixed-top container-fluid mostrar");
        $("#col0").removeClass().addClass("col-8 hero-col1");
        $("#rrow").removeClass().addClass("row");
        $("#rowN").removeClass().addClass("row");
        $("#ejes").removeClass().addClass("row padding-eje");
        $("#cifras").removeClass().addClass("row");
        $("#colD_1").removeClass().addClass("col-3");
        $("#colD_2").removeClass().addClass("col-3");
        nos.innerHTML = '<div class="col-1"></div><div class="col-3 col-ficha"><div class="div-ficha text-dark' +
                ' Tnormal text-normal"><text class="Tnormal text-sec-subtitle" ><b><center class="text-dark">M' +
                'isión<hr class="white-rect" style="border-color: #555555; width: 90%;"/></center></b></text><' +
                'br/><center id="mision" class="text-dark text-normal Tnormal text-ficha"></center><br/></div>' +
                '</div><div class="col"><center><br/><br/><img src="src/imgs/uron.png" alt="uron" class="img-u' +
                'ron" onclick="hola();"></center></div><div class="col-3 col-ficha"><div class="div-ficha text' +
                '-dark Tnormal text-normal"><text class="Tnormal text-sec-subtitle"><b><center class="text-dar' +
                'k">Visión<hr class="white-rect" style="border-color: #555555; width: 90%;;"/></center></b></t' +
                'ext><br/><center id="vision" class="text-dark text-normal Tnormal text-ficha"></center><br/><' +
                '/div></div><div class="col-1"></div>';
        mision = document.getElementById("mision");
        vision = document.getElementById("vision");
        mision.innerHTML = 'Somos una empresa de pro&hyphen;gramadores con sede en Mé&hyphen;xico los cuales o' +
                'fertan: cali&hyphen;dad, seguridad, inovación y formalidad. Ofrecemos precios accesibles a to' +
                'do el público. Escuchamos y valoramos la opinión de nuestros clientes pues ellos son nuestros' +
                ' guías. Con esto damos el mejor servicio con el mayor esfuerzo y compromiso de cara a ca&hyphen;da pesona que nos solicite.';

        vision.innerHTML = 'Seremos líderes de la industria y nos expandiremos a todos los lugares del mundo, ' +
                'Beruon no solo será tu mejor opción, será tu favorita. Dando facili&hyphen;dades a clientes t' +
                'anto de bajos como de altos recursos, mejorando así la industria con nuestro esfuerzo, solida' +
                'ridad y empeño. Pondremos la tecno&hyphen;logía al alcance de todos. Nin&hyphen;gún reto es inalcanzable para nosotros.';
        hero.innerHTML = '<img src="src/imgs/beruon.svg" alt="beruon" class="brand-title"><br/><text class="te' +
                'xt-sec-title text-white">HEART OF THE FUTURE</text><br/><br/><hr style="border-color: white"/' +
                '><text class="Tnormal text-white text-normal">Ofrecemos nuestro mejor servicio, dando el mayo' +
                'r esfuerzo y compromiso de cara a cada persona que nos solicite.</text>';
        serv.innerHTML = '<div class="row"><div id="col21_1" class="col-2"></div><div class="col col-ficha"><c' +
                'enter class="text-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/pagweb' +
                '.svg" alt="Plataformas Web" onclick="servicios(1);"><br/><br/>Plataformas Web</center></div><' +
                'div class="col col-ficha"><center class="text-sec-subtitle Tnormal text-white"><img class="im' +
                'g-serv" src="src/imgs/infra.svg" alt="Infraestructura" onclick="servicios(2);"><br/><br/>Infr' +
                'aestructura</center></div><div class="col col-ficha"><center class="text-sec-subtitle Tnormal' +
                ' text-white"><img class="img-serv" src="src/imgs/soporte.svg" alt="Soporte Técnico" onclick="' +
                'servicios(3);"><br/><br/>Soporte Técnico</center></div><div class="col col-ficha"><center cla' +
                'ss="text-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/apps.svg" alt="' +
                'Apps Móviles" onclick="servicios(4);"><br/><br/>Apps Móviles</center></div><div id="col21_2" class="col-2"></div></div>';
        contact.innerHTML = '<div class="row"><div id="col32_3" class="col-3"></div><div class="col"><text clas'+
                's="text-dark Tnormal text-normal"><b>Nombre</b></text><br/><input type="text" placeholder="¿Qu'+
                'ién escribe?"/></div><div class="col"><text class="text-dark Tnormal text-normal"><b>Correo</b'+
                '></text><br/><input type="email" placeholder="¿A dónde te escibimos?"/></div><div class="col">'+
                '<text class="text-dark Tnormal text-normal"><b>Teléfono</b></text><br/><input type="tel" place'+
                'holder="¿A donde te llamamos?"/></div><div id="col32_4" class="col-3"></div></div><br/><br/><d'+
                'iv class="row"><div id="col32_5" class="col-3"></div><div class="col"><text class="text-dark T'+
                'normal text-normal"><b>Mensaje</b></text><br/><textarea type="text" class="input-msj" placehol'+
                'der="¿Qué nos quieres decir?" maxlength="1300"></textarea></div> <div id="col32_6" class="col-'+
                '3"></div></div><div class="row"><div class="col"></div><div id="col12" class="col-1"><br/><br/'+
                '><input type="submit" class="button-enviar" class="text-sec-subtitle" value="Enviar"></input><'+
                '/div><div class="col"></div></div>';
        $("#col32_3").removeClass().addClass("col-2");
        $("#col32_4").removeClass().addClass("col-2");
        $("#col32_5").removeClass().addClass("col-2");
        $("#col32_6").removeClass().addClass("col-2");
        $("#col12").removeClass().addClass("col-2");

    } else if (w > 550) {
        $("#col32_1").removeClass().addClass("col-1");
        $("#col32_2").removeClass().addClass("col-1");
        $("#show").removeClass().addClass("col-4 bk-point mostrar");
        $("#show_1").removeClass().addClass("navbar fixed-top container-fluid mostrar");
        $("#col0").removeClass().addClass("col-8 hero-col1");
        $("#rrow").removeClass().addClass("row");
        $("#rowN").removeClass().addClass("row");
        $("#ejes").removeClass().addClass("row padding-eje");
        $("#cifras").removeClass().addClass("row");
        $("#colD_1").removeClass().addClass("col-3");
        $("#colD_2").removeClass().addClass("col-3");
        nos.innerHTML = '<div class="col-1"></div><div class="col-3 col-ficha"><div class="div-ficha text-dark' +
                ' Tnormal text-normal"><text class="Tnormal text-sec-subtitle" ><b><center class="text-dark">M' +
                'isión<hr class="white-rect" style="border-color: #555555; width: 90%;"/></center></b></text><' +
                'br/><center id="mision" class="text-dark text-normal Tnormal text-ficha"></center><br/></div>' +
                '</div><div class="col"><center><br/><br/><img src="src/imgs/uron.png" alt="uron" class="img-u' +
                'ron" onclick="hola();"></center></div><div class="col-3 col-ficha"><div class="div-ficha text' +
                '-dark Tnormal text-normal"><text class="Tnormal text-sec-subtitle"><b><center class="text-dar' +
                'k">Visión<hr class="white-rect" style="border-color: #555555; width: 90%;;"/></center></b></t' +
                'ext><br/><center id="vision" class="text-dark text-normal Tnormal text-ficha"></center><br/><' +
                '/div></div><div class="col-1"></div>';
        mision = document.getElementById("mision");
        vision = document.getElementById("vision");
        mision.innerHTML = 'Somos una empresa de programadores con sede en México los cuales ofer&hyphen;tan: ' +
                'calidad, seguridad, inovación y formalidad. Ofrecemos precios acce&hyphen;sibles a todo el pú' +
                'blico. Escuchamos y valoramos la opinión de nuestros clientes pues ellos son nuestros guías. ' +
                'Con esto damos el mejor servicio con el mayor esfuerzo y compromiso de cara a cada persona que nos solicite.';

        vision.innerHTML = 'Seremos líderes de la in&hyphen;dustria y nos expandi&hyphen;remos a todos los lug' +
                'ares del mundo, Beruon no solo será tu mejor opción, será tu favorita. Dando facili&hyphen;da' +
                'des a clientes tanto de bajos como de altos recur&hyphen;sos, mejorando así la in&hyphen;dust' +
                'ria con nuestro esfuer&hyphen;zo, solidaridad y empeño. Pondremos la tecnología al alcance de' +
                ' todos. Nin&hyphen;gún reto es inalcanzable para nosotros.<br/><br/>';
        hero.innerHTML = '<img src="src/imgs/beruon.svg" alt="beruon" class="brand-title"><br/><text class="te' +
                'xt-sec-title text-white">HEART OF THE FUTURE</text><br/><br/><hr style="border-color: white"/' +
                '><text class="Tnormal text-white text-normal">Ofrecemos nuestro mejor servicio, dando el mayo' +
                'r esfuerzo y compromiso de cara a cada persona que nos solicite.</text>';
        serv.innerHTML = '<div class="row"><div class="col-1"></div><div class="col col-ficha"><center class="' +
                'text-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/pagweb.svg" alt="Pl' +
                'ataformas Web" onclick="servicios(1);"><br/><br/>Plataformas Web</center></div><div class="co' +
                'l col-ficha"><center class="text-sec-subtitle Tnormal text-white"><img class="img-serv" src="' +
                'src/imgs/infra.svg" alt="Infraestructura" onclick="servicios(2);"><br/><br/>Infraestructura</' +
                'center></div><div class="col col-ficha"><center class="text-sec-subtitle Tnormal text-white">' +
                '<img class="img-serv" src="src/imgs/soporte.svg" alt="Soporte Técnico" onclick="servicios(3);' +
                '"><br/><br/>Soporte Técnico</center></div><div class="col col-ficha"><center class="text-sec-' +
                'subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/apps.svg" alt="Apps Móviles"' +
                ' onclick="servicios(4);"><br/><br/>Apps Móviles</center></div><div class="col-1"></div></div>';
        contact.innerHTML = '<div class="row"><div id="col32_3" class="col-3"></div><div class="col"><text clas'+
                's="text-dark Tnormal text-normal"><b>Nombre</b></text><br/><input type="text" placeholder="¿Qu'+
                'ién escribe?"/></div><div class="col"><text class="text-dark Tnormal text-normal"><b>Correo</b'+
                '></text><br/><input type="email" placeholder="¿A dónde te escibimos?"/></div><div class="col">'+
                '<text class="text-dark Tnormal text-normal"><b>Teléfono</b></text><br/><input type="tel" place'+
                'holder="¿A donde te llamamos?"/></div><div id="col32_4" class="col-3"></div></div><br/><br/><d'+
                'iv class="row"><div id="col32_5" class="col-3"></div><div class="col"><text class="text-dark T'+
                'normal text-normal"><b>Mensaje</b></text><br/><textarea type="text" class="input-msj" placehol'+
                'der="¿Qué nos quieres decir?" maxlength="1300"></textarea></div> <div id="col32_6" class="col-'+
                '3"></div></div><div class="row"><div class="col"></div><div id="col12" class="col-1"><br/><br/'+
                '><input type="submit" class="button-enviar" class="text-sec-subtitle" value="Enviar"></input><'+
                '/div><div class="col"></div></div>';
        $("#col32_3").removeClass().addClass("col-1");
        $("#col32_4").removeClass().addClass("col-1");
        $("#col32_5").removeClass().addClass("col-1");
        $("#col32_6").removeClass().addClass("col-1");
        $("#col12").removeClass().addClass("col-2");

    } else {
        $("#show").removeClass().addClass("ocultar");
        $("#show_1").removeClass().addClass("ocultar");
        $("#rrow").removeClass();
        $("#rowN").removeClass();
        $("#ejes").removeClass();
        $("#cifras").removeClass().addClass("ocultar");
        $("#colD_1").removeClass().addClass("col-2");
        $("#colD_2").removeClass().addClass("col-2");
        nos.innerHTML = '<div class="col-ficha" style="padding-left: 10%; padding-right: 10%;"><div class="div' +
                '-ficha text-dark Tnormal text-normal"><text class="Tnormal text-sec-subtitle" ><b><center cla' +
                'ss="text-dark">Misión<hr class="white-rect" style="border-color: #555555; width: 90%;"/></cen' +
                'ter></b></text><br/><center id="mision" class="text-dark text-normal Tnormal text-ficha"></ce' +
                'nter><br/></div></div><div class="vEspace"></div><div class="col-ficha" style="padding-left: ' +
                '10%; padding-right: 10%;"><div class="div-ficha text-dark Tnormal text-normal"><text class="T' +
                'normal text-sec-subtitle" ><b><center class="text-dark">Visión<hr class="white-rect" style="b' +
                'order-color: #555555; width: 90%;"/></center></b></text><br/><center id="vision" class="text-' +
                'dark text-normal Tnormal text-ficha"></center><br/></div></div>';
        mision = document.getElementById("mision");
        vision = document.getElementById("vision");
        mision.innerHTML = 'Somos una empresa de programa&hyphen;dores con sede en México los cuales ofertan: ' +
                'calidad, seguridad, inovación y formalidad. Ofrecemos precios accesibles a todo el público. E' +
                'scu&hyphen;chamos y valoramos la opinión de nuestros clientes pues ellos son nuestros guías. ' +
                'Con esto damos el mejor servicio con el mayor esfuerzo y compromiso de cara a cada persona que nos solicite.';
        vision.innerHTML = 'Seremos líderes de la industria y nos expandiremos a todos los lugares del mundo, ' +
                'Beruon no solo será tu mejor opción, será tu favorita. Dando faci&hyphen;lidades a clientes t' +
                'anto de bajos como de altos recursos, mejorando así la industria con nuestro esfuerzo, solida' +
                'ridad y empeño. Pondremos la tecnología al alcance de todos. Ningún reto es inalcanzable para nosotros.';
        hero.innerHTML = '<center><img class="brand-title" src="src/imgs/logo.svg"><hr class="white-rect"/><te' +
                'xt class="text-sec-title text-white">HEART OF THE FUTURE</text><br/><br/></center>';
        serv.innerHTML = '<div class="row"><div class="col-1"></div><div class="col col-ficha"><center class="' +
                'text-sec-subtitl Tnormal text-white"><img class="img-serv" src="src/imgs/pagweb.svg" alt="Pla' +
                'taformas Web" onclick="servicios(1);"><br/><br/>Plataformas Web</center></div><div class="col' +
                ' col-ficha"><center class="text-sec-subtitle Tnormal text-white"><img class="img-serv" src="s' +
                'rc/imgs/infra.svg" alt="Infraestructura" onclick="servicios(2);"><br/><br/>Infraestructura</c' +
                'enter></div><div class="col-1"></div>  </div><div class="vEspace"></div><div class="row"><div' +
                ' class="col-1"></div><div class="col col-ficha"><center class="text-sec-subtitle Tnormal text' +
                '-white"><img class="img-serv" src="src/imgs/soporte.svg" alt="Soporte Técnico" onclick="servi' +
                'cios(3);"><br/><br/>Soporte Técnico</center></div><div class="col col-ficha"><center class="t' +
                'ext-sec-subtitle Tnormal text-white"><img class="img-serv" src="src/imgs/apps.svg" alt="Apps ' +
                'Móviles" onclick="servicios(4);"><br/><br/>Apps Móviles</center></div><div class="col-1"></div></div>';
        contact.innerHTML = '<div class="row"><div class="col-1"></div><div class="col-10"><text class="text-d'+
                'ark Tnormal text-normal"><b>Nombre</b></text><br/><input type="text" placeholder="¿Quién escr'+
                'ibe?"/></div><div class="col-1"></div></div><div class="vEspace"></div><div class="row"><div '+
                'class="col-1"></div><div class="col-10"><text class="text-dark Tnormal text-normal"><b>Correo'+
                '</b></text><br/><input type="email" placeholder="¿A dónde te escibimos?"/></div><div class="c'+
                'ol-1"></div></div><div class="vEspace"></div><div class="row"><div class="col-1"></div><div c'+
                'lass="col"><text class="text-dark Tnormal text-normal"><b>Teléfono</b></text><br/><input type'+
                '="tel" placeholder="¿A donde te llamamos?"/></div><div class="col-1"></div></div><div class="'+
                'vEspace"></div><div class="row"><div class="col-1"></div><div class="col-10"><text class="tex'+
                't-dark Tnormal text-normal"><b>Mensaje</b></text><br/><textarea type="text" class="input-msj"'+
                ' placeholder="¿Qué nos quieres decir?" maxlength="1300"></textarea></div><div class="col-1"><'+
                '/div></div><div class="row"><div class="col"></div><div class="col-5"><br/><br/><input type="'+
                'submit" class="button-enviar" class="text-sec-subtitle" value="Enviar"></input></div><div cla'+
                'ss="col"></div></div>';
    }

    if (w > 1024) {
        team.innerHTML = '<div class="row container-fluid"><div class="col"></div><div class="col-2 col-ficha"' +
                '><center><img src="src/imgs/uron1.jpg" class="img-team" alt="Christian Ontiveros"><br/><br/><' +
                'text class="text-white Tnormal text-sec-subtitle">Christian Ontiveros</text><br/><text class=' +
                '"text-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" style="width: 90%;' +
                '"/><a href="https://github.com/ErsoSkywalker" target="_blank"><img src="src/imgs/git.svg" cla' +
                'ss="img-red" alt="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/christia' +
                'nontiveros/" target="_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a>' +
                '</center></div><div class="col-2 col-ficha"><center><img src="src/imgs/uron2.jpg" class="img-' +
                'team" alt="Javier Rubin"><br/><br/><text class="text-white Tnormal text-sec-subtitle">Javier ' +
                'Rubin</text><br/><text class="text-white Tlight text-normal">DESARROLLADOR</text><hr class="w' +
                'hite-rect" style="width: 90%;"/><a href="https://github.com/Beyond77" target="_blank"><img sr' +
                'c="src/imgs/git.svg" class="img-red" alt="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.' +
                'linkedin.com/in/javier-rubin-cisneros-9832381a7" target="_blank"><img src="src/imgs/link.svg"' +
                ' class="img-red" alt="LinkedIn"></a></center></div><div class="col-2 col-ficha"><center><img ' +
                'src="src/imgs/uron3.jpg" class="img-team" alt="Pedro Berumen"><br/><br/><text class="text-whi' +
                'te Tnormal text-sec-subtitle">Pedro Berumen</text><br/><text class="text-white Tlight text-no' +
                'rmal">OPERACIONES</text><hr class="white-rect" style="width: 90%;"/><a href="https://github.c' +
                'om/Kasachiefs" target="_blank"><img src="src/imgs/git.svg" class="img-red" alt="Github"></a>&' +
                'nbsp; &nbsp; &nbsp;<a href="https://www.linkedin.com/in/pedro-berumen-38080519b/" target="_bl' +
                'ank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a></center></div><div clas' +
                's="col-2 col-ficha"><center><img src="src/imgs/uron4.jpg" class="img-team" alt="Saúl Castillo' +
                '"><br/><br/><text class="text-white text Tnormal text-sec-subtitle">Saúl Castillo</text><br/>' +
                '<text class="text-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" style=' +
                '"width: 90%;"/><a href="https://github.com/sc99?tab=repositories" target="_blank"><img src="s' +
                'rc/imgs/git.svg" class="img-red" alt="Github"></a></center></div><div class="col-2 col-ficha"' +
                '><center><img src="src/imgs/uron5.jpg" class="img-team" alt="Saúl Hernández"><br/><br/><text ' +
                'class="text-white Tnormal text-sec-subtitle">Saúl Hernández</text><br/><text class="text-whit' +
                'e Tlight text-normal">DISEÑADOR</text><hr class="white-rect" style="width: 90%;"/><a href="ht' +
                'tps://github.com/ZulHernandez" target="_blank"><img src="src/imgs/git.svg" class="img-red" al' +
                't="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/saúl-ulises-hernández-c' +
                'ruz-46a1ba149" target="_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></' +
                'a>&nbsp;&nbsp;&nbsp;<a href="https://sketchfab.com/bear59814" target="_blank"><img src="src/i' +
                'mgs/sketch.svg" class="img-red" alt="LinkedIn"></a></center></div><div class="col"></div></div>';

    } else if (w > 550) {
        team.innerHTML = '<div class="row container-fluid"><div class="col"></div><div class="col-3 col-ficha"' +
                '><center><img src="src/imgs/uron1.jpg" class="img-team" alt="Christian Ontiveros"><br/><br/><' +
                'text class="text-white Tnormal text-sec-subtitle">Christian Ontiveros</text><br/><text class=' +
                '"text-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" style="width: 80%;' +
                '"/><a href="https://github.com/ErsoSkywalker" target="_blank"><img src="src/imgs/git.svg" cla' +
                'ss="img-red" alt="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/christia' +
                'nontiveros/" target="_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a>' +
                '</center></div><div class="col-3 col-ficha"><center><img src="src/imgs/uron2.jpg" class="img-' +
                'team" alt="Javier Rubin"><br/><br/><text class="text-white Tnormal text-sec-subtitle">Javier ' +
                'Rubin</text><br/><text class="text-white Tlight text-normal">DESARROLLADOR</text><hr class="w' +
                'hite-rect" style="width: 80%;"/><a href="https://github.com/Beyond77" target="_blank"><img sr' +
                'c="src/imgs/git.svg" class="img-red" alt="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.' +
                'linkedin.com/in/javier-rubin-cisneros-9832381a7" target="_blank"><img src="src/imgs/link.svg"' +
                ' class="img-red" alt="LinkedIn"></a></center></div><div class="col-3 col-ficha"><center><img ' +
                'src="src/imgs/uron3.jpg" class="img-team" alt="Pedro Berumen"><br/><br/><text class="text-whi' +
                'te Tnormal text-sec-subtitle">Pedro Berumen</text><br/><text class="text-white Tlight text-no' +
                'rmal">OPERACIONES</text><hr class="white-rect" style="width: 80%;"/><a href="https://github.c' +
                'om/Kasachiefs" target="_blank"><img src="src/imgs/git.svg" class="img-red" alt="Github"></a>&' +
                'nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/pedro-berumen-38080519b/" target="_blan' +
                'k"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a></center></div><div class=' +
                '"col"></div></div><br/><br/><div class="row container-fluid"><div class="col"></div><div clas' +
                's="col-3 col-ficha"><center><img src="src/imgs/uron4.jpg" class="img-team" alt="Saúl Castillo' +
                '"><br/><br/><text class="text-white text Tnormal text-sec-subtitle">Saúl Castillo</text><br/>' +
                '<text class="text-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" style=' +
                '"width: 80%;"/><a href="https://github.com/sc99?tab=repositories" target="_blank"><img src="s' +
                'rc/imgs/git.svg" class="img-red" alt="Github"></a></center></div><div class="col-3 col-ficha"' +
                '><center><img src="src/imgs/uron5.jpg" class="img-team" alt="Saúl Hernández"><br/><br/><text ' +
                'class="text-white Tnormal text-sec-subtitle">Saúl Hernández</text><br/><text class="text-whit' +
                'e Tlight text-normal">DISEÑADOR</text><hr class="white-rect" style="width: 80%;"/><a href="ht' +
                'tps://github.com/ZulHernandez" target="_blank"><img src="src/imgs/git.svg" class="img-red" al' +
                't="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/saúl-ulises-hernández-c' +
                'ruz-46a1ba149" target="_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></' +
                'a>&nbsp;&nbsp;&nbsp;<a href="https://sketchfab.com/bear59814" target="_blank"><img src="src/i' +
                'mgs/sketch.svg" class="img-red" alt="LinkedIn"></a></center></div><div class="col"></div></div>';

    } else {
        team.innerHTML = '<div class="row"><div class="col-1"></div><div class="col-5 col-ficha"><center><img s' +
                'rc="src/imgs/uron1.jpg" class="img-team" alt="Christian Ontiveros"><br/><br/><text class="tex' +
                't-white Tnormal text-sec-subtitle">Christian Ontiveros</text><br/><text class="text-white Tli' +
                'ght text-normal">DESARROLLADOR</text><hr class="white-rect" style="width: 80%;"/><a href="htt' +
                'ps://github.com/ErsoSkywalker" target="_blank"><img src="src/imgs/git.svg" class="img-red" al' +
                't="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/christianontiveros/" ta' +
                'rget="_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a></center></div>' +
                '<div class="col-5 col-ficha"><center><img src="src/imgs/uron2.jpg" class="img-team" alt="Javi' +
                'er Rubin"><br/><br/><text class="text-white Tnormal text-sec-subtitle">Javier Rubin</text><br' +
                '/><text class="text-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" styl' +
                'e="width: 80%;"/><a href="https://github.com/Beyond77" target="_blank"><img src="src/imgs/git' +
                '.svg" class="img-red" alt="Github"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in' +
                '/javier-rubin-cisneros-9832381a7" target="_blank"><img src="src/imgs/link.svg" class="img-red' +
                '" alt="LinkedIn"></a></center></div><div class="col-1"></div></div><div class="vEspace"></div' +
                '><div class="row"><div class="col-1"></div><div class="col-5 col-ficha"><center><img src="src' +
                '/imgs/uron3.jpg" class="img-team" alt="Pedro Berumen"><br/><br/><text class="text-white Tnorm' +
                'al text-sec-subtitle">Pedro Berumen</text><br/><text class="text-white Tlight text-normal">OP' +
                'ERACIONES</text><hr class="white-rect" style="width: 80%;"/><a href="https://github.com/Kasac' +
                'hiefs" target="_blank"><img src="src/imgs/git.svg" class="img-red" alt="Github"></a>&nbsp;&nb' +
                'sp;&nbsp;<a href="https://www.linkedin.com/in/pedro-berumen-38080519b/" target="_blank"><img ' +
                'src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a></center></div><div class="col-5 c' +
                'ol-ficha"><center><img src="src/imgs/uron4.jpg" class="img-team" alt="Saúl Castillo"><br/><br' +
                '/><text class="text-white Tnormal text-sec-subtitle">Saúl Castillo</text><br/><text class="te' +
                'xt-white Tlight text-normal">DESARROLLADOR</text><hr class="white-rect" style="width: 80%;"/>' +
                '<a href="https://github.com/Beyond77" target="_blank"><img src="src/imgs/git.svg" class="img-' +
                'red" alt="Github"></a></center></div><div class="col-1"></div></div><div class="vEspace"></di' +
                'v><div class="row "><div class="col"></div><div class="col-5 col-ficha"><center><img src="src' +
                '/imgs/uron5.jpg" class="img-team" alt="Saúl Hernández"><br/><br/><text class="text-white Tnor' +
                'mal text-sec-subtitle">Saúl Hernández</text><br/><text class="text-white Tlight text-normal">' +
                'DISEÑADOR</text><hr class="white-rect" style="width: 80%;"/><a href="https://github.com/ZulHe' +
                'rnandez" target="_blank"><img src="src/imgs/git.svg" class="img-red" alt="Github"></a>&nbsp;&' +
                'nbsp;&nbsp;<a href="https://www.linkedin.com/in/saúl-ulises-hernández-cruz-46a1ba149" target=' +
                '"_blank"><img src="src/imgs/link.svg" class="img-red" alt="LinkedIn"></a>&nbsp;&nbsp;&nbsp;<a' +
                ' href="https://sketchfab.com/bear59814" target="_blank"><img src="src/imgs/sketch.svg" class=' +
                '"img-red" alt="Sketchfab"></a></center></div><div class="col"></div></div>';
    }
}

