
$(function(){
   
    $('#frmExemple1 #btnCalculer_1').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple1'),
            taux = $f.find('#taux_1').val(),
            p1 = $f.find('#p1_1').val(),
            p2 = $f.find('#p2_1').val(),
            dec = 2;
        
        if (p2==1) {
            dec = 3;
        }else{
            dec = 6;
        }
        
        var res = Hypo.convTx(taux, p1, p2, dec);
       $f.find('#res_1').val(res);
    });
    
    
});

