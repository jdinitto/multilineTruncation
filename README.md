# multilineTruncation
A method for truncating text with line wrapping, using jQuery. There's native CSS3 truncation for one line, but nothing for wrapped text. There are a number of solutions for this elsewhere; I mix and matched a lot of them into something I thought worked best.

Works in Chromes, Firefoxes, and IE8 and up.

## To Use
Scripts and stylesheets to call. I call the latest jQuery version here, but as long as it's v1.6+, it should be fine. :
`<script data-require="jquery@2.2.4" data-semver="2.2.4" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`
`<link rel="stylesheet" href="css/styles.css" />`
`<script src="js/script.js"></script>`

Reference the `multilineTruncation` function, passing in the `.truncateThisText` CSS class:
```
<script>
   document.addEventListener("DOMContentLoaded", function(event) { 
      multilineTruncation('.truncateThisText');
   });
</script>
```

Check the stylesheet for further comments on the CSS.

[Check it out here.](https://jdinitto.github.io/multilineTruncation)

## To Do/Ideas
- [ ] Make the function not dependent on a specific CSS class to work, or only as another option
- [ ] Make truncation character and styles as paramters to pass in, so there's more options.
- [ ] Figure out how to move ellipses to the edge of text--see edge case on [page](https://jdinitto.github.io/multilineTruncation)
- [ ] ECMA6-ify it?
