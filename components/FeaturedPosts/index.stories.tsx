import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import FeaturedPosts, { Props } from ".";

export default {
  title: "FeaturedPosts",
  component: FeaturedPosts,
} as Meta;

const Template: Story<Props> = (args) => <FeaturedPosts {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Tout le blog !",
  subtitle:
    "En vrac, des articles techniques sur mes sujets favoris du moment, sur le freelancing, ou bien tout autre sujet assez fun pour me justifier d'y passer du temps à l'écrire.",
  posts: [
    {
      href: "/blog/comment-faire-ce-que-on-aime-en-gagnant-bien-sa-vie",
      title: "Comment faire ce qu'on aime en gagnant bien sa vie",
      picture: "",
      pictureAlt:
        "Un freelance qui se demande bien comment allier passion et travail... Illustration [Mickaël Merley](https://mickaelmerley.com/)",
      excerpt:
        "La réponse qu'on nous donne est souvent d'être passionné par son boulot. Je propose une autre approche.",
      publishDate: "2020-12-06",
      timeReading: "8 minutes",
    },
    {
      href: "/blog/mais-pourquoi-diable-passer-certification-qualite-web",
      title: "Mais pourquoi diable passer la certification qualité web ?",
      picture: "",
      pictureAlt: "Badge expert Opquast avec un score de 920 points sur 1000.",
      excerpt:
        "C'est vrai quand même, à quoi ça peut bien servir ? On a tous une bonne idée de ce qui fait un site de qualité non ?",
      publishDate: "2020-06-28",
      timeReading: "6 minutes",
    },
    {
      href: "/blog/comprendre-differents-types-tests",
      title: "Comprendre les différents types de tests",
      picture: "",
      pictureAlt:
        "Un développeur en chemise de chimiste, testant des fonctions dans des tubes en verre. Illustration [Mickaël Merley](https://mickaelmerley.com/)",
      excerpt:
        "Tests unitaires, fonctionnels ou d'intégration, pas facile de s'y retrouver. Voici l'essentiel à savoir pour bien comprendre la différence entre ces types de tests",
      publishDate: "2019-06-14",
      timeReading: "6 minutes",
    },
  ],
};
