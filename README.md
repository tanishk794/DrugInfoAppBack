Drug Info API
A simple RESTful API built with Express.js and MongoDB to serve drug-related data, including filtering by company, pagination, and a list of unique pharmaceutical companies.

📁 Project Structure

.
├── MongoDB/
│   ├── drugSchema.js
│   └── databaseConnect.js
├── Routes/
│   └── drugRouter.js
├── .env
├── server.js


Features
Get Drugs List: Fetch paginated and optionally filtered list of drugs.

Get Unique Companies: Fetch distinct pharmaceutical company names.

CORS Enabled: Allows frontend access from localhost:5173 and localhost:3000.

API Endpoints
1. GET /api/drug
Fetch a paginated list of drugs, optionally filtered by company.

Query Parameters:
company (optional): Filter drugs by company name.

page (optional, default = 1): Page number.

limit (optional, default = 20): Items per page.


2. GET /api/companies
Fetch a sorted list of all unique pharmaceutical companies.


⚙️ Setup Instructions
1. Clone the repository:
git clone 

2. Install dependencies:
npm install
3. Configure Environment:
Create a .env file in the root directory:

MONGO_URI=mongodb://localhost:27017/drugdb
PORT=3000

4. Start the server:
node server.js


ech Stack
Backend: Express.js

Database: MongoDB (Mongoose)

Environment: dotenv

