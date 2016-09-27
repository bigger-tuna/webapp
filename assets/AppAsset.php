<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle {

    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
//        global css
        'global/plugins/font-awesome/css/font-awesome.min.css',
        'global/css/bootstrap.min.css',
        'global/css/bootstrap-theme.min.css',
        'global/css/fakeLoader.css',
        //custom css
        'global/css/stylish-portfolio.css',
        'global/css/main.css',
    ];
    public $js = [
        'global/scripts/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
        'global/scripts/vendor/Chart.min.js',
        'global/scripts/vendor/fakeLoader.min.js',
        'global/scripts/vendor/bootstrap.min.js',
        'global/scripts/bpop.js',
        'global/scripts/vendor/jquery-1.11.2.min.js',
        'global/scripts/bpop.js',
        'global/scripts/custom.js',
        'global/scripts/latest_readings.js',
        'global/scripts/jquery.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

}
