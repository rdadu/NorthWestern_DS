
DROP DATABASE IF EXISTS programming_db;
CREATE DATABASE programming_db;

-- Makes it so all of the following code will affect animals_db --
USE programming_db;

/*-- Creates the table "people" within animals_db --*/
CREATE TABLE programming_languages (
  id INT AUTO_INCREMENT NOT NULL,
  languages VARCHAR(30) NOT NULL,
  rating  VARCHAR(30),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO programming_languages (languages,rating)
VALUES ("Python", 10),
("VBA",20),
("Rexx",5);

UPDATE programming_languages
SET ratings = 2
WHERE id = 3;

SELECT * FROM programming_languages;
