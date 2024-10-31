import styled from "styled-components";

const Wrapper = styled.div`
    padding:20px;
    min-height:100vh;
    
    display: flex;
    flex-direction:column;
    gap: 25px;
    align-items:center;
    
    img{
        width: 90vw;
        max-width:600px;
        display:block;
    }
    p{
        color: var(--grey-500);
    }
    a{
        color: var(--primary-500);
    }

`

export default Wrapper;