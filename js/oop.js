var mycustomSurveyStrings = {
    pagePrevText: "My Page Prev",
    pageNextText: "My Page Next",
    completeText: "OK - Press to Complete"
};
Survey
    .surveyLocalization
    .locales["my"] = mycustomSurveyStrings;
Survey
    .StylesManager
    .applyTheme("modern");


var json = {
    title: "Основы ООП",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Поехали!",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "В этом тесте у вас нет ограничений по времени. Рассуждайте в своё удовольствие."
                }
            ]
        },{
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Что из перечисленных относится к объектно-ориентированной абстракции?",
                    isRequired: true,
                    choices: [
                        "Aбстракция данных.",
                        "Aбстракция функции.",
                        "Aбстракция структуры.",
                        "Aбстракция имени.",
                    ],
                    correctAnswer: ["Aбстракция данных.", "Aбстракция функции.","Aбстракция структуры"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "Драконы умеют летать (как, например, птицы) и ползать (как, например, ящерицы). С точки зрения ООП, примером чего является данная ситуация (выберите наиболее точный вариант)?",
                    choices: [
                        "Множественное наследование", "Инкапсуляция", "Композиция", "Полиморфизм"
                    ],
                    correctAnswer: "Множественное наследование"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "civiwar",
                    title: " Метод, который определяет состояние объекта, не изменяя его.",
                    choices: [
                        "Селектор", "Сеттер", "Конструктор", "Деструктор"
                    ],
                    correctAnswer: "Селектор"
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "langrtyujs",
                    title: "Виртуальные методы... Необходимо продолжить утверждение (укажите все подходящие варианты).",
                    isRequired: true,
                    choices: [
                        "служат исключительно для реализации полиморфизма",
                        "позволяют наследникам переопределять методы родителя",
                        "не реализуются в базовом классе",
                        "используются при реализации полиморфизма",
                        "Ни один из вышеперечисленных вариантов не подходит."
                    ],
                    correctAnswer: ["позволяют наследникам переопределять методы родителя", "используются при реализации полиморфизма"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnaкккcarta",
                    title: "Система обеспечивает принцип наследования в том случае, если:",
                    choicesOrder: "random",
                    choices: [
                        "в любом месте, где допустимо использование объекта, принадлежащего классу-предку, точно также допустимо использование класса-наследника.", "в системе имеется хотя бы один 'наследник'", "в любом месте, где допустимо использование объекта, принадлежащего классу-наследнику, точно также допустимо использование класса-предка."
                    ],
                    correctAnswer: "в любом месте, где допустимо использование объекта, принадлежащего классу-предку, точно также допустимо использование класса-наследника."
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacfarta",
                    title: "Какие утверждения из перечисленных верны:",
                    choicesOrder: "random",
                    choices: [
                        "Отношение 'has-a' всегда реализуется с помощью наследования", "Отношение 'has-a' требует как минимум две различные сущности", "Отношение 'has-a' всегда подразумевает сильную связь между объектами", "Ничего из перечисленного"
                    ],
                    correctAnswer: "Ничего из перечисленного"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarffta",
                    title: "Какие механизмы в ОО языках обычно позволяют обеспечить инкапсуляцию объектов?",
                    choicesOrder: "random",
                    choices: [
                        "Статические методы", "Динамическое выделение памяти", "Модификаторы доступа", "Виртуальные методы"
                    ],
                    correctAnswer: "Модификаторы доступа"
                }
            ]
        }
    ],
    completedHtml: "<h4>Вы ответили правильно на <b>{correctedAnswers}</b> вопросов из <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

$("#surveyElement").Survey({model: survey});