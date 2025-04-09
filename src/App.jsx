import "./App.css";
import { Layout } from "antd";
import { AppHeader } from "./components/layout/AppHeader";
import { AppSider } from "./components/layout/AppSider";
import { AppContent } from "./components/layout/AppContent";

function App() {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider></AppSider>
          <AppContent></AppContent>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
