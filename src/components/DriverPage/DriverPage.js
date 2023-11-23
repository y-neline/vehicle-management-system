import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Switch, BrowserRouter, Outlet, Link } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/createUser";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line"
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Task from "./scenes/assigntask/assigntask";
import Driver from "./scenes/createDriver/driver";
import "./DriverPage.css";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
          <main className="driverContent">
            <Topbar />
            

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/driver" element={<Driver />}></Route>
              <Route path="/task" element={<Task />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>

              <Route path="/geography" element={<Geography />}></Route>
            </Routes>
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
