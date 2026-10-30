import './style.css'

const sections = [
  {
    id: 'experience',
    number: '01',
    title: 'Experience',
    subtitle: 'When numbers feel unfamiliar',
    intro: '',
    items: [
      ['1.1', 'When Counting Becomes Frustrating'],
      ['1.2', 'Learning an Unfamiliar Number System'],
      ['1.3', 'Why Was That Difficult?'],
    ],
  },
  {
    id: 'theory',
    number: '02',
    title: 'Theory',
    subtitle: 'How do we learn numbers?',
    intro: '',
    items: [
      ['2.1', "Vygotsky’s Mediation Theory", 'Cultural tools', 'Language and symbols help people organize thought. Children learn how to use mathematical tools through social interaction.'],
      ['2.2', 'Representations of Numbers', 'Interactive concept map placeholder', 'Quantity · spoken number word · written number word · numeral · numerical meaning. Selectable connections will be added here.'],
      ['2.3', 'From Social Learning to Internalization', 'Guidance over time', 'Social interaction, internalization, and scaffolding describe how supported practice can lead toward independent use.'],
    ],
  },
  {
    id: 'dyscalculia',
    number: '03',
    title: 'Understanding Dyscalculia',
    subtitle: 'Different learners, different needs',
    intro: 'Dyscalculia is one way of describing persistent difficulty with aspects of learning mathematics.',
    items: [
      ['3.1', 'What Is Dyscalculia?', 'Definition and context', 'Introduce the relationship to Specific Learning Disorder with Impairment in Mathematics, while recognizing individual differences.'],
      ['3.2', 'Common Characteristics', 'Clickable card placeholder', 'Number sense · symbol–quantity mapping · arithmetic fact retrieval · calculation fluency · mathematical reasoning.'],
      ['3.3', 'Every Learner Has Strengths', 'Meet Alex', 'A fictional Grade 4 learner whose interests and existing abilities can inform supportive teaching. Strengths vary from person to person.'],
    ],
  },
  {
    id: 'support',
    number: '04',
    title: 'Supporting Learners',
    subtitle: 'Make learning visible and accessible',
    intro: 'A supportive classroom offers clear explanations, useful representations, and flexible ways to participate.',
    items: [
      ['4.1', 'Practical Teaching Strategies', 'CRA · Explicit instruction · Visual models', 'Move between concrete materials, visual representations, and mathematical symbols; model ideas and provide guided practice.'],
      ['4.2', 'Universal Design for Learning', 'Multiple ways to learn', 'Offer multiple means of representation, engagement, and action and expression.'],
      ['4.3', 'Differentiated Instruction', 'Responsive support', 'Adjust tasks to current understanding, break learning into supported steps, and adapt help as learners progress.'],
      ['4.4', 'Applying Strategies to Alex', 'Learning need → strength → strategy', 'Example: Alex enjoys drawing and needs support with place value. Drawn tens-and-ones models can connect that interest to the concept.'],
    ],
  },
  {
    id: 'resources',
    number: '05',
    title: 'Resources',
    subtitle: 'Continue the conversation',
    intro: 'Starting points for educators and families, with a reference list to support the ideas on this page.',
    items: [
      ['5.1', 'For Educators', 'Organizations and guidance', 'Learning Disabilities Association of Ontario (LDAO) · LD@school · CAST UDL Guidelines.'],
      ['5.2', 'For Families', 'Finding support', 'Family guides, practical math activities, and information about seeking assessment and school support.'],
      ['5.3', 'References', 'Sources and acknowledgements', 'APA 7 references, video source and usage notes, and sources for research-based statements will be collected here.'],
    ],
  },
]

const sectionMarkup = sections.map((section) => `
  <section class="content-section" id="${section.id}" aria-labelledby="${section.id}-title">
    <div class="section-heading">
      <p class="eyebrow">PART ${section.number}</p>
      <div>
        <h2 id="${section.id}-title">${section.title}</h2>
      </div>
      ${section.intro ? `<p class="section-intro">${section.intro}</p>` : ''}
    </div>
    <div class="outline-grid">
      ${section.items.map(([number, title]) => `
        <article class="outline-card">
          <span class="card-number">${number}</span>
          <h3>${title}</h3>
        </article>
      `).join('')}
    </div>
  </section>
`).join('')

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="topbar">
      <a class="brand" href="#top">APD1281H-F-LEC7130-20269</a>
      <div class="topbar-meta">
        <span>Term: 2026 Fall</span>
        <span>Author: Yuhao Yuan</span>
        <span>Teacher: <strong>Katie Maxwell, EdD.</strong> · Sessional Lecturer</span>
      </div>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="page-title">
        <div class="hero-copy">
          <h1 id="page-title">Understanding Dyscalculia: <em>Learning Numbers Through a Different Lens</em></h1>
          <p class="intro">An interactive introduction to the complexity of learning number concepts, understanding dyscalculia, and supporting learners through their strengths.</p>
          <a class="button" href="#experience">Begin exploring <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <nav class="section-nav" aria-label="Main navigation">
        ${sections.map(({ id, number, title }) => `<a href="#${id}"><span>${number}</span>${title}</a>`).join('')}
      </nav>

      ${sectionMarkup}
    </main>

    <footer><span>Understanding Dyscalculia</span><a href="#top">Back to top ↑</a></footer>
  </div>
`
