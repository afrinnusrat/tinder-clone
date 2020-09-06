### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Create React Project

1. `$ npx create-react-app .`
2. Bersihin file2 dan program2 yg tidak terpakai

# Setup Firebase Project

1. Create Project in Firebase with name `minder-clone`
2. Klik WebApp Icon
3. Create website name for the project
4. Install firebase-tools `$ npm install -g firebase-tools`
5. Login to firebase `$ firebase login`

# Install Material UI

1. Open [https://material-ui.com/getting-started/installation/](https://material-ui.com/getting-started/installation/)
2. Install material-ui `$ npm install @material-ui/core`
3. Instal material-ui icons `$ npm install @material-ui/icons`
4. Contoh penggunaan, Import PersonIcon

- Click `search the full list of these icons.` will open new tab
- Fill `person` in searchBox and click the person icon
- Copy `import PersonIcon from '@material-ui/icons/Person';` and paste to Header.js file

# Install React Router

1. Open [https://reactrouter.com/](https://reactrouter.com/)
2. Click WEB button
3. Install react-router-dom<br/>
   `$ npm install react-router-dom`

# Install React Tinder Card

1. Open [https://www.npmjs.com/package/react-tinder-card](https://www.npmjs.com/package/react-tinder-card)
2. See in Install Column
3. Install react-router-dom<br/>
   `$ npm i react-tinder-card`

# Setup Firebase Config File

1. Install `$ npm i firebase`
2. Create `firebase.js` file in src folder
3. Goto console firebase and choose the project
4. Click `Setting Project`
5. Go down look at Firebase SDK snippet
6. Click `Config` radion button
7. Copy `const firebaseConfig` and paste to firebase.js and edit

# Setup Database Cloud Firestore

1. Click `Cloud Firestore`
2. Click `Create Database`
3. Click `Start in test mode` and Next
4. Click Done

## Membuat Database di Cloud Firestore

1. Click `Start collection`
2. Fill Collection ID with `people` and then Next
3. Click `Auto-ID` in Document ID column
4. Fill `name` in Field, `String` in Type, and `Denver` in Value
5. Click Add field
6. Fill `url` in Field, `String` in Type, and `https://pley.today/__export/1585133520847/sites/mui/img/2020/03/25/jaime-lorente-la-casa-de-papel-kzxc--1248x698xabc.jpg_1276763261.jpg` (example) in Value
7. Click Save
