// console.log("Test");

// WAIT FOR THE DOM!!!
$(document).ready(function(){
	$('.yahoo-form').submit(function(){
		// Stop the form from submitting (default action)
		event.preventDefault();
		// Get whatever the user typed out of the input and store it in symbol
		var symbol = $('#symbol').val();
		// console.log(symbol);

		// Dynamically build the URL to use the symbol(s) the user requested
		var url = `http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("${symbol}")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json`;

		console.log(url);
		// getJSON, param1 = where to go, param2 = what to do
		$.getJSON(url, function(dataJSGotIfAny){
			var stockInfo = dataJSGotIfAny.query.results.quote;
			console.log(dataJSGotIfAny);			
			// buildStockRow(stockInfo)
			// check to see if change is + or -
			if(stockInfo.Change.indexOf('+') > -1 ){
				// if > -1, there is a + somewhere in this string
				var classChange = "success";
			}else{
				var classChange = "danger";
			}

			var newHTML = '';
			newHTML += '<tr>';
				newHTML += '<td>'+stockInfo.Symbol+'</td>';
				newHTML += '<td>'+stockInfo.Name+'</td>';
				newHTML += '<td>'+stockInfo.Ask+'</td>';
				newHTML += '<td>'+stockInfo.Bid+'</td>';
				newHTML += '<td class="'+classChange+'">'+stockInfo.Change+'</td>';
			newHTML += '</tr>';
			console.log(newHTML);
			$('#stock-body').append(newHTML)
			// console.log("I'm back!");
		});
		// console.log("Where is JS?");

	});
});