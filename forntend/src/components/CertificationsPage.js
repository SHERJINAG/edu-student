import React, { useRef, useState, useEffect } from "react";
import "./CertificationsPage.css";
import { useNavigate } from "react-router-dom";

const CertificationsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("drawing");
  const [quote, setQuote] = useState("");
  const [joke, setJoke] = useState("");
  const [currentColor, setCurrentColor] = useState("#000000");
  const [isErasing, setIsErasing] = useState(false);
  const [drawingMode, setDrawingMode] = useState("pencil"); // Modes: pencil, rectangle, circle
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

 const motivationalQuotes = [
  "Believe you can, and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Dream big and dare to fail.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It always seems impossible until it’s done.",
  "What we think, we become.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Opportunities don't happen, you create them.",
  "You miss 100% of the shots you don’t take.",
  "Don’t limit your challenges. Challenge your limits.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "The way to get started is to quit talking and begin doing.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "The best way to predict the future is to create it.",
  "Success is not in what you have, but who you are.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "It’s not about how bad you want it, it’s about how hard you’re willing to work for it.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The only place where success comes before work is in the dictionary.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Act as if what you do makes a difference. It does.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Your life does not get better by chance, it gets better by change.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "It does not matter how slowly you go as long as you do not stop."
];


  const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the math book look sad? It had too many problems.",
  "Why did the computer get cold? It left its Windows open!",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "What’s a skeleton’s least favorite room? The living room!",
  "Why don’t programmers like nature? It has too many bugs.",
  "Why was the math teacher suspicious of prime numbers? Because they couldn't be divided.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why was the computer so good at its job? Because it had a lot of cache.",
  "What do you call fake spaghetti? An impasta!",
  "Why was the broom late? It swept in!",
  "Why did the coffee file a police report? It got mugged!",
  "What do you call cheese that isn’t yours? Nacho cheese!",
  "Why couldn’t the bicycle stand up by itself? It was two-tired!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "How does a penguin build its house? Igloos it together!",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "Why can’t you trust an atom? Because they make up everything.",
  "What did one ocean say to the other ocean? Nothing, they just waved.",
  "Why don’t oysters donate to charity? Because they are shellfish.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why was the math book unhappy? It had too many problems.",
  "What’s a skeleton’s favorite instrument? The trom-bone!",
  "Why do elephants never use computers? They’re afraid of the mouse.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What’s a vampire’s favorite fruit? A necktarine.",
  "What did one hat say to the other? Stay here, I'm going on ahead!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];


  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setQuote(motivationalQuotes[randomIndex]);
  };

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  // Initialize canvas and set up context
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    ctxRef.current = ctx;
  }, [currentColor]);

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    startX.current = e.clientX - rect.left;
    startY.current = e.clientY - rect.top;
    isDrawing.current = true;

    if (drawingMode === "pencil") {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(startX.current, startY.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (drawingMode === "pencil") {
      ctxRef.current.lineTo(x, y);
      ctxRef.current.stroke();
    } else if (drawingMode === "rectangle") {
      // Update rectangle preview as mouse moves
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.strokeRect(startX.current, startY.current, x - startX.current, y - startY.current);
    } else if (drawingMode === "circle") {
      // Update circle preview as mouse moves
      const radius = Math.sqrt(Math.pow(x - startX.current, 2) + Math.pow(y - startY.current, 2));
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.beginPath();
      ctxRef.current.arc(startX.current, startY.current, radius, 0, 2 * Math.PI);
      ctxRef.current.stroke();
    }
  };

  const handleMouseUp = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (drawingMode === "rectangle") {
      const width = x - startX.current;
      const height = y - startY.current;
      ctxRef.current.strokeRect(startX.current, startY.current, width, height);
    } else if (drawingMode === "circle") {
      const radius = Math.sqrt(
        Math.pow(x - startX.current, 2) + Math.pow(y - startY.current, 2)
      );
      ctxRef.current.beginPath();
      ctxRef.current.arc(startX.current, startY.current, radius, 0, 2 * Math.PI);
      ctxRef.current.stroke();
    }

    isDrawing.current = false;
    if (drawingMode === "pencil") {
      ctxRef.current.closePath();
    }
  };

  const handleTouchStart = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    startX.current = e.touches[0].clientX - rect.left;
    startY.current = e.touches[0].clientY - rect.top;
    isDrawing.current = true;

    if (drawingMode === "pencil") {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(startX.current, startY.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDrawing.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    if (drawingMode === "pencil") {
      ctxRef.current.lineTo(x, y);
      ctxRef.current.stroke();
    } else if (drawingMode === "rectangle") {
      // Update rectangle preview as touch moves
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.strokeRect(startX.current, startY.current, x - startX.current, y - startY.current);
    } else if (drawingMode === "circle") {
      // Update circle preview as touch moves
      const radius = Math.sqrt(Math.pow(x - startX.current, 2) + Math.pow(y - startY.current, 2));
      ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctxRef.current.beginPath();
      ctxRef.current.arc(startX.current, startY.current, radius, 0, 2 * Math.PI);
      ctxRef.current.stroke();
    }
  };

  const handleTouchEnd = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.changedTouches[0].clientX - rect.left;
    const y = e.changedTouches[0].clientY - rect.top;

    if (drawingMode === "rectangle") {
      const width = x - startX.current;
      const height = y - startY.current;
      ctxRef.current.strokeRect(startX.current, startY.current, width, height);
    } else if (drawingMode === "circle") {
      const radius = Math.sqrt(
        Math.pow(x - startX.current, 2) + Math.pow(y - startY.current, 2)
      );
      ctxRef.current.beginPath();
      ctxRef.current.arc(startX.current, startY.current, radius, 0, 2 * Math.PI);
      ctxRef.current.stroke();
    }

    isDrawing.current = false;
    if (drawingMode === "pencil") {
      ctxRef.current.closePath();
    }
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
    ctxRef.current.strokeStyle = !isErasing ? "#FFFFFF" : currentColor; // White for eraser, current color for drawing
  };

  return (
    <div className="certifications-container">
      <header className="certifications-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
        <div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      <div className="tabs">
        <button onClick={() => setActiveTab("drawing")}>Whiteboard</button>
        <button onClick={() => setActiveTab("motivationalQuotes")}>
          Motivational Quotes
        </button>
        <button onClick={() => setActiveTab("jokes")}>Tell a Joke</button>
      </div>

      <div className="certifications-content">
        {activeTab === "drawing" && (
          <div className="drawing-board">
            <h2>Whiteboard</h2>
            <canvas
              id="whiteboard"
              ref={canvasRef}
              width="800"
              height="400"
              style={{
                border: "1px solid #ccc",
                cursor: isErasing ? "crosshair" : "pointer",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            ></canvas>
            <div className="tools">
              <label>
                Pencil Color:
                <input
                  type="color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                />
              </label>
              <button onClick={toggleEraser}>{isErasing ? "Stop Eraser" : "Start Eraser"}</button>
              <button onClick={clearCanvas}>Clear</button>
              <button onClick={() => setDrawingMode("rectangle")}>Rectangle</button>
              <button onClick={() => setDrawingMode("circle")}>Circle</button>
              <button onClick={() => setDrawingMode("pencil")}>Pencil</button>
            </div>
          </div>
        )}

        {activeTab === "motivationalQuotes" && (
          <div className="motivational-quotes">
            <h2>Motivational Quote</h2>
            <p>{quote}</p>
            <button onClick={getRandomQuote}>Get Quote</button>
          </div>
        )}

        {activeTab === "jokes" && (
          <div className="jokes">
            <h2>Joke</h2>
            <p>{joke}</p>
            <button onClick={getRandomJoke}>Get Joke</button>
          </div>
        )}
      </div>
<footer className="certifications-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CertificationsPage;
