# 🚀 Distance Calculator Frontend

This is a React-based frontend for the **Distance Calculator App**, which allows users to input two locations and retrieve the formatted addresses along with the calculated distance.

## 📌 Features
- 📍 Enter a starting location and a destination.
- 🔍 Fetches formatted addresses using the backend API.
- 📏 Calculates and displays the distance between two points.
- ⚡ Responsive UI with instant feedback.

---

## 🛠️ Setup & Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```sh
git clone https://github.com/YOUR_USERNAME/distance-calculator-frontend.git
cd distance-calculator-frontend
```

### Install Dependencies
Run the following command inside the project directory:

```sh
npm install
```

---

## 🚀 Running the App

### Development Mode
Start the development server:

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production
To create an optimized build for deployment:

```sh
npm run build
```

The production build will be generated in the `build/` folder.

---

## 🔗 API Integration
This frontend communicates with a Django backend via REST API.

### Expected API Endpoint:
```
POST http://127.0.0.1:8000/api/location/
```

### Example Request Body:
```json
{
    "from_address": "Beverly Centre, Los Angeles",
    "to_address": "Santa Monica Pier, Los Angeles"
}
```

### Example Response:
```json
{
    "from": {
        "address": "8500 Beverly Blvd, Los Angeles, CA 90048, USA",
        "latitude": 34.0751706,
        "longitude": -118.3773546
    },
    "to": {
        "address": "Santa Monica Pier, Santa Monica, CA 90401, USA",
        "latitude": 34.0093515,
        "longitude": -118.4974682
    },
    "distance_km": 13.27
}
```

---

## 📜 Project Structure
```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 LocationForm.js  # Form for user input
 ┃ ┣ 📜 ResultDisplay.js  # Displays results
 ┣ 📜 App.js             # Main application logic
 ┣ 📜 App.css            # Styling
 ┣ 📜 index.js           # Entry point
```

---

## 🧪 Running Tests

```sh
npm test
```

---

## 🎯 Acknowledgments
- Built with [React](https://reactjs.org/)
- Uses [Axios](https://axios-http.com/) for API calls

