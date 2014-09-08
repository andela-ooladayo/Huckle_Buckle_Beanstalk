//Huckle Buckle Beanstalk is a guessing game, the computer generate a number randomly, while the user try to guess the number
//the program response by giving a relevance feedback helping the user to guess within the range the next time 

var huckleBuckleBeanstalk = {
				//initial properties of huckleBuckleBeanstalk game;
				validator:$('#validator').hide(),
				feedbackWait:$('#feedbackwait').show(),
				waitSiblings:$('#feedbackwait').siblings().hide(),
				computerChoice:null,
				userChoice:null,
				previousUserChoice:null,
				max_Temp:null,
	onReady:function(){
				$('#guessnumber').focus(huckleBuckleBeanstalk.summitValidator).keyup(huckleBuckleBeanstalk.summitValidator);
				$('#guessnumber').focus(huckleBuckleBeanstalk.inputEvent).keyup(huckleBuckleBeanstalk.inputEvent);
				$('#restart').click(huckleBuckleBeanstalk.newGame);
				$('#submit').click(huckleBuckleBeanstalk.summitEvent);
				//$('form').submit(huckleBuckleBeanstalk.summitEvent2);
				//newGame();//
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
	// what happen when the user enter invalid input
	summitValidator:function(){
						if($('#guessnumber').val() > 100 || $('#guessnumber').val() < 0 || isNaN($('#guessnumber').val()) || $('#guessnumber').val() == " " ){
						$('#submit').click().prop("disabled")
						}
					},	
	newGame:function(){
				$('#feedbackwait').show();
				$('#feedbackwait').siblings().hide();
				$('#guessnumber').val("");
				$('#incremental').css("height", 0);
			},
	//what happen when submit button is pressed!
	summitEvent:function (e){
					var computerChoice = Math.floor(Math.random()*100);
					var previousUserChoice = 0;
					var max_Temp=Math.max(Math.abs(100-computerChoice) , computerChoice);
					e.preventDefault();
					var userChoice = parseInt($('#guessnumber').val());
					var comp_user = Math.abs(computerChoice-userChoice)
					var newUserChoice = max_Temp-comp_user
					$('#response span').hide()
					if(newUserChoice==max_Temp){ 
						$('#guessed').show();
						$('#guessed').siblings().hide();
					}
					else if(newUserChoice > previousUserChoice){ 
						$('#feedbackhot').siblings().hide();
						$('#feedbackhot').show();
					}
				 	else if(newUserChoice < previousUserChoice){
				 	 	$('#feedbackcold').siblings().hide();
				 		$('#feedbackcold').show();
				 	}
					else{
					 	$('#feedbackneither').siblings().hide();
				 		$('#feedbackneither').show();
					}
					previousUserChoice=newUserChoice;
					var heightIncrem = newUserChoice*3.8;
					$('#incremental').css("height", heightIncrem);
				}
}
$(document).ready(huckleBuckleBeanstalk.onReady);