import {Component} from 'react'
import {GlobalDiv, Image, UnorderedList} from './styledComponents'
import Languages from './components/Languages'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {lang: languageGreetingsList[0]}

  changeLanguage = id => {
    const updatedItem = languageGreetingsList.find(each => each.id === id)
    console.log(updatedItem)
    this.setState({lang: updatedItem})
  }

  render() {
    const {lang} = this.state
    const {imageUrl, imageAltText} = lang
    return (
      <GlobalDiv>
        <h1>Multilingual Greetings</h1>
        <UnorderedList>
          {languageGreetingsList.map(each => (
            <Languages
              key={each.id}
              item={each}
              changeLanguage={this.changeLanguage}
              langId={lang.id}
            />
          ))}
        </UnorderedList>
        <Image src={imageUrl} alt={imageAltText} />
      </GlobalDiv>
    )
  }
}

export default App
