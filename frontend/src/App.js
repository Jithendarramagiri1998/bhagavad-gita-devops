import React, { useEffect, useState } from "react";

function App() {
  const [chapters, setChapters] = useState([]);
  const [lang, setLang] = useState("english");

  useEffect(() => {
    fetch("/api/chapters")
      .then(res => res.json())
      .then(setChapters);
  }, []);

  return (
    <div>
      <h1>📖 Bhagavad Gita Explorer</h1>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="telugu">Telugu</option>
      </select>
      {chapters.map(ch => (
        <div key={ch.id}>
          <h2>{ch.title}</h2>
          {ch.verses.map(v => (
            <p key={v.id}>{v[lang]}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

