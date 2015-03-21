
$(function(){
   
    $('#frmExemple2 #btnCalculer_2').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple2'),
            K0 = $f.find('#K0_2').val(),
            n = $f.find('#n_2').val(),
            t = $f.find('#t_2').val(),
            dec = 2;
        
        var res = Hypo.VPM(K0, n, t, dec);
        $f.find('#res_2').val(res);
    });
    
    
});

