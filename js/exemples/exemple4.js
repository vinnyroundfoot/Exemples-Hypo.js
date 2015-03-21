
$(function(){
   
    $('#frmExemple4 #btnCalculer_4').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple4'),
            K0 = $f.find('#K0_4').val(),
            m = $f.find('#m_4').val(),
            t = $f.find('#t_4').val(),
            dec = 2;
        
        var res = Hypo.duree(K0, m, t, dec);
        
               
        $f.find('#res_4').val(res);
    });
    
    
});

