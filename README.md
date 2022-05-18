# ngoding.org

This repository is the home for [ngoding.org](https://ngoding.org) prelaunch website, while we are building the [ngoding.org's main website](https://github.com/ngodingorg/ngodingorg).

It was build using [TypeScript](https://www.typescriptlang.org/), [SolidJS](https://solidjs.com), and [TailwindCSS](https://tailwindcss.com/).

*Note: I designed the logo, UI, and code it in just few hours. There are a lot of things to improve here. But it is just a pre-launch website. I don't want to spend most of my times here.*

## Usage

We are strongly suggest to use [pnpm](https://pnpm.io) as the preferred package manager while working with this project, since the dependencies are maintained via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work.

```bash
$ pnpm install # or: npm install or yarn install
```

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `pnpm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `pnpm build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Author

[Hisam A Fahri](https://hisamafahri.com): [@hisamafahri](https://github.com/hisamafahri)

### License

[GNU GPLv3](LICENSE)
