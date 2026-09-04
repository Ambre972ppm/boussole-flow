const $=s=>document.querySelector(s);
const dims={N:'Nouveauté',D:'Profondeur',H:'Humain',C:'Création',A:'Analyse',X:'Action',U:'Autonomie',S:'Structure',I:'Impact'};
const qs=[
['Flow','Quand un sujet te passionne, que se passe-t-il le plus souvent ?','Pense à tes vraies périodes de passion, pas seulement au travail.',
 [['Je peux y passer des heures sans voir le temps passer',{D:3,N:1}],['Je veux lire, comparer, tester et comprendre tout le sujet',{A:2,D:2}],['J’ai immédiatement envie de créer quelque chose autour',{C:3,X:1}],['J’ai envie d’en parler et d’embarquer les autres',{H:2,I:2}]]],
['Énergie','Qu’est-ce qui te donne le plus d’énergie dans une journée ?','',
 [['Découvrir quelque chose de nouveau',{N:3}],['Résoudre un problème difficile',{A:3,D:1}],['Créer quelque chose qui n’existait pas',{C:3}],['Voir que j’ai vraiment aidé quelqu’un',{H:2,I:2}]]],
['Ennui','Qu’est-ce qui t’éteint le plus vite ?','',
 [['La répétition',{N:3}],['Le manque de sens',{I:3}],['Être micro-managé·e',{U:3}],['Ne plus apprendre',{D:2,N:1}]]],
['Problèmes','Face à une situation confuse, ton premier réflexe est plutôt…','',
 [['Comprendre le mécanisme caché',{A:3}],['Tester plusieurs solutions',{X:2,C:1}],['Rassembler les bonnes personnes',{H:2,I:1}],['Créer une méthode claire',{S:3}]]],
['Liberté','Dans ton travail idéal, tu aimerais surtout pouvoir…','',
 [['Choisir comment atteindre l’objectif',{U:3}],['Changer souvent de sujet ou de projet',{N:3}],['Devenir expert·e sur certains sujets',{D:3}],['Décider et agir rapidement',{X:2,I:1}]]],
['Multipotentialité','L’idée de choisir un seul domaine pour longtemps…','',
 [['M’angoisse : j’ai besoin de plusieurs univers',{N:3,C:1}],['Me convient si je continue à apprendre en profondeur',{D:3}],['Me convient si les problématiques changent',{N:2,A:1}],['M’importe peu si mon rôle évolue vraiment',{I:2,U:1}]]],
['Équipe','Dans un groupe, tu deviens souvent…','',
 [['La personne qui comprend les gens',{H:3}],['Celle qui apporte des idées nouvelles',{C:3}],['Celle qui voit les incohérences',{A:3}],['Celle qui fait avancer le groupe',{X:2,I:1}]]],
['Organisation','Quelle phrase te ressemble le plus ?','',
 [['J’adore créer des systèmes mais pas toujours les suivre',{S:1,C:1,N:1}],['J’avance mieux avec un cadre extérieur et des échéances',{S:2,X:1}],['Je suis naturellement régulier·ère et méthodique',{S:3}],['Je fonctionne par grosses vagues d’énergie',{D:2,X:1,N:1}]]],
['Réussite','Quel compliment te ferait le plus plaisir ?','',
 [['Tu vois ce que les autres ne voient pas',{A:3}],['Avec toi, on a envie d’essayer',{H:1,I:2}],['Tu as des idées incroyables',{C:3}],['Tu rends les choses possibles',{X:2,S:1}]]],
['Apprentissage','Tu apprends le mieux quand…','',
 [['Je teste directement',{X:3}],['Je plonge intensément dans le sujet',{D:3}],['Je construis quelque chose avec ce que j’apprends',{C:2,X:1}],['J’échange et je reçois du feedback',{H:2,S:1}]]],
['Sens','Pour tenir plusieurs années dans un métier, il faut surtout…','',
 [['Sentir que j’améliore quelque chose',{I:3}],['Pouvoir évoluer et explorer',{N:3}],['Avoir une expertise à creuser',{D:3}],['Pouvoir créer à ma manière',{C:2,U:1}]]],
['Pression','Quand une échéance approche…','',
 [['Je deviens soudain très efficace',{X:2,D:1}],['J’aimerais avoir avancé plus régulièrement',{S:2}],['Je tranche vite les priorités',{I:1,X:2}],['Je peux perdre l’intérêt si le défi est déjà résolu',{N:2,D:1}]]],
['Mission','Laquelle de ces missions t’attire le plus ?','',
 [['Inventer une nouvelle expérience ou un service',{C:2,H:1,N:1}],['Résoudre un problème que personne ne comprend',{A:2,D:2}],['Lancer un projet de zéro',{X:2,C:1,I:1}],['Créer un déclic chez quelqu’un',{H:3,I:1}]]],
['Travail-plaisir','Laquelle de ces phrases te parle le plus ?','',
 [['Être payé·e pour ma curiosité',{N:2,D:1}],['Transformer mes idées en choses réelles',{C:2,X:1}],['Résoudre des énigmes utiles',{A:2,I:1}],['Avoir un impact concret sur les gens ou les projets',{H:1,I:2}]]],
['Rythme','Quel rythme te conviendrait le mieux ?','',
 [['Des projets courts avec renouvellement fréquent',{N:3,X:1}],['Des cycles longs avec vraie profondeur',{D:3}],['Un mélange des deux selon les sujets',{N:1,D:1,U:1}],['Un rythme stable et prévisible',{S:3}]]],
['Décision','Pour prendre une décision importante, tu préfères…','',
 [['Explorer plusieurs options puis sentir la meilleure',{N:1,C:1,A:1}],['Analyser les faits et réduire l’incertitude',{A:3}],['Discuter avec des personnes concernées',{H:3}],['Tester rapidement à petite échelle',{X:3}]]],
['Autonomie','Ton manager idéal…','',
 [['Me donne un objectif et me laisse trouver le chemin',{U:3}],['M’aide à structurer et prioriser',{S:2}],['Me challenge intellectuellement',{D:1,A:2}],['Me donne beaucoup de feedback',{H:1,S:1,I:1}]]],
['Créativité','Quand tu crées, ce qui t’excite le plus est…','',
 [['Trouver une idée vraiment originale',{C:3,N:1}],['Résoudre une contrainte intelligemment',{A:2,C:1}],['Voir le résultat prendre forme',{X:2,C:1}],['Imaginer l’effet sur les gens',{H:1,I:2}]]],
['Relations','Au travail, les interactions humaines…','',
 [['Sont essentielles à mon énergie',{H:3}],['Sont importantes mais j’ai aussi besoin de solitude',{H:1,D:1}],['Me conviennent surtout si elles ont un objectif',{H:1,I:1,A:1}],['Je peux très bien travailler seul·e longtemps',{D:2,U:1}]]],
['Impact','Quel type de résultat te satisfait le plus ?','',
 [['Quelqu’un va mieux grâce à moi',{H:2,I:2}],['Un système fonctionne mieux',{A:2,S:1,I:1}],['Une idée est devenue réelle',{C:2,X:2}],['J’ai découvert quelque chose de nouveau',{N:2,D:1}]]],
['Complexité','Devant un problème très compliqué…','',
 [['Ça m’attire',{A:3,D:1}],['Ça m’attire s’il est concret',{X:2,A:1}],['Ça m’attire surtout si des personnes sont concernées',{H:2,I:1}],['Je préfère simplifier rapidement',{S:2,X:1}]]],
['Variété','Dans une semaine idéale…','',
 [['Je touche à beaucoup de sujets',{N:3}],['J’ai une grosse plage pour approfondir un sujet',{D:3}],['Je combine humain et production',{H:2,X:1}],['J’alterne création et analyse',{C:2,A:1}]]],
['Visibilité','Pour rester motivé·e, j’ai besoin…','',
 [['De voir des résultats rapidement',{X:2,I:1}],['De savoir où je vais à moyen terme',{S:2,I:1}],['De sentir que je progresse en expertise',{D:2}],['De découvrir régulièrement de nouvelles choses',{N:2}]]],
['Sécurité','Face à une reconversion, ce qui te rassure le plus serait…','',
 [['Tester avant de décider',{X:2,U:1}],['Avoir un chemin très clair',{S:3}],['Pouvoir réutiliser beaucoup de mes acquis',{A:1,I:1}],['Savoir que la piste m’enthousiasme vraiment',{N:1,C:1,D:1}]]],
['Valeur','Qu’aimerais-tu que ton travail dise de toi ?','',
 [['Que je suis utile',{I:3}],['Que je suis inventif·ve',{C:3}],['Que je comprends profondément les choses',{D:2,A:1}],['Que je fais grandir les autres',{H:3}]]],
['Fierté','Tu serais le plus fier·ère de…','',
 [['Créer un projet que les gens utilisent',{C:2,X:1,I:1}],['Devenir une référence dans un domaine',{D:3}],['Aider une équipe ou une personne à réussir',{H:2,I:2}],['Résoudre un problème réputé difficile',{A:3}]]],
['Long terme','Qu’est-ce qui t’aiderait le plus à ne pas abandonner un projet ?','',
 [['Des étapes courtes et visibles',{S:2,X:1}],['Des nouveautés régulières',{N:2}],['Un enjeu important pour quelqu’un',{I:2,H:1}],['Un vrai défi intellectuel',{D:1,A:2}]]],
['Identité','Si tu pouvais avoir une réputation professionnelle, laquelle choisirais-tu ?','',
 [['La personne qui trouve toujours une idée',{C:3}],['La personne qui comprend vite',{A:2,D:1}],['La personne à qui on peut confier un projet',{X:1,S:2}],['La personne qui fait progresser les autres',{H:2,I:1}]]],
['Cadre','Quelle organisation t’attire le plus ?','',
 [['Une petite équipe agile',{N:1,U:2}],['Une grande organisation avec beaucoup de ressources',{S:2}],['Une activité indépendante',{U:3}],['Un environnement hybride qui change selon les projets',{N:2,U:1}]]],
['Dernière boussole','Si tu devais choisir une seule sensation au travail…','',
 [['Je suis absorbé·e',{D:3}],['Je suis libre',{U:3}],['Je suis utile',{I:3}],['Je crée',{C:3}]]]
];

