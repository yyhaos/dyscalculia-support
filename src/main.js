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
    intro: 'Trusted starting points for educators, families, and students, followed by the academic and policy references used throughout this page.',
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
            <source src="${import.meta.env.BASE_URL}video.mp4" type="video/mp4" />
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
              <img class="apple-image" src="${import.meta.env.BASE_URL}image.png" alt="Four green apples grouped together" />
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
    ${section.items.length && section.id !== 'resources' ? `<div class="outline-grid">
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
    ${section.id === 'support' ? `
      <section class="support-topic" id="support-4-1" aria-labelledby="support-41-title">
        <span class="card-number">4.1</span>
        <h3 id="support-41-title">Practical Teaching Strategies</h3>
        <p class="support-intro">Inclusive mathematics teaching gives the whole class a shared learning goal, with flexible ways for students to take part. These evidence-informed approaches make concepts visible and support meaningful participation (Fuchs et al., 2021).</p>
        <article class="strategy-feature" aria-labelledby="cra-title">
          <div class="strategy-heading"><h4 id="cra-title">Concrete-Representational-Abstract (CRA)</h4><p>In one shared class lesson, students explore the same addition, <strong>23 + 14 = 37</strong>, using objects, drawings, or symbols. The class connects each representation to the same tens-and-ones relationship. Students can use blocks, drawing, explanation, or notation as supports; no representation is reserved for a particular learner.</p></div>
          <div class="stage-tabs" role="group" aria-label="Choose a CRA representation">
            <button class="stage-tab is-active" type="button" data-cra-stage="concrete" aria-pressed="true">1. Concrete</button>
            <button class="stage-tab" type="button" data-cra-stage="representational" aria-pressed="false">2. Representational</button>
            <button class="stage-tab" type="button" data-cra-stage="abstract" aria-pressed="false">3. Abstract</button>
          </div>
          <div class="cra-stage" data-cra-panel="concrete" aria-live="polite">
            <div class="cra-models">
              <div class="base-ten-set"><strong>23</strong><div class="base-ten-pieces" aria-label="Two tens rods and three unit cubes"><i class="ten-rod"></i><i class="ten-rod"></i><span class="unit-cubes"><i></i><i></i><i></i></span></div><span>2 tens + 3 ones</span></div><b class="cra-plus" aria-label="plus">+</b>
              <div class="base-ten-set"><strong>14</strong><div class="base-ten-pieces" aria-label="One tens rod and four unit cubes"><i class="ten-rod"></i><span class="unit-cubes"><i></i><i></i><i></i><i></i></span></div><span>1 ten + 4 ones</span></div><span class="cra-equals" aria-hidden="true">=</span><div class="base-ten-total"><strong>37</strong><span>3 tens + 7 ones</span></div>
            </div>
            <p>As a class, combine the blocks: 2 tens and 1 ten make 3 tens; 3 ones and 4 ones make 7 ones. Students can build, explain, sketch, or observe the model.</p>
          </div>
          <div class="cra-stage" data-cra-panel="representational" hidden aria-live="polite">
            <div class="drawn-models"><div><strong>23</strong><span class="drawn-tens" aria-label="two tens">|| ||</span><span class="drawn-ones">&#x25CF; &#x25CF; &#x25CF;</span></div><b>+</b><div><strong>14</strong><span class="drawn-tens" aria-label="one ten">||</span><span class="drawn-ones">&#x25CF; &#x25CF; &#x25CF; &#x25CF;</span></div><b>=</b><div><strong>37</strong><span class="drawn-tens" aria-label="three tens">|| || ||</span><span class="drawn-ones">&#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF;</span></div></div>
            <p>Drawings preserve the same tens-and-ones structure. Students can sketch the groups, annotate a partner's drawing, or describe what they notice.</p>
          </div>
          <div class="cra-stage" data-cra-panel="abstract" hidden aria-live="polite"><div class="abstract-equation" aria-label="Twenty-three plus fourteen equals thirty-seven">23 + 14 = 37</div><p>The written equation uses numerals and an operation sign to express the same quantity relationship.</p></div>
        </article>
        <article class="strategy-feature explicit-strategy" aria-labelledby="explicit-title">
          <div class="strategy-heading"><h4 id="explicit-title">Guided Number-Line Counting</h4><p>The teacher demonstrates how to solve addition problems using a number line. Students then practise with guidance before gradually applying the strategy independently.</p></div>
          <p class="stage-sequence"><strong>Teacher Modeling &rarr; Guided Practice &rarr; Independent Practice</strong></p>
          <div class="instruction-tabs" role="group" aria-label="Explore stages of number-line instruction"><button class="instruction-tab is-active" type="button" data-instruction="model" aria-pressed="true">Teacher Modeling</button><button class="instruction-tab" type="button" data-instruction="guided" aria-pressed="false">Guided Practice</button><button class="instruction-tab" type="button" data-instruction="independent" aria-pressed="false">Independent Practice</button></div>
          <div class="numberline-demo" data-instruction-stage="model">
            <svg viewBox="0 0 720 145" role="img" aria-labelledby="numberline-title numberline-desc"><title id="numberline-title">Two forward jumps from 5 to 7</title><desc id="numberline-desc">A number line demonstrates two jumps: 5 to 6, then 6 to 7.</desc><line x1="55" y1="105" x2="665" y2="105" stroke="#9a9d91" stroke-width="3"/><g class="numberline-jumps" fill="none" stroke="#55745f" stroke-width="3"><path d="M436 100 Q474 35 512 100"/><path d="M512 100 Q550 35 588 100"/></g><g fill="#27312c" font-family="Arial,sans-serif" font-size="17" text-anchor="middle"><text x="55" y="133">0</text><text x="131" y="133">1</text><text x="207" y="133">2</text><text x="284" y="133">3</text><text x="360" y="133">4</text><text x="436" y="133">5</text><text x="512" y="133">6</text><text x="588" y="133">7</text><text x="665" y="133">8</text></g><g fill="#55745f"><circle cx="436" cy="105" r="6"/><circle cx="512" cy="105" r="6"/><circle cx="588" cy="105" r="7"/></g></svg>
          </div>
          <div class="guided-check" id="guided-check" hidden><p>Hint: Start at 5. The first jump takes you to 6. Where does the second jump land?</p><div role="group" aria-label="Choose where the second jump lands"><button type="button" data-guided-answer="6">6</button><button type="button" data-guided-answer="7">7</button><button type="button" data-guided-answer="8">8</button></div><span id="guided-feedback" aria-live="polite"></span></div>
          <div class="independent-check" id="independent-check" hidden><p><strong>Try it yourself:</strong> Start at 5 and make two jumps forward on the number line. Where do you land?</p><div role="group" aria-label="Choose where you land after two forward jumps from 5"><button type="button" data-independent-answer="6">6</button><button type="button" data-independent-answer="7">7</button><button type="button" data-independent-answer="8">8</button></div><span id="independent-feedback" aria-live="polite"></span></div>
          <p class="instruction-explanation" id="instruction-explanation" aria-live="polite">Teacher modeling: Start at 5. Make two one-step jumps forward: 5 to 6, then 6 to 7.</p>
        </article>
      </section>
      <section class="support-topic" id="support-4-2" aria-labelledby="support-42-title">
        <span class="card-number">4.2</span><h3 id="support-42-title">Universal Design for Learning (UDL)</h3>
        <p class="support-intro">CAST's UDL Guidelines 3.0 call educators to anticipate learner variability and proactively design learning that removes barriers, supports belonging, and provides meaningful choices (CAST, 2024). Flexible options are available to everyone, so students can participate in the same classroom community.</p>
        <div class="udl-grid" aria-label="Three UDL principles applied to the class party activity">
          <article class="udl-card">
            <span class="udl-card-number">01</span>
            <button class="udl-card-toggle" type="button" aria-expanded="false" aria-controls="udl-example-engagement"><span>Multiple Means of Engagement</span><span class="udl-toggle-icon" aria-hidden="true">+</span></button>
            <p class="udl-card-description">Offer relevant choices that invite interest, collaboration, and belonging.</p>
            <div class="udl-card-example" id="udl-example-engagement" hidden><span>Class party example</span><p>Students choose a planning role, such as shopper or budget tracker, and work with a partner to find the cost of the three juice boxes. Everyone works toward the same $6 total.</p></div>
          </article>
          <article class="udl-card">
            <span class="udl-card-number">02</span>
            <button class="udl-card-toggle" type="button" aria-expanded="false" aria-controls="udl-example-representation"><span>Multiple Means of Representation</span><span class="udl-toggle-icon" aria-hidden="true">+</span></button>
            <p class="udl-card-description">Present information in more than one accessible format so learners can make connections.</p>
            <div class="udl-card-example" id="udl-example-representation" hidden><span>Class party example</span><p>Students use the illustrated price labels, visual price cards, and equations such as $2 + $2 + $2 to work out the same $6 total.</p></div>
          </article>
          <article class="udl-card">
            <span class="udl-card-number">03</span>
            <button class="udl-card-toggle" type="button" aria-expanded="false" aria-controls="udl-example-expression"><span>Multiple Means of Action &amp; Expression</span><span class="udl-toggle-icon" aria-hidden="true">+</span></button>
            <p class="udl-card-description">Offer flexible ways for students to show what they know and communicate their thinking.</p>
            <div class="udl-card-example" id="udl-example-expression" hidden><span>Class party example</span><p>Students show the same $6 calculation with a drawing, play money, or a verbal explanation, then share how their representation shows the total cost.</p></div>
          </article>
        </div>
        <article class="udl-scenario" aria-labelledby="party-title">
          <div class="party-task">
            <div class="party-task-copy"><span class="scenario-grade">Grade 4 class activity</span><h4 id="party-title">Let's Plan a Class Party!</h4><p>Your class has a budget of $20. How much would three juice boxes cost at $2 each?</p><p class="party-learning-goal"><strong>Shared learning goal:</strong> Find the total cost of three items priced at $2 each.</p></div>
            <div class="juice-boxes" role="img" aria-label="Three illustrated juice boxes, each with a price label of two dollars">
              <div class="juice-item"><div class="juice-carton"><span class="juice-straw"></span><span class="juice-brand">JUICE</span><span class="juice-fruit" aria-hidden="true">&#x25CF;</span></div><span class="juice-price">$2</span></div>
              <div class="juice-item"><div class="juice-carton juice-carton-orange"><span class="juice-straw"></span><span class="juice-brand">JUICE</span><span class="juice-fruit" aria-hidden="true">&#x25CF;</span></div><span class="juice-price">$2</span></div>
              <div class="juice-item"><div class="juice-carton juice-carton-gold"><span class="juice-straw"></span><span class="juice-brand">JUICE</span><span class="juice-fruit" aria-hidden="true">&#x25CF;</span></div><span class="juice-price">$2</span></div>
            </div>
          </div>
          <div class="udl-tabs" role="tablist" aria-label="Explore UDL choices in the class party activity">
            <button class="udl-tab is-active" type="button" role="tab" id="udl-tab-engagement" aria-selected="true" aria-controls="udl-panel-engagement" data-udl-panel="engagement">Engagement</button>
            <button class="udl-tab" type="button" role="tab" id="udl-tab-representation" aria-selected="false" aria-controls="udl-panel-representation" data-udl-panel="representation" tabindex="-1">Representation</button>
            <button class="udl-tab" type="button" role="tab" id="udl-tab-expression" aria-selected="false" aria-controls="udl-panel-expression" data-udl-panel="expression" tabindex="-1">Action &amp; Expression</button>
          </div>
          <section class="udl-panel" id="udl-panel-engagement" role="tabpanel" aria-labelledby="udl-tab-engagement" data-udl-content="engagement">
            <span class="udl-principle">Multiple Means of Engagement</span><h5>Choice, interest, and collaboration</h5>
            <div class="udl-panel-columns"><p><strong>Teacher provides</strong> a choice of meaningful party-planning roles, such as supply shopper or budget tracker, and lets partners choose a category of supplies to plan.</p><p><strong>Students do</strong> the same juice-box cost problem while choosing a role and talking through the plan with a partner.</p><p><strong>How this supports participation</strong> Personal choice and partner collaboration invite students to contribute through their interests and strengths.</p></div>
          </section>
          <section class="udl-panel" id="udl-panel-representation" role="tabpanel" aria-labelledby="udl-tab-representation" data-udl-content="representation" hidden>
            <span class="udl-principle">Multiple Means of Representation</span><h5>See the price in more than one way</h5>
            <div class="udl-panel-columns"><p><strong>Teacher provides</strong> visual price cards for each juice box alongside numerical forms such as <strong>$2 + $2 + $2</strong> and <strong>3 x $2</strong></p><p><strong>Students do</strong> match each item to its price, then use the pictures and numbers to work out the total.</p><p><strong>How this supports participation</strong> Connecting visual and numerical information makes the task easier to access and helps students choose a useful representation.</p></div>
          </section>
          <section class="udl-panel" id="udl-panel-expression" role="tabpanel" aria-labelledby="udl-tab-expression" data-udl-content="expression" hidden>
            <span class="udl-principle">Multiple Means of Action and Expression</span><h5>Show how you worked it out</h5>
            <div class="udl-panel-columns"><p><strong>Teacher provides</strong> drawing materials, play money, and the option to explain thinking verbally.</p><p><strong>Students do</strong> demonstrate the same total by sketching groups, combining three $2 amounts in play money, or explaining their calculation.</p><p><strong>How this supports participation</strong> Students can communicate mathematical understanding in a way that works for them while meeting the shared goal.</p></div>
          </section>
          <p class="udl-together"><strong>One shared activity, three connected principles.</strong> These options work together so all students can engage with the task, access the math, and share their learning.</p>
        </article>

        <p class="udl-conclusion">When teachers plan for learner variability in advance, they can reduce barriers and create more accessible, inclusive learning for everyone (CAST, 2024).</p>
      </section>
      <section class="support-topic" id="support-4-3" aria-labelledby="support-43-title">
        <span class="card-number">4.3</span><h3 id="support-43-title">Differentiated Instruction (DI)</h3>
        <p class="support-intro">Differentiated instruction adjusts teaching to students' readiness, learning needs, and interests while keeping learners part of a shared classroom community. Ongoing formative assessment helps teachers notice progress and respond equitably (Ontario Ministry of Education, 2013).</p>
        <div class="di-grid"><article class="di-card"><h4>Adjusting Task Complexity</h4><p>Keep a shared goal, such as explaining tens and ones, while adjusting the level of challenge. Some students may model two-digit numbers with blocks; others may extend the same idea to larger numbers or calculations.</p></article><article class="di-card"><h4>Providing Targeted Support</h4><p>During the same class activity, students can use guided prompts, visual models, partner discussion, or teacher check-ins. Others may work with fewer prompts. Adjust the support as understanding grows.</p></article><article class="di-card"><h4>Accommodations and Assessment</h4><p>Offer extra time or a number line when it supports access to the assessed goal. Students can work toward the same mathematical understanding with different tools. An accommodation changes access; changing the skill being assessed changes the learning goal.</p></article></div>
        <aside class="ontario-policy" aria-labelledby="ontario-policy-title">
          <span class="policy-kicker">Ontario policy context</span>
          <h4 id="ontario-policy-title">Inclusive Education in Ontario</h4>
          <p>In Ontario, students with dyscalculia may receive individualized educational support while participating in regular classrooms. An Individual Education Plan (IEP) can document a student's strengths, learning needs, and appropriate accommodations (Ontario Ministry of Education, 2024).</p>
          <p>When an Identification, Placement and Review Committee (IPRC) considers placement, it first considers whether a regular class with appropriate special education services can meet the student's needs and is consistent with parental preferences. Depending on individual needs, supports may include resource assistance or targeted instruction in the classroom (Ontario Ministry of Education, 2025).</p>
          <p class="policy-clarifier">An IEP or separate special education class is not required for every student with dyscalculia. DI connects this policy context to classroom practice: students can participate in shared learning while receiving the individualized instruction and supports they need (Ontario Ministry of Education, 2014).</p>
        </aside>
      </section>
      <section class="support-topic alex-application" id="support-4-4" aria-labelledby="support-44-title">
        <span class="card-number">4.4</span><h3 id="support-44-title">Applying Strategies to Alex</h3>
        <p class="support-intro">Alex is the fictional Grade 4 learner introduced in Section 3.3. Explore two ways a teacher can build on Alex's strengths while supporting specific math needs in a shared classroom.</p>
        <div class="alex-scenario-tabs" role="tablist" aria-label="Choose a classroom scenario for Alex">
          <button class="alex-scenario-tab is-active" type="button" role="tab" id="alex-tab-place" aria-selected="true" aria-controls="alex-panel-place" data-alex-panel="place">Place Value</button>
          <button class="alex-scenario-tab" type="button" role="tab" id="alex-tab-facts" aria-selected="false" aria-controls="alex-panel-facts" data-alex-panel="facts" tabindex="-1">Arithmetic Facts</button>
        </div>
        <article class="alex-scenario-panel" id="alex-panel-place" role="tabpanel" aria-labelledby="alex-tab-place" data-alex-content="place">
          <div class="alex-profile-flow">
            <p><strong>Learning Need</strong>Difficulty understanding place value</p><span aria-hidden="true">&#x2192;</span>
            <p><strong>Individual Strength</strong>Enjoys drawing and visual activities</p><span aria-hidden="true">&#x2192;</span>
            <p><strong>Teaching Strategy</strong>Connect base-ten blocks, a drawing, and the numeral 23</p>
          </div>
          <div class="alex-visual-progression" aria-label="Concrete, drawing, and numeral representations of 23">
            <div class="alex-visual-step"><span class="alex-step-label">Base-ten blocks</span><div class="alex-block-model" role="img" aria-label="Two tens rods and three unit cubes"><i class="alex-ten-rod"></i><i class="alex-ten-rod"></i><span class="alex-unit-cubes"><i></i><i></i><i></i></span></div><span class="alex-step-caption">2 tens + 3 ones</span></div>
            <span class="alex-progression-arrow" aria-hidden="true">&#x2192;</span>
            <div class="alex-visual-step"><span class="alex-step-label">Alex draws</span><div class="alex-drawn-model" role="img" aria-label="A drawing of two tens and three ones"><span>|| &nbsp; ||</span><span>&#x25CF; &#x25CF; &#x25CF;</span></div><span class="alex-step-caption">2 tens + 3 ones</span></div>
            <span class="alex-progression-arrow" aria-hidden="true">&#x2192;</span>
            <div class="alex-visual-step"><span class="alex-step-label">Numeral</span><div class="alex-numeral">23</div><span class="alex-step-caption">twenty-three</span></div>
          </div>
          <p class="alex-scenario-connection">During the shared place-value lesson, Alex builds 23 with blocks, draws two tens and three ones, and connects the model to 23. This applies <a href="#support-4-1">CRA</a>; classmates work toward the same goal with accessible representations and individualized support, reflecting <a href="#support-4-2">UDL</a> and <a href="#support-4-3">DI</a>.</p>
        </article>
        <article class="alex-scenario-panel" id="alex-panel-facts" role="tabpanel" aria-labelledby="alex-tab-facts" data-alex-content="facts" hidden>
          <div class="alex-profile-flow">
            <p><strong>Learning Need</strong>Difficulty recalling basic arithmetic facts</p><span aria-hidden="true">&#x2192;</span>
            <p><strong>Individual Strength</strong>Communicates ideas clearly through verbal explanations</p><span aria-hidden="true">&#x2192;</span>
            <p><strong>Teaching Strategy</strong>Use a number line and explain each counting step aloud</p>
          </div>
          <div class="alex-facts-visual">
            <svg viewBox="0 0 720 145" role="img" aria-labelledby="alex-numberline-title alex-numberline-desc"><title id="alex-numberline-title">Four forward jumps from 3 to 7</title><desc id="alex-numberline-desc">A number line shows four one-step jumps: 3 to 4, 4 to 5, 5 to 6, and 6 to 7.</desc><line x1="55" y1="105" x2="665" y2="105" stroke="#9a9d91" stroke-width="3"/><g fill="none" stroke="#55745f" stroke-width="3"><path d="M284 100 Q322 35 360 100"/><path d="M360 100 Q398 35 436 100"/><path d="M436 100 Q474 35 512 100"/><path d="M512 100 Q550 35 588 100"/></g><g fill="#27312c" font-family="Arial,sans-serif" font-size="17" text-anchor="middle"><text x="55" y="133">0</text><text x="131" y="133">1</text><text x="207" y="133">2</text><text x="284" y="133">3</text><text x="360" y="133">4</text><text x="436" y="133">5</text><text x="512" y="133">6</text><text x="588" y="133">7</text><text x="665" y="133">8</text></g><g fill="#55745f"><circle cx="284" cy="105" r="6"/><circle cx="360" cy="105" r="6"/><circle cx="436" cy="105" r="6"/><circle cx="512" cy="105" r="6"/><circle cx="588" cy="105" r="7"/></g></svg>
            <p class="alex-equation">3 + 4 = 7</p>
          </div>
          <p class="alex-scenario-connection">Alex counts each jump aloud to a partner: “3, 4, 5, 6, 7.” The teacher models first, offers guided prompts, then gradually reduces them as Alex gains fluency. Verbal explanation supports Alex's agency in the shared lesson, applying <a href="#support-4-1">explicit instruction</a>, <a href="#support-4-2">UDL</a>, and <a href="#support-4-3">DI</a>.</p>
        </article>
        <p class="alex-inclusive-note">Alex participates in the same mathematics classroom as peers while receiving individualized support matched to the learning need and personal strengths (Fuchs et al., 2021; CAST, 2024; Ontario Ministry of Education, 2013).</p>
        <p class="alex-ending">Inclusive education begins with understanding each learner's strengths and creating opportunities for meaningful participation.</p>
      </section>
    ` : ''}
    ${section.id === 'resources' ? `
      <div class="resources-content">
        <section class="resource-group" id="5-1" aria-labelledby="educator-resources-title">
          <span class="card-number">5.1</span><h3 id="educator-resources-title">Resources for Educators</h3>
          <div class="resource-grid">
            <a class="resource-card" href="https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-8" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">Ontario Ministry of Education &mdash; Policy/Program Memorandum No. 8 (PPM 8)</span><span class="resource-card-description">Ontario's official policy on identifying students with learning disabilities and planning appropriate educational support.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://udlguidelines.cast.org/" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">CAST &mdash; Universal Design for Learning Guidelines 3.0</span><span class="resource-card-description">The official UDL framework for designing accessible learning environments through multiple means of engagement, representation, and action and expression.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://ies.ed.gov/ncee/wwc/PracticeGuide/26" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">Institute of Education Sciences &mdash; Assisting Students Struggling with Mathematics: Intervention in the Elementary Grades</span><span class="resource-card-description">A research-based practice guide offering practical recommendations for mathematics intervention, including systematic instruction and visual representations.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://www.ldatschool.ca/" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">LD@school &mdash; Classroom Resources</span><span class="resource-card-description">An Ontario-based resource platform offering research-informed instructional strategies and classroom materials for educators supporting students with learning disabilities.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
          </div>
        </section>
        <section class="resource-group" id="5-2" aria-labelledby="family-resources-title">
          <span class="card-number">5.2</span><h3 id="family-resources-title">Resources for Families and Students</h3>
          <div class="resource-grid">
            <a class="resource-card" href="https://www.ldao.ca/" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">Learning Disabilities Association of Ontario (LDAO)</span><span class="resource-card-description">Information, advocacy, and community resources for individuals with learning disabilities and their families in Ontario.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://www.ldathome.ca/" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">LD@home &mdash; Resources for Families</span><span class="resource-card-description">A family-focused platform providing practical information about learning disabilities, home support strategies, and collaboration with schools.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://www.ldatschool.ca/video-math-parent/" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">Supporting Students with LDs in Math &mdash; A Parent's Guide</span><span class="resource-card-description">A parent-oriented video resource with practical advice for supporting mathematical learning and working with educators.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
            <a class="resource-card" href="https://www.canada.ca/en/employment-social-development/programs/accessible-canada-regulations-guidance/consultation/key-concepts.html#h2.7" target="_blank" rel="noopener noreferrer"><span class="resource-card-title">Government of Canada &mdash; Understanding Disabilities</span><span class="resource-card-description">Official Canadian government information about different types of disabilities, including dyscalculia and its effects on numerical understanding.</span><span class="resource-card-link" aria-hidden="true">Open resource &#x2197;</span></a>
          </div>
        </section>
        <aside class="ontario-resources" aria-labelledby="ontario-resources-title">
          <div><span class="card-number">Ontario policy</span><h3 id="ontario-resources-title">Ontario Special Education Policies</h3></div>
          <div class="policy-resource-list">
            <a class="policy-resource" href="https://www.ontario.ca/page/individual-education-plans" target="_blank" rel="noopener noreferrer"><span><strong>Ontario Ministry of Education &mdash; Individual Education Plans (IEP)</strong><small>Official information about IEPs and how they document students' individual learning needs and educational supports.</small></span><span aria-hidden="true">&#x2197;</span></a>
            <a class="policy-resource" href="https://www.ontario.ca/page/identifying-students-special-education-needs" target="_blank" rel="noopener noreferrer"><span><strong>Ontario Ministry of Education &mdash; Identifying Students with Special Education Needs</strong><small>Official information about special education identification, the IPRC process, and educational placement options in Ontario.</small></span><span aria-hidden="true">&#x2197;</span></a>
          </div>
        </aside>
        <section class="reference-list" id="5-3" aria-labelledby="reference-list-title">
          <span class="card-number">5.3</span><h3 id="reference-list-title">References</h3>
          <ul class="apa-references">
            <li>American Psychiatric Association. (2022). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed., text rev.). <a href="https://doi.org/10.1176/appi.books.9780890425787" target="_blank" rel="noopener noreferrer">https://doi.org/10.1176/appi.books.9780890425787</a></li>
            <li>CAST. (2024). <em>CAST Universal Design for Learning Guidelines version 3.0</em>. <a href="https://udlguidelines.cast.org/" target="_blank" rel="noopener noreferrer">https://udlguidelines.cast.org/</a></li>
            <li>Dehaene, S. (1992). Varieties of numerical abilities. <em>Cognition, 44</em>(1-2), 1-42. <a href="https://www.unicog.org/publications/Dehaene_VarietiesOfNumericalAbilities_Cognition_1992.pdf" target="_blank" rel="noopener noreferrer">https://www.unicog.org/publications/Dehaene_VarietiesOfNumericalAbilities_Cognition_1992.pdf</a></li>
            <li>Fuchs, L. S., Newman-Gonchar, R., Schumacher, R., Dougherty, B., Bucka, N., Karp, K. S., Woodward, J., Clarke, B., Jordan, N. C., Gersten, R., Jayanthi, M., Keating, B., &amp; Morgan, S. (2021). <em>Assisting students struggling with mathematics: Intervention in the elementary grades</em> (WWC 2021-006). National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education. <a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/26" target="_blank" rel="noopener noreferrer">https://ies.ed.gov/ncee/wwc/PracticeGuide/26</a></li>
            <li>Government of Canada. (n.d.). <em>Annex: Understanding disabilities</em>. <a href="https://www.canada.ca/en/employment-social-development/programs/accessible-canada-regulations-guidance/consultation/key-concepts.html#h2.7" target="_blank" rel="noopener noreferrer">https://www.canada.ca/en/employment-social-development/programs/accessible-canada-regulations-guidance/consultation/key-concepts.html#h2.7</a></li>
            <li>Kaufmann, L., Mazzocco, M. M. M., Dowker, A., von Aster, M., G&#x00F6;bel, S. M., Grabner, R. H., Henik, A., Jordan, N. C., Karmiloff-Smith, A., Kucian, K., Rubinsten, O., Sz&#x171;cs, D., Shalev, R., &amp; Nuerk, H.-C. (2013). Dyscalculia from a developmental and differential perspective. <em>Frontiers in Psychology, 4</em>, Article 516. <a href="https://doi.org/10.3389/fpsyg.2013.00516" target="_blank" rel="noopener noreferrer">https://doi.org/10.3389/fpsyg.2013.00516</a></li>
            <li>Ontario Ministry of Education. (2013). <em>Learning for all: A guide to effective assessment and instruction for all students, kindergarten to Grade 12</em>. <a href="https://www.edu.gov.on.ca/eng/general/elemsec/speced/learningforall2013.pdf" target="_blank" rel="noopener noreferrer">https://www.edu.gov.on.ca/eng/general/elemsec/speced/learningforall2013.pdf</a></li>
            <li>Ontario Ministry of Education. (2014, August 26). <em>Policy/Program Memorandum 8: Identification of and program planning for students with learning disabilities</em>. Government of Ontario. <a href="https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-8" target="_blank" rel="noopener noreferrer">https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-8</a></li>
            <li>Ontario Ministry of Education. (2024, December 30). <em>Individual education plans</em>. Government of Ontario. <a href="https://www.ontario.ca/page/individual-education-plans" target="_blank" rel="noopener noreferrer">https://www.ontario.ca/page/individual-education-plans</a></li>
            <li>Ontario Ministry of Education. (2025, May 23). <em>Identifying students with special education needs</em>. Government of Ontario. <a href="https://www.ontario.ca/page/identifying-students-special-education-needs" target="_blank" rel="noopener noreferrer">https://www.ontario.ca/page/identifying-students-special-education-needs</a></li>
            <li>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em> (M. Cole, V. John-Steiner, S. Scribner, &amp; E. Souberman, Eds.). Harvard University Press. <a href="https://doi.org/10.2307/j.ctvjf9vz4" target="_blank" rel="noopener noreferrer">https://doi.org/10.2307/j.ctvjf9vz4</a></li>
          </ul>
        </section>
      </div>
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
        <div class="number-map-actions"><button class="button language-toggle" id="toggle-number-language" type="button" aria-pressed="false">Hebrew!</button><span class="hebrew-test-reminder" id="hebrew-test-reminder" hidden>Remember the Hebrew numeral test in Section 1.2?</span></div>
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
        <span>Instructor: <strong>Katie Maxwell, EdD.</strong> · Sessional Lecturer</span>
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

