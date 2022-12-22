const { Router } = require("express");
const router = Router();

const {
  getCabGpon,
  getCabGponById,
  addCabGpon,
  updateCabGpon,
  deleteCabGpon,
  getTabTrafico,
  getTabTraficoById,
  addTabTrafico,
  updateTabTrafico,
  deleteTabTrafico,
  getPerfInterno,
  getPerfInternoById,
  addPerfInterno,
  updatePerfInterno,
  deletePerfInterno,
  getPerfIntOnt,
  getPerfIntOntById,
  addPerfIntOnt,
  updatePerfIntOnt,
  deletePerfIntOnt,
  //PERFIL VAS DISTINCT
  getPerfVAS,
  getPerfComercial,
  getPerfComercialById,
  addPerfComercial,
  updatePerfComercial,
  deletePerfComercial,
  //VLAN PERFIL(SERVICIO)
  getVlanPerfil,
  getVlanPerfilById,
  addVlanPerfil,
  updateVlanPerfil,
  deleteVlanPerfil,
  //VLAN GESTION
  getVlanGestion,
  getVlanGestionById,
  addVlanGestion,
  updateVlanGestion,
  deleteVlanGestion,
  //PTOONT(GEMPORT)
  getPtoOnt,
  getPtoOntById,
  addPtoOnt,
  updatePtoOnt,
  deletePtoOnt,
  //U2000
  getU2000,
  updateU2000,
  //AS400
  getAS400,
  updateAS400,
  //EAMIL
  getEmail,
  updateEmail,
  //BRAS
  getBras,
  getBrasById,
  addBras,
  updateBras,
  deleteBras,
  //BRAS INTERFACE
  getBrasInterface,
  getBrasInterfaceById,
  addBrasInterface,
  updateBrasInterface,
  deleteBrasInterface,
  //CAB-BRAS
  getCabBras,
  getCabBrasById,
  addCabBras,
  updateCabBras,
  deleteCabBras,
  //ONT
  getOnt,
  getOntById,
  addOnt,
  updateOnt,
  deleteOnt,
  //USUARIO
  getUsuario,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario,
  getAuth,
  //SECCIONES
  getSecciones,
  getSeccionesByNombre,
  getSeccionesAsignadas,
  asignaSecciones,
  desasignaSecciones,
  //U2000
  getTipoAlertas,
  updateTipoAlertas,
  getEmailAlertas,
  addEmailAlertas,
  deleteEmailAlertas,
  //ONT
  getFTP,
  getFTPById,
  addFTP,
  updateFTP,
  deleteFTP,
  getPool,
  getPoolById,
  addPool,
  deletePool,
  updatePool,
  //ORDENES
  getOrdenes,
  getOrdenProgById,
  getIPSById,
} = require("../controllers/controllerConfig");

