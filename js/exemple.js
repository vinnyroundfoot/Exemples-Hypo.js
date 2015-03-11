
$(function(){
   
    $('#frmExemple1 #btnCalculer').on('click', function(event) {
        event.preventDefault();
        
        var $f = $('#frmExemple1');
        
        var taux = $f.find('#taux').val();
        var p1 = $f.find('#p1').val();
        var p2 = $f.find('#p2').val();
        
        var res = Hypo.convTx(taux, p1, p2, 5);

        $f.find('#res').val(res);
    });
    
    
});

