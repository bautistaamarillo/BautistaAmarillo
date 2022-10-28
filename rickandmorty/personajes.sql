-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2022 a las 00:18:39
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rickandmorty`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `id_personaje` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `estado` text COLLATE utf8_spanish_ci NOT NULL,
  `sexo` text COLLATE utf8_spanish_ci NOT NULL,
  `origen` text COLLATE utf8_spanish_ci NOT NULL,
  `especie` text COLLATE utf8_spanish_ci NOT NULL,
  `tipo` text COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` text COLLATE utf8_spanish_ci NOT NULL,
  `foto` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `id_personaje`, `nombre`, `estado`, `sexo`, `origen`, `especie`, `tipo`, `ubicacion`, `foto`) VALUES
(1, 81, 'Crocubot', 'Dead', 'Male', 'unknown', 'Animal', 'Robot-Crocodile hybrid', 'Worldender\'s lair', 'https://rickandmortyapi.com/api/character/avatar/81.jpeg'),
(3, 197, 'Kyle', 'Dead', 'Male', 'Zeep Xanflorp\'s Miniverse', 'Humanoid', 'Miniverse inhabitant', 'Kyle\'s Teenyverse', 'https://rickandmortyapi.com/api/character/avatar/197.jpeg'),
(11, 197, 'Kyle', 'Dead', 'Male', 'Zeep Xanflorp\'s Miniverse', 'Humanoid', 'Miniverse inhabitant', 'Kyle\'s Teenyverse', 'https://rickandmortyapi.com/api/character/avatar/197.jpeg'),
(12, 197, 'Kyle', 'Dead', 'Male', 'Zeep Xanflorp\'s Miniverse', 'Humanoid', 'Miniverse inhabitant', 'Kyle\'s Teenyverse', 'https://rickandmortyapi.com/api/character/avatar/197.jpeg'),
(13, 741, 'Cirque du Soleil Zumanity Member', 'Alive', 'Female', 'Earth (Replacement Dimension)', 'Human', '', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/741.jpeg'),
(14, 741, 'Cirque du Soleil Zumanity Member', 'Alive', 'Female', 'Earth (Replacement Dimension)', 'Human', '', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/741.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
