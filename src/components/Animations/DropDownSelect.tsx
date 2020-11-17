import { UNITS } from '@/store/reducers/items';
import React from 'react';
import styled from 'styled-components';

import DropDownIcon from '@/components/common/icons/DropDownIcon';
import useToggle from './common/hooks/useToggle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  valueUnit: string;
  setValueUnit: (value: string) => void;
  text? :string;
}

const DropDownSelect: React.FC<InputProps> = ({
  valueUnit,
  setValueUnit,
  text = '',
}) => {
  const [isActive, setActive] = useToggle();

  const changeUnit = (value: string) => () => setValueUnit(value);

  return (
    <>
      <Label>
        <Span>{text}</Span>
        <Option isActive={isActive} onClick={setActive}>
          <SelectWrap>
            <ContainerName>{valueUnit}</ContainerName>
            <IconDropDown isActive={isActive}>
              <DropDownIcon />
            </IconDropDown>
          </SelectWrap>
          <DropDown>
            {Object.values(UNITS).map((option) => (
              <DropDownItems
                key={option}
                onClick={changeUnit(option)}
                statusHover={option === valueUnit}
              >
                {option}
              </DropDownItems>
            ))}
          </DropDown>
        </Option>
      </Label>
    </>
  );
};

const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #21272e;
  position: absolute;
  top: -2px;
  left: 10px;
  padding: 0 2px 0 6px;
  background-color: white;
`;

const Label = styled.label`
  height: 75px;
  width: 100%;
  position: relative;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #21272e;
`;

const IconDropDown = styled.div<{isActive: boolean}>`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: 0.5s ease;
  transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : 'rotate(0)'} ;
`;

const ContainerName = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #21272e;
`;
1
const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 17px;
  width: 100%;
`;

const DropDownItems = styled.div<{statusHover: boolean}>`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 44px;
  letter-spacing: normal;
  color: #21272e;
  width: 100%;
  height: 44px;
  background-color: ${({ statusHover }) => (statusHover ? '#f5f6f7' : ' #ffffff')};
  padding: 0 17px;
`;

const DropDown = styled.div`
  padding: 8px 0;
  border-radius: 6px;
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  z-index: 110;
  top: 70px;
  left: 0;
  border: solid 1px #dae1e8;
`;

const Option = styled.div<{ isActive: boolean }>`
  height: 56px;
  border-radius: 8px;
  background-color: #ffffff;
  padding-right: 14px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
  display: flex;
  border: ${({ isActive }) => (isActive ? 'solid 1px #3897ff' : 'solid 1px #dae1e8')};

  ${DropDown} {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  };
`;

export default DropDownSelect;
