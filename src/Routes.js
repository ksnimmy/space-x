import Home, { loadData } from "./components/pages/Home";

export default [
    {
        loadData,
        path: "/",
        component: Home,
        exact: true
    }
];