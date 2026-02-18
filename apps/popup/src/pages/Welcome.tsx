import { Button, Center, Container, Select, Title, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { getConfig, setConfig } from '@repo/config';
import { useNavigate } from 'react-router-dom';

export function Welcome() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleLanguageChange = async (value: string | null) => {
        const lang = value || 'en';
        await i18n.changeLanguage(lang);
    };

    const handleConfirm = async () => {
        const config = await getConfig();
        await setConfig({ ...config, firstTime: false, language: i18n.language });
        navigate('/vocabulary');
    };

    return (
        <Container h="100%">
            <Center h="100%">
                <Stack align="center" gap="lg">
                    <Title order={2}>{t('app.welcome.title')}</Title>
                    <Select
                        label={t('app.settings.language.label')}
                        placeholder={t('app.settings.language.placeholder')}
                        data={[{ value: 'en', label: t('app.settings.language.name.en') }, { value: 'zh-TW', label: t('app.settings.language.name.zh-TW') }]}
                        value={i18n.language}
                        onChange={handleLanguageChange}
                    />
                    <Button onClick={handleConfirm}>{t('app.welcome.confirm')}</Button>
                </Stack>
            </Center>
        </Container>
    );
}
