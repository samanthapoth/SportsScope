# SportsScope 

SportsScope is an application created by Samantha Pothitakis, Taylor Micetich, Henry Leaders, and Alan Chen. This app was created to help local sports leagues keep track of players on different teams and games between two teams. There are two levels of user roles. When a user is not logged into the app, they can only view the teams created and updated by other users logged into the app. When a user is logged in, they can view teams made by other users and create, edit, and delete their own teams. If a user who is not logged in tries to create a team, they will be redirected to the login page. These user roles are the same for viewing, adding, and deleting teams. Any user can download a csv of players when looking at a specific team. The users that will create login credentials are meant to be coaches who can upload teams with their players. The users without login credentials are meant to be players who can view other teams and look at game times. 

SportsScope uses MongoDB to store data for user login, teams, games, and players. Each of these are stored in a different collection that is updated whenever a logged in user creates, updates, or deletes a team or when they create or delete a game.

Logs are stored on the disk where the app is run. They can be found at FlowHub/logs/app.log.

# Angular + FastAPI Project Setup Guide

This guide provides step-by-step instructions to set up an Angular front end and FastAPI back end for SportsScope.

## Back End (FastAPI)

1. **Navigate to Backend Directory (FlowHub):**
   - Navigate to the backend directory SportsScope:
      - For Windows and MacOS or Linux:
     ```
     cd FlowHub
     ```

2. **Create Virtual Environment:**
   - Run the following commands to create and activate a virtual environment:
    - For Windows:
      ```
      python -m venv venv
      .\venv\Scripts\activate
      ```
    - For MacOS or Linux:
      ```
      python -m venv venv
      source venv/bin/activate
      ```

3. **Install Dependencies:**
   - Install required Python dependencies for FastAPI:
     ```
     pip install fastapi python-multipart beanie uvicorn passlib bcrypt==4.0.1 pydantic[email] pydantic-settings python-jose[cryptography] httpx pytest
     ```
   - Save the dependencies to a `requirements.txt` file:
     ```
     pip freeze > requirements.txt  # MacOS/Linux
     ```

4. **Install Requirements:**
   - Install dependencies from the `requirements.txt` file:
     ```
     pip install -r requirements.txt
     ```

5. **Configure Environment:**
   - Create a `.env` file in the backend directory and add the MongoDB connection string:
     ```
     MONGODB_URL=mongodb+srv://hleaders:W1vXS5DKi9WHgs5m@cluster0.ual0joz.mongodb.net/
     ```

6. **Run FastAPI Server:**
   - With the virtual environment active, run the following command:
     ```
     python /run.py,  User can also run uvicorn main:app --reload
     ```

## Front End (Angular)

1. **Angular Installation:**
   - Ensure you have Node.js installed on your machine.
   - Install Angular CLI globally by running:
     ```
     npm install -g @angular/cli
     ```

2. **Create Angular Project:**
   - Navigate to the desired directory where you want to create the project.
   - Run the following command to create a new Angular project:
     ```
     ng new my-angular-project
     ```

3. **Navigate to Project Directory:**
   - Move into the newly created project directory:
     ```
     cd my-angular-project
     ```

4. **Install Dependencies:**
   - Inside the project directory, install the required npm dependencies:
     ```
     npm install
     ```
   or
     ```
     npm i
     ```
6. **Install PapaParse Library:**
   - For Windows:
     ```
     npm ngx install papaparse
     ```
   - For MacOS or Linux:
     ```
     npm install ngx-papaparse
     ```

7. **Run Development Server:**
   - Start the Angular development server:
     ```
     ng serve
     ```
   - Navigate to `http://localhost:4200/` in your web browser to view the app.


## Running the Project

1. **Front End:**
   - Open a new terminal window.
   - Navigate to the angular project directory.
   - Run the Angular development server:
     ```
     ng serve
     ```

2. **Back End:**
   - Open another terminal window.
   - Navigate to the FastAPI project directory.
   - Ensure the virtual environment is active.
   - Run the FastAPI server:
     ```
     python main.py  # Or run.py
     ```

Now, your Angular + FastAPI project is up and running! You can access your front end at `http://localhost:4200/` and your FastAPI back end at `http://localhost:8000/`.

## SportsScope Operation

The image below shows the screen that is first shown when the user loads the app.

<img width="600" alt="Screenshot 2024-04-30 at 9 54 46 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/62c3c36d-3f36-44fe-abcf-06601d2f895f">

When the user clicks the link on to login, they are taken to the screen below. To create an account, the user will click the sign up and sign in with an email and password. The username must be an email otherwise it will not allow the user to sign up.

<img width="600" alt="Screenshot 2024-04-30 at 9 53 48 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/7e9b0199-94a2-4e71-a3de-96bc2c77ab9b">

When the user is signed up and logs back into their account, they can navigate to the teams page using the top header. The user then can see teams created by other users or themselves. To create a new team, the user can click the "Add a New Team" button in the top right corner. This brings up the popup shown below. 

<img width="400" alt="Screenshot 2024-04-30 at 10 16 14 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/70aeb81d-b4ab-4b73-8d42-d6b9d61fd13c">

The user must fill out all fields in the form in order to create a team. The file uploaded for the players on the team must be a csv file. Once the file is chosen, the user must click the "Upload CSV" button to parse through the csv and each player. The "Upload CSV" file must be clicked whenever the user is loading a players csv when creating or updating a team. Then the user can click the "Create" button to create their team and see it displayed on the teams page. 

To see more details about a team, a user can click on the details button on the right side of the table shown in the picture below. 

<img width="600" alt="Screenshot 2024-04-30 at 10 26 36 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/1d14e412-03f9-4db1-99f2-f77acca6675b">

When viewing the team details, the user can update the team details or download a csv of the players. The update form is shown in the image below. If a user does not change or deletes any of the name, logo, location, or players inputs in the update form the team will remain unchanged. 

<img width="400" alt="Screenshot 2024-04-30 at 10 28 02 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/43c09632-bff2-40bf-bd38-3bed7390ff1e">

On the Games tab, the user is shown the screen below.

<img width="600" alt="Screenshot 2024-04-30 at 10 36 01 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/82f75a63-022d-4ee2-8333-bec48d2180c3">

To add a new game, the user will open up a form shown in the image below. The user must fill out every field in order for a game to be created. Otherwise, the form will close and no game will be created when the "Add Event" button is pressed. 

<img width="300" alt="Screenshot 2024-04-30 at 10 38 58 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/0ebc3ce8-6d2a-4f1e-ae33-192b225c5747">

When viewing a game as shown in the image below, the "Remove Event" button cannot be pressed unless the creator of that game is the user logged in and operating the app. No action will occur if the user unauthorized to delete a game tries to delete one.

<img width="300" alt="Screenshot 2024-04-30 at 10 41 56 PM" src="https://github.com/samanthapoth/SportsScope/assets/90707077/038dcce8-aca2-4c90-afac-855ac646c091">

If a user wants to logout, they can click the "Logout" button in the top right corner of the screen and then they will be redirected to the login page. 

If you are using SportsScope and have any questions, please feel free to reach out to Samantha Pothitakis at samantha-pothitakis@uiowa.edu.
