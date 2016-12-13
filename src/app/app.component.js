"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.buttons = [
            {
                iconClass: 'ion-social-github',
                label: 'follow me on github',
                onClick: function () {
                    location.href = 'https://github.com/RidaRidss';
                }
            },
            {
                iconClass: 'ion-social-facebook',
                label: 'follow me on facebook',
                onClick: function () {
                    location.href = 'https://www.facebook.com/RidaRidss';
                }
            },
            {
                iconClass: 'ion-social-linkedin',
                label: 'linkedin',
                onClick: function () {
                    location.href = 'https://www.linkedin.com/in/rida-bilgrami-05537a6a?trk=nav_responsive_tab_profile';
                }
            },
        ];
        this.placements = [
            {
                value: 'br',
                key: 'bottom right'
            },
            {
                value: 'bl',
                key: 'bottom left'
            },
            {
                value: 'tr',
                key: 'top right'
            },
            {
                value: 'tl',
                key: 'top left'
            },
        ];
        this.effects = [
            {
                value: 'mfb-zoomin',
                key: 'Zoom In'
            },
            {
                value: 'mfb-slidein',
                key: 'Slide In + Fade'
            },
            {
                value: 'mfb-fountain',
                key: 'Fountain'
            },
            {
                value: 'mfb-slidein-spring',
                key: 'Slide In (Spring)'
            }
        ];
        this.toggles = [
            'click',
            'hover'
        ];
        this.config = {
            placment: 'br',
            effect: 'mfb-zoomin',
            label: 'main button label',
            iconClass: 'ion-plus-round',
            activeIconClass: 'ion-close-round',
            toggle: 'click',
            buttons: this.buttons
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
