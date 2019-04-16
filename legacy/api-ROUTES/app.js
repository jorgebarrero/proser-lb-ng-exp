import createError from "http-errors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Debug from "debug";
import express from "express";
import logger from "morgan";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import favicon from "serve-favicon";
import cors from "cors";

// ROUTES
import index from "./routes/index";

// Reports
/* eslint-disable */
import conexion_desconexion_Router from "./routes/reports/rep-conexion-desconexion";
import detalle_auxiliares_Router from "./routes/reports/rep-detalle_auxiliares";
import detalle_asignaciones_Router from "./routes/reports/rep-detalle_asignaciones";

import detallado_auxiliares_Router from "./routes/reports/rep-detallado-auxiliares";
import detallado_asignaciones_Router from "./routes/reports/rep-detallado-asignaciones";

import detalle_llamadas_Router from "./routes/reports/rep-detalle-llamadas";
import operativo_detallado_Router from "./routes/reports/rep-operativo-detallado";
import productividad_Router from "./routes/reports/rep-productividad";
import saliente_intervalo_Router from "./routes/reports/rep-saliente-intervalo";
import servicio_diario_Router from "./routes/reports/rep-servicio-diario";
import servicio_intervalo_Router from "./routes/reports/rep-servicio-intervalo";
import servicio_historico_Router from "./routes/reports/rep-servicio-historico";
import niveles_servicio_Router from "./routes/reports/rep-niveles-servicio";
import menu_reportes_Router from "./routes/reports/rep-menus";
import agente_reportes_Router from "./routes/reports/rep-agentes";
import saliente_diario_Router from "./routes/reports/rep-saliente-diario";

import entrante_diario_Router from "./routes/reports/rep-entrante-diario";
import entrante_intervalo_Router from "./routes/reports/rep-entrante-intervalo";
// import entrante_dashboard_Router from "./routes/reports/rep-entrante-dashboard";

import manual_diario_Router from "./routes/reports/rep-manual-diario";
import manual_intervalo_Router from "./routes/reports/rep-manual-intervalo";

import cdr_Router from "./routes/reports/rep-cdr";

import rep_dashboard_Router from "./routes/gtr/dashboard";

const app = express();

const debug = Debug("api-routes:app");
app.set("views", path.join(__dirname, "views"));

// view engine setup
app.set("view engine", "pug");
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true,
    sourceMap: true
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/recordings", express.static("/var/spool/asterisk/monitor/"));
app.use(
  "/recordings2",
  express.static("10.30.4.50/var/spool/asterisk/monitor/")
);

// CORS
// app.use(cors());
const whitelist = [
  "http://localhost:4200",
  "http://10.30.4.55",
  "http://10.30.4.54",
  "http://10.30.4.50"
];

app.options("*", cors());
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(
  cors({
    origin: corsOptions
  })
);

// USE ROUTES
app.use("/", index);

// REPORTS
app.use("/api/rep-conexion-desconexion", conexion_desconexion_Router);
app.use("/api/rep-detalle-auxiliares", detalle_auxiliares_Router);
app.use("/api/rep-detalle-asignaciones", detalle_asignaciones_Router);

app.use("/api/rep-detallado-auxiliares", detallado_auxiliares_Router);
app.use("/api/rep-detallado-asignaciones", detallado_asignaciones_Router);

app.use("/api/rep-detalle-llamadas", detalle_llamadas_Router);
app.use("/api/rep-operativo-detallado", operativo_detallado_Router);
app.use("/api/rep-productividad", productividad_Router);
app.use("/api/rep-saliente-intervalo", saliente_intervalo_Router);
app.use("/api/rep-servicio-diario", servicio_diario_Router);
app.use("/api/rep-servicio-historico", servicio_historico_Router);
app.use("/api/rep-servicio-intervalo", servicio_intervalo_Router);
app.use("/api/rep-niveles_servicio", niveles_servicio_Router);
app.use("/api/rep-menus", menu_reportes_Router);
app.use("/api/rep-agentes", agente_reportes_Router);
app.use("/api/rep-saliente-diario", saliente_diario_Router);

app.use("/api/rep-entrante-diario", entrante_diario_Router);
app.use("/api/rep-entrante-intervalo", entrante_intervalo_Router);
// app.use("/api/rep-entrante-dashboard", entrante_dashboard_Router);

app.use("/api/rep-manual-diario", manual_diario_Router);
app.use("/api/rep-manual-intervalo", manual_intervalo_Router);

app.use("/api/rep-cdr", cdr_Router);

app.use("/api/rep-db", rep_dashboard_Router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Handle uncaughtException
process.on("uncaughtException", err => {
  debug("Caught exception: %j", err);
  process.exit(1);
});

export default app;
