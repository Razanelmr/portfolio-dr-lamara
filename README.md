# Portfolio Professionnel - Dr. Lamara Radja

## Description

Site web portfolio professionnel pour le Dr. Lamara Radja, médecin généraliste à Constantine. Le site présente son parcours, ses compétences, ses services et permet aux patients de le contacter facilement.

## Caractéristiques

### Design
- **Palette de couleurs** : Blanc, bleu ciel et bleu roi
- **Style** : Moderne, professionnel et responsive
- **Typographie** : Élégante et lisible
- **Icônes** : Médicales modernes (stéthoscope, cœur, hôpital, etc.)

### Sections du site

1. **Page d'accueil**
   - Grande illustration médicale moderne
   - Slogan professionnel
   - Boutons d'action (Prendre rendez-vous, En savoir plus)
   - Informations de contact rapides

2. **Présentation du médecin**
   - Biographie professionnelle
   - Formation et diplômes
   - Stages spécialisés
   - Spécialités médicales
   - Langues parlées

3. **Expérience professionnelle**
   - Postes actuels et passés
   - Descriptions détaillées des responsabilités
   - Chronologie claire

4. **Compétences**
   - Compétences techniques avec barres de progression
   - Compétences humaines (empathie, communication, rigueur)
   - Pourcentages de maîtrise

5. **Services médicaux**
   - Consultations générales
   - Médecine préventive
   - Gestion des maladies chroniques
   - Médecine d'urgence
   - Médecine du sport
   - Soins spécialisés

6. **Contact et localisation**
   - Formulaire de contact sécurisé
   - Informations de contact complètes
   - Horaires de consultation
   - Carte de localisation

7. **Footer**
   - Liens vers réseaux sociaux
   - Mentions légales
   - Liens rapides

### Fonctionnalités

- **Navigation fluide** : Menu sticky avec scroll automatique
- **Responsive design** : Adapté mobile et desktop
- **Animations** : Transitions douces et effets hover
- **Accessibilité** : Focus states et navigation clavier
- **Performance** : Optimisé pour le chargement rapide

## Technologies utilisées

- **React** : Framework JavaScript
- **Tailwind CSS** : Framework CSS utilitaire
- **Shadcn/UI** : Composants UI modernes
- **Lucide Icons** : Icônes vectorielles
- **Vite** : Bundler et serveur de développement

## Installation et développement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Installation
```bash
cd portfolio-dr-lamara
npm install
# ou
pnpm install
```

### Développement
```bash
npm run dev
# ou
pnpm run dev
```

Le site sera accessible à l'adresse : http://localhost:5173

### Build de production
```bash
npm run build
# ou
pnpm run build
```

## Structure du projet

```
portfolio-dr-lamara/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   │   ├── medical-hero.jpg
│   │   ├── doctor-profile.jpg
│   │   ├── medical-icons.jpg
│   │   ├── stethoscope-icon.jpg
│   │   └── heart-icon.jpg
│   ├── components/
│   │   └── ui/            # Composants UI (shadcn/ui)
│   ├── App.jsx            # Composant principal
│   ├── App.css            # Styles personnalisés
│   ├── index.css          # Styles globaux
│   └── main.jsx           # Point d'entrée
├── index.html             # Template HTML
├── package.json           # Dépendances et scripts
└── README.md             # Documentation
```

## Personnalisation

### Modifier les informations personnelles

1. **Informations de contact** : Modifier les variables dans `App.jsx`
2. **Expériences** : Mettre à jour le tableau `experiences`
3. **Compétences** : Modifier le tableau `competences`
4. **Services** : Adapter le tableau `services`

### Changer les couleurs

Les couleurs sont définies dans `App.css` avec les variables CSS :
- `--primary` : Bleu roi principal
- `--secondary` : Bleu ciel clair
- `--accent` : Bleu ciel

### Ajouter des images

1. Placer les nouvelles images dans `src/assets/`
2. Les importer dans `App.jsx`
3. Mettre à jour les références

### Modifier le contenu

Tout le contenu textuel se trouve dans le composant `App.jsx` et peut être facilement modifié :
- Textes de présentation
- Descriptions d'expériences
- Noms des compétences
- Descriptions des services

## Déploiement

Le site peut être déployé sur diverses plateformes :
- Netlify
- Vercel
- GitHub Pages
- Serveur web traditionnel

Après le build (`npm run build`), déployer le contenu du dossier `dist/`.

## Support et maintenance

### Mise à jour des dépendances
```bash
npm update
# ou
pnpm update
```

### Ajout de nouvelles fonctionnalités
Le projet utilise des technologies modernes et peut être facilement étendu :
- Ajout de nouvelles pages avec React Router
- Intégration d'un CMS headless
- Ajout d'un système de réservation en ligne
- Intégration avec des APIs médicales

## Contact technique

Pour toute question technique concernant le site, contacter l'équipe de développement.

## Licence

Ce projet est développé spécifiquement pour le Dr. Lamara Radja. Tous droits réservés.

