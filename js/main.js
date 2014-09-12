//Huckle Buckle Beanstalk is a guessing game, the computer generate a number randomly, while the user try to guess the number
//the program response by giving a relevance feedback helping the user to guess within the range the next time.
//the program response by giving a relevance feedback helping the user to guess within the range the next time 
var beanStalk = {
				//initial properties of huckleBuckleBeanstalk game;
				validator:$('#validator').hide(),
				feedbackWait:$('#feedbackwait').show(),
				waitSiblings:$('#feedbackwait').siblings().hide(),
				computerChoice:null,
				userChoice:null,
				previousUserChoice:null,
				max_Temp:null,
	onReady:function(){
				$('#guessnumber').focus(beanStalk.summitValidator).keyup(beanStalk.summitValidator);
				$('#guessnumber').focus(beanStalk.inputEvent).keyup(beanStalk.inputEvent);
				$('#restart').click(beanStalk.newGame);
				$('#submit').click(beanStalk.summitEvent);
				$('form').submit(beanStalk.summitEvent2);
				beanStalk.newGame();
			},
	// what happen when the user enter invalid input
	inputEvent:function(){
					if($('#guessnumber').val() > 100 || $('#guessnumber').val() < 0 || isNaN($('#guessnumber').val()) || $('#guessnumber').val() == " " ){
						$('#validator').show();
				        $('#feedbackwait').siblings().hide();
				        $('#feedbackwait').show(); 
					}
					else{
						$('#validator').hide();
					}
				},
	newGame:function(){
				beanStalk.computerChoice = Math.floor(Math.random()*100);
				var previousUserChoice = 0;
				$('#feedbackwait').show();
				$('#feedbackwait').siblings().hide();
				$('#guessnumber').val("");
				$('#incremental').css("height", 0);
			},
	//what happen when submit button is pressed!
	summitEvent:function (evnt){
					evnt.preventDefault();
					beanStalk.max_Temp=Math.max(Math.abs(100-beanStalk.computerChoice) , beanStalk.computerChoice);
					beanStalk.userChoice = parseInt($('#guessnumber').val());
					var comp_user = Math.abs(beanStalk.computerChoice-beanStalk.userChoice)
					var newUserChoice = beanStalk.max_Temp-comp_user
					$('#response span').hide()
					if(newUserChoice==beanStalk.max_Temp){ 
						$('#guessed').show();
						$('#guessed').siblings().hide();
					}
					else if(newUserChoice > beanStalk.previousUserChoice){ 
						$('#feedbackhot').siblings().hide();
						$('#feedbackhot').show();
					}
				 	else if(newUserChoice < beanStalk.previousUserChoice){
				 	 	$('#feedbackcold').siblings().hide();
				 		$('#feedbackcold').show();
				 	}
					else{
					 	$('#feedbackneither').siblings().hide();
				 		$('#feedbackneither').show();
					}
					beanStalk.previousUserChoice=newUserChoice;
					var heightIncrem = newUserChoice*3.6;
					$('#incremental').css("height", heightIncrem);
				}
}
$(document).ready(beanStalk.onReady);

