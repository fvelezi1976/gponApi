const { Pool } = require("pg");
const queries = require("../database/queries");
const pool = new Pool({
  host: "localhost",
  user: "gponadmin",
  password: "gpon",
  database: "gpondb",
  port: 5432,
});

////////CABECERA GPON
const getCabGpon = async (req, res) => {
  try {
    const response = await pool.query(queries.getCabecerasGpon);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getCabGponById = async (req, res) => {
  try {
    const response = await pool.query(queries.getCabecerasGponById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addCabGpon = async (req, res) => {
  try {
    const { cabnom, cabdesc, cabest } = req.body;

    const response = await pool.query(queries.addCabeceraGpon, [
      cabnom,
      cabdesc,
      cabest,
    ]);
    console.log(response);
    res.json({
      message: "Cabecera agregada exitosamente",
      body: {
        user: { cabnom, cabdesc, cabest },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateCabGpon = async (req, res) => {
  try {
    const { cabid, cabnom, cabdesc, cabest } = req.body;

    const response = await pool.query(queries.updateCabeceraGpon, [
      cabid,
      cabnom,
      cabdesc,
      cabest,
    ]);
    res.status(200).json({
      message: "Cabecera Gpon actualizada",
      body: {
        user: { cabid, cabnom, cabdesc, cabest },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteCabGpon = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteCabeceraGpon, [id]);
    res.status(200).json({
      message: "Cabecera eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////TABLA TRAFICO/////////
const getTabTrafico = async (req, res) => {
  try {
    const response = await pool.query(queries.getTabTrafico);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getTabTraficoById = async (req, res) => {
  try {
    const response = await pool.query(queries.getTabTraficoById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addTabTrafico = async (req, res) => {
  try {
    const { tabtx, tabrx } = req.body;

    const response = await pool.query(queries.addTabTrafico, [tabtx, tabrx]);
    console.log(response);
    res.json({
      message: "Cabecera agregada exitosamente",
      body: {
        user: { tabtx, tabrx },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateTabTrafico = async (req, res) => {
  try {
    const { tabid, tabtx, tabrx } = req.body;

    const response = await pool.query(queries.updateTabTrafico, [
      tabid,
      tabtx,
      tabrx,
    ]);
    res.status(200).json({
      message: "Cabecera Gpon actualizada",
      body: {
        user: { tabid, tabtx, tabrx },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteTabTrafico = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteTabTrafico, [id]);
    res.status(200).json({
      message: "Tabla de tráfico eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////PERFIL INTERNO/////////
const getPerfInterno = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfInterno);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getPerfInternoById = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfInternoById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addPerfInterno = async (req, res) => {
  try {
    const { perfnom, perfdesc, perfest } = req.body;

    const response = await pool.query(queries.addPerfInterno, [
      perfnom,
      perfdesc,
      perfest,
    ]);
    console.log(response);
    res.json({
      message: "Cabecera agregada exitosamente",
      body: {
        user: { perfnom, perfdesc, perfest },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updatePerfInterno = async (req, res) => {
  try {
    const { perfid, perfnom, perfdesc, perfest } = req.body;

    const response = await pool.query(queries.updatePerfInterno, [
      perfid,
      perfnom,
      perfdesc,
      perfest,
    ]);
    res.status(200).json({
      message: "Perfil Interno actualizada",
      body: {
        user: { perfid, perfnom, perfdesc, perfest },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deletePerfInterno = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deletePerfInterno, [id]);
    res.status(200).json({
      message: "Perfil Interno eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////PERFIL INTERNO ONT/////////
const getPerfIntOnt = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfIntOnt);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getPerfIntOntById = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfIntOntById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addPerfIntOnt = async (req, res) => {
  try {
    const { perfid, ontid, perfvas, perfdes } = req.body;

    const response = await pool.query(queries.addPerfIntOnt, [
      perfid,
      ontid,
      perfvas,
      perfdes,
    ]);
    console.log(response);
    res.json({
      message: "Cabecera agregada exitosamente",
      body: {
        user: { perfid, ontid, perfvas, perfdes },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updatePerfIntOnt = async (req, res) => {
  try {
    const { id, perfid, ontid, perfvas, perfdes } = req.body;

    const response = await pool.query(queries.updatePerfIntOnt, [
      id,
      perfid,
      ontid,
      perfvas,
      perfdes,
    ]);
    res.status(200).json({
      message: "Perfil Interno actualizada",
      body: {
        user: { id, perfid, ontid, perfvas, perfdes },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deletePerfIntOnt = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deletePerfIntOnt, [id]);
    res.status(200).json({
      message: "Perfil Interno eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////PERFIL INTERNO ONT/////////
const getPerfVAS = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfVAS);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////PERFIL COMERCIAL/////////
const getPerfComercial = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfComercial);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getPerfComercialById = async (req, res) => {
  try {
    const response = await pool.query(queries.getPerfComercialById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addPerfComercial = async (req, res) => {
  try {
    const { perfnom, perfdesc, perfest, tablatraf_tabid } = req.body;

    const response = await pool.query(queries.addPerfComercial, [
      perfnom,
      perfdesc,
      perfest,
      tablatraf_tabid,
    ]);
    console.log(response);
    res.json({
      message: "Perfil Comercial agregado exitosamente",
      body: {
        user: { perfnom, perfdesc, perfest, tablatraf_tabid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updatePerfComercial = async (req, res) => {
  try {
    const { perfid, perfnom, perfdesc, perfest, tablatraf_tabid } = req.body;

    const response = await pool.query(queries.updatePerfComercial, [
      perfid,
      perfnom,
      perfdesc,
      perfest,
      tablatraf_tabid,
    ]);
    res.status(200).json({
      message: "Cabecera Gpon actualizada",
      body: {
        user: { perfid, perfnom, perfdesc, perfest, tablatraf_tabid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deletePerfComercial = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deletePerfComercial, [id]);
    res.status(200).json({
      message: "Tabla de tráfico eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////VLAN PERFIL(COMERCIAL)/////////
const getVlanPerfil = async (req, res) => {
  try {
    const response = await pool.query(queries.getVlanPerfil);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getVlanPerfilById = async (req, res) => {
  try {
    const { vlannum, cabgpon_cabid, perfinterno_perfid } = req.body;
    const response = await pool.query(queries.getVlanPerfilById, [
      cabgpon_cabid,
      perfinterno_perfid,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addVlanPerfil = async (req, res) => {
  try {
    const { vlannum, cabgpon_cabid, perfinterno_perfid } = req.body;

    const response = await pool.query(queries.addVlanPerfil, [
      vlannum,
      cabgpon_cabid,
      perfinterno_perfid,
    ]);
    console.log(response);
    res.json({
      message: "Perfil Comercial agregado exitosamente",
      body: {
        user: { vlannum, cabgpon_cabid, perfinterno_perfid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateVlanPerfil = async (req, res) => {
  try {
    const { id, vlannum, cabgpon_cabid, perfinterno_perfid } = req.body;

    const response = await pool.query(queries.updateVlanPerfil, [id, vlannum]);
    res.status(200).json({
      message: "Cabecera Gpon actualizada",
      body: { vlannum, cabgpon_cabid, perfinterno_perfid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteVlanPerfil = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteVlanPerfil, [id]);
    res.status(200).json({
      message: "VLAn de Servicio eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////VLAN GESTION/////////
const getVlanGestion = async (req, res) => {
  try {
    const response = await pool.query(queries.getVlanGestion);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getVlanGestionById = async (req, res) => {
  try {
    const response = await pool.query(queries.getVlanGestionById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addVlanGestion = async (req, res) => {
  try {
    const { vlannum, cabgpon_cabid } = req.body;

    const response = await pool.query(queries.addVlanGestion, [
      vlannum,
      cabgpon_cabid,
    ]);
    console.log(response);
    res.json({
      message: "VLAn de Gestión agregada exitosamente",
      body: {
        user: { vlannum, cabgpon_cabid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateVlanGestion = async (req, res) => {
  try {
    const { vlannum, cabgpon_cabid } = req.body;

    const response = await pool.query(queries.updateVlanGestion, [
      vlannum,
      cabgpon_cabid,
    ]);
    res.status(200).json({
      message: "VLAn de Gestión actualizada",
      body: { vlannum, cabgpon_cabid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteVlanGestion = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteVlanGestion, [id]);
    res.status(200).json({
      message: "VLAn de Gestión eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////PTOONT (GEMPORT)/////////////
const getPtoOnt = async (req, res) => {
  try {
    const response = await pool.query(queries.getPtoOnt);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getPtoOntById = async (req, res) => {
  try {
    const response = await pool.query(queries.getPtoOntById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addPtoOnt = async (req, res) => {
  try {
    const { gemport, vlannum, perfinterno_perfid } = req.body;

    const response = await pool.query(queries.addPtoOnt, [
      gemport,
      vlannum,
      perfinterno_perfid,
    ]);
    console.log(response);
    res.json({
      message: "Gemport agregado exitosamente",
      body: {
        user: { gemport, vlannum, perfinterno_perfid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updatePtoOnt = async (req, res) => {
  try {
    const { id, gemport, vlannum, perfinterno_perfid } = req.body;

    const response = await pool.query(queries.updatePtoOnt, [
      id,
      gemport,
      vlannum,
      perfinterno_perfid,
    ]);
    res.status(200).json({
      message: "Gemport actualizado",
      body: { id, gemport, vlannum, perfinterno_perfid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deletePtoOnt = async (req, res) => {
  try {
    //const { gemport, perfinterno_perfid } = req.body;
    const id = req.params.id;
    const response = await pool.query(queries.deletePtoOnt, [id]);
    res.status(200).json({
      message: "Gemport eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////U2000/////////////
const getU2000 = async (req, res) => {
  try {
    const response = await pool.query(queries.getU2000);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateU2000 = async (req, res) => {
  try {
    const { u2musu, u2mcla, u2mccla, u2mip, u2mpto, u2murl } = req.body;

    const response = await pool.query(queries.updateU2000, [
      u2musu,
      u2mcla,
      u2mccla,
      u2mip,
      u2mpto,
      u2murl,
    ]);
    res.status(200).json({
      message: "Parámetros de conexión actualizados",
      body: { u2musu, u2mcla, u2mccla, u2mip, u2mpto, u2murl },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////AS400/////////////
const getAS400 = async (req, res) => {
  try {
    const response = await pool.query(queries.getAS400);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateAS400 = async (req, res) => {
  try {
    const { as4ip, as4bd, as4usu, as4cla } = req.body;

    const response = await pool.query(queries.updateAS400, [
      as4ip,
      as4bd,
      as4usu,
      as4cla,
    ]);
    res.status(200).json({
      message: "Parámetros de conexión actualizados",
      body: { as4ip, as4bd, as4usu, as4cla },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////EMAIL/////////////
const getEmail = async (req, res) => {
  try {
    const response = await pool.query(queries.getEmail);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateEmail = async (req, res) => {
  try {
    const { emahos, emafro, emapue, emattl, emaaut, emausr, emapas, emassl } =
      req.body;

    const response = await pool.query(queries.updateEmail, [
      emahos,
      emafro,
      emapue,
      emattl,
      emaaut,
      emausr,
      emapas,
      emassl,
    ]);
    res.status(200).json({
      message: "Gemport actualizado",
      body: { emahos, emafro, emapue, emattl, emaaut, emausr, emapas, emassl },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////BRAS/////////////
const getBras = async (req, res) => {
  try {
    const response = await pool.query(queries.getBras);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getBrasById = async (req, res) => {
  try {
    const response = await pool.query(queries.getBrasById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addBras = async (req, res) => {
  try {
    const { branom, braip, brausu, bracla } = req.body;

    const response = await pool.query(queries.addBras, [
      branom,
      braip,
      brausu,
      bracla,
    ]);
    console.log(response);
    res.json({
      message: "BRAS agregado exitosamente",
      body: {
        user: { branom, braip, brausu, bracla },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateBras = async (req, res) => {
  try {
    const { braid, branom, braip, brausu, bracla } = req.body;

    const response = await pool.query(queries.updateBras, [
      braid,
      branom,
      braip,
      brausu,
      bracla,
    ]);
    res.status(200).json({
      message: "BRAS actualizado",
      body: { braid, branom, braip, brausu, bracla },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteBras = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteBras, [id]);
    res.status(200).json({
      message: "BRAS eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////BRAS-INTERFACE/////////////
const getBrasInterface = async (req, res) => {
  try {
    const response = await pool.query(queries.getBrasInterface);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getBrasInterfaceById = async (req, res) => {
  try {
    const response = await pool.query(queries.getBrasInterfaceById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addBrasInterface = async (req, res) => {
  try {
    const { interface, bras_braid } = req.body;

    const response = await pool.query(queries.addBrasInterface, [
      interface,
      bras_braid,
    ]);
    console.log(response);
    res.json({
      message: "BRAS INTERFACE agregado exitosamente",
      body: {
        user: { interface, bras_braid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateBrasInterface = async (req, res) => {
  try {
    const { id, interface, bras_braid } = req.body;

    const response = await pool.query(queries.updateBrasInterface, [
      id,
      interface,
      bras_braid,
    ]);
    res.status(200).json({
      message: "BRAS INTERFACE actualizado",
      body: { id, interface, bras_braid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteBrasInterface = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteBrasInterface, [id]);
    res.status(200).json({
      message: "BRAS INTERFACE eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////CABECERA-BRAS/////////////
const getCabBras = async (req, res) => {
  try {
    const response = await pool.query(queries.getCabBras);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getCabBrasById = async (req, res) => {
  try {
    const response = await pool.query(queries.getCabBrasById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addCabBras = async (req, res) => {
  try {
    const { cabgpon_cabid, brainterf_serie } = req.body;

    const response = await pool.query(queries.addCabBras, [
      cabgpon_cabid,
      brainterf_serie,
    ]);
    console.log(response);
    res.json({
      message: "BRAS agregado exitosamente",
      body: {
        user: { cabgpon_cabid, brainterf_serie },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteCabBras = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteCabBras, [id]);
    res.status(200).json({
      message: "BRAS eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////POOL IPS/////////////
const getPool = async (req, res) => {
  try {
    const response = await pool.query(queries.getPool);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getPoolById = async (req, res) => {
  try {
    const response = await pool.query(queries.getPoolById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

function obtieneCuartosIP(ip) {
  let aux = ip.substring(0, ip.indexOf("."));
  ip = ip.substring(ip.indexOf(".") + 1);
  q1d = aux;
  aux = ip.substring(0, ip.indexOf("."));
  ip = ip.substring(ip.indexOf(".") + 1);
  q2d = aux;
  aux = ip.substring(0, ip.indexOf("."));
  ip = ip.substring(ip.indexOf(".") + 1);
  q3d = aux;
  q4d = ip.trim();
  const cuartos = [q1d, q2d, q3d, q4d];
  return cuartos;
}

const addPool = async (req, res) => {
  try {
    const { polipdesde, poliphasta, polmsk, polgwy, polact } = req.body;

    const cuartosDesde = obtieneCuartosIP(polipdesde);
    const cuartosHasta = obtieneCuartosIP(poliphasta);
    const cuartosMascara = obtieneCuartosIP(polmsk);
    const cuartosGateway = obtieneCuartosIP(polgwy);

    console.log(
      "IP: ",
      cuartosDesde,
      cuartosHasta,
      cuartosMascara,
      cuartosGateway
    );

    //aux =

    const response = await pool.query(queries.addPool, [
      polipdesde,
      cuartosDesde[0],
      cuartosDesde[1],
      cuartosDesde[2],
      cuartosDesde[3],
      poliphasta,
      cuartosHasta[0],
      cuartosHasta[1],
      cuartosHasta[2],
      cuartosHasta[3],
      polmsk,
      cuartosMascara[0],
      cuartosMascara[1],
      cuartosMascara[2],
      cuartosMascara[3],
      polgwy,
      cuartosGateway[0],
      cuartosGateway[1],
      cuartosGateway[2],
      cuartosGateway[3],
      polact,
    ]);
    console.log(response);
    res.json({
      message: "Rango agregado exitosamente",
      body: {
        user: { id, polipdesde, poliphasta, polmsk, polgwy },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updatePool = async (req, res) => {
  try {
    console.log("ENTRO UPDATE POOL");
    const { id, polipdesde, poliphasta, polmsk, polgwy, polact } = req.body;

    const cuartosDesde = obtieneCuartosIP(polipdesde);
    const cuartosHasta = obtieneCuartosIP(poliphasta);
    const cuartosMascara = obtieneCuartosIP(polmsk);
    const cuartosGateway = obtieneCuartosIP(polgwy);

    const response = await pool.query(queries.updatePool, [
      id,
      polipdesde,
      cuartosDesde[0],
      cuartosDesde[1],
      cuartosDesde[2],
      cuartosDesde[3],
      poliphasta,
      cuartosHasta[0],
      cuartosHasta[1],
      cuartosHasta[2],
      cuartosHasta[3],
      polmsk,
      cuartosMascara[0],
      cuartosMascara[1],
      cuartosMascara[2],
      cuartosMascara[3],
      polgwy,
      cuartosGateway[0],
      cuartosGateway[1],
      cuartosGateway[2],
      cuartosGateway[3],
      polact,
    ]);
    res.status(200).json({
      message: "Rango actualizado exitosamente",
      body: { id, polipdesde, poliphasta, polmsk, polgwy, polact },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deletePool = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deletePool, [id]);
    res.status(200).json({
      message: "POOL eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////ONT/////////////
const getOnt = async (req, res) => {
  try {
    const response = await pool.query(queries.getOnt);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getOntById = async (req, res) => {
  try {
    const response = await pool.query(queries.getOntById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addOnt = async (req, res) => {
  try {
    const { ontmar, ontmod, ontdes } = req.body;

    const response = await pool.query(queries.addOnt, [ontmar, ontmod, ontdes]);
    console.log(response);
    res.json({
      message: "ONT agregado exitosamente",
      body: {
        user: { ontmar, ontmod, ontdes },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateOnt = async (req, res) => {
  try {
    const { ontid, ontmar, ontmod, ontdes } = req.body;

    const response = await pool.query(queries.updateOnt, [
      ontid,
      ontmar,
      ontmod,
      ontdes,
    ]);
    res.status(200).json({
      message: "ONT actualizada",
      body: { ontid, ontmar, ontmod, ontdes },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteOnt = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteOnt, [id]);
    res.status(200).json({
      message: "ONT eliminada",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////USUARIOS/////////////
const getUsuario = async (req, res) => {
  try {
    const response = await pool.query(queries.getUsuario);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const response = await pool.query(queries.getUsuarioById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addUsuario = async (req, res) => {
  try {
    const { usunom, usucla, usuema, perfusuario_perid } = req.body;

    const response = await pool.query(queries.addUsuario, [
      usunom,
      usucla,
      usuema,
      perfusuario_perid,
    ]);
    console.log(response);
    res.json({
      message: "Usuario agregado exitosamente",
      body: {
        user: { usunom, usucla, usuema, perfusuario_perid },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { usuid, usunom, usucla, usuema, perfusuario_perid } = req.body;

    const response = await pool.query(queries.updateUsuario, [
      usuid,
      usunom,
      usucla,
      usuema,
      perfusuario_perid,
    ]);
    res.status(200).json({
      message: "Usuario actualizado",
      body: { usuid, usunom, usucla, usuema, perfusuario_perid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteUsuario, [id]);
    res.status(200).json({
      message: "Usuario eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getAuth = async (req, res) => {
  try {
    const { usunom, usucla } = req.body;

    const response = await pool.query(queries.getAuth, [usunom, usucla]);
    console.log(response);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////SECCIONES/////////////
const getSecciones = async (req, res) => {
  try {
    const response = await pool.query(queries.getSecciones);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getSeccionesByNombre = async (req, res) => {
  try {
    const response = await pool.query(queries.getSeccionesByNombre, [
      req.params.nombre,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getSeccionesAsignadas = async (req, res) => {
  try {
    const response = await pool.query(queries.getSeccionesAsignadas, [
      req.params.pernombre,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const asignaSecciones = async (req, res) => {
  try {
    const { perfusuario_perid, secciones_secid } = req.body;

    const response = await pool.query(queries.asignaSecciones, [
      perfusuario_perid,
      secciones_secid,
    ]);
    res.status(200).json({
      message: "Usuario actualizado",
      body: { perfusuario_perid, secciones_secid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const desasignaSecciones = async (req, res) => {
  try {
    const { perfusuario_perid } = req.body;

    const response = await pool.query(queries.desasignaSecciones, [
      perfusuario_perid,
    ]);
    res.status(200).json({
      message: "Usuario actualizado",
      body: { perfusuario_perid },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

/////TIPO ALERTAS/////////////
const getTipoAlertas = async (req, res) => {
  try {
    const response = await pool.query(queries.getTipoAlertas);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateTipoAlertas = async (req, res) => {
  try {
    const { tiperr, tippro } = req.body;

    const response = await pool.query(queries.updateTipoAlertas, [
      tiperr,
      tippro,
    ]);
    res.status(200).json({
      message: "Gemport actualizado",
      body: { tiperr, tippro },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
const getEmailAlertas = async (req, res) => {
  try {
    const response = await pool.query(queries.getEmailAlertas);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
const addEmailAlertas = async (req, res) => {
  try {
    const { emadir } = req.body;

    const response = await pool.query(queries.addEmailAlertas, [emadir]);
    console.log(response);
    res.json({
      message: "Usuario agregado exitosamente",
      body: {
        emadir,
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
const deleteEmailAlertas = async (req, res) => {
  try {
    const { emadir } = req.body;
    const response = await pool.query(queries.deleteEmailAlertas, [emadir]);
    res.status(200).json({
      message: "Email eliminado",
      body: { emadir },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
/////FTP/////////////
const getFTP = async (req, res) => {
  try {
    const response = await pool.query(queries.getFTP);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const getFTPById = async (req, res) => {
  try {
    const response = await pool.query(queries.getFTPById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const addFTP = async (req, res) => {
  try {
    const { ftpip, ftppue, ftptip, ftpusu, ftpcla, ftpdir } = req.body;

    const response = await pool.query(queries.addFTP, [
      ftpip,
      ftppue,
      ftptip,
      ftpusu,
      ftpcla,
      ftpdir,
    ]);
    console.log(response);
    res.json({
      message: "ONT agregado exitosamente",
      body: {
        user: { ftpip, ftppue, ftptip, ftpusu, ftpcla, ftpdir },
      },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const updateFTP = async (req, res) => {
  try {
    const { ftpid, ftpip, ftppue, ftptip, ftpusu, ftpcla, ftpdir } = req.body;

    const response = await pool.query(queries.updateFTP, [
      ftpid,
      ftpip,
      ftppue,
      ftptip,
      ftpusu,
      ftpcla,
      ftpdir,
    ]);
    res.status(200).json({
      message: "Destino FTP actualizado",
      body: { ftpid, ftpip, ftppue, ftptip, ftpusu, ftpcla, ftpdir },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};

const deleteFTP = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(queries.deleteFTP, [id]);
    res.status(200).json({
      message: "Destino FTP eliminado",
      body: { id },
    });
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
//////////ORDENES/////////
const getOrdenes = async (req, res) => {
  try {
    var { desde, hasta, cabecera, estado, accion, num, pagina } = req.body;
    desde = desde + " 00:00:00";
    hasta = hasta + " 23:59:59";
    console.log(desde, hasta, accion, num, pagina);
    console.log("ACCION: ", accion);
    // const response = await pool.query(queries.getOrdenes, [
    //   desde,
    //   hasta,
    //   num,
    //   pagina,
    // ]);
    var instOrdenes = `
    select id,aprtelid,ataccion,to_char(atfecing,'YYYY/MM/DD HH24:MI:SS') atfecing,to_char(atfecprg,'YYYY/MM/DD HH24:MI:SS') atfecprg,atestado, 
    atordid,atinsid,atprfpue,
    attipapr,attrama,
    atcatego,apgcab,apgframe,apgframn,apgslot,apgpto,fsp 
    from gpon.viewOrdenes 
    where atfecing>=to_timestamp('${desde}','DD/MM/YYYY HH24:MI:SS') 
    and atfecing<=to_timestamp('${hasta}','DD/MM/YYYY HH24:MI:SS') `;

    if (cabecera !== "TODOS" && cabecera !== "") {
      instOrdenes += `and apgframe='${cabecera}' `;
    }

    if (estado !== "TODOS" && estado !== "") {
      instOrdenes += `and atestado='${estado}' `;
    }

    if (accion !== "TODOS" && accion !== "") {
      instOrdenes += `and ataccion='${accion}' `;
    }

    instOrdenes += `order by atfecing desc limit ${num} offset ${pagina}`;

    console.log(instOrdenes);
    const response = await pool.query(instOrdenes);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
const getOrdenProgById = async (req, res) => {
  try {
    const response = await pool.query(queries.getOrdenProgById, [
      req.params.id,
    ]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
const getIPSById = async (req, res) => {
  try {
    const response = await pool.query(queries.getIPSById, [req.params.id]);
    res.status(200).json(response.rows);
  } catch (ex) {
    res.status(500).json({
      message: "Se produjo un error",
      body: {
        error: ex.message,
      },
    });
  }
};
module.exports = {
  //CABECERA GPON
  getCabGpon,
  getCabGponById,
  addCabGpon,
  updateCabGpon,
  deleteCabGpon,
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
  //PERFIL VAS
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
  getSeccionesByNombre,
  getSeccionesAsignadas,
  asignaSecciones,
  desasignaSecciones,
  //ALERTAS
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
