$(document).ready(function(){
    $('a').click(function(event) {
        if (this.hash !=="") {
            event.preventDefault()
            var hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().scrollTop
            },800,function() {
                window.location.hash = hash
            })
        }
    })
})



 
 
 