<h1 align="center">sonic-search</h1>
<p align="center">Test app to create pages and search for it using <a href="https://github.com/valeriansaliou/sonic">Sonic</a>.</p>

### What is that ?

I've never tried a search engine before, so i tried <a href="https://github.com/valeriansaliou/sonic">Sonic</a>, which is a search engine made with <a href="https://www.rust-lang.org/">Rust</a>.

Rust is so fast, so Sonic is very fast too, it runs on ~30MB RAM and can find 1 item between 1.000.000 in 0.8ms.

### Requirements

- Docker
- Yarn or NPM
- Node

### How to use it

After download, run this command to install the sonic container image:
```
docker pull valeriansaliou/sonic:v1.3.2
```

Then, run the container:
```
docker run -p 1491:1491 -v $(pwd)/sonic/sonic.cfg:/etc/sonic.cfg -v $(pwd)/sonic/store/:/var/lib/sonic/store/ valeriansaliou/sonic:v1.3.2
```

or run in background:
```
docker run -p 1491:1491 -v $(pwd)/sonic/sonic.cfg:/etc/sonic.cfg -v $(pwd)/sonic/store/:/var/lib/sonic/store/ -d valeriansaliou/sonic:v1.3.2
```

Run this command to install the dependencies:

```
cd api && yarn --prod
# or
cd api && npm i --prod
```

Then, run the application:
```
yarn start
# or
npm run start
```

### API/Routes

POST:
- `/pages`: Create a new page.

GET:
- `/search`: Search for a page (return its ID).
- `/suggest`: Get the suggestion of a search.

### Development

If you want to work with this code, install the `devDependencies`:
```
yarn
# or
npm i
```

Run the code with nodemon:

```
yarn dev
# or
npm run dev
```


Good luck! 🤓