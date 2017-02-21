function multilineTruncation() {
  $('.truncateThisText').each(function(i) {
    if (this.scrollHeight > $(this).innerHeight()) {
      var parentW = $(this).width(),
        parentH = $(this).height();
        
      //create ellipse and append
      var ellipseEl = document.createElement('span'),
        ellipseTxt = document.createTextNode('\u2026');

        ellipseEl.className = 'ellipsesForTruncation';
        ellipseEl.appendChild(ellipseTxt);
        $(this).prepend(ellipseEl);

      var ell = $(this).find('.ellipsesForTruncation'),
        ellW = ell.width(),
        ellH = ell.height(),
        ellPL = parseInt(ell.css('padding-left')), 
        ellPR = parseInt(ell.css('padding-right'));
      
      //nudges ellipses down
      var shim = 1; //chrome and IE
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){shim = 3;} //ff
      
      $(this).css('overflow','hidden');

      ell.css({
        'display': 'block',
        'top': parentH - ellH + shim,
        'left': parentW - ellW - ellPL - ellPR
      });
    }
    else {
    	//eliminate whitespace if no truncation
      $(this).css('height','auto');
    }
  });
};
