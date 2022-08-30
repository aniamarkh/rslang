import { GetWords } from '../types/types';
import { sendWordsListener } from '../wordList/userWordsListeners';

export class UI {
    mainPage: HTMLElement | null;

    textbookPage: HTMLElement | null;

    dictPage: HTMLElement | null;

    gamesPage: HTMLElement | null;

    statsPage: HTMLElement | null;

    logo: HTMLElement | null;

    mainPageBtn: HTMLElement | null;

    textbookPageBtn: HTMLElement | null;

    dictPageBtn: HTMLElement | null;

    gamesPageBtn: HTMLElement | null;

    statsPageBtn: HTMLElement | null;

    textbookSections: HTMLElement | null;

    modal: HTMLElement | null;

    modalGame: HTMLElement | null;

    loginBtn: HTMLElement | null;

    signupBtn: HTMLElement | null;

    constructor() {
        this.mainPage = document.getElementById('main-page');
        this.textbookPage = document.getElementById('textbook-page');
        this.dictPage = document.getElementById('dictionary-page');
        this.gamesPage = document.getElementById('games-page');
        this.statsPage = document.getElementById('stats-page');
        this.textbookSections = document.querySelector<HTMLElement>('.textbook__sections');

        this.logo = document.querySelector('.header__logo');
        this.mainPageBtn = document.getElementById('main-btn');
        this.textbookPageBtn = document.getElementById('textbook-btn');
        this.dictPageBtn = document.getElementById('dictionary-btn');
        this.gamesPageBtn = document.getElementById('games-btn');
        this.statsPageBtn = document.getElementById('stats-btn');

        this.modal = document.querySelector<HTMLElement>('.modal');
        this.modalGame = document.querySelector<HTMLElement>('.game__modal');
        this.loginBtn = document.getElementById('login-btn');
        this.signupBtn = document.getElementById('signup-btn');
    }

    init() {
        this.listenLogo();
        this.listenMainPageBtn();
        this.listenTextbookPageBtn();
        this.listenDictionaryBtn();
        this.listenGamesBtn();
        this.listenStatsBtn();
        this.listenLogin();
        this.listenSignup();
        this.listenModalClosure();
        this.listenTextbookSections();
        this.checkIfLogged();
    }

    checkIfLogged() {
        const isLogged = localStorage.getItem('Logged');
        if (isLogged !== 'logged' && this.textbookSections) {
            this.textbookSections.classList.add('hidden');
        }
    }

    showAuthorizedSections() {
        const textbookSections = document.querySelector<HTMLElement>('.textbook__sections');
        const wordBtns = document.querySelectorAll('.word__btns');
        const wordGames = document.querySelectorAll('.word__games');

        if (textbookSections && wordBtns && wordGames) {
            textbookSections.classList.remove('hidden');
            wordBtns.forEach((card) => card.classList.remove('hidden'));
            wordGames.forEach((card) => card.classList.remove('hidden'));
        }
    }

    hideAuthorizedSections() {
        const textbookSections = document.querySelector<HTMLElement>('.textbook__sections');
        const wordBtns = document.querySelectorAll('.word__btns');
        const wordGames = document.querySelectorAll('.word__games');

        if (textbookSections && wordBtns && wordGames) {
            textbookSections.classList.add('hidden');
            wordBtns.forEach((card) => card.classList.add('hidden'));
            wordGames.forEach((card) => card.classList.add('hidden'));
        }
    }

    listenLogo() {
        if (this.logo) {
            this.logo.addEventListener('click', () => {
                if (this.mainPage && this.mainPageBtn) {
                    this.showPage(this.mainPage, this.mainPageBtn);
                }
            });
        }
    }

    listenMainPageBtn() {
        if (this.mainPageBtn) {
            this.mainPageBtn.addEventListener('click', () => {
                if (this.mainPage && this.mainPageBtn) {
                    this.showPage(this.mainPage, this.mainPageBtn);
                }
            });
        }
    }

    listenTextbookPageBtn() {
        if (this.textbookPageBtn) {
            this.textbookPageBtn.addEventListener('click', () => {
                if (this.textbookPage && this.textbookPageBtn) {
                    this.showPage(this.textbookPage, this.textbookPageBtn);
                }
            });
        }
    }

