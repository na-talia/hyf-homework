const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET/search

app.get("/search", (req, res) => {
  try {
    const containsQuery = req.query.q;

    /* Object.values() method returns an array of 
    a given object's own enumerable string-keyed property values. 
    Some() method tests whether at least one element in the array 
    passes the test implemented by the provided function. */

    if (containsQuery) {
      const matchQuery = documents.filter((item) =>
        Object.values(item).some((element) =>
          String(element).toLowerCase().includes(containsQuery)
        )
      );
      res.send(matchQuery);
    } else {
      res.send(documents);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// GET/documents/:id

app.get("/documents/:id", (req, res) => {
  try {
    const matchId = documents.find(
      (element) => element.id === parseInt(req.params.id)
    );
    if (matchId) {
      res.json(matchId);
    } else {
      res.status(404).send(`ID ${req.params.id} not found`);
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// POST/search

app.post("/search", async (req, res) => {
  try {
    const queryParameter = req.query.q;
    const bodyParameter = req.body.fields;

    if (queryParameter && bodyParameter) {
      res.status(400).json({
        error: "Bad Request. Both query and body parameters cannot be provided",
      });
    } else if (queryParameter) {
      const responseAfterFilter = findByQuery(documents, queryParameter);

      const findByQuery = (documents, query) => {
        return documents.filter((element) => {
          Object.values(element).filter((value) => {
            return String(value).includes(query);
          });
        });
      };

      res.send(responseAfterFilter);
    } else if (bodyParameter) {
      const findByBody = (documents, body) => {
        return documents.filter((element) => {
          const keyValue = Object.keys(body)[0];
          return String(element[keyValue]).includes(body[keyValue]);
        });
      };
      const responseAfterFilter = findByBody(documents, bodyParameter);

      res.send(responseAfterFilter);
    } else {
      res.send(documents);
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
