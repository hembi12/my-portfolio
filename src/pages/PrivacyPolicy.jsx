// PrivacyPolicy.jsx con Soporte para Modo Oscuro
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white transition-colors duration-500">
            <div className="container mx-auto px-4">
                {/* Solo el título */}
                <div className="mb-8">
                    <h1 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
                        {t('privacyPolicyTitle')}
                    </h1>
                </div>
                
                <div className="text-lg leading-relaxed space-y-6">
                    <p dangerouslySetInnerHTML={{ __html: t('privacyPolicyParagraph1') }}></p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('privacyPolicySection1Title')}</h2>
                        <p>{t('privacyPolicySection1Description')}</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1 text-black dark:text-white">
                            <li>{t('privacyPolicySection1Item1')}</li>
                            <li>{t('privacyPolicySection1Item2')}</li>
                            <li>{t('privacyPolicySection1Item3')}</li>
                            <li>{t('privacyPolicySection1Item4')}</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('privacyPolicySection2Title')}</h2>
                        <p>{t('privacyPolicySection2Description')}</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1 text-black dark:text-white">
                            <li>{t('privacyPolicySection2Item1')}</li>
                            <li>{t('privacyPolicySection2Item2')}</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('privacyPolicySection3Title')}</h2>
                        <p>{t('privacyPolicySection3Description')}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('privacyPolicySection4Title')}</h2>
                        <p>{t('privacyPolicySection4Description')}</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1 text-black dark:text-white">
                            <li>{t('privacyPolicySection4Item1')}</li>
                            <li>{t('privacyPolicySection4Item2')}</li>
                            <li>{t('privacyPolicySection4Item3')}</li>
                        </ul>
                        <p className="mt-2" dangerouslySetInnerHTML={{ __html: t('privacyPolicySection4FinalSentence') }}></p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('privacyPolicySection5Title')}</h2>
                        <p>{t('privacyPolicySection5Description')}</p>
                    </div>

                    <p className="mt-2" dangerouslySetInnerHTML={{ __html: t('privacyPolicyFinalParagraph') }}></p>

                    {/* Botón centrado */}
                    <div className="text-center mt-6">
                        <Link to="/">
                            <button className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
                                {t('backButton')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