document.querySelectorAll('.udl-card-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true'
    const example = document.getElementById(button.getAttribute('aria-controls'))
    button.setAttribute('aria-expanded', String(!expanded))
    example.hidden = expanded
    button.querySelector('.udl-toggle-icon').textContent = expanded ? '+' : '-'
  })
})

document.querySelectorAll('.stage-tab').forEach((button) => {
  button.addEventListener('click', () => {
    const stage = button.dataset.craStage
    document.querySelectorAll('.stage-tab').forEach((tab) => {
      const active = tab === button
      tab.classList.toggle('is-active', active)
      tab.setAttribute('aria-pressed', String(active))
    })
    document.querySelectorAll('.cra-stage').forEach((panel) => {
      panel.hidden = panel.dataset.craPanel !== stage
    })
  })
})

const instructionCopy = {
  model: 'Teacher modeling: Start at 5. Make two one-step jumps forward: 5 to 6, then 6 to 7.',
  guided: 'Guided practice: Use the hint to track the second jump. Students may point, count aloud, or select an answer.',
  independent: 'Independent practice: Solve the two-jump problem on your own, using any strategy that helps you.'
}

document.querySelectorAll('.instruction-tab').forEach((button) => {
  button.addEventListener('click', () => {
    const stage = button.dataset.instruction
    document.querySelectorAll('.instruction-tab').forEach((tab) => {
      const active = tab === button
      tab.classList.toggle('is-active', active)
      tab.setAttribute('aria-pressed', String(active))
    })
    document.querySelector('.numberline-demo').dataset.instructionStage = stage
    document.querySelector('#instruction-explanation').textContent = instructionCopy[stage]
    document.querySelector('#guided-check').hidden = stage !== 'guided'
    document.querySelector('#independent-check').hidden = stage !== 'independent'
  })
})

