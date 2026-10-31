import './style.css'

const sections = [
  {
    id: 'experience',
    number: '01',
    title: 'Experience',
    subtitle: 'When numbers feel unfamiliar',
    intro: '',
    items: [],
  },
  {
    id: 'theory',
    number: '02',
    title: 'How Do Children Learn Numbers?',
    subtitle: 'How do we learn numbers?',
    intro: '',
    items: [
      ['2.1', "Vygotsky’s Mediation Theory", 'Cultural tools', 'Language and symbols help people organize thought. Children learn how to use mathematical tools through social interaction.'],
      ['2.2', 'Making Sense of Numbers', 'Interactive concept map placeholder', 'Quantity · spoken number word · written number word · numeral · numerical meaning. Selectable connections will be added here.'],
      ['2.3', 'From Guided Learning to Independent Thinking', 'Guidance over time', 'Social interaction, internalization, and scaffolding describe how supported practice can lead toward independent use.'],
    ],
  },
  {
    id: 'dyscalculia',
    number: '03',
    title: 'Understanding Dyscalculia',
    subtitle: 'Different learners, different needs',
    intro: 'Dyscalculia is one way of describing persistent difficulty with aspects of learning mathematics.',
    items: [
      ['3.1', 'What Is Developmental Dyscalculia?', 'Definition and context', 'A persistent pattern of difficulty with numerical understanding and mathematical learning.'],
      ['3.2', 'Common Characteristics & Learning Needs', 'Clickable card placeholder', 'Number sense · symbol–quantity mapping · arithmetic fact retrieval · calculation fluency · mathematical reasoning.'],
      ['3.3', 'Every Learner Has a Unique Profile', 'Meet Alex', 'A fictional Grade 4 learner whose interests and existing abilities can inform supportive teaching. Strengths vary from person to person.'],
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
    </div>
    ${section.id === 'experience' ? `
      <article class="experience-feature" id="experience-1-1" aria-labelledby="experience-video-title">
        <div class="experience-prompt">
          <span class="card-number">1.1</span>
          <h3 id="experience-video-title">When Counting Becomes Frustrating</h3>
          <p>Watch this short clip of a mother helping her daughter learn to count.</p>
          <p>Counting may feel effortless to adults, but for a child, it can involve surprisingly complex cognitive processes.</p>
          <p class="reflection-question">What makes something so simple to us so challenging for a young learner?</p>
        </div>
        <div class="experience-video-wrap">
          <video class="experience-video" controls preload="metadata" playsinline aria-label="A parent helping a child count">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </article>
      <article class="hebrew-challenge" aria-labelledby="hebrew-title">
        <div class="challenge-heading">
          <span class="card-number">1.2</span>
          <h3 id="hebrew-title">Learning an Unfamiliar Number System</h3>
          <p>This activity uses Hebrew numerals: Hebrew letters are used as number symbols. Study how each symbol represents a quantity, then hide the guide and start the test when you are ready.</p>
        </div>
        <div class="guide-panel">
        <div class="hebrew-guide" id="hebrew-guide" aria-label="Hebrew numeral learning guide">
          <div class="hebrew-guide-item"><span class="hebrew-letter" lang="he" dir="rtl">&#x5D0;</span><span class="hebrew-dots" aria-label="one dot">&#x25CF;</span></div>
          <div class="hebrew-guide-item"><span class="hebrew-letter" lang="he" dir="rtl">&#x5D1;</span><span class="hebrew-dots" aria-label="two dots">&#x25CF; &#x25CF;</span></div>
          <div class="hebrew-guide-item"><span class="hebrew-letter" lang="he" dir="rtl">&#x5D2;</span><span class="hebrew-dots" aria-label="three dots">&#x25CF; &#x25CF; &#x25CF;</span></div>
          <div class="hebrew-guide-item"><span class="hebrew-letter" lang="he" dir="rtl">&#x5D3;</span><span class="hebrew-dots" aria-label="four dots">&#x25CF; &#x25CF; &#x25CF; &#x25CF;</span></div>
          <div class="hebrew-guide-item"><span class="hebrew-letter" lang="he" dir="rtl">&#x5D4;</span><span class="hebrew-dots" aria-label="five dots">&#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF;</span></div>
        </div>
        <div class="challenge-controls">
          <button class="button" id="toggle-hebrew-guide" type="button" aria-pressed="false">Hide the guide</button>
          <span class="challenge-status" id="hebrew-status" aria-live="polite">Study the symbols, then start the test.</span>
        </div>
        </div>
        <button class="button start-test" id="start-test" type="button">Start test</button>
        <div class="apple-test" id="apple-test" hidden>
          <div class="test-questions">
            <section class="test-question" aria-labelledby="apple-question-title">
              <h4 id="apple-question-title">How many apples are there?</h4>
              <img class="apple-image" src="/image.png" alt="Four green apples grouped together" />
              <fieldset class="hebrew-answers" data-answer="4">
                <legend class="sr-only">Choose the Hebrew numeral for the number of apples</legend>
                <label class="hebrew-answer"><input type="radio" name="apple-count" value="5" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D4;</span></label>
                <label class="hebrew-answer"><input type="radio" name="apple-count" value="2" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D1;</span></label>
                <label class="hebrew-answer"><input type="radio" name="apple-count" value="4" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D3;</span></label>
                <label class="hebrew-answer"><input type="radio" name="apple-count" value="1" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D0;</span></label>
                <label class="hebrew-answer"><input type="radio" name="apple-count" value="3" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D2;</span></label>
              </fieldset>
            </section>
            <section class="test-question" aria-labelledby="addition-title">
              <h4 id="addition-title">1 + 2 = ?</h4>
              <fieldset class="hebrew-answers" data-answer="3">
                <legend class="sr-only">Choose the Hebrew numeral for the answer</legend>
                <label class="hebrew-answer"><input type="radio" name="addition" value="1" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D0;</span></label>
                <label class="hebrew-answer"><input type="radio" name="addition" value="2" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D1;</span></label>
                <label class="hebrew-answer"><input type="radio" name="addition" value="3" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D2;</span></label>
                <label class="hebrew-answer"><input type="radio" name="addition" value="4" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D3;</span></label>
                <label class="hebrew-answer"><input type="radio" name="addition" value="5" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D4;</span></label>
              </fieldset>
            </section>
            <section class="test-question" aria-labelledby="subtraction-title">
              <h4 id="subtraction-title">5 &#x2212; 4 = ?</h4>
              <fieldset class="hebrew-answers" data-answer="1">
                <legend class="sr-only">Choose the Hebrew numeral for the answer</legend>
                <label class="hebrew-answer"><input type="radio" name="subtraction" value="1" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D0;</span></label>
                <label class="hebrew-answer"><input type="radio" name="subtraction" value="2" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D1;</span></label>
                <label class="hebrew-answer"><input type="radio" name="subtraction" value="3" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D2;</span></label>
                <label class="hebrew-answer"><input type="radio" name="subtraction" value="4" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D3;</span></label>
                <label class="hebrew-answer"><input type="radio" name="subtraction" value="5" /><span class="hebrew-letter" lang="he" dir="rtl">&#x5D4;</span></label>
              </fieldset>
            </section>
          </div>
        </div>
      </article>

      <article class="experience-reflection" id="experience-1-3" aria-labelledby="reflection-title">
        <span class="card-number">1.3</span>
        <h3 id="reflection-title">Why Was That Difficult?</h3>
        <p>You just completed three simple mathematical tasks:</p>
        <ul>
          <li><strong>Counting:</strong> How many apples were there?</li>
          <li><strong>Addition:</strong> 1 + 2 = ?</li>
          <li><strong>Subtraction:</strong> 5 &#x2212; 4 = ?</li>
        </ul>
        <p>You already knew how to count, add, and subtract. Yet <strong>replacing familiar numbers with unfamiliar symbols</strong> may have made these tasks more challenging.</p>
        <h4>What made the difference?</h4>
        <p>Think about what you had to do: recognize unfamiliar symbols, remember what they represented, and connect them to quantities and mathematical operations.</p>
        <p class="reflection-emphasis"><strong>Just one extra step, translating unfamiliar symbols into familiar numbers, may have made a simple task feel difficult.</strong></p>
        <h4>What About Children Who Are Still Learning to Count?</h4>
        <p>Young children are still developing the foundational knowledge that adults rely on automatically. They may need to learn what numbers mean before they can connect symbols to quantities and use them in calculations.</p>
        <p class="reflection-emphasis"><strong>If one unfamiliar step made counting difficult for you, imagine how challenging it can be for a child who is still learning the steps themselves.</strong></p>
      </article>
    ` : ''}
    ${section.items.length ? `<div class="outline-grid">
      ${section.items.map(([number, title]) => `
        <article class="outline-card" id="${number.replace('.', '-')}">
          <span class="card-number">${number}</span>
          <h3>${title}</h3>
        </article>
      `).join('')}
    </div>` : ''}
    ${section.id === 'dyscalculia' ? `
      <article class="dyscalculia-overview" aria-labelledby="dyscalculia-definition-title">
        <span class="card-number">3.1</span>
        <h3 id="dyscalculia-definition-title">What Is Developmental Dyscalculia?</h3>
        <p class="definition-lead">Developmental dyscalculia is a <strong>learning disability</strong> characterized by persistent difficulties in understanding numbers and developing mathematical skills. These difficulties can affect children's mathematical learning and everyday activities involving numbers (Government of Canada, n.d.).</p>
        <p>In clinical assessment, dyscalculia is understood within the broader diagnostic category of <em>Specific Learning Disorder with Impairment in Mathematics</em>. The <strong>DSM-5-TR</strong> uses the term <em>dyscalculia</em> to describe a particular pattern of mathematical difficulties within this category (American Psychiatric Association, 2022).</p>
        <h4>More Than Occasional Difficulty</h4>
        <p>Children develop mathematical skills at different rates. When difficulties persist despite appropriate support and significantly interfere with learning, a comprehensive assessment may be needed.</p>
        <p class="section-transition-question"><strong>What do these difficulties look like in everyday learning?</strong></p>
      </article>
    ` : ''}
    ${section.id === 'dyscalculia' ? `
      <section class="learning-needs" id="dyscalculia-3-2" aria-labelledby="learning-needs-title">
        <span class="card-number">3.2</span>
        <h3 id="learning-needs-title">Common Characteristics &amp; Learning Needs</h3>
        <p class="learning-needs-intro">The DSM-5-TR identifies several mathematical skill areas associated with Specific Learning Disorder with Impairment in Mathematics (American Psychiatric Association, 2022). Select a card to reveal a classroom example.</p>
        <div class="skill-grid">
          <article class="skill-card">
            <button class="skill-card-toggle" type="button" aria-expanded="false" aria-controls="skill-example-number-sense"><span>Number Sense</span><span class="skill-toggle-icon" aria-hidden="true">+</span></button>
            <p class="skill-description">Difficulty understanding quantities and numerical relationships.</p>
            <div class="skill-example" id="skill-example-number-sense" hidden><span>Classroom example</span><p>Struggling to recognize that 8 is greater than 5 without counting.</p></div>
          </article>
          <article class="skill-card">
            <button class="skill-card-toggle" type="button" aria-expanded="false" aria-controls="skill-example-arithmetic"><span>Arithmetic Fact Retrieval</span><span class="skill-toggle-icon" aria-hidden="true">+</span></button>
            <p class="skill-description">Difficulty recalling basic arithmetic facts automatically.</p>
            <div class="skill-example" id="skill-example-arithmetic" hidden><span>Classroom example</span><p>Repeatedly counting on fingers to solve 3 + 4.</p></div>
          </article>
          <article class="skill-card">
            <button class="skill-card-toggle" type="button" aria-expanded="false" aria-controls="skill-example-calculation"><span>Calculation Skills</span><span class="skill-toggle-icon" aria-hidden="true">+</span></button>
            <p class="skill-description">Difficulty performing calculations accurately or fluently.</p>
            <div class="skill-example" id="skill-example-calculation" hidden><span>Classroom example</span><p>Losing track of the steps when solving 27 + 15.</p></div>
          </article>
          <article class="skill-card">
            <button class="skill-card-toggle" type="button" aria-expanded="false" aria-controls="skill-example-reasoning"><span>Mathematical Reasoning</span><span class="skill-toggle-icon" aria-hidden="true">+</span></button>
            <p class="skill-description">Difficulty applying mathematical concepts to solve problems.</p>
            <div class="skill-example" id="skill-example-reasoning" hidden><span>Classroom example</span><p>Struggling to select the appropriate operation in a word problem.</p></div>
          </article>
        </div>
        <p class="learner-profile-note">Children may experience different combinations of difficulties, and the areas that need support can vary from learner to learner.</p>
        <p class="strengths-transition">Understanding challenges is only part of understanding a learner. <a href="#dyscalculia-3-3">What about their strengths?</a></p>
      </section>
    ` : ''}
    ${section.id === 'dyscalculia' ? `
      <section class="unique-profile" id="dyscalculia-3-3" aria-labelledby="unique-profile-title">
        <span class="card-number">3.3</span>
        <h3 id="unique-profile-title">Every Learner Has a Unique Profile</h3>
        <p class="profile-intro">Developmental dyscalculia affects children differently. A learner may find some mathematical skills difficult while showing relative strengths in other areas. Research describes varied profiles; it has not established one cognitive strength shared by all children with dyscalculia (Kaufmann et al., 2013).</p>
        <p class="profile-intro">A strengths-based approach starts by identifying each learner's individual abilities and interests, then using them to support learning.</p>
        <article class="alex-profile" aria-labelledby="alex-profile-title">
          <div class="alex-profile-heading">
            <div><span class="profile-label">Fictional example</span><h4 id="alex-profile-title">Meet Alex</h4></div>
            <span class="grade-label">Grade 4 · Dyscalculia</span>
          </div>
          <div class="alex-profile-columns">
            <section class="alex-profile-group alex-strengths" aria-labelledby="alex-strengths-title">
              <h5 id="alex-strengths-title">Strengths</h5>
              <ul><li>Enjoys drawing and visual activities.</li><li>Communicates ideas clearly through verbal explanations.</li></ul>
            </section>
            <section class="alex-profile-group alex-needs" aria-labelledby="alex-needs-title">
              <h5 id="alex-needs-title">Learning needs</h5>
              <ul><li>Difficulty recalling basic arithmetic facts.</li><li>Difficulty understanding place value.</li></ul>
            </section>
          </div>
          <p class="fictional-note">Alex is a fictional learner. This profile is one example; strengths and learning needs vary among children with dyscalculia.</p>
        </article>
        <p class="profile-ending">How can we build on Alex's strengths to support mathematical learning?</p>
      </section>
    ` : ''}
    ${section.id === 'resources' ? `
      <section class="reference-list" aria-labelledby="reference-list-title">
        <h3 id="reference-list-title">References</h3>
        <ol>
          <li>American Psychiatric Association. (2022). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed., text rev.). <a href="https://doi.org/10.1176/appi.books.9780890425787" target="_blank" rel="noreferrer">https://doi.org/10.1176/appi.books.9780890425787</a></li>
          <li>Kaufmann, L., Mazzocco, M. M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., Henik, A., Jordan, N. C., Karmiloff-Smith, A., Kucian, K., Rubinsten, O., Sz&#x171;cs, D., Shalev, R., &amp; Nuerk, H.-C. (2013). Dyscalculia from a developmental and differential perspective. <em>Frontiers in Psychology, 4</em>, Article 516. <a href="https://doi.org/10.3389/fpsyg.2013.00516" target="_blank" rel="noreferrer">https://doi.org/10.3389/fpsyg.2013.00516</a></li>
          <li>Government of Canada. (n.d.). <em>Annex: Understanding disabilities</em>. <a href="https://www.canada.ca/en/employment-social-development/programs/accessible-canada-regulations-guidance/consultation/key-concepts.html" target="_blank" rel="noreferrer">https://www.canada.ca/en/employment-social-development/programs/accessible-canada-regulations-guidance/consultation/key-concepts.html</a></li>
        </ol>
      </section>
    ` : ''}
    ${section.id === 'theory' ? `
      <article class="mediation-demo" data-focus="social" aria-labelledby="mediation-title">
        <div class="mediation-heading">
          <span class="card-number">2.1</span>
          <h3 id="mediation-title">Learning Through Mediation</h3>
          <p class="mediation-theory">Vygotsky's Sociocultural Theory</p>
          <p>Language and symbols help organize thought. Children learn to use these cultural tools through social interaction.</p>
        </div>
        <div class="mediation-scene">
          <svg class="mediation-illustration" viewBox="0 0 900 300" role="img" aria-labelledby="mediation-svg-title mediation-svg-desc">
            <title id="mediation-svg-title">An adult helps a child learn the word one</title>
            <desc id="mediation-svg-desc">A mother points to one apple and says one while a child watches and listens.</desc>
            <rect x="1" y="1" width="898" height="298" rx="12" fill="#fbfaf6" stroke="#dedfd5" />
            <path d="M90 246 H810" stroke="#d8d9cf" stroke-width="3" stroke-linecap="round" />
            <g class="scene-adult">
              <circle cx="190" cy="113" r="39" fill="#e7b995" />
              <path d="M151 109 Q151 67 191 68 Q228 70 230 111 Q212 88 185 89 Q169 103 151 109" fill="#59453e" />
              <path d="M144 245 Q146 165 190 160 Q235 165 240 245Z" fill="#78927c" />
              <path d="M216 174 Q273 150 339 153 L417 142" fill="none" stroke="#e7b995" stroke-width="19" stroke-linecap="round" />
              <circle cx="418" cy="142" r="10" fill="#e7b995" />
              <text x="190" y="274" text-anchor="middle" fill="#65716b" font-size="17">Mother</text>
            </g>
            <g class="scene-word">
              <rect x="300" y="34" width="142" height="65" rx="20" fill="#e5ecdf" />
              <path d="M361 98 L375 112 L388 98" fill="#e5ecdf" />
              <text x="371" y="76" text-anchor="middle" fill="#345b40" font-family="Georgia,serif" font-size="30">one</text>
            </g>
            <g class="scene-apple">
              <path d="M484 157 C455 143 433 165 438 197 C442 225 461 239 484 232 C508 240 528 222 532 195 C537 166 514 144 484 157Z" fill="#c9564b" />
              <path d="M484 158 Q482 142 491 132" fill="none" stroke="#72533f" stroke-width="6" stroke-linecap="round" />
              <path d="M488 143 Q510 128 520 141 Q509 154 488 149Z" fill="#78927c" />
              <text x="485" y="274" text-anchor="middle" fill="#65716b" font-size="17">One apple</text>
            </g>
            <g class="scene-child">
              <circle cx="704" cy="118" r="37" fill="#dcae8e" />
              <path d="M669 111 Q671 75 704 77 Q739 78 742 113 Q721 97 693 98Z" fill="#493f3c" />
              <path d="M653 245 Q655 166 704 163 Q754 167 757 245Z" fill="#8c9caf" />
              <text x="704" y="274" text-anchor="middle" fill="#65716b" font-size="17">Child</text>
            </g>
            <path class="mediation-connector" d="M418 137 C446 118 462 119 477 145" fill="none" stroke="#55745f" stroke-width="3" stroke-dasharray="7 7" />
          </svg>
        </div>
        <div class="mediation-interaction">
          <div class="mediation-tabs" role="group" aria-label="Explore how learning is supported">
            <button class="mediation-tab is-active" type="button" data-mediation="social" aria-pressed="true">Social Interaction</button>
            <button class="mediation-tab" type="button" data-mediation="mediating" aria-pressed="false">Mediation</button>
          </div>
          <p class="mediation-explanation" id="mediation-explanation" aria-live="polite">The mother and child share attention around the apple. Through this social interaction, the child receives guidance from another person.</p>
        </div>
      </article>
      <article class="number-map" aria-labelledby="number-map-title" data-active="arabic" data-language="english">
        <div class="number-map-heading">
          <span class="card-number">2.2</span>
          <h3 id="number-map-title">Making Sense of Numbers</h3>
          <p>One quantity can be represented in different ways. Select a representation to explore how it connects to the meaning of one.</p>
        </div>
        <div class="number-map-actions"><button class="button language-toggle" id="toggle-number-language" type="button" aria-pressed="false">Hebrew!</button></div>
        <div class="number-map-grid">
          <svg class="map-connections" viewBox="0 0 1000 375" preserveAspectRatio="none" aria-hidden="true">
            <line class="map-connection is-active" data-link="arabic" x1="500" y1="38" x2="167" y2="63" />
            <line class="map-connection" data-link="written" x1="500" y1="38" x2="833" y2="63" />
            <line class="map-connection" data-link="spoken" x1="500" y1="38" x2="167" y2="188" />
            <line class="map-connection" data-link="quantity" x1="500" y1="38" x2="833" y2="188" />
            <line class="map-connection" data-link="physical" x1="500" y1="38" x2="500" y2="253" />
          </svg>
          <button class="representation-node node-arabic" type="button" data-representation="arabic" aria-pressed="true">
            <span class="representation-label" id="arabic-label">Arabic Numeral</span><strong class="representation-value" id="arabic-value">1</strong>
          </button>
          <button class="representation-node node-written" type="button" data-representation="written" aria-pressed="false">
            <span class="representation-label">Written Word</span><strong class="representation-value" id="written-value">one</strong>
          </button>
          <button class="representation-node node-spoken" type="button" data-representation="spoken" aria-pressed="false">
            <span class="representation-label">Spoken Word <span class="audio-hint">click to hear</span></span><strong class="representation-value" id="spoken-value">/w&#x028C;n/ <span aria-hidden="true">&#x1F50A;</span></strong>
          </button>
          <div class="number-map-center" aria-label="The meaning of one">Meaning of <strong>one</strong></div>
          <button class="representation-node node-quantity" type="button" data-representation="quantity" aria-pressed="false">
            <span class="representation-label">Quantity Concept</span><strong class="representation-value">The mental idea of one</strong>
          </button>
          <button class="representation-node node-physical" type="button" data-representation="physical" aria-pressed="false">
            <span class="representation-label">Physical Quantity</span><strong class="representation-value"><span aria-hidden="true">&#x1F34E;</span> one apple</strong>
          </button>
        </div>
        <div class="representation-detail" aria-live="polite">
          <p id="representation-explanation">The numeral 1 is a visual Arabic symbol for the quantity one.</p>
        </div>
        <div class="hebrew-mode-reflection" id="hebrew-mode-reflection" aria-labelledby="number-reflection-title" hidden>
          <h4 id="number-reflection-title">What Happens When the Symbols Change?</h4>
          <p>Think back to the Hebrew numeral challenge. You already understood quantities and knew how to count and calculate. Changing the familiar numerical symbols added just one extra step, yet even simple mathematical tasks may have felt more difficult.</p>
          <p>Now imagine a young child learning numbers for the first time. Their understanding of quantities is still developing, and the connections between number words and symbols may be unfamiliar.</p>
          <p><strong>If changing just one part of the system made mathematics challenging for you, imagine how much a child has to learn while building the entire system.</strong></p>
          <p>This helps us understand why learning to count can require considerable effort and support.</p>
        </div>
        <div class="number-model-note">
          <p class="representation-learning">Learning numbers involves building connections between different representations of numerical information. For example, children learn to associate the symbol "1" and the spoken word "one" with a quantity of one.</p>
          <p class="representation-note">Dehaene's (1992) Triple-Code Model describes three forms of numerical representation: visual Arabic, verbal, and analog magnitude. The interactive diagram expands these three codes into five elements to illustrate how children encounter numbers in everyday learning.</p>
          <p class="map-citation">Dehaene, S. (1992). Varieties of numerical abilities. <em>Cognition, 44</em>(1-2), 1-42. <a href="https://www.unicog.org/publications/Dehaene_VarietiesOfNumericalAbilities_Cognition_1992.pdf" target="_blank" rel="noreferrer">Read the original paper (PDF)</a>.</p>
        </div>
      </article>
      <article class="internalization-section" aria-labelledby="internalization-title">
        <span class="card-number">2.3</span>
        <h3 id="internalization-title">From Guided Learning to Independent Thinking</h3>
        <p>According to Vygotsky, children gradually internalize knowledge and skills through social interaction and guided practice.</p>
        <p>For example, a child may initially need an adult to help them count objects. Over time, the child learns to count independently, relying less on external guidance.</p>
        <p>This process is called <strong>internalization</strong>.</p>
        <p>However, children develop these skills at different rates, and some may need additional support along the way.</p>
      </article>
      <p class="theory-bridge">As children develop these connections, some may experience persistent difficulties in learning and using numerical information. <a href="#dyscalculia">Let's explore developmental dyscalculia.</a></p>
    ` : ''}
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

document.querySelectorAll('.skill-card-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true'
    const example = document.getElementById(button.getAttribute('aria-controls'))
    button.setAttribute('aria-expanded', String(!isExpanded))
    example.hidden = isExpanded
    button.querySelector('.skill-toggle-icon').textContent = isExpanded ? '+' : '-'
  })
})

