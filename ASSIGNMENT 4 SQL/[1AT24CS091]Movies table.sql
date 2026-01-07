-- Movies table
CREATE TABLE IF NOT EXISTS movies (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    duration INT,
    release_date DATE
);

INSERT INTO movies (title, genre, duration, release_date)
VALUES 
-- ('Avengers: Endgame', 'Action', 181, '2019-04-26'),
('Inception', 'Sci-Fi', 148, '2010-07-16');

select * from movies;