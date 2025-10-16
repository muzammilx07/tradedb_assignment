// App.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AnalyticsPanel from "./components/AnalyticsPanel";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Topbar */}
      <Topbar  />

      {/* Main Row */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */} 
        <Sidebar
          className="border-r border-border bg-sidebar text-sidebar-foreground hidden md:flex"
        />

        {/* Analytics Panel */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-card text-card-foreground">
          <AnalyticsPanel />
        </main>
      </div>

     
    </div>
  );
}
