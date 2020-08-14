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
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Beruon</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <script src="src/p5/p5.js" type="text/javascript"></script>
        <script src="src/p5/heroAnima.js" type="text/javascript"></script>
        <script src="src/js/alerts.js" type="text/javascript"></script>
        <script src="src/js/adaptative.js" type="text/javascript"></script>
        <link href="src/css/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body class="Tnormal" onchange="ajusta();" onload="ajusta();" onresize="ajusta();">
        <nav id="show_1" class="navbar fixed-top container-fluid mostrar">
            <a class="navbar-brand" href="#Inicio">
                <img src="src/imgs/logo-nav.svg" class="brand-icon" alt="beruon">
            </a>   
        </nav>
        <div class="div-hero container-fluid">
            <a name="Inicio"></a>
            <div id="rrow"  class="row">
                <div id="col0" class="hero-col1"></div>
                <div id="show" class="col-4 bk-point">
                    <div id="canva1"></div>
                    <div class="sobre-canva text-white text-subtitle container">
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
            <div class="vEspace"></div>
            <center class="text-dark Tnormal text-sec-title">
                NOSOTROS
                <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
            </center>
            <div class="vEspace"></div>
            <div id="rowN" class="row"></div>
            <div class="vEspace"></div><div class="vEspace"></div>
            <div class="div-grey">
                <a name="Servicios"></a>
                <div class="vEspace"></div>
                <center class="text-white Tnormal text-sec-title">
                    SERVICIOS
                </center>
                <br/><br/>
                <div id="servicio"></div>
                <div class="vEspace"></div><div class="vEspace"></div>
            </div>
            <div>
                <a name="Ejes"></a>
                <div class="vEspace"></div>
                <center class="text-dark Tnormal text-sec-title">
                    EJES DEL DESARROLLO
                    <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
                </center>
                    <div id="ejes" class="row padding-eje">
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
                <div class="vEspace"></div><div class="vEspace"></div>
            </div>
            <div class="div-grey container-fluid">
                <a name="Equipo"></a>
                <div class="vEspace"></div>
                <center class="text-white Tnormal text-sec-title">
                    EQUIPO
                </center>
                <div id="cifras" class="row">
                    <div id="col32_1" class="col-3"></div>
                    <div class="col">
                        <text class="Tnormal">
                        <div class="vEspace"></div>
                        <center class="text-white text-sec-title">
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
                            <div class="vEspace"></div>
                            <text class="text-white">312,</text>
                            <span class="tazas text-white"></span>
                            <p class="Tlight text-normal text-white">
                                tazas de café
                            </p>
                        </center>
                    </div>
                    <div class="col">
                        <text class="Tnormal text-sec-title text-white">
                        <div class="vEspace"></div>
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
                        <div class="vEspace"></div>
                        <center class="text-white">
                            28
                            <p class="Tlight text-normal text-white">
                                proyectos
                            </p>
                        </center>
                        </text>
                        </text>
                    </div>
                    <div id="col32_2" class="col-3"></div>
                </div>
                <br/><br/><br/>
                <div id="team"></div>
                <br/><br/><br/>
                <div class="row">
                    <div id="colD_1" class="col-3"></div>
                    <div class="col">
                        <br/>
                        <center>
                            <img class="img-drucker" src="src/imgs/drucker.svg" alt="Peter Drucker"><br/>
                            <text class="Tnormal text-white text-sec-subtitle">
                            "La mejor manera de predecir el futuro, es crearlo"
                            <p class="Tlight text-white">
                                - Peter Drucker (1909 - 2005)
                            </p>
                            </text>
                        </center>
                    </div>
                    <div id="colD_2" class="col-3"></div>
                </div>
                <div class="vEspace"></div><div class="vEspace"></div>
            </div>
            <div class="container-fluid">
                <a name="Contacto"></a>
                <div class="vEspace"></div>
                <center class="text-dark Tnormal text-sec-title">
                    CONTÁCTANOS
                </center>
                <hr class="white-rect" style="border-color: #555555; width: 90%;"/>
                <div class="vEspace"></div>
                <form id="contact"></form>
                <div class="vEspace"></div><div class="vEspace"></div>
            </div>
            <div class="div-footer">
                <center>
                    <div class="vEspace"></div>
                    <img src="src/imgs/beruon.svg" alt="beruon" class="logo-foot">
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
                    <div class="vEspace"></div>
                </center>
            </div>
        </div>
    </div>
</body>
</html>
