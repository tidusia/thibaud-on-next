---
title: Comment nommer (correctement) ses classes pour CSS
date: '2019-12-16T14:00:00.000Z'
description: Ou comment éviter d'apporter le chaos dans vos fichiers HTML 🌪
---

Il existe des sujets d'apparence totalement insignifiante. Des points sur lesquels on imagine mal débattre pendant des heures. **Choisir une bonne valeur pour l'attribut `class` de vos éléments HTML** en fait partie.

Et puis un jour, tu te surprends à écrire ceci :

```html
<button
  class="button button-primary button-big textCenter navbar--close-modal-button navbar--close-modal-button__disabled"
  id="navbarButton"
>
  Kill me please
</button>
```

## Comment on en arrive à ça ?

Si ce bout de code vous donne envie de vomir, c'est normal. Mais avant de jeter la première pierre, ouvrez l'un de vos derniers projets, et essayer d'affirmer avec toute la sincérité du monde que vous n'avez pas écrit une seule ligne de ce genre (si vous êtes data-scientist ou DBA, vous avez des problèmes plus graves à régler, retournez au boulot !).

Alors ? Si vous pouvez le jurer, alors félicitation, la suite de l'article ne vous sera alors probablement pas très utile.

Mais si vous vous surprenez à arriver à cette prose en HTML, alors ces quelques conseils qui arrivent peuvent vous aider.

D'une manière générale, on en arrive là :

- soit quand on mélange plusieurs méthodologies
- soit quand on a échoué à en imposer une

Le bouton d'exemple est un cas d'école de ce premier point. On retrouve des classes de type OOCSS comme `button` et `button-primary` qui pourraient venir d'un framework CSS.

S'ensuite ce qui se rapproche de la méthodologie BEM avec `navbar--close-modal-button` et `navbar--close-modal-button__disabled`.

On a aussi ce qui ressemble à une classe utilitaire `textCenter` en camelCase et un `id` du même acabit.

## La mutation du `button`

Restons lucides, ce bout de code n'est surement pas écrit comme cela la première fois. Il a du passer par plusieures phases dans sa mutation vers le chaos absolu.