document.querySelectorAll('[data-guided-answer]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#guided-feedback').textContent = button.dataset.guidedAnswer === '7' ? 'Correct. From 6, the second jump lands on 7.' : 'Try again: the first jump reached 6. Count one more step forward.'
  })
})

document.querySelectorAll('[data-independent-answer]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#independent-feedback').textContent = button.dataset.independentAnswer === '7' ? 'Correct. Two forward jumps from 5 land on 7.' : 'Not quite. Start at 5 and count two forward jumps.'
  })
})

const udlTabs = [...document.querySelectorAll('.udl-tab')]
const activateUdlTab = (tab) => {
  udlTabs.forEach((item) => {
    const active = item === tab
    item.classList.toggle('is-active', active)
    item.setAttribute('aria-selected', String(active))
    item.tabIndex = active ? 0 : -1
  })
  document.querySelectorAll('.udl-panel').forEach((panel) => {
    panel.hidden = panel.dataset.udlContent !== tab.dataset.udlPanel
  })
}

udlTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateUdlTab(tab))
  tab.addEventListener('keydown', (event) => {
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % udlTabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + udlTabs.length) % udlTabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = udlTabs.length - 1
    else return
    event.preventDefault()
    udlTabs[nextIndex].focus()
    activateUdlTab(udlTabs[nextIndex])
  })
})

