const { Client } = require("pg");

async function getTreePaths() {
  const client = new Client({
    user: "your_username", // Replace with your PostgreSQL username
    host: "localhost", // Replace with your host
    database: "your_database", // Replace with your database name
    password: "your_password", // Replace with your PostgreSQL password
    port: 5050, // Default PostgreSQL port
  });

  try {
    await client.connect();

    const query = `
      WITH RECURSIVE TreePaths AS (
        SELECT id, label, expanded, parent_id, CAST(id AS TEXT) AS path
        FROM tree
        WHERE parent_id IS NULL
        UNION ALL
        SELECT t.id, t.label, t.expanded, t.parent_id, CONCAT(tp.path, '->', t.id)
        FROM tree t
        INNER JOIN TreePaths tp ON t.parent_id = tp.id
      )
      SELECT * FROM TreePaths ORDER BY path;
    `;

    const res = await client.query(query);
    console.log("Tree Structure:", res.rows);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await client.end();
  }
}

async function addNode(id, label, expanded, parentId) {
  try {
    await client.connect();
    const query = `SELECT add_node($1, $2, $3, $4);`;
    const values = [id, label, expanded, parentId];

    await client.query(query, values);
    console.log(
      `Node added: { id: ${id}, label: '${label}', expanded: ${expanded}, parentId: ${parentId} }`
    );
  } catch (error) {
    console.error("Error adding node:", error);
  } finally {
    await client.end();
  }
}

getTreePaths();
