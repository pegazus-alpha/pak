
const { ethers } = require("hardhat");

const { expect } = require("chai");

describe("Lock", function () {
  let GestionConteneur;
  let gestionConteneur;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    GestionConteneur = await ethers.getContractFactory("Lock");
    [owner, addr1, addr2] = await ethers.getSigners();
    gestionConteneur = await GestionConteneur.deploy();
    // await gestionConteneur.deployed();
  });

  it("Devrait ajouter un checkpoint", async function () {
    const checkpointId = addr1.address;
    const checkpointNom = "Checkpoint 1";
    const ville = "Douala";
    const departement = "Littoral";
    const arrondissement = "Douala 3";
    const zone = "Zone 1";
    const longitude = 4000;
    const latitude = 5000;

    await gestionConteneur.ajouterCheckpoint(
      checkpointId,
      checkpointNom,
      ville,
      departement,
      arrondissement,
      zone,
      longitude,
      latitude
    );

    const checkpoint = await gestionConteneur.checkpoints(checkpointId);
    expect(checkpoint.nom).to.equal(checkpointNom);
    expect(checkpoint.ville).to.equal(ville);
  });

  it("Devrait ajouter un conteneur", async function () {
    const conteneurId = addr1.address;
    const contenu = "Matériaux de construction";
    const taille = "40ft";
    const couleur = "Bleu";
    const destination = "Yaoundé";
    const provenance = "Douala";
    const etat = "En transit";
    const dateExpedition = 1234567890;
    const clientId = addr2.address;
    const chauffeurId = addr1.address;

    await gestionConteneur.ajouterConteneur(
      conteneurId,
      contenu,
      taille,
      couleur,
      destination,
      provenance,
      etat,
      dateExpedition,
      clientId,
      chauffeurId
    );

    const conteneur = await gestionConteneur.conteneurs(conteneurId);
    expect(conteneur.contenu).to.equal(contenu);
    expect(conteneur.destination).to.equal(destination);
    expect(conteneur.clientId).to.equal(clientId);
  });

  it("Devrait ajouter un chauffeur", async function () {
    const chauffeurId = addr1.address;
    const nom = "Doe";
    const prenom = "John";
    const numeroPermis = "123456";
    const contactTelephone = "677123456";
    const dateNaissance = 1234567890;
    const dateEmbauche = 9876543210;
    const vehiculeId = addr2.address;

    await gestionConteneur.ajouterChauffeur(
      chauffeurId,
      nom,
      prenom,
      numeroPermis,
      contactTelephone,
      dateNaissance,
      dateEmbauche,
      vehiculeId
    );

    const chauffeur = await gestionConteneur.chauffeurs(chauffeurId);
    expect(chauffeur.nom).to.equal(nom);
    expect(chauffeur.numeroPermis).to.equal(numeroPermis);
  });

  it("Devrait modifier l'état d'un checkpoint", async function () {
    const checkpointId = addr1.address;
    const checkpointNom = "Checkpoint 1";
    const ville = "Douala";
    const departement = "Littoral";
    const arrondissement = "Douala 3";
    const zone = "Zone 1";
    const longitude = 4000;
    const latitude = 5000;

    await gestionConteneur.ajouterCheckpoint(
      checkpointId,
      checkpointNom,
      ville,
      departement,
      arrondissement,
      zone,
      longitude,
      latitude
    );

    // Vérifier que l'état initial est "NonTraverse"
    let checkpoint = await gestionConteneur.checkpoints(checkpointId);
    expect(checkpoint.etat).to.equal(0); // 0 correspond à l'état "NonTraverse"

    // Modifier l'état à "Traverse"
    await gestionConteneur.modifierEtatCheckpoint(checkpointId, 1); // 1 correspond à l'état "Traverse"

    checkpoint = await gestionConteneur.checkpoints(checkpointId);
    expect(checkpoint.etat).to.equal(1); // 1 correspond à l'état "Traverse"
  });
});
