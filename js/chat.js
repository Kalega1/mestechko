function createMessage(sender, message) {  

    // Get a key for a new Message.  
    var newMessageKey = firebase.database().ref().child('messages').push().key;

    // Create the data we want to update.  
    var messageData = {  
        id: newMessageKey,  
        sender: sender,  
        message: message  
    };

    // Write the new message's data simultaneously in the messages list and the user's messages list.  

    var updates = {};  

    updates['/messages/' + newMessageKey] = messageData;

    return firebase.database().ref().update(updates);  

 }