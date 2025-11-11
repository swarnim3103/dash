import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
     route("/contact", "pages/contact.tsx"),
     route("/work","pages/work.tsx"),
    ] satisfies RouteConfig;