const alexScenarioTabs = [...document.querySelectorAll('.alex-scenario-tab')]
const activateAlexScenario = (tab) => {
  alexScenarioTabs.forEach((item) => {
    const active = item === tab
    item.classList.toggle('is-active', active)
    item.setAttribute('aria-selected', String(active))
    item.tabIndex = active ? 0 : -1
  })
  document.querySelectorAll('.alex-scenario-panel').forEach((panel) => {
    panel.hidden = panel.dataset.alexContent !== tab.dataset.alexPanel
  })
}

alexScenarioTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateAlexScenario(tab))
  tab.addEventListener('keydown', (event) => {
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % alexScenarioTabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + alexScenarioTabs.length) % alexScenarioTabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = alexScenarioTabs.length - 1
    else return
    event.preventDefault()
    alexScenarioTabs[nextIndex].focus()
    activateAlexScenario(alexScenarioTabs[nextIndex])
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
  document.querySelector('#hebrew-test-reminder').hidden = !isHebrew
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
          const voices = window.speechSynthesis.getVoices()
          const hebrewVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('he'))
          if (hebrewVoice) {
            utterance.lang = hebrewVoice.lang
            utterance.voice = hebrewVoice
          } else {
            // Keep the spoken-word interaction audible when no Hebrew voice is installed.
            utterance.lang = 'en-US'
            document.querySelector('#representation-explanation').textContent = 'No Hebrew voice is available in this browser, so the default voice will say “echad.”'
          }
        } else {
          utterance.lang = 'en-US'
        }
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utterance)
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
