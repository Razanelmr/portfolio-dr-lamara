# Guide de Modification Facile - Portfolio Dr. Lamara Radja

## Comment modifier facilement votre site

Ce guide vous explique comment modifier les éléments principaux de votre site web sans connaissances techniques approfondies.

## 📝 Modifier vos informations personnelles

### Coordonnées de contact
**Fichier à modifier** : `src/App.jsx`

Recherchez ces lignes et modifiez les informations :
```javascript
// Téléphones
<span className="text-gray-700">07 98 13 03 46</span>
<span className="text-gray-700">05 57 86 15 28</span>

// Email
<span className="text-gray-700">lmr.radja@gmail.com</span>

// Ville
<span className="text-gray-700">Constantine, Algérie</span>
```

### Horaires de consultation
Recherchez la section "Horaires de Consultation" et modifiez :
```javascript
<span className="text-blue-600 font-medium">8h00 - 18h00</span>
<span className="text-blue-600 font-medium">8h00 - 14h00</span>
```

## 🏥 Modifier vos expériences professionnelles

**Fichier à modifier** : `src/App.jsx`

Recherchez le tableau `experiences` et modifiez/ajoutez vos expériences :

```javascript
const experiences = [
  {
    title: "Votre nouveau poste",
    location: "Votre lieu de travail",
    period: "Date de début - Date de fin",
    description: "Description de vos responsabilités et missions"
  },
  // Ajoutez d'autres expériences ici
]
```

## 💪 Modifier vos compétences

**Fichier à modifier** : `src/App.jsx`

Recherchez le tableau `competences` et ajustez les niveaux (0-100) :

```javascript
const competences = [
  { name: "Médecine Générale", level: 95, icon: Stethoscope },
  { name: "Votre nouvelle compétence", level: 85, icon: Heart },
  // Modifiez les niveaux selon votre expertise
]
```

## 🩺 Modifier vos services

**Fichier à modifier** : `src/App.jsx`

Recherchez le tableau `services` et personnalisez :

```javascript
const services = [
  {
    title: "Nom de votre service",
    description: "Description de ce que vous proposez",
    icon: Stethoscope // Choisissez une icône appropriée
  },
  // Ajoutez d'autres services
]
```

## 🎨 Changer les couleurs

**Fichier à modifier** : `src/App.css`

Pour changer la palette de couleurs, modifiez ces variables :

```css
:root {
  --primary: oklch(0.4 0.15 240);     /* Bleu roi principal */
  --secondary: oklch(0.85 0.05 220);   /* Bleu ciel clair */
  --accent: oklch(0.7 0.1 220);       /* Bleu ciel */
}
```

### Couleurs alternatives suggérées :
- **Vert médical** : `oklch(0.5 0.15 150)`
- **Bleu marine** : `oklch(0.3 0.15 250)`
- **Violet médical** : `oklch(0.5 0.15 280)`

## 🖼️ Changer les images

### Remplacer l'image principale
1. Placez votre nouvelle image dans le dossier `src/assets/`
2. Renommez-la ou modifiez l'import dans `App.jsx` :

```javascript
import medicalHero from './assets/votre-nouvelle-image.jpg'
```

### Remplacer la photo de profil
1. Ajoutez votre photo dans `src/assets/`
2. Modifiez l'import :

```javascript
import doctorProfile from './assets/votre-photo.jpg'
```

## 📱 Modifier le titre du site

**Fichier à modifier** : `index.html`

Changez le titre dans la balise `<title>` :
```html
<title>Dr. Votre Nom - Votre Spécialité | Portfolio Professionnel</title>
```

## 📝 Modifier les textes de présentation

**Fichier à modifier** : `src/App.jsx`

### Slogan principal
Recherchez et modifiez :
```javascript
<p className="text-lg text-gray-600 leading-relaxed">
  Votre nouvelle description professionnelle...
</p>
```

### Spécialités
Recherchez la section badges et modifiez :
```javascript
<Badge variant="secondary">Votre spécialité</Badge>
```

## 🔧 Tester vos modifications

Après chaque modification :

1. **Sauvegardez** le fichier modifié
2. **Vérifiez** dans votre navigateur (le site se met à jour automatiquement)
3. **Testez** sur mobile et desktop

## ⚠️ Conseils importants

### ✅ À faire :
- Toujours sauvegarder une copie avant modification
- Tester après chaque changement
- Garder les guillemets et virgules en place
- Respecter l'indentation

### ❌ À éviter :
- Supprimer des accolades `{}` ou crochets `[]`
- Modifier les noms de variables (en anglais)
- Supprimer des virgules importantes
- Modifier les imports en haut du fichier

## 🆘 En cas de problème

Si le site ne fonctionne plus après une modification :

1. **Annulez** la dernière modification (Ctrl+Z)
2. **Sauvegardez** et vérifiez
3. **Consultez** la console du navigateur (F12) pour voir les erreurs
4. **Restaurez** depuis votre sauvegarde si nécessaire

## 📞 Support technique

Pour des modifications plus complexes ou en cas de problème, contactez votre développeur web.

## 🚀 Déploiement des modifications

Une fois vos modifications terminées et testées :

1. **Construisez** le site : `npm run build`
2. **Déployez** le contenu du dossier `dist/` sur votre serveur web
3. **Vérifiez** que tout fonctionne en ligne

---

*Ce guide couvre les modifications les plus courantes. Pour des changements plus avancés, référez-vous au README.md ou contactez un développeur.*

