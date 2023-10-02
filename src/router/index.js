import Home from "../pages/Home";
import Detail from "../pages/Movie/Detail";
import List from "../pages/Movie/List";
import Menu1 from "../pages/Menu1/Menu1";

const routeLink = [
  {
    id: 0,
    title: "Home",
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    id: 100,
    title: "Movie",
    path: "/movies",
    element: <List />,
    children: [
      {
        id: 101,
        title: "Movie List",
        path: "/movies/:id",
        element: <Detail />,
      },
    ],
  },
  {
    id: 200,
    title: "Menu1 Test",
    path: "/menu1",
    element: <Menu1 />,
    children: [],
  },
];

export default routeLink;
