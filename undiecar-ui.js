(function () {

	window.addEventListener(
		'load',
		function () {

			var page_title = document.getElementById( 'Title_Pages' );

			undercar_ui_html = '<img src="https://undiecar.com/files/undiecar-ui.png" />';
			undercar_ui_html = undercar_ui_html + '<p style="font-size:150%">This is a replacement for the broken beta UI and a way for us to save our raw settings for setting up hosted sessions.</p>';
			undercar_ui_html = undercar_ui_html + '<p style="font-size:150%"><label>Raw session data</label><br /><textarea style="width:100%;height:150px;" name="session_data" id="session_data">sessionName=Undiecar+test&sessionPassword=&weatherType=1&weatherTemp=78&weatherTempChoice=0&weatherHumidity=55&weatherFog=0&weatherWindSpeed=2&weatherWindSpeedChoice=0&weatherWindDirection=0&weatherCloudCover=1&sessionDur=1&startAt=1545960000000&rcdPractice=3600&rcdQual=0&rcdRace=&farmId=11&maxNumDrivers=60&trackId=330&timeOfDay=0&simulatedStartTime=&earthSpeedup=1&simulatedTimeOffsets=&useMetricMeasurement=0&multiClass=0&carId0=4&maxPctFuelFillId0=100&weightPenaltyId0=0&carSetupRaceId0=73991&carSetupQualId0=undefined&carId1=74&maxPctFuelFillId1=100&weightPenaltyId1=0&carSetupRaceId1=59440&carSetupQualId1=undefined&carId2=29&maxPctFuelFillId2=100&weightPenaltyId2=0&carSetupRaceId2=63869&carSetupQualId2=undefined&carId3=105&maxPctFuelFillId3=100&weightPenaltyId3=0&carSetupRaceId3=73992&carSetupQualId3=undefined&carId4=106&maxPctFuelFillId4=100&weightPenaltyId4=0&carSetupRaceId4=74340&carSetupQualId4=undefined&carId5=99&maxPctFuelFillId5=100&weightPenaltyId5=0&carSetupRaceId5=undefined&carSetupQualId5=undefined&carClassId0=0&carClassId1=0&carClassId2=0&carClassId3=0&carClassId4=0&carClassId5=0&sessionType=1&numServers=1&isFinal=0&practiceLength=60&raceLength=0&raceLengthType=2&numJokerLaps=0&gridId=&rootId=&parentId=&tourneyAction=new&startType=R&numFastTows=1&fullCourseCautions_ignore=2&fullCourseCautions=1&luckyDog=1&restartType=2&leaveMarbles=1&rubberLevelPractice=-1&minTeamDrivers=1&maxTeamDrivers=2&driverChangeRule=0&sessionDesc=Undiecar+test%0D%0Ahttps%3A%2F%2Fundiecar.com%2Fevent%2Ftrucks-at-new-charlotte-roval%2F&maxIncidents=&irCheckbox=on&minIR=500&maxIR=10000&srCheckbox=on&minLicLevel=6&maxLicLevel=28&sessionAdmins=279455%2C223698%2C250452%2C224222&recentSelect=223698&fsSelect=110963&memberName=%5Benter+search+term%5D&hardcoreLevel=1&paceCarId=0&isTourney=0</textarea></p>';
			undercar_ui_html = undercar_ui_html + '<button style="font-size:150%" id="undiecar_submit">Submit new session</button>';
			undercar_ui_html = undercar_ui_html + '<br /><br /><br /><br />';

			page_title.outerHTML = page_title.outerHTML + undercar_ui_html;

		}
	);


	document.addEventListener(
		'click',
		function ( e ){

			if ( 'undiecar_submit' !== e.target.id ) {
				return;
			}

			e.target.disabled = 'disabled';

			var session_data = document.getElementById( 'session_data' ).innerHTML;
//			session_data = session_data.replace("&amp;", "&");
			var session_data = session_data.replace(/&amp;/g, '&');
			console.log(session_data);

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {

				if ( xhr.readyState == XMLHttpRequest.DONE ) {
					console.log( xhr );
				}

			}


			xhr.open("POST", 'http://members.iracing.com/membersite/member/LaunchHostedSession.do', true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send( session_data );

		}
	);

})();
