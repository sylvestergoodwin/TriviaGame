// Global Data Structures

gameSettings = {
			genre: [{played: false,
                name: 'Star Trek',
                tagLine: 'To boldly go. Where no one has gone before',
                qa: [{question: 'Whats the name of Data daughter',
                      answer: 1,
                      options: ['Alexander','Lal','Wesley','Jon Luc'] },
                     {question: 'Which is not a part of the Star Trek Universe',
                      answer: 3,
                      options: ['Cardasian','Ferengi','Romulan','Jar Jar Binks'] },
                     {question: 'Which federation starship featured a cloaking device',
                      answer: 3,
                      options: ['USS Enterprise NCC-1701-D','USS Enterprise NCC-1701-B','USS Excelsior','USS Defiant NX-74205'] },
                     {question: 'The USS Enterprise NCC-1701-D belonged to which class of starship',
                      answer: 2,
                      options: ['Intrepid Class','Constitution Class','Galaxy Class','Constellation Class'] },
                     {question: 'Spock died in which of the following',
                      answer: 1,
                      options: ['Star Treck The Motion Picture','Ther Wrath Of Kahn','The Search For Spock','The Voyage Home'] },
                     {question: 'What is the name of Datas brother ',
                      answer: 2,
                      options: ['Spot','Worf','Lore','Joe'] },
                     {question: 'What race within the federation is most concerned with profit',
                      answer: 3,
                      options: ['Cardasian','Romulan','Klingon','Ferengi'] },
                     {question: 'The JEM HADAR originated in which quadrant',
                      answer: 2,
                      options: ['Alpha','Beta','Gamma','Delta'] },
                     {question: 'Which member of the DS9 crew married Worf',
                      answer: 0,
                      options: ['Jadzia Dax','Curzon Dax','Esri Dax','Tobin Dax'] },
                     {question: 'Which famous person appeared on the Star Trek The Next Generation Show as himself',
                      answer: 2,
                      options: ['Andrew Dice Clay','O J Simpson','Stephen Hawking','Mohammed Ali'] }
                    ]
               },
						{played: false,
               name: 'Marvel and DC',
            tagLine: 'With great power comes greate responsibility',
                  qa: [{question: 'Which is not a Marvel or DC character',
                        answer: 0,
                        options: ['The Slender Man','Lex Luthor','Damien Wayne','Nightwing'] },
                       {question: 'The god of thunder alter ego is',
                        answer: 2,
                        options: ['Bruce Wayne','Bruce Banner','Dr. Donald Blake','Clark Kent'] },
                       {question: 'Thanos is',
                        answer: 1,
                        options: ['The Martian Manhunter','The Mad Titan','The Starlord','The Living Planet'] },
                       {question: 'Iron Man, Thor and Hulk are part of which super hero team',
                        answer: 3,
                        options: ['Fantastic Four','Alpha Flight','The Defenders','The Avengers'] },
                       {question: 'The "Caped Crusader" and "Earths Greatest Detective" both refers to',
                        answer: 2,
                        options: ['Mr Fantastic','Superman','The Batman','The Question'] },
                       {question: 'Which supervillan became president of the United States',
                        answer: 0,
                        options: ['Lex Luthor','The Joker','Ras Al Gaul','Catwoman'] },
                       {question: 'Which of the following is not a member of the Teen Titans',
                        answer: 2,
                        options: ['Raven','StarFire','Static Shock','Beast Boy'] },
                       {question: 'Which Marvel character is know as the "Herald of Galactus',
                        answer: 1,
                        options: ['DarkHawk','The Silver Surfer','ROM SpaceKnight','The Living Tribunal'] },
                       {question: 'Which Amazonian princess was sculpted from clay by her mother Queen Hippolyta and given life by Athena',
                        answer: 0,
                        options: ['Princess Diana','Princess Shuri','Princess Angela','Princess Takiya'] },
                       {question: 'What is the name of the son of Sue Storm and Reed Richards',
                        answer: 0,
                        options: ['Franklyn','Orlando','Lorenzo','Glentis'] }
                      ]
                  },
						{played: false,
              name: 'Middle Earth',
           tagLine: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them ',
                qa: [{question: 'Which of the following is not among the races mentioned',
                      answer: 2,
                      options: ['Hobbits','Elves','Fairies','Dwarfs'] },
                     {question: 'Which of the following is not a member of the fellowship of the ring',
                      answer: 0,
                      options: ['Faramir','Baromir','Legolas','Merry'] },
                     {question: 'What is the name of the White Wizad',
                      answer: 1,
                      options: ['Sauron','Saruman','Gimli','Grima Wormtongue'] },
                     {question: 'Who was freed from the spell of the White Wizard by Gandalf',
                      answer: 3,
                      options: ['Eowyn','Theodred','Aragorn','Theoden'] },
                     {question: 'How many rings of power were created',
                      answer: 0,
                      options: ['20','18','9','1'] },
                     {question: 'Which of the following race did not obtain a ring of power',
                      answer: 1,
                      options: ['Dwarfs','Hobbits','Men','Elves'] },
                     {question: 'The Hobbit and Lord of the Rings were written by',
                      answer: 0,
                      options: ['J. R. R. Tolkien','J.K. Rowling','George R. R. Martin','Anne McCaffrey'] },
                     {question: "Which of the following was a main character within the story 'The Hobbit'",
                      answer: 3,
                      options: ['Joe','Bungo Baggins','Frodo Baggins','Bilbo Baggins'] },
                     {question: 'The dragon Smaug was sleeping with the Darwfs home under which mountain',
                      answer: 1,
                      options: ['Lonely Mountain','Misty Mountains','Blue Mountain','High Chaparal'] },
                     {question: 'Bilbo Baggins was hired by the dwarfs to be their',
                      answer: 3,
                      options: ['Scout','Cook','Leader','Burglar'] }
                    ]
                },
						{played: false,
              name: 'Star Wars',
           tagLine: 'In a galaxy far far away.',
                qa: [{question: 'The Star Wars story originally begun in 1977 with episode',
                      answer: 2,
                      options: ['I - The Phantom Menace','VI - Return of the Jedi','IV - A New Hope','VII - The Force Awakens'] },
                     {question: 'The Star Wars musical score was created by',
                      answer: 0,
                      options: ['George Lucas','Steven Spielberg','John Williams','Prince'] },
                     {question: 'Which character was not part of the first Star Wars movie',
                      answer: 1,
                      options: ['Grand Moff Tarkin',' Lando Calrissian','Han Solo',' Obi-Wan Kenobi'] },
                     {question: 'What is the name of the planet distroyed by the death star',
                      answer: 3,
                      options: ['Dantooine','Dagobah','Coruscant','Alderaan'] },
                     {question: 'What species was Jar Jar Binks',
                      answer: 0,
                      options: ['Gungan','Bantha','Wookiee','Ewok'] },
                     {question: 'Luke Skywalker mother was',
                      answer: 1,
                      options: ['Padme Amidala','Leia Organa','Shmi Skywalker','Breha Organa'] },
                     {question: 'Which of the following is a protocool droid',
                      answer: 0,
                      options: ['C-3PO','Chewbacca','R2-D2','Greedo'] },
                     {question: 'The Bounty Hunter chasing hans Solo was',
                      answer: 3,
                      options: ['Darth Maul','Lando Calrissian','Jango Fett','Boba Fett'] },
                     {question: 'Sheev Palpatine was also the Sith lord',
                      answer: 2,
                      options: ['Count Dooku','Darth Maul','Darth Sidious','Darth Bane'] },
                     {question: 'Thats no moon. Its a space station. This line was spoken by',
                      answer: 3,
                      options: ['Luke Skywalker','Princess Leia','Hans Solo','Obi-Wan Kenobi'] }
                    ]
                },
						],
			currentQuestion: 0,
			chosenGenre: 0,
			chosenPlayerCount: 1,
			timeToAnswer: 10,
			
			setupQuestion: 0,
			setup: [{question: 'Please Choose Genre',optionChosen: 0, options: ['Star Trek','Marvel and DC','Middle Earth','Star Wars']},
							{question: 'How many Players', optionChosen: 1, options: ['One','Two','Three','Four']},
							{question: 'How much time to answer each question', optionChosen: 3, options: [5,10,12,15]}]
			} ;

			
