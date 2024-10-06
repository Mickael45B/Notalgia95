  // PARTIE 01 ==> --------------------------------------------------------------------------------------------------------------------------------------------------------------- DEFINITION DES VARIABLES ET CONSTANTES ==>
  let gCompteurDrapeau = 0;
    let gEmplacementMine;
    let gIndices;
    let gEmplacementDrapeau;
    let gNbCases;
    let gNbRanges;
    let gNbRangesD;
    let gSecondes = 0;
    let gMinutes = 0;
    let chronometre;
    const resetDiv = document.getElementById('reset');
    const tableJeu = document.getElementById('table-jeu');


  // <== PARTIE 01 --------------------------------------------------------------------------------------------------------------------------------------------------------------- <== DEFINITION DES VARIABLES ET CONSTANTES

  // PARTIE 02 ==> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CHANGER DE SMILEY AU CLIC ==>

    tableJeu.addEventListener('mousedown', function() {
        // Changer l'image de fond à faceO.png
        resetDiv.style.backgroundImage = "url('../../imagesWLM/o-face.png')";
    });
    tableJeu.addEventListener('mouseup', function() {
        // Revenir à l'image de fond initiale face.png
        resetDiv.style.backgroundImage = "url('../../imagesWLM/face.png')";
    });

  // <== PARTIE 02 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== CHANGER DE SMILEY AU CLIC


  // PARTIE 03 ==> --------------------------------------------------------------------------------------------------------------------------------- LANCEMENT D UNE NOUVELLE PARTIE,MEME DIFFICULTE? AU CLIC SUR L EMOJI ==>

    resetDiv.addEventListener('click', function() {

        if (tableJeu.classList.contains('facile')) {
            // Appeler la fonction GenererJeuDifficile si la classe est présente
            GenererJeuFacile();
        }
        if (tableJeu.classList.contains('normal')) {
            // Appeler la fonction GenererJeuDifficile si la classe est présente
            GenererJeuMoyen();
        }
        if (tableJeu.classList.contains('difficile')) {
            // Appeler la fonction GenererJeuDifficile si la classe est présente
            GenererJeuDifficile();
        }

    });

  // <== PARTIE 03 --------------------------------------------------------------------------------------------------------------------------------- <== LANCEMENT D UNE NOUVELLE PARTIE,MEME DIFFICULTE? AU CLIC SUR L EMOJI

  // PARTIE 04 ==> --------------------------------------------------------------------------------------------------------------------------------------------- LANCEMENT DU SCRIPT EN FONCTION DE LA DIFFICULTE CHOISIE ==>

    document.getElementById("facile").addEventListener("click", GenererJeuFacile); //===> PARTIE 03.02
    document.getElementById("moyen").addEventListener("click", GenererJeuMoyen); //===> PARTIE 03.03
    document.getElementById("difficile").addEventListener("click", GenererJeuDifficile); //===> PARTIE 03.04

  // <== PARTIE 04 --------------------------------------------------------------------------------------------------------------------------------------------- <== LANCEMENT DU SCRIPT EN FONCTION DE LA DIFFICULTE CHOISIE

  // PARTIE 05 ==> ---------------------------------------------------------------------------------------------------------------------------------------------------------- GENERER LE JEU EN FONCTION DE LA DIFFICULTE ==>

    // PARTIE 05.01 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------------- CHOIX DU JEU EN "TRES FACILE" ==>

      // ********************************* A CREER **************************************************

    // <== PARTIE 05.01 ------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== CHOIX DU JEU EN "TRES FACILE"

    // PARTIE 05.02 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ CHOIX DU JEU EN "FACILE" ==>

        function GenererJeuFacile(){

            // Partie 9x9 avec 10 mines en tout
            // Reiniatiliser Tableau jeu
            resetDiv.style.backgroundImage = "url('../../imagesWLM/face.png')";
            let element = document.getElementById("table-jeu");
            let contenu = '';
            gNbCases = 81;
            gNbRanges = [0, 9, 18, 27, 36, 45, 54, 63, 72];
            gNbRangesD = [8, 17, 26, 35, 44, 53, 62, 71, 80];
            gEmplacementDrapeau = [];
            gIndices = [];

            element.innerHTML = '';
            element.setAttribute('class', '');

            //console.log("Partie selectionnee : facile");

            // Generer le jeu

            for(let index = 0; index < gNbCases; index++){

                element.classList.add("facile");
                //contenu += '<div id="' + index + '" ></div>';
                element.innerHTML += '<div id="' + index + '" ></div>';

            }

            //element.innerHTML = contenu;

            // Exécute la fonction pour placer les mines et les indices

            PlacerMine(10, gNbCases);

            // Ajoute l'évenèment 'click' sur chaque case

            for(let index = 0; index < gNbCases; index++){

                document.getElementById(index).addEventListener("click", VerifierCase);
                document.getElementById(index).addEventListener('contextmenu', PlacerDrapeau, false);

            }

            clearInterval(chronometre);
            gMinutes = 0;
            gSecondes = 0;
            document.getElementById("chronometre").textContent = gSecondes;
            chronometre = setInterval(Chronometre, 1000);

        }

    // <== PARTIE 05.02 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ <== CHOIX DU JEU EN "FACILE"

    // PARTIE 05.03 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CHOIX DU JEU EN "MOYEN" ==>

        function GenererJeuMoyen(){

            // Partie 16x16 avec 40 mines en tout
            // Reiniatiliser Tableau jeu
            resetDiv.style.backgroundImage = "url('../../imagesWLM/face.png')";

            let element = document.getElementById("table-jeu");
            let contenu = '';
            gNbCases = 256;
            gNbRanges = [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240];
            gNbRangesD = [15, 31, 47, 63, 79, 95, 111, 127, 143, 159, 175, 191, 207, 223, 239, 255];
            gEmplacementDrapeau = [];
            gIndices = [];

            element.innerHTML = '';
            element.setAttribute('class', '');

            console.log("Partie selectionnee : Normal");

            // Generer le jeu

            for(let index = 0; index < gNbCases; index++){

                element.classList.add("normal");
                contenu += '<div id="' + index + '" ></div>';
                // element.innerHTML += '<div id="' + index + '" ></div>';

            }

            element.innerHTML = contenu;

            // Exécute la fonction pour placer les mines et les indices

            PlacerMine(40, gNbCases);

            // Ajoute l'évenèment 'click' sur chaque case

            for(let index = 0; index < gNbCases; index++){

                document.getElementById(index).addEventListener("click", VerifierCase);
                document.getElementById(index).addEventListener('contextmenu', PlacerDrapeau, false);

            }

            clearInterval(chronometre);
            gMinutes = 0;
            gSecondes = 0;
            document.getElementById("chronometre").textContent = gSecondes;
            chronometre = setInterval(Chronometre, 1000);

        }

    // <== PARTIE 05.03 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== CHOIX DU JEU EN "MOYEN"

    // PARTIE 05.04 ==> --------------------------------------------------------------------------------------------------------------------------------------------------------------------- CHOIX DU JEU EN "DIFFICILE" ==>

        function GenererJeuDifficile(){

            // Partie 16x24 avec 100 mines en tout
            // Reiniatiliser Tableau jeu
            resetDiv.style.backgroundImage = "url('../../imagesWLM/face.png')";

            let element = document.getElementById("table-jeu");
            let contenu = '';
            gNbCases = 384;
            gNbRanges = [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320, 336, 352, 368];
            gNbRangesD = [15, 31, 47, 63, 79, 95, 111, 127, 143, 159, 175, 191, 207, 223, 239, 255, 271, 287, 303, 319, 335, 351, 367, 383];
            gEmplacementDrapeau = [];
            gIndices = [];

            element.innerHTML = '';
            element.setAttribute('class', '');

            console.log("Partie selectionnee : Difficile");

            // Generer le jeu

            for(let index = 0; index < gNbCases; index++){

                element.classList.add("difficile");
                contenu += '<div id="' + index + '" ></div>';
                // element.innerHTML += '<div id="' + index + '" ></div>';

            }

            element.innerHTML = contenu;

            // Exécute la fonction pour placer les mines et les indices

            PlacerMine(100, gNbCases);

            // Ajoute l'évenèment 'click' sur chaque case

            for(let index = 0; index < gNbCases; index++){

                document.getElementById(index).addEventListener("click", VerifierCase);
                document.getElementById(index).addEventListener('contextmenu', PlacerDrapeau, false);

            }

            clearInterval(chronometre);
            gMinutes = 0;
            gSecondes = 0;
            document.getElementById("chronometre").textContent = gSecondes;
            chronometre = setInterval(Chronometre, 1000);

        }

    // <== PARTIE 05.04 --------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== CHOIX DU JEU EN "DIFFICILE"

    // ************************************************ VOIR SI + DE DIFFICULTE *******************************************************************************

