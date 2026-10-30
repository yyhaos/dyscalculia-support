import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="topbar">
      <a class="brand" href="#" aria-label="Understanding Dyscalculia home">
        <span class="brand-mark" aria-hidden="true">3</span>
        <span>Learning, through a different lens</span>
      </a>
      <span class="topbar-note">A project for curious minds</span>
    </header>

    <section class="hero" aria-labelledby="page-title">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> A HELLO-WORLD DEMO</p>
        <h1 id="page-title">Understanding Dyscalculia: <em>Learning Numbers Through a Different Lens</em></h1>
        <p class="intro">
          Numbers can be learned in many ways. This project will explore how we
          understand them—and how to make math learning more supportive for everyone.
        </p>
        <a class="button" href="#hello">Explore the demo <span aria-hidden="true">↓</span></a>
      </div>

      <div class="number-art" aria-label="Three dots representing the quantity three">
        <div class="art-label">ONE IDEA,<br />MANY WAYS TO SEE IT</div>
        <div class="dot dot-one"></div>
        <div class="dot dot-two"></div>
        <div class="dot dot-three"></div>
        <span class="art-number">3</span>
        <span class="art-caption">three · 3 · ● ● ●</span>
      </div>
    </section>

    <section class="hello-card" id="hello" aria-labelledby="hello-title">
      <div class="hello-icon" aria-hidden="true">✳</div>
      <div>
        <p class="eyebrow">THE FIRST STEP</p>
        <h2 id="hello-title">Hello, world!</h2>
        <p>
          Your site is up and running. The full learning experience is coming soon.
        </p>
      </div>
      <span class="status"><span></span> Demo ready</span>
    </section>

    <footer>
      <span>Understanding Dyscalculia</span>
      <span>Made for parents, educators, and students</span>
    </footer>
  </main>
`
