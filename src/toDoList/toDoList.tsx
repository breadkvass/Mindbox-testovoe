import { FormEvent, useState } from 'react';
import styles from './toDoList.module.css';
import ChevronDown from '../icons/chevronDown/chevronDown';
import ChevronUp from '../icons/chevronUp/chevronUp';
import ArrowRight from '../icons/arrowRight/arrowRight';
import { activeTasksPlurals } from '../utils';
import { CustomRadioButton } from '../customRadioButton/customRadioButton';

type Task = {
  title: string,
  isDone: boolean,
  id: number
}

const initialState = [
    {
        title: 'Тестовое задание',
        isDone: false,
        id: 1
    },
    {
        title: 'Прекрасный код',
        isDone: false,
        id: 2
    },
    {
        title: 'Покрытие тестами',
        isDone: false,
        id: 3
    }
]

function ToDoList() {
    const [ toDoList, setToDoList ] = useState<Task[]>(initialState)
    const [ isListVisible, setIsListVisible ] = useState(true);
    const [ inputValue, setInputValue ] = useState('');
    const [ selectedFilter, setSelectedFilter ] = useState<'all' | 'completed' | 'active'>('all');

    const activeTasks = toDoList.filter(task => task.isDone === false);

    const taskStyle = (isDone: boolean) => {
        return isDone ? styles.task + ' ' + styles.done : styles.task;
    }

    const changeVisibleListHandler = () => {
        setIsListVisible(!isListVisible);
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        setToDoList([...toDoList, {
            title: inputValue,
            isDone: false,
            id: toDoList.length + 1
        }]);
        setInputValue('');
    }

    function toggleIsDone(id: number) {
        setToDoList(toDoList.map(task => task.id === id ? {...task, isDone: !task.isDone} : task))
    }

    const deleteCompletedTasks = () => {
        setToDoList(toDoList.filter(task => task.isDone === false));
    }

    const filtredList = () => {
        let listToShow = toDoList;

        if (selectedFilter === 'active') {
            listToShow = listToShow.filter(task => task.isDone === false)
        }

        if (selectedFilter === 'completed') {
            listToShow = listToShow.filter(task => task.isDone === true)
        }

        return listToShow;
    }

    const tasksList = filtredList();

    const activeTasksLength = activeTasksPlurals(activeTasks.length);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>todos</h3>
            <div className={styles.todolist}>
                <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
                    {isListVisible
                        ? <ChevronUp onClickHandler={() => changeVisibleListHandler()} />
                        : <ChevronDown  onClickHandler={() => changeVisibleListHandler()} />
                    }
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Что нужно сделать?'
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    {inputValue && 
                    <button type='submit'>
                        <ArrowRight />
                    </button>
                    }
                </form>
                {toDoList && isListVisible &&
                    <ul className={styles.list}>
                        {tasksList.map((item) => 
                            <li key={item.id}>
                                <div className={styles.item}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        id={`${item.id}_${item.title}`}
                                        name='todo'
                                        checked={item.isDone}
                                        onChange={() => toggleIsDone(item.id)}
                                    />
                                    <label htmlFor={`${item.id}_${item.title}`} className={taskStyle(item.isDone)}>{item.title}</label>
                                </div>
                            </li>
                        )}
                    </ul>
                }
                <div className={styles.params}>
                    <p className={styles.active}>{activeTasksLength}</p>
                    <div className={styles.filters}>
                        <CustomRadioButton 
                            label='Все'
                            selected = {selectedFilter === 'all'}
                            onSelect={() => setSelectedFilter('all')}
                        />
                        <CustomRadioButton 
                            label='Активные'
                            selected = {selectedFilter === 'active'}
                            onSelect={() => setSelectedFilter('active')}
                        />
                        <CustomRadioButton 
                            label='Завершённые'
                            selected = {selectedFilter === 'completed'}
                            onSelect={() => setSelectedFilter('completed')}
                        />
                    </div>
                    <button className={styles.clear} onClick={() => deleteCompletedTasks()}>Очистить завершённые</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;