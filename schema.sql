DROP DATABASE IF EXISTS Influx;
CREATE DATABASE Influx;
USE Influx;

DROP TABLE IF EXISTS `merchant`;

CREATE TABLE `merchant` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(30) DEFAULT NULL,
	`location` varchar(50) DEFAULT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `transaction` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`merchant_id` int(11) unsigned NOT NULL,
	`time` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`merchant_id`)
		REFERENCES merchant(id)
		ON DELETE CASCADE
);