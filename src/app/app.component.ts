import { Component } from '@angular/core';
import { MfbButton } from './../ng-floating-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config;
   title = 'app works!';
  buttons: Array<MfbButton> = [
    {
      iconClass: 'ion-social-github',
      label: 'follow me on github',
      onClick: function(){
        location.href = 'https://github.com/RidaRidss';
      }
    },
    {
      iconClass: 'ion-social-facebook',
      label: 'follow me on facebook',
      onClick: function(){
        location.href = 'https://www.facebook.com/RidaBilgrami';
      }
    },
    {
      iconClass: 'ion-social-linkedin',
      label: 'linkedin',
      onClick: function(){
        location.href = 'https://www.linkedin.com/in/rida-bilgrami-05537a6a?trk=nav_responsive_tab_profile';
      }
    },
  ];

  placements = [
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

  effects = [
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
  ]

  toggles = [
    'click',
    'hover'
  ]



  constructor(){
    this.config = {
      placment: 'br',
      effect: 'mfb-zoomin',
      label: 'main button label',
      iconClass: 'ion-plus-round',
      activeIconClass: 'ion-close-round',
      toggle: 'click',
      buttons: this.buttons
    }
  }


}
