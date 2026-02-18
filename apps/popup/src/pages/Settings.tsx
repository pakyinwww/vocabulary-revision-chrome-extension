import { Container, Title, Select, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { getConfig, setConfig } from '@repo/config';
import { useEffect } from 'react';

export function Settings() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getConfig().then((config) => {
            if (config.language && config.language !== i18n.language) {
                i18n.changeLanguage(config.language);
            }
        });
    }, [i18n]);

    const handleLanguageChange = async (value: string | null) => {
        const lang = value || 'en';
        await i18n.changeLanguage(lang);
        const config = await getConfig();
        await setConfig({ ...config, language: lang });
    };

    return (
        <Container>
            <Title order={2} mb="md">{t('app.settings.title')}</Title>
            <Select
                label={t('app.settings.language.label')}
                placeholder={t('app.settings.language.placeholder')}
                data={['en', 'zh-TW']}
                value={i18n.language}
                onChange={handleLanguageChange}
            />
            <Text mt="md" size="sm" c="dimmed">
                {t('app.settings.language.current', { lng: i18n.language })}
            </Text>
        </Container>
    );
}
