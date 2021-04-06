# Thibaud on Next - blog starter in Next.js

Feel free to use the whole site (as a starter) or parts of it to create your own personal website.

I will try to improve the code quality and apply the most of the best practices available at the time.

At this time, that is not worth the work I do for my clients, but I [planned to upgrade to the same quality](https://github.com/tidusia/thibaud-on-next/projects/2) I deliver in my day job.

Ideas, issues, forks and PR's are welcomed.

## Requirements

It's better if you have a basic understanding of React. It's required that you know HTML/CSS, especially if you want to change the design of the site.

As indicated by its name, the site is build with [Next.js](https://nextjs.org/), a powerful meta-framework on top of [React](https://fr.reactjs.org/).

First requirement: you will need to install [Node.js](https://nodejs.org/en/), LTS version preferably.
This will give you some new commands available in your terminal, like `node`, `npx` or `npm`.

You will need to install the JS dependencies (known as `node_modules`).
To do that, open a terminal in this project's root after cloning this repo, then run `npm install`, it will fetch the dependencies on the network
and save them in a `/node_modules` folder at the root of the project.

## Available commands

### `npm run dev`

Will start the dev server, then open [a browser tab at localhost:3000](http://localhost:3000/).

### `npm run deploy`

This website was build with a Jamstack mindset, so its purpose is to generate static files
and add some features like prefetching and client-side routing.

The only command you need to get your rendered HTML/CSS/JS/assets is `npm run deploy`
and a `/out` folder will be created and filled with all you need to run your static website.

If you intend to use [Netlify](https://www.netlify.com/) to host your site,
look at the `/netlify.toml` file and see that all the needed instructions for this setup are already there.

### `npm run storybook`

Use this to start storybook locally. The page will reload if you make edits.

### `npm run storybook:build`

Use this command if you want to build the storybook app for deployment and sharing.

Your bundle will appear in the `/storybook-static` folder.

Then you can open the `/storybook-static/index.html` file **in Chrome** (due to a [bug in a recent version of Storybook](https://github.com/storybookjs/storybook/issues/12092)).

You can also easily share the build by "zipping" the entire `/storybook-static` folder and send it through email with a documentation about how to de-zip it and opening it.

## About styling

The whole site is styled using [Tailwind CSS](https://tailwindcss.com/docs/utility-first)
which is a **utility-first CSS framework for rapidly building custom designs**, and I
absolutely love it.

I love it so much that I purchased a licence of [Tailwind UI](https://tailwindui.com) which
is a collection of **beautiful UI components, crafted by the creators of Tailwind CSS**.

The [Tailwind UI FAQ](https://tailwindui.com/pricing) indicates that open sourcing projects
using Tailwind UI is totally OK, so you can freely use my code without the need to purchase a licence.

That being said, if you do not want to bother so much about designing components and UI,
I strongly recommend that you take a look at the amazing [components library](https://tailwindui.com/components)
they provide. It saves me so many hours of work.

## Code quality

This project makes use of some popular code quality tools :

- Prettier : to stick with the same code styleguide across the whole project (and ensure contributors also do)
- Eslint + some react plugins : to check for a11y, classical JS and React errors, and other goodies
- TypeScript : for... type insurance!

It is recommended that you integrate those tools with your favorite IDE. All configuration files are at the root of this folder.

Then, to ensure everything is fine when adding some code, a bunch of things happens on each commit.

Husky adds some hooks to run the package.json script `pre-commit`. This script is intended to check that everything is clean. As of writing, its commands are :

- `prettier:check` to check if all the files are formatted correctly
- `lint` to check if all the files are matching the required eslint rules
- `typescript:check` for... validating TypeScript

All of these assure good and high standards regarding the quality of the code.
