### Главная страница приложения +40 - все пункты выполнены
  - вёрстка, дизайн, UI главной страницы приложения выполнены
  - главная страница приложения содержит:
    - меню с навигацией по учебнику, ссылками на мини-игры и статистику. Меню или иконка меню отображается на всех страницах приложения **(+10)**
    - описание возможностей и преимуществ приложения **(+10)**
    - раздел "О команде" с фото или аватарками и ссылками на гитхабы всех участников команды, описанием вклада в разработку приложения каждого из них. При желании данный раздел можно вынести в отдельную страницу **(+10)**
    - footer со ссылками на гитхабы авторов приложения, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/). footer отображается на всех страницах приложения за исключением мини-игр **(+10)**

### Авторизация +50 - все пункты выполнены
  - реализована авторизация и регистрация пользователя **(+10)**
  - при перезагрузке приложения данные о пользователе и полученный при авторизации токен сохраняются в localStorage **(+10)**
  - электронный учебник (без раздела "Сложные слова", без отображения прогресса изучения слов и изученных слов) и мини-игры доступны без авторизации **(+10)**
  - у авторизованных пользователей отображается раздел "Сложные слова", прогресс изучения слов, изученные слова и статистика **(+10)**
  - при логауте данные пользователя и токен удаляются из localStorage, а пользователь становится анонимным **(+10)**

### Электронный учебник +80 - все пункты выполнены
  - электронный учебник генерируется на основе коллекции исходных данных и состоит из шести разделов, в каждом разделе 30 страниц, на каждой странице 20 слов для изучения **(+10)**
  - седьмой раздел учебника - "Сложные слова" изначально пустой. Этот раздел состоит из слов, которые пользователь отметил как сложные. Все слова в этом разделе размещаются на одной странице. На усмотрение разработчиков, слова в данный раздел добавляются либо в том порядке, в котором пользователь отмечал их как сложные, либо в порядке, в котором они находились в учебнике. **(+10)**
  На каждой странице учебника отображается:
    - меню или иконка меню **(+10)**
    - список из 20 слов (в разделе "Сложные слова" слов может быть больше) **(+10)**
    - ссылки на мини-игры "Аудиовызов" и "Спринт" **(+10)**
    - навигация по страницам учебника **(+10)**
    - также необходимо реализовать навигацию по семи разделам учебника и предусмотреть небольшие различия в  оформлении каждого раздела **(+10)**
    - при перезагрузке страницы открывается последняя открытая страница приложения **(+10)**

### Список слов +80 - все пункты выполнены
  для каждого слова отображается:
    - само слово, транскрипция, перевод **(+8)**
    - предложение с объяснением значения слова, перевод предложения **(+8)**
    - предложение с примером использования изучаемого слова, перевод предложения **(+8)**
    - картинка-ассоциация к изучаемому слову **(+8)**
    - иконка аудио, при клике по которой последовательно звучит произношение изучаемого слова, произношение предложения с объяснением его значения, произношение предложения с примером его использования **(+8)**
  только у авторизированных пользователей отображаются:
    - кнопка, при клике по которой слово можно отметить как сложное (в разделе "Сложные слова" на её месте отображается кнопка, снимающая отметку что это сложное слово и удаляющая его из данного раздела) **(+8)**
    - кнопка, при клике по которой слово можно отметить как изученное **(+8)**
    - если слово отмечено как сложное, оно остаётся на странице учебника и выделяется стилем, указывающим, что данное слово относится к сложным словам. Также данное слово добавляется в раздел "Сложные слова" **(+8)**
    - если слово отмечено как изученное, оно остаётся на странице учебника и выделяется стилем, указывающим, что данное слово относится к изученным словам **(+8)**
    - если все слова на странице относятся к изученным словам или к изученным и сложным словам, такая страница считается полностью изученной и выделяется стилем. Также стилем выделяется соответствующая ей кнопка навигации по страницам учебника. Ссылки на мини-игры на этой странице становятся неактивными. **Мы решили не спорить с ТЗ и скрыли кнопки с играми в случае, если все слова на странице сложные/изученные. Что может показаться странным, ведь со сложными словами хочется играть (+8)**

