const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "fv8069",
  database: "firstapi",
  port: 5432,
});

const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    console.log(response.rows);
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

const getUserById = async (req, res) => {
  const response = await pool.query("SELECT * FROM users where id = $1", [
    req.params.id,
  ]);
  res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const response = await pool.query(
    "Insert into users (name, email) values ($1, $2)",
    [name, email]
  );
  console.log(response);
  res.json({
    message: "User added succesfully",
    body: {
      user: { name, email },
    },
  });
};

const updateUser = async (req, res) => {
  const { id, name, email } = req.body;

  const response = await pool.query(
    "update users set name=$1,email=$2 where id=$3",
    [name, email, id]
  );
  res.status(200).json({
    message: "user updated",
    body: {
      user: { id, name, email },
    },
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("Delete from users where id = $1", [id]);
  console.log(response);
  res.json(`User ${id} deleted`);
};

module.exports = { getUsers, getUserById, createUser, deleteUser, updateUser };
