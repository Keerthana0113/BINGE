-- Shows table
CREATE TABLE IF NOT EXISTS shows (
    show_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    show_time DATETIME NOT NULL,
    available_seats INT DEFAULT 100,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

INSERT INTO shows (movie_id, show_time, available_seats)
VALUES 
(1, '2025-12-20 18:00:00', 100),
(1, '2025-12-21 21:00:00', 100),
(2, '2025-12-22 19:00:00', 100);

select * from shows;