// <== PARTIE 05 ---------------------------------------------------------------------------------------------------------------------------------------------------------- <== GENERER LE JEU EN FONCTION DE LA DIFFICULTE

// PARTIE 06 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------- VERIFICATION DES PARAMETRES POUR LES MINES ==>

    function PlacerMine(nbMine, nbCase){

        // Réinitialise les variables qui concerne les mines
        // Le nombre de mine dans la partie et l'emplacement des mines ont changé

        gEmplacementMine = [];
        gCompteurDrapeau = nbMine;

        // Mettre a jour Compteur de drapeau

        document.getElementById("bomb-counter").textContent = gCompteurDrapeau;

        for(let index = 0; index < nbMine; index++)
        {
        let mine;
        let dupliquer;

        // On s'assure qu'il n'y aura pas de dupliqué dans le tableau

        do{

            mine = Math.floor(Math.random() * nbCase);
            dupliquer = gEmplacementMine.includes(mine);

        }
        while(dupliquer == true)

        // On ajoute le nouvel emplacement dans le tableau

        gEmplacementMine.push(mine);

        }

        // On tri le tableau des emplacements des mines en ordre

        gEmplacementMine = gEmplacementMine.sort(function(a, b){return a - b});

        console.log(gEmplacementMine);
    }

// <== PARTIE 06 ------------------------------------------------------------------------------------------------------------------------------------------------------------- <== VERIFICATION DES PARAMETRES POUR LES MINES

