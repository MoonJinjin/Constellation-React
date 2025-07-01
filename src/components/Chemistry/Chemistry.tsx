import React from 'react';
import styled from 'styled-components';
import FindMyChemistry from './FindMyChemistry';

const Container = styled.div`
    padding: 30px;
`;

const HeaderTD = styled.td`
    width: 80px;
    height: 40px;
    font-size: 1rem;
    background: #fafa6d;

    @media (max-width: 767px) {
        font-size: 2.2vw;
    }
`;

const TableTD = styled.td<{ value: string }>`
    width: 80px;
    height: 40px;
    font-size: 1rem;
    background: ${(props: any) => props.value === 'default' ? '#fafa6d' : props.value === 'A' ? '#aae6ff' : props.value === 'F' ? '#ff9696' : 'white'};

    @media (max-width: 767px) {
        font-size: 2.5vw;
    }
`;

export const ConstellList = ['물병', '물고기', '양', '황소', '쌍둥이', '게', '사자', '처녀', '천칭', '전갈', '사수', '염소'];

const Chemistry = () => {
    return (
        <>
            <Container>
                <FindMyChemistry />
                <p style={{ fontWeight: 'bold', fontSize: '23px', color: 'white', marginBlock: '10px' }}>전체 궁합 표</p>
                <table align="center" style={{ margin: '0 auto', width: '100%' }}>
                    <thead>
                        <tr style={{ textAlign: 'center', background: 'yellow' }}>
                            <HeaderTD> 여 / 남 </HeaderTD>
                            {ConstellList.map(v => <HeaderTD>{v}</HeaderTD>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 물병 </TableTD>
                            {['G', 'A', 'H', 'E', 'C', 'A', 'H', 'E', 'F', 'B', 'C', 'D'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'>물고기 </TableTD>
                            {['E', 'H', 'B', 'C', 'E', 'C', 'A', 'E', 'G', 'F', 'B', 'F'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>

                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 양 </TableTD>
                            {['C', 'E', 'G', 'B', 'G', 'D', 'C', 'B', 'F', 'D', 'H', 'A'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 황소 </TableTD>
                            {['A', 'H', 'D', 'C', 'B', 'H', 'E', 'F', 'B', 'G', 'G', 'H'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 쌍둥이 </TableTD>
                            {['C', 'A', 'H', 'E', 'H', 'B', 'H', 'E', 'G', 'A', 'F', 'D'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 게 </TableTD>
                            {['D', 'H', 'A', 'G', 'E', 'C', 'B', 'G', 'E', 'F', 'A', 'H'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 사자 </TableTD>
                            {['C', 'G', 'H', 'B', 'G', 'D', 'H', 'A', 'F', 'D', 'F', 'B'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 처녀 </TableTD>
                            {['A', 'H', 'D', 'E', 'A', 'C', 'D', 'F', 'B', 'F', 'E', 'G'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 천칭 </TableTD>
                            {['C', 'B', 'F', 'E', 'F', 'A', 'G', 'E', 'C', 'A', 'G', 'D'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 전갈 </TableTD>
                            {['D', 'F', 'A', 'G', 'D', 'F', 'B', 'C', 'D', 'C', 'B', 'H'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 사수 </TableTD>
                            {['C', 'E', 'G', 'B', 'C', 'D', 'H', 'A', 'F', 'D', 'H', 'B'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <TableTD value='default'> 염소 </TableTD>
                            {['B', 'F', 'D', 'F', 'A', 'G', 'D', 'E', 'A', 'G', 'E', 'C'].map(v => <TableTD value={v}>{v}</TableTD>)}
                        </tr>
                    </tbody>

                </table>
            </Container>
        </>
    )
}

export default Chemistry;