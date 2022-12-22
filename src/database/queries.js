/////CABECERA GPON/////////////
const getCabecerasGpon =
  "SELECT cabid id,cabnom,cabdesc,cabest FROM gpon.cabGpon ORDER BY cabnom";
const getCabecerasGponById =
  "SELECT cabid id,cabnom,cabdesc,cabest FROM gpon.cabGpon WHERE cabid=$1";
const addCabeceraGpon =
  "INSERT INTO gpon.cabGpon (cabnom,cabdesc,cabest) values ($1, $2, $3)";
const updateCabeceraGpon =
  "UPDATE gpon.cabGpon SET cabnom=$2, cabdesc=$3, cabest=$4 where cabid=$1";
const deleteCabeceraGpon = "DELETE FROM gpon.cabGpon where cabid=$1";

/////TABLA TRAFICO/////////////
const getTabTrafico =
  "SELECT tabid id,tabtx,tabrx FROM gpon.tablaTraf ORDER BY tabtx";
const getTabTraficoById =
  "SELECT tabid id,tabtx,tabrx FROM gpon.tablaTraf WHERE tabid=$1";
const addTabTrafico =
  "INSERT INTO gpon.tablaTraf (tabtx,tabrx) values ($1, $2)";
const updateTabTrafico =
  "UPDATE gpon.tablaTraf SET tabtx=$2, tabrx=$3 where tabid=$1";
const deleteTabTrafico = "DELETE FROM gpon.tablaTraf where tabid=$1";

/////PERFIL INTERNO/////////////
const getPerfInterno =
  "SELECT perfid id,perfnom,perfdesc,perfest FROM gpon.perfInterno ORDER BY perfnom";
const getPerfInternoById =
  "SELECT perfid id,perfnom,perfdesc,perfest FROM gpon.perfInterno WHERE perfid=$1";
const addPerfInterno =
  "INSERT INTO gpon.perfInterno (perfnom,perfdesc,perfest) values ($1, $2, $3)";
const updatePerfInterno =
  "UPDATE gpon.perfInterno SET perfnom=$2, perfdesc=$3, perfest=$4 where perfid=$1";
const deletePerfInterno = "DELETE FROM gpon.perfInterno where perfid=$1";

/////PERFIL INTERNO ONT/////////////
const getPerfIntOnt =
  "SELECT id,a.perfid,perfnom,a.ontid,ontmod,perfvas,perfdes FROM gpon.perfIntOnt a,gpon.perfinterno b,gpon.ont c WHERE a.perfid=b.perfid and a.ontid=c.ontid ORDER BY perfid";
const getPerfIntOntById =
  "SELECT id,a.perfid,perfnom,a.ontid,ontmod,perfvas,perfdes FROM gpon.perfIntOnt a,gpon.perfinterno b,gpon.ont c WHERE a.perfid=b.perfid and a.ontid=c.ontid and id=$1";
const addPerfIntOnt =
  "INSERT INTO gpon.perfIntOnt (perfid,ontid,perfvas,perfdes) values ($1, $2, $3, $4)";
const updatePerfIntOnt =
  "UPDATE gpon.perfIntOnt SET perfid=$2,ontid=$3,perfvas=$4, perfdes=$5 where id=$1";
const deletePerfIntOnt = "DELETE FROM gpon.perfIntOnt where id=$1";

/////PERFIL VAS/////////////
const getPerfVAS =
  "SELECT row_number() OVER (ORDER BY 1) AS id,* FROM (SELECT distinct(perfvas) FROM gpon.perfIntOnt) AS foo;";
/////PERFIL COMERCIAL/////////////
const getPerfComercial =
  "SELECT a.perfid id,b.perfid,a.perfnom,b.perfnom perfintnom,a.perfdesc,a.perfest,tabid,tabtx,tabrx FROM gpon.perfComercial a, gpon.perfinterno b,gpon.perfIntCom c,gpon.tablatraf d WHERE a.perfid=c.perfComercial_perfid and b.perfid=c.perfInterno_perfid and a.tablatraf_tabid=d.tabid ORDER BY a.perfnom";
