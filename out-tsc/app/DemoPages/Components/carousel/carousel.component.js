import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.heading = 'Carousels & Slideshows';
        this.subheading = 'Create easy and beautiful slideshows with these Vue components.';
        this.icon = 'pe-7s-album icon-gradient bg-sunny-morning';
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        this.slides = [
            { img: '1' },
            { img: '2' },
            { img: '3' },
            { img: '4' },
            { img: '5' },
            { img: '6' },
            { img: '7' },
            { img: '8' },
        ];
        this.slideConfig = {
            slidesToShow: 1,
            dots: true,
        };
        this.slideConfig2 = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
            dots: true,
        };
        this.slideConfig3 = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.slideConfig4 = {
            slidesToShow: 3,
            dots: true,
        };
        this.slideConfig5 = {
            className: 'slider variable-width',
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };
        this.slideConfig6 = {
            className: 'center',
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            adaptiveHeight: true,
            dots: true,
        };
    }
    CarouselComponent = tslib_1.__decorate([
        Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map