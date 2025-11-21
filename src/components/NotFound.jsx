import React, { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle, Gamepad2, X } from "lucide-react";

const NotFound = () => {
  const [gameActive, setGameActive] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  
  // Dino Jump Game
  const [dinoY, setDinoY] = useState(100);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  
  const velocityRef = useRef(0);
  const obstacleCounterRef = useRef(0);
  const gameLoopRef = useRef(null);

  const GRAVITY = 0.6;
  const JUMP_STRENGTH = -15;
  const GROUND_LEVEL = 100;

  // Difficulty progression - faster obstacles as score increases
  const getObstacleSpeed = () => {
    return 5 + difficulty * 0.5; // Starts at 5, increases with difficulty
  };

  const getObstacleSpawnRate = () => {
    return Math.max(80, 120 - difficulty * 2); // Spawns more frequently with difficulty
  };

  // Generate random obstacle size
  const generateObstacle = (x) => {
    const sizes = [
      { width: 25, height: 50, type: "small" },
      { width: 35, height: 60, type: "medium" },
      { width: 45, height: 70, type: "large" },
    ];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    return {
      x,
      id: Math.random(),
      ...randomSize,
    };
  };

  // ============ DINO JUMP HANDLE ============
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        
        if (gameRunning && !gameOver) {
          if (!isJumping && dinoY >= GROUND_LEVEL - 5) {
            setIsJumping(true);
            velocityRef.current = JUMP_STRENGTH;
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameRunning, dinoY, gameOver, isJumping]);

  // ============ DINO GAME LOOP ============
  useEffect(() => {
    if (!gameRunning) return;

    gameLoopRef.current = setInterval(() => {
      // Update Dino Y Position
      setDinoY((prev) => {
        let newY = prev + velocityRef.current;
        velocityRef.current += GRAVITY;

        if (newY >= GROUND_LEVEL) {
          newY = GROUND_LEVEL;
          velocityRef.current = 0;
          setIsJumping(false);
        }
        return newY;
      });

      // Update Obstacles
      setObstacles((prev) => {
        let updated = prev
          .map((obs) => ({ ...obs, x: obs.x - getObstacleSpeed() }))
          .filter((obs) => obs.x > -50);

        // Spawn new obstacles
        if (obstacleCounterRef.current > getObstacleSpawnRate()) {
          updated.push(generateObstacle(600));
          obstacleCounterRef.current = 0;
        }
        obstacleCounterRef.current++;

        return updated;
      });

      // Increment Score and Difficulty
      setScore((prev) => {
        const newScore = prev + 1;
        setDifficulty(Math.floor(newScore / 500) + 1); // Difficulty increases every 500 points
        return newScore;
      });
    }, 30);

    return () => clearInterval(gameLoopRef.current);
  }, [gameRunning]);

  // ============ DINO COLLISION DETECTION ============
  useEffect(() => {
    if (!gameRunning) return;

    const checkCollision = () => {
      obstacles.forEach((obs) => {
        // Dino dimensions
        const dinoLeft = 50;
        const dinoRight = dinoLeft + 40;
        const dinoTop = dinoY;
        const dinoBottom = dinoY + 40;

        // Obstacle dimensions
        const obsLeft = obs.x;
        const obsRight = obs.x + obs.width;
        const obsTop = 100; // Ground level
        const obsBottom = obsTop + obs.height;

        // Collision check
        if (
          dinoRight > obsLeft &&
          dinoLeft < obsRight &&
          dinoBottom > obsTop &&
          dinoTop < obsBottom
        ) {
          setGameRunning(false);
          setGameOver(true);
        }
      });
    };

    checkCollision();
  }, [obstacles, dinoY, gameRunning]);

  const handlePlayGame = () => {
    setGameActive(true);
    setSelectedGame("dino");
    setGameRunning(true);
    setGameOver(false);
    setScore(0);
    setDinoY(GROUND_LEVEL);
    setObstacles([]);
    setIsJumping(false);
    setDifficulty(1);
    velocityRef.current = 0;
    obstacleCounterRef.current = 0;
  };

  const handleCloseGame = () => {
    setGameActive(false);
    setSelectedGame(null);
    setGameRunning(false);
    setGameOver(false);
    setDinoY(GROUND_LEVEL);
    setObstacles([]);
    setScore(0);
    setIsJumping(false);
    setDifficulty(1);
  };

  const handleRestartGame = () => {
    setGameRunning(true);
    setGameOver(false);
    setScore(0);
    setDinoY(GROUND_LEVEL);
    setObstacles([]);
    setIsJumping(false);
    setDifficulty(1);
    velocityRef.current = 0;
    obstacleCounterRef.current = 0;
  };

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(5deg); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { 
        text-shadow: 0 0 20px rgba(249, 115, 22, 0.5),
                     0 0 40px rgba(249, 115, 22, 0.3);
      }
      50% { 
        text-shadow: 0 0 30px rgba(249, 115, 22, 0.8),
                     0 0 60px rgba(249, 115, 22, 0.6);
      }
    }
    
    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes rotate-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .float-animation {
      animation: float 4s ease-in-out infinite;
    }
    
    .pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }
    
    .slide-up {
      animation: slide-up 0.8s ease-out;
    }
    
    .rotate-spin {
      animation: rotate-spin 20s linear infinite;
    }
    
    .bounce-btn {
      transition: all 0.3s ease;
    }
    
    .bounce-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(249, 115, 22, 0.4);
    }
    
    .bounce-btn:active {
      transform: translateY(-2px);
    }

    .game-container {
      background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
      position: relative;
      overflow: hidden;
      max-width: 100%;
      width: 100%;
      height: 400px;
      border-radius: 16px;
      border: 3px solid #FFA500;
      margin-top: 20px;
    }

    .ground {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      background: linear-gradient(to bottom, #90EE90, #228B22);
      border-top: 3px dashed #333;
    }

    .ground::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: repeating-linear-gradient(
        90deg,
        #333,
        #333 20px,
        transparent 20px,
        transparent 40px
      );
    }

    .dino {
      position: absolute;
      width: 40px;
      height: 40px;
      background: #FFD700;
      border: 2px solid #333;
      border-radius: 4px;
      left: 50px;
      transition: none;
      z-index: 5;
    }

    .dino::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: #333;
      border-radius: 50%;
      top: 8px;
      left: 24px;
    }

    .dino::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 12px;
      background: #333;
      bottom: 2px;
      right: 4px;
    }

    .obstacle {
      position: absolute;
      bottom: 80px;
      background: linear-gradient(135deg, #FF6B6B, #FF4444);
      border: 2px solid #CC0000;
      box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.3), 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    .obstacle.small {
      width: 25px;
      height: 50px;
    }

    .obstacle.medium {
      width: 35px;
      height: 60px;
    }

    .obstacle.large {
      width: 45px;
      height: 70px;
    }

    .score-display {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
      background: rgba(255, 255, 255, 0.9);
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #FFA500;
      z-index: 10;
    }

    .difficulty-display {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #333;
      font-weight: bold;
      background: rgba(255, 255, 255, 0.9);
      padding: 10px 15px;
      border-radius: 8px;
      border: 2px solid #FFA500;
      font-size: 14px;
      z-index: 10;
    }

    .game-over-screen {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 100;
      border-radius: 16px;
      gap: 20px;
    }

    .game-stats {
      text-align: center;
      color: white;
    }

    .game-stats h3 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: #FFD700;
    }

    .game-stats p {
      font-size: 1.2rem;
      margin: 8px 0;
      color: #E0F6FF;
    }

    @media (max-width: 768px) {
      .game-container {
        height: 300px;
      }

      .score-display {
        font-size: 18px;
        padding: 8px 15px;
        top: 15px;
        right: 15px;
      }

      .difficulty-display {
        font-size: 12px;
        padding: 8px 12px;
        top: 15px;
        left: 15px;
      }
    }

    @media (max-width: 480px) {
      .game-container {
        height: 250px;
      }

      .score-display {
        font-size: 16px;
        padding: 6px 12px;
      }

      .difficulty-display {
        font-size: 11px;
        padding: 6px 10px;
      }

      .dino {
        width: 30px;
        height: 30px;
      }

      .game-stats h3 {
        font-size: 2rem;
      }

      .game-stats p {
        font-size: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 rotate-spin"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-3xl px-2 sm:px-4">
          {!gameActive ? (
            <>
              {/* 404 Number */}
              <div className="float-animation mb-6 sm:mb-8">
                <h1 className="text-7xl sm:text-9xl font-black bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent pulse-glow drop-shadow-2xl">
                  404
                </h1>
              </div>

              {/* Title */}
              <div className="slide-up mb-4">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-2">
                  Oops! Lost in Space
                </h2>
                <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mx-auto mb-4 sm:mb-6"></div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto mb-6 sm:mb-8 slide-up leading-relaxed">
                The page you're searching for has vanished into the digital void. Don't worry, let's get you back on track!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center slide-up mt-8 sm:mt-12 mb-8 sm:mb-0">
                <a
                  href="/"
                  className="bounce-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <ArrowLeftCircle size={20} className="sm:w-6 sm:h-6" /> Back to Home
                </a>
                <button
                  onClick={handlePlayGame}
                  className="bounce-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Gamepad2 size={20} className="sm:w-6 sm:h-6" /> Play Dino Runner
                </button>
              </div>

              {/* Floating Icons */}
              <div className="mt-12 sm:mt-16 flex justify-center gap-6 sm:gap-8 flex-wrap">
                {["🎮", "🚀", "🌟", "⚡"].map((icon, i) => (
                  <span
                    key={i}
                    className="text-3xl sm:text-4xl float-animation"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </>
          ) : (
            // Dino Game View
            <div className="w-full">
              <div className="flex items-center justify-between mb-4 slide-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Dino Runner - Challenge Mode</h2>
                <button
                  onClick={handleCloseGame}
                  className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="game-container slide-up">
                <div className="difficulty-display">
                  Level: {difficulty}
                </div>
                <div className="score-display">{Math.floor(score / 10)}</div>

                <div
                  className="dino"
                  style={{ bottom: `${dinoY}px` }}
                ></div>

                {obstacles.map((obs) => (
                  <div
                    key={obs.id}
                    className={`obstacle ${obs.type}`}
                    style={{ left: `${obs.x}px` }}
                  ></div>
                ))}

                <div className="ground"></div>

                {gameOver && (
                  <div className="game-over-screen">
                    <div className="game-stats">
                      <h3>🎮 Game Over! 🎮</h3>
                      <p>Final Score: <span className="text-orange-400 font-bold">{Math.floor(score / 10)}</span></p>
                      <p>Level Reached: <span className="text-orange-400 font-bold">{difficulty}</span></p>
                      <p>Total Distance: <span className="text-orange-400 font-bold">{Math.floor(score / 100)}m</span></p>
                    </div>
                    <button
                      onClick={handleRestartGame}
                      className="bounce-btn bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl text-sm sm:text-base"
                    >
                      Play Again
                    </button>
                    <button
                      onClick={handleCloseGame}
                      className="bounce-btn bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl text-sm sm:text-base"
                    >
                      Close Game
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2 text-center">
                <p className="text-gray-700 font-semibold text-sm sm:text-base">
                  Press <span className="bg-yellow-200 px-2 py-1 rounded">SPACE</span> to Jump!
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Obstacles get faster and smaller spawns as you progress. Watch out for different sizes! ⚠️
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-orange-100 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default NotFound;