const getPerfComercialById =
  "SELECT a.perfid id,b.perfid,a.perfnom,b.perfnom perfintnom,a.perfdesc,a.perfest,tabid,tabtx,tabrx FROM gpon.perfComercial a, gpon.perfinterno b,gpon.perfIntCom c,gpon.tablatraf d WHERE a.perfid=c.perfComercial_perfid and b.perfid=c.perfInterno_perfid and a.tablatraf_tabid=d.tabid and a.perfid=$1";
const addPerfComercial =
  "INSERT INTO gpon.perfComercial (perfnom,perfdesc,perfest,tablaTraf_tabid) values ($1, $2, $3, $4)";
const updatePerfComercial =
  "UPDATE gpon.perfComercial SET perfnom=$2, perfdesc=$3, perfest=$4, tablaTraf_tabid=$5 where perfid=$1";
const deletePerfComercial = "DELETE FROM gpon.perfComercial where perfid=$1";

/////VLAN PERFIL(SERVICIO)/////////////
const getVlanPerfil =
  "SELECT id,vlannum,cabnom,cabid,perfnom,perfid FROM gpon.vlanPerfil a,gpon.cabgpon b,gpon.perfinterno c WHERE a.cabgpon_cabid=b.cabid and a.perfinterno_perfid=c.perfid ORDER BY vlannum";
const getVlanPerfilById =
  "SELECT id,vlannum,cabnom,cabid,perfnom,perfid FROM gpon.vlanPerfil a,gpon.cabgpon b,gpon.perfinterno c WHERE a.cabgpon_cabid=b.cabid and a.perfinterno_perfid=c.perfid and a.id=$1";
const addVlanPerfil =
  "INSERT INTO gpon.vlanPerfil (vlannum,cabGpon_cabid,perfInterno_perfid) values ($1, $2, $3)";
const updateVlanPerfil = "UPDATE gpon.vlanPerfil SET vlannum=$2 where id=$1";
const deleteVlanPerfil = "DELETE FROM gpon.vlanPerfil where id=$1";
/////VLAN GESTION/////////////
const getVlanGestion =
  "SELECT cabGpon_cabid id,vlannum,cabnom,cabGpon_cabid FROM gpon.vlanGestion a,gpon.cabgpon b WHERE a.cabGpon_cabid=b.cabid ORDER BY vlannum";
const getVlanGestionById =
  "SELECT cabGpon_cabid id,vlannum,cabnom,cabGpon_cabid FROM gpon.vlanGestion WHERE a.cabGpon_cabid=b.cabid and cabGpon_cabid=$1";
const addVlanGestion =
  "INSERT INTO gpon.vlanGestion (vlannum,cabGpon_cabid) values ($1, $2)";
const updateVlanGestion =
  "UPDATE gpon.vlanGestion SET vlannum=$1 where cabGpon_cabid=$2";
const deleteVlanGestion = "DELETE FROM gpon.vlanGestion where cabGpon_cabid=$1";
/////PTOONT (GEMPORT)/////////////
const getPtoOnt =
  "SELECT id,gemport,vlannum,perfinterno_perfid,perfnom FROM gpon.PtoOnt a,gpon.perfinterno b WHERE a.perfinterno_perfid=b.perfid ORDER BY gemport";
const getPtoOntById =
  "SELECT id,gemport,vlannum,perfinterno_perfid,perfnom FROM gpon.PtoOnt a,gpon.perfinterno b WHERE a.perfinterno_perfid=b.perfid and perfinterno_perfid=$1";
const addPtoOnt =
  "INSERT INTO gpon.PtoOnt (gemport,vlannum,perfinterno_perfid) values ($1, $2, $3)";
const updatePtoOnt =
  "UPDATE gpon.PtoOnt SET gemport=$2,vlannum=$3,perfinterno_perfid=$4 where id=$1";
const deletePtoOnt = "DELETE FROM gpon.PtoOnt where id=$1";
/////U2000/////////////
const getU2000 =
  "SELECT u2musu,u2mcla,u2mccla,u2mip,u2mpto,u2murl FROM gpon.U2000";
const updateU2000 =
  "UPDATE gpon.U2000 SET u2musu=$1,u2mcla=$2,u2mccla=$3,u2mip=$4,u2mpto=$5,u2murl=$6";
