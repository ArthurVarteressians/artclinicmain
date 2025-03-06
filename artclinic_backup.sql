-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: artclinic
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.20.04.1

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
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `appointmentnumber` int NOT NULL,
  `doctor_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `appointment_date` datetime NOT NULL,
  `registeration_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `appointment_status` int NOT NULL,
  PRIMARY KEY (`appointmentnumber`),
  UNIQUE KEY `doctor_id_UNIQUE` (`appointmentnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,1,1,'2024-09-03 10:00:00','2024-08-30 10:24:25','2024-08-30 10:24:25',1),(2,1,2,'2024-09-03 16:00:00','2024-08-30 10:25:15','2024-08-30 10:25:15',1),(3,2,3,'2024-11-11 14:00:00','2024-08-30 10:26:15','2024-08-30 10:26:15',0),(4,1,4,'2024-09-18 10:00:00','2024-09-16 15:17:29','2024-09-16 15:17:29',0),(5,1,5,'2024-10-01 10:00:00','2024-09-28 13:10:44','2024-09-28 13:10:44',0),(6,1,6,'2024-10-16 10:00:00','2024-10-14 17:25:24','2024-10-14 17:25:24',0),(7,1,7,'2024-10-15 10:00:00','2024-10-15 13:57:12','2024-10-15 13:57:12',0),(8,1,8,'2024-10-15 14:00:00','2024-10-15 13:57:41','2024-10-15 13:57:41',0),(9,1,10,'2024-10-16 12:00:00','2024-10-15 15:34:39','2024-10-15 15:34:39',0),(10,1,12,'2024-10-15 12:00:00','2024-10-15 15:54:24','2024-10-15 15:54:24',0),(11,2,13,'2024-10-16 10:00:00','2024-10-15 16:00:33','2024-10-15 16:00:33',0),(12,3,14,'2024-10-23 12:00:00','2024-10-15 16:01:01','2024-10-15 16:01:01',0),(13,3,15,'2024-10-24 12:00:00','2024-10-15 16:02:05','2024-10-15 16:02:05',0);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `callrequests`
--

DROP TABLE IF EXISTS `callrequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `callrequests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phonenumber` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  `submission_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `callrequests`
--

LOCK TABLES `callrequests` WRITE;
/*!40000 ALTER TABLE `callrequests` DISABLE KEYS */;
INSERT INTO `callrequests` VALUES (1,'Arth ressians','123123123123','a1ressian@gmail.com',0,'2024-08-30 10:23:30'),(2,'Arth sians','43543534535','arrssian@gmail.com',0,'2024-08-30 10:27:51'),(3,' essians','3453454372465',' eressian@gmail.com',0,'2024-08-30 10:28:00'),(4,'Art sians','01512434534','arth4ssians@web.de',0,'2024-10-14 17:25:53'),(5,'Arth essians','09493453453','art4essian@gmail.com',0,'2024-10-15 22:37:57');
/*!40000 ALTER TABLE `callrequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `doctor_id` int NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `department` varchar(45) NOT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `doctor_id_UNIQUE` (`doctor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'A. kim','Dentist'),(2,'H. Jhon','Cardiologists'),(3,'J. Alik','Neurologist'),(4,'P. Lee','Internal Medicine'),(5,'B. Gaya','Pulmonologist'),(6,'C. Richard','Radiologist');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managemenlogin`
--

DROP TABLE IF EXISTS `managemenlogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `managemenlogin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managemenlogin`
--

LOCK TABLES `managemenlogin` WRITE;
/*!40000 ALTER TABLE `managemenlogin` DISABLE KEYS */;
INSERT INTO `managemenlogin` VALUES (1,'A.kim@doctor.com','123','doctor'),(2,'h.jhon@doctor.com','321','doctor'),(3,'J.Alik@doctor.com','123','doctor'),(4,'P.lee@doctor.com','321','doctor'),(5,'b.gaya@doctor.com','12345','doctor'),(6,'c.richard@doctor.com','321','doctor'),(7,'artclinic@manager.com','54321','manager');
/*!40000 ALTER TABLE `managemenlogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patientslist`
--

DROP TABLE IF EXISTS `patientslist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patientslist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `phonenumber` varchar(20) NOT NULL,
  `hashedpassword` varchar(255) NOT NULL,
  `registration_date` date DEFAULT NULL,
  `patient_status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientslist`
--

LOCK TABLES `patientslist` WRITE;
/*!40000 ALTER TABLE `patientslist` DISABLE KEYS */;
INSERT INTO `patientslist` VALUES (1,'Art ssians','arth4an@gmail.com',23,'123123123123','$2b$10$ldYFVspvWE74HkWbIf.fD.oN1yehx762LGATrB/JEA63TMfqwzFIW','2024-10-04',0),(2,'Arth teressians','a3teressian@gmail.com',12,'3221321321','$2b$10$olB6ppt2HMWG3KQhTOGEc.zkqjFtb0VYfbx1sS912zceEoh6Fmd0O','2024-10-08',0),(3,'Arth ssians','artva@gmail.com',25,'123141515323','$2b$10$19lvVFsx4J1vbNRkzCs/fe6tUoUkHhKcRBZSS.5KriJQ6SvPDdZRm','2024-10-11',0),(4,'ressians','artssian@gmail.com',33,'1389123896','$2b$10$kg6HtIBTnwBuQOP8SN1kye9vSQdL4jzZSAK1lRlJzwCd4CZvR2ZVK','2024-10-14',0),(5,'Art rteressians','artrrssian@gmail.com',43,'15128841480','$2b$10$ujWiQwdrOHjxsCwQaDrrm.iKqpok4akzWuV3gm5KqYY6Tzz9CpO9O','2024-10-06',0),(6,'Ar eressians','rssians@web.de',43,'048841480','$2b$10$J8qkIR28gEVeuEoVOiabb.EeGFhzvY1PrCrhJRDhrf8LDKXBmabpW','2024-10-04',0),(7,'Art eressians','3sians@web.de',23,'012341841480','$2b$10$wpKXvqThPzj1SClD8/C.a.iRLsHIHaL2Eee6YqEP57EytvYoRN9tu','2024-10-14',0),(8,'Art rteressians','arthur2323essians@web.de',12,'012341480','$2b$10$Di2dOM8S9FVQ0JABrlT4j.LI02rjO3gceuENUDtl3MhlXQNe6hy1e','2024-10-15',0),(9,'Arthur Varteressians','arthuqwsian@gmail.com',21,'154812748','$2b$10$dN4qW.ZwOUxXsTqAG1N./.p3DDH9rSU6smyuASfrv/5DEJJDgMaeW','2024-10-15',0),(10,'e ressians','eteressian@gmail.com',32,'23412399123','$2b$10$yQhP9XGJWseZpNuQ2K6OA.OOYEW2CbZwbuY1D1VfdMiCIX6JcQYqO','2024-10-02',0),(11,'Art ressians','arthressian@gmail.com',55,'3242341234','$2b$10$.k/uD5pZ4TztZsGYbFqaiuZ4iNsAfWqz1f7uczn8RDZNqSEgP0h0y','2024-10-07',0),(12,'Arth ressians','arth2ian@gmail.com',23,'24125423512','$2b$10$nf8VLz48JfC.Z30OS8k32.W.JsVMAOD3ZcHUu75WdOjJfTl1FbXru','2024-10-14',0),(13,'Aw eressians','art3teressweian@gmail.come',23,'09412412412','$2b$10$fhf1GW5YpShNDtaTnCMOmuLAyuPCkPXSTDV21Mrn27bakK2geCgWm','2024-10-14',0),(14,'Ar3 essians','23ssians@web.de',12,'2353241235','$2b$10$A3W8C/SETH4rPOCLZ5h.iedHd4.V7r4LPSyo6gY.NpdvW3mJEtHvW','2024-10-14',0),(15,'Art sians','arthqwqressians@web.de',43,'01341241280','$2b$10$415de/cIsCl5dBH4FsBxCugspZUskJMp9uc/4N8grwf/f2h3xkoUi','2024-10-14',0);
/*!40000 ALTER TABLE `patientslist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-16 20:15:26
