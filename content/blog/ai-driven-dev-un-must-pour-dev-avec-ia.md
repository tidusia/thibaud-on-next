---
title: "IA Driven Dev : Un must pour dev avec l’IA"
date: "2023-03-25"
# picture: "/images/blog/faire-ce-que-on-aime.png"
# pictureAlt: Un freelance qui se demande bien comment allier passion et travail... Illustration [Mickaël Merley](https://mickaelmerley.com/)
excerpt: "L'IA est partout, et elle est de plus en plus présente dans le quotidien. AI Driven Dev Community t'aide à passer au niveau supérieur en te proposant des prompts prêts à l'emploi et un outil pour les utiliser à la vitesse de l'éclair."
---

## Le problème avec l’IA en début 2024

Ici, je n'ai pas cherché à te convaincre d'utiliser l'IA en tant que développeuse. C'est une nécessité.

Je pars du principe que tu travailles déjà avec l'IA au quotidien, et si c'est le cas, tu as sûrement remarquée qu'on atteint assez vite un certain plateau dans les performances qu'on obtient avec les LLM.

Et pour le moment, en début 2024, il n'y a pas 36 solutions pour dépasser ce stade. Tu as besoin des meilleurs prompts pour obtenir de vrais résultats.

Je t'invite vraiment à stocker quelque part tes idées de prompts, pour pouvoir les réutiliser, mais surtout pour pouvoir les retravailler, les peaufiner.

J’aime utiliser le terme de “prompt-crafting” car c’est vraiment le même sentiment que l’on peut avoir en développant une fonctionnalité, qu'on va améliorer, tester, découvrir des failles et retravailler de manière itérative.

Mais aujourd'hui, j'aimerais te partager un cheat code. Une ressource qui va te faire gagner un temps incroyable et qui va te permettre d'obtenir de vrais résultats avec les IA dès aujourd'hui.

Cette ressource, ce cheat code, c’est le [repo de l'AI Driven Dev Community créé par Alex So Yes](https://github.com/alexsoyes/ai-driven-dev-community).

Cette note sert de présentation pour t'aider à prendre en main les ressources qui y sont disponibles et à donner quelques compléments d’informations.

Alex a réalisé [une super vidéo de présentation](https://www.youtube.com/watch?v=1YvECxOn2_Q) que je t'invite fortement à regarder en premier lieu.

## Espanso : l’outil qui change tout

Espanso c’est à la base un outil pour stocker et retrouver des snippets. Mais il possède quelques fonctionnalités qui font toute la différence et qui rendent son utilisation vraiment pertinente pour les prompts :

- compléter le contenu d’un snippet via une petite popup → ça c’est vraiment pratique dans le cas d’un prompt où certaines parties sont statiques (toujours les mêmes) et d’autres dépendent de ta demande (comme un bout de code à lui partager)
- très facile de récupérer et mettre à jour des bases de snippets → comme on va le voir par la suite, en 2 temps 3 mouvements tu pourras utiliser n’importe quel prompt de la communauté
- Derrière, c’est du YAML, donc tu peux versionner avec git tes prompts et éventuellement les partager sur un repo OSS comme celui d’Alex. Ça rend très facile de suivre l’évolution d’un prompt en particulier par exemple
- gain de temps avec les trigger → les prompts que tu utiliseras le plus souvent, tu vas rapidement connaitre le trigger, ce qui te permettra de l’utiliser en un éclair que ce soit dans la fenêtre web de ChatGPT, Github Copilot Chat dans ton IDE ou même un LLM en local.

## Installation et utilisation

Voici [le lien vers le site officiel d’Espanso](https://espanso.org/). Tu peux te rendre directement sur le lien “Installation”

Sache que sur Mac OS, tu peux utiliser Homebrew pour l’installer (ce qui peut faciliter les mises à jour) :

```bash
brew tap espanso/espanso && brew install espanso && espanso start
```

À partir de là, tu peux commencer à tester que les triggers marchent bien, par exemple en te plaçant dans un éditeur de texte et en tapant `:espanso`. Tu devrais voir apparaître alors à la place le texte “Hi there!”, ce qui confirme que l’installation s’est bien passée et qu’Espanso fonctionne bien.

Maintenant, pour pouvoir utiliser immédiatement n’importe quel prompt créé par la communauté AI Driven Dev FR, utilise la commande suivante :

```bash
espanso install ai-driven-dev-prompts --git git@github.com:alexsoyes/ai-driven-dev-community.git --external
```

Si tu rencontres le moindre problème, [retourne sur le repo officiel](https://github.com/alexsoyes/ai-driven-dev-community) pour voir si la méthode d’installation n’a pas changée depuis !

Et maintenant tu devrais être capable d’utiliser n’importe quel prompt en utilisant son trigger ou via la barre de recherche d’Espasnso (ALT + SPACE ou Option + SPACE sur mac).

Par exemple, dans Chat GPT, tape `:codeTestingFixFailedTest` et tu devrais voir une petite popup qui te propose de renseigner l’erreur à debugger, et quand tu valides ce formulaire, le prompt apparaît alors dans Chat GPT, prêt à être envoyé !

## Maîtriser les prompts

Maintenant que tu n'as plus aucune excuse pour ne pas utiliser des prompts tous prêts à portée de main, je te conseille de prendre un peu de temps pour les parcourir, les tester, jouer avec et surtout prendre le réflexe de les ajouter à tes habitudes de développement.

Par exemple, tu travailles sur un projet en Next.js ? Alors crée un GPT en définissant des instructions très pertinentes par rapport à tes besoins et ta manière de travailler en utilisant un des prompts spécifiques pour créer une IA de pair programming.

Ensuite tu souhaites créer un nouveau composant ? Cherche dans la liste des prompts de code pour voir s'il n'est pas possible de brainstormer sur les props à définir, les tests à écrire, l'a11y à prendre en compte. Une fois le bon prompt repéré, note son trigger quelque part, par exemple si tu utilises comme moi des modèles de checklists par type de tâches, ajoute par exemple :

```text
- [ ] Brainstormer sur les props (`:codeCodingHelpThinking`)
```

Le simple fait de laisser les triggers en rappel dans tes process te fera penser à utiliser l'IA et ainsi te faire gagner en productivité et te permettra d'augmenter ton efficience globale en plus d'apprendre de nouvelles choses régulièrement (car oui, un des avantages énormes des IA c'est qu'elles donnent plein d'idées, et souvent des choses auxquelles on n'a pas pensé).

## Le futur

Le rêve, ce serait vraiment de pouvoir configurer des agents par projets, avec des rôles définis et de pouvoir faire de l’IA driven dev en mode TDD. Il y a des avancées comme DEVIN qui montrent que ça pourrait arriver plus vite qu’on ne le pense, mais le gain en efficience est réel. Le job d’une développeuse se rapproche de plus en plus d’une cheffe d’orchestre, tout en laissant la possibilité de jouer d’un instrument quand elle le désire pour corriger une erreur d’interprétation (d’une musicienne ou d’une IA).

En attendant, je t'invite à parcourir [le repo de la communauté](https://github.com/alexsoyes/ai-driven-dev-community/tree/main), et à tester tout ça dans ton quotidien de dev !
