import { useEffect, useState } from 'react';
import './App.css';

function Select(props) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(() => props.options.map((p, i) => ({ id: i, ...p })));
    const selectedOption = options.filter((p) => p.selected);

    return (
        <>
            <div
                className='select'
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((p) => !p);
                }}
            >
                <div className='select-selected'>
                    {selectedOption.length > 0 ? selectedOption.map((v) => v.text).join(', ') : 'Select an option'}
                </div>
            </div>
            <div className={`select-options${open ? ' open' : ''}`}>
                <ul>
                    {options.map(({ value, text, selected, disabled }, i) => (
                        <li
                            key={i}
                            className={`${selected ? 'selected' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOptions((p) => {
                                    if (props.multiple)
                                        return p.map((p) => (p.id === i ? { ...p, selected: !p.selected } : p));
                                    else
                                        return p.map((p) =>
                                            p.id === i ? { ...p, selected: !p.selected } : { ...p, selected: false }
                                        );
                                });
                                if (!props.multiple) setOpen(false);
                            }}
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

function App() {
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
            <div className='element'>
                <label>Select</label>
                <Select
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
            </div>
            <div className='element'>
                <label>Multi Select</label>
                <Select
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
            </div>
        </>
    );
}

export default App;
