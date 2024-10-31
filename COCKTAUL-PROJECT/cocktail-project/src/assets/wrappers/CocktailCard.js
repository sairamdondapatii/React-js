import styled from "styled-components";
const Wrapper = styled.div`
 box-shadow:var(--shadow-2);
 border-radius:var(--borderRadius);
 img{
    height: 15rem;
    object-fit:cover;
    border-top-left-radius:var(--borderRadius);
    border-top-right-radius:var(--borderRadius);
 }
 .content{
    padding:1.5rem;
    h4,h5{
        margin-bottom:0.5rem;
    }
    h4{
        font-weight:700;
    }
    p{
        margin-bottom:1rem;
        color:var(--grey-500);
    }
 }
`

export default Wrapper