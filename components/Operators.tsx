import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { listOperatorsType, operatorType } from "../types";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type propsType = {
  operators: listOperatorsType;
  setModal: Dispatcher<boolean>;
  setCurOperator: Dispatcher<operatorType>;
};

function Operators({ operators, setModal, setCurOperator }: propsType) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const chooseOrder = (curId: number) => {
    setCurOperator(operators.find((obj) => obj.id === curId)!);
    setModal((s) => !s);
  };

  return (
    <Section>
      <Menu>
        <Label
          className={displayMenu ? "active" : ""}
          onClick={() => setDisplayMenu((s) => !s)}
        >
          Выберите оператора:
        </Label>
        <List className={displayMenu ? "active" : ""}>
          {operators.length !== 0 ? (
            operators.map(({ id, name, logo }) => (
              <ListItem key={id} onClick={() => chooseOrder(id)}>
                <div>{name}</div>
                <img
                  className={displayMenu ? "m__logo active" : "m__logo"}
                  src={prefix + "/images/" + logo}
                  alt="mobile operator"
                />
              </ListItem>
            ))
          ) : (
            <ListItem>Список пуст</ListItem>
          )}
        </List>
      </Menu>
    </Section>
  );
}

export default Operators;

const Section = styled.section`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 250px;
  height: 48px;
  position: relative;
  border-radius: 4px;
  background-color: #fefbf3;
  user-select: none;
`;

const Label = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-indent: 16px;
  color: #333;
  &:hover {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    right: 20px;
    top: calc(50% - 7px);
    display: block;
    content: "";
    height: 14px;
    width: 14px;
    border-bottom: 4px solid #333;
    border-left: 4px solid #333;
    border-radius: 2px;
    transform: rotate(135deg);
    transition: all linear 0.2s;
  }
  &.active:after {
    transition: all easy-in 0.2s;
    top: calc(50% - 11px);
    transform: rotate(-45deg);
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 8px 0px 0px;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;

  list-style: none;

  &.active {
    display: block;

    @keyframes flicker {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      15% {
        opacity: 0.2;
      }
      30% {
        opacity: 0.9;
      }
      50% {
        opacity: 0.1;
      }
      70% {
        opacity: 0.7;
      }
      80% {
        opacity: 0.2;
      }
      90% {
        opacity: 0.9;
      }
      95% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    animation: flicker 1s 1;
  }
`;

const ListItem = styled.li`
  padding: 0;
  margin: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-indent: 16px;
  color: #555;
  list-style-type: none;

  border-top: 2px solid #ddd;
  background-color: #fefbf3;

  transition: all linear 0.1s;
  overflow: hidden;

  &:hover {
    transition: all linear 0.1s;
    cursor: pointer;
    text-indent: 24px;
    color: #222;
  }

  :first-of-type {
    border: 0;
    border-radius: 4px 4px 0px 0px;
  }
  :last-of-type {
    border-radius: 0px 0px 4px 4px;
  }

  .m__logo {
    display: block;
    height: 24px;
    width: 24px;

    transition: all linear 0.1s;
    opacity: 0;
    margin-right: -40px;

    &.active {
      @keyframes delayIcon {
        0% {
          opacity: 0;
        }
        80% {
          opacity: 0;
          margin-right: 10px;
        }
        81% {
          opacity: 0.2;
          margin-right: 0px;
        }
        100% {
          opacity: 1;
          margin-right: 20px;
        }
      }
      animation: delayIcon 1.3s 1;
      opacity: 1;
      margin-right: 20px;
    }

    &:hover {
      transition: all linear 0.1s;
      width: 28px;
      height: 28px;
    }
  }
`;