// PARTIE 07 ==> --------------------------------------------------------------------------------------------------------------------------------------------- INDICES (CHIFFRES) SUR L'EMPLACEMENT DES MINES DANS LE JEU ==>

    function PlacerIndice(id){

        // Préparer les équations pour trouver les cases à l'entoure de la case sélectionnée

        let compterMinesApproximites = 0;
        const EQUATIONS = [
        id - gNbRanges[1] - 1, // En mode facile, c'est le id moins 10. Trouve la mine au coin haut à gauche
        id - gNbRanges[1], // Trouve la mine au dessus
        id - gNbRanges[1] + 1, // Trouve la mine au coin haut à droite
        id - 1, // Trouve la mine à sa gauche
        id + 1, // Trouve la mine à sa droite
        id + gNbRanges[1] - 1, // Trouve la mine au coin bas à gauche
        id + gNbRanges[1], // Trouve la mine en dessous
        id + gNbRanges[1] + 1 //Trouve la mine au coin bas à droite
        ];
        const EQUATIONS_G = [
        id - gNbRanges[1], // Trouve la mine au dessus
        id - gNbRanges[1] + 1, // Trouve la mine au coin haut à droite
        id + 1, // Trouve la mine à sa droite
        id + gNbRanges[1], // Trouve la mine en dessous
        id + gNbRanges[1] + 1 //Trouve la mine au coin bas à droite
        ];
        const EQUATIONS_D = [
        id - gNbRanges[1] - 1, // En mode facile, c'est le id moins 10. Trouve la mine au coin haut à gauche
        id - gNbRanges[1], // Trouve la mine au dessus
        id - 1, // Trouve la mine à sa gauche
        id + gNbRanges[1] - 1, // Trouve la mine au coin bas à gauche
        id + gNbRanges[1], // Trouve la mine en dessous
        ];

        // Compter les mines autour de la case sélectionnée

        if(gNbRanges.includes(id)){ // Vérifier si la case choisi est de la colonne de gauche
        for(let x of EQUATIONS_G){
            if(gEmplacementMine.includes(x)){
                compterMinesApproximites++;
            }
        }
        } else if(gNbRangesD.includes(id)){ // Vérifier si la case choisi est de la colonne de droite
        for(let x of EQUATIONS_D){
            if(gEmplacementMine.includes(x)){
                compterMinesApproximites++;
            }
        }
        }
        else{
        for(let x of EQUATIONS){ // Chercher les huit cases autour
            if(gEmplacementMine.includes(x)){
                compterMinesApproximites++;
            }
        }
        }

        // La case sélectionnée va afficher le nombre de mine à proximité avec sa couleur

        switch(compterMinesApproximites){
        case 0: // Il active la fonction qui réactivera la fonction actuelle aux cases voisines
            CaseVide(id, EQUATIONS, EQUATIONS_D, EQUATIONS_G);
        break;
        case 1:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "blue";
        break;
        case 2:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "green";
        break;
        case 3:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "red";
        break;
        case 4:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "darkblue";
        break;
        case 5:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "darkorange";
        break;
        case 6:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "darkseagreen";
        break;
        case 7:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "lightslategrey";
        break;
        case 8:
            document.getElementById(id).textContent = compterMinesApproximites;
            document.getElementById(id).style.color = "indigo";
        break;
        }

        document.getElementById(id).classList.add("case");
        document.getElementById(id).removeEventListener('click', VerifierCase);
        document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);

    }

