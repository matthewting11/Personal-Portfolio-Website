
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const YELLOW = "#EFFF00";
const PINK = "#FF2D8D";

const songs = [
  {
    title: "Pilot",
    artist: "mooose",
    src: "/music/1. Pilot.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Fantasy",
    artist: "mooose",
    src: "/music/2. Fantasy.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "My Life",
    artist: "mooose",
    src: "/music/3. My_life.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Thinking",
    artist: "mooose",
    src: "/music/4. Thinking.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Blueberries",
    artist: "mooose",
    src: "/music/5. blueberries.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Hallucination",
    artist: "mooose",
    src: "/music/6. Hallucination_brightest_star_remix.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Cross",
    artist: "mooose",
    src: "/music/7. cross.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Adams Game",
    artist: "mooose",
    src: "/music/8. adams_game.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Trip to Mars",
    artist: "mooose",
    src: "/music/9. Trip_to_Mars.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "The Times",
    artist: "mooose",
    src: "/music/10. The_times.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Green Black",
    artist: "mooose",
    src: "/music/11. Green_black.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Lost in Hamilton",
    artist: "mooose",
    src: "/music/12. Lost_in_Hamilton.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Water",
    artist: "mooose",
    src: "/music/13. water.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Jazz Song",
    artist: "mooose",
    src: "/music/14. Jazz song.wav",
    cover: "/images/Album Cover.jpg",
  },
  {
    title: "Finale",
    artist: "mooose",
    src: "/music/15. Finale.wav",
    cover: "/images/Album Cover.jpg",
  },
];

export default function MusicRadio() {
  const audioRef = useRef<HTMLAudioElement>(null);
    const shouldAutoPlayRef = useRef(false);
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
    const [shuffle, setShuffle] = useState(false);
const [showPlaylist, setShowPlaylist] = useState(false);

  const song = songs[songIndex];

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Play or pause
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Audio could not play:", error);
      }
    } else {
      audio.pause();
    }
  };
  
  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  if (shouldAutoPlayRef.current) {
    shouldAutoPlayRef.current = false;

    audio.play().catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Audio playback error:", error);
      }
    });
  }
}, [songIndex]);

  // Change song

    
const changeSong = (direction: number) => {
  const audio = audioRef.current;
  const wasPlaying = audio ? !audio.paused : playing;

  let nextIndex: number;

  if (shuffle && direction === 1 && songs.length > 1) {
    // Random song, excluding the currently playing song
    nextIndex = Math.floor(Math.random() * (songs.length - 1));

    if (nextIndex >= songIndex) {
      nextIndex++;
    }
  } else {
    nextIndex =
      (songIndex + direction + songs.length) % songs.length;
  }

  shouldAutoPlayRef.current = wasPlaying;
  setProgress(0);
  setDuration(0);
  setSongIndex(nextIndex);
};


