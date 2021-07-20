import {Slide} from "../components/Slide";
import {useState} from "react";

const baseFilmLink = "https://megogo.net/view/12741165-lyudina-yaka-obiyshla-ves-svit.html";
const quizData = [
        {
            id: "q1",
            errorPage: false,
            number: "01",
            title: "Про історію становлення якого бренду йдеться <br>у документальному фільмі?",
            buttons: [
                {
                    text: "Johnnie Walker",
                    attr: {type: "slide", link: "q2"}
                },
                {
                    text: "Jack Daniel’s",
                    attr: {type: "slide", link: "q1no"}
                }]
        },
        {
            id: "q1no",
            errorPage: true,
            number: "01",
            title: "На жаль, це неправильна відповідь. <br>Спробуйте ще раз.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q2",
            errorPage: false,
            excerpt: "Правильно! Тест на уважність ви вже <br>пройшли на відмінно.",
            number: "02",
            title: "У спадок від батька Джонові дісталась сімейна ферма. <br>На що було витрачено гроші після її продажу?",
            buttons: [
                {
                    text: "Великий будинок",
                    attr: {type: "slide", link: "q2no"}
                },
                {
                    text: "Продуктовий магазин",
                    attr: {type: "slide", link: "q3"}
                }]
        },
        {
            id: "q2no",
            errorPage: true,
            number: "02",
            title: "Ідея, звісно, непогана, але насправді <br>все було інакше.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q3",
            errorPage: false,
            excerpt: "Правильно! Це був успішний бізнес, <br>що спеціалізувався на купажуванні.",
            number: "03",
            title: "Чи пам’ятаєте ви країну походження <br>бренду Johnnie Walker?",
            buttons: [
                {
                    text: "США",
                    attr: {type: "slide", link: "q3no"}
                },
                {
                    text: "Шотландія",
                    attr: {type: "slide", link: "q4"}
                }]
        },
        {
            id: "q3no",
            errorPage: true,
            number: "03",
            title: "Є два варіанти: або ви не дивилися <br>фільм, або просто забули.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q4",
            errorPage: false,
            excerpt: "Ну звісно! Ви просто молодець, <br>так тримати.",
            number: "04",
            title: "Johnnie Walker став першим світовим брендом. <br>Яку компанію він випередив?",
            buttons: [
                {
                    text: "Nestle",
                    attr: {type: "slide", link: "q4no"}
                },
                {
                    text: "Coca Cola",
                    attr: {type: "slide", link: "q5"}
                }]
        },
        {
            id: "q4no",
            errorPage: true,
            number: "04",
            title: "Та ні, не про цю корпорацію <br>йде мова у фільмі.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q5",
            errorPage: false,
            excerpt: "І це правильна відповідь!",
            number: "05",
            title: "Хто зробив бренд Johnnie Walker <br>всесвітньо відомим?",
            buttons: [
                {
                    text: "Олександр 一 син Джона",
                    attr: {type: "slide", link: "q6"}
                },
                {
                    text: "Партнер Джона по бізнесу",
                    attr: {type: "slide", link: "q5no"}
                }]
        },
        {
            id: "q5no",
            errorPage: true,
            number: "05",
            title: "А ось і ні. Саме його син вивів бренд <br>на світовий рівень.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q6",
            errorPage: false,
            excerpt: "Так, а ви чудово орієнтуєтесь <br>у деталях.",
            number: "06",
            title: "Син Джона створив навколо бренду міф. <br>Що саме він стверджував?",
            buttons: [
                {
                    text: "Те, що це напій амбітних",
                    attr: {type: "slide", link: "q7"}
                },
                {
                    text: "Те, що це напій, який надихає", //todo перенос после запятой
                    attr: {type: "slide", link: "q6no"}
                }]
        },
        {
            id: "q6no",
            errorPage: true,
            number: "06",
            title: "Гарно сказано, проте <br>відповідь 一 неправильна.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q7",
            errorPage: false,
            excerpt: "Бінго! Одразу видно, хто <br>уважно дивився фільм.",
            number: "07",
            title: "Для зменшення биття і забезпечення цілісності напою було створено <br>зараз уже культову пляшку. Яку вона мала форму?",
            buttons: [
                {
                    text: "Квадратну",
                    attr: {type: "slide", link: "q8"}
                },
                {
                    text: "Трикутну",
                    attr: {type: "slide", link: "q7no"}
                }]
        },
        {
            id: "q7no",
            errorPage: true,
            number: "07",
            title: "Це неправильна відповідь. <br>Схоже, саме час передивитися фільм.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q8",
            errorPage: false,
            excerpt: "Точно! У вас просто <br>феноменальна пам’ять.",
            number: "08",
            title: "У середині 19 ст. підприємство зазнало втрати врожаю. <br>Що стало її причиною?",
            buttons: [
                {
                    text: "Навала комах-шкідників",
                    attr: {type: "slide", link: "q9"}
                },
                {
                    text: "Пожежа",
                    attr: {type: "slide", link: "q8no"}
                }]
        },
        {
            id: "q8no",
            errorPage: true,
            number: "08",
            title: "Ні-ні, ви щось наплутали. Радимо <br>подивитися фільм ще раз.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q9",
            errorPage: false,
            excerpt: "Точно! Ви добре впоралися, <br>вітаємо.",
            number: "09",
            title: "Як звучала філософія Johnnie Walker в рекламі, що вийшла <br>на перший 100-літній ювілей бренду?",
            buttons: [
                {
                    text: "Надихаємо на перемоги",
                    attr: {type: "slide", link: "q9no"}
                },
                {
                    text: "Крокуємо невпинно",
                    attr: {type: "slide", link: "q10"}
                }]
        },
        {
            id: "q9no",
            errorPage: true,
            number: "09",
            title: "Напевно, ви просто забули. Хоча <br>ця версія звучить непогано.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q10",
            errorPage: false,
            excerpt: "Неймовірно! А ви крокуєте <br>до наступного запитання.",
            number: "10",
            title: "Як саме називали віскі у фільмі?",
            buttons: [
                {
                    text: "Золота Coca Cola",
                    attr: {type: "slide", link: "q11"}
                },
                {
                    text: "Вода життя",
                    attr: {type: "slide", link: "q10no"}
                }]
        },
        {
            id: "q10no",
            errorPage: true,
            number: "10",
            title: "Колись цей напій саме так і називали, проте <br>у фільмі звучить зовсім інша назва.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
        {
            id: "q11",
            errorPage: false,
            excerpt: "Так! І здогадатися чому 一 зовсім <br>нескладно.",
            number: "11",
            title: "Скiльки рокiв існує бренд Johnnie Walker?",
            buttons: [
                {
                    text: "150",
                    attr: {type: "slide", link: "q11"}
                },
                {
                    text: "201",
                    attr: {type: "action", link: "/form"}
                }]
        },
        {
            id: "q11no",
            errorPage: true,
            number: "11",
            title: "Перемога була так близько… <br>Але це неправильна відповідь.",
            buttons: [
                {
                    text: "Дивитись фільм",
                    attr: {type: "general", target: "_blank", link: baseFilmLink}
                },
                {
                    text: "Грати з початку",
                    attr: {type: "slide", link: "q1"}
                }]
        },
    ];

export const QuizScreen = () => {
    const [currentSlide, setCurrentSlide] = useState("q1");

    return (
        quizData.filter(el => el.id === currentSlide).map(el => {
            return (
                <Slide key={el.id}
                       errorPage={el.errorPage}
                       excerpt={el.excerpt}
                       number={el.number}
                       title={el.title}
                       buttons={el.buttons.map(btn => ({
                           ...btn,
                           onClick: () => setCurrentSlide(btn.attr.link)
                       }))}/>
            )
        })
    )
}