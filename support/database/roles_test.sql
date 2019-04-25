-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 15-04-2019 a las 03:47:57
-- Versión del servidor: 10.3.13-MariaDB-1:10.3.13+maria~bionic-log
-- Versión de PHP: 7.2.15-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `drc_roles_test`
--
CREATE DATABASE IF NOT EXISTS `roles_test` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `roles_test`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AccessToken`
--

CREATE TABLE `AccessToken` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ACL`
--

CREATE TABLE `ACL` (
  `id` int(11) NOT NULL,
  `model` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `property` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `accessType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `permission` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalId` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `HcaAgent`
--

CREATE TABLE `HcaAgent` (
  `hca_agent_id` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `hca_agent_text_key` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_date` datetime DEFAULT NULL,
  `hca_agent_date_text` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_start` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_agent_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_legal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_internal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_agent_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_agente_extension` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_supervisor_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_supervisor_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_schedule_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_schedule_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_schedule_start` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_schedule_end` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_agent_min_start` int(10) DEFAULT NULL,
  `hca_agent_min_end` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `HcaQueue`
--

CREATE TABLE `HcaQueue` (
  `hca_queue_id` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `hca_queue_text_key` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_date` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_date_text` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_start` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_queue_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hcs_queue_queue_number` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_queue_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_client_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_client_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_service_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_service_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_scale_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_scale_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `hca_queue_scale_red` int(10) DEFAULT NULL,
  `hca_queue_scale_yellow` int(10) DEFAULT NULL,
  `hca_queue_scale_green` int(10) DEFAULT NULL,
  `hca_queue_scale_blue` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvAgent`
--

CREATE TABLE `InvAgent` (
  `inv_agent_id` int(10) NOT NULL,
  `inv_agent_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_chk` int(10) DEFAULT NULL,
  `inv_agent_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_extension` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_legal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_internal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_supervisor_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_supervisor_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_schedule_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_schedule_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_password` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_eccp_password` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvBreak`
--

CREATE TABLE `InvBreak` (
  `inv_break_id` int(10) NOT NULL,
  `inv_break_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_chk` int(10) DEFAULT NULL,
  `inv_break_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_productivity` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvCampaign`
--

CREATE TABLE `InvCampaign` (
  `inv_campaign_id` int(10) NOT NULL,
  `inv_campaign_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_chk` int(10) DEFAULT NULL,
  `inv_campaign_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_number` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_aftercall_time` int(10) DEFAULT NULL,
  `inv_campaign_start` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_end` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_start_date_text` date DEFAULT NULL,
  `inv_campaign_end_date_text` date DEFAULT NULL,
  `inv_campaign_start_time_text` time DEFAULT NULL,
  `inv_campaign_end_time_text` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvClient`
--

CREATE TABLE `InvClient` (
  `inv_client_id` int(10) NOT NULL,
  `inv_client_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_chk` int(10) DEFAULT NULL,
  `inv_client_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvQueue`
--

CREATE TABLE `InvQueue` (
  `inv_queue_id` int(10) NOT NULL,
  `inv_queue_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_chk` int(10) DEFAULT NULL,
  `inv_queue_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_number` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_use` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvScale`
--

CREATE TABLE `InvScale` (
  `inv_scale_id` int(10) NOT NULL,
  `inv_scale_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_chk` int(10) DEFAULT NULL,
  `inv_scale_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_red` int(10) DEFAULT NULL,
  `inv_scale_yellow` int(10) DEFAULT NULL,
  `inv_scale_green` int(10) DEFAULT NULL,
  `inv_scale_blue` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvSchedule`
--

CREATE TABLE `InvSchedule` (
  `inv_schedule_id` int(10) NOT NULL,
  `inv_schedule_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_chk` int(10) DEFAULT NULL,
  `inv_schedule_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_days` longtext COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvService`
--

CREATE TABLE `InvService` (
  `inv_service_id` int(10) NOT NULL,
  `inv_service_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_chk` int(10) DEFAULT NULL,
  `inv_service_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_use` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `InvSupervisor`
--

CREATE TABLE `InvSupervisor` (
  `inv_supervisor_id` int(10) NOT NULL,
  `inv_supervisor_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_chk` int(10) DEFAULT NULL,
  `inv_supervisor_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_legal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_internal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_schedule_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_schedule_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `MainAudit`
--

CREATE TABLE `MainAudit` (
  `audit_id` int(10) NOT NULL,
  `id_agent` int(10) NOT NULL,
  `id_break` int(10) DEFAULT NULL,
  `datetime_init` datetime NOT NULL,
  `datetime_end` datetime DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `ext_parked` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__TIME__` int(10) DEFAULT NULL,
  `audit_secs_duration` int(10) DEFAULT NULL,
  `audit_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `MainCdr`
--

CREATE TABLE `MainCdr` (
  `id` int(10) NOT NULL,
  `calldate` datetime DEFAULT NULL,
  `clid` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `src` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dst` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dcontext` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `channel` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dstchannel` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lastapp` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lastdata` varchar(80) COLLATE utf8_spanish_ci DEFAULT NULL,
  `duration` int(10) DEFAULT NULL,
  `billsec` int(10) DEFAULT NULL,
  `disposition` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `amaflags` int(10) DEFAULT NULL,
  `accountcode` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `uniqueid` varchar(32) COLLATE utf8_spanish_ci DEFAULT NULL,
  `userfield` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `recordingfile` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cnum` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cnam` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `outbound_cnum` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `outbound_cnam` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dst_cnam` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `did` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `__CALLCENTER__` int(10) DEFAULT NULL,
  `cdr_main_callcenter_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__CASE__` int(10) DEFAULT NULL,
  `cdr_main_case` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_main_subcase` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__TYPE__` int(10) DEFAULT NULL,
  `cdr_type_queue` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_type_extension` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_type_tel_number` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_type_hca_agent_id` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_type_hca_queue_id` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__DATES__` int(10) DEFAULT NULL,
  `cdr_dates_calldate` date DEFAULT NULL,
  `cdr_dates_aaaa` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_aaaa_mm` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_aaaa_mm_dd` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_week` int(10) DEFAULT NULL,
  `cdr_dates_week_day` int(10) DEFAULT NULL,
  `cdr_dates_week_day_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_month` int(10) DEFAULT NULL,
  `cdr_dates_month_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_time` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_dates_minutes` int(10) DEFAULT NULL,
  `cdr_dates_seconds` int(10) DEFAULT NULL,
  `__QLOG__` int(10) DEFAULT NULL,
  `cdr_qlog_uniqueid` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_qlog_ivroption_time` datetime DEFAULT NULL,
  `cdr_qlog_enterqueue_time` datetime DEFAULT NULL,
  `cdr_qlog_connect_time` datetime DEFAULT NULL,
  `cdr_qlog_completecaller_time` datetime DEFAULT NULL,
  `cdr_qlog_completeagent_time` datetime DEFAULT NULL,
  `cdr_qlog_abandon_time` datetime DEFAULT NULL,
  `cdr_qlog_complete_time` datetime DEFAULT NULL,
  `__DURATION_TIME___` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_ivr` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_queue` int(10) DEFAULT NULL,
  `cdr_qlog_secs_with_agent` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_abandon` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_wait` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_hold` int(10) DEFAULT NULL,
  `cdr_qlog_secs_at_operation` int(10) DEFAULT NULL,
  `__QLOG_RESULT__` int(10) DEFAULT NULL,
  `cdr_qlog_result_hung_by` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_qlog_result_hung_agent` int(10) DEFAULT NULL,
  `__CLASIFICATION__` int(10) DEFAULT NULL,
  `cdr_call_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_call_class` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_call_production` int(10) DEFAULT NULL,
  `cdr_call_internal` int(10) DEFAULT NULL,
  `cdr_call_transfer` int(10) DEFAULT NULL,
  `cdr_call_in` int(10) DEFAULT NULL,
  `cdr_call_out` int(10) DEFAULT NULL,
  `cdr_call_in_auto` int(10) DEFAULT NULL,
  `__RECEIVED__` int(10) DEFAULT NULL,
  `cdr_call_received` int(10) DEFAULT NULL,
  `cdr_call_abandoned` int(10) DEFAULT NULL,
  `cdr_call_atended` int(10) DEFAULT NULL,
  `cdr_call_short` int(10) DEFAULT NULL,
  `cdr_call_before_time` int(10) DEFAULT NULL,
  `__MADE__` int(10) DEFAULT NULL,
  `cdr_call_made` int(10) DEFAULT NULL,
  `cdr_call_fail` int(10) DEFAULT NULL,
  `cdr_call_answered` int(10) DEFAULT NULL,
  `cdr_call_efective` int(10) DEFAULT NULL,
  `cdr_call_hungout` int(10) DEFAULT NULL,
  `__AUTOMATIC__` int(10) DEFAULT NULL,
  `cdr_call_auto_bbdd` int(10) DEFAULT NULL,
  `cdr_call_auto_run` int(10) DEFAULT NULL,
  `cdr_call_auto_left` int(10) DEFAULT NULL,
  `cdr_call_auto_turn` int(10) DEFAULT NULL,
  `__RESULTS__` int(10) DEFAULT NULL,
  `cdr_call_result_inbound` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_call_result_outbound` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cdr_call_result_auto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `ownerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Role`
--

CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RoleMapping`
--

CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL,
  `principalType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalId` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `ownerId` int(11) NOT NULL,
  `memberId` varchar(512) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `realm` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `username` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userbase`
--

CREATE TABLE `userbase` (
  `id` int(11) NOT NULL,
  `firstname` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `profile` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `realm` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `username` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `memberId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ACL`
--
ALTER TABLE `ACL`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `HcaAgent`
--
ALTER TABLE `HcaAgent`
  ADD PRIMARY KEY (`hca_agent_id`);

--
-- Indices de la tabla `HcaQueue`
--
ALTER TABLE `HcaQueue`
  ADD PRIMARY KEY (`hca_queue_id`);

--
-- Indices de la tabla `InvAgent`
--
ALTER TABLE `InvAgent`
  ADD PRIMARY KEY (`inv_agent_id`);

--
-- Indices de la tabla `InvBreak`
--
ALTER TABLE `InvBreak`
  ADD PRIMARY KEY (`inv_break_id`);

--
-- Indices de la tabla `InvCampaign`
--
ALTER TABLE `InvCampaign`
  ADD PRIMARY KEY (`inv_campaign_id`);

--
-- Indices de la tabla `InvClient`
--
ALTER TABLE `InvClient`
  ADD PRIMARY KEY (`inv_client_id`);

--
-- Indices de la tabla `InvQueue`
--
ALTER TABLE `InvQueue`
  ADD PRIMARY KEY (`inv_queue_id`);

--
-- Indices de la tabla `InvScale`
--
ALTER TABLE `InvScale`
  ADD PRIMARY KEY (`inv_scale_id`);

--
-- Indices de la tabla `InvSchedule`
--
ALTER TABLE `InvSchedule`
  ADD PRIMARY KEY (`inv_schedule_id`);

--
-- Indices de la tabla `InvService`
--
ALTER TABLE `InvService`
  ADD PRIMARY KEY (`inv_service_id`);

--
-- Indices de la tabla `InvSupervisor`
--
ALTER TABLE `InvSupervisor`
  ADD PRIMARY KEY (`inv_supervisor_id`);

--
-- Indices de la tabla `MainAudit`
--
ALTER TABLE `MainAudit`
  ADD PRIMARY KEY (`audit_id`);

--
-- Indices de la tabla `MainCdr`
--
ALTER TABLE `MainCdr`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `RoleMapping`
--
ALTER TABLE `RoleMapping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `principalId` (`principalId`);

--
-- Indices de la tabla `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `userbase`
--
ALTER TABLE `userbase`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ACL`
--
ALTER TABLE `ACL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `RoleMapping`
--
ALTER TABLE `RoleMapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `userbase`
--
ALTER TABLE `userbase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
