import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function Reset() {
  const { t } = useTranslation();
  return <Title order={2}>{t('app.nav.reset')}</Title>;
}

