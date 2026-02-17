import { Container, Title, Select, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function Settings() {
    const { t, i18n } = useTranslation();

    return (
        <Container>
            <Title order={2} mb="md">{t('app.settings.title')}</Title>
            <Select
                label={t('app.settings.language.label')}
                placeholder={t('app.settings.language.placeholder')}
                data={['en', 'zh-TW']}
                value={i18n.language}
                onChange={(value) => i18n.changeLanguage(value || 'en')}
            />
            <Text mt="md" size="sm" c="dimmed">
                {t('app.settings.language.current', { lng: i18n.language })}
            </Text>
        </Container>
    );
}