const soft=['Curiosité','Empathie','Créativité','Adaptabilité','Esprit critique','Pédagogie','Leadership','Persévérance','Débrouillardise','Communication','Intuition','Organisation'];
const skills=['Numérique / web','Écriture','Design / visuel','Vente / négociation','Relation client','Gestion de projet','Données / chiffres','Technique / bricolage','Santé / accompagnement','Formation / pédagogie','Management','Communication / réseaux'];
const interests=['Psychologie / humain','Tech / numérique','Création / design','Culture / médias','Sciences','Entrepreneuriat','Éducation','Santé / bien-être','Jeux / univers immersifs','Nature / environnement','Organisation / stratégie','Artisanat / concret'];
const routes=[['direct','Réutiliser au maximum mon parcours actuel'],['short','Ajouter seulement une formation courte ciblée'],['test','Tester avant de décider'],['open','Je suis prêt·e à une vraie reconversion si cela vaut le coup']];

const jobs=[
{name:'Product Manager',fit:{N:3,D:2,H:2,C:2,A:3,X:2,U:2,S:2,I:3},req:['Numérique / web','Gestion de projet','Relation client','Données / chiffres'],level:2,xp:2,desc:'Comprendre un problème utilisateur, définir les priorités d’un produit et coordonner design, technique et business.',why:'Le métier mélange compréhension humaine, analyse, stratégie, nouveauté et décisions concrètes.',watch:['réunions fréquentes','arbitrages permanents','nécessité de finir même après la phase excitante'],test:'Choisis une appli que tu utilises, interroge 3 personnes et propose une amélioration argumentée.'},
{name:'UX / Service Designer',fit:{N:2,D:2,H:3,C:3,A:2,X:1,U:2,S:1,I:2},req:['Design / visuel','Relation client','Écriture','Gestion de projet'],level:2,xp:1,desc:'Observer les utilisateurs, comprendre leurs frustrations et imaginer de meilleures expériences ou services.',why:'Tu peux combiner empathie, enquête, créativité et résolution de problèmes dans des univers différents.',watch:['documentation','itérations lentes','besoin de défendre ses choix'],test:'Cartographie une expérience frustrante de ton quotidien et conçois une version améliorée.'},
{name:'Développeur·se / Creative Developer',fit:{N:2,D:3,H:0,C:2,A:3,X:3,U:3,S:1,I:1},req:['Numérique / web'],level:2,xp:1,desc:'Transformer des idées en applications, automatisations, prototypes ou expériences numériques.',why:'Les problèmes techniques peuvent devenir de vraies énigmes absorbantes avec un résultat visible.',watch:['maintenance répétitive','bugs longs','risque de perdre l’intérêt après le défi principal'],test:'Construis un mini outil qui résout un problème concret que tu rencontres.'},
{name:'Consultant·e innovation / transformation',fit:{N:3,D:2,H:2,C:3,A:3,X:1,U:2,S:1,I:3},req:['Gestion de projet','Communication / réseaux','Relation client','Écriture'],level:3,xp:3,desc:'Comprendre les problèmes d’une organisation et imaginer de nouveaux services ou façons de travailler.',why:'Les missions changent et ton côté transversal devient un avantage de connexion.',watch:['reporting','pression client','présentations fréquentes'],test:'Fais le diagnostic d’un problème réel d’une entreprise et propose trois pistes concrètes.'},
{name:'Entrepreneur·e / créateur·rice de projet',fit:{N:3,D:2,H:2,C:3,A:2,X:3,U:3,S:0,I:3},req:['Vente / négociation','Gestion de projet','Communication / réseaux'],level:0,xp:1,desc:'Identifier un besoin, inventer une offre, la tester et construire progressivement une activité.',why:'Tu peux mobiliser beaucoup de compétences et changer régulièrement de rôle.',watch:['dispersion','administratif','incertitude financière'],test:'Crée une micro-offre vendable en une semaine à partir d’une compétence que tu possèdes déjà.'},
{name:'Chef·fe de projet événementiel',fit:{N:3,D:0,H:3,C:2,A:1,X:3,U:1,S:3,I:2},req:['Gestion de projet','Communication / réseaux','Relation client'],level:1,xp:1,desc:'Imaginer puis orchestrer événements, prestataires, planning, communication et imprévus.',why:'Beaucoup de variété, un objectif concret et une échéance forte peuvent être très stimulants.',watch:['stress','horaires irréguliers','logistique répétitive'],test:'Organise un petit événement réel avec budget, communication et retour des participants.'},
{name:'Formateur·rice / concepteur pédagogique',fit:{N:2,D:3,H:3,C:2,A:2,X:1,U:2,S:2,I:3},req:['Formation / pédagogie','Écriture','Communication / réseaux'],level:1,xp:2,desc:'Comprendre un sujet puis imaginer la manière la plus claire et mémorable de le transmettre.',why:'Tes plongées dans un sujet peuvent devenir directement utiles aux autres.',watch:['répétition','préparation invisible','administratif'],test:'Crée une mini formation de 20 minutes sur un sujet que tu maîtrises.'},
{name:'Customer Success / consultant solution',fit:{N:2,D:2,H:3,C:1,A:2,X:2,U:1,S:2,I:3},req:['Relation client','Communication / réseaux','Numérique / web'],level:1,xp:1,desc:'Comprendre les objectifs d’un client, l’aider à réussir avec une solution et résoudre ses difficultés.',why:'Chaque client apporte une nouvelle énigme humaine et opérationnelle avec un impact visible.',watch:['volume de suivi','CRM','clients difficiles'],test:'Choisis un logiciel que tu connais et imagine l’onboarding idéal d’un nouveau client.'},
{name:'Content Strategist / créateur·rice de contenu',fit:{N:3,D:2,H:2,C:3,A:1,X:2,U:3,S:0,I:2},req:['Écriture','Communication / réseaux','Design / visuel'],level:0,xp:0,desc:'Transformer expertise, idées ou tendances en contenus capables d’informer, convaincre ou créer une communauté.',why:'Chaque sujet peut devenir une nouvelle plongée et le résultat est rapidement visible.',watch:['régularité','algorithmes','publication même sans inspiration'],test:'Crée une mini série de 5 contenus autour d’un sujet qui t’obsède actuellement.'},
{name:'Recruteur·se / Talent Partner',fit:{N:2,D:1,H:3,C:1,A:2,X:2,U:1,S:2,I:2},req:['Relation client','Communication / réseaux','Vente / négociation'],level:1,xp:1,desc:'Comprendre un besoin, explorer des profils et détecter de bonnes correspondances entre personnes et organisations.',why:'Chaque personne est différente et le métier mobilise intuition humaine, enquête et communication.',watch:['suivi administratif','objectifs de recrutement','volume'],test:'Prends 3 offres et construis pour chacune le profil idéal et 5 questions d’entretien.'},
{name:'Data / Business Analyst',fit:{N:1,D:3,H:0,C:1,A:3,X:1,U:2,S:3,I:2},req:['Données / chiffres','Numérique / web'],level:2,xp:1,desc:'Explorer données et processus pour comprendre ce qui se passe vraiment et aider à mieux décider.',why:'Tu peux plonger dans une énigme, chercher des motifs invisibles et produire une conclusion utile.',watch:['temps prolongé sur les mêmes données','documentation','moins de stimulation sociale'],test:'Analyse un jeu de données public et tire-en trois recommandations.'},
{name:'Responsable innovation / intrapreneur',fit:{N:3,D:2,H:2,C:3,A:2,X:2,U:2,S:1,I:3},req:['Gestion de projet','Communication / réseaux','Numérique / web'],level:3,xp:4,desc:'Chercher de nouvelles opportunités dans une organisation, expérimenter et transformer des idées en projets.',why:'Ton besoin d’explorer devient littéralement une partie du poste.',watch:['validations longues','politique interne','idées non réalisées'],test:'Conçois une expérimentation simple pour améliorer un service que tu connais.'},
{name:'Chef·fe de projet digital',fit:{N:2,D:1,H:2,C:2,A:2,X:2,U:1,S:3,I:2},req:['Gestion de projet','Numérique / web','Relation client'],level:2,xp:2,desc:'Coordonner un projet numérique de l’idée à la livraison, avec équipes, délais, budget et qualité.',why:'Le métier combine vision d’ensemble, résolution de problèmes, humain et résultat concret.',watch:['suivi','réunions','dépendance aux autres'],test:'Prends un projet fictif et construis planning, risques, responsabilités et livrables.'},
{name:'No-code / Automation Specialist',fit:{N:3,D:2,H:1,C:2,A:3,X:3,U:3,S:1,I:2},req:['Numérique / web','Gestion de projet'],level:1,xp:0,desc:'Créer des automatisations et outils sans forcément coder lourdement, pour simplifier le travail d’une entreprise.',why:'Tu résous rapidement des problèmes concrets et tu peux changer souvent d’univers métier.',watch:['maintenance','clients flous','outils qui changent vite'],test:'Automatise une tâche répétitive réelle avec un outil no-code.'},
{name:'Concepteur·rice d’expérience / gamification',fit:{N:3,D:2,H:2,C:3,A:2,X:2,U:2,S:1,I:2},req:['Design / visuel','Écriture','Gestion de projet'],level:2,xp:1,desc:'Imaginer des parcours, mécaniques et expériences engageantes pour apprendre, découvrir ou utiliser un service.',why:'Créativité, compréhension humaine et construction de systèmes s’y rencontrent.',watch:['briefs contraignants','tests nombreux','besoin de justifier les choix'],test:'Transforme une tâche ennuyeuse en expérience ludique avec règles, feedback et progression.'}
];

