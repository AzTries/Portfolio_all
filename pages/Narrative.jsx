import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NarrativeDesign.css';

export default function Narrative() {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({ type: [], genre: [] });
  const [selectedSample, setSelectedSample] = useState(null);

  const samples = [
    {
      id: 1,
      title: "Teddy's POV",
      type: 'Short Story',
      genre: ['Literary Fiction', 'Coming-of-Age'],
      excerpt: 'He would embrace me on those nights after getting berated by his parents. He\'d squeeze me tight and tell me I\'m the only one who never yells at him...',
      fullText: `He would embrace me on those nights after getting berated by his parents. He'd squeeze me tight and tell me I'm the only one who never yells at him, who always loves him and stays by his side. I remember his first breakup when he was 17. That day of his breakup, I remember he told me he has a test the next day, but he didn't wanna study at all. That's the first time I've heard him say something like that. And I've heard him say lots of things. The things he would tell me when there was no one around. The things he's ashamed to tell his parents; things he's afraid of his friends finding out. He had picked me up from under the bed and wiped the dust off of me with gentle hands. He cuddled with me, and cried to sleep. I was happy he still remembers me, sleeps with me in his arms. Even after I was forgotten for what felt like an eternity, when his high school started. No one knows when I fell from his bed one day, then he accidently kicked me, and I slipped under the bed. I would watch him all evening when he's studying on his table. Scratching his head on math problems, he would pull all nighters before his exams. I'm not a human, but I can tell it's gotta be so hard. Why do humans have to go through such difficult work? There was this other time, when he was so happy, it felt like I could feel ecstasy radiate through him and reach me, even though I barely understood human emotions. It was when he won a hackathon in his university. I don't know what a hackathon is, but I was proud of him. Now I lie stuffed among other old toys of him. Cars, army figures, plushies, all packed inside the small cardboard box. It reeks of old alcohol bottles. The ones his mom hates because his father would hide and drink. So long gone the days I had some caring hands hold me, look at me with love. Now I hear his mom telling those moving guys to pick up this box - the one I'm in. Every toy in here shakes in agony as the box is picked and thrown at the back of the truck. Too bad, I wish he would've come to at least say goodbye.`,
    },
    {
      id: 2,
      title: 'Drawing Death',
      type: 'Film Treatment',
      genre: ['Psychological Horror', 'Thriller'],
      excerpt: 'A gifted but psychopathic artist channels his fascination with death into paintings that hide his darkest impulses in plain sight...',
      fullText: `DRAWING DEATH - Film Treatment

A gifted but psychopathic artist channels his fascination with death into paintings that hide his darkest impulses in plain sight, and years after a childhood encounter leaves one woman haunted by him, a painting he made finds its way back into her hands, carrying a poison that has been waiting for her all along.

I. THE BOY
The story opens in a small neighborhood built around a veterinary clinic. As a child, Julian is drawn to the clinic's entrance, where grieving families exit clutching the bodies of animals that couldn't be saved. While other children look away, Julian lingers not out of morbid curiosity alone, but because the sight of grief fascinates him.

We learn that Julian's father is a violent, unstable man and that Julian has inherited something of his father's nature. The grief he witnesses doesn't move him to sadness. It makes him feel something closer to satisfaction, a feeling he cannot admit even to himself. Julian begins painting the animals healthy and alive as an act of self-persuasion: proof that he is not what he fears he is.

His father dies in an accident. Julian feels nothing. At school, in private, he begins drawing his father in grotesque, tortured poses as a kind of private, gleeful ritual.

II. THE GIRL
A classmate, Iris, catches him in the act and is terrified. Julian pressures her into silence through understanding. The next day, he intercepts her with a gift: a painting of her cat, which died a week earlier. A cat Julian has never been told about.

For a moment, Iris almost believes he might not be the monster she fears. Then she looks up and sees his smile, and understands exactly what he is. He shows no reaction to her breakdown—no comfort, no cruelty, nothing. He simply watches.

Iris hides the painting and lies to protect herself. Julian changes schools at year's end. Iris is relieved but keeps the painting.

III. YEARS LATER
Iris eventually moves past her grief, but something has changed in her. She develops an unexpected pull toward art despite having no natural talent. Painting becomes less a hobby and more a compulsion.

After graduating, she begins visiting galleries. On a street corner, she finds a painting: a bird, lying upside down on a road, unmistakably dead. She doesn't like it. She buys it anyway.

IV. THE POISON
The painting is Julian's. The pigment was mixed with a slow-acting poison designed to transfer through touch and inhalation. Iris unknowingly microdoses herself every time she studies it.

Julian tracks everyone who buys his painting to witness their deterioration. This time it's Iris. He becomes too eager and misstepped. Iris catches him stalking and calls the cops.

The story closes on a double ending: Julian dies in a freak accident during the police chase. Iris dies separately, poisoned so gradually that no one connects her death to him. It's only in the quiet aftermath that anyone grasps how far ahead of everyone he'd always been. The final image lands on the bird painting: healthy-looking, deceptively gentle, exactly like every painting he ever made to hide what was underneath.`,
    },
    {
      id: 3,
      title: 'The Zombie Salmon',
      type: 'Short Story',
      genre: ['Science Fiction', 'Dystopian', 'Literary Fiction'],
      excerpt: 'Mira was six the first time she snuck out to find water. There was a ditch behind the factory wall, more mud than stream...',
      fullText: `The Zombie Salmon

Mira was six the first time she snuck out to find water. There was a ditch behind the factory wall, more mud than stream. She lay on her stomach and watched a beetle skate across the surface, and something in her chest loosened. She didn't have a word for it. She just knew the water didn't care what she was supposed to be for.

At fifteen, they took her to the insemination wing. Nobody asked what she thought about it, because nobody there had ever asked her kind's opinion on anything. She learned to check out during the procedure—go back to the ditch, the beetle, that loose feeling in her chest, and come back when it was done. Four kids passed through her over the years. She never got to hold any of them.

At thirty-one, she failed her checkup. Irregular cycles, a report that used the word "depleted" like she was a battery. Within a week, she was out of the wing, a stipend, a room in the outer district, and a small vial she was injected with at the clinic on the first of every month.

The outer district had a library nobody used much. Mira started going there the same way she used to go to the ditch. She kept picking up a shelf of old field guides on freshwater fish. She read them the way you'd read letters from someone you missed.

That's where she found the salmon. She read the passage three times. After they breed, salmon start dying while they're still alive. Their skin comes off, their fins fray, their flesh goes soft, and they still hold their spot in the current until it finally takes them. The books had a word for it, but people just called them zombie salmon. Alive and dying at the same time. No clean line between the two.

She'd figured the sickness was just age catching up with her. Tired all the time, then bruising easy, then a ringing in her ears that made rooms tilt if she stood up too fast. It was an old guy in the district who told her differently. He said it flat, like he'd stopped being surprised years ago. The vials weren't wellness. They were the opposite. Slow and measured, so the district thinned out quietly.

She didn't feel angry. Anger needs you to expect better. What she felt was closer to just finally being told the truth about something she already knew in her gut.

She found the hatchery two districts over. Nobody guarded it. The run was ending. The banks were littered with dead fish, all gone pale and ragged. One was still alive in the shallows. Its fin barely broke the surface. The flesh had gone rust-colored, and white fungus was spreading along one side where the skin had split.

Mira crouched at the edge of the water. She didn't touch it. She'd learned a long time ago that some things don't want to be handled but just watched.

She stayed and watched it hold its place against a current too weak to push it anywhere anymore. She watched its gills slow down. She watched the moment where holding on and letting go stopped being different things.

"You did what you were built for," she said to the fish, or to herself, she couldn't really tell anymore. "And now they're letting you rest."

The gills stopped. Mira stayed by the water a while longer. Behind her was the clinic, and the vial waiting in it. She wasn't scared of what came next. She just hoped it would be half as easy as the water had been.`,
    },
  ];

  const allTypes = ['Short Story', 'Film Treatment', 'One-Pager', 'Character Profile'];
  const allGenres = ['Literary Fiction', 'Coming-of-Age', 'Psychological Horror', 'Thriller', 'Science Fiction', 'Dystopian'];

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(f => f !== value)
        : [...prev[category], value],
    }));
  };

  const filteredSamples = samples.filter(sample => {
    const typeMatch = selectedFilters.type.length === 0 || selectedFilters.type.includes(sample.type);
    const genreMatch = selectedFilters.genre.length === 0 || sample.genre.some(g => selectedFilters.genre.includes(g));
    return typeMatch && genreMatch;
  });

  return (
    <>
      <div className="frame">
        <button className="back" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Index
        </button>

        <div className="narrative-head">
          <h2>Narrative Design</h2>
          <p>Fiction, character dynamics, world systems & story one-pagers. Click to read full text.</p>
        </div>

        {/* Filters */}
        <div className="filter-section">
          <div className="filter-group">
            <p className="filter-label">Type</p>
            <div className="filter-buttons">
              {allTypes.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${selectedFilters.type.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleFilter('type', type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <p className="filter-label">Genre</p>
            <div className="filter-buttons">
              {allGenres.map(genre => (
                <button
                  key={genre}
                  className={`filter-btn ${selectedFilters.genre.includes(genre) ? 'active' : ''}`}
                  onClick={() => toggleFilter('genre', genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="samples-grid">
          {filteredSamples.length > 0 ? (
            filteredSamples.map(sample => (
              <div
                key={sample.id}
                className="sample-card"
                onClick={() => setSelectedSample(sample)}
              >
                <h3>{sample.title}</h3>
                <div className="sample-tags">
                  <span className="tag type-tag">{sample.type}</span>
                  {sample.genre.map(g => (
                    <span key={g} className="tag genre-tag">{g}</span>
                  ))}
                </div>
                <p className="sample-excerpt">{sample.excerpt}</p>
                <p className="read-more">Click to read →</p>
              </div>
            ))
          ) : (
            <p className="no-results">No samples match your filters.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedSample && (
        <div className="modal-overlay" onClick={() => setSelectedSample(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSample(null)}>✕</button>
            <h2>{selectedSample.title}</h2>
            <div className="modal-tags">
              <span className="tag type-tag">{selectedSample.type}</span>
              {selectedSample.genre.map(g => (
                <span key={g} className="tag genre-tag">{g}</span>
              ))}
            </div>
            <div className="modal-text">
              {selectedSample.fullText.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}