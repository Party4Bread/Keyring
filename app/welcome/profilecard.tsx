import { QRCodeSVG } from 'qrcode.react';
import * as styles from './profilecard.css';

interface ProfileCardProps {
  username: string;
  email: string;
  profileImage: string;
  messageCount: string;
  topActivity: string;
  mostActiveChannel: string;
  qrLink: string;
}

export default function ProfileCard({
  username, 
  email, 
  qrLink,
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
                {email.startsWith('@') ? (
                  <p>
                    <span className={styles.lightText}>@</span>
                    <span className={styles.normalText}>{email.slice(1)}</span>
                  </p>
                ) : (
                  <p>
                    <span className={styles.normalText}>{email.split("@")[0]}</span>
                    <span className={styles.lightText}>@{email.split("@")[1]}</span>
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.qrCode}>
            <QRCodeSVG value={qrLink} fgColor="#fff" bgColor='transparent' height="100%" width="100%"/>

            </div>
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
