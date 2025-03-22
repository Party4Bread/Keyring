import { useDeferredValue, useEffect, useRef, useState } from "react";
import ProfileCard from "./profilecard";
import * as styles from "./welcome.css";
import { useNavigate } from "react-router"

export function Welcome() {
  const [username, setUsername] = useState("kazusa")
  const [email, setEmail] = useState("kyoyama@kazus.a")
  const [profileImage, setProfileImage] = useState("https://s3-alpha-sig.figma.com/img/4539/af1e/aa83bf2388bafe8f45e7485afe28c910?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDsXK-o6DbcppYV14tMkMuT987jmfPrJwRzv3HyUyv7tkxd90IrjiyAkLIC-T-u0apQEabKLsBQt880H4y1C-D-8nu8jl-G2EDWUdfsXJyTGdRLbl7sZjV5vvo8SF9XoClAhMr9RRlYDpyZ9Nzr5SlkFKlSXuioKzEdS89X20Ckn7UNjsf~WzWx~LfvziP-QsSpvaq7ZIUc17Rx31BECT~paet~Kgc5Nogqh7rFQ4pWz5PVfulhKyawbsKKfHra2iM0wkbFSIsJmKu97kJ9r-ZIkSlHOkrkQOxt6AjNY0Mg0-YjdNyw8O~iztFCWnYX41X9iklBGAg01-~~kSPBeEA__")
  const messageCount =  "16,384"
  const topActivity = "2"
  const mostActiveChannel = "일반"
  const [imageX, setImageX] = useState(0)
  const [imageY, setImageY] = useState(0)
  const [imageScale, setImageScale] = useState(1)
  const [imageRotation, setImageRotation] = useState(0)
  const [scaledImage, setScaledImage] = useState<string | null>(null)
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false)
  const [qrLink, setQrLink] = useState<string>("https://www.youtube.com/watch?v=RS5arC0VOr4")

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const canvasWidth = 512
  const canvasHeight = 512


  function changeImage(scaleChange: boolean) {
    if (canvasRef.current == null) return
    const ctx = canvasRef.current.getContext('2d')
    if (ctx == null) return
    setIsImageLoading(true)
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      ctx.save();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.translate(imageX, imageY);
      ctx.rotate(imageRotation);
      ctx.translate(-imageX, -imageY);
      const whratio = img.width / img.height
      ctx?.drawImage(img,
        (imageX - imageScale + 1) * img.width,
        (imageY - imageScale + 1) * img.height,
        imageScale * img.width,
        imageScale * img.height * whratio,
        0, 0, canvasHeight, canvasWidth);
      ctx?.restore();
      setScaledImage(canvasRef.current?.toDataURL() ?? null)
      setIsImageLoading(false)
      console.log('image loaded')
    }
    img.onerror = () => {
      setIsImageLoading(false);
      console.error('Image failed to load');
    }
    img.src = profileImage
  }
  const _imageScale = useDeferredValue(imageScale)
  const _imageX = useDeferredValue(imageX)
  const _imageY = useDeferredValue(imageY)
  const _imageRotation = useDeferredValue(imageRotation)
  useEffect(() => {
    changeImage(false)
  }, [profileImage, _imageX, _imageY, _imageRotation])

  useEffect(() => {
    changeImage(true)
  }, [_imageScale])

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          qrLink,
          profileImage: scaledImage,
          imageX,
          imageY,
          imageScale,
          imageRotation
        })
      })

      const result = await response.json()
      if (result.success) {
        console.log('Profile saved successfully:', result.filename)
      } else {
        console.error('Failed to save profile')
      }
    } catch (error) {
      console.error('Error saving profile:', error)
    }
  }

  return (
    <>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ width: '0', height: '0' }}></canvas>
      <main className={styles.mainContainer}>
        <div className={styles.profileColumn}>
          <div className={styles.section}>
            <ProfileCard
              username={username} email={email}
              qrLink={qrLink}
              profileImage={scaledImage}
              messageCount={messageCount}
              topActivity={topActivity}
              mostActiveChannel={mostActiveChannel} />
          </div>
        </div>
        <div className={styles.editorColumn}>
          {/* Editor */}
          <div className={styles.section}>
            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>Username/Nickname</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>email@domain.com or @username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="qrlink" className={styles.label}>Link for QR Code</label>
              <input
                type="text"
                id="qrlink"
                value={qrLink}
                onChange={(e) => setQrLink(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="profileImage" className={styles.label}>Profile Image</label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setProfileImage(URL.createObjectURL(file))
                  }
                }}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <div >
                <label htmlFor="imageX" className={styles.label}>Image X</label>
                <input
                  type="range"
                  id="imageX"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={imageX}
                  onDoubleClick={(e) => setImageX(0)}
                  onChange={(e) => setImageX(parseFloat(e.target.value))}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="imageY" className={styles.label}>Image Y</label>
                <input
                  type="range"
                  id="imageY"
                  min="-1"
                  max="1"
                  step="0.01"
                  value={imageY}
                  onDoubleClick={(e) => setImageY(0)}
                  onChange={(e) => setImageY(parseFloat(e.target.value))}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="imageScale" className={styles.label}>Image Scale</label>
                <input
                  type="range"
                  id="imageScale"
                  min="0.5"
                  max="2"
                  step="0.01"
                  value={imageScale}
                  onDoubleClick={(e) => setImageScale(1)}
                  onChange={(e) => setImageScale(parseFloat(e.target.value))}
                  className={styles.input}
                />
              </div>
              <div>
                <label htmlFor="imageRotation" className={styles.label}>Image Rotation</label>
                <input
                  type="range"
                  id="imageRotation"
                  min="-1.5"
                  max="1.5"
                  step="0.01"
                  value={imageRotation}
                  onDoubleClick={(e) => setImageRotation(0)}
                  onChange={(e) => setImageRotation(parseFloat(e.target.value))}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <input type="submit" className={styles.submitButton} onClick={handleSubmit} />
          </div>
        </div>
      </main>
    </>
  );
}