countdownClock = 10;
var clockInterval;
var timerClock;
var currentUserOptionQuestion = 0;
var currentUserOptionAnswer = -1;






var old = -1


lastQuestion = -1;
var player = {genre: [], 
							totalscore: 0};


var playerList = {currentPlayer: 0,
									players: []};



//======================================================================================================================
// Game Options

// first updates the div to display the question
// loops through the array of answer options and diplays them on the screen.
function displayOptionResponses(optionChosen)
{ 	
  
	var btnHandler ="";
	var displayedOption ="";
	console.log('optionChosen '+optionChosen);
	console.log(gameSettings);
	
	$("#tg-game-options-btn-group").empty();
	$("#tg-user-choices").html(gameSettings.setup[optionChosen].question);

	for(var x=0; x< gameSettings.setup[optionChosen].options.length; x++)			
	{ 
		btnHandler = "rbGameOptionClicked("+x+")";
		displayedOption = gameSettings.setup[optionChosen].options[x];
		
		$("#tg-game-options-btn-group").append($("<div>")
      .addClass(".radio")
			.attr("onclick",btnHandler)
			.html('<label id="tg-game-option1" class="game-option-rb" ><input type="radio" name="optradio"> '+ displayedOption));
	}
}

function rbGameOptionClicked(clickme)
{
	console.log(currentUserOptionAnswer);
	console.log(clickme);
	console.log("-------")
	if ((currentUserOptionAnswer != clickme) || (old != gameSettings.setupQuestion)) 
	{
	  console.log("---valid----")
		currentUserOptionAnswer = clickme;
		collectGameOptions();
	}
}

