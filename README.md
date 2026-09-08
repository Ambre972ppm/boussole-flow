# Boussole Flow — Projet complet V9.1

## Fichiers
- `index.html`
- `styles.css`
- `app.js`
- `CAHIER_DES_CHARGES.md`
- `README.md`

## Correctif principal
L'import PDF configure maintenant correctement le worker PDF.js :
`GlobalWorkerOptions.workerSrc`.

## Test navigateur
Déployer le contenu de ce dossier sur la branche GitHub `V6-preview`,
puis ouvrir la Preview Deployment Vercel dans Safari ou Chrome.

## Import CV
Formats testables : PDF avec texte sélectionnable, DOCX, TXT.

Un PDF scanné (image uniquement) nécessitera un futur module OCR.


## Nouveautés V9.2
- sous-centres d’intérêt beaucoup plus riches
- champ « Autre / préciser » dans chaque passion forte
- option LinkedIn réellement utilisable via archive ZIP / CSV
- expériences et dates LinkedIn préremplies puis modifiables
- écran dédié expliquant la future connexion LinkedIn directe

### Pour récupérer ses données LinkedIn
Dans LinkedIn : Paramètres et confidentialité → Confidentialité des données → Télécharger vos données.
L’utilisateur peut ensuite importer l’archive reçue dans Boussole Flow.


## V9.3 — Configuration Vercel

### LinkedIn direct
Créer une application LinkedIn Developer, activer Sign In with LinkedIn using OpenID Connect,
puis définir dans Vercel :
- `LINKEDIN_CLIENT_ID`
- `LINKEDIN_CLIENT_SECRET`
- `APP_URL`

Ajouter exactement cette redirect URL dans l’application LinkedIn :
`https://VOTRE-DOMAINE/api/linkedin-callback`

### Envoi email
Ajouter l’intégration Resend ou créer une clé API, puis définir :
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (ex. `Boussole Flow <bilan@votredomaine.fr>`)

### PDF
Le bouton « Télécharger mon bilan complet (PDF) » ouvre un rapport complet prêt à être
enregistré en PDF depuis la boîte de dialogue d’impression du navigateur.
