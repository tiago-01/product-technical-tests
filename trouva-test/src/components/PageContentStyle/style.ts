import styled from 'styled-components'

export const PageContentStyle = styled.div`
  padding: 50px 0 100px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1.page-title {
      font-size: 18px;
      font-family: Inter;
      line-height: 24px;
      font-weight: normal;
      margin: 0;
  }
  .boutiques-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    margin-top: 25px;
  }
  .boutique-wrapper {
    border: 1px solid #dfe9fb;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .boutique-wrapper .image-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 300px;
  }
  .boutique-wrapper img {
    width: 100%;
    height: auto;
  }
  .boutique-wrapper p {
    margin: 0;
    font-family: Inter;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-top: 10px;
  }
 
  .more-button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 16px;
    font-family: Inter;
    margin-right: 10px;
    margin-top: 50px;
  }
  .filter-button {
    border: 1px solid #dfe9fb;
    padding: 10px 15px;
    font-size: 14px;
    font-family: Inter;
    margin-right: 0;
    margin-left: auto;
    margin-top: 20px;
  }
  .filter-button.active {
    background-color: #dfe9fb;
  }
  .status {
    font-family: Inter;
    color: red;
    margin-right: 0;
    margin-left: auto;
    font-size: 12px;
  }
  @media (max-width: 1500px) {
    padding: 50px 80px 100px;
  }
  @media (max-width: 991px) {
    padding: 50px 50px 100px;
  }
  @media (max-width: 768px) {
   .boutiques-wrapper {
     grid-template-columns: 1fr 1fr;
   }
  }
  @media (max-width: 600px) {
    padding: 25px 15px 100px;
   .boutiques-wrapper {
     grid-template-columns: 1fr;
   }
   .filter-button {
    margin-right: auto;
    margin-left: 0;
   }
  }
`
