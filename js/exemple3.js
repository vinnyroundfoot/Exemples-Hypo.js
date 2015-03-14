
$(function(){
   
    $('#frmExemple3 #btnCalculer_3').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple3'),
            m = $f.find('#m_3').val(),
            n = $f.find('#n_3').val(),
            t = $f.find('#t_3').val(),
            dec = 2;
        
        var res = Hypo.VA(m, n, t, dec);
        $f.find('#res_3').val(res);
    });
    
    
});

