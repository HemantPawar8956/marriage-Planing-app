import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import TaskOverview from "./components/TaskOverview";
import BudgetCard from "./components/BudgetCard";
import TaskList from "./components/TaskList";
import VendorsList from "./components/VendorsList";
import CustomPackage from "./components/CustomPackage";
import TrendingSection from "./components/TrendingSection";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <ProfileCard />
        <TaskOverview />
        <BudgetCard />
        <TaskList />
        <VendorsList />
        <CustomPackage />
        <TrendingSection />
      </div>
      <BottomNav />
    </div>
  );
};

export default App;
