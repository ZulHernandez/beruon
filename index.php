<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="es">
    <head>
        <link rel="icon" type="image/png" href="src/imgs/favicon.png">
        <meta charset="UTF-8">
        <title>Beruon</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <script src="src/p5/p5.js" type="text/javascript"></script>
        <script src="src/p5/heroAnima.js" type="text/javascript"></script>
        <script src="src/js/alerts.js" type="text/javascript"></script>
        <link href="src/css/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body class="Tnormal">
        <nav class="navbar fixed-top container-fluid">
            <a class="navbar-brand" href="#Inicio">
                <img src="src/imgs/logo-nav.svg" class="brand-icon" alt="beruon">
            </a>   
        </nav>
        <div class="div-hero container-fluid">
            <a name="Inicio"></a>
            <div class="row">
                <div class="col-8 hero-col1">
                    <img src="src/imgs/beruon.svg" alt="beruon" class="brand-title">
                    <br/>
                    <text class="text-sec-title text-white">HEART OF THE FUTURE</text>
                    <br/>
                    <br/>
                    <hr style="border-color: white;"/>
                    <text class="Tnormal text-white text-normal">
                    Ofrecemos nuestro mejor servicio, dando el mayor esfuerzo y compromiso de cara a cada persona que nos solicite.
                    </text>
                </div>
                <div class="col-4 bk-point">
                    <div id="canva1"></div>
                    <div class="sobre-canva text-white text-subtitle container-fluid">
                        <center>
                            <p><hr class="white-rect"/></p>
                            <p class="text-white"><a href="#Nosotros">nosotros</a></p>
                            <p class="text-white"><a href="#Servicios">servicios</a></p>
                            <p class="text-white"><a href="#Ejes">ejes de desarrollo</a></p>
                            <p class="text-white"><a href="#Equipo">equipo</a></p>
                            <p class="text-white"><a href="#Contacto">contacto</a></p>
                            <p><hr class="white-rect"/></p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a name="Nosotros"></a>
            <br/><br/><br/><br/>
            <center class="text-dark Tnormal text-sec-title">
                NOSOTROS
                <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
            </center>
            <br/><br/>
            <div class="row container-fluid">
                <div class="col-1"></div>
                <div class="col-3 col-ficha">
                    <div class="div-ficha text-dark Tnormal text-normal">
                        <text class="Tnormal text-sec-subtitle" >
                        <b>
                            <center class="text-dark">
                                Misión
                                <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
                            </center>
                        </b>
                        </text>
                        <br/>
                        <center class="text-dark text-normal Tnormal text-ficha">
                            Somos una empresa de programadores con sede en México, donde ofertamos a nuestros clientes: calidad, seguridad, ino&hyphen;vación y formalidad.
                            Desde nuestros pre&hyphen;cios para la accesibilidad a todo el público hasta nuestras empresas com&hyphen;petidoras, escuchamos y valoramos la opinión de nuestros clientes, ellos son nuestros guías.
                            Así ofrecemos nuestro mejor servicio, dando el mayor esfuerzo y compromiso de cara a cada persona que nos solicite.
                        </center>
                        <br/>
                    </div>
                </div>
                <div class="col-4">
                    <center>
                        <br/><br/>
                        <img src="src/imgs/uron.png" alt="uron" width="45%" onclick="hola();">
                    </center>
                </div>
                <div class="col-3 col-ficha">
                    <div class="div-ficha text-dark Tnormal text-normal">
                        <text class="Tnormal text-sec-subtitle">
                        <b>
                            <center class="text-dark">
                                Visión
                                <hr class="white-rect" style="border-color: #555555; width: 90%;;"/>
                            </center>
                        </b>
                        </text>
                        <br/>
                        <center class="text-dark text-normal Tnormal text-ficha">
                            Seremos líderes de la industria y nos expanderemos a todos los lugares del mundo, Beruon no solo será tu mejor opción, será tu favorita.
                            Dando facilidades también a clientes con bajos recursos como altos, mejorar la industria con nuestro esfuerzo, solidaridad y empeño en cada proyecto. Pondremos la tecnología al alcance de todos.
                            Ningún reto es inalcanzable para nosotros.
                        </center>
                        <br/><br/><br/>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div class="div-grey">
                <a name="Servicios"></a>
                <br/><br/><br/>
                <center class="text-white Tnormal text-sec-title">
                    SERVICIOS
                </center>
                <br/><br/>
                <div class="row container-fluid">
                    <div class="col-2"></div>
                    <div class="col-2 col-ficha">
                        <center class="text-sec-subtitle Tnormal text-white">
                            <img class="img-serv" src="src/imgs/pagweb.svg" alt="Plataformas Web" onclick="servicios(1);">
                            <br/><br/>
                            Plataformas Web
                        </center>
                    </div>
                    <div class="col-2">
                        <center class="text-sec-subtitle Tnormal text-white">
                            <img class="img-serv" src="src/imgs/infra.svg" alt="Infraestructura" onclick="servicios(2);">
                            <br/><br/>
                            Infraestructura
                        </center>
                    </div>
                    <div class="col-2 col-ficha">
                        <center class="text-sec-subtitle Tnormal text-white">
                            <img class="img-serv" src="src/imgs/soporte.svg" alt="Soporte Técnico" onclick="servicios(3);">
                            <br/><br/>
                            Soporte Técnico
                        </center>
                    </div>
                    <div class="col-2 col-ficha">
                        <center class="text-sec-subtitle Tnormal text-white">
                            <img class="img-serv" src="src/imgs/apps.svg" alt="Apps Móviles" onclick="servicios(4);">
                            <br/><br/>
                            Apps Móviles
                        </center>
                    </div>
                    <div class="col-2"></div>
                </div>
                <br/><br/><br/><br/>
            </div>
            <div>
                <a name="Ejes"></a>
                <br/><br/><br/>
                <center class="text-dark Tnormal text-sec-title">
                    EJES DEL DESARROLLO
                    <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
                </center>
                <div class="row container-fluid" style="padding-left: 100px; padding-right: 100px;">
                    <div class="col">
                        <img src="src/imgs/eje1.svg" alt="unitalla" width="100%">
                    </div>
                    <div class="col">
                        <center>
                            <img src="src/imgs/eje2.svg" alt="personaliza" width="100%">
                        </center>
                    </div>
                    <div class="col">
                        <img src="src/imgs/eje3.svg" alt="movimiento" width="100%">
                    </div>
                </div>
                <br/><br/><br/>
            </div>
            <div class="div-grey container-fluid">
                <a name="Equipo"></a>
                <br/><br/><br/>
                <center class="text-white Tnormal text-sec-title">
                    EQUIPO
                </center>
                <br/><br/><br/>
                <div class="row container-fluid">
                    <div class="col-3"></div>
                    <div class="col">
                        <text class="Tnormal text-sec-title text-white">
                        <center class="text-white">
                            24
                            <p class="Tlight text-normal text-white">
                                clientes
                            </p>
                        </center>
                        </text>
                    </div>
                    <div class="col">
                        <text class="Tnormal text-sec-title text-white">
                        <center>
                            <script>
                                (function ($) {
                                    $.fn.countTo = function (options) {
                                        // how many times to update the value, and how much to increment the value on each update
                                        var loops = Math.ceil(options.speed / options.refreshInterval),
                                                increment = (options.to - options.from) / loops;

                                        return $(this).each(function () {
                                            var _this = this,
                                                    loopCount = 0,
                                                    value = options.from,
                                                    interval = setInterval(updateTimer, options.refreshInterval);
                                            function updateTimer() {
                                                value += increment;
                                                loopCount++;
                                                $(_this).html(value.toFixed(options.decimals));
                                                if (typeof (options.onUpdate) == 'function') {
                                                    options.onUpdate.call(_this, value);
                                                }
                                                if (loopCount >= loops) {
                                                    clearInterval(interval);
                                                    value = options.to;
                                                    if (typeof (options.onComplete) == 'function') {
                                                        options.onComplete.call(_this, value);
                                                    }
                                                }
                                            }
                                        });
                                    };
                                })(jQuery);
                                jQuery(function ($) {
                                    $('.tazas').countTo({
                                        from: 565,
                                        to: 999,
                                        speed: 1000000,
                                        refreshInterval: 50,
                                        onComplete: function (value) {
                                            console.debug(this);
                                        }
                                    });
                                });
                            </script>
                            <text class="text-white">312,</text>
                            <span class="tazas text-white"></span>
                            <p class="Tlight text-normal text-white">
                                tazas de café
                            </p>
                        </center>
                    </div>
                    <div class="col">
                        <text class="Tnormal text-sec-title text-white">
                        <center class="text-white">
                            30,892
                            <p class="Tlight text-normal text-white">
                                horas de código
                            </p>
                        </center>
                        </text>
                    </div>
                    <div class="col">
                        <text class="Tnormal text-sec-title text-white">
                        <text class="Tnormal text-sec-title text-white">
                        <center class="text-white">
                            28
                            <p class="Tlight text-normal text-white">
                                proyectos
                            </p>
                        </center>
                        </text>
                        </text>
                    </div>
                    <div class="col-3"></div>
                </div>
                <br/><br/><br/>
                <div class="row container-fluid">
                    <div class="col-1"></div>
                    <div class="col-2 col-ficha">
                        <center>
                            <img src="src/imgs/uron1.jpg" class="img-team" alt="Christian Ontiveros">
                            <br/><br/>
                            <text class="text-white text Tnormal text-name">
                            Christian Ontiveros
                            </text><br/>
                            <text class="text-white text Tlight text-normal">
                            DESARROLLADOR
                            </text>
                            <hr class="white-rect" style="width: 90%;"/>
                            <a href="https://github.com/ErsoSkywalker" target="_blank">
                                <img src="src/imgs/git.svg" class="img-red" alt="Github">
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/christianontiveros/" target="_blank">
                                <img src="src/imgs/link.svg" class="img-red" alt="LinkedIn">
                            </a>
                        </center>
                    </div>
                    <div class="col-2">
                        <center>
                            <img src="src/imgs/uron2.jpg" class="img-team" alt="Javier Rubin">
                            <br/><br/>
                            <text class="text-white text Tnormal text-name">
                            Javier Rubin
                            </text><br/>
                            <text class="text-white text Tlight text-normal">
                            DESARROLLADOR
                            </text>
                            <hr class="white-rect" style="width: 90%;"/>
                            <a href="https://github.com/Beyond77" target="_blank">
                                <img src="src/imgs/git.svg" class="img-red" alt="Github">
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/javier-rubin-cisneros-9832381a7" target="_blank">
                                <img src="src/imgs/link.svg" class="img-red" alt="LinkedIn">
                            </a>
                        </center>
                    </div>
                    <div class="col-2 col-ficha">
                        <center>
                            <img src="src/imgs/uron3.jpg" class="img-team" alt="Pedro Berumen">
                            <br/><br/>
                            <text class="text-white text Tnormal text-name">
                            Pedro Berumen
                            </text><br/>
                            <text class="text-white text Tlight text-normal">
                            OPERACIONES
                            </text>
                            <hr class="white-rect" style="width: 90%;"/>
                            <a href="https://github.com/Kasachiefs" target="_blank">
                                <img src="src/imgs/git.svg" class="img-red" alt="Github">
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/pedro-berumen-38080519b/" target="_blank">
                                <img src="src/imgs/link.svg" class="img-red" alt="LinkedIn">
                            </a>
                        </center>
                    </div>
                    <div class="col-2 col-ficha">
                        <center>
                            <img src="src/imgs/uron4.jpg" class="img-team" alt="Saúl Castillo">
                            <br/><br/>
                            <text class="text-white text Tnormal text-name">
                            Saúl Castillo
                            </text><br/>
                            <text class="text-white text Tlight text-normal">
                            DESARROLLADOR
                            </text>
                            <hr class="white-rect" style="width: 90%;"/>
                            <a href="https://github.com/sc99?tab=repositories" target="_blank">
                                <img src="src/imgs/git.svg" class="img-red" alt="Github">
                            </a>
                        </center>
                    </div>
                    <div class="col-2 col-ficha">
                        <center>
                            <img src="src/imgs/uron5.jpg" class="img-team" alt="Saúl Hernández">
                            <br/><br/>
                            <text class="text-white text Tnormal text-name">
                            Saúl Hernández
                            </text><br/>
                            <text class="text-white text Tlight text-normal">
                            DISEÑADOR
                            </text>
                            <hr class="white-rect" style="width: 90%;"/>
                            <a href="https://github.com/ZulHernandez" target="_blank">
                                <img src="src/imgs/git.svg" class="img-red" alt="Github">
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/saúl-ulises-hernández-cruz-46a1ba149" target="_blank">
                                <img src="src/imgs/link.svg" class="img-red" alt="LinkedIn">
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://sketchfab.com/bear59814" target="_blank">
                                <img src="src/imgs/sketch.svg" class="img-red" alt="LinkedIn">
                            </a>
                        </center>
                    </div>
                </div>
                <br/><br/><br/>
                <div class="row container-fluid">
                    <div class="col-3"></div>
                    <div class="col">
                        <br/>
                        <center>
                            <img src="src/imgs/drucker.svg" width="25%" alt="Peter Drucker"><br/>
                            <text class="Tnormal text-white text-sec-subtitle">
                            "La mejor manera de predecir el futuro, es crearlo"
                            <p class="Tlight text-white">
                                - Peter Drucker (1909 - 2005)
                            </p>
                            </text>
                        </center>
                    </div>
                    <div class="col-3"></div>
                </div>
                <br/><br/><br/><br/>
            </div>
            <div class="container-fluid">
                <a name="Contacto"></a>
                <br/><br/><br/>
                <center class="text-dark Tnormal text-sec-title">
                    CONTÁCTANOS
                </center>
                <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
                <br/><br/><br/>
                <form>
                    <div class="row container-fluid">
                        <div class="col-3"></div>
                        <div class="col">
                            <text class="text-dark Tnormal text-normal">
                            <b>Nombre</b>
                            </text>
                            <br/>
                            <input type="text" placeholder="¿Quién escribe?"/>
                        </div>
                        <div class="col">
                            <text class="text-dark Tnormal text-normal">
                            <b>Correo</b>
                            </text>
                            <br/>
                            <input type="email" placeholder="¿A dónde te escibimos?"/>
                        </div>
                        <div class="col">
                            <text class="text-dark Tnormal text-normal">
                            <b>Teléfono</b>
                            </text>
                            <br/>
                            <input type="tel" placeholder="¿A donde te llamamos?"/>
                        </div>
                        <div class="col-3"></div>
                    </div>
                    <br/><br/>
                    <div class="row container-fluid">
                        <div class="col-3"></div>
                        <div class="col">
                            <text class="text-dark Tnormal text-normal">
                            <b>Mensaje</b>
                            </text>
                            <br/>
                            <textarea type="text" class="input-msj" placeholder="¿Qué nos quieres decir?" maxlength="1300"></textarea>
                        </div> 
                        <div class="col-3"></div>
                    </div>
                    <div class="row container-fluid">
                        <div class="col"></div>
                        <div class="col-1">
                            <br/><br/>
                            <input type="submit" class="button-enviar" class="text-sec-subtitle" value="Enviar"></input>
                        </div> 
                        <div class="col"></div>
                    </div>
                </form>
                <br/><br/><br/>
            </div>
            <div class="div-footer">
                <center>
                    <br/><br/><br/>
                    <img src="src/imgs/beruon.svg" alt="beruon" width="10%">
                    <br/><br/>
                    <a href="whatsapp://send?phone=+525564988988" target="_blank">
                        <img src="src/imgs/wha.svg" alt="whatsapp" class="img-red">
                    </a>&nbsp;&nbsp;
                    <a href="https://m.me/BeruonDev" target="_blank">
                        <img src="src/imgs/facebook.svg" alt="messenger"  class="img-red">
                    </a>&nbsp;&nbsp;
                    <a href="https://m.me/BeruonDev" target="_blank">
                        <img src="src/imgs/messenger.svg" alt="messenger" class="img-red">
                    </a>&nbsp;&nbsp;
                    <a href="https://goo.gl/maps/icCySE7fkSNX1hik9" target="_blank">
                        <img src="src/imgs/maps.svg" alt="GoogleMaps" class="img-red">
                    </a>&nbsp;&nbsp;
                    <a href="mailto:contacto@beruon.com" target="_blank">
                        <img src="src/imgs/mail.svg" alt="Mail" class="img-red">
                    </a>
                    <br/><br/>
                    <text class="text-white Tlight">
                        <a href="mailto:contacto@beruon.com" target="_blank">
                            contact@beruon.com
                        </a>
                        <br/>
                        <a href="https://goo.gl/maps/icCySE7fkSNX1hik9" target="_blank">
                            Colina de la Umbría 136, Boulevares, Naucalpan, Edo. Mex.
                        </a>
                        <br/>
                        <a href="tel:+525565988988">
                            55-65988988
                        </a>
                    </text>
                    <br/>
                    <hr style="width: 80%; border-color: white"/>
                    <div width="width" class="text-white Tlight">
                        © Copyright 2019 Beruon - All Rights Reserved
                    </div>
                </center>
            </div>
        </div>
    </div>
</body>
</html>
