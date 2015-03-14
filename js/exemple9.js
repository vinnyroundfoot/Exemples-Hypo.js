
$(function(){
   
    $('#frmExemple9 #btnCalculer_9').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple9'),
            K0 = $f.find('#K0_9').val(),
            n = $f.find('#n_9').val(),
            p1 = $f.find('#p1_9').val(),
            p2 = $f.find('#p2_9').val(),
            t = $f.find('#t_9').val(),            
            dec = 2;
        
        var res = Hypo.cumulInt(K0, n, t, p1, p2, dec);
               
        $f.find('#res_9').val(res);
    });
    
    
});

