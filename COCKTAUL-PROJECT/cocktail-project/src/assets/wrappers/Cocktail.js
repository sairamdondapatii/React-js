import styled from "styled-components";

const Wrapper = styled.section`
.header{
    text-align:center;
    h3{
        margin-top:1rem;
        margin-bottom:2.5rem;
    }
}
.drink-container{
    max-width:var(--max-width);
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30px;
}
.image-container{
    img{
        height: 20rem;
        border-radius:var(--borderRadius)
    }
}
.drink-content{
    p{
        margin: 1rem;
        line-height:20px;
        letter-spacing:2px;
        font-weight:700;
        color:var(--grey-900);
        span{
            background-color:var(--primary-300);
            color:var(--primary-700);
            padding:2px 6px;
            border-radius:var(--borderRadius);
            margin-right: 5px ;
        }
    }
}
@media screen and (max-width:767px){
    .drink-container{
        flex-wrap:wrap;
    }
    
}
`

export default Wrapper;