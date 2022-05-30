<p align="center">
  <a href="https://github.com/rawic/react-news-feed">
    <img src="readme/logo.svg" height="35" alt="rawic.me Logo">
  </a>

  <h3 align="center">React News Feed</h3>

  <p align="center">
    Infinite Scroll And Lazy Loading.
    <br />
    <strong>Live demo soon</strong>
    <br />
    <br />
    <a href="https://github.com/rawic/react-news-feed/issues">Report Bug</a>
    ·
    <a href="https://github.com/rawic/react-news-feed/issues">Request Feature</a>
  </p>
</p>

## About React news feed

<a align="center" href="https://github.com/rawic/react-news-feed" rel="nofollow noopener noreferrer" target="blank">
  <img src="readme/app-screenshot.jpg" alt="rawic.me - home page" style="max-width: 100%;">
</a>

### Checklist

- Lazy load images ✔️
- Fetch data ✔️
- Transitions ✔️
- RWD ✔️
- Virtual scrolling ❌
- Styled Components ❌
- Hooks (Custom hooks) ✔️
- Compound components ❌
- Cache ❌
- PropTypes ✔️
- Automated tests (Jest, React Testing Library) ❌
- Migrate to TypeScript ❌
- Configure ESlint & Prettier ✔️
- ...

### Built with

- React
- React Preload Image
- React Transition Group

## Getting started

### Prerequisites

- yarn

```sh
npm install -g yarn
```

### Installation

Using Yarn:

1. Clone the repository

```sh
https://github.com/rawic/react-news-feed.git
```

2. Go to the project directory

```sh
cd react-news-feed
```

3. Install packages

```
yarn
```

## Usage

Run the app (+ JSON Server on port 4000)

```sh
yarn dev
```

Build the app

```sh
yarn build
```

### Usage via network

Modify `json-server` command in the packages.json file (e.g. `json-server --host 192.168.1.1 --watch db.json --port 4000`).

Modify `API_URL` in the constants.js file (e.g. `http://192.168.1.1:4000`).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rafał Wichowski - [@rafalwichowski](https://twitter.com/rafalwichowski) - [hi@rawic.me](mailto:hi@rawic.me)

Project Link: [https://rawic.github.io/react-news-feed](https://rawic.github.io/react-news-feed/)

[app-screenshot]: readme/app-screenshot.jpg
