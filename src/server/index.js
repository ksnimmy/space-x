import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import serverRenderer from "./serverRenderer";
import createStore from "../helpers/createStore";
import Routes from "../Routes";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store, req.query) : null;
    });

    Promise.all(promises).then((data) => {
        res.send(serverRenderer(req, store));
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening to Port " + port);
});