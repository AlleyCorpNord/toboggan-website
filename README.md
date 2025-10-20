# toboggan-website

Next.js app with Intlayer for content localization.

### Requirements

- Node.js 24+ and npm

### Installation

```bash
cd app && npm install
```

### Start

```bash
npm run dev
```

App runs at `http://localhost:3000`

### Start local editor

```bash
npx intlayer-editor start 
```

Then go to `http://localhost:8000`

### Dictionary Sync from the Remote CMS

```bash
npx intlayer dictionaries pull
```

After pulling, copy the downloaded dictionaries from `app/intlayer-dictionaries` to the target folder and delete the `app/intlayer-dictionaries` folder.

### Build (production)

```bash
npm run build
npm start
```
