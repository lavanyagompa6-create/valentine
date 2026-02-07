/* MAIN APP */
const app = document.getElementById("app");

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);

/* PAGE 1 */
function startPage() {
  app.innerHTML = `
    <div class="card">
      <h2>Will you be my Valentine? 💕</h2>
      <button class="yes" onclick="giftPage()">Yes 😍</button>
      <button class="no" id="noBtn" onmouseover="moveNo()">No 😜</button>
    </div>
  `;
}
startPage();

function moveNo() {
  const no = document.getElementById("noBtn");
  no.style.left = Math.random() * 250 + "px";
  no.style.top = Math.random() * 250 + "px";
}

/* GIFTS PAGE */
function giftPage() {
  app.innerHTML = `
    <div class="card">
      <h2>Choose a Gift 🎁</h2>
      <button onclick="bossQuiz()">🎁 Gift 1</button>
      <button onclick="loveLetter()">💌 Gift 2</button>
      <button onclick="photos()">📸 Gift 3</button>
    </div>
  `;
}

/* QUIZ */
function bossQuiz() {
  app.innerHTML = `
    <div class="card">
      <h3>Who is the absolute boss in this relationship? 😌</h3>
      <button onclick="correct()">Obviously YOU 😍</button>
      <button onclick="wrong()">Me 😎</button>
      <button onclick="wrong()">My Mom 😅</button>
      <br><br>
      <button onclick="giftPage()">⬅ Back</button>
    </div>
  `;
}

function correct() {
  alert("Yay! 💖 You passed the test! You really love me 😍");
}

function wrong() {
  alert("Ooho 😜 please try again");
}

/* LOVE LETTER */
function loveLetter() {
  app.innerHTML = `
    <div class="card">
      <h3>💌 My Love Letter</h3>
      <p>
        Hey my love 💕<br><br>
        You are my happiness, my smile,
        my comfort and my forever 😘<br><br>
        No matter what, I choose you
        again and again ♾️<br><br>
        Happy Valentine’s Day baby 💖
      </p>
      <button onclick="giftPage()">⬅ Back</button>
    </div>
  `;
}

/* PHOTOS */
function photos() {
  app.innerHTML = `
    <div class="card">
      <h3>Our Memories 📸</h3>

      <<img src="photos/photo1.jpeg">
<img src="photos/photo2.jpeg">
<img src="photos/photo3.jpeg">
<img src="photos/photo4.jpeg">
<img src="photos/photo5.jpeg">
<img src="photos/photo6.jpeg">


      <br><br>
      <button onclick="finalPage()">Next 💖</button>
    </div>
  `;
}


/* FINAL PAGE */
function finalPage() {
  app.innerHTML = `
    <div class="card">
      <h1>Happy Valentine’s Day 💖</h1>
      <h3>My Baby 😘</h3>

      <img src="photos/photo7.jpeg" style="width:200px; border-radius:15px; margin:15px 0;">


      <p>
        i love you soo much chinnodu
        i miss you a lot baby
        i am waiting for you chudali ani undhi ninnu happy valentine's day baby
      </p>
    </div>
  `;
}