// <== PARTIE 07 --------------------------------------------------------------------------------------------------------------------------------------------- <== INDICES (CHIFFRES) SUR L'EMPLACEMENT DES MINES DANS LE JEU

// PARTIE 08 ==> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- DEVOILER CASES VIDES ==>

    function CaseVide(id, equations, equationsD, equationsG){

        const EQUATIONS_CHG = [ // Équations Coins Haut Gauche "0"
        id + 1, // Trouve la mine à sa droite
        id + gNbRanges[1], // Trouve la mine en dessous
        id + gNbRanges[1] + 1 //Trouve la mine au coin bas à droite
        ];
        const EQUATIONS_CHD = [ // Équations Coin Haut Droite
        id - 1, // Trouve la mine à sa gauche
        id + gNbRanges[1] - 1, // Trouve la mine au coin bas à gauche
        id + gNbRanges[1] // Trouve la mine en dessous
        ];
        const EQUATIONS_CBG = [ // Équation Coin Bas Gauche
        id - gNbRanges[1], // Trouve la mine au dessus
        id - gNbRanges[1] + 1, // Trouve la mine au coin haut à droite
        id + 1 // Trouve la mine à sa droite
        ];
        const EQUATIONS_CBD = [ // Équation Bas Droite
        id - gNbRanges[1] - 1, // En mode facile, c'est le id moins 10. Trouve la mine au coin haut à gauche
        id - gNbRanges[1], // Trouve la mine au dessus
        id - 1 // Trouve la mine à sa gauche
        ];
        const EQUATIONS_RANGE_HAUT = [ // Équation 1er rangé
        id + 1, // Trouve la mine à sa droite
        id - 1, // Trouve la mine à sa gauche
        id + gNbRanges[1], // Trouve la mine en dessous
        ];
        const EQUATIONS_RANGE_BAS = [
        id + 1, // Trouve la mine à sa droite
        id - 1, // Trouve la mine à sa gauche
        id - gNbRanges[1], // Trouve la mine au dessus
        ];

        // Si la case choisi n'a pas la classe "case" ET que le contenu de la case est vide
        if(!document.getElementById(id).classList.contains("case") && document.getElementById(id).textContent == ""){

            if(id == 0){// Il vérifie si la case sélection est celle au coin à gauche en haut
                for(let x of EQUATIONS_CHG){ 
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(id == gNbRangesD[0]){ // Il vérifie si la case est celle au coin à droite en haut
                for(let x of EQUATIONS_CHD){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(id == gNbRanges[gNbRanges.length - 1]){ // Il vérifie si la case est celle du coin en bas à gauche
                for(let x of EQUATIONS_CBG){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(id == gNbRangesD[gNbRangesD.length - 1]){ // Il vérifie si la case est celle du coin en bas à droite
                for(let x of EQUATIONS_CBD){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(id > 0 && id < gNbRangesD[0] ){ // Il vérifie si la case est dans la première rangée
                for(let x of EQUATIONS_RANGE_HAUT){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(id > gNbRanges[gNbRanges.length - 1] && id < gNbRangesD[gNbRangesD.length - 1]){ // Il vérifie si la case est dans la dernière rangée
                for(let x of EQUATIONS_RANGE_BAS){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else if(gNbRanges.includes(id)){ // Vérifier si la case choisi est de la colonne de gauche
                for(let x of equationsG){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);

                }
            }else if(gNbRangesD.includes(id)){ // Vérifier si la case choisi est de la colonne de droite
                for(let x of equationsD){
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);
                }
            }else{
                for(let x of equations){ // Chercher les huit cases autour de celle sélectionnée
                    document.getElementById(id).classList.add("case");
                    document.getElementById(id).removeEventListener('click', VerifierCase);
                    document.getElementById(id).removeEventListener('contextmenu', PlacerDrapeau);
                    PlacerIndice(x);

                }
            }
        }

    }

// <== PARTIE 08 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== DEVOILER CASES VIDES

// PARTIE 09 ==> --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- DEVOILER LA CASE ==>

    function VerifierCase(){

        // On crée des variables pour obtenir le ID de l'élément cliqué
        // et confirmer que la mine est dans la case cliquée

        let id = parseInt(this.getAttribute("id"));
        let confirmerMine = gEmplacementMine.includes(id);

        console.log("Case cliquée: " + id);

        // Si le joueur a cliqué sur la mine, c'est la fin de la partie
        // Sinon, il va afficher une cse vide ou un chiffre

        if(confirmerMine == true){

        GameOver(id);

        }else{

        PlacerIndice(id);

        }

    }

// <== PARTIE 09 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== DEVOILER LA CASE

// PARTIE 10 ==> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PLACER DRAPEAU ==>

    function PlacerDrapeau(e){

        // Sur Chrome et ses dérivés, il permet de ne pas faire apparaître un menu du clique-droit
        // Ça ne fonctionne pas avec Firefox et ses dérivés
        e.preventDefault();

        // Créer des variables afin d'avoir le id de la case cliquée-droite et la source de l'image
        id = this.getAttribute("id");
        let source = '<img src="../../imagesWLM/finish.png" alt="Drapeau" style="height:20px;width:20px;">';

        // Il vérifie si la case cliquée-droite à déjà l'image
        if(document.getElementById(id).innerHTML == source){

        // Le compteur de mines restants est rajouté et mis à jour
        // On enlève le coordonnée du drapeau retiré
        // On vide la balise HTML de la case pour faire disparître le drapeau
        // On ramène l'écouteur d'évènement 'click'

        gCompteurDrapeau++;
        document.getElementById("bomb-counter").textContent = gCompteurDrapeau;
        gEmplacementDrapeau = gEmplacementDrapeau.filter(retirerDrapeau);

        function retirerDrapeau(x){
            return x != id;
        }

        this.innerHTML = '';
        this.addEventListener('click', VerifierCase);
        console.log("Un drapeau est retiré de la case : " + id);

        }else{

        gCompteurDrapeau--;
        document.getElementById("bomb-counter").textContent = gCompteurDrapeau;
        gEmplacementDrapeau.push(parseInt(id));
        this.innerHTML = source;
        this.removeEventListener('click', VerifierCase);
        console.log("Un drapeau est déposé sur la case : " + id);

        }

        gEmplacementDrapeau.sort(function(a,b){return a-b});

        if(String(gEmplacementDrapeau) == String(gEmplacementMine)){
        Victoire();
        }

        return false;

    }

// <== PARTIE 10 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== PLACER DRAPEAU

// PARTIE 11 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ON A CLIQUE SUR UNE MINE ==>

    function GameOver(id){

        for(let index = 0; index < gEmplacementMine.length; index++){

        // On veut que la mine cliqué soit en rouge tandis que les autres restent grises

        if(gEmplacementMine[index] != id){

            document.getElementById(gEmplacementMine[index]).classList.add("case");
            document.getElementById(gEmplacementMine[index]).innerHTML = '<img src="../../imagesWLM/mine.png" alt="Mine" style="height:100%;width:100%;">';/* les autres mines */
            resetDiv.style.backgroundImage = "url('../../imagesWLM/dead-face.png')";
        }
        else{

            document.getElementById(gEmplacementMine[index]).classList.add("case");
            document.getElementById(gEmplacementMine[index]).classList.add("mineRouge");
            document.getElementById(gEmplacementMine[index]).innerHTML = '<img src="../../imagesWLM/mine.png" alt="Mine" style="height:100%;width:100%;">';/* la mine sur laquelle on a cliqué */
            resetDiv.style.backgroundImage = "url('../../imagesWLM/dead-face.png')";
        }


        }

        // On enlève l'évènement 'click' sur chaque case afin d'empêcher le joueur de continuer

        for(let index = 0; index < gNbCases; index++){

        document.getElementById(index).removeEventListener('click', VerifierCase);
        document.getElementById(index).removeEventListener('contextmenu', PlacerDrapeau);

        }

        clearInterval(chronometre);

    }

// <== PARTIE 11 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== ON A CLIQUE SUR UNE MINE

// PARTIE 12 ==> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- VICTOIRE ==>

    function Victoire(){

        // Une boite de dialogue apparaît à l'écran pour célébrer la réussite du joueur
        // On enlève les écouteurs d'évènements pour empêcher de continuer.

        alert("Bravo! Vous avez réussi!");

        for(let index = 0; index < gNbCases; index++){

        if(!document.getElementById(index).classList.contains("case") && document.getElementById(index).innerHTML != '<img src="../../imagesWLM/finish.png" alt="Drapeau" style="height:20px;width:20px;">'){
            PlacerIndice(index);
        }

        document.getElementById(index).removeEventListener('click', VerifierCase);
        document.getElementById(index).removeEventListener('contextmenu', PlacerDrapeau);

        }

        clearInterval(chronometre);

    }

// <== PARTIE 12 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== VICTOIRE

// PARTIE 13 ==> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CHRONOMETRE ==>

    function Chronometre(){

        gSecondes++;

        if(gSecondes >= 60){

        gSecondes = 0;
        gMinutes++;

        }

        if(gMinutes == 0){

        document.getElementById("chronometre").textContent = gSecondes;

        } else {

        document.getElementById("chronometre").textContent = gMinutes + " : " + gSecondes;

        }

    }

// <== PARTIE 13 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== CHRONOMETRE





