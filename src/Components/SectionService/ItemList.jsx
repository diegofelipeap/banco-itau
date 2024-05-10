import * as S from "./style";

export default function ItemList({ p, img, alt }) {
    return (
        <>
            <S.DivMascara>
                <img src={img} alt={alt} />
            </S.DivMascara>
            <p>{p}</p>
        </>
    );
}