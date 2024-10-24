-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2024 a las 13:36:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `migracheck`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `country`
--

CREATE TABLE `country` (
  `id_country` int(6) NOT NULL,
  `name` varchar(80) NOT NULL,
  `demonym` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `country`
--

INSERT INTO `country` (`id_country`, `name`, `demonym`) VALUES
(1, 'Colombia', 'colombiano'),
(2, 'Costa Rica', ''),
(3, 'Cuba', ''),
(4, 'Republica Dominicana', ''),
(5, 'Mexico', ''),
(6, 'Guatemala', ''),
(7, 'El Salvador', ''),
(8, 'Honduras', ''),
(9, 'Nicaragua', ''),
(10, 'Panama', ''),
(11, 'Venezuela', ''),
(12, 'Ecuador', ''),
(13, 'Brasil', ''),
(14, 'Peru', ''),
(15, 'Bolivia', ''),
(16, 'Paraguay', ''),
(17, 'Uruguay ', ''),
(18, 'Argentina', ''),
(19, 'Chile', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faq`
--

CREATE TABLE `faq` (
  `id_faq` int(6) NOT NULL,
  `process_id` int(6) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `faq`
--

INSERT INTO `faq` (`id_faq`, `process_id`, `question`, `answer`) VALUES
(1, 8, '¿Cuánto se demora la visa de estudiante para España desde Colombia?', 'El tiempo de procesamiento de una visa de estudiante para España desde Colombia puede variar dependiendo de varios factores, pero en general, suele demorar entre 1 y 2 meses. Este plazo incluye la revisión de documentos, la verificación de los requisitos,'),
(8, 2, '¿Cuánto se demora la visa de turista para España desde %PAIS%?', 'Los ciudadanos de%PAIS% no necesitan visa de turista para ingresar a España o a cualquier país del espacio Schengen por estancias cortas, de hasta 90 días en un periodo de 180 días. Esto aplica para viajes de turismo, negocios, o visitas familiares.\r\n\r\nSi'),
(16, 1, 'Que países de Latinoamérica no necesitan visa Schengen para viajar a España?', 'Ciertos países de Latinoamérica tienen acuerdos con la Unión Europea que permiten a sus ciudadanos viajar a los países Schengen sin necesidad de visa para estancias cortas (hasta 90 días en un período de 180 días). Esto facilita los viajes por turismo, ne'),
(20, 2, 'Que países de Latinoamérica necesitan visa Schengen para viajar a España?', 'Los países de Latinoamérica cuyos ciudadanos necesitan visa para entrar a España (y al espacio Schengen en general) son los siguientes:\r\n\r\nBolivia,\r\nCuba,\r\nEcuador,\r\ny República Dominicana\r\n\r\nLos ciudadanos de estos países deben solicitar una visa Schenge');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lawyers`
--

CREATE TABLE `lawyers` (
  `id_lawyer` int(6) NOT NULL,
  `name` varchar(80) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `photo_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lawyers`
--

INSERT INTO `lawyers` (`id_lawyer`, `name`, `phone`, `mail`, `description`, `photo_url`) VALUES
(1, 'Jose Lopez', '645 654 754 ', 'zgsdfghdf@edshgsd.esw', 'Experto en visados y regularizaciones de ciudadanos extranjeros.', ''),
(2, 'Abogada Maribel García.', '(+34) 635 125 495', 'maribelg@gmail.com', 'Experta en visados de ciudadanos de Latinoamérica.', ''),
(3, 'Abogado Eduardo Torres', '(+34) 632 789 421', 'edutorres@gmail.com', 'Experto en procesos de arraigo', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lawyers_process`
--

CREATE TABLE `lawyers_process` (
  `lawyer_id` int(6) NOT NULL,
  `process_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lawyers_process`
--

INSERT INTO `lawyers_process` (`lawyer_id`, `process_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `process`
--

CREATE TABLE `process` (
  `id_process` int(6) NOT NULL,
  `name` varchar(80) NOT NULL,
  `duration` enum('short','long') NOT NULL DEFAULT 'short',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `process`
--

INSERT INTO `process` (`id_process`, `name`, `duration`, `description`) VALUES
(1, 'Visados de larga duración', 'long', 'Los trámites de regularización de larga duración en España son aquellos que permiten a los ciudadanos extranjeros obtener un permiso de residencia más extenso, ya sea inicialmente o tras haber vivido en el país por un período prolongado. Estos trámites están diseñados para regularizar la situación de personas que desean establecerse en España de manera más permanente, y generalmente implican cumplir con ciertos requisitos, como la estancia prolongada, vínculos familiares o laborales, o la posibilidad de demostrar medios económicos para residir.'),
(2, 'Visados de corta duracion', 'short', 'Visados ​​expedidos para permitir el tránsito y estancias de corta duración en el espacio Schengen . Estos visados ​​tienen una validez máxima de 90 días durante un periodo de 180 días y permiten una o varias entradas.'),
(3, 'Visa de turista', 'short', 'La visa de turista permite a los viajeros visitar España y otros países del Espacio Schengen por un período de hasta 90 días en un lapso de 180 días. Es ideal para viajes de ocio, visitas familiares o cortas estancias de negocios.'),
(4, ' Visa de trabajo', 'short', 'La visa de trabajo permite a los extranjeros residir y trabajar en España. Existen distintos tipos de visados de trabajo, incluidos aquellos para empleo por cuenta ajena (trabajar en una empresa española) y cuenta propia (establecer un negocio propio en España).'),
(6, ' Visa de Voluntariado', 'short', 'La visa de voluntariado permite a los extranjeros participar en actividades de voluntariado en organizaciones españolas (realizar actividades de voluntariado y cooperación en proyectos sociales, culturales o ambientales).'),
(7, ' Visa de Investigación', 'short', 'El visado de investigación es para investigadores que han sido aceptados en centros de investigación en España (realizar proyectos de investigación en instituciones académicas o científicas).'),
(8, 'Visa de Estudiante', 'short', 'Permite a los estudiantes extranjeros estudiar en instituciones educativas en España. Generalmente, la duración de la visa es equivalente a la duración del programa educativo (hasta un año, renovable).'),
(9, 'Visa no lucrativa', 'long', 'Permite residir en España sin trabajar, ideal para personas que pueden mantener su vida económica a través de ahorros o ingresos de fuera del país.\r\n\r\nInicialmente por un año, renovable cada dos años.'),
(10, 'Visa de inversionista', 'long', 'Visa de residencia para personas que realizan inversiones significativas en España, generalmente en bienes raíces o negocios.\r\n\r\nDuración: Inicialmente por dos años, renovable cada cinco años.'),
(11, 'Reagrupación familiar', 'long', 'Permite a los ciudadanos extranjeros que residen legalmente en España traer a sus familiares directos (cónyuge, hijos, padres).\r\n\r\nDuración: Depende de la duración del permiso del familiar que reside en España.'),
(12, 'Arraigo social', 'long', 'Este trámite permite regularizar a aquellas personas que llevan al menos 3 años en España de forma irregular, siempre y cuando puedan demostrar arraigo social, es decir, vínculos familiares o sociales en el país.'),
(13, 'Arraigo laboral', 'long', 'Este procedimiento es para extranjeros que hayan trabajado en España de manera irregular durante al menos 6 meses en los últimos dos años.'),
(14, 'Arraigo Familiar', 'long', 'Está destinado a extranjeros que tienen lazos familiares con ciudadanos españoles o residentes legales en España, como hijos o padres de españoles.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id_country`);

--
-- Indices de la tabla `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id_faq`),
  ADD KEY `process_id` (`process_id`);

--
-- Indices de la tabla `lawyers`
--
ALTER TABLE `lawyers`
  ADD PRIMARY KEY (`id_lawyer`);

--
-- Indices de la tabla `lawyers_process`
--
ALTER TABLE `lawyers_process`
  ADD PRIMARY KEY (`lawyer_id`,`process_id`),
  ADD KEY `process_id` (`process_id`);

--
-- Indices de la tabla `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`id_process`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `country`
--
ALTER TABLE `country`
  MODIFY `id_country` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `faq`
--
ALTER TABLE `faq`
  MODIFY `id_faq` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `lawyers`
--
ALTER TABLE `lawyers`
  MODIFY `id_lawyer` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `process`
--
ALTER TABLE `process`
  MODIFY `id_process` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `faq_ibfk_1` FOREIGN KEY (`process_id`) REFERENCES `process` (`id_process`);

--
-- Filtros para la tabla `lawyers_process`
--
ALTER TABLE `lawyers_process`
  ADD CONSTRAINT `lawyers_process_ibfk_1` FOREIGN KEY (`process_id`) REFERENCES `process` (`id_process`),
  ADD CONSTRAINT `lawyers_process_ibfk_2` FOREIGN KEY (`lawyer_id`) REFERENCES `lawyers` (`id_lawyer`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
