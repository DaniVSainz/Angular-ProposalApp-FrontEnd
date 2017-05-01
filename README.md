# Angular2Front-RailsApiBack

For this app I used angular in the front end and Rails-api microservice architecture in the backend.  

Some of the unique features of this app is that it bypasses the need to refresh pages to get new objects created in our  
rails databse.The way we achieve this is by using the Observable feature from the Rxjs library.With this we have it subscribed
to query our databases every 5000ms.  

We can crete objects in our Rails-api databases from our angular app utilizing cors-rack cross origin resources gem.

![alt](https://github.com/DaniVSainz/Angular2Front-RailsApiBack/blob/master/freelance.gif)
