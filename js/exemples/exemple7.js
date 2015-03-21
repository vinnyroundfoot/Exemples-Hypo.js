
$(function(){
   
    $('#frmExemple7 #btnCalculer_7').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple7'),
            K0 = $f.find('#K0_7').val(),
            n = $f.find('#n_7').val(),
            p = $f.find('#p_7').val(),
            t = $f.find('#t_7').val(),            
            dec = 2;
        
        var res = Hypo.interetsPn(K0, n, t, p, dec);
               
        $f.find('#res_7').val(res);
    });
    
    
});

