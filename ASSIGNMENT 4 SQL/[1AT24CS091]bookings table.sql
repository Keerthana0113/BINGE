
-- Bookings table
-- CREATE TABLE IF NOT EXISTS bookings (
--     booking_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     show_id INT NOT NULL,
--     seats_booked INT NOT NULL,
--     booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id),
--     FOREIGN KEY (show_id) REFERENCES shows(show_id)
-- );

-- INSERT INTO bookings (user_id, show_id, seats_booked)
-- VALUES
-- (1, 1, 2),
-- (4, 2, 3);

select * from bookings;