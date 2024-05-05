import React from 'react'
import * as S from './styles'
import ImgAppleStore from '../../assets/btn-apple-store.svg'
import ImgPlayStore from '../../assets/btn-google-play.svg'
import Arrow from '../../assets/arrow-explorer.svg'
import WomanImage from '../../assets/woman.png'

export default function SectionHero() {
    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <S.H1>Tenha seu Banco na palma da mão</S.H1>
                    <S.H2>Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</S.H2>

                    <S.DivButtons>
                        <S.Button>
                            <img src={ImgAppleStore} alt="ícone da loja virtual App Store" />
                        </S.Button>
                        <S.Button>
                            <img src={ImgPlayStore} alt="ícone da loja virtual Google Play" />
                        </S.Button>
                    </S.DivButtons>

                    <S.ButtonExplorer>
                        <img src={Arrow} alt="ícone de seta para baixo" />
                        <S.Span>Continue Explorando</S.Span>
                    </S.ButtonExplorer>
                </S.DivLeft>

                <S.ImageWoman src={WomanImage} alt="Imagem de uma mulher" />

            </S.Container>
        </S.Section>
    )
}