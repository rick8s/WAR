#***Game of War***

####**REQUIREMENT:**
Build the card game 'WAR' using http://deckofcardsapi.com/

####**Clone this repo:**
From terminal command line type: git clone https://github.com/rick8s/war.git

####**Install Node if you do not have it:**
  -sudo apt-get install nodejs

####**Install required components by typing the following commands into the terminal:**
  -bower install  (bower will read the dependencies from the bower.json and install what is needed)
  -npm install    (this will install node package manager devDependencies from the package.json)

####**Install a basic Node HTTP server that will serve static files from a directory of your choice:**
    -sudo npm install -g http-server

####**cd into the directory housing your repo and serve the application by typing:**
  -hhtp-server 
  -Browse to http://localhost:(your port number) to run in browser.

####**OVERVIEW:**
This application was created to provide practice using an API to retrieve and manipulate data to produce the resulting game functionality. 

####**DESIRED ACCOMPLISHMENT:**

Initiate a game by clicking to get new deck. This will initiate new shuffled decks for each of the two players. Player one draws a card followed by player two drawing a card. Each draw initiates a count on the number of cards played by each person and also displays the drawn card in the DOM. Once player two has drawn a comparison of the two cards is made to determine which card is higher. The two cards in the counter are applied to the score of the player winning that hand as one point for each card and the score is updated in the DOM. When all cards in deck have been played a winner is determined and a message displays declaring which player one.  

####**ACCOMPLISHED:**
I have been able to retrieve new decks, draw and display player cards, and can retireve the value of the drawn cards.However, I have been unable to pass the value of the first cards drawn to the function that will be used to determine the winner of the hand. It is available at the point of draw, but there is apparently a delay in getting it to the function in time to use it. The value of cards drawn are passed when subsequent cards are drawn in the next round, but too late to use in the function.

####**FUTURE PLANS:**
Solve the delay in passing the card value in order to complete the game. Add styleing. 