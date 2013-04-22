$(document).ready(function() {
          $('div#single-poster img').bind('load', function (event) {
              var image = event.target;
              var max = 3
              var palette = createPalette(image, max);
              var color = palette.map(function(each){return jQuery.Color('rgba('+ each  +', 1)')});
              color.sort(function(a,b){return a.lightness()-b.lightness()})
              if (color[0].lightness()<=0.4)
                  $('div.event-title').animate({'background-color':color[0]},500);
              for(var i=max-1; i>=0; i--){
                  if(180-Math.abs(180-Math.abs(color[i].hue()-color[0].hue()))>=45&&
                      color[i].lightness()-color[0].lightness()>0.1)
                  {
                      $('div.event-title').animate({'color':color[i]},500);
                      break;
                  }
                  if(color[i].lightness()<=0.5)
                      if(color[max-1].lightness()>=0.7){
                          $('div.event-title').animate({'color':color[max-1]},500);
                          break;
                      }
                      else break;
              }
          });
  });
