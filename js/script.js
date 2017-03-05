function multilineTruncation(el) { 
    "use strict"

    $(el).each(function() {

        var self = this;

        if (self.scrollHeight > $(self).innerHeight()) {

            //placeholders
            var p, e, es, shim;

            //get parent element dimensions
            var getParentSize = function(){
              var parentW = $(self).width(),
                  parentH = $(self).height();
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

            /* getEllipses = function(){
                return 
            }, */

            //get ellipses styles
            getEllipseStyles = function(){
              var ellW = e.width(),
                  ellH = e.height(),
                  ellPL = parseInt(e.css('padding-left')),
                  ellPR = parseInt(e.css('padding-right'));

                  return {
                    ellW: ellW,
                    ellH: ellH,
                    ellPL: ellPL,
                    ellPR: ellPR
                  }
            },

            //get shim to nudge ellipse down
            getShim = function(){
              shim = 1; //chrome and IE
              if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                shim = 3;  //ff
              }
              return shim;
            };

            $(self).prepend(createEllipse()); //create and append ellipse
            $(self).css('overflow', 'hidden'); //hide overflow

            //get parents, ellipses, and set styles
            p = getParentSize();
            e = $(self).find('.ellipsesForTruncation');
            es = getEllipseStyles();
            shim = getShim();
            e.css({
                'display': 'block',
                'top': p.parentH - es.ellH + shim,
                'left': p.parentW - es.ellW - es.ellPL
            });

        } else {
            //eliminate whitespace if no truncation
            $(self).css('height', 'auto');
        }
    });
};