/////AS400/////////////
const getAS400 = "SELECT as4ip,as4bd,as4usu,as4cla FROM gpon.AS400";
const updateAS400 =
  "UPDATE gpon.AS400 SET as4ip=$1,as4bd=$2,as4usu=$3,as4cla=$4";
/////EMAIL/////////////
const getEmail =
  "SELECT emahos,emafro,emapue,emattl,emaaut,emausr,emapas,emassl FROM gpon.emailConfig";
const updateEmail =
  "UPDATE gpon.emailConfig SET emahos=$1,emafro=$2,emapue=$3,emattl=$4,emaaut=$5,emausr=$6,emapas=$7,emassl=$8";
/////BRAS/////////////
const getBras =
  "SELECT braid id,branom,braip,brausu,bracla FROM gpon.Bras ORDER BY branom";
const getBrasById =
  "SELECT braid id,branom,braip,brausu,bracla FROM gpon.Bras WHERE braid=$1";
const addBras =
  "INSERT INTO gpon.Bras (branom,braip,brausu,bracla) values ($1, $2, $3, $4)";
const updateBras =
  "UPDATE gpon.Bras SET branom=$2, braip=$3, brausu=$4, bracla=$5 where braid=$1";
const deleteBras = "DELETE FROM gpon.Bras where braid=$1";
/////BRAS INTERFACE/////////////
const getBrasInterface =
  "SELECT serie id,interface interfaz,bras_braid,branom FROM gpon.brainterf a,gpon.bras b WHERE a.bras_braid=b.braid ORDER BY interface";
const getBrasInterfaceById =
  "SELECT serie id,interface interfaz,bras_braid FROM gpon.brainterf a,gpon.bras b WHERE a.bras_braid=b.braid";
const addBrasInterface =
  "INSERT INTO gpon.BraInterf (interface,bras_braid) values ($1, $2)";
const updateBrasInterface =
  "UPDATE gpon.BraInterf SET interface=$2, bras_braid=$3 where serie=$1";
const deleteBrasInterface = "DELETE FROM gpon.BraInterf where serie=$1";
/////CABECERA-BRAS/////////////
const getCabBras =
  "SELECT cabgpon_cabid id,brainterf_serie,cabnom,interface internom FROM gpon.CabBras a,gpon.cabgpon b,gpon.brainterf c WHERE a.cabgpon_cabid=b.cabid and a.brainterf_serie=c.serie ORDER BY cabgpon_cabid";
const getCabBrasById =
  "SELECT cabgpon_cabid id,brainterf_serie,cabnom,interface internom FROM gpon.CabBras a,gpon.cabgpon b,gpon.brasinterf c WHERE a.cabgpon_cabid=b.cabid and a.brainterf_serie=c.serie and cabgpon_cabid=$1";
const addCabBras =
  "INSERT INTO gpon.CabBras (cabgpon_cabid,brainterf_serie) values ($1, $2)";
const deleteCabBras = "DELETE FROM gpon.CabBras where cabgpon_cabid=$1";
/////POOL-IPS/////////////
const getPool =
  "SELECT polid id,polipdesde,poliphasta,polmsk,polgwy,polact FROM gpon.pool ORDER BY polq1d,polq2d,polq3d,polq4d";
const getPoolById =
  "SELECT polid id,polipdesde,poliphasta,polmsk,polgwy,polact FROM gpon.pool WHERE polid=$1";
const addPool =
  "INSERT INTO gpon.Pool (polipdesde,polq1d,polq2d,polq3d,polq4d,poliphasta,polq1h,polq2h,polq3h,polq4h,polmsk,polq1m,polq2m,polq3m,polq4m,polgwy,polq1g,polq2g,polq3g,polq4g,polact) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)";
const updatePool =
  "UPDATE gpon.pool set polipdesde=$2,polq1d=$3,polq2d=$4,polq3d=$5,polq4d=$6,poliphasta=$7,polq1h=$8,polq2h=$9,polq3h=$10,polq4h=$11,polmsk=$12,polq1m=$13,polq2m=$14,polq3m=$15,polq4m=$16,polgwy=$17,polq1g=$18,polq2g=$19,polq3g=$20,polq4g=$21,polact=$22 WHERE polid=$1";
const deletePool = "DELETE FROM gpon.Pool where polid=$1";
/////ONT/////////////
const getOnt =
  "SELECT ontid id,ontmar,ontmod,ontdes FROM gpon.Ont ORDER BY ontid";
