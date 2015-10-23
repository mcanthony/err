# Boilerplate

> Inspired by Sindre Sorhus [electron-boilerplate](https://github.com/sindresorhus/electron-boilerplate)

Boilerplate with (E)lectron (R)eact and (R)edux-devtools.

## Notes to myself

When you are ready to deploy your app, first change path to `/index.html` (in root folder) file in `index.js`.

## Developing

First watch files
```
npm run watch
```

Start app
```
npm start
```

If you get ENOENT after renaming folder
```
npm rebuild
```

Run tests
```
npm test
```

## Deploy

Build sources with webpack
```
npm run scripts
```

Build to all platforms. Results goes to `dist/` folder
```
npm run build
```

Make tar.gz (with symbolic links ?)
```
tar -zcvf my-app.tar.gz directory-name -h
```
