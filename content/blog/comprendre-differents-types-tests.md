---
title: Comprendre les différents types de tests
date: "2019-06-14"
picture: "/images/blog/un-dev-qui-teste.png"
pictureAlt: Un développeur en chemise de chimiste, testant des fonctions dans des tubes en verre. Illustration [Mickaël Merley](https://mickaelmerley.com/)
excerpt: Tests unitaires, fonctionnels ou d'intégration, pas facile de s'y retrouver. Voici l'essentiel à savoir pour bien comprendre la différence entre ces types de tests
---

Pendant longtemps, j'ai été un peu paumé par rapport aux différents types de tests qui existent. On en entend parler dans des articles ou par des collègues, ou bien l'on met en place ces différents types de tests sans même s'en rendre compte.

Mais c'est assez dangereux de mélanger des tests qui servent des objectifs différents. Non seulement un bon test décrit ce qui est testé et comment, mais aussi il doit être placé au bon endroit et garder un focus très ciblé sur ce qui est testé.

Voici une description sommaire, mais compréhensible des différents types de tests que l'on peut retrouver communément dans nos applications.

## Les tests unitaires, ou comment tester des briques élémentaires

On commence avec les fondations. À mon sens, ce sont les tests qui apportent le plus de valeur au développeur et au produit.

Ils doivent :

- tester uniquement un _composant_ individuel, son API et s'assurer qu'il fonctionne comme prévu
- être très léger en termes de code et de performance
- renvoyer un bon rapport en cas d'erreur ou de régression

Entendre ici _composant_ comme une partie élémentaire, presque atomique de notre application : une fonction, une classe, **un composant d'UI ou un hook en react**, un reducer, un controller de route, etc.

Les avantages des tests unitaires sont importants :

- ils donnent un retour direct en quelques millisecondes sur le code testé.
- ils permettent [d'écrire très facilement des fonctionnalités en TDD](https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80)
- ils sont tellement précis que l'on peut connaitre très rapidement la cause d'une régression et la manière de la corriger
- ils sont rapides à mettre en place et rapide à s'exécuter
- ils sont simples (et doivent le rester)

Vous l'avez compris, c'est le type de test idéal pour débuter dans le testing automatisé. Ils constituent le socle sur lequel repose la qualité de votre software.

Avec ce type de tests, vous pouvez viser assez facilement une couverture du code proche du 100%, surtout s'ils sont écrits en TDD.

Idéalement, les fichiers de tests devraient se trouver aussi proches du fichier testé. Par exemple :

```
- src
 - authentication-reducer.ts
 - authentication-reducer.test.ts
```

## Les tests d'intégration, ou comment savoir si les éléments sont correctement branchés ensemble

Les tests d'intégration portent aussi bien leur nom, ils vérifient simplement que les différentes parties de votre programme, que vous avez testé individuellement via des tests unitaires, fonctionnent bien une fois _intégrées_ ensemble.

Si vous utilisez redux, ça pourrait être de tester qu'une action appelée passe bien dans le reducer et modifie bien le store comme prévu.

L'idéal est de tester des cas d'usages réels ou très proches du réel. Pour le back, ça peut être de tester qu'un POST a bien créé une nouvelle entrée en base correctement.

Prenons l'analogie du corps humain. Les tests unitaires vérifient que tel muscle fonctionne bien, tel os est assez solide. Les tests d'intégrations vont vérifier qu'avec telle impulsion nerveuse, on devrait voir se lever le bras.

Ces tests apportent beaucoup de valeur aussi à un niveau plus avancé du développement, car certaines régressions arrivent lors de l'ajout d'une librairie, d'un wrapper de composant, d'un changement d'architecture. Et bien que vos tests unitaires peuvent afficher tout vert, vous auriez quand même _cassé_ une fonctionnalité.

Il n'est pas forcément utile de chercher une couverture de code énorme. Ces tests sont plus couteux à maintenir, et il y a plus de chances d'avoir de faux positifs (des tests qui échouent alors que tout va bien).

Néanmoins, il est essentiel de disposer d'au minimum un test de ce type pour chaque point de jonction entre les différentes parties.

## Les tests fonctionnels, ou _end-to-end_

Les tests fonctionnels portent plutôt mal leur nom, c'était la principale source de confusion pour moi. _End-to-end_ leur correspond mieux, que l'on pourrait traduire par tests de bout en bout.

L'objectif ici est de vérifier le fonctionnement d'une fonctionnalité entière du point de vue de l'utilisateur.

C'est le type de test le plus difficile à mettre en place, on le réserve généralement pour vérifier des parcours critiques de l'application comme l'authentification ou l'achat en ligne.

En gros, on utilise des outils qui vont réellement utiliser notre service, comme un utilisateur physique, généralement via des VM, et effectuer une suite d'action. Par exemple :

- Se rendre à telle URL
- Remplir le champ email
- Remplir le champ password
- Cliquer sur "Se connecter"
- Attendre 1 seconde
- Vérifier que l'on voit son email affiché dans le menu

Ce petit parcours permet tout simplement de tester que l'authentification fonctionne correctement pour le cas nominal.

Ces tests sont couteux à mettre en place, car ils nécessitent de bons outils, généralement payants ou longs à mettre en place. Ils sont aussi beaucoup plus longs à s'exécuter que les autres types de tests, car ils ont souvent besoin de faire des requêtes web par exemple.

Mais ils restent la meilleure façon de vérifier que les parties les plus critiques de notre application fonctionnent bien et ne subissent pas de régression.

## Bonus : Snapshot et smoke tests

Les snapshots sont une façon d'écrire des tests unitaires. Grosso modo, on écrit le test juste en donnant une description et en passant des arguments à notre fonction/classe que l'on veut tester. Et notre outil va générer une représentation (en JSON par exemple) du résultat.

À partir de là, on va sauvegarder cette capture de l'état du résultat en fonction des entrées données, et le _verrouiller_. Concrètement, si quelqu'un modifie notre fonction et que le résultat change, le test va échouer.

Le développeur qui verra échouer ce snapshot va alors devoir vérifier que le changement est bien désiré, ou s'il s'agit d'une régression. Si le nouveau résultat doit remplacer l'ancien, alors l'outil mettra à jour le snapshot et le test repassera au vert.

À mon humble avis, les snapshots sont une mauvaise idée. Bien qu'ils soient faciles à comprendre et à mettre en place, ils échouent sur plusieurs points plus importants :

- pas de TDD possible, le snapshot étant généré après l'écriture de la fonctionnalité (et écrire des résultats attendus en JSON est contre-productif)
- les tests passent au rouge très souvent, la majorité du temps pour des changements désirés. Or le but des tests, c'est d'attraper des régressions, pas des changements
- il n'est pas toujours facile de s'y retrouver dans la capture, et le temps de débug est souvent plus long pour comprendre l'origine d'une régression comparé à un test classique où l'on va pouvoir jouer avec le code autour du test
- il est très facile de cliquer sur "Mettre à jour les snapshots" dès que ça passe au rouge, surtout pour des développeurs un peu trop confiants sur leurs modifications. Et il est très difficile pour un relecteur de faire la différence entre un snapshot mis à jour pour modification désirée ou mis à jour avec une régression

Pour toutes ces raisons, j'ai arrêté de pratiquer cette méthode de tests unitaires.

Quant aux smoke tests, il s'agit en fait d'une suite de tests déjà décrits précédemment (généralement des tests d'intégrations ou fonctionnels) qui sont lancés juste après un déploiement pour s'assurer que les parties critiques de l'application n'aient pas été impactées par la mise à jour.

En plus de ces smoke tests, je recommande de lancer votre suite de tests unitaires et fonctionnels à chaque commit, et la batterie complète de tous les tests à chaque push sur l'intégration continue (ou en local à défaut).

## Bonus 2 : statistiques et études autour du TDD

Une des choses les plus difficiles à savoir quand on débute ou qu'on se renseigne sur des techniques comme le TDD, c'est de savoir à quel point elles sont efficaces, et si elles le sont vraiment.

Les développeurs qui ont expérimenté le TDD depuis de nombreuses années sont assez unanimes : cela permet d'aller au moins aussi vite que sans TDD, le code est de meilleure qualité, moins de frictions aux changements et à la maintenabilité, une plus grande confiance et satisfaction dans son travail.

Je peux confirmer personnellement chacun de ces aspects, mais c'est loin d'être suffisant, car ce sont des jugements personnels subjectifs.

Heureusement, certaines personnes ont réussi à condenser quelques études autour du TDD, comme dans [cet article en anglais](https://theqalead.com/general/statistics-studies-benefits-test-driven-development/).

Vous y trouverez quelques résumés et leurs sources, et pourrez ainsi avoir des arguments tangibles si jamais vous devez convaincre votre boss (ou vous-même) de la pertinence d'une telle méthode.
