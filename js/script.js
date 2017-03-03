function multilineTruncation(el) { 
    "use strict"

    $(el).each(function() {
        if (this.scrollHeight > $(this).innerHeight()) {

            //placeholder for ellipses
            var e;

            //get parent element dimensions
            var parentSize = function(){
              var parentW = $(this).width(),
                  parentH = $(this).height();
              return {
                parentW: parentW,
                parentH: parentH
              }
            },

            //ellipse creation
            createEllipse = function(){
              var ellipseEl = document.createElement('span'),
                  ellipseTxt = document.createTextNode('\u2026');
              ellipseEl.className = 'ellipsesForTruncation';
              ellipseEl.appendChild(ellipseTxt);
              return ellipseEl;
            },

            getEllipses = function(){
                return $(this).find('.ellipsesForTruncation');
            },

            //get ellipses styles
            getEllipseStyles = function(){
              var ellW = ellipses.width(),
                  ellH = ellipses.height(),
                  ellPL = parseInt(ellipses.css('padding-left')),
                  ellPR = parseInt(ellipses.css('padding-right'));

                  return {
                    ellW: ellW,
                    ellH: ellH,
                    ellPL: ellPL,
                    ellPR: ellPR
                  }
            },

            //get shim to nudge ellipse down
            getShim = function(){
              var shim = 1; //chrome and IE
              if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                shim = 3;  //ff
              }
              return shim;
            };

            $(this).prepend(createEllipse()); //create and append ellipse
            $(this).css('overflow', 'hidden'); //hide overflow

            //get ellipses and set styles
            e = getEllipses();
            e.css({
                'display': 'block',
                'top': e.parentH - e.ellH + e.shim,
                'left': e.parentW - e.ellW - e.ellPL - e.ellPR
            });

        } else {
            //eliminate whitespace if no truncation
            $(this).css('height', 'auto');
        }
    });
};
