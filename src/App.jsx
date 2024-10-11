import { useEffect, useState } from 'react';
import './App.css';
import Sel from 'react-select';

function Select(props) {
    const { isOpen, onToggle } = props;
    const [options, setOptions] = useState(() => props.options.map((p, i) => ({ id: i, ...p })));
    const selectedOptions = options.filter((p) => p.selected);

    useEffect(() => {
        const clickEvent = (e) => onToggle(null);
        document.addEventListener('click', clickEvent);
        return () => document.removeEventListener('click', clickEvent);
    }, []);

    return (
        <>
            {props.label && <label>{props.label}</label>}
            <div
                className='dropdown'
                data-open={isOpen}
                style={{ zIndex: isOpen ? 15 : 10 }}
                onClick={(e) => e.stopPropagation()}
                tabIndex={0} // Makes the dropdown tabbable
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        // Toggles the dropdown on Enter or Space key
                        e.preventDefault();
                        props.onToggle();
                    }
                }}
            >
                <div className='dropdown-toggle' onClick={(e) => onToggle()}>
                    <div className='dropdown-selected'>
                        {selectedOptions.length > 0
                            ? props.multiple
                                ? selectedOptions.map((v) => v.text).join(', ')
                                : selectedOptions[0].text
                            : 'Select an option'}
                    </div>
                </div>

                {isOpen && (
                    <div className='dropdown-options'>
                        <ul>
                            {options.map(({ value, text, selected, disabled }, index) => (
                                <li
                                    key={index}
                                    className={`dropdown-option${selected ? ' selected' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        setOptions((prevOptions) => {
                                            if (props.multiple) {
                                                return prevOptions.map((option, idx) =>
                                                    idx === index ? { ...option, selected: !option.selected } : option
                                                );
                                            } else {
                                                return prevOptions.map((option, idx) =>
                                                    idx === index
                                                        ? { ...option, selected: !option.selected }
                                                        : { ...option, selected: false }
                                                );
                                            }
                                        });

                                        if (!props.multiple) onToggle();
                                    }}
                                >
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

function App() {
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const handleDropdownToggle = (dropdownId) => {
        if (dropdownId === null) setOpenDropdownId(null);
        else setOpenDropdownId((prevId) => (prevId === dropdownId ? null : dropdownId));
    };

    return (
        <>
            <div className='element'>
                <label>Text</label>
                <input type='text' placeholder='Placeholder' />
            </div>
            <div className='element'>
                <label>Number</label>
                <input type='number' placeholder='Placeholder' min={0} max={10} />
            </div>
            <Select
                label='Select'
                isOpen={openDropdownId === 1}
                onToggle={(v = 1) => handleDropdownToggle(v)}
                multiple={false}
                options={[
                    { value: 'naruto', text: 'Naruto', selected: false, disabled: false },
                    { value: 'sasuke', text: 'Sasuke', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false }
                ]}
            />
            <Select
                label='Multi Select'
                isOpen={openDropdownId === 2}
                onToggle={(v = 2) => handleDropdownToggle(v)}
                multiple={true}
                options={[
                    { value: 'naruto', text: 'Naruto', selected: false, disabled: false },
                    { value: 'sasuke', text: 'Sasuke', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunade', text: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', text: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', text: 'Kakashi', selected: false, disabled: false }
                ]}
            />
            <Sel
                options={[
                    { value: 'naruto', label: 'Naruto', selected: false, disabled: false },
                    { value: 'sasuke', label: 'Sasuke', selected: false, disabled: false },
                    { value: 'tsunade', label: 'tsunade', selected: false, disabled: false },
                    { value: 'hinata', label: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashi', label: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunadef', label: 'tsunade', selected: false, disabled: false },
                    { value: 'hinatag', label: 'Hinata', selected: false, disabled: false },
                    { value: 'kakashri', label: 'Kakashi', selected: false, disabled: false },
                    { value: 'tsunadgre', label: 'tsunade', selected: false, disabled: false },
                    { value: 'hinagta', label: 'Hinata', selected: false, disabled: false },
                    { value: 'kakahshi', label: 'Kakashi', selected: false, disabled: false }
                ]}
            />
        </>
    );
}

export default App;
