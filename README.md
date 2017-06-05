# Query (Message Board) using Ember js

This Webpage was created to have a message board that allows junior developers and newbies learning to code to ask questions that senior developers, product owners can answer and help them out.

## landing page

![](https://github.com/sowmyadsl/question-answer-board/blob/master/public/img/Screen%20Shot%202017-06-02%20at%207.31.25%20PM.png)
![](https://github.com/sowmyadsl/question-answer-board/blob/master/public/img/Screen%20Shot%202017-06-04%20at%209.40.41%20PM.png)

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
| Users can navigate each individual question by clicking on the question to add an answer to the question | Add an answer to the question | Answer gets displayed underneath the question |
| Users can delete answers by clicking on the delete answer button | Click on the delete answer button | answer gets removed from the page and gets redirected to the same page back|
| Users can add multiple answers to each question | Multiple answers for question | Multiple answers gets posted underneath each question |
| Users can click on thumbs up (upvote) button to upvote a answer | Click on upvote to upvote a answer | it increments by 1 everytime you click on upvote|
| Users can click on thumbs down (downvote) button to downvote a answer | Click on downvote to downvote a answer | it increments by 1 everytime you click on downvote |

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for Index page with a navbar on top and social media icons and copyright info on footer
  * Template/html page for About me page with information and a image.
  * Template/html page for contact page with a location map.
  * Template/index page with question information and allowing a user to add a new question.
  * Template/question page with question information and allowing a user to add answers.

4. Models:

* questions
  - content
  - author
  - notes
  - date(automatically adds up with moment.js)

* answers
  - author
  - content


5. UX/UI
  * Included bootstrap,css.

6. Polish
  * Refactor upvote and downvote buttons.
  * Deleted unused files

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
