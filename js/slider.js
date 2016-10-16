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

            _priv.configLoaded = $.extend({}, _priv.defaultConfig, config);

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

            markUp += '<div class="innerContainer loaded">';
            markUp += '    <div class="loadingContainer">Loading...</div>';
            markUp += '    <div class="main-slider">';
            markUp += '        <div class="image-row">';
            markUp += '        </div>';
            markUp += '        <div class="bottom-bar">'
            markUp += '            <h1 class="title"></h1>';
            markUp += '            <p class="intro"><span class="intro-text"></span> <a href="#">Read more &raquo;</a></p>';
            markUp += '            <div class="pager">';
            markUp += '            </div>';
            markUp += '        </div>';
            markUp += '        <a href="#" class="full-space-link"></a>';
            markUp += '    </div>';
            markUp += '</div>';

            var domElements = $(markUp);

            container.html(domElements);

        } else {

            throw new Error('Specified DOM container is not a real element');

        }

    }

    _priv.imageArray = null;
    _priv.imageRow = null;
    _priv.currentSlide = null;
    _priv.currentTitle = null;
    _priv.currentIntro = null;
    _priv.currentLink = null;
    _priv.globalLink = null;
    _priv.pager = null;

    _priv.eventLoop = null;

    _priv.setupCurrentSlide = function () {

        // Set text
        var index = _priv.currentSlide || 0,
            entry = _priv.imageArray[index];

        _priv.currentTitle.text(entry.title);
        _priv.currentIntro.text(entry.blurb);
        _priv.currentLink.attr('href', entry.link);
        _priv.globalLink.attr('href', entry.link);

        // Set position
        _priv.imageRow.css('margin-left', parseInt(index * -100) + '%');

        _priv.pager.children('.slide-link').removeClass('active');
        _priv.pager.find('.slide-link[data-link-index=' + _priv.currentSlide + ']').addClass('active');

    }

    _methods.prevSlide = function () {
        _priv.currentSlide--;
        if (_priv.currentSlide < 0) _priv.currentSlide = _priv.imageArray.length;

        _priv.setupCurrentSlide();
    };
    _methods.nextSlide = function () {
        _priv.currentSlide++;
        if (_priv.currentSlide > _priv.imageArray.length - 1) _priv.currentSlide = 0;

        _priv.setupCurrentSlide();
    };

    Slider = function (config) {

        _priv.setConfig(config);
        this.config = _priv.getConfig();

        this.methods = _methods;

        //Initialization
        _priv.attachConfig(this.config.sliderContainer);
        _priv.innerDOM(this.config.sliderContainer);

        _priv.imageArray = this.config.images;

        if ($.isArray(_priv.imageArray) && _priv.imageArray.length > 0) {

            _priv.imageRow = $('.image-row');
            _priv.pager = $('.pager');

            // Load and append images
            var imagesLoadedCount = 0,
                imagesToLoad = _priv.imageArray.length,
                imagesErrored = 0,
                imagesRemaining = function () { return imagesToLoad - imagesLoadedCount - imagesErrored; };

            $.each(_priv.imageArray, function (i, el) {

                var imageToAdd = new Image();
                imageToAdd.alt = el.alt;
                imageToAdd.setAttribute('data-index', i);
                imageToAdd.src = el.img;
                imageToAdd.onload = function () {
                    _priv.imageRow.append(imageToAdd);
                    imagesLoadedCount++;

                    _priv.pager.append('<span class="slide-link" data-link-index="' + $(this).data('index') + '"></span>');

                };
                imageToAdd.onerror = function () {
                    imagesErrored++;
                };

            });

            // Loop and wait until all loaded
            var loadLoop = setInterval(function () {
                if (imagesRemaining() === 0) {
                    imagesLoaded();
                    _priv.currentSlide = 0;
                    clearInterval(loadLoop);
                }
            }, 20);

            function imagesLoaded () {

                _priv.currentTitle = $('.title');
                _priv.currentIntro = $('.intro-text');
                _priv.currentLink = $('.intro > a');
                _priv.globalLink = $('.full-space-link');
                _priv.imageRow.css('transition-duration', _priv.configLoaded.txTime + 'ms');
                _priv.setupCurrentSlide();

                _priv.eventLoop = setInterval(_methods.nextSlide, _priv.configLoaded.timeout);

            }

        }

        return this;

    }

} (window.jQuery));
