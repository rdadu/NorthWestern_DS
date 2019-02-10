
DROP DATABASE IF EXISTS Second_International_Bank;
CREATE DATABASE Second_International_Bank;

-- Makes it so all of the following code will affect animals_db --
USE Second_International_Bank;

/*-- Creates the table "people" within animals_db --*/
CREATE TABLE Customers (
  ID INT(5) AUTO_INCREMENT NOT NULL,
  FirstName VARCHAR(50) NOT NULL,
  LastName  VARCHAR(50) NOT NULL,
  Loan BOOLEAN,
  Checking DECIMAL(20,2),
  Savings DECIMAL(20,2),
  PRIMARY KEY (ID)
);

-- Creates new rows containing data in all named columns --
INSERT INTO Customers (FirstName, LastName,Loan,Checking,Savings)
VALUES ("Rupal", "Patel", true, 100.01, 100.00),
("Simran", "Jain", true, 200.02,200.02),
("Meghan", "Jain",true, 300.03,300.03),
("Saiya", "Patel", true, 200.02,200.02),
("Sunari", "Patel",true, 300.02,300.02);


SELECT * FROM Customers;


