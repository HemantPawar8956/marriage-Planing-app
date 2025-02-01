import React from 'react';
import { Icon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './Profile.module.css';

const Profile=()=> {
  const user = {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    joinDate: "January 15, 2023",
    weddingDate: "August 12, 2024",
    completedTasks: 45,
    totalTasks: 100,
    recentActivity: [
      { date: "2023-05-15", action: "Booked venue: Sunset Beach Resort" },
      { date: "2023-05-10", action: "Sent invitations to 150 guests" },
      { date: "2023-05-05", action: "Chose wedding cake: 3-tier vanilla with buttercream" },
      { date: "2023-04-28", action: "Hired photographer: John Smith Photography" },
      { date: "2023-04-20", action: "Selected bridesmaids dresses" },
    ]
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.header} animate__animated animate__fadeIn`}>
        <h1>Wedding Planner Profile</h1>
      </header>

      <div className={`${styles.card} ${styles.profile}`} data-aos="fade-up">
        <h2>User Information</h2>
        <div className={styles.profileContent}>
          <Icon component={AccountCircleIcon} className={styles.avatar} />
          <div>
            <h3>{user.name}</h3>
            <p><Icon component={EmailIcon} className={styles.icon} /> {user.email}</p>
            <p><Icon component={CalendarTodayIcon} className={styles.icon} /> Joined on {user.joinDate}</p>
            <p><Icon component={CalendarTodayIcon} className={styles.icon} /> Wedding Date: {user.weddingDate}</p>
          </div>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up">
        <h2>Planning Progress</h2>
        <div className={styles.progress}>
          <div className={styles.progressText}>
            <span>Tasks Completed: {user.completedTasks}/{user.totalTasks}</span>
            <span>{Math.round((user.completedTasks / user.totalTasks) * 100)}% Complete</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              style={{width: `${(user.completedTasks / user.totalTasks) * 100}%`}} 
              data-aos="width" 
              data-aos-duration="1000"
            ></div>
          </div>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up">
        <h2>Recent Activity</h2>
        <ul className={styles.activityList}>
          {user.recentActivity.map((activity, index) => (
            <li 
              key={index} 
              className="animate__animated animate__fadeInLeft"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Icon component={CheckCircleIcon} className={styles.icon} />
              <div>
                <span className={styles.activityDate}>{activity.date}</span>
                <span className={styles.activityAction}>{activity.action}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
