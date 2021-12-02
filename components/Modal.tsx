import { operatorType } from "../types";
import { FormEvent, useState, Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

type propsType = {
  curOperator: operatorType;
  setModal: Dispatch<SetStateAction<boolean>>;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

interface IFiledData {
  [key: string]: number | string;
}

function Modal({ curOperator, setModal, counter, setCounter }: propsType) {

  const [content, setContent] = useState({ total: "", tel: "" });
  const [error, setError] = useState({ flag: false, total: "", tel: "" });

  const changeField = (field: IFiledData) => {
    setContent((state) => ({ ...state, ...field }));
  };

  const changeTel = (val: string) => {
    changeField({ tel: val });
  };

  const changeTotal = (val: string) => {
    const sumStr = val.replace(/[^\d]/g, "");
    if (+sumStr > 1000) return changeField({ total: "1000" });
    if (+sumStr < 0) return changeField({ total: "0" });
    changeField({ total: sumStr });
  };

  const checkPhone = (str: string): null | string => {
    const tel = str.replace(/[^\d]/g, "");
    if (tel.length < 10) return null;
    return tel;
  };

  const checkSum = (str: string) => {
    const minOrder = 100;
    if (+str < minOrder) return null;
    return str;
  };

  const payForServices = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let access = true;

    if (content.tel === "") {
      setError((state) => ({ ...state, flag: true, tel: "заполните поле" }));
      access = false;
    }
    if (content.total === "") {
      setError((state) => ({ ...state, flag: true, total: "заполните поле" }));
      access = false;
    }
    if (!access) return;

    if (checkPhone(content.tel) === null) {
      setError((state) => ({
        ...state,
        flag: true,
        tel: "некорректный номер телефона"
      }));
      access = false;
    }

    if (checkSum(content.total) === null) {
      setError((state) => ({
        ...state,
        flag: true,
        total: "минимальная сумма оплаты 100руб"
      }));
      access = false;
    }
    if (!access) return;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => {
        const newState = counter + 1;
        if (newState % 2) {
          alert('Операция прошла успешно!');
        } else {
          alert('Что-то пошло не так!');
        }
        setCounter(newState);
        setModal(state => !state);
      })
      
  };

  return (
    <Container>
      <Form onSubmit={(e) => payForServices(e)}>
        <TitleWrapper>
          <h1>{curOperator.name}</h1>
          <img
            className="m_logo"
            src={prefix + "/images/" + curOperator.logo}
            alt="operator logo"
          />
        </TitleWrapper>
        <WrapperInput>
          <Label>номер телефона:</Label>
          <InputMask
            mask="+7(999)999-99-99"
            placeholder="+7(999)999-99-99"
            value={content.tel}
            onChange={(e) => changeTel(e.target.value)}
            onFocus={() =>
              setError((state) => ({ ...state, flag: false, tel: "" }))
            }
          >
            {(inputProps: any) => <Input {...inputProps} />}
          </InputMask>
          <ErrorMessage>{error.tel}</ErrorMessage>
        </WrapperInput>
        <WrapperInput>
          <Label>сумма зачисления:</Label>
          <Input
            type="text"
            placeholder="0"
            value={content.total}
            onChange={(e) => changeTotal(e.target.value)}
            onFocus={() =>
              setError((state) => ({ ...state, flag: false, total: "" }))
            }
          />
          <ErrorMessage>{error.total}</ErrorMessage>
        </WrapperInput>
        <WrapperBtns>
          <Button>оплатить</Button>
          <Button onClick={() => setModal((s) => !s)}>отмена</Button>
        </WrapperBtns>
      </Form>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;

  .m_logo {
    display: block;
    width: 46px;
    height: 46px;
  }
`;

const TitleWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.form`
  padding: 10px 6px 40px;
  min-width: 320px;
  max-width: 480px;
  width: 100%;

  border-radius: 4px;
  background-color: #fefbf3;

  box-shadow: 0px 0px 12px 3px rgba(255, 255, 255, 0.3);
`;

const WrapperInput = styled.div`
  margin: 10px 0px;
`;

const Label = styled.div`
  padding: 0px 0px 3px;
  width: 100%;
  text-indent: 6px;
  font-size: 15px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  text-indent: 6px;
  font-size: 15px;

  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 2px solid DodgerBlue;
  }
`;

const ErrorMessage = styled.div`
  height: 30px;
  width: 100%;
  color: red;
  text-indent: 6px;
`;

const WrapperBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 600;
  color: DodgerBlue;

  border: 1px solid DodgerBlue;
  border-radius: 4px;

  background-color: #fefefe;
  cursor: pointer;

  &:hover {
    background-color: DodgerBlue;
    color: #fff;
  }
`;
