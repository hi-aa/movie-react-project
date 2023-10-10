import Home from "../pages/Home";
import Detail from "../components/movie/Detail";
import List from "../pages/movie/List";
import Menu1 from "../pages/menu1/Menu1";
import NotFount from "../pages/error/NotFount";

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
      // {
      //   id: 101,
      //   title: "Movie List",
      //   path: "/movies/:id",
      //   element: <Detail />,
      // },
    ],
  },
  {
    id: 200,
    title: "Menu1 Test",
    path: "/menu1",
    element: <Menu1 />,
    children: [],
  },
  {
    id: 900,
    title: "Not Found 404",
    path: "*",
    element: <NotFount />,
    children: [],
  },
];

export default routeLink;
