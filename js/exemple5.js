
$(function(){
   
    $('#frmExemple5 #btnCalculer_5').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple5'),
            K0 = $f.find('#K0_5').val(),
            m = $f.find('#m_5').val(),
            n = $f.find('#n_5').val(),
            dec = 2;
        
        var res = Hypo.taux(K0, n, m, dec);
               
        $f.find('#res_5').val(res);
    });
    
    
});

