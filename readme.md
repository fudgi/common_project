
:pencil2: &nbsp; Проект находится работе
# <img src="http://a0282038.xsph.ru/react-app-07/src/img/icons/logoSingle.svg">&nbsp;Renthings

&nbsp;&nbsp;Проект интернет-площадки для обмена и аренды вещей.
Например, нужна дрель или перфоратор, чтобы просверлить отверстия в стене.
Пользователь заходит на сайт проекта, оставляет свой запрос с указанием сроков аренды, описанием и суммой, которую он готов дать взамен. Пользователи площадки, имеющие запрашиваемый предмет, оставляют свои отклики, из которых арендующий выбирает подходящее предложение.

Использованные в проекте технологии:

    React
    React-Router
    React-Dropzone
    React-Yandex-Map
    Bootstrap
    Bootstrap-DatePicker
    
    Сборка проекта с помощью React-create-app. 
    
Серверная часть: 

    сценарии на PHP
    база данных MySQL.

# Описание проекта:
    
Авторизация пользователя
<div>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd1bd/o34R1LVMxHo.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd1c7/i6Z_9joPjig.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd1d1/Z8SKld_TcYA.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd1db/OjlsfIOrp2g.jpg" width="40%"/>
</div>
   
Экран "Все запросы", отражающий все запросы пользователей, в том числе те, на которые уже оставлен отклик.
На этом же экране происходит выбор категории запроса. По нажатию на кнопку "Откликнуться" происходит переход к экрану отклика.
А по "Добавить запрос" - переход к составлению запроса.
<div>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd12a/SpyWCq8vhUI.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c845324/v845324793/1bd19f/PLqBL61mtHg.jpg" width="40%"/>
</div>
   
      
Экран отклика на запрос другого пользователя. В верхней части описание запроса, в нижней осталяется ответ.
В ответ можно включить фотографии.
<div>
    <img src="https://pp.userapi.com/c852124/v852124701/d0dc2/_bcXg6UoUME.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c852124/v852124701/d0dcc/yD5AbP7WlO0.jpg" width="40%"/>
    <img src="https://pp.userapi.com/c852124/v852124701/d0dd6/vS68bldzOlA.jpg" width="40%"/>
</div>
   
Экран "Добавить запрос"
<div>
   <img src="https://pp.userapi.com/c845324/v845324793/1bd17a/PoPtPp2gOR0.jpg" width="40%"/>
   <img src="https://pp.userapi.com/c852124/v852124701/d0dfd/WRtVwp4116A.jpg" width="40%"/>
   <img src="https://pp.userapi.com/c845324/v845324793/1bd184/mPlMR6LqQWM.jpg" width="40%"/>
</div>

Экран "Мои запросы" показывает состояние запросов созданных пользователем



# Структура проекта:

    -public
    -src
        -css
        -img
            -category_icons
            -icons
            -respondImages
            -user_avatar
        -php
            -profile
            -request_creation
            -request_list
            -respond
        -screens
            -common_components
            -login
            -profile
            -request_creation
            -request_list
            -respond
                -respond_button
            -service
