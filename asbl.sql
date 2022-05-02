-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: asbl-extr-aime
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `actID` int NOT NULL AUTO_INCREMENT,
  `actname` varchar(90) DEFAULT NULL,
  `actDesc` varchar(900) DEFAULT NULL,
  `placeID` int DEFAULT NULL,
  PRIMARY KEY (`actID`),
  UNIQUE KEY `actID_UNIQUE` (`actID`),
  UNIQUE KEY `actname_UNIQUE` (`actname`),
  KEY `placeID_idx` (`placeID`),
  CONSTRAINT `placeID` FOREIGN KEY (`placeID`) REFERENCES `place` (`placeID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,'natation ','cours particulier de nattion ',1);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity-orga`
--

DROP TABLE IF EXISTS `activity-orga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity-orga` (
  `actID` int NOT NULL,
  `userResponsable` int NOT NULL,
  `actDate` varchar(90) NOT NULL,
  PRIMARY KEY (`actID`,`userResponsable`,`actDate`),
  KEY `userResponsable_idx` (`userResponsable`),
  CONSTRAINT `actID` FOREIGN KEY (`actID`) REFERENCES `activity` (`actID`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `userID` FOREIGN KEY (`userResponsable`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity-orga`
--

LOCK TABLES `activity-orga` WRITE;
/*!40000 ALTER TABLE `activity-orga` DISABLE KEYS */;
INSERT INTO `activity-orga` VALUES (1,1,'tt les mardi matin ');
/*!40000 ALTER TABLE `activity-orga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activityinscrip`
--

DROP TABLE IF EXISTS `activityinscrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activityinscrip` (
  `actID` int NOT NULL,
  `userID` int NOT NULL,
  `actDate` varchar(90) NOT NULL,
  PRIMARY KEY (`actID`,`actDate`,`userID`),
  KEY `userID_idx` (`userID`),
  KEY `userIDinsc_idx` (`userID`),
  KEY `actDate_idx` (`actDate`),
  CONSTRAINT `actIDinsc` FOREIGN KEY (`actID`) REFERENCES `activity` (`actID`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `userIDinsc` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activityinscrip`
--

LOCK TABLES `activityinscrip` WRITE;
/*!40000 ALTER TABLE `activityinscrip` DISABLE KEYS */;
/*!40000 ALTER TABLE `activityinscrip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `addressID` int NOT NULL AUTO_INCREMENT,
  `rue` varchar(45) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `codepost` int DEFAULT NULL,
  PRIMARY KEY (`addressID`),
  UNIQUE KEY `addressID_UNIQUE` (`addressID`),
  KEY `codepost_idx` (`codepost`),
  CONSTRAINT `codepost` FOREIGN KEY (`codepost`) REFERENCES `ville` (`codepost`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'chemin ',1,1420);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `droit`
--

DROP TABLE IF EXISTS `droit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `droit` (
  `droitID` int NOT NULL,
  `droitName` varchar(45) NOT NULL,
  PRIMARY KEY (`droitID`),
  UNIQUE KEY `droitID_UNIQUE` (`droitID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `droit`
--

LOCK TABLES `droit` WRITE;
/*!40000 ALTER TABLE `droit` DISABLE KEYS */;
INSERT INTO `droit` VALUES (1,'Superadmin'),(2,'admin'),(3,'userlog'),(4,'usernonlog');
/*!40000 ALTER TABLE `droit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `placeID` int NOT NULL AUTO_INCREMENT,
  `placename` varchar(90) NOT NULL,
  `placeaddress` varchar(300) NOT NULL,
  PRIMARY KEY (`placeID`),
  UNIQUE KEY `placeID_UNIQUE` (`placeID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES (1,'piscine CCM','Colège cardinal mercier');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `userLastName` varchar(45) NOT NULL,
  `addressID` int DEFAULT NULL,
  `droitID` int DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  `mailAdd` varchar(90) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userID_UNIQUE` (`userID`),
  KEY `droitID_idx` (`droitID`),
  KEY `addressID_idx` (`addressID`),
  CONSTRAINT `addressID` FOREIGN KEY (`addressID`) REFERENCES `address` (`addressID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `droitID` FOREIGN KEY (`droitID`) REFERENCES `droit` (`droitID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'quentin','roeland',1,1,'moi','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ville` (
  `codepost` int NOT NULL,
  `villenom` varchar(90) NOT NULL,
  PRIMARY KEY (`codepost`),
  UNIQUE KEY `codepost_UNIQUE` (`codepost`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ville`
--

LOCK TABLES `ville` WRITE;
/*!40000 ALTER TABLE `ville` DISABLE KEYS */;
INSERT INTO `ville` VALUES (1420,'brain-l\'alleud');
/*!40000 ALTER TABLE `ville` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-02 16:11:40
