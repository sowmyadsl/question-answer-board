# Query (Message Board) using Ember js

This Webpage was created to have a message board that allows junior developers and newbies learning to code to ask questions that senior developers, product owners can answer and help them out.

## Planning

The Application should contain:

* Show questions on the home page.
* Show question and the name of the author on the homepage.
* Users should be able to click on question, and routed to a page containing additional information and question details.
* Users should be able to add and edit questions.
* Users should be able to add answers to a question.
* Answers should be added and viewed on the same page as the question they respond to.

1. Configuration/dependencies:
* It includes all dependencies.
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/).

2. Specs:

| Behavior | Input | Output |
|----------|-------|--------|
| User submit a question form and add a question | User inputs the content ,author name and notes to the form and clicks on submit button |new question populates on the index page|
| User can click on delete button to delete each question |click on delete button | question gets removed from the index page|
| Users can click on edit/update button to edit each question |click on edit button |question gets updated shows up on index page |

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for Index page
  * Template/html page for About page
  * Template/html page for Index page
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...

## Installation

* `git clone <repository-url>` this repository
* `cd question-answer-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
