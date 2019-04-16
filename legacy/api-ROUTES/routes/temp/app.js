/*
* MIDDLEWARE PARA connections BASADO EN EXPRESS
*
*/

process.setMaxListeners(0);
//emitter.setMaxListeners(0);

// DEPENDENCIES
const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const mysql        = require("mysql");
const os           = require('os');
const cors         = require('cors');
const app = express();

// CONNECTION
pool = require('./connections/pool');


/**************************************
 * ROUTING CONFIG
 */

// ROUTING ROUTES
const index_Router = require('./routes/index');
const users_Router = require('./routes/users');

// ROUTING REPORTS
const conexion_desconexion_Router = require('./routes/reports/rep-conexion-desconexion');
const detallado_auxiliares_Router = require('./routes/reports/rep-detallado-auxiliares');
const detalle_llamadas_Router = require('./routes/reports/rep-detalle-llamadas');
const operativo_detallado_Router = require('./routes/reports/rep-operativo-detallado');
const productividad_Router = require('./routes/reports/rep-productividad');
const saliente_intervalo_Router = require('./routes/reports/rep-saliente-intervalo');
const servicio_diario_Router = require('./routes/reports/rep-servicio-diario');;
const servicio_intervalo_Router = require('./routes/reports/rep-servicio-intervalo');
const servicio_historico_Router = require('./routes/reports/rep-servicio-historico');
const niveles_servicio_Router = require('./routes/reports/rep-niveles_servicio');

// INVENTARIO
const inv_colas_Router = require('./routes/inventario/inv_colas');
const inv_supervisores_Router = require('./routes/inventario/inv_supervisores');
const inv_agentes_Router = require('./routes/inventario/inv_agentes');
const inv_clientes_Router = require('./routes/inventario/inv_clientes');
const inv_campanas_Router = require('./routes/inventario/inv_campanas');
const inv_servicios_Router = require('./routes/inventario/inv_servicios');
const inv_horarios_Router = require('./routes/inventario/inv_horarios');
const inv_auxiliares_Router = require('./routes/inventario/inv_auxiliares');
const inv_usuarios_Router = require('./routes/inventario/inv_usuarios')
const inv_agentesSupervisores_Router = require('./routes/inventario/inv_agentes_supervisores');
const inv_auxiliaresProductividad_Router = require('./routes/inventario/inv_auxiliares_productividad');

// CLASIF
const clasif_agentes_Router = require('./routes/clasif/clasif_agentes');
const clasif_colas_Router = require('./routes/clasif/clasif_colas');
const clasif_supervisores_Router = require('./routes/clasif/clasif_supervisores');

// CONFIG
const config_Router = require('./routes/reports/rep-config');


/********************************
 * ENGINE SETUP
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/********************************
 * ENGINE VIEW
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS
app.options('*', cors())
app.use(cors({
  origin: 'http://10.30.4.55'
}
));

// app.use(cors({
//   origin: '*'
// }
// ));

// ROUTES
app.use('/', index_Router);
app.use('/users', users_Router);

// REPORTS
app.use('/conexion-desconexion', conexion_desconexion_Router);
app.use('/detallado-auxiliares', detallado_auxiliares_Router);
app.use('/detalle-llamadas', detalle_llamadas_Router);
app.use('/operativo-detallado', operativo_detallado_Router);
app.use('/productividad', productividad_Router);
app.use('/saliente-intervalo', saliente_intervalo_Router);
app.use('/servicio-diario', servicio_diario_Router);
app.use('/servicio-historico', servicio_historico_Router);
app.use('/servicio-intervalo', servicio_intervalo_Router);
app.use('/niveles_servicio', niveles_servicio_Router);


// INVENTARIO
app.use('/inv_colas', inv_colas_Router);
app.use('/inv_supervisores', inv_supervisores_Router);
app.use('/inv_agentes', inv_agentes_Router);
app.use('/inv_clientes', inv_clientes_Router);
app.use('/inv_campanas', inv_campanas_Router);
app.use('/inv_servicios', inv_servicios_Router);
app.use('/inv_horarios', inv_horarios_Router);
app.use('/inv_auxiliares', inv_auxiliares_Router);
app.use('/inv_usuarios', inv_usuarios_Router);
app.use('/inv_agentes_supervisores', inv_agentesSupervisores_Router);
app.use('/inv_auxiliares_productividad', inv_auxiliaresProductividad_Router);

// CLASIF
app.use('/clasif_agentes', clasif_agentes_Router);
app.use('/clasif_supervisores', clasif_supervisores_Router);
app.use('/clasif_colas', clasif_colas_Router);

// CONFIG
app.use('/config', config_Router);

/************************************
 * ERROR MANAGMENT
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
