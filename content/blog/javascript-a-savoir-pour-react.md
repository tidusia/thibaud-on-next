---
title: JavaScript à savoir pour faire du React
date: "2021-10-15"
picture: "/images/blog/react-shooting-star.jpg"
pictureAlt: Un papa dev et ses 2 enfants sous un ciel étoilé, l'étoile filante de react passant entre les étoiles. Illustration [Mickaël Merley](https://mickaelmerley.com/)
excerpt: Comparé à d'autres frameworks, React nous fait faire beaucoup de JavaScript. Alors, autant poncer un peu les bases.
---

> Ceci est une traduction de l'excellent article de Kent C. Dodds nommé [JavaScript to Know for React [en 🇺🇸]](https://kentcdodds.com/blog/javascript-to-know-for-react).
> J'y ajoute parfois quelques remarques personnelles, mais ce sera alors clairement indiqué.

Une des choses que j'aime le plus dans React (par rapport aux autres frameworks que j'ai pu utiliser), c'est à quel point on est exposé à JavaScript.
Il n'y a pas de _templating_ ni de [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) (le JSX est transpilé en simple JavaScript),
l'API pour créer un composant est même devenue plus simple depuis l'ajout des [React hooks](https://fr.reactjs.org/docs/hooks-intro.html),
et le framework se contente du minimum d'abstractions en dehors de sa problématique principale : gérer l'UI.

À cause de cela, apprendre les fonctionnalités de JavaScript est une excellente idée afin de construire des applications en React.
Voici donc une sélection de fonctionnalités que nous offre JavaScript dont je vous conseille d'y passer un peu de temps à étudier, pour pouvoir gagner en productivité en travaillant avec React.

Avant d'entrer dans le détail, une première chose qui est vraiment utile à comprendre pour React est le concept de "_closure_". Voici un article détaillé sur le sujet : [mdn.io/closure](https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures).

C'est maintenant parti pour les fonctionnalités JS que vous voulez savoir pour faire du React.

## Template literals (Littéraux de gabarits)

Les _Template literals_ sont comme des chaines de caractères, mais avec des superpouvoirs !

```js
const greeting = "Hello";
const subject = "World";
console.log(`${greeting} ${subject}!`); // Hello World!

// même chose que :
console.log(greeting + " " + subject + "!");

// en React:
function Box({ className, ...props }) {
  return <div className={`box ${className}`} {...props} />;
}
```

[MDN : Littéraux de gabarits](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)

> En complément, voici [une vidéo YouTube en français](https://youtu.be/-7JTdtroBpI) qui creuse le sujet plus en profondeur.

## Shorthand property names (raccourcis pour les noms de propriétés)

Tellement courant et utile que je le fais maintenant sans y penser.

```js
const a = "hello";
const b = 42;
const c = { d: [true, false] };
console.log({ a, b, c });

// même chose que :
console.log({ a: a, b: b, c: c });

// en React:
function Counter({ initialCount, step }) {
  const [count, setCount] = useCounter({ initialCount, step });
  return <button onClick={setCount}>{count}</button>;
}
```

[MDN : Initialisateur d'objet, nouvelles notations ECMAScript 2015](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#nouvelles_notations_ecmascript_2015_es6)

> [Très courte vidéo en français](https://youtu.be/gbNcdcgIZzk) pour ceux qui préfèrent voir les choses en live.

## Arrow functions (Fonctions fléchées)

Les _Arrow functions_ sont une nouvelle manière d'écrire les fonctions en JavaScript, mais avec quelques différences sémantiques.
Heureusement pour nous dans l'univers React, on ne doit pas trop s'inquiéter avec `this` tant qu'on utilise des _React hooks_ (plutôt que des classes).
Mais les _arrow functions_ nous permettent de générer des fonctions anonymes plus courtes avec un retour implicite, vous les verrez donc et voudrez les utiliser pleinement.

```js
const getFive = () => 5;
const addFive = (a) => a + 5;
const divide = (a, b) => a / b;

// même chose que :
function getFive() {
  return 5;
}
function addFive(a) {
  return a + 5;
}
function divide(a, b) {
  return a / b;
}

// en React:
function TeddyBearList({ teddyBears }) {
  return (
    <ul>
      {teddyBears.map((teddyBear) => (
        <li key={teddyBear.id}>
          <span>{teddyBear.name}</span>
        </li>
      ))}
    </ul>
  );
}
```

Une chose à noter par rapport au dernier exemple au-dessus, ce sont les parenthèses qui commencent juste après la flèche "`=>`".
Il s'agit simplement d'une façon commune de gérer le retour implicite de la fonction dans du JSX.

[MDN : Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Destructuring (décomposition)

Le _destructuring_ est probablement ma fonctionnalité préférée en JavaScript.
Je _destructure_ les objets et les tableaux continuellement (et si vous utilisez `useState`, vous le faites probablement aussi, comme [expliqué ici (EN 🇺🇸)](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals)).
J'aime à quel point c'est déclaratif.

```js
// const obj = {x: 3.6, y: 7.8}
// makeCalculation(obj)

function makeCalculation({ x, y: d, z = 4 }) {
  return Math.floor((x + d + z) / 3);
}

// même chose que :
function makeCalculation(obj) {
  const { x, y: d, z = 4 } = obj;
  return Math.floor((x + d + z) / 3);
}

// ce qui revient au même que :
function makeCalculation(obj) {
  const x = obj.x;
  const d = obj.y;
  const z = obj.z === undefined ? 4 : obj.z;
  return Math.floor((x + d + z) / 3);
}

// en React:
function UserGitHubImg({ username = "ghost", ...props }) {
  return <img src={`https://github.com/${username}.png`} {...props} />;
}
```

[MDN : Affecter par décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Lisez vraiment cet article sur MDN, vous êtes certains d'apprendre quelque chose de nouveau. Une fois que c'est fait, essayez de refactorer le code en dessous en utilisant une seule ligne de décomposition.

```js
function nestedArrayAndObject() {
  // refactorer ceci avec une seule ligne de décomposition
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };
  // const {} = info // <-- remplacez les quelques lignes suivantes qui commencent par `const` avec celle-ci
  const title = info.title;
  const protagonistName = info.protagonist.name;
  const enemy = info.protagonist.enemies[3];
  const enemyTitle = enemy.title;
  const enemyName = enemy.name;
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}
```

> Pour ceux qui en veulent toujours plus, vous serez servis avec [une vidéo détaillée sur l'Object destructuring](https://youtu.be/qHq7Ma3SZgU) ainsi qu'une [autre vidéo dédiée à l'Array destructuring](https://youtu.be/hOT9WvHu7lI).

## Parameter defaults (Valeurs par défaut des arguments)

Une autre fonctionnalité que j'utilise tout le temps. C'est une façon puissante et déclarative de définir des valeurs par défaut pour vos arguments de fonctions.

```js
// add(1)
// add(1, 2)
function add(a, b = 0) {
  return a + b;
}

// même chose que :
const add = (a, b = 0) => a + b;

// aussi identique à :
function add(a, b) {
  b = b === undefined ? 0 : b;
  return a + b;
}

// en React:
function useLocalStorageState({
  key,
  initialValue,
  serialize = (v) => v,
  deserialize = (v) => v,
}) {
  const [state, setState] = React.useState(
    () => deserialize(window.localStorage.getItem(key)) || initialValue,
  );

  const serializedState = serialize(state);
  React.useEffect(() => {
    window.localStorage.setItem(key, serializedState);
  }, [key, serializedState]);

  return [state, setState];
}
```

[MDN : Valeurs par défaut des arguments](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters)

> Et encore [une vidéo pour aller plus loin](https://youtu.be/s0dEkdh59jw) et comprendre de suite quelques pièges à éviter.

## Rest/Spread (Paramètres du reste / Syntaxe de décomposition)

Les `...` peuvent être compris comme une sorte de syntaxe de "collection" qui opère sur une collection de valeurs.
Je l'utilise tout le temps et je vous recommande chaudement d'apprendre quand et comment elle peut être utilisée.
Cette syntaxe prend un sens différent en fonction du contexte, donc apprendre en détail les nuances peut vraiment vous aider.

```js
const arr = [5, 6, 8, 4, 9];
Math.max(...arr);
// même chose que :
Math.max.apply(null, arr);

const obj1 = {
  a: "a from obj1",
  b: "b from obj1",
  c: "c from obj1",
  d: {
    e: "e from obj1",
    f: "f from obj1",
  },
};
const obj2 = {
  b: "b from obj2",
  c: "c from obj2",
  d: {
    g: "g from obj2",
    h: "g from obj2",
  },
};
console.log({ ...obj1, ...obj2 });
// identique à :
console.log(Object.assign({}, obj1, obj2));

function add(first, ...rest) {
  return rest.reduce((sum, next) => sum + next, first);
}
// même résultat que :
function add() {
  const first = arguments[0];
  const rest = Array.from(arguments).slice(1);
  return rest.reduce((sum, next) => sum + next, first);
}

// en React:
function Box({ className, ...restOfTheProps }) {
  const defaultProps = {
    className: `box ${className}`,
    children: "Empty box",
  };
  return <div {...defaultProps} {...restOfTheProps} />;
}
```

[MDN : Syntaxe de décomposition](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[MDN : Paramètres du reste](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## ES Modules

Si vous concevez une app avec des outils modernes, il y a de grandes chances pour qu'ils supportent les modules.
C'est une bonne idée d'apprendre la syntaxe nécessaire à leur utilisation, car n'importe quelle application, même de taille modeste, va certainement avoir besoin de modules
pour la réutilisation de code et l'organisation.

```js
export default function add(a, b) {
  return a + b;
}

/*
 * import add from './add'
 * console.assert(add(3, 2) === 5)
 */

export const foo = "bar";

/*
 * import {foo} from './foo'
 * console.assert(foo === 'bar')
 */

export function subtract(a, b) {
  return a - b;
}

export const now = new Date();

/*
 * import {subtract, now} from './stuff'
 * console.assert(subtract(4, 2) === 2)
 * console.assert(now instanceof Date)
 */

// import dynamique :
import("./some-module").then(
  (allModuleExports) => {
    // l'objet `allModuleExports` sera le même que si vous aviez fait :
    // import * as allModuleExports from './some-module'
    // la seule différence est que ce sera chargé de manière asynchrone, ce qui
    // peut avoir des bénéfices en termes de performances
  },
  (error) => {
    // gestion de l'erreur
    // cela arrivera s'il y a eu un problème pour charger ou lancer le module
  },
);

// en React:
import React, { Suspense, Fragment } from "react";

// import dynamique de composant React
const BigComponent = React.lazy(() => import("./big-component"));
// big-component.js devra alors "export default BigComponent" pour que ça puisse fonctionner
```

[MDN : import](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/import)

[MDN : export](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/export)

Comme ressource supplémentaire, Kent a donné un webinaire sur cette syntaxe que vous pouvez [visionner directement ici (EN 🇺🇸)](https://www.youtube.com/watch?v=kTlcu16rSLc&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)

## Ternaries (ternaires)

J'adore les ternaires, magnifiquement déclaratifs, surtout en JSX.

```js
const message = bottle.fullOfSoda
  ? "The bottle has soda!"
  : "The bottle may not have soda :-(";

// même chose que :
let message;
if (bottle.fullOfSoda) {
  message = "The bottle has soda!";
} else {
  message = "The bottle may not have soda :-(";
}

// en React:
function TeddyBearList({ teddyBears }) {
  return (
    <React.Fragment>
      {teddyBears.length ? (
        <ul>
          {teddyBears.map((teddyBear) => (
            <li key={teddyBear.id}>
              <span>{teddyBear.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>There are no teddy bears. The sadness.</div>
      )}
    </React.Fragment>
  );
}
```

Je me rends compte que les ternaires peuvent rebuter certaines personnes qui ont du subir des maux de cranes en essayant de comprendre
certains ternaires dans leur code avant que [prettier](https://prettier.io/) n'arrive pour harmoniser le code.
Si vous n'utilisez pas déjà prettier, je vous recommande fortement de vous y mettre.
Prettier rendra vos ternaires bien plus faciles à lire.

[MDN : opérateur conditionnel](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Array Methods (méthodes sur les tableaux)

Les tableaux sont fantastiques, et j'utilise les méthodes de tableaux toute la journée !
Voici celles que j'utilise probablement le plus :

- [find](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [some](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [every](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [includes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Voici quelques exemples :

```js
const dogs = [
  {
    id: "dog-1",
    name: "Poodle",
    temperament: [
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-2",
    name: "Bernese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
    id: "dog-3",
    name: "Labrador Retriever",
    temperament: [
      "Intelligent",
      "Even Tempered",
      "Kind",
      "Agile",
      "Outgoing",
      "Trusting",
      "Gentle",
    ],
  },
];

dogs.find((dog) => dog.name === "Bernese Mountain Dog");
// {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}

dogs.some((dog) => dog.temperament.includes("Aggressive"));
// false

dogs.some((dog) => dog.temperament.includes("Trusting"));
// true

dogs.every((dog) => dog.temperament.includes("Trusting"));
// false

dogs.every((dog) => dog.temperament.includes("Intelligent"));
// true

dogs.map((dog) => dog.name);
// ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']

dogs.filter((dog) => dog.temperament.includes("Faithful"));
// [{id: 'dog-1', ..etc}, {id: 'dog-2', ...etc}]

dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperament];
}, []);
// [ 'Intelligent', 'Active', 'Alert', ...etc ]

// en React:
function RepositoryList({ repositories, owner }) {
  return (
    <ul>
      {repositories
        .filter((repo) => repo.owner === owner)
        .map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
    </ul>
  );
}
```

[MDN : Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Nullish coalescing operator (Opérateur de coalescence des nuls)

Si une valeur vaut `null` ou `undefined`, alors vous voudriez peut-être vous rabattre sur une valeur par défaut :

```js
// ça, c'est ce qu'on fait souvent déjà :
x = x || "some default";

// mais ça peut être problématique pour les nombres ou booléens pour lesquels "0" ou "false" sont des valeurs valides

// donc, si on souhaite autoriser cela
add(null, 3);

// voilà ce qu'on devait faire au préalable :
function add(a, b) {
  a = a == null ? 0 : a;
  b = b == null ? 0 : b;
  return a + b;
}

// et maintenant, on peut juste faire ceci :
function add(a, b) {
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}

// en React:
function DisplayContactName({ contact }) {
  return <div>{contact.name ?? "Unknown"}</div>;
}
```

[MDN : Opérateur de coalescence des nuls](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

## Optional chaining (Chaînage optionnel)

Aussi connu sous le nom de "Elvis Operator", il permet d'accéder en toute sécurité à des propriétés et méthodes pouvant ne pas exister.
Avant cet opérateur, on utilisait souvent un hack de contournement utilisant un opérateur logique vérifiant le caractère `truthy` ou non de ce qu'on essaye d'accéder.

```js
// ce qu'on faisait avant l'optional chaining
const streetName = user && user.address && user.address.street.name;

// comment on peut l'écrire maintenant :
const streetName = user?.address?.street?.name;

// en dessous ça fonctionnera même si `options` est `undefined` (et dans ce cas `onSuccess` vaudra aussi `undefined`)
// par contre, ça échouera si `options` n'a jamais été déclaré
// car l'optional chaining ne peut pas être utilisé sur des objets non existants à la racine
// l'optional chaining ne remplace donc pas les vérifications du genre `if (typeof options == "undefined")`
const onSuccess = options?.onSuccess;

// cela tournera sans erreur même si `onSuccess` vaut `undefined` (dans ce cas, aucun appel de fonction n'aura lieu)
onSuccess?.({ data: "yay" });

// et il est possible de chaîner ce genre de choses en une ligne
options?.onSuccess?.({ data: "yay" });

// et si vous êtes 100% certains que `onSuccess` est une fonction dès lors que `options` existe
// alors vous n'avez pas besoin d'ajouter l'opérateur `?.` avant de l'appeler. Utilisez seulement `?.
// dans les situations où la propriété/méthode sur la gauche peut ne pas exister.
options?.onSuccess({ data: "yay" });

// en React:
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <strong>{user.bio?.slice(0, 50)}...</strong>
    </div>
  );
}
```

Petite mise en garde par rapport à cette fonctionnalité : si jamais vous vous retrouvez à écrire beaucoup de `?.` dans votre code,
vous devriez peut-être identifier d'où ces valeurs potentiellement manquantes viennent et modifier le code pour faire en sorte
que vous soyez sûr que vous pouvez y accéder (et vous passer de l'opérateur `?.`).

[MDN : Chaînage optionnel](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Promise et async/await

Voilà un gros sujet, et ça peut prendre un certain temps et pas mal de pratique avant de devenir bon là-dessus.
Les _promises_ sont présentes partout dans l'écosystème JavaScript, et étant donné comment React est bien implanté dans cet écosystème,
elles y sont présentes tout autant (en fait, le code de React même utilise les _promises_).

Les _promises_ vous aident à gérer le code asynchrone et sont retournées par pas mal d'API du DOM tout comme un bon nombre de librairies tierces.
La syntaxe `async/await` est utilisée pour manipuler les _promise_ de manière plus procédurale. Les deux fonctionnent de pair.

```js
function promises() {
  const successfulPromise = timeout(100).then((result) => `success: ${result}`);

  const failingPromise = timeout(200, true).then(null, (error) =>
    Promise.reject(`failure: ${error}`),
  );

  const recoveredPromise = timeout(300, true).then(null, (error) =>
    Promise.resolve(`failed and recovered: ${error}`),
  );

  successfulPromise.then(log, logError);
  failingPromise.then(log, logError);
  recoveredPromise.then(log, logError);
}

function asyncAwaits() {
  async function successfulAsyncAwait() {
    const result = await timeout(100);
    return `success: ${result}`;
  }

  async function failedAsyncAwait() {
    const result = await timeout(200, true);
    return `failed: ${result}`; // ce ne sera pas exécuté
  }

  async function recoveredAsyncAwait() {
    let result;
    try {
      result = await timeout(300, true);
      return `failed: ${result}`; // ce ne sera pas exécuté
    } catch (error) {
      return `failed and recovered: ${error}`;
    }
  }

  successfulAsyncAwait().then(log, logError);
  failedAsyncAwait().then(log, logError);
  recoveredAsyncAwait().then(log, logError);
}

function log(...args) {
  console.log(...args);
}

function logError(...args) {
  console.error(...args);
}

// C'est le vaisseau mère de toutes le appels asynchrones au dessus
function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`);
      } else {
        resolve(`resolved after ${duration}ms`);
      }
    }, duration);
  });
}

// en React:
function GetGreetingForSubject({ subject }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [greeting, setGreeting] = React.useState(null);

  React.useEffect(() => {
    async function fetchGreeting() {
      try {
        const response = await window.fetch("https://example.com/api/greeting");
        const data = await response.json();
        setGreeting(data.greeting);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchGreeting();
  }, []);

  return isLoading ? (
    "loading..."
  ) : error ? (
    "ERROR!"
  ) : greeting ? (
    <div>
      {greeting} {subject}
    </div>
  ) : null;
}
```

[MDN : Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[MDN : async function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)

[MDN : await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await)

## Conclusion

Il y a bien entendu de nombreuses fonctionnalités intéressantes dans le langage pour concevoir des apps en React,
mais celles-ci sont parmi mes préférées et je me rends compte que je les utilise tout le temps.
J'espère que ça vous sera utile.

Si vous désirez entrer dans le détail, Kent a donné une conférence enregistrée sur le sujet quand il travaillait à Paypal
et qui vous sera probablement utile : [ES6 and Beyond Workshop at Paypal (EN 🇺🇸)](https://www.youtube.com/playlist?list=PLV5CVI1eNcJgUA2ziIML3-7sMbS7utie5)
