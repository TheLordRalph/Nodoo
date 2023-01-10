-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2022 a las 13:35:24
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodoo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albaran`
--

CREATE TABLE `albaran` (
  `id_albaran` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `fecha_albaran` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albaran_producto`
--

CREATE TABLE `albaran_producto` (
  `id_albaran` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_proveedor`
--

CREATE TABLE `cliente_proveedor` (
  `id_cli_prov` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `dni_nif` varchar(9) NOT NULL,
  `datos_bancarios` varchar(24) DEFAULT NULL,
  `tlf` int(11) NOT NULL,
  `dieccion` varchar(200) DEFAULT NULL,
  `cPostal` int(5) DEFAULT NULL,
  `mail` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `nombre` varchar(100) NOT NULL,
  `logo` blob DEFAULT NULL,
  `cif` varchar(30) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  `sitio_web` varchar(200) DEFAULT NULL,
  `codigo_postal` int(11) NOT NULL,
  `pais` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`nombre`, `logo`, `cif`, `correo_electronico`, `direccion`, `telefono`, `sitio_web`, `codigo_postal`, `pais`) VALUES
('Vallinot S.L.', NULL, 'F0234123', 'vallinot@vallinot.es', 'calle de la esperanza Nº 6', 912341234, NULL, 28830, 'ESPAÑA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas_venta`
--

CREATE TABLE `facturas_venta` (
  `id_factura` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_tipo_pago` int(11) NOT NULL,
  `base_imponible_neto` decimal(15,3) NOT NULL,
  `base_imponible_descuento` decimal(15,3) NOT NULL,
  `importe_total_con_iva` decimal(15,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_compra`
--

CREATE TABLE `factura_compra` (
  `id_factura` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_tipo_pago` int(11) NOT NULL,
  `base_imponible_neto` decimal(15,3) NOT NULL,
  `base_imponible_descuento` decimal(15,3) NOT NULL,
  `importe_total_con_iva` decimal(15,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_cli_prov` int(11) NOT NULL,
  `tipo_pedido` varchar(6) DEFAULT NULL CHECK (`tipo_pedido` = 'compra' or `tipo_pedido` = 'venta'),
  `fecha_presupuesto` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_pedido` timestamp NULL DEFAULT NULL,
  `fecha_prevista_entrega` timestamp NULL DEFAULT NULL,
  `fecha_final_pedido` timestamp NULL DEFAULT NULL,
  `estado` varchar(50) DEFAULT 'presupuesto',
  `descuento` int(11) DEFAULT 0,
  `id_iva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_producto`
--

CREATE TABLE `pedido_producto` (
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `descuento` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE `permiso` (
  `id_permiso` int(11) NOT NULL,
  `descripcion` varchar(20) NOT NULL,
  `departamento` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `precio_compra` decimal(15,2) NOT NULL,
  `precio_venta` decimal(15,2) NOT NULL,
  `tipo_iva` varchar(30) NOT NULL
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_iva`
--

CREATE TABLE `tipo_iva` (
  `id_iva` int(11) NOT NULL,
  `iva_1` int(10) UNSIGNED NOT NULL,
  `iva_2` int(10) UNSIGNED NOT NULL,
  `iva_3` int(10) UNSIGNED NOT NULL,
  `iva_4` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pago`
--

CREATE TABLE `tipo_pago` (
  `id_tipo_pago` int(11) NOT NULL,
  `tipo_pago` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `mail` varchar(150) NOT NULL,
  `passw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_permiso`
--

CREATE TABLE `usuario_permiso` (
  `id_usuario` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albaran`
--
ALTER TABLE `albaran`
  ADD PRIMARY KEY (`id_albaran`,`id_pedido`),
  ADD KEY `id_pedido` (`id_pedido`);

--
-- Indices de la tabla `albaran_producto`
--
ALTER TABLE `albaran_producto`
  ADD PRIMARY KEY (`id_albaran`,`id_pedido`,`id_producto`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cliente_proveedor`
--
ALTER TABLE `cliente_proveedor`
  ADD PRIMARY KEY (`id_cli_prov`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `facturas_venta`
--
ALTER TABLE `facturas_venta`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_tipo_pago` (`id_tipo_pago`);

--
-- Indices de la tabla `factura_compra`
--
ALTER TABLE `factura_compra`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_tipo_pago` (`id_tipo_pago`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_cli_prov` (`id_cli_prov`),
  ADD KEY `FK_id_iva` (`id_iva`);

--
-- Indices de la tabla `pedido_producto`
--
ALTER TABLE `pedido_producto`
  ADD PRIMARY KEY (`id_pedido`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`id_permiso`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `tipo_iva`
--
ALTER TABLE `tipo_iva`
  ADD PRIMARY KEY (`id_iva`);

--
-- Indices de la tabla `tipo_pago`
--
ALTER TABLE `tipo_pago`
  ADD PRIMARY KEY (`id_tipo_pago`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuario_permiso`
--
ALTER TABLE `usuario_permiso`
  ADD PRIMARY KEY (`id_usuario`,`id_permiso`),
  ADD KEY `id_permiso` (`id_permiso`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albaran`
--
ALTER TABLE `albaran`
  MODIFY `id_albaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente_proveedor`
--
ALTER TABLE `cliente_proveedor`
  MODIFY `id_cli_prov` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas_venta`
--
ALTER TABLE `facturas_venta`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `factura_compra`
--
ALTER TABLE `factura_compra`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permiso`
--
ALTER TABLE `permiso`
  MODIFY `id_permiso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_iva`
--
ALTER TABLE `tipo_iva`
  MODIFY `id_iva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_pago`
--
ALTER TABLE `tipo_pago`
  MODIFY `id_tipo_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albaran`
--
ALTER TABLE `albaran`
  ADD CONSTRAINT `albaran_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `albaran_producto`
--
ALTER TABLE `albaran_producto`
  ADD CONSTRAINT `albaran_producto_ibfk_1` FOREIGN KEY (`id_albaran`) REFERENCES `albaran` (`id_albaran`) ON UPDATE CASCADE,
  ADD CONSTRAINT `albaran_producto_ibfk_2` FOREIGN KEY (`id_pedido`) REFERENCES `albaran` (`id_pedido`) ON UPDATE CASCADE,
  ADD CONSTRAINT `albaran_producto_ibfk_3` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `facturas_venta`
--
ALTER TABLE `facturas_venta`
  ADD CONSTRAINT `facturas_venta_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON UPDATE CASCADE,
  ADD CONSTRAINT `facturas_venta_ibfk_2` FOREIGN KEY (`id_tipo_pago`) REFERENCES `tipo_pago` (`id_tipo_pago`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura_compra`
--
ALTER TABLE `factura_compra`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON UPDATE CASCADE,
  ADD CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`id_tipo_pago`) REFERENCES `tipo_pago` (`id_tipo_pago`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_id_iva` FOREIGN KEY (`id_iva`) REFERENCES `tipo_iva` (`id_iva`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id_cli_prov`) REFERENCES `cliente_proveedor` (`id_cli_prov`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido_producto`
--
ALTER TABLE `pedido_producto`
  ADD CONSTRAINT `pedido_producto_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_producto_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_permiso`
--
ALTER TABLE `usuario_permiso`
  ADD CONSTRAINT `usuario_permiso_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_permiso_ibfk_2` FOREIGN KEY (`id_permiso`) REFERENCES `permiso` (`id_permiso`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
