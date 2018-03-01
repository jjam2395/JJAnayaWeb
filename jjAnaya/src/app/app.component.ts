import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {

    /////////////////////////////
    // Sticky navigation

    $('.js--first-section').waypoint(function(direction){
      if (direction == "down"){
        $('nav').addClass('sticky');
      }else{
        $('nav').removeClass('sticky');
      }
    },{
      offset: '50px'
    });


    /////////////////////////////
    // Scroll on buttons

    $('.js--scroll-to-header').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1500);
    });

    $('.js--scroll-to-about').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1500);
    });

    $('.js--scroll-to-product-section').click(function(){
      $('html, body').animate({scrollTop: $('.js--product-section').offset().top}, 1500);
    });

    /////////////////////////////
    // Animation on Scroll

    $('.js--section-about').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
      offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
      offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction){

        $('.js--wp-3').addClass('animated fadeInUp');
    },{
      offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction){

        $('.js--wp-4').addClass('animated fadeInUp');
    },{
      offset:'50%'
    });


  	}
}
