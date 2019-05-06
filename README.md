# ZenHub Webhook Demo

This is a sample node app to demonstrate custom automation of a GitHub action based on activity in ZenHub. This can be deployed via Heroku or Docker, and authenticates as a GitHub App. This app specifically creates an issue comment in GitHub when an issue or pull request is [reprioritized](https://github.com/ZenHubIO/API#issue-reprioritized). It could be easily extended or revised to respond to any [Custom Webhook](https://github.com/ZenHubIO/API#custom-webhooks) originating from ZenHub.

## Setup

This app can currently be be deployed on Glitch, Heroku, or Docker. It can also be run locally via a secure tunnel such as [ngrok](https://ngrok.com/). Because this authenticates with GitHub as a GitHub App, many of the deployment steps are identical to a Probot app. Consequently, setup instructions will link to Probot's Deployment instructions where applicable.

1) Choose a deployment platform and deploy your app. Your deployment will not work until GitHub and ZenHub are configured, but it will be useful to have the deployment URL before setting them up
    - Docker: A basic Dockerfile has been configured in this repository. To deploy as-is, navigate to the root of this repository and run the following commands on a machine with Docker installed:
      - `docker build -t zenhub-webhook-demo .`
      - `docker run --name zenhub-webhook-demo zenhub-webhook-demo`
    - [Glitch](https://probot.github.io/docs/deployment/#glitch)
    - [Heroku](https://probot.github.io/docs/deployment/#heroku)
2) [Create a GitHub App](https://probot.github.io/docs/deployment/#create-the-github-app)
    - When prompted to enter the Webhook URL for your GitHub App, give the webhook path of github-webhook (i.e. https://example.com/github-webhook)
    - Once you have generated a private key for your github app, add the contents of the file as the environment variable, `PRIVATE_KEY`, or add the file directly to the deployment environment and provide the path to the file in the environment variable, `PRIVATE_KEY_PATH`.
3) Create a webhook on ZenHub by navigating to "Manage Organizations", creating a "custom organization", and entering the url of your deployed app.

To set up GitHub authentication for this, [create a GitHub app](https://github.com/settings/apps/new)
