
$(function(){
   
    $('#frmExemple8 #btnCalculer_8').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple8'),
            K0 = $f.find('#K0_8').val(),
            n = $f.find('#n_8').val(),
            p1 = $f.find('#p1_8').val(),
            p2 = $f.find('#p2_8').val(),
            t = $f.find('#t_8').val(),            
            dec = 2;
        
        var res = Hypo.cumulPrinc(K0, n, t, p1, p2, dec);
               
        $f.find('#res_8').val(res);
    });
    
    
});

