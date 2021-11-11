---
title: "React : comprendre le formulaire contrôlé avec des Pizzas"
date: "2021-06-02"
excerpt: "Un dev vous parle de formulaire contrôlé ? Vous aimeriez bien savoir de quel genre d'animal il s'agit ?"
picture: "/images/blog/skating-pizzas.jpg"
pictureAlt: Un dev react livrant des pizzas (non-controllées) en skate. Illustration [Mickaël Merley](https://mickaelmerley.com/)
---

Cet article est destiné aux développeurs front junior ou à toute personne qui travaille avec un dev front qui lui parle de cet étrange animal qu'est le **formulaire contrôlé**.

C'est aussi destiné à quiconque aime discuter de pizzas, pour qui tous les prétextes sont bons.

Aucun prérequis pour suivre cet article qui se veut tout public, mais des éléments de précision technique seront donnés pour les connaisseurs.

## Commençons avec la base : le formulaire HTML

L'idée est simple, Marcel veut commander une pizza. Il doit indiquer :

- son nom
- la pizza souhaitée parmi un choix déterminé
- et, s’il choisit la pizza "Reine", avoir la possibilité d'y ajouter un oeuf.

Au sein d'une application react, mais en se contentant uniquement du HTML, ça donnerait quelque chose de ce genre :

```tsx
import React, { FunctionComponent } from "react";
import styles from "../forms.module.css";

export type PizzaFormProps = Record<string, never>;

const PizzaForm: FunctionComponent<PizzaFormProps> = () => (
  <form className={styles.form}>
    <label htmlFor="prenom">Quel est votre prénom ?</label>
    <input id="prenom" name="prenom" required />

    <label htmlFor="pizza">Quelle pizza désirez-vous</label>
    <select name="pizza" id="pizza">
      <option value="fromage">Fromage</option>
      <option value="reine">Reine</option>
      <option value="veggie">Veggie</option>
    </select>

    <label htmlFor="oeuf">
      <input type="checkbox" name="oeuf" id="oeuf" />
      Si vous avez choisi la Reine, désirez-vous un bel oeuf dessus en prime ?
    </label>

    <input type="submit" value="Commander !" />
  </form>
);

export default PizzaForm;
```

Et ça, mesdames et messieurs, **c'est un formulaire totalement NON contrôlé**. Car actuellement, en tant que dev, je n'ai aucune mainmise sur les valeurs entrées par Marcel, et je délègue tout au navigateur : garder la trace des valeurs dans les inputs, gérer les validations, soumettre vers le serveur... C'est le navigateur le boss.

Et dans pas mal de cas, ça peut largement suffire ! Un excellent exemple : le formulaire de contact. Et même dans des cas plus complets avec upload de fichiers, champs de recherche avec préremplissage, et j'en passe. Ça fait très bien le job.

Pour ceux qui débutent en HTML :

- La balise `<form>` englobe tout ce qui fera partit du formulaire. On verra plus tard son importance.
- Chaque champ doit avoir un `name` qui est le nom que le dev attache à la valeur entrée par Marcel. `<input name="prenom" />` permettra d'accéder au prénom que l'utilisateur aura saisi via la clé `prenom`.
- Les champs ont aussi un `id`, généralement le même que le `name` (mais pas toujours). Cet `id` unique permet de le lier à un label via son `htmlFor`. Ainsi, cliquer sur "Quel est votre nom ?" pointera sur le champ `nom`.
- l'attribut `required` indique qu'on veut absolument avoir une valeur entrée dans ce champ. Il est donc obligatoire d'entrer un prénom si l'on désire que le navigateur daigne soumettre le formulaire.

> Un oeil avertit aura remarqué l'usage de `htmlFor` en lieu et place de `for`, c'est dû au fait que `for` est un mot-clé réservé en JavaScript, et que la manière dont react est conçu ne permet pas d'utiliser ces mots-clés en nom d'attributs. La même chose existe pour `class` qui devient `className`.

Cependant, cette façon de faire, aussi simple soit-elle, va avoir quelques limitations :

- Soumettre ce formulaire (en gros, appuyer sur "Commander !"), provoque un rechargement de la page. Sans fournir plus d'indications que ça, le formulaire va rediriger sur cette même page, mais en passant en paramètre les informations remplies. Un rechargement de page sur une application react est une opération couteuse, tout est fait pour ne pas en avoir besoin.
- On affiche assez inutilement la checkbox pour l'oeuf dans 2 cas sur 3, on aimerait un système qui n'affiche cette option que lorsque Marcel a choisi une Pizza "Reine"
- Le bouton "Commander !" est cliquable d'entrée de jeu, même si le formulaire n'est pas valide, on aimerait le griser tant qu'on n’est pas sûr que Marcel ait bien entré son prénom.

Et sauf cas spéciaux, c'est généralement pour cette raison qu'on veut passer à un formulaire contrôlé : améliorer (ou du moins changer) l'expérience qu'aura Marcel. Avoir le contrôle dessus. Et tant pis pour le navigateur.

## Contrôler la soumission du formulaire

Pour éviter le désagrément du rechargement de page, préparez votre machine à laver, car on va avoir l'honneur de sortir les **requêtes AJAX.**

AJAX signifie [AJAX (Asynchronous JavaScript + XML)](https://developer.mozilla.org/fr/docs/Web/Guide/AJAX) et concrètement ça va nous permettre d'envoyer à un serveur les informations que Marcel a saisies, de recevoir un bel accusé de réception, et de décider quoi faire après ça, le tout, sans quitter la page, ni son canapé.

Et avec ça, vous n'avez pas du linge plus blanc que blanc, [vous avez toujours le nouvel OMO](https://youtu.be/VEZw1Vmq97Y?t=77).

Voici le code à ajouter pour court-circuiter le navigateur et contrôler nous-mêmes ce que nous ferons des données entrées par l'utilisateur :

```tsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    const body = buildPayloadFromSubmit(event);
    axios
      .post("https://pizza-api.example.com", body)
      .then((response) => alert(`Commande envoyée ! ${response}`))
      .catch((error) => alert(`Outch ! Petit souci : ${error}`));
  }}
>
  {/* ... reste du formulaire ... */}
</form>
```

Point par point, ça donne :

- `onSubmit` est un attribut qui nous permet d'écouter l'évènement `submit` du formulaire, lorsqu'il se produit, le code qu'on lui aura donné sera exécuté en passant un précieux paramètre `event`
- `event` est très important, il représente "l'évènement" du submit. On peut le manipuler pour récupérer des infos ou court-circuiter le comportement par défaut du navigateur, à savoir : le rechargement de la page. C'est ainsi représenté par le code `event.preventDefault()`
- Ensuite, on a besoin de récupérer les entrées de Marcel à partir de cet évènement. Pour cela, je passe l'évènement dans une petite moulinette qui va me retourner un bel objet avec toutes les valeurs bien emballées comme il faut, prêt à peser et à expédier en colissimo au serveur. Pour les petits curieux, le détail de cette fonction est donné plus bas.
- Une fois que j'ai tout emballé, il me reste à remplir le recommandé. Il me faut donc une adresse (du serveur), soit `"https://pizza-api.example.com"`, puis j'utilise une lib bien sympa, `axios` qui me permet de vous éviter toute la verbosité possible des requêtes AJAX et de faire comme si c'était simple 😅 et je n'oublie pas de lui passer les détails de la commande, qu'on appelle généralement le `body`
- Ça y est ! C'est parti ! S’il n'y a pas trop de bouchons sur le périf, je devrais avoir ma réponse en moins d'une seconde. Et pour récupérer cette réponse, je vais utiliser `then` et `catch`. `then` sera appelé dans le cas où ça a fonctionné, que tout va bien. Il me transmet une réponse et j'en fais ce que j'en veux ! La forme de la réponse `response` est entièrement dépendant : et de la lib utilisée pour la requête (ici axios) et du serveur. Pour cette démo, on va faire comme si c'était juste un petit message sympa, qu'on affiche en plus d'un texte "en dur" à Marcel via le `alert`.
- Par contre, si ça va mal, c'est le `catch` qui va être appelé, et qui va passer une `error` qu'on va aussi juste afficher par simplicité

```tsx
// La magie derrière buildPayloadFromSubmit
import React from "react";

type Payload = { [key: string]: any };

export default function buildPayloadFromSubmit(
  event: React.FormEvent<HTMLFormElement>,
): Payload {
  const userFormData = new FormData(event.currentTarget);
  const userEntries = Array.from(userFormData.entries());
  const payload: Payload = {};
  userEntries.forEach((entry) => (payload[entry[0]] = entry[1]));
  return payload;
}
```

Ça y est ! Alors, il est bien contrôlé maintenant ce formulaire ?

Et bien, pas vraiment. On a juste attrapé au vol la soumission, mais nos champs sont toujours entre les griffes du navigateur, tel Golum avec son _précieux..._

La prochaine feature va nous permettre de commencer à mieux mater ce formulaire.

## Masquer la checkbox de manière conditionnelle

Pour savoir en temps réel ce qu'est en train de choisir Marcel dans son petit formulaire, on va avoir besoin d'un système pour stocker les valeurs des différents champs. Ce système doit :

- Créer une case en mémoire appelée `pizza`
- Lui donner une valeur par défaut au premier chargement du formulaire
- Mettre à jour cette valeur à chaque fois que l'utilisateur change son choix dans le `select`
- Si `pizza` vaut `reine`, alors afficher la checkbox de l'oeuf

Et ça tombe bien, car React, outre le fait de nous permettre de nous donner du style en jouant aux Lego avec nos composants, vient avec une manière de gérer ça à merveille.

Dans React, cette notion de case mémoire facile à mettre à jour, et qui appartient à un composant en particulier _(précision pour les devs : propre à chaque instance d'un composant, qu'il faut voir comme une classe à instancier),_ ça s'appelle le `state`.

Voici à quoi ressemblerait notre formulaire avec le champ `pizza` contrôlé par un state :

```tsx
import React, { FunctionComponent, useState } from "react";
import styles from "../forms.module.css";
import buildPayloadFromSubmit from "../../lib/buildPayloadFromSubmit";
import axios from "axios";

export type PizzaFormControlledProps = Record<string, never>;

const PizzaFormControlled: FunctionComponent<PizzaFormControlledProps> = () => {
  const [pizza, setPizza] = useState<string>("fromage");

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        const body = buildPayloadFromSubmit(event);
        axios
          .post("https://pizza-api.example.com", body)
          .then((response) => alert(`Commande envoyée ! ${response}`))
          .catch((error) => alert(`Outch ! Petit souci : ${error}`));
      }}
    >
      <label htmlFor="prenom">Quel est votre prénom ?</label>
      <input id="prenom" name="prenom" required />

      <label htmlFor="pizza">Quelle pizza désirez-vous ?</label>
      <select
        name="pizza"
        id="pizza"
        value={pizza}
        onChange={(event) => setPizza(event.target.value)}
        onBlur={(event) => setPizza(event.target.value)}
      >
        <option value="fromage">Fromage</option>
        <option value="reine">Reine</option>
        <option value="veggie">Veggie</option>
      </select>

      {pizza === "reine" && (
        <label htmlFor="oeuf">
          <input type="checkbox" name="oeuf" id="oeuf" />
          Et désirez-vous un bel oeuf dessus en prime ?
        </label>
      )}

      <input type="submit" value="Commander !" />
    </form>
  );
};

export default PizzaFormControlled;
```

Explications :

- `const [pizza, setPizza] = useState<string>("fromage");` c'est la ligne qui nous permets de créer une case mémoire pour ce formulaire, nommée `pizza`, nous donne accès à `setPizza` qui permets de changer cette valeur, et de la remplir au départ par `"fromage"`.
- `onChange={(event) => setPizza(event.target.value)}` sur le `<select>` consiste justement à "écouter" l'évènement de changement de valeur sur ce select. Donc si Marcel choisi "fromage", cette fonction est appelée, et on appelle `setPizza` pour lui donner la nouvelle valeur, stockée une fois encore dans un objet `event`.
- Et le plus intéressant : afficher de manière conditionnelle tout un pan de HTML via `pizza === "reine" &&`. Ça devient un peu plus technique, mais en gros, si la condition est remplie, alors ce qui est passé entre parenthèses sera affiché, sinon, ça sera comme si ça n'avait pas existé !

On a donc rempli notre deuxième mission, à savoir ne pas afficher cette checkbox pour rien. Et ça devient très intéressant (si ! si !), car actuellement on n'a contrôlé qu'un seul des champs. Peut-on dire que notre formulaire est contrôlé ? Eh bien, pas vraiment. Enfin, plus exactement, il est partiellement contrôlé.

Eh oui ! Car en réalité, contrôler ou non un formulaire n'est pas vraiment un choix booléen, ça peut très bien être nuancé... Et vers la fin on va voir que ça peut même être bien plus subtil que ça, niark niark niark...

> Un amateur niveau 3 dans les arcanes du développement web aura certainement remarqué que, même si j'ai maintenant la main sur le `select` en mode contrôlé, cela ne m'empêche pas de gérer le `onSubmit` directement depuis l'`event` . Notez tout de même que ce n'est pas très orthodoxe, et qu'à la prochaine étape on va faire les choses plus "proprement", c'est-à-dire en utilisant directement le state pour construire notre `body`.

## Désactiver le bouton tant que le formulaire n'est pas valide

OK ! On y est presque, il nous reste plus qu'à gérer ce petit bouton "Commander !", inutile de laisser Marcel cliquer dessus tant qu'on n'a pas au moins son nom.

Pour la pizza, on a été malin puisqu'on a une pizza par défaut, mais ce qu'on va faire pour le seul champ `pizza` est tout aussi valable pour n'importe quel autre type de champs. À partir du moment où vous contrôlez totalement le formulaire avec un state, tout est possible.

On va donc :

- ajouter un state pour le champ `prenom`
- tant qu'à faire, contrôler aussi la checkbox `oeuf`, on pourra alors revêtir notre costume de _Texas Ranger_, un brin de paille à la bouche, et annoncer fièrement devant nos collègues que nous _controllons la situation_.
- Griser et rendre inopérant le bouton de commande tant qu'on n'a pas un joli prénom de rempli.
- Afficher un joli petit message d'erreur si jamais l'utilisateur essaye quand même de cliquer sur le bouton de commande.

> Cher développeur expert React de tous les temps, si tu passes par là, ait la grâce de pardonner mes approximations et l'usage de nom de variables en Français (entre autres choses). Ceci est un article tout public...

```tsx
import React, { FunctionComponent, useState } from "react";
import styles from "../forms.module.css";
import axios from "axios";

export type PizzaFormValidatedProps = Record<string, never>;

const PizzaFormValidated: FunctionComponent<PizzaFormValidatedProps> = () => {
  const [prenom, setPrenom] = useState<string>("");
  const [pizza, setPizza] = useState<string>("fromage");
  const [oeuf, setOeuf] = useState<boolean>(false);

  const onPizzaChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPizza(event.target.value);
      // On réinitialize à chaque changement de Pizza,
      // sinon Marcel risque de se retrouver avec une Veggie + oeuf...
      setOeuf(false);
    },
    [],
  );

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        // On empêche le comportement standard du formulaire : recharger la page
        event.preventDefault();
        // On construit nous même un beau body, avec le state du formulaire
        const body = { prenom, pizza, oeuf };
        // On envoie !
        axios
          .post("https://pizza-api.example.com", body)
          .then((response) => alert(`Commande envoyée ! ${response}`))
          .catch((error) => alert(`Outch ! Petit souci : ${error}`));
      }}
    >
      <label htmlFor="prenom">Quel est votre prénom ?</label>
      <input
        id="prenom"
        name="prenom"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
      />

      <label htmlFor="pizza">Quelle pizza désirez-vous ?</label>
      <select
        name="pizza"
        id="pizza"
        value={pizza}
        onChange={onPizzaChange}
        onBlur={onPizzaChange}
      >
        <option value="fromage">Fromage</option>
        <option value="reine">Reine</option>
        <option value="veggie">Veggie</option>
      </select>

      {/* On affiche cette option que si la pizza est bien une reine */}
      {pizza === "reine" && (
        <label htmlFor="oeuf">
          <input
            type="checkbox"
            name="oeuf"
            id="oeuf"
            checked={oeuf}
            onChange={() => setOeuf((prevState) => !prevState)}
          />
          Et désirez-vous un bel oeuf dessus en prime ?
        </label>
      )}

      <input
        type="submit"
        value="Commander !"
        // On ne peut pas utiliser le classique `disabled`, sinon le onClick ne sera pas appelé.
        data-disabled={!prenom}
        onClick={(event) => {
          // On attaque les validations manuelles, de la façon la plus simpliste possible
          // ne mettez pas ce genre de code en prod ! C'est juste pour l'exemple :)
          if (!prenom) {
            event.preventDefault();
            alert("Il est nécessaire d'indiquer un prénom.");
          }
        }}
      />
    </form>
  );
};

export default PizzaFormValidated;
```

Cette fois-ci, j'ai mis mes remarques directement dans le code.

> Notez tout de même qu'il est possible de modifier le style du bouton submit (et même empêcher son click) en CSS, en fonction de la validité ou non du formulaire selon les attributs des champs (`required`, `pattern`, `type`, etc.).

Il est même possible de rendre tout ou partie du formulaire `disabled` en englobant avec un `<fieldset disabled>` !

Cette fois-ci, on a bien un formulaire totalement contrôlé, avec un système rudimentaire de validation.

Notez bien que j'essaye de présenter le minimum de code possible. Je fais l'impasse sur plein de détails, il y a des scénarios non gérés, ce formulaire ne sera pas facile à faire évoluer, surtout sur les validations. Bref, ce n’est pas beau. Mais pour expliquer, c'est un début.

Vous comprendrez donc, que même avec un formulaire simple qui pouvait tenir en 27 lignes au départ, on se retrouve avec un début de formulaire contrôlé minimaliste qui en fait 90, et qui en ferait facilement 150 si on codait plus proprement.

Outre le nombre de lignes de code, c'est aussi le nombre de cas possibles qu'il faut avoir en tête, et à tester (manuellement ou automatiquement) à chaque futur changement.

Se poser la question : "est-ce que j'ai vraiment besoin d'un formulaire contrôlé" est donc une question saine.

## Alors, quand a-t-on besoin d'un formulaire contrôlé ? Sacrebleu !

La première raison qui m'avait poussée jusque là à préférer les formulaires non contrôlés, c'était pour la performance.

Car en mode contrôlé, ce qu'il faut bien comprendre, c'est que React "recalcule" (`render`) tout le formulaire à chaque interaction dans les champs. Je clique sur "A" dans le prénom : rerender ! Je sélectionne une autre pizza : rerender !

Dans notre petit exemple, c'est totalement bénin. Et je pense qu'au final, à moins d'avoir un formulaire ultra-complexe avec des sous-calculs, ça ne devrait pas poser de soucis. La peur du développeur, c'est le "lag" à l'input. Qu'on sente un décalage entre le moment où je clique sur une lettre et le moment où elle s'affiche.

Mais en vrai, il y a peu de chances pour que ça se produise.

Aujourd'hui, ce qui me plaît le plus dans un formulaire non contrôlé, c'est sa simplicité.

Les navigateurs supportent tous les jours de nouveaux attributs, de nouvelles façons d'écrire du HTML. Et on peut aller vraiment très loin avec un basique formulaire HTML, à la limite en attrapant juste au vol le submit.

De plus, il existe d'autres façons d'avoir les bénéfices des 2 approches, c'est le cas par exemple de la lib `react-hook-form` qui permet d'utiliser des champs non contrôlés, mais qui écoute tout de même les évènements via ce qu'on appelle les `ref`. Le formulaire a un state global plus complexe, capable de re-render uniquement dans certaines conditions de notre choix (quand on modifie la pizza par exemple).

C'est vraiment très malin comme façon de faire, surtout que ça n'empêche pas de rajouter une couche de state global au cas par cas, si jamais on rentre dans une limite de la lib.

Je vais surement décevoir, mais je pense que la réponse à cette question, est comme souvent : ça dépend !

- Est-ce que le designer ou la spec prévoit des choses un peu velues sur l'UX ?
- Est-ce que la team est à l'aise avec telle ou telle façon de faire ?
- Est-ce qu'il y a des problèmes de perfs sur un formulaire ?
- Est-ce que la structure du formulaire est décrite en dur à l'avance ou bien est-il généré en fonction d'un JSON reçu ?
- Jusqu'à quel point on veut le typer via TypeScript (champs, schéma de validation) ?

Cela fait peu de temps que j'ai découvert react-hook-form, et je suis donc probablement biaisé par le plaisir de la découverte, mais je trouve que leur approche est la bonne. Je vais probablement pousser plus loin ma recherche dans l'utilisation de cette lib.

> Si vous désirez jouer avec le code en question, c'est [tout sur github !](https://github.com/tidusia/create-react-app-demos/tree/to-control-or-not-to-control)
