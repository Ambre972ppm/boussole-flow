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
