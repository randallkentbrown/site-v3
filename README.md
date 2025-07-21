# Personal Site README #

Notes on running the site.

## Installing the Site ##

1. Clone the repository.
2. Ensure that you have the correct versions of Node.js and NPM installed.
3. Run `npm install`.

## Running the Site ##

1. Run `npm run dev`.

## Deployment with AWS Amplify ##

1. Log in to the AWS Management Console.
2. Allow AWS Amplify to access your Github repository.
3. Create your Amplify App and deploy it.
4. Set up your domain in a hosted zone in Route 53.
5. Set your domain's nameservers to be the Route 53 servers.
6. Add your custom domain to your Amplify App.
7. Once you get the green checkmark, wait up to 36 hours to ensure that all cached DNS records have expired.
