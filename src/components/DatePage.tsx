import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import 물병자리 from '../img/물병자리.png';
import 물고기자리 from '../img/물고기자리.png';
import 양자리 from '../img/양자리.png';
import 황소자리 from '../img/황소자리.png';
import 쌍둥이자리 from '../img/쌍둥이자리.png';
import 게자리 from '../img/게자리.png';
import 사자자리 from '../img/사자자리.png';
import 처녀자리 from '../img/처녀자리.png';
import 천칭자리 from '../img/천칭자리.png';
import 전갈자리 from '../img/전갈자리.png';
import 사수자리 from '../img/사수자리.png';
import 염소자리 from '../img/염소자리.png';
import styled from 'styled-components';

const Container = styled.div`
    padding: 30px;
`;

const itemData = [
    {
        img: 물병자리,
        title: '물병자리',
        desc: '1월 20일 ~ 2월 18일',
    },
    {
        img: 물고기자리,
        title: '물고기자리',
        desc: '2월 19일 ~ 3월 20일',
    },
    {
        img: 양자리,
        title: '양자리',
        desc: '3월 21일 ~ 4월 19일',
    },
    {
        img: 황소자리,
        title: '황소자리',
        desc: '4월 20일 ~ 5월 20일',
    },
    {
        img: 쌍둥이자리,
        title: '쌍둥이자리',
        desc: '5월 21일 ~ 6월 21일',
    },
    {
        img: 게자리,
        title: '게자리',
        desc: '6월 22일 ~ 7월 22일',
    },
    {
        img: 사자자리,
        title: '사자자리',
        desc: '7월 23일 ~ 8월 22일',
    },
    {
        img: 처녀자리,
        title: '처녀자리',
        desc: '8월 23일 ~ 9월 22일',
    },
    {
        img: 천칭자리,
        title: '천칭자리',
        desc: '9월 23일 ~ 10월 22일',
    },
    {
        img: 전갈자리,
        title: '전갈자리',
        desc: '10월 23일 ~ 11월 22일',
    },
    {
        img: 사수자리,
        title: '사수자리',
        desc: '11월 23일 ~ 12월 21일',
    },
    {
        img: 염소자리,
        title: '염소자리',
        desc: '12월 22일 ~ 1월 19일',
    },
]

const DatePage = () => {
    return (
        <Container>
            <ImageList sx={{ width: '100%', height: 450 }} cols={3}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.img}?w=248&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>{item.desc}</span>}
                            position="below"
                            style={{ color: 'white' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

export default DatePage;