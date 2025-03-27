//Itérer avec Async/Await
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    console.log(value);  // Enregistrer la valeur
    await new Promise(resolve => setTimeout(resolve, 1000));  // Attendre 1 seconde
  }
}

// Exemple d'utilisation
iterateWithAsyncAwait([1, 2, 3, 4]);

//Attendre un appel
async function waitCall() {
  const fakeApiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Données reçues de l\'API');
    }, 2000); // Simuler une réponse après 2 secondes
  });

  const data = await fakeApiCall;  // Attendre la réponse de l'API
  console.log(data);  // Enregistrer les données
}

// Exemple d'utilisation
waitCall();

//Gérer les erreurs avec Async/Await
async function waitCall() {
  const fakeApiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Erreur lors de l\'appel API');
    }, 2000); // Simuler une erreur après 2 secondes
  });

  try {
    const data = await fakeApiCall;  // Attendre  l'API
    console.log(data);  // Enregistrer les données
  } catch (error) {
    console.log('Une erreur s\'est produite :', error);  // Enregistrer l'erreur
  }
}

// Exemple d'utilisation
waitCall();

//Attente de requêtes simultanées
async function concurrentRequests() {
  const apiCall1 = new Promise((resolve) => setTimeout(() => resolve('Réponse API 1'), 2000));
  const apiCall2 = new Promise((resolve) => setTimeout(() => resolve('Réponse API 2'), 3000));

  const results = await Promise.all([apiCall1, apiCall2]);  // Attendre les deux appels simultanés
  console.log('Résultats combinés:', results);
}

// Exemple d'utilisation
concurrentRequests();

//Attente des appels parallèles
async function parallelCalls(urls) {
  const fetchData = (url) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Données reçues de ${url}`), 1000);  // Simuler une requête HTTP
    });
  };

  const promises = urls.map(url => fetchData(url));  // tableau de promesses pour chaque URL
  const responses = await Promise.all(promises);  // Attendre que les requêtes soient terminées

  console.log('Réponses combinées:', responses);
}

// Exemple d'utilisation
parallelCalls(['https://api.dorra1.com', 'https://api.dorra2.com']);

