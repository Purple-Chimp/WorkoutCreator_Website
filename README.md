# Workout Website

A web application for creating, tracking, and sharing custom workout routines. Built with HTML, CSS, JavaScript, and Firebase Firestore for sharing workouts.

## Features

- Interactive workout calendar
- Add, edit, and delete workouts for any day
- Custom exercises with descriptions and images
- Mark workouts as complete/incomplete
- Copy workouts to multiple days
- Share and import workouts using unique codes (via Firebase)
- Print-friendly workout plan

## Directory Structure

```
Workout Website (with Firebase)/
├── .firebaserc
├── .gitignore
├── 404.html
├── firebase.json
├── index.html
├── printable-workouts.html
├── style.css
├── scripts/
│   └── firebase-init.js
└── .firebase/
```

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/Purple-Chimp/WorkoutCreator_Website.git
```

### 2. Open the Project

Open the `Workout Website (with Firebase)` directory in [Visual Studio Code](https://code.visualstudio.com/) or your preferred editor.

### 3. Run Locally

You can open `index.html` directly in your browser for local use.  
To use sharing features, you must deploy to Firebase Hosting.

### 4. Firebase Hosting (Optional)

If you want to use the sharing/import feature:

- Install [Firebase CLI](https://firebase.google.com/docs/cli)
- Login:  
  `firebase login`
- Deploy:  
  `firebase deploy --only hosting`

## Usage

- **Add a workout:** Click on a day, fill in workout details, and save.
- **Custom exercises:** Add your own exercises with descriptions and images.
- **Share workouts:** Use the "Save a Workout" button to generate a share code.
- **Import workouts:** Enter a code and click "Load Shared".
- **Print:** Click the "Print" button for a printable version.

## Technologies Used

- HTML, CSS, JavaScript
- [Firebase Firestore](https://firebase.google.com/docs/firestore) (for sharing workouts)

## License

This project is for personal and educational use.

---

*Created by Purple-Chimp*, James Dacey
