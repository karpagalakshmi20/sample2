window.alert("Hii User :)");
var db = firebase.firestore();

function storeData()
{
	var emailText = document.getElementById("email_field").value;
	var inputText = document.getElementById("text_field").value;
	
	
	// Add a new document in collection "cities"
	db.collection("Feedback").doc().set({
		email: emailText,
		name: inputText
	})
	.then(() => {
		console.log("Document successfully written!");
	})
	.catch((error) => {
		console.error("Error writing document: ", error);
	});
}
