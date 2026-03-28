import {useEffect} from "react"

const getVideoUrl = ({channel, videoId, autoplay}) => {
  const shouldAutoplay = autoplay ? "1" : "0"

  if (channel === "vimeo") {
    return `https://player.vimeo.com/video/${videoId}?autoplay=${shouldAutoplay}`
  }

  if (channel === "youtube" || !channel) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=${shouldAutoplay}&rel=0`
  }

  return ""
}

export default function VideoModal({
  channel = "youtube",
  autoplay = false,
  isOpen,
  videoId,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleEscape = event => {
      if (event.key === "Escape") {
        onClose?.()
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !videoId) {
    return null
  }

  const videoUrl = getVideoUrl({channel, videoId, autoplay})

  return (
    <div
      aria-modal="true"
      role="dialog"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "16px",
      }}
    >
      <div
        onClick={event => event.stopPropagation()}
        style={{
          position: "relative",
          width: "min(960px, 100%)",
          aspectRatio: "16 / 9",
          backgroundColor: "#000",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
        }}
      >
        <button
          aria-label="Close video"
          onClick={onClose}
          type="button"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 2,
            border: "none",
            borderRadius: "999px",
            width: "36px",
            height: "36px",
            fontSize: "20px",
            lineHeight: 1,
            cursor: "pointer",
            color: "#111",
            backgroundColor: "#fff",
          }}
        >
          x
        </button>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          src={videoUrl}
          style={{width: "100%", height: "100%", border: 0}}
          title="Video"
        />
      </div>
    </div>
  )
}
