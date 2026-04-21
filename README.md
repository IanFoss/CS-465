Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The front end was managed by multiple aspects throughout the application. The Express HTML code provided a server-rendered static web page. This differed from the Angular-driven SPA front end in that each new page or action requires a full page reload rather than dynamically modifying and updating portions of the web page. Javascript (and Typescript) was the programming language used to develop behavior and interactivity of the application. This code was responsible for handling the application logic, hiding or revealing certain page elements such as the edit trip buttons, and make small dynamic changes in the browser. The SPA is a client-rendered application. This differs from the Express HTML in that the page loads once and then updates dynamically as elements in the browser change. The Javascript handles the functionality of these changes and triggers API and function calls to changes elements in the page without reloading the entire page. 



•	Why did the backend use a NoSQL MongoDB database?

One of the primary reasons a NoSQL MongoDB database was used was its ability to mesh well with the other aspects of the tech stack. MongoDB stores data as documents, which is a format very similar to JSON. This allowed it to integrate well with Angular and Express since they both use JSON data. Due to the similar formats, the data is able to flow through the layers of the application with minimal transformation, which reduces complexity. Another benefit is that MongoDB does not require a fixed schema. This means that data can be store without strictly defining all fields in advance. This allows the data to be modified over time without restructuring the database, facilitating scaling the application horizontally right from the beginning. 



Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is different from Javascript in that it is a data format, while Javascript is a programming language. JSON is used for storing and transferring data in key-value pairs, and does not support functions, application logic, or comments. Javascript on the other hand is a full programming language used to write logic, functions, and program behavior. JSON acts as a common language between the front end and back end in order to communicate data throughout the stack. Since the format of JSON is so similar to MongoDB documents and is used in both the Express and Angular frameworks, JSON provided a smooth way to communicate data from server to client, and client to server. 


•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
There were several instances throughout the development process where code was refactored to improve functionality and efficiency. The logic to display the trips was moved from trip-listing into its own component. For the trip data, the API calls were originally inside components. These were moved into a dedicated service that centralized the HTTP requests. The components were initially rendered from their own code, which was replaced by Angular’s routing service. These refactors provided several benefits including facilitating the ability to scale the application, cleaner navigation logic, and a clear separation of concerns. Having these reusable UI elements makes it easier to update the application with newer features since less new code will be required. 

Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

HTTP methods are communication protocols that allow the application to transmit data between various sources. Most commonly they are GET, POST, PUT, and DELETE. These retrieve data from the API, send new data to the server, updates existing data, and remove data from the database. The endpoints are specific URLs where the API can be accessed by the application. These connect the front end of the application to the back end. In our application, security was mostly handled by authentication. The edit trips and add trips functionality required that the user be authenticated by their username, email, and password. This ensures that only authorized users were able to perform important functions in application.

Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me in reaching my professional goals by gaining hands-on experience developing a full-stack application with a tech stack used in the industry. I now have a better understanding of how these frameworks come together to create a robust application in a way that’s scalable and maintainable. 
