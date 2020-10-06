# Thibaud on Next - blog starter in Next.js

Feel free to use the whole site (as a starter) or parts of it to create your own personal website.

I will try to improve the code quality and apply the more f the best practices available at the time.

At this time, that is not worth the work I do for my clients, my I [planned to upgrade to the same quality](https://github.com/tidusia/thibaud-on-next/projects/2) I deliver in my day job.

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

### Start developing

```bash
npm run dev
```

Will start the dev server, then open [a browser tab at localhost:3000](http://localhost:3000/).

### Build and export as static files

This website was build with a Jamstack mindset, so its purpose is to generate static files
and add some features like prefetching and client-side routing.

The only command you need to get your rendered HTML/CSS/JS/assets is `npm run deploy`
and a `/out` folder will be created and filled with all you need to run your static website.

If you intend to use [Netlify](https://www.netlify.com/) to host your site,
look at the `/netlify.toml` file and see that all the needed instructions for this setup is already there.

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


 