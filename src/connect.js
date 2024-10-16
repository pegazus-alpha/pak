// connect.js
import { ethers } from "ethers";
import VOTE from './artifacts/contracts/Vote.sol/Lock.json';
const fs = require('fs');

    async function loadData() {
        try {
            // Lire le fichier JSON
            const data =await fs.readFile('./artifacts/contracts/Vote.sol/Lock.json','utf8');
            // Convertir et stocker les données
            const lockData = JSON.parse(data);
            
            // Utiliser les données
            console.log('Adresse du contrat :', lockData["LockModule#Lock"]);
            return lockData; // Vous pouvez retourner les données pour les utiliser ailleurs
        } catch (err) {
            console.error('Erreur de lecture du fichier JSON:', err);
        }
    }
const contractAddress=loadData();
// Adresse du contrat déployé
const contractABI = VOTE.abi;

// Création d'une instance de fournisseur et de signer
async function getProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
}

// Connecte à ton contrat
async function getContract() {
    const signer = await getProvider();
    return new ethers.Contract(contractAddress, contractABI, signer);
}

// Fonction pour ajouter un Checkpoint
export async function ajouterCheckpoint(_id, _nom, _ville, _departement, _arrondissement, _zone, _longitude, _latitude) {
    const contract = await getContract();
    return contract.ajouterCheckpoint(_id, _nom, _ville, _departement, _arrondissement, _zone, _longitude, _latitude);
}

// Fonction pour ajouter un Conteneur
export async function ajouterConteneur(_id, _contenu, _taille, _couleur, _destination, _provenance, _etat, _dateExpedition, _clientId, _chauffeurId) {
    const contract = await getContract();
    return contract.ajouterConteneur(_id, _contenu, _taille, _couleur, _destination, _provenance, _etat, _dateExpedition, _clientId, _chauffeurId);
}

// Fonction pour ajouter un Chauffeur
export async function ajouterChauffeur(_id, _nom, _prenom, _numeroPermis, _contactTelephone, _dateNaissance, _dateEmbauche, _vehiculeId) {
    const contract = await getContract();
    return contract.ajouterChauffeur(_id, _nom, _prenom, _numeroPermis, _contactTelephone, _dateNaissance, _dateEmbauche, _vehiculeId);
}

// Fonction pour ajouter un Client
export async function ajouterClient(_id, _nomComplet, _adresse, _telephone, _email, _typeClient, _localisation) {
    const contract = await getContract();
    return contract.ajouterClient(_id, _nomComplet, _adresse, _telephone, _email, _typeClient, _localisation);
}

// Fonction pour ajouter un Collecteur
export async function ajouterCollecteur(_id, _nom, _prenom, _poste, _contactTelephone, _email, _heuresService) {
    const contract = await getContract();
    return contract.ajouterCollecteur(_id, _nom, _prenom, _poste, _contactTelephone, _email, _heuresService);
}

// Fonction pour ajouter un Contrôleur
export async function ajouterControleur(_id, _nom, _prenom, _numeroAgent, _contactTelephone, _email, _heuresService) {
    const contract = await getContract();
    return contract.ajouterControleur(_id, _nom, _prenom, _numeroAgent, _contactTelephone, _email, _heuresService);
}

// Fonction pour ajouter un Véhicule
export async function ajouterVehicule(_id, _plaqueImmatriculation, _marque, _modele, _taille, _chauffeurId) {
    const contract = await getContract();
    return contract.ajouterVehicule(_id, _plaqueImmatriculation, _marque, _modele, _taille, _chauffeurId);
}

// Fonction pour ajouter un Trajet
export async function ajouterTrajet(_id, _checkpoints, _dateDebut, _dateFin, _conteneurId, _chauffeurId) {
    const contract = await getContract();
    return contract.ajouterTrajet(_id, _checkpoints, _dateDebut, _dateFin, _conteneurId, _chauffeurId);
}

// Fonction pour modifier l'état d'un Checkpoint
export async function modifierEtatCheckpoint(_checkpointId, _nouvelEtat) {
    const contract = await getContract();
    return contract.modifierEtatCheckpoint(_checkpointId, _nouvelEtat);
}

// Fonction pour vérifier un Client
export async function verifierClient(_clientId) {
    const contract = await getContract();
    return contract.verifierClient(_clientId);
}

// Fonction pour vérifier un Chauffeur
export async function verifierChauffeur(_chauffeurId) {
    const contract = await getContract();
    return contract.verifierChauffeur(_chauffeurId);
}

// Fonction pour vérifier un Contrôleur
export async function verifierControleur(_controleurId) {
    const contract = await getContract();
    return contract.verifierControleur(_controleurId);
}

// Fonction pour vérifier un Véhicule
export async function verifierVehicule(_vehiculeId) {
    const contract = await getContract();
    return contract.verifierVehicule(_vehiculeId);
}

// Fonction pour vérifier un Conteneur
export async function verifierConteneur(_conteneurId) {
    const contract = await getContract();
    return contract.verifierConteneur(_conteneurId);
}

// Fonction pour vérifier un Trajet
export async function verifierTrajet(_trajetId) {
    const contract = await getContract();
    return contract.verifierTrajet(_trajetId);
}
