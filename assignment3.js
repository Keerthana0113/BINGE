let selectedMovie = "";
const seatsGrid = document.getElementById("seatsGrid");

function scrollToMovies() {
    document.getElementById("movies").scrollIntoView({ behavior: "smooth" });
}

function bookSeat(movie) {
    selectedMovie = movie;
    document.getElementById("movieTitle").innerText = movie;

    seatsGrid.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.innerText = i;
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");
        });
        seatsGrid.appendChild(seat);
    }

    document.getElementById("seatModal").style.display = "block";
}

function closeModal() {
    document.getElementById("seatModal").style.display = "none";
}

function confirmBooking() {
    const chosen = document.querySelectorAll(".seat.selected");

    if (chosen.length === 0) {
        alert("Please choose at least one seat.");
        return;
    }

    const seatNumbers = Array.from(chosen).map(s => s.innerText);
    alert("You booked: " + seatNumbers.join(", ") + "\nMovie: " + selectedMovie);

    closeModal();
}
