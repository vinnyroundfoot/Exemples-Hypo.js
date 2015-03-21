**Hypo.js**
======

**Hypo.js** est une librairie Javascript reprenant un ensemble de fonctions financières utilisées dans le cadre de prêt hypothécaire ou à tempérament

Fonctions présentes dans la librairie :
-------------

#### Valeur acquise, valeur actuelle

**Hypo.VC_K** : calcul de la valeur acquise d'un placement **K0**  pendant **n** périodes à un taux **t**.
 
    //exemple
    
    var K0 = 10000, // capital placé
    n = 5,      // nombre d'années
    t = .05,    // taux annuel (5%)
    dec =2;     // nombre de décimales dans le résultat

    var res = Hypo.VC_K(K0, n, t, dec); // 12762.82 


**Hypo.VC** : calcul de la valeur acquise d'une suite de placements **m** constants pendant **n** périodes à un taux **t**.

    //exemple
    
    var m = 200, // versement périodique
    n = 60,      // nombre de mois
    t = .002870, // taux mensuel (3.5% en annuel)
    dec =2;      // nombre de décimales dans le résultat

    var res = Hypo.VC(m, n, t, dec); // 13074.73 

**Hypo.VA_K** : calcul de la valeur actuelle d'un capital acquis (valeur acquise) **Kn** dont la valeur actuelle a été placée pendant **n** périodes à un taux **t**
  
    //exemple
    
    var Kn = 12762.82, // capital acquis
    n = 5,      // nombre d'années
    t = .05,    // taux annuel 
    dec =2;     // nombre de décimales dans le résultat

    var res = Hypo.VA_K(Kn, n, t, dec); // 10000 

**Hypo.VA** : calcul de la valeur actuelle d'une suite de placements **m** constants pendant **n** périodes à un taux **t**

    //exemple
    
    var m = 200, // versement périodique
    n = 60,      // nombre de mois
    t = .002870, // taux mensuel (3.5% en annuel)
    dec =2;      // nombre de décimales dans le résultat

    var res = Hypo.VA(m, n, t, dec); // 11009.17 


#### Mensualité, taux et durée d'un emprunt

**Hypo.VPM** : calcul de la mensualité d'un emprunt **K0** souscrit pour **n** périodes à un taux **t**.

    //exemple
    
    var K0 = 100000, // capital emprunté
    n = 240,         // nombre de mois
    t = .004074,    // taux mensuel (5% en annuel)
    dec =2;         // nombre de décimales dans le résultat

    var res = Hypo.VPM(K0, n, t, dec); // 653.83
    
**Hypo.taux** : approximation du taux d'un emprunt **K0** en fonction de sa mensualité **m**, de sa durée **n** et d'éventuels frais **f** à intégrer dans le taux.

    //exemple
    
    var K0 = 100000, // capital emprunté
    m = 653.83,      // mensualité
    n = 240;         // durée en mois

    var res = Hypo.taux(K0, n, m); // 0.004074224 (taux mensuel)

**Hypo.duree** : calcul de la durée d'un emprunt en fonction du capital emprunté **K0**, de la mensualité **m** remboursée périodiquement et du taux **t**.

    //exemple
    
    var K0 = 100000, // capital emprunté
    m = 653.83,      // mensualité
    n = .004074;     // taux mensuel (5% en annuel)

    var res = Hypo.duree(K0, m, t); // 239.9989437255888 (+/- 240 mois)

#### Mensualité, taux et durée d'un placement

**Hypo.VPM_Kn** : calcul de la mensualité d'un placement en fonction de la valeur acquise **Kn** souhaitée, du taux **t** et du nombre de périodes de placement **n**.

**Hypo.taux_K** : détermination du taux d'un placement en fonction du capital de départ **K0**, du capital acquis **Kn** et du nombre de périodes **n**.

**Hypo.duree_K** : calcul de la durée d'un placement en fonction du capital de départ **K0**, du capital acquis **Kn** et du taux **t**.

#### Amortissements et intérêts d'un emprunt

**Hypo.princPer1** : calcul du montant de l'amortissement de la 1ere période d'un emprunt **K0** souscrit pendant **n** périodes à un taux **t**.

**Hypo.princPer** : calcul de l'amortissement de la période **p** d'un emprunt **K0** souscrit pour **n** périodes à un taux **t**

**Hypo.princPerP** : calcul de l'amortissement d'une période **p2** d'un emprunt en fonction de l'amortissement donné **apn** d'une autre période **p1**.

**Hypo.cumulPrinc** : calcul de l'amortissement cumulé de la période **p1** à la période **p2** d'un emprunt **K0** d'une durée **n** à un taux **t**.
