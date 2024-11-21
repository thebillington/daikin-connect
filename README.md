# Daikin Connect

This is a simple Next project which allows you to connect to and fetch data from the Daikin API.

## Setting Up

### Pre-requisites

1. Git installed on your machine (or knowledge of how to download files from git)
2. NodeJS installed locally
3. A way to run the Next app (I personally use yarn)
4. Ability to do basic Terminal/Command Line navigation

### Project setup

1. Pull this repository (`git clone https://github.com/thebillington/daikin-connect`)
2. CD into the directory (`cd daikin-connect`)
3. Take a copy of the `.env.example` file and name it `.env.local`
4. Run `yarn build` to install dependencies

### Setting up ngrok

1. Head to the [ngrok](https://ngrok.com/) website and register for a free account
2. Follow the instructions and install `ngrok` for your system
3. Register for a static domain
4. Take the domain name (e.g. `super-grit-lightning.ngrok-free.app`) and set it as the `REDIRECT_URI` in `.env.local`

### Creating a Daikin API App

1. Head to the [Daikin API](https://developer.cloud.daikineurope.com/) and register for an account
2. Once registered, click your email in the top right and click `My Apps`
3. Click `New App`
4. Choose a good app name (I named mine `daikin-connect`) and set the redirect URI to the one you got from `ngrok` (e.g. `super-grit-lightning.ngrok-free.app`)
5. Once created, grab your `client_id` and `client_secret` and add them to `.env.local` (note; if you don't get your secret before closing the window, you may need to delete and recreate your app)

## Running the project

Once you have setup `ngrok` on your machine and created your `.env.local` config file, you can run the app.

To run the app successfully, you need to do 2 things:

1. Run the app locally using `yarn` (or the dev environment of your choice)
2. Create a tunnel via `ngrok` from your local machine to the `REDIRECT_URI` you setup

### Running the app

1. Open a new Terminal and navigate to the directory where your code is (e.g. `cd ~/Downloads/daikin-connect`)
2. Run `yarn dev` to up the server
3. Go to your browser and navigate to `localhost:3000`

If you can see the running app, you should be good to go!

### Creating the `ngrok` tunnel

Now that the app is running, the last step is to create a tunnel from `ngrok` (publicly accessible) to your local instance (port `3000`).

`ngrok http --url=super-grit-lightning.ngrok-free.app 3000`