const selectSong = (index: number) => {
  if (index === songIndex) {
    // Clicking current song toggles playback
    togglePlay();
    return;
  }

  shouldAutoPlayRef.current = true;
  setProgress(0);
  setDuration(0);
  setSongIndex(index);
};


  // Update progress
  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setProgress(audio.currentTime);
    setDuration(
      Number.isFinite(audio.duration) ? audio.duration : 0
    );
  };

  // Seek through song
  const seek = (value: number) => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = value;
    setProgress(value);
  };

  // Format time
  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const controlStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "21px",
    padding: "8px",
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={song.src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={updateProgress}
        onEnded={() => changeSong(1)}
      />

      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
          maxHeight: "calc(100dvh - 40px)",
        overflowY: "auto",
          width: "min(400px, calc(100vw - 32px))",
          background: "#111111",
          border: `1px solid ${PINK}`,
          borderRadius: "16px",
          boxShadow: "0 8px 35px rgba(0,0,0,0.45)",
          overflow: "hidden",
          transition: "width 0.3s ease, border-radius 0.3s ease",
        }}
      >

        
{!expanded ? (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    {/* Album cover */}
    <button
      onClick={() => setExpanded(true)}
      aria-label="Expand music player"
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <Image
        src={song.cover}
        alt={`${song.title} album cover`}
        width={45}
        height={45}
        style={{
          objectFit: "cover",
          borderRadius: "7px",
        }}
      />
    </button>

    
    {/* Current song information */}
    <button
    onClick={() => setExpanded(true)}
    aria-label="Expand music player"
    style={{
        flex: 1,
        minWidth: 0,
        textAlign: "left",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
    }}
    >
    {/* Radio title */}
    <div
        style={{
        color: PINK,
        fontSize: "9px",
        fontWeight: 900,
        letterSpacing: "1.5px",
        marginBottom: "5px",
        }}
    >
        MOOOSE RADIO
    </div>

    {/* Current song title */}
    <div
        style={{
        color: YELLOW,
        fontSize: "13px",
        fontWeight: 800,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        }}
    >
        {song.title}
    </div>

    {/* Artist */}
    <div
        style={{
        color: "#AAAAAA",
        fontSize: "10px",
        marginTop: "4px",
        }}
    >
        {song.artist}
    </div>
    </button>


    {/* Previous song */}
    <button
      onClick={() => changeSong(-1)}
      aria-label="Previous song"
      title="Previous song"
      style={{
        ...controlStyle,
        fontSize: "16px",
        padding: "4px",
      }}
    >
      ⏮
    </button>

    {/* Play / Pause */}
    <button
      onClick={togglePlay}
      aria-label={playing ? "Pause music" : "Play music"}
      style={{
        width: "34px",
        height: "34px",
        background: YELLOW,
        color: "#080808",
        border: "none",
        borderRadius: "50%",
        fontSize: "14px",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {playing ? "Ⅱ" : "▶"}
    </button>

    {/* Next song */}
    <button
      onClick={() => changeSong(1)}
      aria-label="Next song"
      title="Next song"
      style={{
        ...controlStyle,
        fontSize: "16px",
        padding: "4px",
      }}
    >
      ⏭
    </button>

    {/* Expand player */}
    <button
      onClick={() => setExpanded(true)}
      aria-label="Expand music player"
      title="Expand music player"
      style={{
        ...controlStyle,
        color: PINK,
        fontSize: "18px",
        padding: "4px",
      }}
    >
      ⤢
    </button>
  </div>
) : (
  // Keep your existing expanded player here



          // Expanded radio player
          <div style={{ padding: "18px" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  color: YELLOW,
                  fontWeight: 900,
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                MOOOSE RADIO
              </span>

              <button
                aria-label="Minimize radio"
                onClick={() => setExpanded(false)}
                style={{
                  ...controlStyle,
                  fontSize: "20px",
                }}
              >
                −
              </button>
            </div>

            {/* Album artwork and song */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <Image
                src={song.cover}
                alt={`${song.title} album artwork`}
                width={75}
                height={75}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />

              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "17px",
                    fontWeight: 800,
                    margin: 0,
                  }}
                >
                  {song.title}
                </p>

                <p
                  style={{
                    color: "#AAAAAA",
                    fontSize: "13px",
                    marginTop: "6px",
                  }}
                >
                  {song.artist}
                </p>
              </div>
            </div>

            {/* Song progress */}
            <input
              type="range"
              aria-label="Song position"
              min={0}
              max={duration || 1}
              step={0.1}
              value={Math.min(progress, duration || 1)}
              onChange={(e) => seek(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: PINK,
                cursor: "pointer",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#999999",
                fontSize: "11px",
                marginTop: "4px",
              }}
            >
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            
            {/* Playback controls */}
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "14px",
            }}
            >
            {/* Shuffle */}
            <button
                aria-label={shuffle ? "Disable shuffle" : "Enable shuffle"}
                aria-pressed={shuffle}
                onClick={() => setShuffle(!shuffle)}
                style={{
                ...controlStyle,
                color: shuffle ? YELLOW : "#888888",
                fontSize: "20px",
                }}
                title="Shuffle"
            >
                ⇄
            </button>

            {/* Previous */}
            <button
                aria-label="Previous song"
                onClick={() => changeSong(-1)}
                style={controlStyle}
            >
                ⏮
            </button>

            {/* Play / Pause */}
            <button
                aria-label={playing ? "Pause" : "Play"}
                onClick={togglePlay}
                style={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                border: "none",
                background: YELLOW,
                color: "#080808",
                fontSize: "22px",
                cursor: "pointer",
                }}
            >
                {playing ? "Ⅱ" : "▶"}
            </button>

            {/* Next */}
            <button
                aria-label="Next song"
                onClick={() => changeSong(1)}
                style={controlStyle}
            >
                ⏭
            </button>

            {/* Playlist */}
            <button
                aria-label={showPlaylist ? "Hide playlist" : "Show playlist"}
                aria-expanded={showPlaylist}
                onClick={() => setShowPlaylist(!showPlaylist)}
                style={{
                ...controlStyle,
                color: showPlaylist ? PINK : "#FFFFFF",
                fontSize: "21px",
                }}
                title="Show playlist"
            >
                ☷
            </button>
            </div>


            {/* Volume */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "22px",
              }}
            >
              <span style={{ color: PINK, fontSize: "18px" }}>
                ♪
              </span>

              <input
                type="range"
                aria-label="Volume"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) =>
                  setVolume(Number(e.target.value))
                }
                style={{
                  width: "100%",
                  accentColor: PINK,
                }}
              />
            </div>
                
            {/* Playlist panel */}
            {showPlaylist && (
            <div
                style={{
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: "1px solid #333333",
                }}
            >
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                }}
                >
                <span
                    style={{
                    color: YELLOW,
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "1.5px",
                    }}
                >
                    PLAYLIST
                </span>

                <span
                    style={{
                    color: "#888888",
                    fontSize: "11px",
                    }}
                >
                    {songs.length} TRACKS
                </span>
                </div>

                <div
                style={{
                    maxHeight: "250px",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
                >
                {songs.map((track, index) => {
                    const isCurrent = index === songIndex;

                    return (
                    <button
                        key={`${track.src}-${index}`}
                        onClick={() => selectSong(index)}
                        aria-label={`Play ${track.title}`}
                        style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        gap: "12px",
                        padding: "11px 10px",
                        background: isCurrent
                            ? "rgba(239,255,0,0.1)"
                            : "transparent",
                        border: isCurrent
                            ? `1px solid ${YELLOW}`
                            : "1px solid transparent",
                        borderRadius: "8px",
                        color: isCurrent ? YELLOW : "#FFFFFF",
                        cursor: "pointer",
                        textAlign: "left",
                        }}
                    >
                        <span
                        style={{
                            width: "22px",
                            flexShrink: 0,
                            color: isCurrent ? PINK : "#888888",
                            fontSize: "11px",
                            fontWeight: 700,
                        }}
                        >
                        {isCurrent && playing
                            ? "♫"
                            : String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                        style={{
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "13px",
                            fontWeight: isCurrent ? 800 : 500,
                        }}
                        >
                        {track.title}
                        </span>

                        {isCurrent && (
                        <span style={{ color: PINK, fontSize: "10px" }}>
                            {playing ? "PLAYING" : "SELECTED"}
                        </span>
                        )}
                    </button>
                    );
                })}
                </div>
            </div>
            )}

            <p
              style={{
                textAlign: "center",
                color: "#777777",
                fontSize: "10px",
                letterSpacing: "2px",
                marginTop: "18px",
              }}
            >
              ORIGINAL MUSIC BY MOOOSE
            </p>
          </div>
        )}
      </div>
    </>
  );
}
