import React from 'react'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import UnderSubmit from './components/underSubmit'
import BottomPart from './components/bottomPart'

function Auth(props){
    return(
        <React.Fragment>
            <Title title="Вход"/>
            <SocialBlock />
            <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email"/>
            <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль"/>
            <Button nameOfTheButton="Войти"/>
            <UnderSubmit />
            <BottomPart leftSideText="Еще не с нами?" refText="Зарегистрируйся" id="refRegister" href="$"/>
        </React.Fragment>
    )
}

export default Auth