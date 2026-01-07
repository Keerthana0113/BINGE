import React, { useState } from "react";
import "./App.css";

import KantaraImg from "./images/kantara.jpg";
import DevilImg from "./images/devil.jpg";
import PathaanImg from "./images/pathaan.jpg";
import JawanImg from "./images/jawan.jpg";

const movies = [
  { id: 1, name: "Kantara", seats: 20, image: KantaraImg },
  { id: 2, name: "Devil", seats: 20, image: DevilImg },
  { id: 3, name: "Pathaan", seats: 20, image: PathaanImg },
  { id: 4, name: "Jawan", seats: 20, image: JawanImg },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookedSeats, setBookedSeats] = useState(0);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setBookedSeats(0);
  };

  const handleBooking = () => {
    if (!selectedMovie) return;

    if (bookedSeats < selectedMovie.seats) {
      setBookedSeats(bookedSeats + 1);
    } else {
      alert("No more seats available!");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Booking App</h1>

      <div className="movies-container">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-card ${
              selectedMovie?.id === movie.id ? "active" : ""
            }`}
            onClick={() => handleSelectMovie(movie)}
          >
            <img src={movie.image} alt={movie.name} />

            <div className="movie-card-content">
              <h3>{movie.name}</h3>
              <p>Total Seats: {movie.seats}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="booking-section">
          <h2>🎟 Booking for {selectedMovie.name}</h2>
          <p>Booked Seats: {bookedSeats}</p>
          <p>Available Seats: {selectedMovie.seats - bookedSeats}</p>

          <button onClick={handleBooking}>Book Seat</button>
        </div>
      )}
    </div>
  );
}

export default App;