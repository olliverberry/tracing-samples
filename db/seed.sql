USE dogs
CREATE TABLE dogs (
    id int NOT NULL,
    name nvarchar(255),
    breed nvarchar(255),
    age int,
    color varchar(255),
    weight int,
    PRIMARY KEY (id)
);

USE dogs
INSERT INTO dogs
VALUES
(1, 'olliver', 'german shepherd', 2, 'black and tan', 60),
(2, 'lily', 'springer spaniel', 12, 'black and white', 40),
(3, 'lincoln', 'springer spaniel', 10, 'liver and white', 50),
(4, 'laddie', 'springer spaniel', 13, 'black and white', 40);