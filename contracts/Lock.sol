// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Lock {
    
    // Enumération pour l'état d'un checkpoint
    enum Etat_checkpoint { NonTraverse, Traverse }

    // Structure pour représenter un Checkpoint
    struct Checkpoint {
        address id;
        string nom;
        string ville;
        string departement;
        string arrondissement;
        string zone;
        int256 longitude;
        int256 latitude;
        uint256 dateCreation;
        Etat_checkpoint etat; // Nouvel état du checkpoint (traversé ou non)
    }

    // Structure pour représenter un Conteneur
    struct Conteneur {
        address id;
        string contenu;
        string taille;
        string couleur;
        string destination;
        string provenance;
        string etat;
        uint256 dateExpedition;
        address clientId;
        address chauffeurId;
    }

    // Structure pour représenter un Chauffeur
    struct Chauffeur {
        address id;
        string nom;
        string prenom;
        string numeroPermis;
        string contactTelephone;
        uint256 dateNaissance;
        uint256 dateEmbauche;
        address vehiculeId;
    }

    // Structure pour représenter un Client
    struct Client {
        address id;
        string nomComplet;
        string adresse;
        string telephone;
        string email;
        string typeClient;
        string localisation;
        uint256 dateEnregistrement;
    }

    // Structure pour représenter un Collecteur (au port)
    struct Collecteur {
        address id;
        string nom;
        string prenom;
        string poste;
        string contactTelephone;
        string email;
        uint256 heuresService;
    }

    // Structure pour représenter un Contrôleur (à la destination)
    struct Controleur {
        address id;
        string nom;
        string prenom;
        string numeroAgent;
        string contactTelephone;
        string email;
        uint256 heuresService;
    }

    // Structure pour représenter un Véhicule
    struct Vehicule {
        address id;
        string plaqueImmatriculation;
        string marque;
        string modele;
        string taille;
        address chauffeurId;
    }

    // Structure pour représenter un Trajet avec une liste de checkpoints
    struct Trajet {
        address id;
        address[] checkpoints; // Liste des checkpoints traversés
        uint256 dateDebut;
        uint256 dateFin;
        address conteneurId;
        address chauffeurId;
    }

    // Mappings pour stocker les informations
    mapping(address => Checkpoint) public checkpoints;
    mapping(address => Conteneur) public conteneurs;
    mapping(address => Chauffeur) public chauffeurs;
    mapping(address => Client) public clients;
    mapping(address => Collecteur) public collecteurs;
    mapping(address => Controleur) public controleurs;
    mapping(address => Vehicule) public vehicules;
    mapping(address => Trajet) public trajets;

    // Fonction pour ajouter un Checkpoint
    function ajouterCheckpoint(
        address _id,
        string memory _nom,
        string memory _ville,
        string memory _departement,
        string memory _arrondissement,
        string memory _zone,
        int256 _longitude,
        int256 _latitude
    ) public {
        checkpoints[_id] = Checkpoint(
            _id,
            _nom,
            _ville,
            _departement,
            _arrondissement,
            _zone,
            _longitude,
            _latitude,
            block.timestamp,
            Etat_checkpoint.NonTraverse // Initialement non traversé
        );
    }

    // Fonction pour ajouter un Conteneur
    function ajouterConteneur(
        address _id,
        string memory _contenu,
        string memory _taille,
        string memory _couleur,
        string memory _destination,
        string memory _provenance,
        string memory _etat,
        uint256 _dateExpedition,
        address _clientId,
        address _chauffeurId
    ) public {
        conteneurs[_id] = Conteneur(
            _id,
            _contenu,
            _taille,
            _couleur,
            _destination,
            _provenance,
            _etat,
            _dateExpedition,
            _clientId,
            _chauffeurId
        );
    }

    // Fonction pour ajouter un Chauffeur
    function ajouterChauffeur(
        address _id,
        string memory _nom,
        string memory _prenom,
        string memory _numeroPermis,
        string memory _contactTelephone,
        uint256 _dateNaissance,
        uint256 _dateEmbauche,
        address _vehiculeId
    ) public {
        chauffeurs[_id] = Chauffeur(
            _id,
            _nom,
            _prenom,
            _numeroPermis,
            _contactTelephone,
            _dateNaissance,
            _dateEmbauche,
            _vehiculeId
        );
    }

    // Fonction pour ajouter un Client
    function ajouterClient(
        address _id,
        string memory _nomComplet,
        string memory _adresse,
        string memory _telephone,
        string memory _email,
        string memory _typeClient,
        string memory _localisation
    ) public {
        clients[_id] = Client(
            _id,
            _nomComplet,
            _adresse,
            _telephone,
            _email,
            _typeClient,
            _localisation,
            block.timestamp
        );
    }

    // Fonction pour ajouter un Collecteur
    function ajouterCollecteur(
        address _id,
        string memory _nom,
        string memory _prenom,
        string memory _poste,
        string memory _contactTelephone,
        string memory _email,
        uint256 _heuresService
    ) public {
        collecteurs[_id] = Collecteur(
            _id,
            _nom,
            _prenom,
            _poste,
            _contactTelephone,
            _email,
            _heuresService
        );
    }

    // Fonction pour ajouter un Contrôleur
    function ajouterControleur(
        address _id,
        string memory _nom,
        string memory _prenom,
        string memory _numeroAgent,
        string memory _contactTelephone,
        string memory _email,
        uint256 _heuresService
    ) public {
        controleurs[_id] = Controleur(
            _id,
            _nom,
            _prenom,
            _numeroAgent,
            _contactTelephone,
            _email,
            _heuresService
        );
    }

    // Fonction pour ajouter un Véhicule
    function ajouterVehicule(
        address _id,
        string memory _plaqueImmatriculation,
        string memory _marque,
        string memory _modele,
        string memory _taille,
        address _chauffeurId
    ) public {
        vehicules[_id] = Vehicule(
            _id,
            _plaqueImmatriculation,
            _marque,
            _modele,
            _taille,
            _chauffeurId
        );
    }

    // Fonction pour ajouter un Trajet avec une liste de checkpoints
    function ajouterTrajet(
        address _id,
        address[] memory _checkpoints,
        uint256 _dateDebut,
        uint256 _dateFin,
        address _conteneurId,
        address _chauffeurId
    ) public {
        trajets[_id] = Trajet(
            _id,
            _checkpoints, // Liste des checkpoints traversés
            _dateDebut,
            _dateFin,
            _conteneurId,
            _chauffeurId
        );
    }

    // Fonction pour modifier l'état d'un checkpoint (traversé ou non traversé)
    function modifierEtatCheckpoint(address _checkpointId, Etat_checkpoint _nouvelEtat) public {
        // require(checkpoints[_checkpointId].id != address(0), "Checkpoint inexistant");
        checkpoints[_checkpointId].etat = _nouvelEtat;
    }
}
