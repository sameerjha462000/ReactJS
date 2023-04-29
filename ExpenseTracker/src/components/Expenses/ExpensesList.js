import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList  = (props) => {
    const length = props.items.length;

    if(length === 0) return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    
    // If we are here that means length > 0
    return (
        <ul className='expenses-list'>
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    );

}


export default ExpensesList;