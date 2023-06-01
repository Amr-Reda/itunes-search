# Itunes Search API

Simple lambda function to use Itunes search API endpoint using Serverless framework. [Demo](https://vfo0q8nzgl.execute-api.us-east-1.amazonaws.com/dev/search?term=jack+johnson)

### Github Link https://github.com/Amr-Reda/itunes-search

# How I solved the task (development steps)

1- I used the serverless framework to create the project template.

2- Then I configured the serverless.yml to add the AWS resources that I need to use it like [dynamodb - lambda functions] and added my environments variables.

3- After that I started to implment the function handlers and creating the lambda http function.

4- Created the database layer to handle the database operations I created only create method because it's the only one that I need to use it at the task.

5- Then I started with the business logic layer which responsible for calling the Itunes API and save the results to the DB.

6- Final step was configure my AWS account so I can deploy the function and test it.

# Suggestion

1- It was better if I created a cach layer which is should searching in the DB first for the term instead of calling the Itunes API directly.

2- Prevent the DB dublication each time I save the results to the DB.

3- Adding rate limit to prevent DDoS attacks.

4- Adding retry mechanism to handle Itunes failure responses.

# How to run the function locally

```
npm install
sls invoke local -f Search -p event.json
```
NOTE: you can change the search term from `event.json` file at queryStringParameters.term line 8

# Deployment

To deploy the function make sure that you have AWS account and configured with aws cli and run the following commands:

```
npm install
sls deploy
```