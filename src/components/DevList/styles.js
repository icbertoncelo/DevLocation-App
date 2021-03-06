import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  border-radius: 5px;
  overflow: auto;

  p {
    text-align: center;
    font-size: 18px;
    color: #999999;
    padding: 10px;
  }
`;

export const Developer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 65%;

    strong {
      font-size: 16px;
      color: #666666;
    }

    span {
      font-size: 14px;
      color: #999999;
      margin-top: 5px;
    }
  } /* dev name/username */

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    background: #e00000;

    &:hover {
      background: #b00000;
    }

    i {
      color: #fff;
      font-size: 15px;
    }
  }
`;
