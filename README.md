Hypo.js
======

**Hypo.js** est une librairie Javascript reprenant un ensemble de fonctions financières utilisées dans le cadre de prêt hypothécaire ou à tempérament

----------

Fonctions présentes dans la librairie :
-------------
**Hypo.js**
======

**Hypo.js** est une librairie Javascript reprenant un ensemble de fonctions financières utilisées dans le cadre de prêt hypothécaire ou à tempérament

Fonctions présentes dans la librairie :
-------------

#### Valeur acquise, valeur actuelle

**Hypo.VC_K** : calcul de la valeur acquise d'un placement **K0**  pendant **n** périodes à un taux **t**.

   

    var K0 = 10000, // capital placé
    n = 5,      // nombre d'années
    t = .05,    // taux (5%)
    dec =2;     // nombre de décimales dans le résultat

    console.log(Hypo.VC_K(K0, n, t, dec));     


**Hypo.VC** : calcul de la valeur acquise d'une suite de placements **m** constants pendant **n** périodes à un taux **t**.

**Hypo.VA_K** : calcul de la valeur actuelle d'un capital acquis (valeur acquise) dont la valeur actuelle a été placée pendant **n** périodes à un taux **t**

**Hypo.VA** : calcul de la valeur actuelle d'une suite de placements **m** constants pendant **n** périodes à un taux **t**

#### Mensualité, taux et durée d'un emprunt

**Hypo.VPM** : calcul de la mensualité d'un emprunt **K0** souscrit pour **n** périodes à un taux **t**.

**Hypo.taux** : approximation du taux d'un emprunt **K** en fonction de sa mensualité **m**, de sa durée **n** et d'éventuels frais **f** à intégrer dans le taux.

**Hypo.duree** : calcul de la durée d'un emprunt en fonction du capital emprunté **K0**, de la mensualité **m** remboursée périodiquement et du taux **t**.

#### Mensualité, taux et durée d'un placement

**Hypo.VPM_Kn** : calcul de la mensualité d'un placement en fonction de la valeur acquise **Kn** souhaitée, du taux **t** et du nombre de périodes de placement **n**.

**Hypo.taux_K** : détermination du taux d'un placement en fonction du capital de départ **K0**, du capital acquis **Kn** et du nombre de périodes **n**.

**Hypo.duree_K** : calcul de la durée d'un placement en fonction du capital de départ **K0**, du capital acquis **Kn** et du taux **t**.

#### Amortissements et intérêts d'un emprunt

**Hypo.princPer1** : calcul du montant de l'amortissement de la 1ere période d'un emprunt **K0** souscrit pendant **n** périodes à un taux **t**.

**Hypo.princPer** : calcul de l'amortissement de la période **p** d'un emprunt **K0** souscrit pour **n** périodes à un taux **t**

**Hypo.princPerP** : calcul de l'amortissement d'une période **p2** d'un emprunt en fonction de l'amortissement donné **apn** d'une autre période **p1**.

**Hypo.cumulPrinc** : calcul de l'amortissement cumulé de la période **p1** à la période **p2** d'un emprunt **K0** d'une durée **n** à un taux **t**.

#### Valeur acquise, valeur actuelle

**Hypo.VC_K** : calcul de la valeur acquise d'un placement **K0**  pendant **n** périodes à un taux **t**.

**Hypo.VC** : calcul de la valeur acquise d'une suite de placements **m** constants pendant **n** périodes à un taux **t**.

**Hypo.VA_K** : calcul de la valeur actuelle d'un capital acquis (valeur acquise) dont la valeur actuelle a été placée pendant **n** périodes à un taux **t**

**Hypo.VA** : calcul de la valeur actuelle d'une suite de placements **m** constants pendant **n** périodes à un taux **t**

-----

#### Mensualité, taux et durée

**Hypo.VPM** : calcul de la mensualité d'un emprunt **K0** souscrit pour un **n** période à un taux **t**.
