
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:"Home page",
    },
    {
      path:"/add",
      element:"User add page",
    },
    {
      path:"/edit",
      element:"Update user page",
    },
  ])
  
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
