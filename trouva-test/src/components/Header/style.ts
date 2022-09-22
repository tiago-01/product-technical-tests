import styled from "styled-components"

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  background-color: #dfe9fb;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 8%);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999999;
  .content-wrapper {
    max-width: 1400px;
    display: flex;
    margin: auto;
    width: 100%;
    align-items: center;
    height: 100%;
    font-family: Inter;
    font-size: 28px;
    justify-content: center;
  }
`
 