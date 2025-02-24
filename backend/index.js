const express = require("express");
const cors = require("cors");
//const tree_model = require("treeModel");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

// WITH RECURSIVE TreePaths AS (
//     SELECT id, label, expanded, parent_id, CAST(id AS CHAR(100)) AS path
//     FROM tree
//     WHERE parent_id IS NULL
//     UNION ALL
//     SELECT t.id, t.label, t.expanded, t.parent_id, CONCAT(tp.path, '->', t.id)
//     FROM tree t
//     INNER JOIN TreePaths tp ON t.parent_id = tp.id
// )
// SELECT * FROM TreePaths ORDER BY path;

app.use(cors());

// app.get("/", (req, res) => {
//   tree_model
//     .getNodes()
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api", (req, res) => {
  res.json(
    // {
    //   id: "A",
    //   children: [{ id: "B" }, { id: "C" }],
    // },
    // {
    //   id: "B",
    //   children: [{ id: "D" }, { id: "E" }, { id: "F" }],
    // },
    // {
    //   id: "C",
    //   children: [{ id: "G" }, { id: "H" }],
    // },
    // {
    //   id: "D",
    //   children: [],
    // },
    // {
    //   id: "E",
    //   children: [],
    // },
    // {
    //   id: "F",
    //   children: [],
    // },
    // {
    //   id: "G",
    //   children: [],
    // },
    // {
    //   id: "H",
    //   children: [],
    // },
    {
      id: 1,
      label: "root",
      expanded: true,
      children: [
        {
          id: 2,
          label: "leaf",
          expanded: true,
          children: [
            {
              id: 4,
              label: "leaf",
              expanded: true,
              children: [
                {
                  id: 8,
                  label: "leaf",
                  expanded: true,
                  children: [],
                },
                {
                  id: 9,
                  label: "leaf",
                  expanded: true,
                  children: [],
                },
              ],
            },
            {
              id: 5,
              label: "leaf",
              expanded: true,
              children: [
                {
                  id: 10,
                  label: "leaf",
                  expanded: true,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "leaf",
          expanded: true,
          children: [
            {
              id: 6,
              label: "leaf",
              expanded: true,
              children: [
                {
                  id: 11,
                  label: "leaf",
                  expanded: true,
                  children: [],
                },
              ],
            },
            {
              id: 7,
              label: "leaf",
              expanded: true,
              children: [
                {
                  id: 12,
                  label: "leaf",
                  expanded: true,
                  children: [],
                },
                {
                  id: 13,
                  label: "leaf",
                  expanded: true,
                  children: [
                    {
                      id: 14,
                      label: "leaf",
                      expanded: true,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  );
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