router.get("/cabgpon", getCabGpon);
router.get("/cabgpon/:id", getCabGponById);
router.post("/cabgpon", addCabGpon);
router.put("/cabgpon", updateCabGpon);
router.delete("/cabgpon/:id", deleteCabGpon);
//TABLA TRAFICO
router.get("/tabtrafico", getTabTrafico);
router.get("/tabtrafico/:id", getTabTraficoById);
router.post("/tabtrafico", addTabTrafico);
router.put("/tabtrafico", updateTabTrafico);
router.delete("/tabtrafico/:id", deleteTabTrafico);
//PERFIL INTERNO
router.get("/perfinterno", getPerfInterno);
router.get("/perfinterno/:id", getPerfInternoById);
router.post("/perfinterno", addPerfInterno);
router.put("/perfinterno", updatePerfInterno);
router.delete("/perfinterno/:id", deletePerfInterno);
//PERFIL INTERNO ONT
router.get("/perfintont", getPerfIntOnt);
router.get("/perfintont/:id", getPerfIntOntById);
router.post("/perfintont", addPerfIntOnt);
router.put("/perfintont", updatePerfIntOnt);
router.delete("/perfintont/:id", deletePerfIntOnt);
//PERFIL VAS DISTINCT
router.get("/perfvas", getPerfVAS);
//PERFIL COMERCIAL
router.get("/perfcomercial", getPerfComercial);
router.get("/perfcomercial/:id", getPerfComercialById);
router.post("/perfcomercial", addPerfComercial);
router.put("/perfcomercial", updatePerfComercial);
router.delete("/perfcomercial/:id", deletePerfComercial);
//VLAN PERFIL (SERVICIO)
router.get("/vlanperfil", getVlanPerfil);
router.get("/vlanperfil/:id", getVlanPerfilById);
router.post("/vlanperfil", addVlanPerfil);
router.put("/vlanperfil", updateVlanPerfil);
router.delete("/vlanperfil/:id", deleteVlanPerfil);
//VLAN GESTIÓN
router.get("/vlangestion", getVlanGestion);
router.get("/vlangestion/:id", getVlanGestionById);
router.post("/vlangestion", addVlanGestion);
router.put("/vlangestion", updateVlanGestion);
router.delete("/vlangestion/:id", deleteVlanGestion);
//PTOONT(GEMPORT)
router.get("/ptoont", getPtoOnt);
router.get("/ptoont/:id", getPtoOntById);
router.post("/ptoont", addPtoOnt);
router.put("/ptoont", updatePtoOnt);
router.delete("/ptoont/:id", deletePtoOnt);
//U2000
router.get("/u2000", getU2000);
router.put("/u2000", updateU2000);
//AS400
router.get("/as400", getAS400);
router.put("/as400", updateAS400);
//EMAIL
router.get("/email", getEmail);
router.put("/email", updateEmail);
//BRAS
router.get("/bras", getBras);
router.get("/bras/:id", getBrasById);
router.post("/bras", addBras);
router.put("/bras", updateBras);
router.delete("/bras/:id", deleteBras);
//BRAS INTERFACE
router.get("/brasinterface", getBrasInterface);
router.get("/brasinterface/:id", getBrasInterfaceById);
router.post("/brasinterface", addBrasInterface);
router.put("/brasinterface", updateBrasInterface);
router.delete("/brasinterface/:id", deleteBrasInterface);
//CABECERA-BRAS
router.get("/cabbras", getCabBras);
router.get("/cabbras/:id", getCabBrasById);
router.post("/cabbras", addCabBras);
router.delete("/cabbras/:id", deleteCabBras);
//POOL
router.get("/pool", getPool);
router.get("/pool/:id", getPoolById);
router.post("/pool", addPool);
router.put("/pool", updatePool);
router.delete("/pool/:id", deletePool);
//ONT
router.get("/ont", getOnt);
router.get("/ont/:id", getOntById);
router.post("/ont", addOnt);
router.put("/ont", updateOnt);
router.delete("/ont/:id", deleteOnt);
//USUARIO
router.get("/usuario", getUsuario);
router.get("/usuario/:id", getUsuarioById);
router.post("/usuario", addUsuario);
router.put("/usuario", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);
router.post("/usuario/auth", getAuth);
//SECCIONES
router.get("/secciones", getSecciones);
router.get("/secciones/:nombre", getSeccionesByNombre);
router.get("/seccionesAsignadas/:pernombre", getSeccionesAsignadas);
router.post("/secciones", asignaSecciones);
router.put("/secciones", desasignaSecciones);
//ALERTAS
router.get("/tipoalertas", getTipoAlertas);
router.put("/tipoalertas", updateTipoAlertas);
router.get("/emailalertas", getEmailAlertas);
router.post("/emailalertas", addEmailAlertas);
router.delete("/emailalertas", deleteEmailAlertas);
//FTP
router.get("/ftp", getFTP);
router.get("/ftp/:id", getFTPById);
router.post("/ftp", addFTP);
router.put("/ftp", updateFTP);
router.delete("/ftp/:id", deleteFTP);
//ORDENES
router.post("/ordenes", getOrdenes);
router.get("/ordenprog/:id", getOrdenProgById);
router.get("/ordenips/:id", getIPSById);

module.exports = router;
