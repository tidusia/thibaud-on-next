---
title: Chaque test unitaire doit répondre à ça
date: "2019-03-12"
excerpt: Une suite de tests ne sert à rien si elle ne répond pas à certaines exigences. Voici 5 questions que chaque test unitaire doit répondre.
---

![Test unitaire tout moisi](/images/test-moisi.png) _Un test bien obscur, à jeter à la poubelle dès que possible_

Il existe des auteurs qui changent complètement notre façon de travailler. Eric Elliot en fait partie, et [son article sur les tests unitaires](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d) a radicalement changé ma façon d'écrire mes tests unitaires.

Voici un petit résumé pour ceux qui ont la flemme de suivre le lien, mais avec mon style impur d'écriture =D

## Beaucoup de développeurs ne savent pas comment écrire des tests

On sait tous qu'il faut écrire des tests pour éviter d'envoyer des bugs de l'enfer en production.

Par contre, la plupart des développeurs n'ont pas connaissance des ingrédients essentiels qui constituent **chaque test unitaire**. Eric explique ensuite qu'il a déjà vu des suites de tests entières dont seul l'auteur saurait donner un sens, même au sein d'équipes talenteuses.

## Pourquoi s'embêter avec une telle discipline des tests ?

Plus que les linter et autres outils d'analyses de code, les tests sont la partie la plus importante pour éviter les bugs en amont. C'est une arme qui permet :

1. d'aider à la conception d'une fonctionnalité (surtout avec du TDD)
2. de documenter du code pour d'autre développeurs
3. de tester votre compréhension du problème
4. de supplanter des tests manuels longs et sources d'erreurs, car il devient difficile et fastidieux de tester manuellement toutes les fonctionnalités d'une application
5. de faciliter d'intégration continue en limitant les builds plantés en production

## Les tests en premier

Avant même d'écrire du code, écrivez vos tests.

Eric affirme ensuite que d'après de nombreuses recherches, l'écriture des tests avant l'implémentation est plus efficace que de les ajouter après coup.

> Avant d'implémenter, écris le test

## Un test unitaire doit servir en premier lieu de rapport d'erreur

Dis simplement, si un test échoue, le rapport de votre suite de test doit immédiatement vous indiquer clairement et précisément ce qui ne va pas.

Il doit répondre à ces questions :

1. Qu'est-ce qui est testé ?
2. Qu'est-ce que ça doit faire ?
3. Quel est le résultat actuel ?
4. Quel est le résultat attendu ?

Avec **Jest** on pourrait indiquer dans chaque `describe` la réponse à la première question : `describe('User reducer')`

Ensuite, chaque itération `it` repond à la deuxième question : `it('should return the initial state by default')`

## Vive `toEqual()` 🎉

Il est quasiment toujours possible d'écrire un test qui a pour unique assertion de tester l'égalité entre 2 valeurs.

Et ce serait une excellente idée de se cantonner autant que possible à cette assertion. La raison ? Car `toEqual()` répond directement aux 2 plus importantes questions que chaque test unitaire doit répondre, contrairement à la plupart :

- Quel est le résultat actuel ?
- Quel est le résultat attendu ?

Si vous écrivez un test

<!-- ## Eric Elliot est un auteur formidable

Après je vous conseille fortement la lec -->
