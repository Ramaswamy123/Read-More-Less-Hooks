import {useState} from 'react'

import {
  AppContainer,
  ReactHeading,
  Tag,
  HooksContainer,
  HooksImage,
  DescriptionContainer,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [content, setContent] = useState(false)

  const onClickButton = () => {
    setContent(prevState => !prevState)
  }
  
  const result = content ? reactHooksDescription : reactHooksDescription.slice(0,170)
  const button = content ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <ReactHeading>React Hooks</ReactHeading>
      <Tag>Hooks are a new addition to React</Tag>
      <HooksContainer>
        <HooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <DescriptionContainer>
          <Description>{result}</Description>
        </DescriptionContainer>

        <Button onClick={onClickButton} type="button">{button}</Button>
      </HooksContainer>
    </AppContainer>
  )
}

export default ReadMore
