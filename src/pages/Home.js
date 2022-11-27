import React, {useCallback, useState} from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import MainPageLayout from '../Components/MainPageLayout'
import ShowGrid from '../Components/show/ShowGrid';
import { apiGet } from '../misc/config';
import {
    SearchInput,
    RadioInputsWrapper,
    SearchButtonWrapper,
  } from './Home.styled';
import CustomRadio from '../Components/CustomRadio';
import { useWhyDidYouUpdate } from '../misc/custom-hooks';

const Home = () => {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)
    const [searchOption, setSearchOption] = useState('shows')

    const isShowsSearch = searchOption === 'shows';

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
            console.log(result)
        })
    }

    

    const onInputChange= useCallback((ev) => {
      setInput(ev.target.value);
  },[])

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13) {
            onSearch()
        }
    }

    const onRadioChange = useCallback(ev => {
      setSearchOption(ev.target.value)
  }, []) 

    const renderResults = () => {
        if(results && results.length === 0) {
            return <div>No Result</div>
        }
        if(results && results.length > 0) {
            return results[0].show  ? (<ShowGrid data={results} />)
                                    : (<ActorGrid data={results} />)
        }
        return null
    }

  useWhyDidYouUpdate('home', { onInputChange, onKeyDown })

    

  return (
    <MainPageLayout>
        <SearchInput
            type="text" 
            placeholder='Search for something' 
            onChange={onInputChange} 
            onKeyDown={onKeyDown} 
            value={input} 
        />

        <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
        </RadioInputsWrapper>
        
        <SearchButtonWrapper><button type='button' onClick={onSearch}>Search</button></SearchButtonWrapper>
        
        {renderResults()}
    </MainPageLayout>
  )
};

export default Home