    listenDictionaryBtn() {
        if (this.dictPageBtn) {
            this.dictPageBtn.addEventListener('click', () => {
                if (this.dictPage && this.dictPageBtn) {
                    this.showPage(this.dictPage, this.dictPageBtn);
                }
            });
        }
    }

    listenGamesBtn() {
        if (this.gamesPageBtn) {
            this.gamesPageBtn.addEventListener('click', () => {
                if (this.gamesPage && this.gamesPageBtn) {
                    this.showPage(this.gamesPage, this.gamesPageBtn);
                }
            });
        }
    }

    listenStatsBtn() {
        if (this.statsPageBtn) {
            this.statsPageBtn.addEventListener('click', () => {
                if (this.statsPage && this.statsPageBtn) {
                    this.showPage(this.statsPage, this.statsPageBtn);
                }
            });
        }
    }

    listenLogin() {
        if (this.loginBtn) {
            this.loginBtn.addEventListener('click', () => this.showModal('login'));
        }
    }

    listenSignup() {
        if (this.signupBtn) {
            this.signupBtn.addEventListener('click', () => this.showModal('signup'));
        }
    }

    showPage(page: HTMLElement, pageBtn: HTMLElement) {
        const pagesArray = document.querySelectorAll('.page');
        const navBtsArray = document.querySelectorAll('.nav__btn');

        pagesArray.forEach((page) => page.classList.add('hidden'));
        navBtsArray.forEach((btn) => {
            if (btn.classList.contains('nav__btn--active')) {
                btn.classList.remove('nav__btn--active');
            }
        });
        page.classList.remove('hidden');
        pageBtn.classList.add('nav__btn--active');

        if (page === this.textbookPage) {
            this.listenScrollBtn();
            this.listenTextbookScroll();
        }
    }

    listenLoginSpan() {
        const loginSpan = document.querySelector<HTMLElement>('.login-span');
        if (loginSpan) {
            loginSpan.addEventListener('click', () => this.renderModalText('login'));
        }
    }

    listenSignupSpan() {
        const loginSpan = document.querySelector<HTMLElement>('.signup-span');
        if (loginSpan) {
            loginSpan.addEventListener('click', () => this.renderModalText('signup'));
        }
    }

