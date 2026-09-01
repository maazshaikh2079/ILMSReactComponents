import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppLayout } from "./components/AppLayout";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { ComponentLab } from "./pages/ComponentLab";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="demand-window" element={<DashboardPage />} />
            <Route path="projects" element={<DashboardPage />} />
            <Route path="customers" element={<DashboardPage />} />
            <Route path="requests" element={<DashboardPage />} />
            <Route path="change-logs" element={<DashboardPage />} />
            <Route path="profile" element={<DashboardPage />} />
            <Route path="components" element={<ComponentLab />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;



