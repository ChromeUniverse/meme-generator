import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import memesData from '../memesData'

function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/64sz4u.png'
  })

  const [allMemes, setAllMemes] = useState(memesData); 

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...meme, [name]: value
    }))
  }

  function getRandomMeme() {
    // const memes = .data.memes;
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];    
    setMeme((prevMeme) => {
      return {...prevMeme, randomImage: randomMeme.url}
    });
  }
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then((json) => setAllMemes(json.data.memes));
  }, []);

  return (
    <>
      <div className="form">
        <input
          className="form-input"
          placeholder="Top text"
          type="text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          className="form-input"
          placeholder="Bottom text"
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getRandomMeme} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default Meme