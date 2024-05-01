# SportsScope 

SportsScope is an application created by Samantha Pothitakis, Taylor Micetich, Henry Leaders, and Alan Chen. This app was created to help local sports leagues keep track of players on different teams and games between two teams. There are two levels of user roles. When a user is not logged into the app, they can only view the teams created and updated by other users logged into the app. When a user is logged in, they can view teams made by other users and create, edit, and delete their own teams. If a user who is not logged in tries to create a team, they will be redirected to the login page. These user roles are the same for viewing, adding, and deleting teams. Any user can download a csv of players when looking at a specific team.

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

5. **Install PapaParse Library:**
   - For Windows:
     ```
     npm ngx install papaparse
     ```
   - For MacOS or Linux:
     ```
     npm install papaparse
     ```

6. **Run Development Server:**
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
