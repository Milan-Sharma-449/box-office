import React, {useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'

const Home = () => {
    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=men

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
            console.log(result)
        })
    }

    const [input, setInput] = useState('')

    const onInputChange=(ev) => {
        setInput(ev.target.value);
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13) {
            onSearch()
        }
    }

    

  return (
    <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}></input>
        <button type='button' onClick={onSearch}>Search</button>
    </MainPageLayout>
  )
};

export default Home