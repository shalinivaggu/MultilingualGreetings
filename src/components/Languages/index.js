import {Button} from './styledComponents'

const Languages = props => {
  const {item, langId, changeLanguage} = props

  const {id, buttonText} = item

  const active = langId === id
  const onClickLanguage = () => {
    changeLanguage(id)
  }

  return (
    <div>
      <li>
        <Button type="button" onClick={onClickLanguage} active={active}>
          {buttonText}
        </Button>
      </li>
    </div>
  )
}

export default Languages