function collectGameOptions()
{	
		console.log('gameSettings.setupQuestion '+gameSettings.setupQuestion);
		console.log(Number(gameSettings.setupQuestion)+' < '+Number(gameSettings.setup.length));
	if(Number(gameSettings.setupQuestion) < Number(gameSettings.setup.length) )
		{
			
		// save the setup question chosen options back into the gameSettiings
		gameSettings.setup[gameSettings.setupQuestion].optionChosen = currentUserOptionAnswer;
		
		$("#tg-game-options-list").append("<p>"+gameSettings.setup[gameSettings.setupQuestion].question+": <b>"+gameSettings.setup[gameSettings.setupQuestion].options[gameSettings.setup[gameSettings.setupQuestion].optionChosen]+"</b></p>");
		
		clearTimeout(timerClock);
		timerClock = setTimeout(function(){ collectGameOptions(); },countdownClock*1000); 
		displayOptionResponses(gameSettings.setupQuestion);
		gameSettings.setupQuestion++;
		}
	else
		{
 		clearTimeout(timerClock);
    $("#tg-game-options-recap").removeClass("tg-hidden");
    $("#tg-game-options").addClass("tg-hidden");
    $("#tg-option-button").removeClass("tg-hidden");
		}
}

//===================================================================================================================
// Game Play

// Called by button
function displayTrivaQuestions()
{		
		// Set up Player information
		
		player.genre.push(gameSettings.setup[0].optionChosen);
		player.totalscore=0;
		
		for (var i=0; i<=gameSettings.setup[1].optionChosen; i++)
			{
			playerList.players.push(player);
			}
		playerList.currentPlayer = 0;
		
		// switch from game setup to playe mode
    $("#tg-game-options-recap").addClass("tg-hidden");
    $("#tg-option-button").addClass("tg-hidden");
		$("#tg-game-play").removeClass("tg-hidden");
    $("#tg-user-chice").addClass("tg-hidden");

		
    // display genre info in jumbotrom
		
		displayGameInfo(gameSettings.setup[0].optionChosen);
		manageClock(gameSettings.setup[2].options[gameSettings.setup[2].optionChosen]);
		displayNextTrivia(gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion]); 
}

function displayCorrectAnswer()
{
	//display correct answer
	countdownClock = 5;
	
	$("#tg-correct-answer")
						.empty()
	          .removeClass("tg-hidden");
	$("#tg-correct-answer").append("<p> " + gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion-1].question
																	+ " : <b>"+gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion-1].options[gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion-1].answer]+"</b>");
	
	clearInterval(clockInterval);
	clockInterval = setInterval(function(){manageClock(countdownClock);},1000);
	clearTimeout(timerClock);
	timerClock = setTimeout(function(){$("#tg-correct-answer").addClass("tg-hidden");
																			displayNextTrivia(gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion]);
																		},5*1000);
}

