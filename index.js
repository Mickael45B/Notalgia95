            /* SCRIPT 1 ==> -------------------------------------------------------------------------------------------------------------------------------------------------------------- afficher / masquer le modal ==> */
            const LesBouttons = document.getElementsByTagName("button");
            const fermer = document.getElementById("fermer");
            const modal = document.getElementById("modal");
            //const modalBoite = document.getElementById("modalBoite");

            // Boucle pour ajouter l'événement à chaque bouton
            for (let i = 0; i < LesBouttons.length; i++) {
                LesBouttons[i].addEventListener('click', openTimer);
            }

            // Déclaration correcte de la fonction
            function openTimer() { 
                modal.classList.add("ouvert");
            }

            fermer.addEventListener('click', () =>{
                modal.classList.remove("ouvert");
            });




            var buttons = document.getElementsByClassName("P1-1-1_Application");
            var enteteModal = document.getElementsByClassName("title-bar-text")[0]; // Prendre le premier élément

            // Parcourir chaque bouton pour ajouter un listener
            Array.from(buttons).forEach(function(button) {
                button.addEventListener("click", function() {
                    // Récupérer l'ID du modal et le fichier à charger (data-nomdujeu)
                    var fileToLoad = this.getAttribute("data-nomdujeu");
                    var fichier = "./miniJeu/" + fileToLoad + "/" + fileToLoad + ".html";

                    // Charger le fichier dans l'iframe
                    document.getElementById("corpModal").src = fichier;

                    // Mettre à jour l'entête du modal
                    enteteModal.textContent = "Jeu : " + fileToLoad;


                    var iframeLoadTimeout = setTimeout(function() {
                        document.getElementById("corpModal").src = "ERREUR404.html";  // Charger la page d'erreur si timeout
                    }, 5000); // Délai de 5 secondes

                    // Si le fichier se charge correctement, annuler le timeout
                    document.getElementById("corpModal").onload = function() {
                        clearTimeout(iframeLoadTimeout);
                    };

                });
            });

        /* <== SCRIPT 1 -------------------------------------------------------------------------------------------------------------------------------------------------------------- afficher / masquer le modal ==> */


        /* SCRIPT 2 ==> --------------------------------------------------------------------------------------------------------------------------------------------------  déplacer + agrandir / réduire le modal ==> */

            let isResizing = false; // Indicateur de redimensionnement
            let isDragging = false; // Indicateur de déplacement
            let offsetX = 0;
            let offsetY = 0;
            let initialWidth = 0;
            let initialHeight = 0;
            let startX = 0;
            let startY = 0;

            // Pour déplacer la modal (comme avant)
            modal.addEventListener("mousedown", (e) => {
                // Vérifie si l'utilisateur clique sur un coin pour redimensionner
                if (isOnResizeHandle(e)) {
                    isResizing = true;
                    initialWidth = modal.offsetWidth;
                    initialHeight = modal.offsetHeight;
                    startX = e.clientX;
                    startY = e.clientY;
                    modal.classList.add('resizing');
                } else {
                    isDragging = true;
                    offsetX = e.clientX - modal.offsetLeft;
                    offsetY = e.clientY - modal.offsetTop;
                    modal.style.cursor = "grabbing";
                }
            });

            document.addEventListener("mouseup", () => {
                isDragging = false;
                isResizing = false;
                modal.style.cursor = "default";
                modal.classList.remove('resizing');
            });

            document.addEventListener("mousemove", (e) => {
                if (isDragging && !isResizing) {
                    const x = e.clientX - offsetX;
                    const y = e.clientY - offsetY;
                    modal.style.left = `${x}px`;
                    modal.style.top = `${y}px`;
                } else if (isResizing) {
                    const width = initialWidth + (e.clientX - startX);
                    const height = initialHeight + (e.clientY - startY);
                    modal.style.width = `${width}px`;
                    modal.style.height = `${height}px`;
                } else if (isOnResizeHandle(e)) {
                    modal.style.cursor = "se-resize"; // Change le curseur si sur la zone de redimensionnement
                } else {
                    modal.style.cursor = "default";
                }
            });

            // Vérifie si la souris est proche du coin inférieur droit pour redimensionner
            function isOnResizeHandle(e) {
                const rect = modal.getBoundingClientRect();
                const offset = 10; // Taille de la "zone de redimensionnement" (10px ici)
                return e.clientX >= rect.right - offset && e.clientY >= rect.bottom - offset;
            }

        /* <== SCRIPT 2 --------------------------------------------------------------------------------------------------------------------------------------------------- déplacer + agrandir / réduire le modal ==> */

        /* SCRIPT 3 ==> ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- afficher l'heure ==> */
            setInterval(() => {

            const clock = document.querySelector('.heure');

            let sec = new Date().getSeconds();
            let min = new Date().getMinutes();
            let hr = new Date().getHours();

            let day = hr >= 12 ? 'PM' : 'AM';

            sec < 10 ? sec = '0' + sec : sec;
            min < 10 ? min = '0' + min : min;
            hr < 10 ? hr = '0' + hr : hr;

            clock.textContent = hr + ':' + min ;

            }, 1000);
        /* <== SCRIPT 3 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- <== afficher l'heure */



























