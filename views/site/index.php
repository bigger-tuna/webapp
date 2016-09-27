<?php
/* @var $this yii\web\View */

$this->title = 'Ruleblox';
?>

<body>
    <!-- Header -->
    <header id="top" class="header">
        <div class="text-vertical-center">
            <h1>RuleBlox</h1>
            <h3> Sensors as a Service</h3>
            <br>
            <a href="#about" class="btn btn-dark btn-lg">Learn More</a>
        </div>
    </header>

    <!-- About -->
    <section id="about" class="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="page-heading">RuleBlox Data</h2>
                    <div class="channel-details">
                        <p>   Channel ID:
                            <span id="channel-id" class="channel-data"></span>
                        </p>
                        <p> Channel Name:
                            <span id="channel-name" class="channel-data"></span>
                        </p>
                        <p> Last Update:
                            <span id="weather-data-time" class="channel-data"></span>
                        </p>
                    </div>

                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>

    <!-- Services -->
    <!-- The circle icons use Font Awesome's stacked icon classes. For more information, visit http://fontawesome.io/examples/ -->
    <section id="services" class="services bg-primary">
        <div class=" latest-readings container">
            <div class="row text-center" id="datatag">
                <h2>Data</h2>
                <!-- <hr class="small"> -->
            </div>
            <div class="row text-center content data-summary">
                <div class="col-md-10 col-md-offset-2">
                    <div class="row">
                        <div class="col-md-2 ">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-cloud fa-stack-1x text-primary"></i>
                                </span>
                                <h4>
                                    <strong>TEMPERATURE</strong>
                                </h4>
                                <p>DEGREES °C </p>
                                <a id="tempChart" class="circle-link">
                                    <div class="height_fix"></div>
                                    <div id="temp" class="content blue"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-compass fa-stack-1x text-primary"></i>
                                </span>
                                <h4>
                                    <strong>ATMOSPHERIC PRESSURE</strong>
                                </h4>
                                <p>kPa </p>
                                <a id="pressureChart" class="circle-link">
                                    <div class="height_fix"></div>
                                    <div id="pressure" class="content orange"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-tachometer fa-stack-1x text-primary"></i>
                                </span>
                                <h4>
                                    <strong>RELATIVE HUMIDITY</strong>
                                </h4>
                                <p>% </p>
                                <a id="humidityChart" class="circle-link">
                                    <div class="height_fix"></div>
                                    <div id="humidity" class="content green"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-tint fa-stack-1x text-primary"></i>
                                </span>
                                <h4>
                                    <strong>DEW POINT</strong>
                                </h4>
                                <p>DEGREES °C</p>
                                <a id="dewChart" class="circle-link">
                                    <div class="height_fix"></div>
                                    <div id="dew" class="content red"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-bolt fa-stack-1x text-primary"></i>
                                </span>
                                <h4>
                                    <strong>SUPPLY VOLTAGE</strong>
                                </h4>
                                <p>V</p>
                                <a id="voltageChart" class="circle-link">

                                    <div class="height_fix"></div>
                                    <div id="voltage" class="content yellow"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /.row (nested) -->
                </div>
                <!-- /.col-lg-10 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>



    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <br>
                    <ul class="list-inline">
                        <li>
                            <a href="#"><i class="fa fa-facebook fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-twitter fa-fw fa-3x"></i></a>
                        </li>

                    </ul>

                    <p class="text-muted"> &copy;RuleBlox</p>
                </div>
            </div>
        </div>
        <a id="to-top" href="#top" class="btn btn-dark btn-lg">
            <i class="fa fa-chevron-up fa-fw fa-1x"></i></a>
    </footer>
</body>