const getOntById =
  "SELECT ontid id,ontmar,ontmod,ontdes FROM gpon.Ont WHERE ontid=$1";
const addOnt =
  "INSERT INTO gpon.Ont (ontmar,ontmod,ontdes) values ($1, $2, $3)";
const updateOnt =
  "UPDATE gpon.Ont SET ontmar=$2, ontmod=$3, ontdes=$4 where ontid=$1";
const deleteOnt = "DELETE FROM gpon.Ont where ontid=$1";
/////USUARIOS/////////////
const getUsuario =
  "SELECT usuid,usunom,usucla,usuema,perfUsuario_perid FROM gpon.Usuario ORDER BY usuid";
const getUsuarioById =
  "SELECT usuid,usunom,usucla,usuema,perfUsuario_perid FROM gpon.Usuario WHERE usuid=$1";
const addUsuario =
  "INSERT INTO gpon.Usuario (usunom,usucla,usuema,perfUsuario_perid) values ($1, $2, $3, $4)";
const updateUsuario =
  "UPDATE gpon.Usuario SET usunom=$2,usucla=$3,usuema=$4,perfUsuario_perid=$5 where usuid=$1";
const deleteUsuario = "DELETE FROM gpon.Usuario where usuid=$1";
const getAuth =
  "SELECT usuid,usunom,usucla,usuema,perfUsuario_perid accessToken FROM gpon.Usuario WHERE usunom=$1 and usucla=$2";
/////SECCIONES/////////////
const getSecciones =
  "SELECT secid,secnom,secdesc,secaccion FROM gpon.Secciones ORDER BY secnom";
const getSeccionesById =
  "SELECT secid,secnom,secdesc,secaccion FROM gpon.Secciones WHERE secid=$1 ORDER BY secnom";
const getSeccionesByNombre =
  "SELECT secid,secnom,secdesc,secaccion FROM gpon.Secciones WHERE secnom=$1";
const getSeccionesAsignadas = `SELECT secid,secnom,secdesc,secaccion FROM gpon.Secciones a,gpon.perfAcceso b,gpon.perfUsuario c 
   where a.secid=b.secciones_secid and b.perfUsuario_perid=c.perid and c.pernom=$1`;
const asignaSecciones = `INSERT INTO gpon.perfAcceso (perfUsuario_perid, secciones_secid) values ($1, $2)`;
const desasignaSecciones = `DELETE FROM gpon.perfAcceso WHERE perfUsuario_perid=$1`;
/////ALERTAS/////////////
const getTipoAlertas = "SELECT tiperr,tippro FROM gpon.tipoAlerta";
const updateTipoAlertas = "UPDATE gpon.tipoAlerta SET tiperr=$1,tippro=$2";
const getEmailAlertas = "SELECT emadir FROM gpon.Emails";
const addEmailAlertas = "INSERT INTO gpon.Emails values ($1)";
const deleteEmailAlertas = "DELETE FROM gpon.Emails where emadir=$1";
/////FTP/////////////
const getFTP =
  "SELECT ftpid,ftpip,ftppue,ftptip,ftpusu,ftpcla,ftpdir FROM gpon.FTP ORDER BY ftpid";
const getFTPById =
  "SELECT ftpid,ftpip,ftppue,ftptip,ftpusu,ftpcla,ftpdir FROM gpon.FTP WHERE ftpid=$1";
const addFTP =
  "INSERT INTO gpon.FTP (ftpip,ftppue,ftptip,ftpusu,ftpcla,ftpdir) values ($1, $2, $3, $4, $5, $6)";
const updateFTP =
  "UPDATE gpon.FTP SET ftpip=$2,ftppue=$3,ftptip=$4,ftpusu=$5,ftpcla=$6,ftpdir=$7 where ftpid=$1";
