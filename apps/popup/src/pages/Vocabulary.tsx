import { Table, Title, Container } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export function Vocabulary() {
    const { t } = useTranslation();

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Container>
            <Title order={2} mb="md">{t('app.vocabulary.title')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('app.vocabulary.table.position')}</Table.Th>
                        <Table.Th>{t('app.vocabulary.table.name')}</Table.Th>
                        <Table.Th>{t('app.vocabulary.table.symbol')}</Table.Th>
                        <Table.Th>{t('app.vocabulary.table.mass')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Container>
    );
}
