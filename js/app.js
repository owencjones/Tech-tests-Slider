(function ($) {

    $(document).ready(function () {

        // Make array of slides, using the 'slide' function below
        var slides = [
            new slide('Slide 1', 'Lorem Ipsum Dolor Consecteur Adipscing Elit', 'http://example.com/slide-1', 'img/001.png', 'Slide 1'),
            new slide('Slide 2', 'Lorem Ipsum Dolor Consecteur Adipscing Elit', 'http://example.com/slide-2', 'img/002.png', 'Slide 2'),
            new slide('Slide 3', 'Lorem Ipsum Dolor Consecteur Adipscing Elit', 'http://example.com/slide-3', 'img/003.png', 'Slide 3'),
            new slide('Slide 4', 'Lorem Ipsum Dolor Consecteur Adipscing Elit', 'http://example.com/slide-4', 'img/004.png', 'Slide 4'),
            new slide('Slide 5', 'Lorem Ipsum Dolor Consecteur Adipscing Elit', 'http://example.com/slide-5', 'img/005.png', 'Slide 5'),
        ];

        // Any optional config overrides.
        var config = {
            images: slides
        };

        // Run slider
        var slider = new Slider(config);

    });

    // Simple function to return the JSON entries easily.
    function slide(title, blurb, link, img, alt) {

        var _ret = {};

        _ret.title = title;
        _ret.blurb = blurb;
        _ret.link = link;
        _ret.img = img;
        _ret.alt = alt;

        return _ret;

    }

} (window.jQuery));
