import React from 'react'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import BottomPart from './components/bottomPart'

function ForgetPassword(props){
    return(
        <React.Fragment>
            <Title title="Регистрация"/>
            <SocialBlock />
            <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email"/>
            <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль"/>
            <Button nameOfTheButton="Зарегистрироваться"/>
            <BottomPart leftSideText="Регистрируясь, вы подтверждаете, что принимаете <a href='$' id='refConditions'>Условия пользователя</a> и " refText="Политику конфиденциальности" id="refPolitics" href="$"/>
            <BottomPart leftSideText="Уже имеете аккаунт? " refText="Выполните вход" id="refSignUp" href="$"/>
        </React.Fragment>
    )
}

export default ForgetPassword