function rbGameQAClicked(ansClicked)
{  
	
	if (ansClicked == gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion].answer)  //spooky action at a distance
	{
		if (lastQuestion != gameSettings.currentQuestion)
		{
			playerList.players[playerList.currentPlayer].totalscore = playerList.players[playerList.currentPlayer].totalscore+1;
			lastQuestion = gameSettings.currentQuestion;
		}	
	}
	
	displayCorrectAnswer();

}


// Switch from the player option questions to the game option display.
// Display the information on the chosen genre
function displayGameInfo(playerchosenGenre)
{
	$("#tg-trivia-category").html(gameSettings.genre[playerchosenGenre].name);
	$("#tg-trivia-category-tagline").html(gameSettings.genre[playerchosenGenre].tagLine);
	
}

function setTriviaAnswerCountDown()
{	

	console.log((gameSettings.currentQuestion)+' < '+Number(gameSettings.genre[gameSettings.chosenGenre].qa.length));
	if(Number(gameSettings.currentQuestion) < Number(gameSettings.genre[gameSettings.chosenGenre].qa.length) )
		{
		clearTimeout(timerClock);
		timerClock = setTimeout(function(){	displayNextTrivia(gameSettings.genre[gameSettings.setup[0].optionChosen].qa[gameSettings.currentQuestion]); },countdownClock*1000);
		gameSettings.currentQuestion++; 
		}
	else
		{
		clearTimeout(timerClock);
    disPlayCurrentPlayerScore();
		}
}

// display the trivia questions and option on the screen
function displayNextTrivia(trivia)
{
	// question
	$('#tg-trivia-question').html(trivia.question);
	// options
	console.log(trivia.options.length);
	for (i=0; i< trivia.options.length; i++)
  {
	console.log(trivia.options[i]);
    $("#option"+(i+1)).html('<input type="radio" name="optradio">'+ trivia.options[i]);
  }
	
  // clear any running clock.
	clearInterval(clockInterval);
  
  //set timer countdown to update the display each second  
	clockInterval = setInterval(function(){manageClock(gameSettings.setup[2].options[gameSettings.setup[2].optionChosen]);},1000);
   
  // start the time to enter an answer clock
	setTriviaAnswerCountDown();
}

 
 // Reset the clock once it gets below one
 function manageClock(timeRemaining)
 {
	 --countdownClock;
	 if(countdownClock <1)
	 {
		 countdownClock = gameSettings.setup[2].options[gameSettings.setup[2].optionChosen];
	 }
	 $("#count-down-clock").html(countdownClock);
 }
//===================================================================================================

function disPlayCurrentPlayerScore()
{
	var ansStatus = ".text-primar";//"text-danger";
	// switch from game setup to playe mode
	$("#tg-game-play").addClass("tg-hidden");
	$("#tg-display-answer").removeClass("tg-hidden");
	
	
	$("#tg-trivia-category2").html(gameSettings.genre[gameSettings.setup[0].optionChosen].name);
	$("#tg-trivia-category-tagline2").html(gameSettings.genre[gameSettings.setup[0].optionChosen].tagLine);
		
	for (var p=0; p<gameSettings.genre[gameSettings.setup[0].optionChosen].qa.length; p++)
	{
		$("#tg-player-game-recap").append("<p class='"+ansStatus+"'> Question: " + gameSettings.genre[gameSettings.setup[0].optionChosen].qa[p].question
																	+ " : <b>"+gameSettings.genre[gameSettings.setup[0].optionChosen].qa[p].options[gameSettings.genre[gameSettings.setup[0].optionChosen].qa[p].answer]+"</b>");
	}
}

//====================================================================================================
function startGame()
{
	timerClock = setTimeout(function(){ collectGameOptions(); },countdownClock*1000); 
	manageClock(10);
	displayOptionResponses(currentUserOptionQuestion);
		
}