const deleteFTP = "DELETE FROM gpon.FTP where ftpid=$1";
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////ORDENES////////////////////////////////////
// const getOrdenes = `
// select a.aprtelid id,a.aprtelid aprtelid,a.ataccion ataccion,a.atfecing atfecing,a.atfecprg atfecprg,a.atestado atestado,
// trim(a.atordid) atordid,a.atinsid atinsid,trim(a.atprfpue) atprfpue,
// a.attipapr attipapr,trim(a.attrama) attrama,
// a.atcatego atcatego,b.apgcab apgcab,trim(b.apgframe) apgframe,b.apgframn apgframn,b.apgslot apgslot,b.apgpto apgpto
// from gpon.aprtel a,gpon.aprgpn b
// where a.aprtelid=b.aprgpnid and a.atfecing>=to_timestamp($1,'DD/MM/YYYY HH24:MI:SS')
// and a.atfecing<=to_timestamp($2,'DD/MM/YYYY HH24:MI:SS')
// order by a.atfecing desc limit $3 offset $4`;
var getOrdenes = `
select id,aprtelid,ataccion,to_char(atfecing,'YYYY/MM/DD HH24:MI:SS') atfecing,to_char(atfecprg,'YYYY/MM/DD HH24:MI:SS') atfecprg,atestado, 
atordid,atinsid,atprfpue,
attipapr,attrama,
atcatego,apgcab,apgframe,apgframn,apgslot,apgpto,fsp 
from gpon.viewOrdenes 
where atfecing>=to_timestamp($1,'DD/MM/YYYY HH24:MI:SS') 
and atfecing<=to_timestamp($2,'DD/MM/YYYY HH24:MI:SS') 
order by atfecing desc limit $3 offset $4`;
///////ORDENES PROGRAMADAS BY ID
var getOrdenProgById = `
select aprtel_aprtelid id,ordid ordid,aprtel_aprtelid aprtel_aprtelid,to_char(ordfec,'YYYY/MM/DD HH24:MI:SS') ordfec, 
ordest ordest,ordobs ordobs,ordaccion ordaccion,to_char(ordfecing,'YYYY/MM/DD HH24:MI:SS') ordfecing,
ordinstid ordinstid,trim(ordtrama) ordtrama,ordcab ordcab,ordframe ordframe,
ordslot ordslot,ordpto ordpto,trim(ordipges) ordipges,trim(ordmask) ordmask,
ordgtw ordgtw,trim(ordontser) ordontser,ordontid ordontid,ordnomcli ordnomcli,ordtelcli ordtelcli,
orddircli orddircli,trim(ordusuing) ordusuing,ordobs ordobs,
error_errcod error_errcod,aprgpn_apghisid aprgpn_apghisid,
ordserial ordserial,trim(errdesc) errdesc 
from gpon.ordproceso a,gpon.error b
where a.error_errcod=b.errcod and aprtel_aprtelid=$1`;
const getIPSById =
  "SELECT polip FROM gpon.ip WHERE polest='U' and insid=$1 order by 1";
module.exports = {
  getCabecerasGpon,
  getCabecerasGponById,
  addCabeceraGpon,
  updateCabeceraGpon,
  deleteCabeceraGpon,
  //TABLA TRAFICO
  getTabTrafico,
  getTabTraficoById,
  addTabTrafico,
  updateTabTrafico,
  deleteTabTrafico,
  //PERFIL INTERNO
  getPerfInterno,
  getPerfInternoById,
  addPerfInterno,
  updatePerfInterno,
  deletePerfInterno,
  //PERFIL INTERNO ONT
  getPerfIntOnt,
  getPerfIntOntById,
  addPerfIntOnt,
  updatePerfIntOnt,
  deletePerfIntOnt,
  //PERFIL VAS DISTINCT
  getPerfVAS,
  //PERFIL COMERCIAL
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
  //GEMPORT
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
  //EMAIL
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
  //CABECERA-BRAS
  getCabBras,
  getCabBrasById,
  addCabBras,
  deleteCabBras,
  //POOL
  getPool,
  getPoolById,
  addPool,
  updatePool,
  deletePool,
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
  getSeccionesById,
  getSeccionesByNombre,
  getSeccionesAsignadas,
  asignaSecciones,
  desasignaSecciones,
  //EMAIL
  getTipoAlertas,
  updateTipoAlertas,
  getEmailAlertas,
  addEmailAlertas,
  deleteEmailAlertas,
  //FTP
  getFTP,
  getFTPById,
  addFTP,
  updateFTP,
  deleteFTP,
  //ORDENES
  getOrdenes,
  getOrdenProgById,
  getIPSById,
};
