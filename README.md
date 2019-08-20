# Gene Variants

The project was made using Django and React. (My first complete project using Django and I used React after about a year. So much has changed. The new React DevTools are were really helpful)

## Bonus: Deploy project
I used a DigitalOcean droplet to deploy this project!
You can check out the app [here](http://142.93.222.251:8000/). 

(To see the responses from the backend endpoint, I recommend downloading [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) Chrome extension)
The backend endpoint for returning a list of genes can be seen [here](http://142.93.222.251:8000/api/find_all_genes) and the backend endpoint for returning the variants of ACE gene can be seen [here](http://142.93.222.251:8000/api/find_all_variants/q=ACE).


## Backend
First, I made all the backend endpoints using Django in `src/api`.
`cache.py` was runs once and the `created_cache` is imported to `views.py`.
It has two endpoints:
1. `find_all_genes`: this endpoint returns a list of all the genes.
2. `find_all_variants`: this endpoint returns a list of all the variants of a gene with its information.

`src/core` is the main django-project.
It was used to define the urlpatterns by importing the views from `src/api`.

`data` contains the unzipped tsv file that was used to create the cache for the genes.

## Frontend
`src/frontend` contains all the frontend code that uses React to render the different components.

`webpack.config.js` was used to define the rules of bundling the Javascript files for the front end. The output is saved in `src/frontend/static/frontend/main.js` after the user runs a command like `npm run dev` or `npm run prod`.

`.babelrc` defines the presets and plugins to compile Javascript that is browser compatible.

`package.json` defines all the frontend dependencies and run scripts.

`react-autocomplete` was used for the autocompletion functionality.

`react-table` was used for showing the variants of a gene in a tabular form. 
- The user can increase/decrease the size of every single column,
- the table supports pagination, and
- the column headers can be clicked to sort the table according to that column.

## Testing
For testing, I used `unittest` and `django.test` to make sure that both the endpoints are giving success status for responses and that the response content (actual value) was equal to the expected value which was calculated using the tsv.

To run the tests, simply go to `gene-variants/src` and run `python manage.py test api.tests`.

## Installing and running this project:

The only thing that the user has to ensure is that they have the following installed:
- python
- node
- npm
- pip

When the repo has been downloaded and everything above has been installed, run the following commands in the terminal in the same order:

`cd gene-variants/`

`pip install -r requirements.txt`

`source bin/activate`

`cd src/`

`python manage.py runserver`

Open a new tab of the terminal, cd into `gene-variants` and run `npm run dev`.

Now, go to [http:localhost:8000/](http:localhost:8000/) on your web browser and search for gene variants!


## What I would have done differently (or what I would have added) if I had more time:
- Spend some more time on design,
- add extensive logging so that the traffic can be monitored,
- add authentication so that only authenticated users can access the app,
- add more rigorous testing using different frameworks for the frontend and backend,
- make models to use the database to save and persist the data and add security to that,
- add environment variables for different environments,
- create a Makefile to start the app using one command,
- made specific components to show error messages,
- use create-react-app for the frontend etc.