document.querySelectorAll('.mediation-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const isSocial = tab.dataset.mediation === 'social'
    document.querySelector('.mediation-demo').dataset.focus = isSocial ? 'social' : 'mediating'
    document.querySelectorAll('.mediation-tab').forEach((button) => {
      const isActive = button === tab
      button.classList.toggle('is-active', isActive)
      button.setAttribute('aria-pressed', String(isActive))
    })
    document.querySelector('#mediation-explanation').textContent = isSocial
      ? 'The mother and child share attention around the apple. Through this social interaction, the child receives guidance from another person.'
      : 'The spoken word "one" acts as a cultural tool. It mediates learning by helping the child connect language with the quantity.'
  })
})

const representationDetails = {
  english: {
    arabic: 'The numeral 1 is a visual Arabic symbol for the quantity one.',
    written: 'The written number word one represents the same quantity using letters.',
    spoken: 'The spoken word one represents the quantity through language. Select it to hear the word.',
    quantity: 'The quantity concept is the mental understanding of one item, independent of how it is shown or named.',
    physical: 'One apple is a real object that gives the quantity a visible, countable form.'
  },
  hebrew: {
    arabic: 'The Hebrew numeral \u05D0\u05F3 represents the same quantity as the Arabic numeral 1.',
    written: 'The Hebrew word \u05D0\u05D7\u05D3 (echad) means one.',
    spoken: 'The spoken Hebrew word echad represents the same quantity. Select it to hear the word if a Hebrew voice is available.',
    quantity: 'The quantity concept remains the mental understanding of one item, independent of how it is shown or named.',
    physical: 'The single apple still represents the same quantity.'
  }
}