### Мини-игры "Аудиовызов" и "Спринт" +200 (100 баллов за игру) - все пункты выполнены

- функционал мини-игр "Аудиовызов" и "Спринт" полностью повторяет функционал одноимённых мини-игр приложения [Lingualeo](https://lingualeo.com/ru/training) **(+18 за каждую игру)**
- в оформление мини-игр можно внесены изменения, с целью улучшения их дизайна и UI, и достижения единства стиля мини-игр и созданного приложения **(+18 за каждую игру)**
- по окончанию каждой игры выводятся [результаты мини-игры](https://raw.githubusercontent.com/rolling-scopes-school/tasks/2983a7b386dd7335969f5b227457aee4680c4868/tasks/rslang/images/rslang11.png) **(+10 за каждую игру)**
- управлять игрой можно как мышкой, так и клавишами на клавиатуре, как это реализовано в оригинальных играх. Для игры **Спринт** во время игры можно использовать клавиши - **стрелки влево, вправо**. А для **Аудиовызов** клавиши - **1, 2, 3, 4, 5, пробел**. **(+18 за каждую игру)**
- если мини-игра запускается из меню, в ней можно выбрать один из шести уровней сложности, которые отличаются тем, слова какого из шести раздлов коллекции исходных данных в ней задействованы **(+18 за каждую игру)**
- если мини-игра запускается со страницы учебника, в ней используются слова из той страницы учебника, на которой размещена ссылка на игру. Если размещённых на странице слов для игры недостаточно, задействуются слова с предыдущих страниц. Если предыдущих страниц нет или недостаточно, игра завершается досрочно, когда закончатся все доступные слова **(+18 за каждую игру)**

###  Прогресс изучения +50 - все пункты выполнены

- новые слова - это слова, которые впервые использовались в мини-играх вне зависимости от того, открывались мини-игры на странице учебника или по ссылке в меню **(+25)**
- возле каждого слова, которое использовалось в мини-играх, на странице учебника указывается прогресс его изучения за весь период: было ли слово правильно угадано в мини-играх, или пользователь ошибался **(+25)**

### Изученные слова +60 - все пункты выполнены

- изученные слова, это слова, которые пользователь отметил как изученные на странице учебника **(+8)**
- также слова считаются изученными по результатам их угадывания в мини-играх. Например, три правильные ответа подряд для обычных слов и пять правильных ответов подряд для сложных слов, либо другая логика на усмотрение разработчиков **(+13)**
- если сложное слово стало изученным, оно перестаёт быть сложными и удаляется из раздела "Сложные слова" **(+13)**
- изученные слова не задействуются в мини-играх, которые запускаются на страницах учебника, но задействуются в мини-играх, которые открываются по ссылке в меню **(+13)**
- если при угадывании изученного слова в мини-игре пользователь ошибся, слово удаляется из категории изученных **(+13)**

###  Страница статистики +60 - все пункты выполнены

- в краткосрочной статистике по мини-играм указываются результаты по каждой мини-игре отдельно
  - количество новых слов за день **(+10)**
  - процент правильных ответов **(+10)**
  - самая длинная серия правильных ответов **(+10)**
- в краткосрочной статистике по словам указываются
  - количество новых слов за день **(+10)**
  - количество изученных слов за день **(+10)**
  - процент правильных ответов за день **(+10)**

### Дополнительный функционал +40
- долгосрочная статистика за весь период изучения в которой представлены два графика
  - график, отображающий количество новых слов за каждый день изучения **(+20)**
  - график, отображающий увеличение общего количества изученных слов за весь период обучения по дням **(+20)**
- Достаточно ли высокое качество оформления мы оценить не можем, но и какого-то дополнительного функционала у нас нет, так что **(-40)**


### Итого: 660/700
