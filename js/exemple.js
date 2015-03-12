
$(function(){
   
    $('#frmExemple1 #btnCalculer').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple1'),
            taux = parseFloat($f.find('#taux').val()),
            p1 = $f.find('#p1').val(),
            p2 = $f.find('#p2').val(),
            dec = 2;
        
        if (p2==1) {
            dec = 3;
        }else{
            dec = 6;
        }
        
        var res = Hypo.convTx(taux, p1, p2, dec);
       $f.find('#res').val(res);
    });
    
    
});

