import { Button, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ConstellList } from './Chemistry';

const Container = styled.div`
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;

    @media (max-width: 667px) {
        display: block;
        padding: 20px 30px;

        div:nth-child(2) > p:first-child {
            padding-top: 15px;
            margin-top: 20px;
            border-top: 1px dashed #d2d2d2;
        }
    }
`;

const ResultContainer = styled.div`
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 20px;
`;

const MainLabel = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 667px) {
        margin-bottom: 10px;
        font-size: 18px;
    }
`;

const InfoBox = styled.div`
    display: flex;
    align-items: center;
`;

const ChemiLabel = styled.label`
    flex: 0.3;
`;

const SearchBtn = styled.div`
    display: flex;
    @media (max-width: 667px) {
        margin-top: 20px;
        justify-content: center;
    }
`;

const FindMyChemistry = () => {
    const [myGender, setMyGender] = useState<string>('MAN');
    const [myConstellation, setMyConstellation] = useState<string>('물병');
    const [otherConstellation, setOtherConstellation] = useState<string>('물병');
    const [result, setResult] = useState<string>('');

    const handleSearch = () => {
        setResult('test');
    }

    return (
        <>
            <Container>
                <div style={{ flex: 1 }}>
                    <MainLabel>본인</MainLabel>
                    <InfoBox style={{ marginBottom: '10px' }}>
                        <ChemiLabel>성별</ChemiLabel>
                        <Select
                            value={myGender}
                            displayEmpty
                            onChange={(e) => setMyGender(e.target.value)}
                            style={{ marginLeft: '10px', flex: 1 }}
                            size='small'
                        >
                            <MenuItem value={"MAN"}>남성</MenuItem>
                            <MenuItem value={"WOMAN"}>여성</MenuItem>
                        </Select>
                    </InfoBox>
                    <InfoBox>
                        <ChemiLabel>별자리</ChemiLabel>
                        <Select
                            value={myConstellation}
                            displayEmpty
                            onChange={(e) => setMyConstellation(e.target.value)}
                            style={{ marginLeft: '10px', flex: 1 }}
                            size='small'
                        >
                            {ConstellList.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                        </Select>
                    </InfoBox>
                </div>
                <div style={{ flex: 1 }}>
                    <MainLabel>상대</MainLabel>
                    <InfoBox style={{ marginBottom: '10px' }}>
                        <ChemiLabel>성별</ChemiLabel>
                        <p style={{ display: 'block', lineHeight: '40px' }}>{myGender === 'MAN' ? '여성' : '남성'}</p>
                    </InfoBox>
                    <InfoBox>
                        <ChemiLabel>별자리</ChemiLabel>
                        <Select
                            value={otherConstellation}
                            displayEmpty
                            onChange={(e) => setOtherConstellation(e.target.value)}
                            style={{ marginLeft: '10px', flex: 1 }}
                            size='small'
                        >
                            {ConstellList.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                        </Select>
                    </InfoBox>
                </div>
                <SearchBtn>
                    <Button variant="outlined" onClick={handleSearch}>궁합 찾기</Button>
                </SearchBtn>
            </Container>
            {
                result.length > 0 &&
                <ResultContainer>
                    <MainLabel>궁합 결과</MainLabel>
                    {/* 따봉 / 붐따 */}
                    <p>{result}</p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" onClick={() => setResult('')}>다시 검색하기</Button>
                    </div>
                </ResultContainer>
            }
        </>
    )
}

export default FindMyChemistry;