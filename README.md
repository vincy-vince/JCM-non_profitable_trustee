# Hosting Vite.JS application using Catalyst AppSail

<!-- To host your Vite.js application in Catalyst we would suggest you check our Catalyst AppSail feature. Catalyst AppSail is a **Platform-as-a-Service(PaaS)** feature of Catalyst that helps you host your Standalone applications in Catalyst.

You can find the help documentation for Catalyst AppSail [here](https://docs.catalyst.zoho.com/en/serverless/help/appsail/introduction/).

You can find detailed instructions on how to host a Sample Vite.Js application in Catalyst using Catalyst AppSail below:

![]()

---

## Create a Catalyst project in Catalyst Console:

- You can find help documentation for creating a Catalyst Project [here](https://docs.catalyst.zoho.com/en/getting-started/catalyst-projects/#create-a-catalyst-project).
- Kindly follow instructions mentioned in the above help document to create a project in your catalyst console.

---

![]()

## Install Catalyst CLI in your local machine:

- To access your Catalyst project in your local machine you need to install our Catalyst CLI by using the below command in your terminal.
  - **``sudo npm install -g zcatalyst-cli``**
- The above command will install Catalyst CLI in your local machine which you can confirm by using the command **catalyst** which will list all the available commands in your terminal.

---

![]()

## Initialize your Catalyst AppSail in your Local machine using Catalyst CLI:

- Create a folder for your Catalyst project in your local machine and navigate to that folder in your terminal.
- Create three folders called ***build*** , ***server*** and ***scripts*** inside your project folder
- Now try using the below command to initialize your Catalyst project in your local machine.

  - **``catalyst init``**
- After choosing your project the CLI prompts you to choose the features you wish to initialise. Use the arrows keys to navigate to **AppSail** and mark it using **Spacebar** and Press Enter.
- You can then enter **No** for the prompt *"Do you want to get-started with a list of recommended projects?"*
- Next, You can enter **Yes** for the prompt *"Do you want to initialize an AppSail service in this directory?"*
- For the build path prompt kindly choose the folder-path that contains the *build* folder:

  - Example: */Users/catalyst-solutions/Documents/appsail/build*
- You can then create a name for your Appsail feature. For now we would suggest you use the name ***Vite***
- For the stack you can choose Node 16.
- Now inside your project root folder you will be able to see the below files

  - .catalystrc
  - catalyst.json
  - app-config.json

Now you have successfully initialized a AppSail feature for your project in your local machine.

---

![]()

## Initialize a Sample Vite.JS application inside the Catalyst Project folder:

- Navigate to the catalyst project folder inside your terminal and use the command.
  - **``npm create vite@latest``**
- Create a name for your Vite project when the terminal prompts you to enter "Project-Name:" For now kindly use the name **client**
- Now choose **React** for the framework in the next line.
- Select **TypeScript+SWC** as your variant.

Now you have successfully initialized your Vite application inside Catalyst project folder

---

![]()

## Initialize a Node-Express application inside your Catalyst Project Folder:

- Navigate to the *server* folder inside the Catalyst project folder inside your terminal and use the below command.

  - **``npm init``**
- Fill in the necessary details and provide the entry point value as **index.js**.
- Create a file called **index.js** inside the *server* folder which will start the express static server used to serve the Vite application.
- Create a file called **filesHelper.js** inside the **scripts** folder and copy paste the below code snippet which is used for copying and deleting necessary build files for your Vite Application

  ```
  const Fs = require('fs');
  const Path = require('path');
  const { promisify } = require('util');

  const readdir = promisify(Fs.readdir);
  const stat = promisify(Fs.stat);
  const copyFile = promisify(Fs.copyFile);
  const mkdir = promisify(Fs.mkdir);
  const unlink = promisify(Fs.unlink);
  const rmdir = promisify(Fs.rmdir);

  if (process.argv.length < 4) {
    console.error('Usage: node copyAndDelete.js [-c|-d] <sourcePath> <destinationPath>');
    process.exit(1);
  }
  const operation = process.argv[2];
  if (operation !== '-c' && operation !== '-d') {
    console.error('Invalid operation. Use -c for copy or -d for delete.');
    process.exit(1);
  }

  if (operation === '-c') {
  const sourcePath = Path.resolve(process.argv[3]);
  const destinationPath = Path.resolve(process.argv[4]);
    copyFolders(sourcePath, destinationPath)
      .then(() => {
        console.log('Copy completed successfully.');
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  } else if (operation === '-d') {
    const sourcePath = Path.resolve(process.argv[3]);
    deleteFolder(sourcePath)
      .then(() => {
        console.log('Delete completed successfully.');
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  }

  async function copyFolders(source, destination) {
    try {
      await mkdir(destination, { recursive: true });
      const files = await readdir(source);
      for (const file of files) {
        const sourceFilePath = Path.join(source, file);
        const destFilePath = Path.join(destination, file);
        const fileStat = await stat(sourceFilePath);

        if (fileStat.isDirectory()) {
          await copyFolders(sourceFilePath, destFilePath);
        } else {
          await copyFile(sourceFilePath, destFilePath);
        }
      }
    } catch (err) {
      throw err;
    }
  }

  async function deleteFolder(destinationPath) {
    try {
      const files = await readdir(destinationPath);

      for (const file of files) {
        const filePath = Path.join(destinationPath, file);
        const fileStat = await stat(filePath);
        if (fileStat.isDirectory()) {
          await deleteFolder(filePath);
        } else {
          await unlink(filePath);
        }
      }
      await rmdir(destinationPath);
    } catch (err) {
      throw err;
    }
  }
  ```

Now you have initialized a node application for your catalyst project which will be used to run your Vite.js application.

---

![]()

## Installing Express package and copy pasting the given code snippets:

- Go-to ***index.js*** in your *server* folder and copy paste the below code and save the file.

```
const express = require('express')
const app = express()
const path = require('path');
app.use(express.json())
app.use("/",express.static(path.join(__dirname,"./client")));
app.listen(process.env.X_ZOHO_CATALYST_LISTEN_PORT,()=>{
        console.log(`Listening from port ${process.env.X_ZOHO_CATALYST_LISTEN_PORT}!!!`)
    })

module.exports = app;
```

- Navigate to your *server* folder where the ***index.js*** file is placed in terminal and use the following command
  - **``npm install express --save``**
- Open the **app-config.json** file in catalyst root folder copy paste the below code snippet in the **"scripts"** key and save the file.

```
"scripts": {
    	"preserve":"cd client && npm run build && cd .. && node ./scripts/filesHelper.js -c server build",
	"postserve":"node ./scripts/filesHelper.js -d build",
	"predeploy":"cd client && npm run build && cd .. && node ./scripts/filesHelper.js -c server build",
	"postdeploy": "node ./scripts/filesHelper.js -d build"
}
```

- Inside the same app-config.json using the follow command for the "**command**" key:

```
 node index.js
```

- You can find the help documentation for the above script keys [here](https://docs.catalyst.zoho.com/en/cli/v1/scripts/introduction/).

---

![]()

## Install react packages and copy paste the given code snippets in your Vite project:

- Navigate to the **package.json** file inside the *client* folder and replace the "**scripts**" key with the below code snippet.

```
 "scripts": {
    "dev": "vite",
    "build": "tsc && vite build --outDir ../build/client",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
 }
```

- Navigate to your *client* folder in your terminal and use the command
  - **``npm install``**
- The above command will install all the missing packages that is used by your vite application.
- Navigate to the **vite.config.ts** in the *client* folder and replace the given code with the below code snippet.

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const getConfigurations = () => {
	return defineConfig({
		plugins: [react()]
	});
};

export default getConfigurations;
```

---

![]()

## Test your application by deploying to Development environment:

- After completing the above mentioned steps you can now test your Vite application in your local environment using the command
  - **``catalyst serve``**

You can find the help documentation for catalyst serve [here](https://docs.catalyst.zoho.com/en/cli/v1/serve-resources/serve-all-resources/)

- After completing the above mentioned steps you can now deploy your Vite application to the development environment.
- Navigate to your Catalyst project root folder in terminal and use the command
  - **``catalyst deploy``**
- The above command will run the script file mentioned in the **app-config.json** and create a production build of your Vite application and deploy the same to the development environment.
- After successful deployment you will be able to see an URL in the terminal which you can use to test your application in development environment.

You can find the help documentation for **catalyst deploy** command [here](https://docs.catalyst.zoho.com/en/cli/v1/deploy-resources/introduction/). -->

# ✝️ Judea Christ Ministry Website

A fully responsive website built for _Judea Christ Ministry (JCM)_ — a non-profit Christian trust — using modern front-end technologies.  
The site highlights various ministries, provides information about events, and ensures an engaging and accessible experience for users.

## 🛠️ Tech Stack

- _React.js_
- _Tailwind CSS_
- _HTML5_
- _JavaScript_

## ✨ Features

- 🔹 Clean and responsive design across all screen sizes
- 🔹 Smooth navigation using React Router
- 🔹 Sections for ministries, events, donation info, and contact
- 🔹 Reusable components for better scalability
- 🔹 Optimized for readability and user engagement

## 🚀 Live Demo

🔗 [View the JCM website] (https://judea-christ-ministries-50025573061.development.catalystappsail.in)
