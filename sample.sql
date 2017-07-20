-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2017 at 11:57 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cv_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(2) NOT NULL,
  `data` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `data`) VALUES
(1, '                                          <address>\r\n                                                <strong>Jonathan, Inc.</strong><br/>\r\n                                                795 Folsom Ave, Suite 600<br/>\r\n                                                San Francisco, CA 94107<br/>\r\n                                                <abbr title=\"Phone\">P:</abbr> (123) 456-7890\r\n                                            </address>\r\n\r\n                                            <address>\r\n                                                <strong>JONATHAN DOE</strong><br/>\r\n                                                <a href=\"mailto:#\">name@company.com</a>\r\n                                            </address>\r\n                                        '),
(2, '                                            <p>\r\n                                                Ut enim ad minim veniam,\r\n                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n                                            </p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(2) NOT NULL,
  `institution_name` varchar(256) NOT NULL,
  `date` varchar(256) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `institution_name`, `date`, `description`) VALUES
(1, 'Web Developer Collage', '2010 - 2014', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.');

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `id` int(2) NOT NULL,
  `info_type` varchar(256) NOT NULL,
  `info_text` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`id`, `info_type`, `info_text`) VALUES
(1, 'Name', 'Denis Baciu'),
(2, 'Date of Birth', 'January 21, 1991'),
(3, 'email', 'baciudenis@gmail.com'),
(4, 'Address', '13 Demesnes Road\r\n'),
(5, 'Phone', '07624477305'),
(6, 'Website:', 'densi.co');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(2) NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `data`) VALUES
(1, '<div class=\"timeline-panel\">\r\n					          		<h1>Hello, I am <strong>JONATHAN DOE</strong></h1>\r\n					          		<h4>Web Designer and Web developer</h4>\r\n					          		<div class=\"hr-left\"></div>\r\n					          		\r\n					          		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n					          		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n					          		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n					          		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n					          		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n					          		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n					          	</div>');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(2) NOT NULL,
  `name` varchar(256) NOT NULL,
  `value` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `value`) VALUES
(1, 'HTML', 90),
(2, 'CSS3', 50);

-- --------------------------------------------------------

--
-- Table structure for table `work_experience`
--

CREATE TABLE `work_experience` (
  `id` int(2) NOT NULL,
  `company_name` varchar(256) NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `position` varchar(256) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `work_experience`
--

INSERT INTO `work_experience` (`id`, `company_name`, `date_start`, `date_end`, `position`, `description`) VALUES
(1, 'Cedacri', '2017-07-05', '2017-07-27', 'Web Developer', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_info`
--
ALTER TABLE `personal_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work_experience`
--
ALTER TABLE `work_experience`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `personal_info`
--
ALTER TABLE `personal_info`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `work_experience`
--
ALTER TABLE `work_experience`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
