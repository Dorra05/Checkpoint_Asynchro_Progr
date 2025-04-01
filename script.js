console.log("Script chargé avec succès !");

// sync/Await afficher chaque valeur avec 1s d'intervalle
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);  // Affiche la valeur actuelle
        await new Promise(resolve => setTimeout(resolve, 1000));  // Attendre 1 seconde
    }
}

//  Attendre un appel API
async function waitCall() {
    const fakeApiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Données reçues de l\'API');
        }, 2000); // réponse après 2 secondes
    });

    const data = await fakeApiCall;
    console.log(data);  // Affichage des données
}

// Gérer les erreurs avec Async/Await
async function waitCallWithError() {
    const fakeApiCall = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Erreur lors de l\'appel API');
        }, 2000); // erreur après 2 secondes
    });

    try {
        const data = await fakeApiCall;
        console.log(data);
    } catch (error) {
        console.log('Une erreur s\'est produite :', error);
    }
}

// requêtes simultanées Promise.all
async function concurrentRequests() {
    const apiCall1 = new Promise((resolve) => setTimeout(() => resolve('Réponse API 1'), 2000));
    const apiCall2 = new Promise((resolve) => setTimeout(() => resolve('Réponse API 2'), 3000));

    const results = await Promise.all([apiCall1, apiCall2]);  //Attendre les 2 appels simultanés
    console.log('Résultats combinés:', results);
}

// Attendre des appels parallèles fetch simulé
async function parallelCalls(urls) {
    const fetchData = (url) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(`Données reçues de ${url}`), 1000);  // appel API
        });
    };

    const promises = urls.map(url => fetchData(url));  // Création des promesses pour chaque URL
    const responses = await Promise.all(promises);  // Attendre toutes les requêtes

    console.log('Réponses combinées:', responses);
}

// Fonction principale qui exécute tout dans l'ordre
async function main() {
    await iterateWithAsyncAwait([1, 2, 3, 4]);  // Attendre que la boucle soit terminée
    await waitCall();  // Attendre l'appel API
    await waitCallWithError();  // Attendre la gestion d'erreur
    await concurrentRequests();  // Attendre les requêtes simultanées
    await parallelCalls(['https://api.dorra1.com', 'https://api.dorra2.com']);  // Attendre les appels parallèles
}

//Démarrer le script avec node script.js
main();
