$(document).ready(function() {
    let inputCheck = $('.form-check-input')
    inputCheck.on('click', function(e){        
        let $this = $(this);
        let userAnswer = $this.val();
        let answer = $this.parents('[data-res]').data('res');
        if(answer == userAnswer) {
            if(!$this.hasClass('correct')) {
                $this.addClass('correct');
            }
            
        }
    });
});