    listenModalClosure() {
        const crossBtn = document.querySelector<HTMLElement>('.modal__close-btn');
        const modal = document.getElementById('modal');

        if (crossBtn) {
            crossBtn.addEventListener('click', this.closeModal);
        }

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target instanceof HTMLElement && event.target.classList.contains('modal')) {
                    this.closeModal();
                }
            });
        }
    }

    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showModal(string: 'login' | 'signup') {
        if (this.modal) {
            this.renderModalText(string);
            this.modal.classList.remove('hidden');
        }
    }

    renderModalText(string: 'login' | 'signup') {
        const modalTextLogin = document.querySelector<HTMLElement>('.modal__text--login');
        const modalTextSignup = document.querySelector<HTMLElement>('.modal__text--signup');
        if (modalTextLogin && modalTextSignup) {
            if (string === 'login') {
                modalTextLogin.classList.remove('hidden');
                modalTextSignup.classList.add('hidden');
                this.listenSignupSpan();
            } else if (string === 'signup') {
                modalTextLogin.classList.add('hidden');
                modalTextSignup.classList.remove('hidden');
                this.listenLoginSpan();
            }
        }
    }

    getWordCards(result: GetWords[], page?: 'easy' | 'hard') {
        return result.map((item) => {
            const card = document.createElement('div');
            card.classList.add('words__card');
            card.id = item.id;

            card.innerHTML = `
                    <img class="word__img"
                    src="https://react-learnwords-english.herokuapp.com/${item.image}" alt="word image">
                    <div class="word__text">
                        <div class="word__title">
                            <div class="word__title--top">
                                <h2>${item.word} ${item.transcription}</h2>
                                <span class="material-symbols-outlined word__audio" data-volume=${item.id}>
                                volume_up
                                </span>
                            </div>
                            <p class="word__translate">${item.wordTranslate}</p>
                        </div>
                        <br>

                        <div class="${localStorage.getItem('Logged') === 'logged' && page !== 'easy' && page !== 'hard'
                    ? 'word__btns'
                    : 'word__btns hidden'
                }">
                            <button class="word__btns--learned" data-id="${item.id}">Изученное</button>

                            <button class="word__btns--hard" data-id="${item.id}">Сложное</button> 

                        </div>

                        <div class="words__audio" data-audio=${item.id}>
                            <audio src="https://react-learnwords-english.herokuapp.com/${item.audio}"></audio>
                            <audio src="https://react-learnwords-english.herokuapp.com/${item.audioMeaning}"></audio>
                            <audio src="https://react-learnwords-english.herokuapp.com/${item.audioExample}"></audio>
                        </div>

                        <br>
                        <div class=
                        "${localStorage.getItem('Logged') === 'logged' ? 'word__games' : 'word__games hidden'}">
                            <h3>Ответы в играх:</h3>
                            <p>Спринт - 0 из 0</p>
                            <p>Аудиовызов - 0 из 0</p>
                        </div>

                        <br>

                        <p>${item.textMeaning}</p>
                        <p class="word__translate">${item.textMeaningTranslate}</p>
                        <p>${item.textExample}</p>
                        <p class="word__translate">${item.textExampleTranslate}</p>
                    </div>
            `;

            card.addEventListener('click', sendWordsListener);
            return card;
        });
    }

    listenScrollBtn() {
        const scrollBtn = document.querySelector<HTMLElement>('.scroll-btn');
        if (scrollBtn) {
            scrollBtn.addEventListener('click', () => {
                if (scrollBtn.classList.contains('btn-down')) {
                    window.scrollTo(0, document.body.scrollHeight);
                } else if (scrollBtn.classList.contains('btn-up')) {
                    window.scrollTo(document.body.scrollHeight, 0);
                }
            });
        }
    }

    listenTextbookScroll() {
        const scrollBtn = document.querySelector<HTMLElement>('.scroll-btn');

        window.onscroll = function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && scrollBtn) {
                scrollBtn.classList.remove('btn-down');
                scrollBtn.classList.add('btn-up');
                scrollBtn.style.bottom = '100px';
                scrollBtn.innerHTML = `
                <span class="material-symbols-outlined">
                arrow_upward
                </span>
              `;
            } else if (document.body.scrollTop === 0 && scrollBtn) {
                scrollBtn.classList.add('btn-down');
                scrollBtn.classList.remove('btn-up');
                scrollBtn.style.bottom = '20px';
                scrollBtn.innerHTML = `
                <span class="material-symbols-outlined">
                arrow_downward
                </span>
              `;
            }
        };
    }

    listenTextbookSections() {
        const textbookBtn = document.getElementById('section-textbook');
        const learnedBtn = document.getElementById('section-learned');

        const textbookSection = document.querySelector<HTMLElement>('.textbook__wrapper');
        const learnedSection = document.querySelector<HTMLElement>('.learned__wrapper');

        const scrollBtn = document.querySelector<HTMLElement>('.scroll-btn');

        const gamesBtns = document.querySelector<HTMLElement>('.textbook__games');

        if (textbookBtn && learnedBtn && textbookSection && learnedSection && scrollBtn && gamesBtns) {
            textbookBtn.addEventListener('click', () => {
                textbookBtn.classList.add('section--active');
                learnedBtn.classList.remove('section--active');
                textbookSection.classList.remove('hidden');
                learnedSection.classList.add('hidden');
                scrollBtn.classList.remove('hidden');
                gamesBtns.classList.remove('hidden');
            });

            learnedBtn.addEventListener('click', () => {
                learnedBtn.classList.add('section--active');
                textbookBtn.classList.remove('section--active');
                textbookSection.classList.add('hidden');
                learnedSection.classList.remove('hidden');
                scrollBtn.classList.add('hidden');
                gamesBtns.classList.add('hidden');
            });
        }
    }
}
