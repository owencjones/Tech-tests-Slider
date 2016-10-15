var Slider;
(function ($) {

    var _methods = {}, _priv = {};

    _priv.defaultConfig = _priv.configLoaded = {
        timeout: 5000,
        txTime: 1000,
        sliderContainer: '#slider',
        images: []
    };
    _priv.setConfig = function (config) {

        try {

            _priv.configLoaded = $.extend({}, config, _priv.defaultConfig);

        } catch (e) {

            _priv.configLoaded = _priv.defaultConfig;

        }

        return _priv.configLoaded;

    };
    _priv.getConfig = function () {

        return _priv.configLoaded;

    }
    _priv.attachConfig = function (containerId) {
        var configString = JSON.stringify(_priv.getConfig()),
            DOMObject = $(containerId);

        DOMObject.attr('data-config', configString);
    }

    _priv.innerDOM = function (containerId) {

        var container = $(containerId);

        if (container.length !== 0) {

            var markUp = '';

            markUp += '<div class="innerContainer">';
            markUp += '<div class="loadingContainer">Loading...</div>';
            markUp += '</div>';

            var domElements = $(markUp);

            container.html(domElements);

        } else {

            throw new Error('Specified DOM container is not a real element');

        }

    }

    _methods.prevSlide = function () {};
    _methods.nextSlide = function () {};

    Slider = function (config) {

        _priv.setConfig(config);
        this.config = _priv.getConfig();

        this.methods = _methods;

        //Initialization
        _priv.attachConfig(this.config.sliderContainer);
        _priv.innerDOM(this.config.sliderContainer);

        return this

    }

} (window.jQuery));
