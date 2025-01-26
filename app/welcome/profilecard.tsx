import * as styles from './profilecard.css'
import testQR from "./qr.svg"

interface ProfileCardProps {
  username: string;
  email: string;
  profileImage: string;
  messageCount: string;
  topActivity: string;
  mostActiveChannel: string;
}

export default function ProfileCard({
  username, 
  email, 
  profileImage, 
  messageCount, 
  topActivity, 
  mostActiveChannel
}: ProfileCardProps) {
  return (
    <div className={styles.container}>
      <img
        src={profileImage}
        alt="Profile illustration"
        className={styles.profileImage}
      />
      <div className={styles.overlay}>
        <div className={styles.rotatedContent}>
          <div className={styles.gradientOverlay}>
            <div className={styles.bottomGradient}></div>
            <div className={styles.leftGradient}></div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.profileText}>
              <h2 className={styles.username}>{username}</h2>
              <p>
                <span className={styles.normalText}>{email.split("@")[0]}</span>
                <span className={styles.lightText}>@{email.split("@")[1]}</span>
              </p>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <img src={testQR} className={styles.qrCode} alt="QR Code" />
            <div className={styles.statsContainer}>
              <p className={styles.statsText}>
                <span className={styles.normalText}>{messageCount}</span> 
                <span className={styles.lightText}> Messages</span> <br />
                <span className={styles.normalText}>Top {topActivity}</span> 
                <span className={styles.lightText}> Activity</span> <br />
                <span className={styles.lightText}>Most Active in </span> 
                <span className={styles.normalText}>#{mostActiveChannel}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
