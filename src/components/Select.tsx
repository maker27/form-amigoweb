import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import styled from 'styled-components';
import LabeledField from './LabeledField';
import selectIcon from '../images/select-icon.svg';
import { focusNextFormElement, onEnterPress } from '../utils';

const SelectWrapper = styled.div`
    width: 100%;
`;

interface SelectHeaderProps {
    active: boolean;
}

const SelectHeader = styled.div.attrs(() => ({ tabIndex: 0 }))<SelectHeaderProps>`
    position: relative;
    width: 100%;
    height: 52px;
    padding: 16px 57px 15px 16px;
    background: #ffffff;
    border: ${props => (props.active ? '2px solid #0880ae' : '1px solid #dbe2ea')};
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    font-size: 16px;
    line-height: 21px;
    color: #2c2738;
    user-select: none;

    &:empty::before {
        content: attr(data-placeholder);
        color: #7c9cbf;
    }

    &:active {
        border: 2px solid #0880ae;
    }

    &::after {
        content: '';
        position: absolute;
        top: 11px;
        right: 11px;
        width: 30px;
        height: 30px;
        background: url(${selectIcon}) no-repeat;
    }
`;

const SelectListContainer = styled.div`
    position: relative;
    height: 0;
`;

const StyledSelectList = styled.ul`
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    padding: 11px 0;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
`;

const SelectListItem = styled.li<SelectHeaderProps>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    list-style: none;
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    cursor: pointer;
    background: ${props => (props.active ? '#ebf4f8' : 'none')};
`;

interface SelectListProps {
    selectedOption: number;
    options: string[];
    onOptionClicked: (index: number) => () => void;
}

const SelectList: React.FC<SelectListProps> = ({ selectedOption, options, onOptionClicked }) => {
    return (
        <SelectListContainer>
            <StyledSelectList>
                {options.map((option, i) => (
                    <SelectListItem active={selectedOption === i} onClick={onOptionClicked(i)} key={i}>
                        {option}
                    </SelectListItem>
                ))}
            </StyledSelectList>
        </SelectListContainer>
    );
};

interface SelectProps {
    label: string;
    placeholder?: string;
    options: string[];
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
}

const Select: React.FC<SelectProps> = ({
    label,
    placeholder = '--- select ---',
    options,
    value,
    setValue
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(prevState => !prevState);

    const onOptionClicked = useCallback(
        (index: number) => () => {
            if (options[index]) setValue(index);
            setIsOpen(false);
        },
        [options, setValue]
    );

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const key = e.key || e.code;
            if (key === 'ArrowUp') {
                setValue(prevIndex => Math.max(0, prevIndex - 1));
            } else if (key === 'ArrowDown') {
                setValue(prevIndex => Math.min(options.length - 1, prevIndex + 1));
            } else {
                onEnterPress(e, () => focusNextFormElement(e));
            }
        },
        [options, setValue]
    );

    return (
        <SelectWrapper>
            <LabeledField label={label}>
                <SelectHeader
                    active={isOpen}
                    data-placeholder={placeholder}
                    onClick={toggleOpen}
                    onKeyDown={onKeyDown}>
                    {options[value] || ''}
                </SelectHeader>
            </LabeledField>
            {isOpen && (
                <SelectList selectedOption={value} options={options} onOptionClicked={onOptionClicked} />
            )}
        </SelectWrapper>
    );
};

export default Select;
