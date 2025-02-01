
import React from 'react';
import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';
import styles from './WeddingDashboard.module.css'; // CSS Module for styling

const WeddingDashboard = () => {
  // Sample data for the dashboard
  const weddingDetails = {
    brideName: 'Ananya',
    groomName: 'Rahul',
    weddingDate: 'December 15, 2023',
    daysLeft: 45,
    budget: '₹15,00,000',
    tasksCompleted: 12,
    totalTasks: 20,
    vendors: [
      { name: 'Photographer', status: 'Booked' },
      { name: 'Caterer', status: 'Pending' },
      { name: 'Decorator', status: 'Booked' },
      { name: 'Venue', status: 'Confirmed' },
    ],
  };

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.dashboard} data-aos="fade-up">
      <h1 className={`${styles.heading} animate__animated animate__bounce`}>
        Wedding Planning Dashboard
      </h1>

      {/* Wedding Details Section */}
      <div className={styles.weddingDetails} data-aos="fade-right">
        <h2>Wedding Details</h2>
        <p>
          <strong>Bride:</strong> {weddingDetails.brideName}
        </p>
        <p>
          <strong>Groom:</strong> {weddingDetails.groomName}
        </p>
        <p>
          <strong>Wedding Date:</strong> {weddingDetails.weddingDate}
        </p>
        <p>
          <strong>Days Left:</strong> {weddingDetails.daysLeft} days
        </p>
      </div>

      {/* Budget and Tasks Section */}
      <div className={styles.stats} data-aos="fade-left">
        <div className={styles.statCard}>
          <h3>Budget</h3>
          <p>{weddingDetails.budget}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Tasks Completed</h3>
          <p>
            {weddingDetails.tasksCompleted} / {weddingDetails.totalTasks}
          </p>
        </div>
      </div>

      {/* Vendors Section */}
      <div className={styles.vendors} data-aos="fade-up">
        <h2>Vendors</h2>
        <div className={styles.vendorList}>
          {weddingDetails.vendors.map((vendor, index) => (
            <div key={index} className={styles.vendorCard}>
              <p>
                <strong>{vendor.name}</strong>
              </p>
              <p
                className={`${styles.status} ${
                  vendor.status === 'Booked' || vendor.status === 'Confirmed'
                    ? styles.booked
                    : styles.pending
                }`}
              >
                {vendor.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingDashboard;