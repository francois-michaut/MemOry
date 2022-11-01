// Ici ont initialisera toutes nos fonctions Init (qui généralement poseront nos écouteurs d'évènements)

const app = {

    init: function() {

        gamePlan.init();

    }
}

document.addEventListener('DOMContentLoaded',app.init);