let q=0,answers=[];
function show(id){['welcome','quiz','capital','result'].forEach(x=>$('#'+x).classList.toggle('hidden',x!==id))}
function renderQ(){
 const [theme,text,hint,opts]=qs[q], pc=Math.round((q/qs.length)*100);
 $('#count').textContent=`${q+1} / ${qs.length}`; $('#percent').textContent=pc+'%'; $('#prog').style.width=pc+'%';
 $('#theme').textContent=theme; $('#qtext').textContent=text; $('#qhint').textContent=hint||'';
 $('#qback').classList.toggle('hidden',q===0);
 $('#answers').innerHTML=opts.map((o,i)=>`<button class="choice" data-i="${i}">${o[0]}</button>`).join('');
 $('#answers').querySelectorAll('button').forEach(b=>b.onclick=()=>{answers[q]=+b.dataset.i;if(q<qs.length-1){q++;renderQ()}else{renderCapital();show('capital')}});
}
function chips(sel,arr,name){$(sel).innerHTML=arr.map(v=>`<label class="chip"><input type="checkbox" name="${name}" value="${v}"><span>${v}</span></label>`).join('')}
function renderCapital(){
 chips('#softs',soft,'soft');chips('#skills',skills,'skill');chips('#interests',interests,'interest');
 $('#routes').innerHTML=routes.map(r=>`<label class="chip"><input type="radio" name="route" value="${r[0]}"><span>${r[1]}</span></label>`).join('');
}
function calc(){
 const s={N:0,D:0,H:0,C:0,A:0,X:0,U:0,S:0,I:0};
 answers.forEach((a,idx)=>{if(a===undefined)return;Object.entries(qs[idx][3][a][1]).forEach(([k,v])=>s[k]+=v)});
 return s;
}
function prof(sorted){
 const top=sorted.slice(0,3).map(x=>x[0]);
 if(top.includes('N')&&top.includes('C'))return['L’Explorateur créatif','Tu fonctionnes par connexions, curiosité et envie de transformer les idées en expériences concrètes.'];
 if(top.includes('A')&&top.includes('D'))return['L’Enquêteur passionné','Tu peux devenir extrêmement performant·e lorsqu’un sujet mérite d’être compris en profondeur.'];
 if(top.includes('H')&&top.includes('I'))return['Le Catalyseur humain','Tu t’engages davantage lorsque ton travail provoque un changement visible chez les autres.'];
 if(top.includes('C')&&top.includes('X'))return['Le Faiseur inventif','Tu apprends, réfléchis et avances surtout en construisant quelque chose de réel.'];
 if(top.includes('U')&&top.includes('N'))return['L’Explorateur autonome','Tu as besoin d’espace, de mouvement et d’objectifs plus que de procédures imposées.'];
 if(top.includes('S')&&top.includes('I'))return['L’Architecte utile','Tu sembles aimer donner une forme claire aux choses pour les rendre vraiment efficaces.'];
 return['Le Multipotentiel intégrateur','Ta force réside dans ta capacité à connecter plusieurs formes d’intelligence, d’expérience et de savoir-faire.'];
}
function flowScore(job,s){
 let dot=0,mag=0; Object.keys(dims).forEach(k=>{dot+=Math.max(0,s[k])*job.fit[k];mag+=Math.max(1,s[k])*3});
 return Math.max(48,Math.min(98,Math.round(48+(dot/(mag||1))*50)));
}
function accessScore(job){
 const selected=[...document.querySelectorAll('input[name=skill]:checked')].map(x=>x.value);
 const lvl={none:0,bac:1,bac2:2,bac3:3,bac5:4}[$('#level').value];
 const xp=+$('#xp').value;
 let reqHit=job.req.filter(r=>selected.includes(r)).length;
 let skillPart=job.req.length?reqHit/job.req.length:1;
 let levelPart=Math.min(1,(lvl+1)/(job.level+1));
 let xpPart=Math.min(1,(xp+1)/(job.xp+1));
 let raw=.55*skillPart+.25*levelPart+.20*xpPart;
 return Math.max(35,Math.min(96,Math.round(35+raw*61)));
}
function bullets(arr){return arr.map(x=>`<p>• ${x}</p>`).join('')}
function reveal(){
 const route=document.querySelector('input[name=route]:checked')?.value;
 if(!route){$('#err').textContent='Choisis simplement le type de transition qui te rassure le plus.';return}
 $('#err').textContent='';
 const s=calc(), sorted=Object.entries(s).sort((a,b)=>b[1]-a[1]), [name,tag]=prof(sorted), max=sorted[0][1]||1;
 $('#pname').textContent=name; $('#ptag').textContent=tag;
 $('#pdesc').textContent=`Tes moteurs les plus marqués sont ${dims[sorted[0][0]].toLowerCase()}, ${dims[sorted[1][0]].toLowerCase()} et ${dims[sorted[2][0]].toLowerCase()}. Un métier peut être intéressant sur le papier et pourtant te vider s’il nourrit trop peu ces besoins.`;
 $('#motors').innerHTML=sorted.slice(0,6).map(([k,v])=>`<div style="margin:12px 0"><div class="flex between small"><span>${dims[k]}</span><b>${Math.round(v/max*100)}%</b></div><div class="bar"><div style="width:${Math.max(5,Math.round(v/max*100))}%"></div></div></div>`).join('');
 $('#env').innerHTML=bullets(sorted.slice(0,4).map(([k])=>({
   N:'Renouvellement régulier des sujets, projets ou contextes.',
   D:'De vraies plages pour approfondir et devenir très bon·ne.',
   H:'Des relations de qualité et des échanges qui ont du sens.',
   C:'Un espace pour inventer et apporter ta patte.',
   A:'Des problèmes assez complexes pour stimuler ta réflexion.',
   X:'Des résultats visibles et une possibilité d’agir vite.',
   U:'De l’autonomie sur la manière d’atteindre l’objectif.',
   S:'Des jalons clairs et un cadre lisible.',
   I:'Un lien perceptible entre ton travail et son effet réel.'
 }[k])));
 $('#strengths').innerHTML=bullets(sorted.slice(0,3).map(([k])=>dims[k]+' comme moteur naturel'));
 $('#risks').innerHTML=bullets(['Sous-stimulation : trop de répétition ou trop peu de défi.','Décrochage une fois la phase de découverte terminée.','Dispersion si trop de pistes restent ouvertes simultanément.']);
 $('#growth').innerHTML=bullets(['Découper les projets en étapes visibles et terminables.','Externaliser une partie de la structure : délais, binôme, feedback.','Tester une piste professionnellement avant de transformer toute ta vie.']);
 $('#durability').textContent='Cherche moins “le métier parfait” que la combinaison durable : assez de nouveauté pour rester vivant·e, assez de profondeur pour progresser, assez de sens pour tenir, et assez de structure pour terminer.';
 const ranked=jobs.map((j,i)=>({j,i,f:flowScore(j,s),a:accessScore(j)}))
   .map(x=>({...x,total:Math.round(x.f*.65+x.a*.35)})).sort((x,y)=>y.total-x.total).slice(0,8);
 $('#jobs').innerHTML=ranked.map(x=>`<article class="card job">
   <div class="flex between gap"><div><div class="kicker">Piste ${ranked.indexOf(x)+1}</div><h3>${x.j.name}</h3></div><span class="pill">${x.total}% priorité</span></div>
   <div class="scorebox"><div class="scoreitem"><span class="small muted">❤️ Compatibilité Flow</span><br><b>${x.f}%</b></div><div class="scoreitem"><span class="small muted">🚀 Accessibilité</span><br><b>${x.a}%</b></div></div>
   <p class="muted">${x.j.why}</p><button class="btn jobbtn" data-i="${x.i}" data-f="${x.f}" data-a="${x.a}" data-r="${route}">Découvrir ce métier</button>
 </article>`).join('');
 document.querySelectorAll('.jobbtn').forEach(b=>b.onclick=()=>openJob(+b.dataset.i,+b.dataset.f,+b.dataset.a,b.dataset.r));
 show('result'); window.scrollTo({top:0,behavior:'smooth'});
}
function openJob(i,f,a,route){
 const j=jobs[i], selected=[...document.querySelectorAll('input[name=skill]:checked')].map(x=>x.value);
 $('#jname').textContent=j.name;
 $('#jscores').innerHTML=`<div class="scoreitem"><span class="small muted">❤️ Compatibilité Flow</span><br><b>${f}%</b></div><div class="scoreitem"><span class="small muted">🚀 Accessibilité</span><br><b>${a}%</b></div>`;
 $('#jdesc').textContent=j.desc; $('#jwhy').textContent=j.why;
 const overlap=j.req.filter(r=>selected.includes(r));
 $('#jbring').innerHTML=bullets(overlap.length?overlap.map(x=>'Tu possèdes déjà une base en '+x.toLowerCase()):['Ton profil montre plusieurs moteurs compatibles avec ce métier.','Tes expériences personnelles peuvent aussi devenir des preuves transférables.']);
 $('#jwatch').innerHTML=bullets(j.watch);
 const routeTxt={direct:'Commence par reformuler ton parcours actuel avec le vocabulaire de ce métier.',short:'Ajoute seulement une compétence manquante très ciblée via une formation courte.',test:'Fais d’abord un mini-test réel avant toute décision de reconversion.',open:'Si la compatibilité reste forte après un test terrain, une reconversion plus structurée peut se justifier.'}[route];
 $('#jpath').innerHTML=[routeTxt,'Ouvre 10 offres réelles et note les compétences qui reviennent le plus.','Transforme une expérience passée en étude de cas : problème, action, résultat.','Parle à deux personnes qui exercent ce métier et demande-leur ce qui est réellement pénible au quotidien.','Construis une preuve terminée : mini-projet, portfolio, simulation, bénévolat ou mission test.'].map((x,k)=>`<li>${x}</li>`).join('');
 $('#jtest').textContent=j.test; $('#jobdetail').classList.remove('hidden'); $('#jobdetail').scrollIntoView({behavior:'smooth'});
}
$('#start').onclick=()=>{q=0;answers=[];show('quiz');renderQ()};
$('#qback').onclick=()=>{if(q>0){q--;renderQ()}};
$('#cback').onclick=()=>{q=qs.length-1;show('quiz');renderQ()};
$('#reveal').onclick=reveal;
$('#closejob').onclick=()=>$('#jobdetail').classList.add('hidden');
$('#restart').onclick=()=>{document.querySelectorAll('input').forEach(x=>x.checked=false);show('welcome');window.scrollTo({top:0,behavior:'smooth'})};
show('welcome');
