<script>
	import AdminLinkSvg from '../shared/svg/AdminLinkSVG.svelte';
	import ArrowLinkSvg from '../shared/svg/ArrowLinkSVG.svelte';
	import TvLinkSvg from '../shared/svg/TVLinkSVG.svelte';

</script>
<footer class="footer" id="contacts">
    <div class="footer__links">
        <a href="https://vmeste29.globalfoods.ru/tv" target="_blank" rel="noreferrer">
            <TvLinkSvg/>
        </a>
        <a href="https://vmeste29.globalfoods.ru/admin" target="_blank" rel="noreferrer">
            <AdminLinkSvg/>
        </a>
    </div>
    <div class="footer__wrapper">
        <a class="footer__wrapper__email-link" href="mailto:info@globalfoods.ru" rel="noreferrer">info@globalfoods.ru</a>
        <a class="footer__wrapper__phone" href="tel:+74957871144" rel="noreferrer">+7 (495) 787-11-44</a>
        <div class="footer__wrapper__info">
            <div class="footer__wrapper__info__left">
                <div class="footer__wrapper__info__left__support">
                    <p class="footer__wrapper__info__left__support__text">
                        По вопросам
                        поддержки пишите
                        на почту или звоните
                    </p>
                    <div class="footer__wrapper__info__left__support__links">
                        <span class="footer__wrapper__info__left__support__links__rights">Все права защищены</span>
                        <a class="footer__wrapper__info__left__support__links__rights policy" href="/gf_policy.pdf" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
                    </div>
                </div>
                <div class="footer__wrapper__info__left__media">
                    <a class="footer__wrapper__info__left__media__link" href="https://t.me/globalfoodshoreca" target="_blank" rel="noreferrer">
                        telegram
                        <ArrowLinkSvg/>
                    </a>
                    <a class="footer__wrapper__info__left__media__link" href="https://vk.com/globalfoodshoreca" target="_blank" rel="noreferrer">
                        вконтакте
                        <ArrowLinkSvg/>
                    </a>
                </div>
            </div>
            <div class="footer__wrapper__info__right">
                <address class="footer__wrapper__info__right__address">
                    <a class="footer__wrapper__info__right__address__phone" href="tel:+74957871144">+7 (495) 787-11-44</a>
                    <p class="footer__wrapper__info__right__address__location">
                        111395, г. Москва, ул. Юности, д. 5, стр. 1, корп. А
                    </p>
                </address>
                <a class="footer__wrapper__info__right__mainsoft" href="https://mainsoft.pro/" target="_blank" rel="noreferrer">Сайт создан в mainsoft.pro</a>
                <div class="footer__wrapper__info__right__ps">
                    <a class="footer__wrapper__info__right__ps__polycies rights" href="https://mainsoft.pro/" target="_blank" rel="noreferrer">Сайт создан в mainsoft.pro</a>
                    <span class="footer__wrapper__info__right__ps__polycies rights">Все права защищены</span>
                    <a class="footer__wrapper__info__right__ps__polycies rights" href="/gf_policy.pdf" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    .footer {
        width: 100%;

        display: flex;
        justify-content: center;

        position: relative;

        padding: 3.3125rem 0 6.0625rem 0;

        background-color: var(--step-bg);

        @media (width < 750px) {
            padding: 3.25rem 0;
        }

        &__links {
            display: flex;
            gap: 1rem;

            position: absolute;
            bottom: 2rem;

            @media (width < 750px) {
                bottom: 0.5rem;
                left: 1rem;
            }
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 3.6875rem;

            @media (width < 1790px) {
                padding: 0 1rem;
            }

            @media (width < 1220px) {
                width: 100%;
            }

            @media (width < 1790px) {
                gap: 2.1875rem;
            }

            &__email-link {
                text-align: center;
                text-transform: uppercase;
                font-size: 5.5rem;
                font-weight: 700;

                @media (width < 1220px) {
                    font-size: 1.875rem;
                    text-align: start;
                }

                @media (width < 450px) {
                    font-size: 1.5rem;
                    text-align: start;
                }
            }

            &__phone {
                display: none;

                margin-top: -1rem;

                color: var(--white);
                font-size: 1.5rem;

                @media (width < 750px) {
                    display: block;
                }
            }

            &__info {
                width: 100%;

                display: flex;
                justify-content: space-between;

                @media (width < 750px) {
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                    gap: 2.1875rem;
                }

                &__left {
                    display: flex;
                    gap: 8.5rem;

                    @media (width < 750px) {
                        flex-direction: column;
                        gap: 2.1875rem;
                    }

                    &__support {
                        display: flex;
                        flex-direction: column;
                        gap: 5rem;

                        @media (width < 750px) {
                            gap: 0;
                        }

                        &__text {
                            max-width: 10rem;

                            font-size: 0.875rem;

                            @media (width < 750px) {
                                max-width: 16rem;

                                font-size: 1.125rem;
                            }
                        }

                        &__links {
                            display: flex;
                            gap: 3rem;

                            &__rights {
                                font-size: 0.75rem;
                                color: var(--passive-color);

                                @media (width < 750px) {
                                    display: none;
                                }
                            }

                            &__rights.policy {
                                text-decoration: underline;
                            }
                        }
                    }

                    &__media {
                        display: flex;
                        flex-direction: column;
                        gap: 0.6rem;

                        &__link {
                            font-size: 0.875rem;
                            color: var(--white);

                            @media (width < 750px) {
                                font-size: 1.5rem;
                            }
                        }
                    }
                }

                &__right {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;

                    @media (width < 750px) {
                        gap: 2.1875rem;
                    }

                    &__address {
                        display: flex;
                        flex-direction: column;
                        align-items: end;
                        gap: 0.75rem;

                        font-style: normal;

                        @media (width < 750px) {
                            align-items: start;
                            gap: 1rem;
                        }

                        &__phone {
                            font-size: 0.875rem;
                            color: var(--white);

                            @media (width < 750px) {
                                display: none;
                            }
                        }

                        &__location {
                            max-width: 10rem;

                            text-align: end;
                            font-size: 0.875rem;

                            @media (width < 750px) {
                                max-width: 90%;

                                text-align: start;

                                font-size: 1.5rem;
                            }
                        }
                    }

                    &__mainsoft {
                        font-size: 0.75rem;
                        color: var(--passive-color);
                        text-decoration: underline;
                        color: var(--white);

                        @media (width < 750px) {
                            display: none;
                        }
                    }

                    &__ps {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;

                        &__polycies {
                            font-size: 0.75rem;
                            color: var(--passive-color);

                            @media (width < 750px) {
                                font-size: 1.125rem;
                            }

                            &:nth-child(1) {
                                order: 3;
                            }
                        }

                        .rights {
                            display: none;

                            &:nth-child(1),
                            &:nth-child(3) {
                                text-decoration: underline;
                            }

                            &:nth-child(1) {
                                color: var(--white);
                            }

                            @media (width < 750px) {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