const numberMap = document.querySelector('.number-map')
const languageToggle = document.querySelector('#toggle-number-language')

languageToggle.addEventListener('click', () => {
  const isHebrew = numberMap.dataset.language !== 'hebrew'
  numberMap.dataset.language = isHebrew ? 'hebrew' : 'english'
  document.querySelector('#hebrew-mode-reflection').hidden = !isHebrew
  languageToggle.setAttribute('aria-pressed', String(isHebrew))
  document.querySelector('#arabic-label').textContent = isHebrew ? 'Hebrew Numeral' : 'Arabic Numeral'
  document.querySelector('#arabic-value').innerHTML = isHebrew ? '<span lang="he" dir="rtl">&#x5D0;&#x5F3;</span>' : '1'
  document.querySelector('#written-value').innerHTML = isHebrew ? '<span lang="he" dir="rtl">&#x5D0;&#x5D7;&#x5D3;</span>' : 'one'
  document.querySelector('#spoken-value').innerHTML = isHebrew ? 'echad <span aria-hidden="true">&#x1F50A;</span>' : '/w&#x028C;n/ <span aria-hidden="true">&#x1F50A;</span>'
  const active = numberMap.dataset.active
  document.querySelector('#representation-explanation').textContent = representationDetails[numberMap.dataset.language][active]
})

