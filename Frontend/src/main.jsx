import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import store from "./store/store";
import Register from "./pages/Register.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
//import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Event from "./Components/Event.jsx";
import Jobs from "./Components/Jobs.jsx";
import Newsletter from "./Components/NewsLetter.jsx";
import SendMail from "./Components/SendMail.jsx";
import BulkUpload from "./Components/BulkUpload.jsx";
import SearchPeople from "./Components/SearchPeople.jsx";
import Meeting from "./Components/Meeting.jsx";
import Feedback from "./Components/Feedback.jsx";
import YearbookPage from "./pages/YearbookPage.jsx";
import EventDetails from "./Components/EventDetails/EventDetails.jsx";
import EventCard from "./Components/EventCard/EventCard.jsx";
import HomePage from "./Components/EventCard/HomePage.jsx";
import MentorshipPage from "./Components/MentorshipPage.jsx";
import MentorPage from "./Components/MentorPage.jsx";
import App1 from "./Components/app/App1.jsx";
import BecomeAMentor from "./Components/BecomeAMentor.jsx";
import MenteeRegistrationForm from "./Components/MenteeRegistrationForm.jsx";
import MentorshipFeedback from "./Components/Mentorshipfeedback.jsx";
import MapComponent from "./Components/MapComponent.jsx";
import App2 from "./Components/khadija/App2.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'leaflet/dist/leaflet.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <App1 />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },

      {
        path: "events",
        element: <Event />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/send-mail",
        element: <SendMail />,
      },
      {
        path: "/bulk-upload",
        element: <BulkUpload />,
      },
      {
        path: "/search-people",
        element: <SearchPeople />,
      },
      {
        path: "/meeting",
        element: <Meeting />,
      },
      {
        path: "/yearbook",
        element: <YearbookPage/>,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/eventdetails",
        element:<EventDetails/> ,
      },
      {
        path: "/eventcard",
        element:<EventCard/>,
      },
      {
        path: "/homepage",
        element: <HomePage/> ,
      },
      {
        path: "/mentorship",
        element:  <MentorshipPage/>
      },
      {
        path: "/mentorshippage",
        element:  <MentorPage/>
      },
      {
        path: "/app1",
        element:  <App1/>
      },
      {
        path: "/dashboard",
        element:  <App2/>
      },
      {
        path: "/becomeamentor",
        element:  <BecomeAMentor/>
      },
      {
        path: "/becomeamentee",
        element:  <MenteeRegistrationForm/>
      },
      {
        path: "/mentorshipfeedback",
        element:  <MentorshipFeedback/>
      },
      {
        path: "/scholarsnearby",
        element:  <MapComponent/>
      }
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
