
$(function(){
   
    $('#frmExemple6 #btnCalculer_6').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple6'),
            K0 = $f.find('#K0_6').val(),
            n = $f.find('#n_6').val(),
            p = $f.find('#p_6').val(),
            t = $f.find('#t_6').val(),            
            dec = 2;
        
        var res = Hypo.princPer(K0, n, t, p, dec);
               
        $f.find('#res_6').val(res);
    });
    
    
});