document.querySelectorAll('.representation-node').forEach((node) => {
  node.addEventListener('click', () => {
    const representation = node.dataset.representation
    numberMap.dataset.active = representation
    document.querySelectorAll('.representation-node').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === node))
    })
    document.querySelectorAll('.map-connection').forEach((line) => {
      line.classList.toggle('is-active', line.dataset.link === representation)
    })
    const language = numberMap.dataset.language
    document.querySelector('#representation-explanation').textContent = representationDetails[language][representation]
    if (representation === 'spoken') {
      const isHebrew = language === 'hebrew'
      if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
        const utterance = new SpeechSynthesisUtterance(isHebrew ? 'echad' : 'one')
        if (isHebrew) {
          utterance.lang = 'he-IL'
          const hebrewVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith('he'))
          if (hebrewVoice) utterance.voice = hebrewVoice
          else document.querySelector('#representation-explanation').textContent = 'The word is echad. This browser does not have a Hebrew speech voice available.'
        } else {
          utterance.lang = 'en-US'
        }
        window.speechSynthesis.cancel()
        if (!isHebrew || utterance.voice) window.speechSynthesis.speak(utterance)
      } else {
        document.querySelector('#representation-explanation').textContent = isHebrew
          ? 'The word is echad. Audio playback is not supported in this browser.'
          : 'The spoken word one represents the quantity through language. Audio playback is not supported in this browser.'
      }
    }
  })
})

