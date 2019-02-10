/*
Create a new Database called favorite_db within MySQL Workbench and use the database for the remainder of this activity.

Create a table called favorite_foods and add the following to it:

For the table favorite_movies and add the following to it:

Create the column "film" which can take in a string and cannot be NULL
Create the column "five_times" which can take in a boolean
create the column "score" which can take in an integer


BONUS: Go online and look into how one might go about adding data into a table*/


CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
  food VARCHAR(50) NOT NULL,
  score INT
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INT
);

CREATE TABLE favorite_movies (
  film VARCHAR(100) NOT NULL,
  five_time BOOLEAN DEFAULT false,
  score INT
);