const guideToggle = document.querySelector('#toggle-hebrew-guide')
const hebrewGuide = document.querySelector('#hebrew-guide')
const hebrewStatus = document.querySelector('#hebrew-status')
const startTest = document.querySelector('#start-test')
const appleTest = document.querySelector('#apple-test')
const hebrewChallenge = document.querySelector('.hebrew-challenge')

guideToggle.addEventListener('click', () => {
  const isHidden = hebrewGuide.hidden
  hebrewGuide.hidden = !isHidden
  guideToggle.textContent = isHidden ? 'Hide the guide' : 'Show the guide'
  guideToggle.setAttribute('aria-pressed', String(!isHidden))
  hebrewStatus.textContent = isHidden
    ? 'The guide is visible. Take a moment to study the symbols.'
    : 'The guide is hidden. Continue the test when you are ready.'
  if (isHidden) {
    requestAnimationFrame(() => hebrewGuide.scrollIntoView({ behavior: 'smooth', block: 'center' }))
  }
})

startTest.addEventListener('click', () => {
  hebrewChallenge.classList.add('is-testing')
  hebrewGuide.hidden = true
  guideToggle.textContent = 'Show the guide'
  guideToggle.setAttribute('aria-pressed', 'true')
  appleTest.hidden = false
  startTest.hidden = true
  hebrewStatus.textContent = 'Choose the Hebrew numeral that answers each question.'
})

appleTest.querySelectorAll('.hebrew-answers').forEach((question) => {
  question.addEventListener('change', (event) => {
    const selected = event.target
    const expected = question.dataset.answer
    const currentOption = selected.closest('.hebrew-answer')
    currentOption.classList.remove('is-correct', 'is-incorrect')
    currentOption.classList.add(selected.value === expected ? 'is-correct' : 'is-incorrect')
    hebrewStatus.textContent = selected.value === expected ? 'Correct!' : 'Not quite. Try another symbol.'
  })
})
